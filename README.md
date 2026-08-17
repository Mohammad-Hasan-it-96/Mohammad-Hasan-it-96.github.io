# Mohamad Hasan — Portfolio

Personal portfolio site. Static HTML/CSS/JS, no build step, hosted on GitHub Pages.

**Live:** https://mohammad-hasan-it-96.github.io/

## Structure

```
index.html                 page shell (meta tags, empty section anchors)
assets/css/style.css       all styling — CSS logical properties, so RTL mirrors for free
assets/js/data.js          ALL content, in English and Arabic. Edit this to update the site.
assets/js/main.js          renders every section from data.js; language toggle, filters, modal
assets/files/              CV and portfolio PDFs offered for download
images/                    profile photo + project screenshots (optional — see images/README.md)
```

## Editing content

Everything the visitor reads lives in `assets/js/data.js`:

- `PROFILE` — name, role, contact details
- `CONTENT.en` / `CONTENT.ar` — all page copy, section by section
- `PROJECTS` — the project list, each with an `en` and `ar` block

Both language trees are edited side by side in the same file, so they can't drift apart.
Adding a project means appending one object to `PROJECTS` — no HTML changes needed.

## Adding images

Drop files into `images/` using the exact filenames listed in `images/README.md`.
Anything missing falls back to a gradient placeholder, so the site never looks broken.

## Local preview

Any static server works, e.g.:

```bash
python -m http.server 8000
```

then open http://localhost:8000

## Deploying

Push to `main`. GitHub Pages serves the repo root — no workflow or build required.
The `.nojekyll` file stops Jekyll from touching the output.
