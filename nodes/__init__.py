import os
from glob import glob
import importlib
from .base import node_lib

__all__ = ["node_lib"]

# do the following to trigger imports of all the nodes
for pyfile in glob(os.path.join("core","*","*.py"), root_dir=os.path.dirname(__file__)):
    dirname, pyfilename = os.path.split(pyfile)
    modname = os.path.splitext(pyfilename)[0]
    dirnames = os.path.split(dirname)
    importlib.import_module(f"nodes.{'.'.join(dirnames)}.{modname}")
pass
