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

module.exports = function(RED) {
    "use strict";
    var ws = require("ws");
    var inspect = require("util").inspect;
    var url = require("url");
    var HttpsProxyAgent = require('https-proxy-agent');
    const { getProxyForUrl } = require('./lib/proxyHelper');

    var serverUpgradeAdded = false;
    function handleServerUpgrade(request, socket, head) {
        const pathname = url.parse(request.url).pathname;
        if (listenerNodes.hasOwnProperty(pathname)) {
            listenerNodes[pathname].server.handleUpgrade(request, socket, head, function done(ws) {
                listenerNodes[pathname].server.emit('connection', ws, request);
            });
        } else {
            // Don't destroy the socket as other listeners may want to handle the
            // event.
        }
    }
    var listenerNodes = {};

    // A node red node that sets up a local websocket server
    function WebSocketListenerNode(n) {
        // Create a RED node
        RED.nodes.createNode(this,n);
        var node = this;

        // Store local copies of the node configuration (as defined in the .html)
        node.path = n.path;
        if (typeof n.subprotocol === "string") {
            // Split the string on comma and trim each result
            node.subprotocol = n.subprotocol.split(",").map(v => v.trim())
        } else {
            node.subprotocol = [];
        }
        node.wholemsg = (n.wholemsg === "true");

        node._inputNodes = [];    // collection of nodes that want to receive events
        node._clients = {};
        // match absolute url
        node.isServer = !/^ws{1,2}:\/\//i.test(node.path);
        node.closing = false;
        node.tls = n.tls;
        node.upgradeHeaders = n.headers

        if (n.hb) {
            var heartbeat = parseInt(n.hb);
            if (heartbeat > 0) {
                node.heartbeat = heartbeat * 1000;
            }
        }

        function startconn() {    // Connect to remote endpoint
            node.tout = null;
            const prox = getProxyForUrl(node.brokerurl, RED.settings.proxyOptions);
            let agent = undefined;
            if (prox) {
                agent = new HttpsProxyAgent(prox);
            }

            var options = {};
            if (agent) {
                options.agent = agent;
            }
            if (node.tls) {
                var tlsNode = RED.nodes.getNode(node.tls);
                if (tlsNode) {
                    tlsNode.addTLSOptions(options);
                }
            }

            // We need to check if undefined, to guard against previous installs, that will not have had this property set (applies to 3.1.x setups)
            // Else this will be breaking potentially
            if(node.upgradeHeaders !== undefined && node.upgradeHeaders.length > 0){
                options.headers = {};
                for(let i = 0;i<node.upgradeHeaders.length;i++){
                    const header = node.upgradeHeaders[i];
                    const keyType = header.keyType;
                    const keyValue = header.keyValue;
                    const valueType = header.valueType;
                    const valueValue = header.valueValue;
                    
                    const headerName = keyType === 'other' ? keyValue : keyType;
                    let headerValue;
                    
                    switch(valueType){
                        case 'other':
                            headerValue = valueValue;
                            break;
                            
                        case 'env':
                            headerValue = RED.util.evaluateNodeProperty(valueValue,valueType,node);
                            break;

                        default:
                            headerValue = valueType;
                            break;
                    }

                    if(headerName && headerValue){
                        options.headers[headerName] = headerValue
                    }

                }
            }

            var socket = new ws(node.path,node.subprotocol,options);
            socket.setMaxListeners(0);
            node.server = socket; // keep for closing
            handleConnection(socket);
        }

        function handleConnection(/*socket*/socket) {
            var id = RED.util.generateId();
            socket.nrId = id;
            socket.nrPendingHeartbeat = false;
            if (node.isServer) {
                node._clients[id] = socket;
                node.emit('opened',{count:Object.keys(node._clients).length,id:id});
            }
            socket.on('open',function() {
                if (!node.isServer) {
                    if (node.heartbeat) {
                        clearInterval(node.heartbeatInterval);
                        node.heartbeatInterval = setInterval(function() {
                            if (socket.nrPendingHeartbeat) {
                                // No pong received
                                socket.terminate();
                                socket.nrErrorHandler(new Error("timeout"));
                                return;
                            }
                            socket.nrPendingHeartbeat = true;
                            try {
                                socket.ping();
                            } catch(err) {}
                        },node.heartbeat);
                    }
                    node.emit('opened',{count:'',id:id});
                }
            });
            socket.on('close',function() {
                clearInterval(node.heartbeatInterval);
                if (node.isServer) {
                    delete node._clients[id];
                    node.emit('closed',{count:Object.keys(node._clients).length,id:id});
                } else {
                    node.emit('closed',{count:'',id:id});
                }
                if (!node.closing && !node.isServer) {
                    clearTimeout(node.tout);
                    node.tout = setTimeout(function() { startconn(); }, 3000); // try to reconnect every 3 secs... bit fast ?
                }
            });
            socket.on('message',function(data,flags) {
                node.handleEvent(id,socket,'message',data,flags);
            });
            socket.nrErrorHandler = function(err) {
                clearInterval(node.heartbeatInterval);
                node.emit('erro',{err:err,id:id});
                if (!node.closing && !node.isServer) {
                    clearTimeout(node.tout);
                    node.tout = setTimeout(function() { startconn(); }, 3000); // try to reconnect every 3 secs... bit fast ?
                }
            }
            socket.on('error',socket.nrErrorHandler);
            socket.on('ping', function() {
                socket.nrPendingHeartbeat = false;
            })
            socket.on('pong', function() {
                socket.nrPendingHeartbeat = false;
            })
        }

        if (node.isServer) {
            if (!serverUpgradeAdded) {
                RED.server.on('upgrade', handleServerUpgrade);
                serverUpgradeAdded = true
            }

            var path = RED.settings.httpNodeRoot || "/";
            path = path + (path.slice(-1) == "/" ? "":"/") + (node.path.charAt(0) == "/" ? node.path.substring(1) : node.path);
            node.fullPath = path;

            if (listenerNodes.hasOwnProperty(path)) {
                node.error(RED._("websocket.errors.duplicate-path",{path: node.path}));
                return;
            }
            listenerNodes[node.fullPath] = node;
            var serverOptions = {
                noServer: true
            }
            if (RED.settings.webSocketNodeVerifyClient) {
                serverOptions.verifyClient = RED.settings.webSocketNodeVerifyClient;
            }
            // Create a WebSocket Server
            node.server = new ws.Server(serverOptions);
            node.server.setMaxListeners(0);
            node.server.on('connection', handleConnection);
            // Not adding server-initiated heartbeats yet
            // node.heartbeatInterval = setInterval(function() {
            //     node.server.clients.forEach(function(ws) {
            //         if (ws.nrPendingHeartbeat) {
            //             // No pong received
            //             ws.terminate();
            //             ws.nrErrorHandler(new Error("timeout"));
            //             return;
            //         }
            //         ws.nrPendingHeartbeat = true;
            //         ws.ping();
            //     });
            // })
        }
        else {
            node.closing = false;
            startconn(); // start outbound connection
        }

        node.on("close", function(done) {
            if (node.heartbeatInterval) {
                clearInterval(node.heartbeatInterval);
            }
            if (node.isServer) {
                delete listenerNodes[node.fullPath];
                node.server.close();
                node._inputNodes = [];
                done();
            }
            else {
                node.closing = true;
                node.server.close();
                //wait 20*50 (1000ms max) for ws to close. 
                //call done when readyState === ws.CLOSED (or 1000ms, whichever comes fist)
                const closeMonitorInterval = 20;
                let closeMonitorCount = 50;
                let si = setInterval(() => {
                    if(node.server.readyState === ws.CLOSED || closeMonitorCount <= 0) {
                        if (node.tout) {
                            clearTimeout(node.tout);
                            node.tout = null;
                        }
                        clearInterval(si);
                        return done();
                    }
                    closeMonitorCount--;
                }, closeMonitorInterval);
            }
        });
    }
    RED.nodes.registerType("websocket-listener",WebSocketListenerNode);
    RED.nodes.registerType("websocket-client",WebSocketListenerNode);

    WebSocketListenerNode.prototype.registerInputNode = function(/*Node*/handler) {
        this._inputNodes.push(handler);
    }

    WebSocketListenerNode.prototype.removeInputNode = function(/*Node*/handler) {
        this._inputNodes.forEach(function(node, i, inputNodes) {
            if (node === handler) {
                inputNodes.splice(i, 1);
            }
        });
    }

    WebSocketListenerNode.prototype.handleEvent = function(id,/*socket*/socket,/*String*/event,/*Object*/data,/*Object*/flags) {
        var msg;
        if (this.wholemsg) {
            try {
                msg = JSON.parse(data);
                if (typeof msg !== "object" && !Array.isArray(msg) && (msg !== null)) {
                    msg = { payload:msg };
                }
            }
            catch(err) {
                msg = { payload:data };
            }
        } else {
            msg = {
                payload:data
            };
        }
        msg._session = {type:"websocket",id:id};
        for (var i = 0; i < this._inputNodes.length; i++) {
            this._inputNodes[i].send(msg);
        }
    }

    WebSocketListenerNode.prototype.broadcast = function(data) {
        if (this.isServer) {
            for (let client in this._clients) {
                if (this._clients.hasOwnProperty(client)) {
                    try {
                        this._clients[client].send(data);
                    } catch(err) {
                        this.warn(RED._("websocket.errors.send-error")+" "+client+" "+err.toString())
                    }
                }
            }
        }
        else {
            try {
                this.server.send(data);
            } catch(err) {
                this.warn(RED._("websocket.errors.send-error")+" "+err.toString())
            }
        }
    }

    WebSocketListenerNode.prototype.reply = function(id,data) {
        var session = this._clients[id];
        if (session) {
            try {
                session.send(data);
            }
            catch(e) { // swallow any errors
            }
        }
    }

    function WebSocketInNode(n) {
        RED.nodes.createNode(this,n);
        this.server = (n.client)?n.client:n.server;
        var node = this;
        this.serverConfig = RED.nodes.getNode(this.server);
        if (this.serverConfig) {
            this.serverConfig.registerInputNode(this);
            // TODO: nls
            this.serverConfig.on('opened', function(event) {
                node.status({
                    fill:"green",shape:"dot",text:RED._("websocket.status.connected",{count:event.count}),
                    event:"connect",
                    _session: {type:"websocket",id:event.id}
                });
            });
            this.serverConfig.on('erro', function(event) {
                node.status({
                    fill:"red",shape:"ring",text:"common.status.error",
                    event:"error",
                    _session: {type:"websocket",id:event.id}
                });
            });
            this.serverConfig.on('closed', function(event) {
                var status;
                if (event.count > 0) {
                    status = {fill:"green",shape:"dot",text:RED._("websocket.status.connected",{count:event.count})};
                } else {
                    status = {fill:"red",shape:"ring",text:"common.status.disconnected"};
                }
                status.event = "disconnect";
                status._session = {type:"websocket",id:event.id}
                node.status(status);
            });
        } else {
            this.error(RED._("websocket.errors.missing-conf"));
        }
        this.on('close', function() {
            if (node.serverConfig) {
                node.serverConfig.removeInputNode(node);
            }
            node.status({});
        });
    }
    RED.nodes.registerType("websocket in",WebSocketInNode);

    function WebSocketOutNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.server = (n.client)?n.client:n.server;
        this.serverConfig = RED.nodes.getNode(this.server);
        if (!this.serverConfig) {
            return this.error(RED._("websocket.errors.missing-conf"));
        }
        else {
            // TODO: nls
            this.serverConfig.on('opened', function(event) {
                node.status({
                    fill:"green",shape:"dot",text:RED._("websocket.status.connected",{count:event.count}),
                    event:"connect",
                    _session: {type:"websocket",id:event.id}
                });
            });
            this.serverConfig.on('erro', function(event) {
                node.status({
                    fill:"red",shape:"ring",text:"common.status.error",
                    event:"error",
                    _session: {type:"websocket",id:event.id}
                })
            });
            this.serverConfig.on('closed', function(event) {
                var status;
                if (event.count > 0) {
                    status = {fill:"green",shape:"dot",text:RED._("websocket.status.connected",{count:event.count})};
                } else {
                    status = {fill:"red",shape:"ring",text:"common.status.disconnected"};
                }
                status.event = "disconnect";
                status._session = {type:"websocket",id:event.id}
                node.status(status);
            });
        }
        this.on("input", function(msg, nodeSend, nodeDone) {
            var payload;
            if (this.serverConfig.wholemsg) {
                var sess;
                if (msg._session) { sess = JSON.stringify(msg._session); }
                delete msg._session;
                payload = JSON.stringify(msg);
                if (sess) { msg._session = JSON.parse(sess); }
            }
            else if (msg.hasOwnProperty("payload")) {
                if (!Buffer.isBuffer(msg.payload)) { // if it's not a buffer make sure it's a string.
                    payload = RED.util.ensureString(msg.payload);
                }
                else {
                    payload = msg.payload;
                }
            }
            if (payload) {
                if (msg._session && msg._session.type == "websocket") {
                    node.serverConfig.reply(msg._session.id,payload);
                } else {
                    node.serverConfig.broadcast(payload,function(error) {
                        if (!!error) {
                            node.warn(RED._("websocket.errors.send-error")+inspect(error));
                        }
                    });
                }
            }
            nodeDone();
        });
        this.on('close', function() {
            node.status({});
        });
    }
    RED.nodes.registerType("websocket out",WebSocketOutNode);
}
