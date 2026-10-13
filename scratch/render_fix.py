import pymupdf, os, shutil, glob

noha = [f for f in glob.glob("*.pdf") if f.startswith("\u0627\u0644\u062d")][0]
BOOKS = {
    "arabic-alphabet-teacher-noha": noha,
    "madani-qaida": "06-Madni Qaida English-1.pdf",
}
shutil.rmtree("assets/books/arabic-alphabet-teacher-noha", ignore_errors=True)
for slug, fn in BOOKS.items():
    out = os.path.join("assets", "books", slug)
    os.makedirs(out, exist_ok=True)
    doc = pymupdf.open(fn)
    for i, page in enumerate(doc):
        s = 900 / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(s, s))
        pix.save(os.path.join(out, "p%03d.jpg" % (i + 1)), jpg_quality=72)
    print(slug, len(doc), flush=True)
print("DONE")
