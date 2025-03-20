from nodes.base import node

import csv as csvlib
from io import StringIO

class csv(node):
    async def input(self, msg:dict):
        f = StringIO(msg['payload'])
        if self.definition["hdrin"]:
            for line in csvlib.DictReader(f):
                out = msg.copy()
                out["payload"] = line
                await self.send(out)
        else:
            for line in csvlib.reader(f, delimiter=self.definition["sep"]):
                out = msg.copy()
                out["payload"] = line
                await self.send(out)
        f.close()