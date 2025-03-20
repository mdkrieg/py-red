from nodes.base import node
from lib.editor_api import register_node_route
import asyncio

class HTTPIn(node):
    register_type_name = "http in"
    async def start(self):
        register_node_route(self)
    async def input(self, msg):
        return await self.send(msg)

class HTTPOut(node):
    register_type_name = "http response"
    async def input(self, msg):
        if "payload" in msg:
            return msg["payload"]
        else:
            return "no payload"
