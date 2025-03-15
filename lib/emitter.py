class Emitter:
    def __init__(self):
        self.events:dict[list] = {}
    def on(self, event, callback):
        if not event in self.events:
            self.events[event] = [callback]
        else:
            self.events[event].append(callback)
    def trigger(self, event, *args):
        if not event in self.events:
            return
        for callback in self.events[event]:
            callback(*args)