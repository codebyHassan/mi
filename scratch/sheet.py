import os, sys
try:
    from PIL import Image, ImageDraw
except ImportError:
    os.system(sys.executable + " -m pip install pillow")
    from PIL import Image, ImageDraw

def sheet(slug, start, end, cols, name):
    d = os.path.join("assets", "books", slug)
    tw, th = 300, 400
    n = end - start + 1
    rows = (n + cols - 1) // cols
    im = Image.new("RGB", (cols * tw, rows * th), "white")
    dr = ImageDraw.Draw(im)
    for k, p in enumerate(range(start, end + 1)):
        f = os.path.join(d, "p%03d.jpg" % p)
        if not os.path.exists(f):
            continue
        t = Image.open(f)
        t.thumbnail((tw - 6, th - 22))
        x, y = (k % cols) * tw, (k // cols) * th
        im.paste(t, (x + 3, y + 20))
        dr.rectangle([x, y, x + 60, y + 18], fill="red")
        dr.text((x + 4, y + 3), str(p), fill="white")
    im.save("scratch/" + name, quality=70)

if __name__ == "__main__":
    slug = sys.argv[1]
    s, e, c = int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])
    sheet(slug, s, e, c, "sheet_%s_%d.jpg" % (slug, s))
    print("ok")
