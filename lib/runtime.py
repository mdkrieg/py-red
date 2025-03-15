import json
import asyncio
import time
import lib.logger as logger
from jsonata import Jsonata
from lib.emitter import Emitter

emitter = Emitter()
flows = dict()
ws = None

class node:
    def __init__(self, n:dict):
        self.update_def(n)
        self.id:str = n["id"]
        self.events = {}
    def update_def(self, n:dict):
        self.definition = n.copy()
    def on(self, event, callback):
        if not event in self.events:
            self.events[event] = [callback]
        else:
            self.events[event].append(callback)
    def trigger(self, event, *args):
        if not event in self.events: return
        for e in self.events[event]: e(*args)
    def enable(self):
        self.definition["active"] = True
    def disable(self):
        self.definition["active"] = False
    async def status(self, data):
        ws.send(json.dumps(data))
    def attach_wires(self):
        # REFACTOR: can probably do this in the load_flows routine using on("send")
        if not "wires" in self.definition:
            return
        self.wires:list[node] = [[flows[w] for w in pin] for pin in self.definition["wires"]]
    async def send(self, msg):
        for pin in self.wires:
            for cs in pin:
                await cs.input(msg)
                # asyncio.create_task(cs.input(msg))
    async def input(self, *args):
        self.trigger("input", *args)
        # placeholder, should be overwritten by node types
        pass

class inject(node):
    async def input(self):
        if self.definition["payloadType"] == "date":
            payload = int(time.time()*1000)
        else:
            payload = self.definition["payload"]
        msg = {
            "topic": self.definition["topic"],
            "payload": payload
        }
        asyncio.create_task(self.send(msg))
    async def interval(self):
        if self.definition["once"]:
            await asyncio.sleep(float(self.definition["onceDelay"]))
            await self.input()
        if self.definition["repeat"]:
            repeat = float(self.definition["repeat"])
            while True:
                await asyncio.sleep(repeat)
                asyncio.create_task(self.input())
    def attach_loop(self, task):
        self.task = task
    def cancel_loop(self):
        if hasattr(self, "task"):
            self.task.cancel()

logger.todo("not sure what the tab node needs to do, maybe nothing?? probably just ignorant tho")
class tab(node):
    def __init__(self,n):
        self.definition = n

class debug(node):
    async def input(self, msg):
        # REFACTOR: (maybe not, but) can make all this use on("input") instead
        await super().input(msg)
        if not self.definition["active"]:
            return
        # determine output message
        out = None
        if "targetType" in self.definition:
            targetType = self.definition["targetType"]
        else:
            targetType = "msg"
        if targetType == "msg":
            complete = self.definition["complete"]
            if not complete or complete == "false":
                complete = "payload"
            out = msg[complete]
        elif targetType == "full":
            out = msg
        elif targetType == "jsonata":
            # REFACTOR: (good idea) create this expression when the flow deploys instead of every send
            expression = Jsonata(self.definition["complete"])
            out = expression.evaluate(msg)
        # send to console 
        if self.definition['console']:
            logger.info(f"[debug:{self.definition['name']}]", json.dumps(out))
        # prepare UI message
        out = msg["payload"]
        ui_msg = [{
            "topic": "debug",
            "data": {
                "id": self.id,
                "z": self.definition["z"],
                "path": self.definition["z"],
                "name": self.definition["name"],
                "topic": msg["topic"],
                "property": "payload",
                "msg": out,
                "format": "string"
            }
        }]
        # append status text if applicable
        if self.definition["statusVal"]:
            ui_msg.append({
                "topic":f"status/{self.definition['id']}",
                "data":{
                    "fill": "grey",
                    "shape": "dot",
                    "text": out
                }
            })
        # send message to ui
        if not ws is None:
            ws.send(json.dumps(ui_msg))

# grab all the classes that extend the node class
node_classes = dict()
for key, val in locals().copy().items():
    if val.__class__ != type or val == node:
        continue
    if issubclass(val, node):
        node_classes[key] = val

def load_flows(flows_data = None):
    global flows
    flows = dict()
    if flows_data is None:
        with open("flows.json", "r", encoding="utf-8") as f:
            flows_data = json.load(f)
    else:
        emitter.trigger("stop")
    # organize the flow data into a dictionary of ID's with their usable classes
    for n in flows_data:
        if not n["type"] in node_classes:
            raise Exception(f"invalid node encountered {n['type']}")
        flows[n["id"]] = node_classes[n["type"]](n)
    # attach the wires, has to be done in a second loop so all the nodes are existing
    for n in flows.values():
        n.attach_wires()
    emitter.trigger("deploy")

def update_flows(flows_data):
    load_flows(flows_data)
    with open("flows.json", "w", encoding="utf-8") as f:
        json.dump(flows_data, f, indent=4)

def attach_websocket(w):
    global ws
    ws = w

def stop_injectors():
    for n in flows.values():
        if isinstance(n, inject):
            n.cancel_loop()

emitter.on("stop", stop_injectors)
load_flows()