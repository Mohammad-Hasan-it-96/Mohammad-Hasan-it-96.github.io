# -*- coding: utf-8 -*-
"""Chrome prints before webfonts finish downloading, so inline them as base64 @font-face."""
import base64, io, json, os, re, urllib.request

SP = os.path.dirname(os.path.abspath(__file__))
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/150.0.0.0 Safari/537.36")   # a modern UA is what makes Google serve woff2
URL = ("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700"
       "&family=Inter:wght@400;500;600;700&display=swap")

def get(u, ua=UA):
    return urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": ua}), timeout=45).read()

css = get(URL).decode("utf-8")
out, kept = [], 0
for block in re.findall(r"@font-face\s*\{[^}]*\}", css):
    if "unicode-range" in block and "U+0000-00FF" not in block:
        continue                                   # latin subset only; Arabic comes from Segoe UI
    fam = re.search(r"font-family:\s*'([^']+)'", block).group(1)
    wgt = re.search(r"font-weight:\s*(\d+)", block).group(1)
    url = re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1)
    data = base64.b64encode(get(url)).decode()
    out.append("@font-face{font-family:'%s';font-style:normal;font-weight:%s;font-display:block;"
               "src:url(data:font/woff2;base64,%s) format('woff2');}" % (fam, wgt, data))
    kept += 1
    print("%-14s %s  %5.1f KB" % (fam, wgt, len(data) * 3 / 4 / 1024))

io.open(os.path.join(SP, "fonts.css"), "w", encoding="utf-8").write("".join(out))
print("faces:", kept, "| fonts.css", round(os.path.getsize(os.path.join(SP, "fonts.css")) / 1024), "KB")
