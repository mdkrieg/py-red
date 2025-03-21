/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var util = require("util");
var EventEmitter = require("events").EventEmitter;

var redUtil = require("@node-red/util").util;
var Log = require("@node-red/util").log;
var context = require("./context");
var flows = require("../flows");
const hooks = require("@node-red/util").hooks;


const NOOP_SEND = function() {}

/**
 * The Node object is the heart of a Node-RED flow. It is the object that all
 * nodes extend.
 *
 * The Node object itself inherits from EventEmitter, although it provides
 * custom implementations of some of the EE functions in order to handle
 * `input` and `close` events properly.
 */
function Node(n) {
    this.id = n.id;
    this.type = n.type;
    this.z = n.z;
    this.g = n.g;
    this._closeCallbacks = [];
    this._inputCallback = null;
    this._inputCallbacks = null;
    this._expectedDoneCount = 0;

    if (n.name) {
        this.name = n.name;
    }
    if (n._alias) {
        this._alias = n._alias;
    }
    if (n._flow) {
        // Make this a non-enumerable property as it may cause
        // circular references. Any existing code that tries to JSON serialise
        // the object (such as dashboard) will not like circular refs
        // The value must still be writable in the case that a node does:
        //     Object.assign(this,config)
        // as part of its constructor - config._flow will overwrite this._flow
        // which we can tolerate as they are the same object.
        Object.defineProperty(this,'_flow', {value: n._flow, enumerable: false, writable: true })
    }
    if (n._module) {
        Object.defineProperty(this,'_module', {value: n._module, enumerable: false, writable: true })
    }
    if (n._path) {
        Object.defineProperty(this,'_path', {value: n._path, enumerable: false, writable: true })
    }
    this.updateWires(n.wires);
}

util.inherits(Node, EventEmitter);

/**
 * Update the wiring configuration for this node.
 *
 * We try to optimise the message handling path. To do this there are three
 * cases to consider:
 *  1. this node is wired to nothing. In this case we replace node.send with a
 *     NO-OP function.
 *  2. this node is wired to one other node. In this case we set `this._wire`
 *     as a reference to the node it is wired to. This means we avoid unnecessary
 *     iterations over what would otherwise be a 1-element array.
 *  3. this node is wired to multiple things. The normal node.send processing of
 *     this.wires applies.
 *
 * @param  {array} wires the new wiring configuration
 */
Node.prototype.updateWires = function(wires) {
    //console.log("UPDATE",this.id);
    this.wires = wires || [];
    delete this._wire;

    var wc = 0;
    this.wires.forEach(function(w) {
        wc+=w.length;
    });
    this._wireCount = wc;
    if (wc === 0) {
        // With nothing wired to the node, no-op send
        this.send = NOOP_SEND
    } else {
        this.send = Node.prototype.send;
        if (this.wires.length === 1 && this.wires[0].length === 1) {
            // Single wire, so we can shortcut the send when
            // a single message is sent
            this._wire = this.wires[0][0];
        }
    }

}
/**
 * Get the context object for this node.
 *
 * As most nodes do not use context, this is a lazy function that will only
 * create a context instance for the node if it is needed.
 * @return {object} the context object
 */
Node.prototype.context = function() {
    if (!this._context) {
        this._context = context.get(this._alias||this.id,this.z);
    }
    return this._context;
}

/**
 * Handle the complete event for a message
 *
 * @param  {object} msg  The message that has completed
 * @param  {error} error (optional) an error hit whilst handling the message
 */
Node.prototype._complete = function(msg,error) {
    this.metric("done",msg);
    hooks.trigger("onComplete",{ msg: msg, error: error, node: { id: this.id, node: this }}, err => {
        if (err) {
            this.error(err);
        }
    })
    if (error) {
        // For now, delegate this to this.error
        // But at some point, the timeout handling will need to know about
        // this as well.
        this.error(error,msg);
    } else {
        this._flow.handleComplete(this,msg);
    }
}

/**
 * An internal reference to the original EventEmitter.on() function
 */
Node.prototype._on = Node.prototype.on;

/**
 * Register a callback function for a named event.
 * 'close' and 'input' events are handled locally, other events defer to EventEmitter.on()
 */
Node.prototype.on = function(event, callback) {
    var node = this;
    if (event == "close") {
        this._closeCallbacks.push(callback);
    } else if (event === "input") {
        if (callback.length === 3) {
            this._expectedDoneCount++
        }
        if (this._inputCallback) {
            this._inputCallbacks = [this._inputCallback, callback];
            this._inputCallback = null;
        } else if (this._inputCallbacks) {
            this._inputCallbacks.push(callback);
        } else {
            this._inputCallback = callback;
        }
    } else {
        this._on(event, callback);
    }
};

/**
 * An internal reference to the original EventEmitter.emit() function
 */
Node.prototype._emit = Node.prototype.emit;

/**
 * Emit an event to all registered listeners.
 */
Node.prototype.emit = function(event, ...args) {
    var node = this;
    if (event === "input") {
        this._emitInput.apply(this,args);
    } else {
        this._emit.apply(this,arguments);
    }
}

/**
 * Handle the 'input' event.
 *
 * This will call all registered handlers for the 'input' event.
 */
Node.prototype._emitInput = function(arg) {
    var node = this;
    this.metric("receive", arg);
    let receiveEvent = { msg:arg, destination: { id: this.id, node: this } }
    // onReceive - a node is about to receive a message
    hooks.trigger("onReceive",receiveEvent,(err) => {
        if (err) {
            node.error(err);
            return
        } else if (err !== false) {
            if (node._inputCallback) {
                // Just one callback registered.
                try {
                    node._inputCallback(
                        arg,
                        function() { node.send.apply(node,arguments) },
                        function(err) { node._complete(arg,err); }
                    );
                } catch(err) {
                    node.error(err,arg);
                }
            } else if (node._inputCallbacks) {
                // Multiple callbacks registered. Call each one, tracking eventual completion
                var c = node._inputCallbacks.length;
                let doneCount = 0
                for (var i=0;i<c;i++) {
                    var cb = node._inputCallbacks[i];
                    try {
                        cb.call(
                            node,
                            arg,
                            function() { node.send.apply(node,arguments) },
                            function(err) {
                                doneCount++;
                                if (doneCount === node._expectedDoneCount) {
                                    node._complete(arg,err);
                                }
                            }
                        );
                    } catch(err) {
                        node.error(err,arg);
                    }
                }
            }
            // postReceive - the message has been passed to the node's input handler
            hooks.trigger("postReceive",receiveEvent,(err) => {if (err) { node.error(err) }});
        }
    });
}

/**
 * An internal reference to the original EventEmitter.removeListener() function
 */
Node.prototype._removeListener = Node.prototype.removeListener;

/**
 * Remove a listener for an event
 */
Node.prototype.removeListener = function(name, listener) {
    var index;
    if (name === "input") {
        if (listener.length === 3) {
            this._expectedDoneCount--
        }
        if (this._inputCallback && this._inputCallback === listener) {
            // Removing the only callback
            this._inputCallback = null;
        } else if (this._inputCallbacks) {
            // Removing one of many callbacks
            index = this._inputCallbacks.indexOf(listener);
            if (index > -1) {
                this._inputCallbacks.splice(index,1);
            }
            // Check if we can optimise back to a single callback
            if (this._inputCallbacks.length === 1) {
                this._inputCallback = this._inputCallbacks[0];
                this._inputCallbacks = null;
            }
        }
    } else if (name === "close") {
        index = this._closeCallbacks.indexOf(listener);
        if (index > -1) {
            this._closeCallbacks.splice(index,1);
        }
    } else {
        this._removeListener(name, listener);
    }
}

/**
 * An internal reference to the original EventEmitter.removeAllListeners() function
 */
Node.prototype._removeAllListeners = Node.prototype.removeAllListeners;

/**
 * Remove all listeners for an event
 */
Node.prototype.removeAllListeners = function(name) {
    if (name === "input") {
        this._inputCallback = null;
        this._inputCallbacks = null;
    } else if (name === "close") {
        this._closeCallbacks = [];
    } else {
        this._removeAllListeners(name);
    }
}

/**
 * Called when the node is being stopped
 * @param  {boolean} removed Whether the node has been removed, or just being stopped
 * @return {Promise} resolves when the node has closed
 */
Node.prototype.close = function(removed) {
    //console.log(this.type,this.id,removed);
    var promises = [];
    var node = this;
    // Call all registered close callbacks.
    for (var i=0;i<this._closeCallbacks.length;i++) {
        var callback = this._closeCallbacks[i];
        if (callback.length > 0) {
            // The callback takes a 'done' callback and (maybe) the removed flag
            promises.push(
                new Promise((resolve) => {
                    try {
                        var args = [];
                        if (callback.length === 2) {
                            // The listener expects the removed flag
                            args.push(!!removed);
                        }
                        args.push(() => {
                            resolve();
                        });
                        callback.apply(node, args);
                    } catch(err) {
                        // TODO: error thrown in node async close callback
                        // We've never logged this properly.
                        resolve();
                    }
                })
            );
        } else {
            // No done callback so handle synchronously
            try {
                callback.call(node);
            } catch(err) {
                // TODO: error thrown in node sync close callback
                // We've never logged this properly.
            }
        }
    }
    if (promises.length > 0) {
        return Promise.all(promises).then(() => {
            this.removeAllListeners("input")
            if (this._context) {
               return context.delete(this._alias||this.id,this.z);
            }
        });
    } else {
        this.removeAllListeners("input")
        if (this._context) {
            return context.delete(this._alias||this.id,this.z);
        }
        return Promise.resolve();
    }
};

/**
 * Send a message to the nodes wired.
 *
 *
 * @param  {object} msg A message or array of messages to send
 */
Node.prototype.send = function(msg) {
    var msgSent = false;
    var node;

    if (msg === null || typeof msg === "undefined") {
        return;
    } else if (!Array.isArray(msg)) {
        // A single message has been passed in
        if (typeof msg !== 'object') {
            this.error(Log._("nodes.flow.non-message-returned", { type: typeof msg }));
            return
        }
        if (this._wire) {
            // A single message and a single wire on output 0
            // TODO: pre-load flows.get calls - cannot do in constructor
            //       as not all nodes are defined at that point
            if (!msg._msgid) {
                msg._msgid = redUtil.generateId();
            }
            this.metric("send",msg);
            this._flow.send([{
                msg: msg,
                source: {
                    id: this.id,
                    node: this,
                    port: 0
                },
                destination: {
                    id: this._wire,
                    node: undefined
                },
                cloneMessage: false
            }]);
            return;
        } else {
            msg = [msg];
        }
    }

    var numOutputs = this.wires.length;

    // Build a list of send events so that all cloning is done before
    // any calls to node.receive
    var sendEvents = [];

    var sentMessageId = null;
    var hasMissingIds = false;
    // for each output of node eg. [msgs to output 0, msgs to output 1, ...]
    for (var i = 0; i < numOutputs; i++) {
        var wires = this.wires[i]; // wires leaving output i
        /* istanbul ignore else */
        if (i < msg.length) {
            var msgs = msg[i]; // msgs going to output i
            if (msgs !== null && typeof msgs !== "undefined") {
                if (!Array.isArray(msgs)) {
                    msgs = [msgs];
                }
                var k = 0;
                // for each recipent node of that output
                for (var j = 0; j < wires.length; j++) {
                    // for each msg to send eg. [[m1, m2, ...], ...]
                    for (k = 0; k < msgs.length; k++) {
                        var m = msgs[k];
                        if (m !== null && m !== undefined) {
                            if (typeof m !== 'object') {
                                this.error(Log._("nodes.flow.non-message-returned", { type: typeof m }));
                            } else {
                                if (!m._msgid) {
                                    hasMissingIds = true;
                                }
                                /* istanbul ignore else */
                                if (!sentMessageId) {
                                    sentMessageId = m._msgid;
                                }
                                sendEvents.push({
                                    msg: m,
                                    source: {
                                        id: this.id,
                                        node: this,
                                        port: i
                                    },
                                    destination: {
                                        id: wires[j],
                                        node: undefined
                                    },
                                    cloneMessage: msgSent
                                });
                                msgSent = true;
                            }
                        }
                    }
                }
            }
        }
    }
    /* istanbul ignore else */
    if (!sentMessageId) {
        sentMessageId = redUtil.generateId();
    }
    this.metric("send",{_msgid:sentMessageId});

    if (hasMissingIds) {
        for (i=0;i<sendEvents.length;i++) {
            var ev = sendEvents[i];
            /* istanbul ignore else */
            if (!ev.msg._msgid) {
                ev.msg._msgid = sentMessageId;
            }
        }
    }
    this._flow.send(sendEvents);
};

/**
 * Receive a message.
 *
 * This will emit the `input` event with the provided message.
 */
Node.prototype.receive = function(msg) {
    if (!msg) {
        msg = {};
    }
    if (!msg._msgid) {
        msg._msgid = redUtil.generateId();
    }
    this.emit("input",msg);
};

function log_helper(self, level, msg) {
    var o = {
        level: level,
        id: self.id,
        type: self.type,
        msg: msg
    };
    if (self._alias) {
        o._alias = self._alias;
    }

    if (self.z) {
        o.z = self.z;
    }
    if (self.name) {
        o.name = self.name;
    }
    // See https://github.com/node-red/node-red/issues/3327
    // See https://github.com/node-red/node-red/issues/3389

    let srcError;
    if (msg instanceof Error) {
        srcError = msg;//use existing err object for actual stack
    } else {
        srcError = new Error(msg);//generate a new error for generate a stack
    }
    try {
        if(self instanceof Node && self._flow) {
            self._flow.log(o);
        } else {
            //if self._flow is not present, this is not a node-red Node
            //Set info to "Node object is not a node-red Node" to point out the `Node type` problem in log
            logUnexpectedError(self, srcError, "Node object is not a node-red Node")
        }
    } catch(err) {
        //build an unexpected error report indicating using the original error (for better stack trace)
        logUnexpectedError(self, srcError, `An error occured attempting to make a log entry: ${err}`)
    }
}
/**
 * Log an INFO level message
 */
Node.prototype.log = function(msg) {
    log_helper(this, Log.INFO, msg);
};

/**
 * Log a WARN level message
 */
Node.prototype.warn = function(msg) {
    log_helper(this, Log.WARN, msg);
};

/**
 * Log an ERROR level message
 */
Node.prototype.error = function(logMessage,msg) {
    if (typeof logMessage != 'boolean') {
        logMessage = logMessage || "";
    }
    var handled = false;
    if (this._flow && msg && typeof msg === 'object') {
        handled = this._flow.handleError(this,logMessage,msg);
    }
    if (!handled) {
        log_helper(this, Log.ERROR, logMessage);
    }
};

/**
 * Log an DEBUG level message
 */
Node.prototype.debug = function(msg) {
    log_helper(this, Log.DEBUG, msg);
}

/**
 * Log an TRACE level message
 */
Node.prototype.trace = function(msg) {
    log_helper(this, Log.TRACE, msg);
}

/**
 * Log a metric event.
 * If called with no args, returns whether metric collection is enabled
 */
Node.prototype.metric = function(eventname, msg, metricValue) {
    if (typeof eventname === "undefined") {
        return Log.metric();
    }
    var metrics = {};
    metrics.level = Log.METRIC;
    metrics.nodeid = this.id;
    metrics.event = "node."+this.type+"."+eventname;
    metrics.msgid = msg._msgid;
    metrics.value = metricValue;
    Log.log(metrics);
}

/**
 * Set the node's status object
 *
 * status: { fill:"red|green", shape:"dot|ring", text:"blah" }
 * or
 * status: "simple text status"
 */
Node.prototype.status = function(status) {
    switch (typeof status) {
        case "string":
        case "number":
        case "boolean":
            status = {text:""+status}
    }
    this._flow.handleStatus(this,status);
};


function inspectObject(flow) {
    try {
        let properties = new Set()
        let currentObj = flow
        do {
            if (!Object.getPrototypeOf(currentObj)) { break }
            Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
        } while ((currentObj = Object.getPrototypeOf(currentObj)))
        let propList = [...properties.keys()].map(item => `${item}[${(typeof flow[item])[0]}]`)
        propList.sort();
        let result = [];
        let line = "";
        while (propList.length > 0) {
            let prop = propList.shift()
            if (line.length+prop.length > 80) {
                result.push(line)
                line = "";
            } else {
                line += " "+prop
            }
        }
        if (line.length > 0) {
            result.push(line);
        }
        return result.join("\n  ")

    } catch(err) {
        return "Failed to capture object properties: "+err.toString()
    }
}

function logUnexpectedError(node, error, info) {
    const header = `
********************************************************************
Unexpected Node Error
********************************************************************`;

    const footer = `
Please report this issue, including the information logged above:
https://github.com/node-red/node-red/issues/
********************************************************************`;

    let detail = [`Info:\n ${info || 'No additional info'}`];

    //Include Error info?
    if(error && error.stack){
        detail.push(`Stack:\n ${error.stack}`)
    }
    //Include Node info?
    if(node && (node._module || node.type)){
        const moduleInfo = node._module?`${node._module.module}@${node._module.version}`:"undefined";
        const id = node._alias||node.id||"undefined";
        detail.push(`Node:\n Type: ${node.type}\n Module: ${moduleInfo}\n ID: ${id}\n Properties:\n  ${inspectObject(node)}`)
    }
    //Include Flow info?
    if(node && node._flow){
        detail.push(`Flow: ${node._flow.path}\n Type: ${node._flow.TYPE}\n Properties:\n  ${inspectObject(node._flow)}`)
    }
    Log.error(`${header}\n${detail.join("\n")}\n${footer}`);
}

module.exports = Node;
