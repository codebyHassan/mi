import pymupdf, os, json, glob

PDF = {
    "madani-qaida": "06-Madni Qaida English-1.pdf",
    "alphabet-curriculum": "DOC-20261013-WA0002.pdf",
    "letter-positions-abrar": "DOC-20261013-WA0004.pdf",
    "letter-positions-jannat": "DOC-20261013-WA0005.pdf",
    "tajweed-curriculum": "DOC-20261013-WA0006.pdf",
    "hamza-wasl-qata": "Untitled.pdf",
    "i-love-islam": "Untitled2.pdf",
    "arabic-alphabet-teacher-noha": [
        f for f in glob.glob("*.pdf")
        if f.startswith("\u0627\u0644\u062d")
    ][0],
}

META = {
    "madani-qaida": {
        "title": "Madani Qaida English",
        "subtitle": "القاعدة المدنية",
        "author": "Dawateislami",
        "description": "The classic Madani Qaida for beginners: Arabic letter recognition, joining letters, Harakat, Tanween, Madd and the rules of reading the Holy Quran, step by step in English.",
        "order": 1,
    },
    "arabic-alphabet-teacher-noha": {
        "title": "Arabic Letters for Non-Arabs",
        "subtitle": "الحروف العربية للأعاجم",
        "author": "Teacher Noha Abd El-Hameed",
        "description": "A colourful, illustrated introduction to the Arabic alphabet and its letter forms specially designed for non-Arab learners.",
        "order": 8,
    },
    "alphabet-curriculum": {
        "title": "Arabic Alphabet",
        "subtitle": "الحروف الهجائية",
        "author": "Instructor Abdurrahman Mustafa",
        "description": "Letter recognition, positions and connecting letters, followed by the complete Harakat system: Fathah, Kasrah, Dhammah, Sukoon, Tanween, Shaddah, Huroof-ul-Madd and Leen.",
        "order": 2,
    },
    "letter-positions-abrar": {
        "title": "Letter Positions",
        "subtitle": "أشكال الحروف في الكلمات",
        "author": "Ms. Abrar Ragab",
        "description": "Friendly and unfriendly letters, how letters change shape in the initial, medial and final cases, the letter Haa, and the chairs of Hamza.",
        "order": 3,
    },
    "letter-positions-jannat": {
        "title": "Letter Positions (Illustrated)",
        "subtitle": "أشكال الحروف المصورة",
        "author": "Jannat Al Quran",
        "description": "A fully illustrated, page-by-page guide to the positions and shapes of every Arabic letter.",
        "order": 4,
    },
    "tajweed-curriculum": {
        "title": "Tajweed Curriculum",
        "subtitle": "أحكام التجويد",
        "author": "Instructor Abdurrahman Mustafa",
        "description": "The complete Tajweed masterclass: Izhaar, Idghaam, Iqlaab and Ikhfaa of Noon Saakin & Tanween, the rules of Meem Saakin, Ghunnah and its ranks, Qalqalah, the Mudood, heavy & light letters and the rules of Raa.",
        "order": 5,
    },
    "hamza-wasl-qata": {
        "title": "Hamzatul Wasl & Qata",
        "subtitle": "همزة الوصل وهمزة القطع",
        "author": "Jannat Al Quran",
        "description": "A complete illustrated guide to telling apart Hamzatul Wasl and Hamzatul Qata, with their rules of pronunciation and common mistakes.",
        "order": 6,
    },
    "i-love-islam": {
        "title": "I Love Islam Level 1",
        "subtitle": "أحب الإسلام",
        "author": "Islamic Studies Curriculum",
        "description": "Level 1 Islamic Studies: the life of Prophet Muhammad ﷺ, the Sahabah, the pillars of Islam, Wudoo, Salah and the short Surahs, presented page by page.",
        "order": 7,
    },
}

# Section ranges (first_page, last_page, title) for books that have a text layer.
SECTIONS = {
    "alphabet-curriculum": [
        (1, 1, "Introduction & Credits"),
        (2, 2, "Cover: Letter Recognition, Positions & Connecting Letters"),
        (3, 3, "The Arabic Alphabet Chart"),
        (4, 4, "Find the Letter"),
        (5, 5, "The Outside Parts (Note)"),
        (6, 6, "Letter Connecting Practice"),
        (7, 8, "Introduction to Harakat"),
        (9, 10, "Fathah"),
        (11, 12, "Kasrah"),
        (13, 14, "Dhammah"),
        (15, 15, "Note: What is a Harakah?"),
        (16, 18, "Sukoon"),
        (19, 24, "Tanween"),
        (25, 27, "Shaddah"),
        (28, 29, "Huroof-ul-Madd"),
        (30, 31, "Al-Madd with Alif"),
        (32, 32, "Al-Madd with Yaa"),
        (33, 33, "Al-Madd with Waaw"),
        (34, 34, "Letters of Leen"),
    ],
    "letter-positions-abrar": [
        (1, 1, "Cover: Letter Positions"),
        (2, 2, "Friendly Letters"),
        (3, 3, "Unfriendly Letters"),
        (4, 4, "Letters with a Different Shape (Initial Case)"),
        (5, 5, "Letters with a Different Shape (Medial & Final Case)"),
        (6, 6, "The Letter Haa (Shape-Shifter)"),
        (7, 7, "The Initial Case"),
        (8, 8, "The Final Case"),
        (9, 9, "Hamza"),
    ],
    "tajweed-curriculum": [
        (1, 3, "Introduction & Credits"),
        (4, 8, "1. Rules of Noon Saakin & Tanween: Izhaar"),
        (9, 18, "2. Idghaam"),
        (19, 20, "3. Iqlaab"),
        (21, 29, "4. Ikhfaa"),
        (30, 44, "5. The Rules of Meem Saakin"),
        (45, 49, "Exercises: Noon & Meem"),
        (50, 52, "Ghunnah (Nasalisation)"),
        (53, 57, "The Ranks of Ghunnah"),
        (58, 60, "The Definite Article & Hamzatul Wasl"),
        (61, 72, "Qalqalah"),
        (73, 105, "Madd (Elongation)"),
        (106, 110, "Heavy & Light Letters"),
        (111, 123, "The Rules of Raa"),
    ],
}


def clean(text):
    return " ".join((text or "").split()).strip()


def build():
    books = []
    for slug, pdf in PDF.items():
        doc = pymupdf.open(pdf)
        n = len(doc)
        folder = os.path.join("assets", "books", slug)
        pages = sorted(glob.glob(os.path.join(folder, "p*.jpg")))
        n = min(n, len(pages)) if pages else n
        page_paths = ["assets/books/%s/p%03d.jpg" % (slug, i) for i in range(1, n + 1)]
        texts = [clean(doc[i].get_text()) for i in range(n)]

        meta = META[slug]
        book = {
            "slug": slug,
            "order": meta["order"],
            "title": meta["title"],
            "subtitle": meta["subtitle"],
            "author": meta["author"],
            "description": meta["description"],
            "cover": page_paths[0] if page_paths else "",
            "pageCount": n,
            "lessons": [],
        }

        if slug in SECTIONS:
            for idx, (a, b, title) in enumerate(SECTIONS[slug], start=1):
                a = max(1, a)
                b = min(n, b)
                book["lessons"].append({
                    "num": idx,
                    "title": title,
                    "pages": page_paths[a - 1:b],
                    "firstPage": a,
                    "lastPage": b,
                    "text": " ".join(t for t in texts[a - 1:b] if t)[:1200],
                })
        else:
            for i in range(1, n + 1):
                book["lessons"].append({
                    "num": i,
                    "title": "Page %d" % i,
                    "pages": [page_paths[i - 1]],
                    "firstPage": i,
                    "lastPage": i,
                    "text": texts[i - 1],
                })

        books.append(book)
        print(slug, n, "pages,", len(book["lessons"]), "lessons", flush=True)

    books.sort(key=lambda b: b["order"])
    js = "/* Auto-generated from the source PDFs. Do not edit by hand. */\n"
    js += "const BOOKS = " + json.dumps(books, ensure_ascii=False, indent=2) + ";\n\n"
    js += 'if (typeof window !== "undefined") { window.BOOKS = BOOKS; }\n'
    with open("books.js", "w", encoding="utf-8") as f:
        f.write(js)
    print("WROTE books.js")


if __name__ == "__main__":
    build()
