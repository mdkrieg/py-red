# py-red
Python implementation of Node-RED

***BETA VERSION* - very much still in early development**

Developed on: (btw - I have no reason to think linux or other modern browsers or python versions wouldn't work, but you never know)
* Windows 10 22H2 (19045.5608)
* Google Chrome Version 134.0.6998.89 (Official Build) (64-bit)
* Python 3.13.2 (64-bit)

**NOTE:** This is still very early development, don't expect this project to do anything useful as of right now.

With that said, if you want to play along, you should be able to just:

`git clone https://github.com/mdkrieg/py-red`

`cd py-red`

`py -m pip install -r requirements.txt`

`py red.py`

Then navigate to http://localhost:5000

## Why?
Two big reasons:
* For fun
* Asyncio: If I'm being honest, every time I try to use asyncio in python I either give up or just guess and check until I have something that sorta works and the solution usually never makes sense to me. But, every time I end up thinking to myself "This would be so easy if I could just use Node-RED's inject model". So, as of today (March 2025) the North Star of this project is just that - create something that lets me use inject nodes for python so I never have to touch asyncio ever agin. Alright then, just serve the Node-RED editor client - the flow is just json handed over via POST after all - then if I can figure out how to implement the injectors (and some other nodes) then I'll be able to do a bunch of cool stuff in python.

The Programmer's Credo: `We do these things not because they are easy, but because we thought they were going to be easy.`

![image](https://github.com/user-attachments/assets/061a3f52-9535-421b-bf35-d6363ee5dd88)

That's why right now, all that works is the Inject and Debug nodes (and not 100% either), and yet I am very proud of this first milestone.

## How?

So far my working philosophy has been this:
* Do not touch the editor-client (taken from Node-RED v4.0.9), serve it as-is and make the backend work how it should.
  * If I have any golden rule, it is this above.
* Figure out what end-points are required and create them in Flask. Curl from a running Node-RED instance when required and figure it out.
* Don't make it perfect. Make it work. (for now)
* Don't just translate JS to python. Understand what's going on and see previous point.
  * soft rule, I expect to dig through the nodejs source eventually

## What next?
Nearest term:
* Move the node implementations into the nodes folder, currently in lib/runtime.py
Near term:
* Finish implementing other nodes
* Hear what others online have to say, would love if this becomes something useful
Far term:
* Why does Flask tell me to not use in production? Need to research what this WSGI thing is... for me though, "production-ready" is not a big concern for my typical use.
