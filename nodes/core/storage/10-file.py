from nodes.base import node

import os

class file(node):
    async def input(self, msg):
        append = ""
        mode = "w"
        if self.definition["overwriteFile"] == "false":
            mode = "a"
        if self.definition["appendNewline"]:
            # append = os.linesep # why do I get two lines when viewing this in notepad or npp on windows 10? thinks I have macintosh CR linefeeds
            append = "\n"
        f = open(self.definition["filename"], mode)
        f.write(str(msg["payload"])+append)
        f.close()
        return await self.send(msg)

class file_in(node):
    register_type_name = "file in"
    async def input(self, msg):
        f = open(self.definition["filename"])
        contents = f.read()
        f.close()
        msg["payload"] = contents
        return await self.send(msg)
