import pymupdf, os, json, glob, sys

BOOKS = {
    "alphabet-curriculum": "DOC-20261013-WA0002.pdf",
    "letter-positions-abrar": "DOC-20261013-WA0004.pdf",
    "letter-positions-jannat": "DOC-20261013-WA0005.pdf",
    "tajweed-curriculum": "DOC-20261013-WA0006.pdf",
    "hamza-wasl-qata": "Untitled.pdf",
    "i-love-islam": "Untitled2.pdf",
}
arabic = [f for f in glob.glob("*.pdf") if f not in BOOKS.values()]
BOOKS["arabic-alphabet-teacher-noha"] = arabic[0]

manifest = {}
texts = {}
for slug, fn in BOOKS.items():
    out = os.path.join("assets", "books", slug)
    os.makedirs(out, exist_ok=True)
    doc = pymupdf.open(fn)
    manifest[slug] = len(doc)
    texts[slug] = []
    for i, page in enumerate(doc):
        w = page.rect.width
        scale = 900 / w
        pix = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale))
        pix.save(os.path.join(out, "p%03d.jpg" % (i + 1)), jpg_quality=72)
        texts[slug].append((page.get_text() or "").strip().replace("\n", " | ")[:140])
    print(slug, len(doc), flush=True)

with open("scratch/manifest.json", "w", encoding="utf-8") as f:
    json.dump(manifest, f)
with open("scratch/page_texts.json", "w", encoding="utf-8") as f:
    json.dump(texts, f, ensure_ascii=False, indent=0)
print("DONE")
