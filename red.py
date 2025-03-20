# a lot of this should probably be moved to runtime (for conceptual consistency)
# but for now, don't make it perfect, make it work

def launch():
    import lib.runtime as runtime
    from lib.editor_api import app
    import asyncio
    import threading

    import logging
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)

    async def injector_loop():
        tasks = []
        for n in runtime.flows.values():
            if n.nodetype != "inject": continue
            task = asyncio.create_task(n.interval())
            tasks.append(task)
            n.attach_loop(task)
        # loop = asyncio.get_event_loop()
        await asyncio.gather(*tasks, return_exceptions=True)
        # for task in tasks:
        #     task.cancel()
        print("------------ injector loop complete ------------")

    # going to level with you... I do not understand this asyncio stuff at all
    # copy pasted this loop structure from the internet (google AI Overview actually)
    # the injector_loop was by me, but none of the rest of this makes sense to me
    def start_loop(loop):
        asyncio.set_event_loop(loop)
        loop.run_forever()

    def stop_injectors():
        global loop
        loop.stop()
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

    def start_nodes():
        startloop = asyncio.new_event_loop()
        startloop.run_until_complete(start_nodes_async())
        
    async def start_nodes_async():
        tasks = []
        for n in runtime.flows.values():
            if not hasattr(n, "start"): continue
            task = asyncio.create_task(n.start())
            tasks.append(task)
        if len(tasks) == 0:
            return
        asyncio.gather(*tasks)

    def start_injectors():
        global loop # does this need to be global? not sure
        loop = asyncio.new_event_loop()
        t = threading.Thread(name="injector loop", target=start_loop, args=(loop,))
        t.daemon = True
        t.start()
        asyncio.run_coroutine_threadsafe(injector_loop(), loop)

    runtime.emitter.on("stop", stop_injectors)
    runtime.emitter.on("deploy", start_nodes)
    runtime.emitter.on("deploy", start_injectors)
    runtime.emitter.trigger("deploy")

    app.run(debug=True, use_reloader=False)

if __name__ == "__main__":
    launch()