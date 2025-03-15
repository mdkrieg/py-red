import os
from glob import glob

__all__ = [pyfile for pyfile in glob(os.path.join("*","*.py"))]