import os, json, html
root = "."
projects = []
for name in sorted(os.listdir(root)):
    p = os.path.join(root, name)
    if not os.path.isdir(p) or name.startswith("."): continue
    if os.path.exists(os.path.join(p, "index.html")):
        projects.append(name)
json.dump(projects, open("projects.json","w"), indent=1)
print(len(projects), "projects")
for p in projects: print(" ", p)
