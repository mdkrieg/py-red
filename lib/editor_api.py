import os
import re
import json
import time
import asyncio
from glob import glob
from flask import Flask, render_template, render_template_string, request, Response
from flask_sock import Sock
from lib.mustache import mustache_template
import importlib
import lib.runtime as runtime
from html.parser import HTMLParser

theme = {
    "asset": {
        "main": "red/main.min.js",
        "red": "red/red.min.js",
        "vendorMonaco": "vendor/monaco/monaco-bootstrap.js"
    },
    "header": {
        "image": "red/images/node-red.svg",
        "title": "Node-RED"
    },
    "page": {
        "favicon": "favicon.ico",
        "tabicon": {
            "colour": "#8f0000",
            "icon": "red/images/node-red-icon-black.svg"
        },
        "title": "Node-RED"
    },
    "themes": [
    ]
}

user = {
    "editor": {
        "view": {
            "view-store-zoom": False,
            "view-store-position": False,
            "view-show-grid": True,
            "view-snap-grid": True,
            "view-grid-size": 20,
            "view-node-status": True,
            "view-node-show-label": True,
            "view-show-tips": True,
            "view-show-welcome-tours": True
        },
        "tours": {
            "welcome": "4.0.9"
        }
    }
}

app = Flask(
    "py-RED",
    static_folder=os.path.join("editor-client","public"),
    static_url_path="/",
)
sock = Sock(app)

editor_client_path = "editor-client"
runtime_path = "runtime"

class NodeHTMLParser(HTMLParser):
    def __init__(self, contents, convert_charrefs = True):
        super().__init__(convert_charrefs=convert_charrefs)
        self.types = []
        self.feed(contents)
    def handle_starttag(self, tag, attrs):
        if tag == "script":
            attrs = dict(attrs)
            if "data-template-name" in attrs:
                self.types.append(attrs["data-template-name"])

@app.route("/")
def index():
    path = os.path.join(editor_client_path,"templates","index.mst")
    f = open(path)
    src = f.read()
    f.close()
    # is this just theme.json?? -- looks a lil different, might be a quirk of my mustache implementation
    data = {
        "page": {
            "css": [],
            "scripts": "",
            "favicon": "favicon.ico",
            "tabicon": {
                "icon": "red/images/node-red-icon-black.svg",
                "colour": "#8f0000"
            },
            "title": "py-RED"
        },
        "asset": {
            "vendorMonaco": [{
                "asset":{"vendorMonaco":"vendor/monaco/monaco-bootstrap.js"},
                "cacheBuster":"blah2"
            }],
            "red": "red/red.min.js",
            "main": "red/main.min.js"
        },
        "sessionMessages": "",
        "cacheBuster": "blah"
    }
    out = mustache_template(src, data)
    return out

@app.route("/theme")
def theme():
    return theme

@app.route("/settings")
def settings():
    with open("settings.json", "rb") as f:
        return json.load(f)
@app.route("/settings/user")
def user_settings():
    return user

@app.route("/plugins")
def plugins():
    return ""
@app.route("/plugins/messages")
def plugin_messages():
    return {}

@app.route("/nodes")
def nodes():
    accept = request.headers.get("Accept")
    if accept == "application/json":
        nodes = list()
        getname_re = re.compile(r"\d*-?([a-z-]+)\.html?", re.I)
        for nodetemplatepath in glob(os.path.join("nodes","core","*","*.html")):
            name = getname_re.match(os.path.basename(nodetemplatepath)).group(1)
            with open(nodetemplatepath) as f:
                parser = NodeHTMLParser(f.read())
                nodes.append({
                    "id": f"node-red/{name}",
                    "name": name,
                    "types": parser.types or [name],
                    "enabled": True,
                    "local": False,
                    "user": False,
                    "module": "node-red",
                    "version": "4.0.9"
                })
        return nodes
    # elif accept == "text/html":
    else:
        out = bytes()
        for nodetemplatepath in glob(os.path.join("nodes","core","*","*.html")):
            # get the corresponding locale path (help files)
            nodecoresubpath, nodefile = os.path.split(nodetemplatepath)
            nodefolder = os.path.split(nodecoresubpath)[1]
            nodehelppath = os.path.join("nodes","locales","en-US",nodefolder,nodefile)
            out += f"<!-- {nodetemplatepath} -->".encode("utf-8")
            with open(nodetemplatepath, "rb") as f:
                out += f.read()
            if os.path.exists(nodehelppath):
                with open(nodehelppath, "rb") as f:
                    out += f.read()
        return out

@app.route("/nodes/messages")
def node_messages():
    return {}

@app.route("/icons")
def icons():
    out = {
        "node-red": os.listdir(os.path.join("nodes","icons"))
    }
    return out
@app.route("/icons/node-red/<file>")
def icon_files(file):
    with open(os.path.join("nodes", "icons", file), "r", encoding="utf-8") as f:
        res = Response(f.read())
        res.headers["Content-Type"] = "image/svg+xml"
        res.headers["access-control-allow-origin"] = "*"
        return res

@app.route("/debug-utils.js")
@app.route("/debug/view/debug-utils.js")
def debug_utils():
    with open(os.path.join("nodes","core","common","lib","debug","debug-utils.js"), "rb") as f:
        return f.read()

@app.route("/flows", methods=["GET","POST"])
def flows():
    if request.method == "GET":
        with open("flows.json", "r", encoding="utf-8") as f:
            return {"flows":json.load(f)}
    elif request.method == "POST":
        runtime.update_flows(request.json["flows"])
        return "success"

@app.route("/locales/<file>")
def locale(file):
    langmap = {
        "en":"en-US"
    }
    lang = request.args["lng"]

    if lang in langmap:
        lang = langmap[lang]

    if file == "node-red":
        path = os.path.join("nodes","locales",lang,"messages.json")
    else:
        path = os.path.join(editor_client_path,"locales",lang,f"{file}.json")
    
    try:
        with open(path, "rb") as f:
            out = f.read()
    except Exception as e:
        print(e)
        return "file not found", 404
    
    return out

last_hb = time.time()
@sock.route('/comms')
def websocket(ws):
    global last_hb
    start_msg = [
        {
            "topic": "notification/runtime-deploy",
            "data": {
                "revision": "foo"
            }
        },
        {
            "topic": "notification/runtime-state",
            "data": {
                "state": "start"
            }
        },
        {
            "topic": "notification/runtime-deploy",
            "data": {
                "revision": "foo"
            }
        }
    ]
    runtime.attach_websocket(ws)
    ws.send(start_msg)
    while True:
        data = json.loads(ws.receive())
        if "subscribe" in data:
            sub = data['subscribe']
            if sub.startswith("status"):
                ws.send(json.dumps(start_msg))
        print(data)
        # ws.send(dasta)
        if time.time() - last_hb > 3:
            ws.send(json.dumps([{"topic":"hb","data":"foo"}]))
            last_hb = time.time()

@app.route("/inject/<nodeid>",methods=["POST"])
async def inject_node(nodeid):
    await runtime.flows[nodeid].input()
    return "success"

@app.route("/debug/<nodeid>/<state>",methods=["POST"])
def debug_node(nodeid, state):
    debugnode = runtime.flows[nodeid]
    if state == "enable":
        debugnode.enable()
        return "success"
    if state == "disable":
        debugnode.disable()
        return "success"
