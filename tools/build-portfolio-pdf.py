# -*- coding: utf-8 -*-
"""Rebuild assets/files/Mohamad-Hasan-Portfolio.pdf from assets/js/data.js + images/.

Usage:  python tools/build-portfolio-pdf.py
Needs:  node (to read data.js), Chrome (to print), Pillow.
Run tools/fetch-fonts.py once to produce tools/fonts.css."""
import base64, io, json, os, html, subprocess, sys, tempfile
from PIL import Image


def read_data_js():
    """data.js declares consts, so eval it in node and hand the objects back as JSON."""
    js = ("eval(require('fs').readFileSync(process.argv[1],'utf8')"
          " + ';globalThis.__d={PROFILE,CONTENT,PROJECTS};');"
          "process.stdout.write(JSON.stringify(globalThis.__d));")
    src = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                       "assets", "js", "data.js")
    r = subprocess.run(["node", "-e", js, src], capture_output=True)
    if r.returncode:
        sys.exit("node failed reading data.js:\n" + r.stderr.decode("utf-8", "replace"))
    return r.stdout.decode("utf-8")

CONTENT_MM = 178.0   # page width minus the 16mm side margins
SHOT_MM    = 76.0    # tallest a screenshot band is allowed to get

SP   = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SP)
D    = json.loads(read_data_js())
PROF, EN, PROJ = D["PROFILE"], D["CONTENT"]["en"], D["PROJECTS"]

def shot_html(pid, cap=SHOT_MM):
    """Size the frame to the image itself, so the border hugs it and nothing letterboxes."""
    for ext in (".jpg", ".png"):
        p = os.path.join(ROOT, "images", "projects", pid + ext)
        if not os.path.exists(p):
            continue
        with Image.open(p) as im:
            ratio = im.width / float(im.height)
        h = min(cap, CONTENT_MM / ratio)
        mime = "jpeg" if ext == ".jpg" else "png"
        uri = "data:image/%s;base64,%s" % (mime, base64.b64encode(open(p, "rb").read()).decode())
        return ('<div class="shot" style="width:%.1fmm;height:%.1fmm"><img src="%s"></div>'
                % (h * ratio, h, uri))
    return ""

e = html.escape

PARTS = [
    ("Part one", "flutter", "Flutter", "Mobile Apps",
     "Five cross-platform mobile applications &mdash; offline-first architecture, local SQLite/Drift "
     "databases, Bluetooth thermal printing, barcode scanning, Firebase push, maps and payments, "
     "and device-bound subscription licensing. Arabic-first (RTL) and multi-market."),
    ("Part two", "laravel", "Laravel", "Backends &amp; Platforms",
     "Four backend platforms built on Laravel 12 / PHP 8.2 &mdash; clean service layers, policy-based "
     "authorization, versioned REST APIs powering Flutter apps and React SPAs, financial and "
     "accounting modules, and a large-scale multi-vendor marketplace built with DDD."),
    ("Part three", "embedded", "Embedded", "&amp; Hardware",
     "Three microcontroller systems that run in the physical world &mdash; a call-to-prayer controller "
     "installed in a mosque, a Wi-Fi home automation node, and a multi-rotor UAV built from the "
     "frame up. Where the engineering degree meets the software career."),
]

CSS = """
@page { size: A4; margin: 0; }
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --bg: #080b12; --surface: #111827; --line: #1f2a41; --line2: #172033;
  --ink: #e8eefc; --mut: #93a3bf; --dim: #6b7c9b;
  --accent: #4dd4ff; --accent2: #a78bfa;
  --flutter: #54c5f8; --laravel: #ff5c47; --embedded: #5ee39a;
}
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: "Inter", "Segoe UI", sans-serif; color: var(--ink);
       font-size: 9.2pt; line-height: 1.55; background: var(--bg); }
h1, h2, h3, .num, .stat-n, .plist .n { font-family: "Space Grotesk", "Segoe UI", sans-serif; }

.page { position: relative; width: 210mm; height: 297mm; overflow: hidden;
        page-break-after: always; background: var(--bg);
        padding: 15mm 16mm 12mm; }
.page:last-child { page-break-after: auto; }
.page::before { content: ""; position: absolute; inset: 0; z-index: 0;
  background: radial-gradient(900px 620px at 78% -8%, rgba(77,212,255,.10), transparent 62%),
              radial-gradient(760px 560px at -12% 108%, rgba(167,139,250,.09), transparent 60%); }
.page > * { position: relative; z-index: 1; }

/* ---------- cover ---------- */
.cover { display: flex; flex-direction: column; justify-content: center; padding: 15mm 18mm; }
.eyebrow { font-size: 7.6pt; letter-spacing: .30em; text-transform: uppercase;
           color: var(--accent); font-weight: 600; }
.cover h1 { font-size: 41pt; line-height: 1.04; font-weight: 700; margin: 10pt 0 0; letter-spacing: -.02em; }
.cover h1 span { color: var(--accent); }
.cover .role { font-size: 14pt; color: #b9c8e4; font-weight: 500; margin-top: 9pt; }
.rule { width: 58pt; height: 2.6pt; background: var(--accent); margin: 15pt 0 14pt; border-radius: 2pt; }
.cover p { color: var(--mut); font-size: 10pt; line-height: 1.72; max-width: 128mm; }
.stats { display: flex; gap: 15mm; margin-top: 22pt; }
.stat-n { font-size: 24pt; font-weight: 700; color: #fff; line-height: 1; }
.stat-l { font-size: 7pt; letter-spacing: .17em; text-transform: uppercase; color: var(--dim); margin-top: 5pt; }
.cover-foot { position: absolute; left: 18mm; right: 18mm; bottom: 15mm; display: flex;
              justify-content: space-between; align-items: flex-end; font-size: 8.4pt; color: var(--mut); }
.cover-foot b { color: var(--accent); font-weight: 600; }
.cover-foot .tech { text-align: right; color: var(--dim); font-size: 8pt; line-height: 1.7; }

/* ---------- part divider ---------- */
.part { display: flex; flex-direction: column; justify-content: center; }
.part h2 { font-size: 36pt; line-height: 1.06; font-weight: 700; margin: 12pt 0 0; letter-spacing: -.02em; }
.part h2 em { font-style: normal; color: var(--mut); }
.part .lead { color: var(--mut); font-size: 10pt; line-height: 1.72; max-width: 120mm; margin-top: 4pt; }
.plist { margin-top: 26pt; border-top: 1px solid var(--line); }
.plist div { display: flex; gap: 12pt; align-items: baseline; padding: 8.5pt 0;
             border-bottom: 1px solid var(--line2); font-size: 10.5pt; }
.plist .n { color: var(--accent); font-weight: 600; font-size: 8.6pt; letter-spacing: .1em; min-width: 22pt; }
.plist .t { font-weight: 600; }
.plist .s { margin-left: auto; color: var(--dim); font-size: 8.4pt; }

/* ---------- project page ---------- */
.phead { display: flex; justify-content: space-between; align-items: baseline;
         padding-bottom: 7pt; border-bottom: 1px solid var(--line); }
.phead .k { font-size: 7.4pt; letter-spacing: .26em; text-transform: uppercase; color: var(--accent); font-weight: 600; }
.phead .d { font-size: 7.8pt; color: var(--dim); }
.title-row { display: flex; align-items: center; gap: 10pt; margin-top: 13pt; }
.badge { font-size: 7.2pt; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
         padding: 3.4pt 8pt; border-radius: 20pt; color: #05101c; white-space: nowrap; }
.badge.flutter  { background: var(--flutter); }
.badge.laravel  { background: var(--laravel); color: #fff; }
.badge.embedded { background: var(--embedded); }
.title-row h2 { font-size: 19pt; font-weight: 700; letter-spacing: -.015em; }
.native { font-size: 12pt; color: var(--mut); font-family: "Segoe UI", sans-serif; }
.tagline { color: var(--accent); font-size: 10pt; font-style: italic; font-weight: 500; margin-top: 8pt; }
.blurb { color: #c2cfe6; font-size: 9.2pt; line-height: 1.68; margin-top: 8pt; }

.shot { margin: 12pt auto 0; border: 1px solid var(--line); border-radius: 7pt; overflow: hidden;
        background: #0b0f19; line-height: 0; }
.shot img { width: 100%; height: 100%; object-fit: cover; display: block; }

.cols { display: flex; gap: 7mm; margin-top: 12pt; align-items: flex-start; }
.box { flex: 1; background: rgba(17,24,39,.62); border: 1px solid var(--line2);
       border-radius: 8pt; padding: 9pt 11pt 11pt; }
.box h3 { font-size: 7.4pt; letter-spacing: .2em; text-transform: uppercase; color: var(--accent);
          font-weight: 700; margin-bottom: 7pt; }
.box h3.v { color: var(--accent2); margin-top: 11pt; }
.box ul { list-style: none; }
.box li { position: relative; padding-left: 10pt; margin-bottom: 4.4pt; font-size: 8.5pt;
          line-height: 1.5; color: #cbd7ec; }
.box li::before { content: ""; position: absolute; left: 0; top: 5pt; width: 3.4pt; height: 3.4pt;
                  border-radius: 50%; background: var(--accent); opacity: .8; }
.chips { display: flex; flex-wrap: wrap; gap: 4.5pt; }
.chip { font-size: 7.8pt; padding: 3pt 7pt; border: 1px solid var(--line); border-radius: 5pt;
        color: #bccbe4; background: rgba(8,11,18,.5); }
.chip.lead { border-color: rgba(77,212,255,.5); color: var(--accent); }
.hl { font-size: 8.4pt; line-height: 1.58; color: #b6c5de; }

.meta { display: flex; flex-wrap: wrap; gap: 4pt 16pt; margin-top: 11pt; font-size: 8.2pt; color: var(--dim); }
.meta b { color: #cfdcf2; font-weight: 600; }
.pfoot { position: absolute; left: 16mm; right: 16mm; bottom: 11mm; display: flex; justify-content: space-between;
         font-size: 7.2pt; letter-spacing: .14em; text-transform: uppercase; color: #55658a;
         border-top: 1px solid var(--line2); padding-top: 7pt; }

/* ---------- closing ---------- */
.end { display: flex; flex-direction: column; justify-content: center; }
.end h2 { font-size: 38pt; line-height: 1.08; font-weight: 700; letter-spacing: -.02em; margin-top: 10pt; }
.end h2 span { color: var(--accent); }
.end p { color: var(--mut); font-size: 10.5pt; line-height: 1.7; max-width: 112mm; margin-top: 16pt; }
.links { margin-top: 26pt; border-top: 1px solid var(--line); }
.links div { display: flex; padding: 9pt 0; border-bottom: 1px solid var(--line2); font-size: 9.5pt; }
.links .l { width: 26mm; color: var(--dim); font-size: 7.6pt; letter-spacing: .18em;
            text-transform: uppercase; padding-top: 2.5pt; }
.links .v { color: var(--accent); font-weight: 500; }

/* EvoTech carries roughly twice the copy of any other project; tighten that page only */
.dense .blurb { font-size: 8.8pt; line-height: 1.6; }
.dense .shot  { margin-top: 10pt; }
.dense .cols  { margin-top: 10pt; }
.dense .box   { padding: 8pt 10pt 9pt; }
.dense .box li { font-size: 8pt; line-height: 1.44; margin-bottom: 3.6pt; }
.dense .chip  { font-size: 7.4pt; padding: 2.4pt 6pt; }
.dense .hl    { font-size: 7.9pt; line-height: 1.5; }
.dense .meta  { margin-top: 9pt; }
.box.wide { margin-top: 8pt; }
.box.wide h3.v { margin-top: 0; }
"""

def chips(tech):
    return "".join('<span class="chip%s">%s</span>' % (" lead" if i == 0 else "", e(t))
                   for i, t in enumerate(tech))

def project_page(p):
    d, cat = p["en"], p["cat"]
    weight = len(d["blurb"]) + len(d["highlights"]) + sum(len(f) for f in d["features"])
    dense = weight > 1300
    shot = shot_html(p["id"], 58.0 if dense else SHOT_MM)
    native = '<span class="native">%s</span>' % e(d["native"]) if d.get("native") else ""
    hl = '<h3 class="v">Engineering highlights</h3><div class="hl">%s</div>' % e(d["highlights"])
    # a long highlights block makes the right column overrun the page; give it its own full-width row
    right, below = ("", '<div class="box wide">%s</div>' % hl) if dense else (hl, "")
    label = {"flutter": "Flutter", "laravel": "Laravel", "embedded": "Embedded"}[cat]
    tag = "%s &middot; Project %s" % (label, p["num"])
    if p.get("flagship"):
        tag += " &middot; Flagship"
    return """
<section class="page%s">
  <div class="phead"><div class="k">%s</div><div class="d">%s</div></div>
  <div class="title-row"><span class="badge %s">%s</span><h2>%s</h2>%s</div>
  <div class="tagline">%s</div>
  <div class="blurb">%s</div>
  %s
  <div class="cols">
    <div class="box"><h3>Key features</h3><ul>%s</ul></div>
    <div class="box">
      <h3>Tech stack</h3><div class="chips">%s</div>
      %s
    </div>
  </div>
  %s
  <div class="meta">%s</div>
  <div class="pfoot"><span>Mohamad Hasan &mdash; Portfolio</span><span>%s</span></div>
</section>""" % (
        " dense" if dense else "",
        tag, e(d["kicker"]), cat, e(p["badge"]), e(d["title"]), native,
        e(d["tagline"]), e(d["blurb"]), shot,
        "".join("<li>%s</li>" % e(f) for f in d["features"]),
        chips(p["tech"]), right, below,
        "".join("<span>%s: <b>%s</b></span>" % (e(k), e(v)) for k, v in d["meta"]),
        e(d["title"]))

def part_page(kicker, cat, big, small, lead):
    rows = "".join(
        '<div><span class="n">%s</span><span class="t">%s</span><span class="s">%s</span></div>'
        % (e(p["num"]), e(p["en"]["title"]), e(p["badge"]))
        for p in PROJ if p["cat"] == cat)
    return """
<section class="page part">
  <div class="eyebrow">%s</div>
  <h2>%s<br><em>%s</em></h2>
  <div class="rule"></div>
  <div class="lead">%s</div>
  <div class="plist">%s</div>
  <div class="pfoot"><span>Mohamad Hasan &mdash; Portfolio</span><span>%s</span></div>
</section>""" % (e(kicker), big, small, lead, rows, e(kicker))

n_f = sum(1 for p in PROJ if p["cat"] == "flutter")
n_l = sum(1 for p in PROJ if p["cat"] == "laravel")
n_e = sum(1 for p in PROJ if p["cat"] == "embedded")

cover = """
<section class="page cover">
  <div class="eyebrow">Software Development Portfolio</div>
  <h1>Mohamad <span>Hasan</span></h1>
  <div class="role">%s</div>
  <div class="rule"></div>
  <p>%s %s</p>
  <div class="stats">
    <div><div class="stat-n">%d</div><div class="stat-l">Projects</div></div>
    <div><div class="stat-n">%d</div><div class="stat-l">Flutter apps</div></div>
    <div><div class="stat-n">%d</div><div class="stat-l">Laravel backends</div></div>
    <div><div class="stat-n">%d</div><div class="stat-l">Embedded systems</div></div>
  </div>
  <div class="cover-foot">
    <div>Email <b>%s</b></div>
    <div class="tech">Flutter &middot; Dart &middot; Laravel &middot; PHP<br>REST APIs &middot; SQLite &middot; MySQL &middot; Firebase &middot; Arduino</div>
  </div>
</section>""" % (e(PROF["role"]["en"]), e(EN["hero"]["tagline"]), e(EN["hero"]["intro"]),
                 len(PROJ), n_f, n_l, n_e, e(PROF["email"]))

end = """
<section class="page end">
  <div class="eyebrow">Get in touch</div>
  <h2>Let&rsquo;s build<br><span>something.</span></h2>
  <p>Thank you for reviewing my work. I&rsquo;m available for Flutter mobile development,
     Laravel backend engineering and full-stack product delivery.</p>
  <div class="links">
    <div><span class="l">Email</span><span class="v">%s</span></div>
    <div><span class="l">Portfolio</span><span class="v">mohammad-hasan-it-96.github.io</span></div>
    <div><span class="l">GitHub</span><span class="v">github.com/Mohammad-Hasan-it-96</span></div>
    <div><span class="l">Location</span><span class="v">%s</span></div>
  </div>
  <div class="pfoot"><span>Mohamad Hasan &mdash; Software Development Portfolio</span><span>2026</span></div>
</section>""" % (e(PROF["email"]), e(PROF["location"]["en"]))

body = [cover]
for kick, cat, big, small, lead in PARTS:
    body.append(part_page(kick, cat, big, small, lead))
    body += [project_page(p) for p in PROJ if p["cat"] == cat]
body.append(end)

FONTS = io.open(os.path.join(SP, "fonts.css"), encoding="utf-8").read()

doc = ('<!doctype html><html lang="en"><head><meta charset="utf-8">'
       '<title>Mohamad Hasan &mdash; Portfolio</title>'
       '<style>%s</style><style>%s</style></head><body>%s</body></html>'
       % (FONTS, CSS, "".join(body)))

html_path = os.path.join(tempfile.gettempdir(), "portfolio_doc.html")
io.open(html_path, "w", encoding="utf-8").write(doc)
pdf_path = os.path.join(ROOT, "assets", "files", "Mohamad-Hasan-Portfolio.pdf")
print("pages: %d | html: %d KB" % (len(body), len(doc) / 1024))

CHROME = [r"C:\Program Files\Google\Chrome\Application\chrome.exe",
          r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
          "google-chrome", "chromium"]
exe = next((c for c in CHROME if os.path.exists(c) or not c.startswith("C:")), None)
subprocess.run([exe, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                "--virtual-time-budget=30000",
                "--print-to-pdf=" + pdf_path,
                "file:///" + html_path.replace("\\", "/")], check=True,
               capture_output=True)
print("wrote %s (%d KB)" % (pdf_path, os.path.getsize(pdf_path) / 1024))
