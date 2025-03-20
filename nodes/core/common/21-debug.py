from nodes.base import node

import json
from jsonata import Jsonata
import lib.logger as logger

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
            if complete in msg:
                out = msg[complete]
            else:
                out = None
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
        # out = msg["payload"]
        if "topic" in msg:
            topic = msg["topic"]
        else:
            topic = None
        ui_msg = [{
            "topic": "debug",
            "data": {
                "id": self.id,
                "z": self.definition["z"],
                "path": self.definition["z"],
                "name": self.definition["name"],
                "topic": topic,
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
        if not self.ws is None:
            if self.ws.connected:
                self.ws.send(json.dumps(ui_msg))