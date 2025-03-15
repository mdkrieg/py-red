from datetime import datetime
import loguru

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

# print(f"{bcolors.WARNING}Warning: No active frommets remain. Continue?{bcolors.ENDC}")

DEBUG = 0
INFO = 1
WARN = 2
ERROR = 3
CRITICAL = 4

level = DEBUG
time_format = "%d %b %y %H:%M:%S"

def timestr():
    return datetime.now().strftime(time_format)

def debug(*msg):
    if level > DEBUG: return
    msg = [timestr(),"-", "[debug]"] + list(msg)
    print(" ".join(msg))

def info(*msg):
    if level > INFO: return
    msg = [timestr(),"-", "[info]"] + list(msg)
    print(" ".join(msg))

def warn(*msg):
    if level > WARN: return
    msg = [timestr(),"-", "[warn]"] + list(msg)
    print(" ".join(msg))

def error(*msg):
    if level > ERROR: return
    msg = [timestr(),"-", "[error]"] + list(msg)
    print(" ".join(msg))

def todo(*msg):
    msg = ["---TODO---"] + list(msg)
    loguru.logger.warning(" ".join(msg))

todo("remove this function... eventually.... or decide if loguru is something we want as a dependency")