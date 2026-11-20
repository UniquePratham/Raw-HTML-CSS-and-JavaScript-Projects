import os, json, urllib.parse

projects = json.load(open("projects.json"))
ICONS = {
 "Anisha Pratham": "&#127968;", "Backend": "&#9881;&#65039;", "CV Screener": "&#128196;",
 "Calculator": "&#128290;", "Car Animation": "&#128663;", "Chat App": "&#128172;",
 "CoOk the BoOk": "&#128218;", "Dictionary": "&#128214;", "Dragon Travels": "&#128009;",
 "FreshShresh": "&#128240;", "KeyBoard": "&#9000;&#65039;", "Live-Action": "&#127918;",
 "Magic Notes": "&#128221;", "MeriGrocery": "&#128722;", "MsgBies": "&#128241;",
 "PostMan": "&#128231;", "Responsive": "&#128241;", "SnakeMania": "&#128013;",
 "Spotify App": "&#127925;", "Spotify Clone": "&#127911;", "Tic Tac Toe Game": "&#10060;",
 "Tic Tac Toe Project": "&#11036;", "Tranparent Login": "&#128273;", "Win11": "&#128187;",
}
def icon(name):
    for k,v in ICONS.items():
        if name.startswith(k): return v
    return "&#128193;"

cards = []
for p in projects:
    href = urllib.parse.quote(p) + "/index.html"
    cards.append(f'''    <a class="card" href="{href}">
      <span class="icon">{icon(p)}</span>
      <span class="name">{p}</span>
      <span class="go">Open &rarr;</span>
    </a>''')

page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Vanilla HTML / CSS / JS Projects</title>
<style>
  :root {{ color-scheme: dark; }}
  * {{ box-sizing: border-box; }}
  body {{
    margin: 0; min-height: 100vh; padding: 3rem 1.25rem;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background: radial-gradient(circle at 15% 0%, #1e293b, #0b1120 55%);
    color: #e2e8f0;
  }}
  .wrap {{ max-width: 1080px; margin: 0 auto; }}
  h1 {{ font-size: clamp(1.7rem, 4vw, 2.5rem); margin: 0 0 .5rem; letter-spacing: -.02em; }}
  .sub {{ color: #94a3b8; margin: 0 0 2.5rem; line-height: 1.6; max-width: 62ch; }}
  .grid {{
    display: grid; gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }}
  .card {{
    display: flex; flex-direction: column; gap: .5rem;
    padding: 1.25rem; border-radius: 1rem; text-decoration: none;
    background: rgba(30, 41, 59, .65); border: 1px solid #1e293b;
    color: inherit; transition: transform .15s ease, border-color .15s ease, background .15s ease;
  }}
  .card:hover {{
    transform: translateY(-3px); border-color: #38bdf8;
    background: rgba(30, 41, 59, .95);
  }}
  .icon {{ font-size: 1.6rem; line-height: 1; }}
  .name {{ font-weight: 600; font-size: 1rem; line-height: 1.35; }}
  .go {{ font-size: .8rem; color: #38bdf8; margin-top: auto; }}
  footer {{ margin-top: 3rem; font-size: .85rem; color: #64748b; }}
</style>
</head>
<body>
<div class="wrap">
  <h1>Vanilla HTML / CSS / JavaScript Projects</h1>
  <p class="sub">
    {len(projects)} self-contained mini projects, each built with plain HTML, CSS and
    JavaScript &mdash; no frameworks, no build step. Pick one to open it.
  </p>
  <div class="grid">
{chr(10).join(cards)}
  </div>
  <footer>Each project lives in its own folder and runs directly in the browser.</footer>
</div>
</body>
</html>
'''
open("index.html","w",encoding="utf-8",newline="\n").write(page)
print("index.html bytes:", len(page))
