import os
import json
from lib.emitter import Emitter
import asyncio

node_lib = {}

class Meta(type):
    def __new__(cls, name, bases, attrs):
        new_class = super().__new__(cls, name, bases, attrs)
        # style choice to stay compatible with the JS version, convert names from Underscore to Hypen
        if hasattr(new_class, "register_type_name"):
            name = new_class.register_type_name
        # add self to library
        if name != "node":
            node_lib[name] = new_class
        # add some useful attributes
        new_class.modpath = new_class.__module__.split(".")
        new_class.modname = new_class.modpath[-1].split("-")[-1]
        new_class.nodetype = name
        return new_class

class node(Emitter, metaclass=Meta):
    def __init__(self, n:dict):
        self.update_def(n)
        self.id:str = n["id"]
        self.ws = None
        self.wires = []
        Emitter.__init__(self)
    def update_def(self, n:dict):
        self.definition = n.copy()
    def enable(self):
        self.definition["active"] = True
    def disable(self):
        self.definition["active"] = False
    async def status(self, data):
        self.ws.send(json.dumps(data))
    def attach_websocket(self, ws):
        self.ws = ws
    # async def send(self, msg):
    #     self.trigger("send", msg) # temporary, not sure how far I want to go down the emitter rabbit hole, it will get tricky with the mix of async and sync
    #     for group in self.wires:
    #         for recipient in group:
    #             await recipient.input(msg)
    
    async def send(self, msg):
        self.trigger("send", msg) # temporary, not sure how far I want to go down the emitter rabbit hole, it will get tricky with the mix of async and sync
        tasks = []
        for group in self.wires:
            for recipient in group:
                task = asyncio.create_task(recipient.input(msg))
                tasks.append(task)
        responses = await asyncio.gather(*tasks, return_exceptions=True)
        return responses
    async def input(self, *args):
        self.trigger("input", *args)
        # placeholder, should be overwritten by node types
        pass

# logger.todo("not sure what the tab node needs to do, maybe nothing?? probably just ignorant tho")
class tab(node):
    pass