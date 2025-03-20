from nodes.base import node

import time
import asyncio

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
            # await self.input()
            asyncio.create_task(self.input())
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
