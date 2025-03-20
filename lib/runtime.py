import json
import asyncio
import time
import lib.logger as logger
from jsonata import Jsonata
from lib.emitter import Emitter
from nodes import *

emitter = Emitter()
flows = dict()

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
        if not n["type"] in node_lib:
            raise Exception(f"invalid node encountered {n['type']}")
        flows[n["id"]] = node_lib[n["type"]](n)
    # attach the wires, has to be done in a second loop so all the nodes are existing
    for n in flows.values():
        # n.attach_wires()
        if not "wires" in n.definition: continue
        n.wires = [[flows[id] for id in group] for group in n.definition["wires"]]
    emitter.trigger("deploy")

def update_flows(flows_data):
    load_flows(flows_data)
    with open("flows.json", "w", encoding="utf-8") as f:
        json.dump(flows_data, f, indent=4)

def attach_websocket(ws):
    for instance in flows.values():
        instance.attach_websocket(ws)

def stop_injectors():
    for n in flows.values():
        if n.definition["type"] == "inject":
            n.cancel_loop()

emitter.on("stop", stop_injectors)
load_flows()