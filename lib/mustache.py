# So far I've only used this to template index.mst
# Eventually, would need something for templates node
# I tried a couple of the off-the-shelf libraries in pypi but they didn't work for me (not sure why)
# found this to be a fun exercise in recursion so I went for it
# TODO: build actual tokenizer instead of using regex
import re

re_nest_op = re.compile(r"{{\#\s*([a-z\d\.]*)\s*}}(.*?){{\/\s*\1\s*}}", re.I + re.S)
re_triple = re.compile(r"{{{\s*([a-z\d\.]*)\s*}}}", re.I)
re_double = re.compile(r"{{\s*([a-z\d\.]*)\s*}}", re.I)

def getval(ref:str, data:str|dict, default = ""):
    if ref == ".":
        return data
    lref = ref.split(".")
    key = lref.pop(0)
    if not key in data:
        return default
    if len(lref) > 0:
        return getval(".".join(lref), data[key])
    return data[key]


def mustache_template(content:str, data):
    def handleNest(subcontent, datalist:list):
        out = ""
        for d in datalist:
            out += mustache_template(subcontent, d)
        return out
    
    order_of_ops = [
        (re_nest_op, lambda hit, data: handleNest(hit.group(2), getval(hit.group(1), data))),
        (re_triple, lambda hit, data: getval(hit.group(1), data)),
        (re_double, lambda hit, data: getval(hit.group(1), data)),
    ]

    for regex, evaluator in order_of_ops:
        working = ""
        cursor = 0
        for hit in regex.finditer(content):
            span_op, span_cl = hit.span()
            mid = evaluator(hit, data)
            working += content[cursor:span_op] + mid
            cursor = span_cl
        working += content[cursor:]
        content = working
    
    return content

# used this to reverese-engineer the paths used in index.msd
# handy function so I'm keeping it around
def evaluate_paths(content:str):
    data = {}
    def merge_dicts_recursive(dict1, dict2):
        for key in dict2:
            if key in dict1:
                if isinstance(dict1[key], dict) and isinstance(dict2[key], dict):
                    merge_dicts_recursive(dict1[key], dict2[key])
                elif dict1[key] != dict2[key]:
                    raise Exception(f"Conflict at key: {key}")
            else:
                dict1[key] = dict2[key]
        return dict1

    def logpath(ref:str|list):
        out = {}
        if ref == "." or ref == "":
            return str()
        lref = ref.split(".")
        key = lref.pop(0)
        out[key] = logpath(".".join(lref))
        return out
    
    order_of_ops = [
        (re_nest_op, lambda hit: [logpath(hit.group(1))]),
        (re_triple, lambda hit: logpath(hit.group(1))),
        (re_double, lambda hit: logpath(hit.group(1))),
    ]

    for regex, evaluator in order_of_ops:
        for hit in regex.finditer(content):
            part = evaluator(hit)
            data = merge_dicts_recursive(data, part)

    return data

    

if __name__ == "__main__":
    # print("\n")
    import os
    path = os.path.join("editor-client","templates","index.mst")
    f = open(path)
    src = f.read()
    f.close()
    data = {
        "page":{
            "title":"pyflow"
        }
    }
    foo = mustache_template(src, data)
    print(foo)
    # data = evaluate_paths(src)
    # import json
    # print("\n" + json.dumps(data, indent=4))