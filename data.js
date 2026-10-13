/**
 * Noor ul Bayan & Tajweed Academy - Comprehensive Curriculum Data
 * Compiled directly from all 7 provided curriculum materials:
 * 1. DOC-20261013-WA0002.pdf (Instructor Abdurrahman Mustafa - Alphabet, Positions & Harakat)
 * 2. DOC-20261013-WA0004.pdf (Ms. Abrar Ragab - Letter Positions, Friendly/Unfriendly, Shape Rules, Hamza Chairs)
 * 3. DOC-20261013-WA0005.pdf (Jannat Al Quran - Illustrated Letter Positions for Kids)
 * 4. DOC-20261013-WA0006.pdf (Instructor Abdurrahman Mustafa - 123-Page Complete Tajweed Masterclass)
 * 5. Untitled.pdf (Jannat Al Quran - Hamza-tul Qata' vs Hamza-tul Wasl Complete Rules & Mistakes)
 * 6. Untitled2.pdf (I Love Islam Level 1 - Units A, B, C, D, E: Prophet ﷺ, Sahabah, Pillars, Wudoo, Salah)
 * 7. الحروف العربيه للاعاجم.pdf (Teacher Noha Abd El-Hameed - Arabic Alphabet for Non-Arabs)
 */

const CURRICULUM_DATA = {
  // ==========================================
  // SECTION 1: ARABIC ALPHABET & LETTER POSITIONS
  // Sources: WA0002, WA0004 (Ms. Abrar Ragab), WA0005 (Jannat Al Quran), Arabic for Non-Arabs
  // ==========================================
  alphabet: {
    title: "Arabic Alphabet & Letter Positions",
    subtitle: "حُرُوفُ الْهِجَاءِ وَأَشْكَالُهَا فِي الْكَلِمَاتِ",
    intro: "Learn all 28 Arabic letters, understand how friendly letters give their right and left hands to connect, discover the 6 stubborn letters that leave a space, and meet the unique shape-shifter letters!",
    
    friendlyLettersRule: {
      title: "Friendly Letters (الحُرُوفُ الْمُتَّصِلَة)",
      description: "They accept connecting to BOTH the previous letter and the following letter! They give their right hand to the preceding letter, and their left hand to the next letter."
    },

    unfriendlyLettersRule: {
      title: "The 6 Unfriendly (Stubborn) Letters (الحُرُوفُ الرَّافِسَة / النَّافِرَة)",
      description: "There are exactly 6 unfriendly letters in the Arabic language. They accept connecting to the previous letter from the right, but they REFUSE to connect to the following letter on the left! You will always find a little space after an unfriendly letter.",
      letters: [
        { letter: "ا", name: "Alif", note: "Only connects from the right; never holds left hands!" },
        { letter: "د", name: "Daal", note: "Connects from right; stands alone on left!" },
        { letter: "ذ", name: "Dhaal", note: "Connects from right; stands alone on left!" },
        { letter: "ر", name: "Raa", note: "Connects from right; curls downward on left!" },
        { letter: "ز", name: "Zay", note: "Connects from right; never connects to next letter!" },
        { letter: "و", name: "Waaw", note: "Connects from right; never connects on the left side!" }
      ]
    },

    specialShapesNotes: [
      {
        letter: "Letter Haa (هـ)",
        title: "The Master Shape-Shifter (ه)",
        desc: "Letter Haa has totally different shapes: At the beginning it looks like a Daal with a circle inside (هـ). In the middle it looks like the number 8 (ـهـ). At the end it looks like a cute rounded knot or teardrop (ـه / ه)!"
      },
      {
        letter: "Letters Ayn (ع) & Ghayn (غ)",
        title: "The Closed Dark Circle Rule",
        desc: "In the medial and final connected cases (ـعـ / ـع), Ayn and Ghayn look like a closed, dark little triangle/circle with no white space inside!"
      },
      {
        letter: "Letters Kaaf (ك) & Yaa (ي)",
        title: "Total Shape Transformers",
        desc: "Kaaf completely changes from its isolated open boat with miniature hamza (ك) to an angled arm hook in the initial and medial cases (كـ / ـكـ). Yaa loses its swan neck and becomes a two-dotted base (يـ / ـيـ)."
      }
    ],

    connectingWordsExamples: [
      { word: "زَرَعَ", translit: "Zara'a", meaning: "He planted (Notice all 3 are stubborn letters standing side by side!)" },
      { word: "أَكَلَ", translit: "Akala", meaning: "He ate (Alif stubborn, Kaaf & Laam connect)" },
      { word: "ذَهَبَ", translit: "Dhahaba", meaning: "He went (Dhaal stubborn, Haa & Baa connect)" },
      { word: "حَصَدَ", translit: "Hasada", meaning: "He harvested (Haa & Saad connect, Daal stubborn at end)" },
      { word: "عَسَل", translit: "Asal", meaning: "Honey (Ayn, Seen, Laam - all friendly letters holding hands!)" },
      { word: "مَنْزِل", translit: "Manzil", meaning: "House / Home" },
      { word: "شَرِبَ", translit: "Shariba", meaning: "He drank" },
      { word: "يَلْعَبُ", translit: "Yal'abu", meaning: "He plays" }
    ],

    hamzaSeats: {
      title: "Hamza & Her Chairs (كَرَاسِي الْهَمْزَة)",
      description: "Hamza is a spoiled letter! Most of the time, Hamza needs a comfortable chair to sit on. The chair is sometimes Alif (أ / إ), sometimes Waaw (ؤ), and sometimes Yaa / Nabrah (ئـ). Sometimes Hamza decides to be independent and stands by herself on the line (ء)!",
      chairs: [
        { form: "ء", name: "Hamza on the Line (Independent)", example: "مَاء / سَمَاء", translit: "Maa' / Samaa'", meaning: "Water / Sky" },
        { form: "أ / إ", name: "Hamza on Alif Chair", example: "أَحْمَد / إِيمَان", translit: "Ahmad / Imaan", meaning: "Ahmad / Faith" },
        { form: "ؤ", name: "Hamza on Waaw Chair", example: "مُؤْمِن / مَسْؤُول", translit: "Mu'min / Mas'ool", meaning: "Believer / Responsible" },
        { form: "ئـ / ئ", name: "Hamza on Nabrah / Yaa Chair", example: "سُئِلَ / شَاطِئ / بَرِيء", translit: "Su'ila / Shaati'", meaning: "Was asked / Seashore" }
      ]
    },

    // All 28 letters with comprehensive shapes and pronunciations
    letters: [
      { name: "Alif", arabic: "أَلِف", isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", type: "unfriendly", translit: "a / aa", englishSound: "Long 'A' vowel sound; non-connecting on left", urduSound: "الف (خالی الف، بائیں جانب نہیں ملتا)" },
      { name: "Baa", arabic: "بَاء", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", type: "friendly", translit: "b", englishSound: "B as in Boat (1 dot underneath)", urduSound: "بے (ایک نقطہ نیچے)" },
      { name: "Taa", arabic: "تَاء", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", type: "friendly", translit: "t", englishSound: "T as in Table (2 dots on top)", urduSound: "تے (دو نقطے اوپر)" },
      { name: "Thaa", arabic: "ثَاء", isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", type: "friendly", translit: "th", englishSound: "Soft Th as in Think (tip of tongue between teeth, 3 dots)", urduSound: "ثے (نرم آواز، تین نقطے اوپر)" },
      { name: "Jeem", arabic: "جِيم", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", type: "friendly", translit: "j", englishSound: "J as in Jam (1 dot inside belly)", urduSound: "جیم (ایک نقطہ پیٹ میں)" },
      { name: "Haa", arabic: "حَاء", isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", type: "friendly", translit: "ḥ", englishSound: "Deep breathy H from the middle of the throat (no dots)", urduSound: "بڑی حے (حلق کے درمیان سے، بغیر نقطہ)" },
      { name: "Khaa", arabic: "خَاء", isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", type: "friendly", translit: "kh", englishSound: "Scraping heavy Kh as in Scottish Loch (1 dot on top)", urduSound: "خے (اوپر ایک نقطہ، پر آواز)" },
      { name: "Daal", arabic: "دَال", isolated: "د", initial: "د", medial: "ـد", final: "ـد", type: "unfriendly", translit: "d", englishSound: "D as in Door (stubborn letter, no left connection)", urduSound: "دال (سادہ دال، بائیں جانب نہیں ملتا)" },
      { name: "Dhaal", arabic: "ذَال", isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", type: "unfriendly", translit: "dh", englishSound: "Soft Dh as in That (tongue tip out, 1 dot on top)", urduSound: "ذال (نرم آواز، ایک نقطہ اوپر)" },
      { name: "Raa", arabic: "رَاء", isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", type: "unfriendly", translit: "r", englishSound: "R with light rolling trill (stubborn letter)", urduSound: "رے (کبھی پر کبھی باریک، بائیں نہیں ملتا)" },
      { name: "Zay", arabic: "زَاي", isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", type: "unfriendly", translit: "z", englishSound: "Z as in Zebra with sharp buzzing whistle (1 dot)", urduSound: "زے (سیٹی والی آواز، ایک نقطہ اوپر)" },
      { name: "Seen", arabic: "سِين", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", type: "friendly", translit: "s", englishSound: "S as in Sun (crisp whistling sound, 3 teeth)", urduSound: "سین (تین دانت، سیٹی والی صاف آواز)" },
      { name: "Sheen", arabic: "شِين", isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", type: "friendly", translit: "sh", englishSound: "Sh as in Shoe / Shine (3 teeth with 3 dots on top)", urduSound: "شین (تین نقطے اوپر، بھرپور ش)" },
      { name: "Saad", arabic: "صَاد", isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", type: "friendly", translit: "ṣ", englishSound: "Heavy, bold S (elevate back of tongue, full mouth resonance)", urduSound: "صاد (پر اور موٹی آواز)" },
      { name: "Daad", arabic: "ضَاد", isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", type: "friendly", translit: "ḍ", englishSound: "Heavy D from the side edge of tongue (The Arabic Unique Letter)", urduSound: "ضاد (زبان کی کروٹ اور داڑھوں سے، پر آواز)" },
      { name: "Taa'", arabic: "طَاء", isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", type: "friendly", translit: "ṭ", englishSound: "Heavy bold T with upright stick (raise back of tongue)", urduSound: "طوئے (موٹی اور پر ت)" },
      { name: "Dhaa'", arabic: "ظَاء", isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", type: "friendly", translit: "ẓ", englishSound: "Heavy soft Th with stick and 1 dot (deep resonance)", urduSound: "ظوئے (نرم اور موٹی آواز، ایک نقطہ)" },
      { name: "Ayn", arabic: "عَيْن", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", type: "friendly", translit: "‘", englishSound: "Deep guttural Ayn from the middle throat pharynx", urduSound: "عین (حلق کے درمیان سے واضح)" },
      { name: "Ghayn", arabic: "غَيْن", isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", type: "friendly", translit: "gh", englishSound: "Gargling Gh sound from top of throat (1 dot on top)", urduSound: "غین (حلق کے اوپری حصے سے، ایک نقطہ)" },
      { name: "Faa", arabic: "فَاء", isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", type: "friendly", translit: "f", englishSound: "F as in Fish (upper front teeth touching inside lower lip)", urduSound: "فے (اوپر والے دانت نچلے ہونٹ کے اندر)" },
      { name: "Qaaf", arabic: "قَاف", isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", type: "friendly", translit: "q", englishSound: "Deep heavy Q from the back uvula (2 dots on top)", urduSound: "قاف (حلق کی جڑ سے پر آواز، دو نقطے)" },
      { name: "Kaaf", arabic: "كَاف", isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", type: "friendly", translit: "k", englishSound: "K as in Kite (shape changes to hook when connected)", urduSound: "کاف (نرم اور ہلکی ک، شکل بدل جاتی ہے)" },
      { name: "Laam", arabic: "لاَم", isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", type: "friendly", translit: "l", englishSound: "L as in Light (long cane hook)", urduSound: "لام (لمبی لکڑی، نرم اور رواں)" },
      { name: "Meem", arabic: "مِيم", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", type: "friendly", translit: "m", englishSound: "M as in Moon (lips closing naturally)", urduSound: "میم (دونوں ہونٹوں کو نرمی سے ملا کر)" },
      { name: "Noon", arabic: "نُون", isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", type: "friendly", translit: "n", englishSound: "N as in Nest (1 dot centered in deep bowl)", urduSound: "نون (پیالے کے اندر ایک نقطہ)" },
      { name: "Haa (Light)", arabic: "هَاء", isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", type: "friendly", translit: "h", englishSound: "Gentle breathy H from bottom of throat (Shape-shifter!)", urduSound: "چھوٹی ہے (شکل بدلنے والا حرف)" },
      { name: "Waaw", arabic: "وَاو", isolated: "و", initial: "و", medial: "ـو", final: "ـو", type: "unfriendly", translit: "w / oo", englishSound: "W as in Water / Long Oo (stubborn letter, no left connection)", urduSound: "واؤ (ہونٹوں کو گول کر کے، بائیں نہیں ملتا)" },
      { name: "Yaa", arabic: "يَاء", isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", type: "friendly", translit: "y / ee", englishSound: "Y as in Yellow / Long Ee (2 dots below boat)", urduSound: "یے (دو نقطے نیچے، تبدیل شدہ شکل)" }
    ]
  },

  // ==========================================
  // SECTION 2: HARAKAT & TANWEEN & MADD / LEEN
  // Sources: WA0002 (Instructor Abdurrahman Mustafa), WA0006
  // ==========================================
  harakat: {
    title: "Harakat & Tanween Masterclass",
    subtitle: "الْحَرَكَاتُ وَالتَّنْوِينُ وَحُرُوفُ الْمَدِّ وَاللِّينِ",
    intro: "Harakat are the vocal sounds that give life to letters! Learn the exact pronunciation methods, sound comparisons, Tanween rules, and how letters stretch with Madd and glide with Leen.",
    
    vowels: [
      {
        name: "Fathah",
        arabicSymbol: "ـَ",
        arabicName: "فَتْحَة",
        sound: "Sounds like 'a' in 'man'",
        method: "Open your mouth vertically with a gentle, short smile sound.",
        description: "A small slanted stroke placed on top of the letter.",
        example: "بَ",
        translit: "Ba",
        urdu: "زبر: حرف کے اوپر ترچھی لکیر، منہ کھول کر ادا کریں"
      },
      {
        name: "Kasrah",
        arabicSymbol: "ـِ",
        arabicName: "كَسْرَة",
        sound: "Sounds like 'i' in 'tin'",
        method: "Lower your bottom jaw slightly with a crisp, short sound.",
        description: "A small slanted stroke placed underneath the letter.",
        example: "بِ",
        translit: "Bi",
        urdu: "زیر: حرف کے نیچے ترچھی لکیر، نچلا جبڑا گرا کر ادا کریں"
      },
      {
        name: "Dammah",
        arabicSymbol: "ـُ",
        arabicName: "ضَمَّة",
        sound: "Sounds like 'u' in 'push'",
        method: "Circle your two lips into a small round circle with a short sound.",
        description: "A cute little tiny Waaw symbol placed on top of the letter.",
        example: "بُ",
        translit: "Bu",
        urdu: "پیش: حرف کے اوپر چھوٹی واؤ، دونوں ہونٹوں کو گول کر کے ادا کریں"
      },
      {
        name: "Sukoon",
        arabicSymbol: "ـْ",
        arabicName: "سُكُون / جَزْم",
        sound: "Resting mark (no vowel sound)",
        method: "Stop the sound gently at the letter's point of articulation with zero vowel movement.",
        description: "A small circle (○) or tiny Quranic crest (ـۡ) representing stillness.",
        example: "أَبْ",
        translit: "Ab",
        urdu: "سکون / جزم: حرف کو ساکن ٹھہرانا، بغیر کسی حرکت کے"
      },
      {
        name: "Shaddah",
        arabicSymbol: "ـّ",
        arabicName: "شَدَّة / تَشْدِيد",
        sound: "Doubled letter of emphasis",
        method: "Hold the letter firmly: 1st letter has Sukoon, 2nd letter has a Harakah (رَبَّ = رَبْ + بَ).",
        description: "Looks like a 3-pronged crown (w). Merges two identical letters together.",
        example: "رَبَّ",
        translit: "Rabba (Rab-ba)",
        urdu: "شدّ: حرف کو جما کر دو بار پڑھنا (پہلا ساکن، دوسرا متحرک)"
      }
    ],

    tanween: [
      {
        name: "Tanween bil-Fath (Fathatayn)",
        symbol: "ـً",
        sound: "Sounds like '-an'",
        rule: "Two Fathahs on top of the letter. In Arabic writing, it is usually supported by an Alif helper (e.g. كِتَابًا). When stopping in recitation, it turns into Madd 'Ewad (كِتَابَا) stretched for 2 counts!",
        example: "كِتَابًا",
        translit: "Kitaaban ⬅ Kitaabaa (on stop)",
        urdu: "دو زبر: وقف کی صورت میں الف مدہ بن جاتا ہے (مد عوض)"
      },
      {
        name: "Tanween bil-Kasr (Kasratayn)",
        symbol: "ـٍ",
        sound: "Sounds like '-in'",
        rule: "Two Kasrahs underneath the letter, ringing with a clear hidden Noon Saakin sound.",
        example: "كِتَابٍ",
        translit: "Kitaabin",
        urdu: "دو زیر: 'ان' کی آواز"
      },
      {
        name: "Tanween bid-Damm (Dammatayn)",
        symbol: "ـٌ",
        sound: "Sounds like '-un'",
        rule: "Two Dammahs on top of the letter, producing a soft, rounded '-un' ringing bell sound.",
        example: "كِتَابٌ",
        translit: "Kitaabun",
        urdu: "دو پیش: 'ان' کی آواز"
      }
    ],

    maddLetters: [
      {
        name: "Alif Madd (الأَلِفُ الْمَدِّيَّة)",
        rule: "Empty Alif preceded by a letter with Fathah (ـَ + ا)",
        counts: "Stretched for 2 counts (Harakataan)",
        example: "قَالَ",
        translit: "Qaala (He said)",
        urdu: "الف مدہ: زبر کے بعد خالی الف، دو حرکات لمبا"
      },
      {
        name: "Waw Madd (الْوَاوُ الْمَدِّيَّة)",
        rule: "Waw with Sukoon preceded by a letter with Dammah (ـُ + وْ)",
        counts: "Stretched for 2 counts (Harakataan)",
        example: "يَقُولُ",
        translit: "Yaqoolu (He says)",
        urdu: "واؤ مدہ: پیش کے بعد واؤ ساکن، دو حرکات لمبا"
      },
      {
        name: "Yaa Madd (الْيَاءُ الْمَدِّيَّة)",
        rule: "Yaa with Sukoon preceded by a letter with Kasrah (ـِ + يْ)",
        counts: "Stretched for 2 counts (Harakataan)",
        example: "قِيلَ",
        translit: "Qeela (It was said)",
        urdu: "یاء مدہ: زیر کے بعد یاء ساکن، دو حرکات لمبا"
      }
    ],

    leenLetters: [
      {
        name: "Waw Leen (وَاوُ اللِّين)",
        rule: "Waw with Sukoon preceded by a letter with Fathah (ـَ + وْ)",
        sound: "Soft gliding 'aw' sound without stretching unless stopping",
        example: "خَوْف",
        translit: "Khawf (Fear)",
        quranRef: "Surah Quraysh: وَآمَنَهُم مِّنْ خَوْفٍ",
        urdu: "واؤ لین: زبر کے بعد واؤ ساکن، نرمی سے ادا کریں"
      },
      {
        name: "Yaa Leen (يَاءُ اللِّين)",
        rule: "Yaa with Sukoon preceded by a letter with Fathah (ـَ + يْ)",
        sound: "Soft gliding 'ay' sound without stretching unless stopping",
        example: "بَيْت",
        translit: "Bayt (House)",
        quranRef: "Surah Quraysh: فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
        urdu: "یاء لین: زبر کے بعد یاء ساکن، نرمی سے ادا کریں"
      }
    ]
  },

  // ==========================================
  // SECTION 3: TAJWEED MASTERCLASS
  // Sources: WA0006 (Instructor Abdurrahman Mustafa - 123 Pages) & Untitled.pdf
  // ==========================================
  tajweed: {
    title: "Essential Tajweed Rules",
    subtitle: "أَحْكَامُ التَّجْوِيدِ الْمُيَسَّرَة - مِنَ النُّونِ إِلَى الْمُدُود",
    intro: "Tajweed means to recite the Holy Quran with supreme excellence, beautifying every letter from its proper articulation point (Makhraj) with all its divine characteristics (Sifaat).",

    // 1. Noon Saakin & Tanween
    noonSaakinRules: [
      {
        name: "Izhaar (الإِظْهَارُ الْحَلْقِي)",
        english: "Clear Pronunciation (Throat Letters)",
        meaning: "Izhaar means to make clear. Pronounce Noon Saakin or Tanween clearly from its makhraj with NO extra ghunnah (nasal humming).",
        letters: "ء ، هـ ، ع ، ح ، غ ، خ",
        lettersCount: 6,
        quranSign: "Equal, parallel Tanween strokes (ـً / ـٍ) and a clear little Sukoon crest on Noon (نْ)",
        example: "مَنْ آمَنَ / أَنْعَمْتَ / كُفُوًا أَحَدٌ / مَنْ خَفَّتْ",
        translit: "Man Aamana / An'amta / Kufuwan Ahad",
        urdu: "اظہار: نون ساکن یا تنوین کو حلق کے 6 حروف کے سامنے بغیر کسی غنہ کے بالکل صاف پڑھنا۔"
      },
      {
        name: "Idgham with Ghunnah (الإِدْغَامُ بِغُنَّة)",
        english: "Merging with Nasal Humming (YANMOO)",
        meaning: "Idgham means to merge. Merge the Noon Saakin or Tanween into the following letter with a melodious 2-count nasal Ghunnah humming sound.",
        letters: "ي ، ن ، م ، و (يَنْمُو)",
        lettersCount: 4,
        quranSign: "Shifted unaligned Tanween strokes and a Noon with NO sign on top, followed by the next letter.",
        example: "مَن يَقُولُ / مِن نَّارٍ / مِّن مَّالٍ / مِن وَالٍ",
        translit: "May-yaqool / Min-naar / Mim-maal / Miw-waal",
        urdu: "ادغام مع الغنہ: نون ساکن کو یرملون کے چار حروف (ینمو) میں ملا کر 2 حرکات کا ناک سے غنہ کرنا۔"
      },
      {
        name: "Idgham without Ghunnah (الإِدْغَامُ بِغَيْرِ غُنَّة)",
        english: "Complete Merging without Ghunnah (Laam & Raa)",
        meaning: "Merge Noon Saakin or Tanween completely into Laam or Raa cleanly, leaving ZERO trace of nasal humming.",
        letters: "ل ، ر",
        lettersCount: 2,
        quranSign: "Noon with no sign followed by Laam or Raa carrying a Shaddah (لّ / رّ).",
        example: "مِن لَّدُنْهُ / مِن رَّبِّهِمْ / غَفُورٌ رَّحِيمٌ",
        translit: "Mil-ladunhu / Mir-rabbihim / Ghafoorur-raheem",
        urdu: "ادغام بغیر غنہ: نون ساکن کو لام یا راء میں ملا کر بغیر کسی غنہ کے پڑھنا۔"
      },
      {
        name: "Iqlaab (الإِقْلاَب)",
        english: "Transformation to Meem with Ghunnah",
        meaning: "Iqlaab means to convert or change. When Noon Saakin or Tanween meets the single letter Baa (ب), it turns into a hidden Meem with 2-count nasal Ghunnah.",
        letters: "ب (Only 1 letter!)",
        lettersCount: 1,
        quranSign: "A cute little vertical Meem (ـۢ) printed above the Noon or replacing the second Tanween stroke.",
        example: "مِنۢ بَعْدِ / أَنۢبِئْهُم / سَمِيعٌۢ بَصِيرٌ",
        translit: "Mim-ba'di / Ambi'hum / Samee'um-baseer",
        urdu: "اقلاب: نون ساکن یا تنوین کے بعد 'ب' آنے پر نون کو چھوٹی میم میں بدل کر غنہ کرنا۔"
      },
      {
        name: "Ikhfaa (الإِخْفَاءُ الْحَقِيقِي)",
        english: "Concealment with Soft Nasal Humming",
        meaning: "Ikhfaa means to hide. Hide the sound of Noon inside the nasal cavity between Izhaar and Idgham, holding a 2-count Ghunnah. If followed by a heavy letter (خص ضغط قظ), the Ghunnah is HEAVY! If followed by a light letter, the Ghunnah is LIGHT!",
        letters: "ص ذ ث ك ج ش ق س د ط ز ف ت ض ظ (15 Letters)",
        lettersCount: 15,
        quranSign: "Noon with no sign on top, followed by any of the 15 Ikhfaa letters without shaddah.",
        example: "مِن قَبْلُ (Heavy Ghunnah) / أَنتُمْ (Light Ghunnah) / كُنتُمْ / إِن سَرَقَ",
        translit: "Min qablu / Antum / Kuntum",
        urdu: "اخفاء: نون ساکن یا تنوین کو 15 حروف کے سامنے ناک کے پردے میں چھپا کر 2 حرکات کا غنہ کرنا۔"
      }
    ],

    // 2. Meem Saakin Rules
    meemSaakinRules: [
      {
        name: "Ikhfaa Shafawi (الإِخْفَاءُ الشَّفَوِي)",
        letter: "ب (Baa)",
        description: "Called Shafawi because it is articulated from the lips. When Meem Saakin (مْ) meets Baa (ب), soften the lips with a light gentle touch and hold a 2-count Ghunnah.",
        example: "تَرْمِيهِم بِحِجَارَةٍ",
        translit: "Tarmeehim bi-hijarah (Surah Al-Feel)"
      },
      {
        name: "Idgham Shafawi / Mithlayn (الإِدْغَامُ الشَّفَوِي)",
        letter: "م (Meem)",
        description: "When Meem Saakin (مْ) meets another Meem (م), merge them into one doubled stressed Meem with full 2-count Ghunnah.",
        example: "لَهُم مَّا يَشَاءُونَ",
        translit: "Lahum maa yashaa'oon"
      },
      {
        name: "Izhaar Shafawi (الإِظْهَارُ الشَّفَوِي)",
        letter: "All remaining 26 letters (Caution with و and ف)",
        description: "Pronounce Meem Saakin clearly from the lips with no extra ghunnah. Pay extra caution when followed by Waaw or Faa so the Meem is not accidentally hidden!",
        example: "عَلَيْهِمْ وَلاَ / أَمْ لَمْ تُنذِرْهُمْ",
        translit: "'Alayhim walaa / Am lam tundhirhum"
      }
    ],

    // 3. Ranks of Ghunnah (From WA0006 Page 53-57)
    ranksOfGhunnah: [
      { rank: "1. Most Complete (أَكْمَلُ مَا تَكُون)", desc: "Noon and Meem with Shaddah (نّ / مّ), and Idgham with Ghunnah (مَن يَقُولُ)." },
      { rank: "2. Complete (كَامِلَة)", desc: "Ikhfaa of Noon Saakin (أَنتُمْ), Ikhfaa Shafawi (تَرْمِيهِم بِحِجَارَةٍ), and Iqlaab (مِنۢ بَعْدِ)." },
      { rank: "3. Incomplete (نَاقِصَة)", desc: "Izhaar of Noon Saakin (أَنْعَمْتَ) and Izhaar of Meem Saakin (لَهُمْ فِيهَا)." },
      { rank: "4. Most Incomplete (أَنْقَصُ مَا تَكُون)", desc: "Noon and Meem with short vowels / Harakaat (نَ نِ نُ / مَ مِ مُ)." }
    ],

    // 4. Qalqalah (From WA0006 Page 61-71)
    qalqalah: {
      letters: "ق ، ط ، ب ، ج ، د (قُطْبُ جَدّ)",
      definition: "Qalqalah means making a bouncing vibration or reverberating sound at the articulation point when the letter carries a Sukoon.",
      types: [
        {
          name: "1. Minor Qalqalah (Qalqalah Sughra - سُغْرَى)",
          rule: "Occurs when the Qalqalah letter is in the middle of a word with an original Sukoon.",
          example: "يَدْخُلُونَ / يَقْطَعُونَ / حَبْلُ / نُطْفَة",
          translit: "Yad-khuloon / Habl / Nutfah",
          bounce: "Light gentle bounce"
        },
        {
          name: "2. Medium Qalqalah (Qalqalah Wusta - وُسْطَى)",
          rule: "Occurs when stopping on a Qalqalah letter at the end of an ayah that does NOT have a Shaddah.",
          example: "الْفَلَقِ ⬅ الْفَلَقْ / وَقَبَ ⬅ وَقَبْ / مُحِيطٌ ⬅ مُحِيطْ",
          translit: "Al-Falaq / Waqab / Muheet",
          bounce: "Clear noticeable bounce at end of word"
        },
        {
          name: "3. Major Qalqalah (Qalqalah Kubra / Akbar - كُبْرَى)",
          rule: "Occurs when stopping on a Qalqalah letter at the end of an ayah that carries a SHADDAH (doubled letter).",
          example: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ⬅ وَتَبّْ / بِالْحَقِّ ⬅ بِالْحَقّْ",
          translit: "Wa tabb / Bil-Haqq",
          bounce: "Strongest, firmest reverberating bounce after holding the stress!"
        }
      ]
    },

    // 5. Mudood (Elongations - From WA0006 Page 73-102)
    mudood: [
      {
        name: "1. Madd Tabi'ee (Natural Madd - المد الطبيعي)",
        length: "2 Harakah (Counts)",
        rule: "Standard vowel stretch with Alif, Waw, or Yaa without any Hamza or Sukoon following it (e.g. نُوحِيهَا). Includes Madd Silah Sughra and Madd 'Ewad (replacing Tanween of Fathah with Alif on stop: كِتَابًا ⬅ كِتَابَا).",
        example: "نُوحِيهَا / كِتَابَا",
        translit: "Noo-hee-haa / Kitaabaa"
      },
      {
        name: "2. Madd Muttasil (Connected Madd - المد المتصل)",
        length: "4 or 5 Harakah",
        rule: "A Madd letter followed immediately by Hamza within the VERY SAME single word.",
        example: "جَآءَ / السَّمَآء / سُوٓءَ",
        translit: "Jaaa'a / As-Samaaa' / Sooo'"
      },
      {
        name: "3. Madd Munfasil (Separated Madd - المد المنفصل)",
        length: "4 or 5 Harakah (allowed 2 in some Qira'at)",
        rule: "A Madd letter at the end of one word, followed by a Hamza at the very beginning of the next word.",
        example: "إِنَّآ أَعْطَيْنَاكَ / قُوٓا أَنفُسَكُمْ",
        translit: "Innaaa a'taynaak / Qooo anfusakum"
      },
      {
        name: "4. Madd-ul-Badal (Exchange Madd - مد البدل)",
        length: "2 Harakah",
        rule: "When a Hamza precedes the Madd letter without another Hamza or Sukoon after it (e.g. ءادَم original was أَأْدَم).",
        example: "ءَامَنُوا / إِيمَان / أُوتُوا",
        translit: "Aamanoo / Imaan / Ootoo"
      },
      {
        name: "5. Madd 'Aarid li-Sukoon (Temporary Madd - المد العارض للسكون)",
        length: "2, 4, or 6 Harakah",
        rule: "Stopping at the end of an ayah where the last letter gets a temporary Sukoon due to pausing.",
        example: "الْعَالَمِينَ ⬅ الْعَالَمِينْ / الرَّحِيمِ ⬅ الرَّحِيمْ",
        translit: "Al-'Aalameen / Ar-Raheem"
      },
      {
        name: "6. Madd Laazim (Compulsory Madd - المد اللازم)",
        length: "6 Harakah (Full Maximum Length)",
        rule: "A Madd letter followed by an original permanent Sukoon or Shaddah in the same word (Kalimee Muthaqqal like الضَّالِّينَ, or Harfee Muthaqqal like الٓمٓ).",
        example: "الضَّآلِّينَ / الْحَآقَّةُ / الٓمٓ / قٓ",
        translit: "Ad-Daaalleen / Al-Haaaqqah / Alif-Laaam-Meeem"
      }
    ],

    // 6. Heavy & Light Letters + Raa + Hamzatul Wasl (From WA0006 & Untitled.pdf)
    heavyLight: {
      heavyGroup: {
        title: "Heavy Letters (حُرُوفُ التَّفْخِيمِ / الاِسْتِعْلاَء)",
        mnemonic: "خُصَّ ضَغْطٍ قِظْ (7 Letters)",
        letters: "خ ، ص ، ض ، غ ، ط ، ق ، ظ",
        howToPronounce: "Elevate the back of the tongue towards the roof of the mouth. The mouth fills with a rich, echoing, deep acoustic resonance!"
      },
      lightGroup: {
        title: "Light Letters (حُرُوفُ التَّرْقِيقِ / الاِسْتِفَال)",
        rule: "All remaining letters of the Arabic alphabet are pronounced light, keeping the tongue flat and smiling naturally.",
        letters: "ب ، ت ، ث ، ج ، ح ، د ، ذ ، ز ، س ، ش ، ع ، ف ، ك ، ل ، م ، ن ، هـ ، و ، ي"
      },
      conditionalLetters: {
        title: "Letters Sometimes Heavy and Sometimes Light",
        details: [
          "Alif Madd: Follows the letter before it! If preceded by a heavy letter (قَالَ), it is heavy. If preceded by a light letter (كَانَ), it is light.",
          "Laam of Allah (لفظ الجلالة): Heavy when preceded by Fathah or Dammah (قَالَ اللَّهُ / عَبْدُ اللَّهِ). Light when preceded by Kasrah (بِسْمِ اللَّهِ / قُلِ اللَّهُمَّ)."
        ]
      },
      raaRules: {
        title: "Complete Rules of Raa (أَحْكَامُ الرَّاءِ)",
        heavyWhen: [
          "1. Raa carries Fathah or Dammah (رَبَّنَا / رُزِقْنَا).",
          "2. Raa is Saakin preceded by Fathah or Dammah (مَرْيَم / قُرْآن).",
          "3. Raa is Saakin because of stopping, preceded by a Saakin letter, preceded by Fathah/Dammah (الْعَصْرْ / خُسْرْ).",
          "4. Raa is Saakin preceded by Hamzatul-Wasl (ارْجِعِي / الَّذِي ارْتَضَىٰ)."
        ],
        lightWhen: [
          "1. Raa carries Kasrah (رِزْقًا / رِجَال).",
          "2. Raa is Saakin preceded by an original Kasrah within the same word (فِرْعَوْن / مِرْيَة).",
          "3. Raa is Saakin on stopping preceded by a Saakin letter preceded by Kasrah (حِجْرْ / السِّحْرْ).",
          "4. Raa is Saakin on stopping preceded by Yaa Saakinah (خَبِيرْ / قَدِيرْ / بَصِيرْ)."
        ],
        bothAllowed: [
          "Words where both heavy and light are permissible: فِرْقٍ (due to following heavy letter with Kasrah), and upon stopping on: مِصْرَ (Egypt) and عَيْنَ الْقِطْرِ (Molten brass)."
        ]
      },
      hamzahRules: {
        title: "Hamza-tul Qata' vs Hamza-tul Wasl (From Untitled.pdf)",
        wasl: {
          name: "Hamza-tul Wasl (Connecting Hamza - ٱ)",
          symbol: "ٱ (Letter Alif with a tiny Saad head on top)",
          rule: "Pronounced when STARTING recitation, but dropped completely into the next letter when reading continuously!",
          threeRules: [
            "Rule 1 (With Fathah): At the beginning of a noun followed by Laam Shamseeyah or Laam Qamareeyah (e.g. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ).",
            "Rule 2 (With Kasrah): At the beginning of a verb when the 3rd letter has Fathah or Kasrah (e.g. اسْتَكْبَرَ / اسْتَغْفِرْ), AND in seven specific nouns in the Quran: ابْن (Son), ابْنَة (Daughter), امْرُؤ (Man), امْرَأَة (Woman), اثْنَيْن (Two men), اثْنَتَيْن (Two women), اسْم (Name).",
            "Rule 3 (With Dammah): At the beginning of a verb when the 3rd letter of the verb has an original Dammah (e.g. اضْطُرَّ / ادْعُ إِلَىٰ سَبِيلِ رَبِّكَ)."
          ]
        },
        qata: {
          name: "Hamza-tul Qata' (Definite Hamza - أ / إ / ء / ؤ / ئ)",
          symbol: "ء / أ / إ / ؤ / ئ",
          rule: "Always, unconditionally pronounced whether starting or in the middle of continuous recitation!",
          commonMistakes: [
            "Mistake 1: Not pronouncing the Hamza clearly when repeated (e.g. ءَأَنتَ / ءَإِنَّكَ).",
            "Mistake 2: Not pronouncing the Ayn from its correct makhraj when preceded by Hamza (e.g. أَعُوذُ / أَعْلَمُ).",
            "Mistake 3: Dropping a Saakin Hamza and turning it into a Madd vowel (e.g. مُؤْصَدَةٌ / شِئْتُمْ / فَأْتُوا)."
          ]
        }
      }
    }
  },

  // ==========================================
  // SECTION 4: MY GREAT PROPHET ﷺ
  // Sources: Untitled2.pdf (I Love Islam Level 1 Unit B & D/E)
  // ==========================================
  prophet: {
    title: "My Great Prophet Muhammad ﷺ",
    subtitle: "حَبِيبُنَا وَقُدْوَتُنَا مُحَمَّدٌ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
    intro: "Explore the inspiring, beloved life of our Prophet Muhammad ﷺ directly from the 'I Love Islam' curriculum! From his childhood in Makkah and desert nursing, to his work as an honest shepherd and merchant (Al-Sadiq, Al-Ameen), to Cave Hira, his noble family, loyal companions, and Surah Quraysh.",

    chapters: [
      {
        num: 1,
        title: "His Name Was Muhammad ﷺ",
        story: "His name 'Muhammad' means 'The Praised One'. He was born in the blessed city of Makkah in Rabi' al-Awwal during the Year of the Elephant (571 CE). His father Abdullah passed away before he was born. When his grandfather Abdul Muttalib held him, he rejoiced and praised Allah!"
      },
      {
        num: 2,
        title: "Muhammad as a Child in the Desert & Family Care",
        story: "As was the custom of noble Quraysh families, baby Muhammad was cared for in the fresh, pure air of the desert by nurse Halimah As-Sa'diyyah. Halimah's household was showered with barakah! When he was 6, his loving mother Aminah passed away at Abwa. His wise grandfather Abdul Muttalib cared for him with deep love until he was 8, after which his kind uncle Abu Talib welcomed young Muhammad into his family."
      },
      {
        num: 3,
        title: "Muhammad Worked Hard: The Shepherd & Honest Merchant",
        story: "Young Muhammad ﷺ worked diligently tending sheep for the people of Makkah. He taught us: 'Every prophet of Allah was a shepherd.' Herding sheep taught him patience, gentleness, alertness, and deep care for every creature. Later, he traveled on trading caravans to Syria. Because he NEVER lied and NEVER cheated, the people of Makkah nicknamed him 'Al-Sadiq' (The Truthful) and 'Al-Ameen' (The Trustworthy)."
      },
      {
        num: 4,
        title: "The Prophet's Family & Marriage to Khadijah (R.A.)",
        story: "Impressed by his immaculate honesty, Lady Khadijah bint Khuwaylid proposed marriage. They shared a loving home. Allah blessed them with 6 children (Qasim, Abdullah, Zaynab, Ruqayyah, Umm Kulthum, Fatimah), and later Ibrahim was born in Madinah to Lady Maria."
      },
      {
        num: 5,
        title: "Muhammad Becomes a Prophet: The Cave of Hira (Iqra'!)",
        story: "At age 40, while meditating in Cave Hira atop Jabal an-Noor, Angel Jibreel (A.S.) arrived with the first words of the Quran: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ' (Recite in the name of your Lord who created!). Shivering, Muhammad ﷺ returned home. Sayyidah Khadijah comforted him: 'Never! By Allah, Allah will never disgrace you. You keep good relations with kith and kin, help the poor, and serve the guest!'"
      },
      {
        num: 6,
        title: "Sahabah: Friends of the Prophet",
        story: "The Sahabah loved the Prophet ﷺ more than their own lives! Abu Bakr As-Siddiq was the first adult man to believe. Umar Al-Farooq was the champion of justice. Uthman Dhun-Noorayn was the generous compiler of the Quran. Ali was the brave lion who slept in the Prophet's bed during the Hijrah. Brave women like Khadijah, Aisha, Asma, and Sumayyah set eternal examples of devotion!"
      }
    ],

    familyTree: {
      parents: "Father: Abdullah ibn Abdul Muttalib | Mother: Aminah bint Wahb",
      grandfather: "Abdul Muttalib (Leader of Quraysh)",
      uncle: "Abu Talib (Protector of the Prophet)",
      wives: "Sayyidah Khadijah bint Khuwaylid, Sawdah, Aisha bint Abi Bakr, Hafsah, Zaynab bint Khuzaymah, Umm Salamah, Zaynab bint Jahsh, Juwayriyyah, Umm Habibah, Safiyyah, Maymoonah, Maria (R.A.)",
      children: [
        { name: "Al-Qasim", gender: "Son", desc: "First-born son, after whom the Prophet was known as Abul-Qasim" },
        { name: "Abdullah", gender: "Son", desc: "Also nicknamed At-Tahir (the pure) and At-Tayyib" },
        { name: "Ibrahim", gender: "Son", desc: "Born in Madinah to Lady Maria, passed away as an infant" },
        { name: "Zaynab (R.A.)", gender: "Daughter", desc: "Eldest daughter, married to Abu al-Aas" },
        { name: "Ruqayyah (R.A.)", gender: "Daughter", desc: "Married Uthman ibn Affan, made Hijrah to Abyssinia and Madinah" },
        { name: "Umm Kulthum (R.A.)", gender: "Daughter", desc: "Married Uthman ibn Affan after Ruqayyah passed away" },
        { name: "Fatimah Az-Zahra (R.A.)", gender: "Daughter", desc: "The Prophet's beloved youngest daughter, mother of Hasan and Husayn" }
      ]
    },

    sahabah: [
      { name: "Abu Bakr As-Siddiq (R.A.)", title: "The Truthful First Caliph", bio: "The Prophet's closest friend, first adult man to embrace Islam, accompanied him on the Hijrah journey to Cave Thawr." },
      { name: "Umar ibn Al-Khattab (R.A.)", title: "Al-Farooq (The Distinguisher)", bio: "Known for towering strength, justice, fairness, and courage in defending Muslims." },
      { name: "Uthman ibn Affan (R.A.)", title: "Dhun-Noorayn (Two Lights)", bio: "Renowned for modesty, generosity, buying the Well of Rumah for Muslims, and unifying the Quran mushaf." },
      { name: "Ali ibn Abi Talib (R.A.)", title: "The Lion of Allah", bio: "The Prophet's cousin and son-in-law, famous for bravery, wisdom, and sleeping in the Prophet's bed to fool the Quraysh." },
      { name: "Khadijah bint Khuwaylid (R.A.)", title: "Mother of the Believers", bio: "First person to believe in Islam, supported the Prophet with all her wealth, comforting words, and love." },
      { name: "Aisha bint Abi Bakr (R.A.)", title: "The Brilliant Scholar", bio: "Narrated over 2,200 Hadiths, taught the Sahabah Islamic law, medicine, and manners." },
      { name: "Asma bint Abi Bakr (R.A.)", title: "Dhatun-Nitaqayn (Two Belts)", bio: "Heroically carried food and water through rocky mountains to the Prophet and Abu Bakr in Cave Thawr." },
      { name: "Sumayyah bint Khayyat (R.A.)", title: "First Martyr of Islam", bio: "Showed legendary bravery standing firm on Tawheed despite persecution, promised Jannah by the Prophet ﷺ." }
    ],

    surahQuraysh: {
      title: "Surah Quraysh (سُورَةُ قُرَيْش)",
      number: 106,
      versesCount: 4,
      context: "From 'I Love Islam Level 1': Allah reminded the Quraysh tribe of Makkah of His special favors. He blessed them with safety and wealth through their famous trading caravans in winter to warm Yemen and in summer to cool Syria ('Rihlatash-shitaa'i was-sayf'). In return for feeding them from hunger and protecting them from fear, Allah commanded them to worship only Him, the Lord of the Ka'bah!",
      verses: [
        {
          num: 1,
          arabic: "لِإِيلَافِ قُرَيْشٍ",
          translit: "Li-eelaafi Quraysh",
          english: "For the accustomed security of Quraysh,",
          urdu: "قریش کو مانوس کرنے کی خاطر،"
        },
        {
          num: 2,
          arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
          translit: "Eelaafihim rihlatash-shitaaa'i was-sayf",
          english: "Their accustomed security in the caravan of winter and summer -",
          urdu: "ان کے سردی اور گرمی کے سفروں سے مانوس ہونے کے سبب،"
        },
        {
          num: 3,
          arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
          translit: "Fal-ya'budoo Rabba haadhal-Bayt",
          english: "So let them worship the Lord of this Sacred House (the Ka'bah),",
          urdu: "پس انہیں چاہیے کہ اس گھر (کعبہ) کے رب کی عبادت کریں،"
        },
        {
          num: 4,
          arabic: "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ",
          translit: "Alladheee at'amahum min joo'inw-wa aamanahum min khawf",
          english: "Who has fed them, saving them from hunger, and made them safe from fear.",
          urdu: "جس نے انہیں بھوک میں کھانا کھلایا اور خوف سے امن عطا فرمایا۔"
        }
      ]
    }
  },

  // ==========================================
  // SECTION 5: WORSHIPPING ALLAH & ARKAN-UL-ISLAM
  // Sources: Untitled2.pdf (I Love Islam Level 1 Units A & C)
  // ==========================================
  worship: {
    title: "Worshipping Allah & Arkan-ul-Islam",
    subtitle: "أَرْكَانُ الإِسْلاَمِ وَالصَّلاَةُ وَالْوُضُوء - مِنْ كِتَابِ أُحِبُّ الإِسْلاَم",
    intro: "Islam is built on five golden pillars! Follow Zaid as he learns the purifying steps of Wudoo', masters every posture and prayer recitation of daily Salah, and memorizes Surah Al-Fatihah and Surah Al-Ikhlas.",

    fivePillars: [
      {
        num: 1,
        name: "Shahadah (Declaration of Faith)",
        arabic: "الشَّهَادَة: أَشْهَدُ أَنْ لاَ إِلَٰهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
        english: "Bearing witness that there is no God worthy of worship except Allah, and Muhammad ﷺ is His messenger.",
        icon: "☝️",
        color: "#10B981"
      },
      {
        num: 2,
        name: "Salah (The 5 Daily Prayers)",
        arabic: "إِقَامُ الصَّلاَة",
        english: "Praying five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) connecting our hearts directly with Allah.",
        icon: "🕌",
        color: "#0284C7"
      },
      {
        num: 3,
        name: "Zakah (Obligatory Charity)",
        arabic: "إِيتَاءُ الزَّكَاة",
        english: "Purifying our wealth by giving 2.5% of saved wealth annually to feed and care for poor brothers and sisters.",
        icon: "🪙",
        color: "#F59E0B"
      },
      {
        num: 4,
        name: "Sawm (Fasting in Ramadan)",
        arabic: "صَوْمُ رَمَضَان",
        english: "Fasting from dawn until sunset during Ramadan to build Taqwa (God-consciousness), patience, and empathy.",
        icon: "🌙",
        color: "#8B5CF6"
      },
      {
        num: 5,
        name: "Hajj (Pilgrimage to Makkah)",
        arabic: "حَجُّ الْبَيْت",
        english: "Performing pilgrimage to the Holy Ka'bah once in a lifetime for those physically and financially able.",
        icon: "🕋",
        color: "#EC4899"
      }
    ],

    wudooSteps: [
      {
        step: 1,
        title: "Intention & Bismillah",
        arabic: "النِّيَّةُ وَالتَّسْمِيَة: بِسْمِ اللَّهِ",
        desc: "Make intention in your heart to purify yourself for Allah, then say 'Bismillah' (In the name of Allah).",
        icon: "💭"
      },
      {
        step: 2,
        title: "Wash Hands up to Wrists (3 times)",
        arabic: "غَسْلُ الْكَفَّيْنِ ثَلاَثًا",
        desc: "Wash both hands completely up to the wrists 3 times, rubbing thoroughly between fingers.",
        icon: "🤲"
      },
      {
        step: 3,
        title: "Rinse the Mouth (3 times)",
        arabic: "الْمَضْمَضَةُ ثَلاَثًا",
        desc: "Take water into your mouth with your right hand, swirl it around to clean teeth and gums, and spit out.",
        icon: "💧"
      },
      {
        step: 4,
        title: "Sniff Water into Nose (3 times)",
        arabic: "الاِسْتِنْشَاقُ وَالاِسْتِنْثَارُ ثَلاَثًا",
        desc: "Sniff a little clean water into nostrils with right hand, then gently blow it out using left hand.",
        icon: "👃"
      },
      {
        step: 5,
        title: "Wash the Entire Face (3 times)",
        arabic: "غَسْلُ الْوَجْهِ ثَلاَثًا",
        desc: "Wash your face from the hairline to below chin, and from ear to ear 3 times.",
        icon: "🙂"
      },
      {
        step: 6,
        title: "Wash Arms to Elbows (3 times)",
        arabic: "غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ ثَلاَثًا",
        desc: "Wash the right arm from fingertips including elbow 3 times, then repeat with the left arm 3 times.",
        icon: "💪"
      },
      {
        step: 7,
        title: "Wipe Head with Wet Hands (Once)",
        arabic: "مَسْحُ الرَّأْسِ مَرَّةً وَاحِدَة",
        desc: "Pass wet hands from front hairline to back of neck and return once.",
        icon: "💆"
      },
      {
        step: 8,
        title: "Wipe Ears Inside & Out (Once)",
        arabic: "مَسْحُ الأُذُنَيْنِ مَرَّةً وَاحِدَة",
        desc: "Use index fingers to clean inside curves of ears and thumbs for behind the ears.",
        icon: "👂"
      },
      {
        step: 9,
        title: "Wash Feet to Ankles (3 times)",
        arabic: "غَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ ثَلاَثًا",
        desc: "Wash right foot thoroughly including ankle and between toes 3 times, then wash left foot 3 times.",
        icon: "🦶"
      },
      {
        step: 10,
        title: "Dua After Wudoo'",
        arabic: "أَشْهَدُ أَنْ لاَ إِلَٰهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
        desc: "Say: 'I bear witness that there is no God but Allah and Muhammad is His servant and messenger. O Allah, make me of the repentant and of those who purify themselves.' All 8 gates of Jannah open!",
        icon: "✨"
      }
    ],

    salahPostures: [
      {
        step: 1,
        posture: "Takbeerat-ul-Ihram & Qiyam",
        arabic: "اللَّهُ أَكْبَر",
        translit: "Allahu Akbar (Allah is the Greatest)",
        desc: "Face the Qiblah, raise hands to ears/shoulders, and declare Takbeer. Place right hand over left hand on chest with eyes looking down at place of prostration.",
        actionIcon: "🧍"
      },
      {
        step: 2,
        posture: "Recitation of Surah Al-Fatihah",
        arabic: "قِرَاءَةُ الفَاتِحَةِ وَسُورَة",
        translit: "Reciting Al-Fatihah + a short Surah",
        desc: "Recite the Opening Chapter with sincerity, followed by another passage like Surah Al-Ikhlas.",
        actionIcon: "📖"
      },
      {
        step: 3,
        posture: "Ruku' (Bowing Before Allah)",
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيم (٣ مَرَّات)",
        translit: "Subhana Rabbiyal 'Azeem (3x)",
        desc: "Say Allahu Akbar and bow straight with hands holding knees and back flat like a table. Recite: 'Glory be to my Lord, the Most Magnificent' 3 times.",
        actionIcon: "🙇"
      },
      {
        step: 4,
        posture: "Rising from Ruku' (Qawmah)",
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ • رَبَّنَا وَلَكَ الْحَمْد",
        translit: "Sami' Allahu liman hamidah • Rabbanaa wa lakal-hamd",
        desc: "Stand straight praising Allah: 'Allah hears whoever praises Him. Our Lord, all praise belongs to You.'",
        actionIcon: "🧍"
      },
      {
        step: 5,
        posture: "Sujood (Prostration on 7 Limbs)",
        arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى (٣ مَرَّات)",
        translit: "Subhana Rabbiyal A'laa (3x)",
        desc: "Prostrate with forehead, nose, two palms, two knees, and toes touching ground. Recite: 'Glory be to my Lord, the Most High' 3 times. The closest a servant is to Allah!",
        actionIcon: "🧎"
      },
      {
        step: 6,
        posture: "Jalsah (Sitting between 2 Sujoods)",
        arabic: "رَبِّ اغْفِرْ لِي ، رَبِّ اغْفِرْ لِي",
        translit: "Rabbighfir lee, Rabbighfir lee",
        desc: "Sit calmly between the two prostrations and ask: 'My Lord, forgive me, my Lord, forgive me.'",
        actionIcon: "🧘"
      },
      {
        step: 7,
        posture: "Second Sujood",
        arabic: "سُبْحَانَ رَبِّيَ الأَعْلَى (٣ مَرَّات)",
        translit: "Subhana Rabbiyal A'laa (3x)",
        desc: "Prostrate again on 7 limbs praising Allah Most High 3 times. Complete 2nd Rak'ah similarly.",
        actionIcon: "🧎"
      },
      {
        step: 8,
        posture: "Tashahhud & Salawat (At-Tahiyyat)",
        arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ... اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ...",
        translit: "At-Tahiyyaatu lillaahi was-salawaatu wat-tayyibaat...",
        desc: "Sit during the final Rak'ah, raise index finger testifying Tawheed, and send peace upon Prophet Muhammad ﷺ and Ibrahim (A.S.).",
        actionIcon: "☝️"
      },
      {
        step: 9,
        posture: "Tasleem (Concluding the Prayer)",
        arabic: "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        translit: "As-Salaamu 'Alaykum wa Rahmatullah",
        desc: "Turn your face to the right saying Salam to the angels, then to the left. Your prayer is complete with angels recording your good deeds!",
        actionIcon: "🕊️"
      }
    ],

    surahFatihah: {
      title: "Surah Al-Fatihah (The Opening - سُورَةُ الفَاتِحَة)",
      verses: [
        { num: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translit: "Bismillaahir-Rahmaanir-Raheem", english: "In the name of Allah, the Entirely Merciful, the Especially Merciful.", urdu: "اللہ کے نام سے شروع جو نہایت مہربان رحم والا ہے۔" },
        { num: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translit: "Al-hamdu lillaahi Rabbil-'aalameen", english: "All praise is due to Allah, Lord of the worlds.", urdu: "سب تعریفیں اللہ ہی کے لیے ہیں جو تمام جہانوں کا پالنے والا ہے۔" },
        { num: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", translit: "Ar-Rahmaanir-Raheem", english: "The Entirely Merciful, the Especially Merciful,", urdu: "بہت مہربان، نہایت رحم کرنے والا۔" },
        { num: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", translit: "Maaliki Yawmid-Deen", english: "Sovereign of the Day of Recompense.", urdu: "روزِ جزا کا مالک۔" },
        { num: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translit: "Iyyaaka na'budu wa iyyaaka nasta'een", english: "It is You we worship and You we ask for help.", urdu: "ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔" },
        { num: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translit: "Ihdinas-Siraatal-Mustaqeem", english: "Guide us to the straight path -", urdu: "ہمیں سیدھے راستے پر چلا۔" },
        { num: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translit: "Siraatal-ladheena an'amta 'alayhim ghayril-maghdoobi 'alayhim wa lad-daaaalleen", english: "The path of those upon whom You have bestowed favor, not of those who have evoked anger or of those who are astray.", urdu: "ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ ان کا جن پر غضب ہوا اور نہ گمراہوں کا۔" }
      ]
    },

    surahIkhlas: {
      title: "Surah Al-Ikhlas (Sincerity / Tawheed - سُورَةُ الإِخْلاَص)",
      rewardNote: "Prophet Muhammad ﷺ told us reciting Surah Al-Ikhlas equals one-third (1/3) of the entire Quran in reward!",
      verses: [
        { num: 1, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", translit: "Qul Huwal-Laahu Ahad", english: "Say, 'He is Allah, [who is] One.'", urdu: "فرما دیجیے: وہ اللہ ایک ہے۔" },
        { num: 2, arabic: "اللَّهُ الصَّمَدُ", translit: "Allaahus-Samad", english: "Allah, the Eternal Refuge (Independent, all rely on Him).", urdu: "اللہ بے نیاز ہے (سب اس کے محتاج ہیں)۔" },
        { num: 3, arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translit: "Lam yalid wa lam yoolad", english: "He neither begets nor is born,", urdu: "نہ اس نے کسی کو جنا اور نہ وہ جنا گیا۔" },
        { num: 4, arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", translit: "Wa lam yakul-lahoo kufuwan ahad", english: "Nor is there to Him any equivalent.", urdu: "اور کوئی اس کا ہمسر و برابر نہیں ہے۔" }
      ]
    }
  },

  // ==========================================
  // FLASHCARDS DATA (Arabic Letters & Tajweed)
  // ==========================================
  flashcards: [
    {
      category: "letters",
      badge: "Friendly vs Stubborn",
      frontText: "ب",
      frontSub: "Baa (Friendly Letter)",
      backTitle: "Shape Transformations",
      backContent: "Isolated: ب | Initial: بـ | Medial: ـبـ | Final: ـب",
      tip: "Friendly letter: Connects easily to letters on both sides! 1 dot underneath."
    },
    {
      category: "letters",
      badge: "Stubborn 6 Letter",
      frontText: "د",
      frontSub: "Daal (Unfriendly Letter)",
      backTitle: "The Unfriendly Rule",
      backContent: "Isolated: د | Initial: د | Medial: ـد | Final: ـد",
      tip: "One of the 6 stubborn letters! Connects from the right, but refuses to connect on the left! Leave a space after it."
    },
    {
      category: "letters",
      badge: "Shape-Shifter",
      frontText: "هـ",
      frontSub: "Letter Haa (3 Different Shapes)",
      backTitle: "How Haa Transforms",
      backContent: "Initial: هـ (Daal with circle) | Medial: ـهـ (Number 8) | Final: ـه / ه (Round knot)",
      tip: "Master this shape-shifter: Changes completely in beginning, middle, and end!"
    },
    {
      category: "letters",
      badge: "Hamza Chairs",
      frontText: "ء أ ؤ ئـ",
      frontSub: "The 4 Seats of Hamza",
      backTitle: "Hamza Chairs",
      backContent: "On the line (ء), On Alif (أ), On Waaw (ؤ), On Nabrah/Yaa (ئـ)",
      tip: "Hamza is spoiled and needs a chair, or comes independently alone on the line!"
    },
    {
      category: "tajweed",
      badge: "Noon Saakin",
      frontText: "الإِظْهَار",
      frontSub: "Izhaar (6 Throat Letters)",
      backTitle: "ء ، هـ ، ع ، ح ، غ ، خ",
      backContent: "Pronounce Noon Saakin completely CLEAR without extra Ghunnah humming!",
      tip: "Look for equal parallel Tanween strokes in the Quran."
    },
    {
      category: "tajweed",
      badge: "Noon Saakin",
      frontText: "الإِدْغَام",
      frontSub: "Idgham (Letters of يرملون)",
      backTitle: "With & Without Ghunnah",
      backContent: "With Ghunnah (YANMOO): ي ن م و | Without Ghunnah: ل ر",
      tip: "Merge Noon into the next letter. With Ghunnah has a sweet 2-beat nasal melody!"
    },
    {
      category: "tajweed",
      badge: "Noon Saakin",
      frontText: "الإِقْلاَب",
      frontSub: "Iqlaab (Conversion to Meem)",
      backTitle: "Letter: ب (Baa) only!",
      backContent: "Turns the Noon sound into a gentle Meem with 2 counts of Ghunnah (مِنۢ بَعْدِ).",
      tip: "Marked in the Quran by a tiny cute vertical Meem (ـۢ) above the word!"
    },
    {
      category: "tajweed",
      badge: "Qalqalah Echo",
      frontText: "قُطْبُ جَدّ",
      frontSub: "The 5 Qalqalah Letters (ق ط ب ج د)",
      backTitle: "3 Levels of Qalqalah",
      backContent: "Sughra (in middle of word) | Wusta (stopping at end) | Kubra (stopping with Shaddah)",
      tip: "Bounces like a rubber ball when carrying a Sukoon!"
    },
    {
      category: "tajweed",
      badge: "Hamzatul Wasl",
      frontText: "ٱ",
      frontSub: "Connecting Hamza (Hamzatul Wasl)",
      backTitle: "Read at start, drop on join",
      backContent: "Read with Fathah with Laam (الْحَمْدُ), Kasrah with 3rd letter Kasrah/Fathah & 7 nouns, Dammah with 3rd letter Dammah.",
      tip: "Dropped completely when reading continuously with the preceding word!"
    }
  ],

  // ==========================================
  // QUIZ QUESTIONS FOR EVERY CHAPTER
  // ==========================================
  quizzes: [
    {
      chapter: "alphabet",
      title: "Arabic Alphabet & Letter Shapes Quiz",
      questions: [
        {
          q: "How many letters are in the 'Unfriendly / Stubborn' group that do NOT connect from the left?",
          options: ["4 letters", "6 letters (ا ، د ، ذ ، ر ، ز ، و)", "8 letters", "10 letters"],
          answer: 1,
          hint: "Think of Alif, Daal, Dhaal, Raa, Zay, and Waaw."
        },
        {
          q: "How does the letter Haa (هـ) look in the middle of a word?",
          options: ["Like a straight line", "Like the number 8 (ـهـ)", "Like a box", "Like a dot"],
          answer: 1,
          hint: "Ms. Abrar Ragab teaches it looks like number 8 in the middle!"
        },
        {
          q: "What chair is Hamza sitting on in the word 'مُؤْمِن' (Mu'min)?",
          options: ["On the line (ء)", "On Alif (أ)", "On Waaw (ؤ)", "On Nabrah (ئ)"],
          answer: 2,
          hint: "Look at the letter underneath the Hamza."
        }
      ]
    },
    {
      chapter: "harakat",
      title: "Harakat & Tanween Quiz",
      questions: [
        {
          q: "What English sound does Fathah (ـَ) resemble?",
          options: ["'u' as in push", "'i' as in tin", "'a' as in man", "'oo' as in moon"],
          answer: 2,
          hint: "Instructor Abdurrahman Mustafa explains it sounds like 'a' in man!"
        },
        {
          q: "When stopping on Tanween of Fathah (e.g. كِتَابًا), what does it become?",
          options: ["A silent rest", "Madd 'Ewad stretched for 2 counts (كِتَابَا)", "A harsh click", "Dammah"],
          answer: 1,
          hint: "It turns into an Alif Madd stretched for 2 counts (Madd 'Ewad)."
        },
        {
          q: "What makes a 'Leen' letter in words like 'خَوْف' (Khawf) and 'بَيْت' (Bayt)?",
          options: ["Waw or Yaa with Sukoon preceded by Fathah", "Any letter with Shaddah", "Alif with Dammah", "Kasrah before Meem"],
          answer: 0,
          hint: "Fathah followed by Waw Saakin or Yaa Saakin creates soft gliding Leen!"
        }
      ]
    },
    {
      chapter: "tajweed",
      title: "Tajweed Rules Champion Quiz",
      questions: [
        {
          q: "What rule applies when Noon Saakin is followed by one of the 6 throat letters (ء هـ ع ح غ خ)?",
          options: ["Ikhfaa (Hiding)", "Izhaar (Clear pronunciation)", "Idgham (Merging)", "Iqlaab (Turning to Meem)"],
          answer: 1,
          hint: "Izhaar means clear, with zero extra nasal humming."
        },
        {
          q: "Which letter triggers Iqlaab, turning Noon Saakin or Tanween into a gentle Meem?",
          options: ["The letter ب (Baa)", "The letter ر (Raa)", "The letter م (Meem)", "The letter ك (Kaaf)"],
          answer: 0,
          hint: "Just 1 letter: Baa!"
        },
        {
          q: "What are the 5 Qalqalah bouncing letters remembered by the phrase?",
          options: ["يرملون (Yarmaloon)", "قُطْبُ جَدّ (Qutbu Jadd)", "ينمو (Yanmoo)", "خص ضغط قظ"],
          answer: 1,
          hint: "Qaaf, Taa, Baa, Jeem, Daal!"
        },
        {
          q: "What is the highest and 'Most Complete' rank of Ghunnah (أَكْمَلُ مَا تَكُون)?",
          options: ["Noon and Meem with Shaddah (نّ / مّ)", "Izhaar of Noon Saakin", "Short vowels", "Sukoon"],
          answer: 0,
          hint: "Doubled stressed Noon and Meem with Shaddah hold the longest, fullest melody."
        }
      ]
    },
    {
      chapter: "prophet",
      title: "My Great Prophet Muhammad ﷺ Quiz",
      questions: [
        {
          q: "What two titles did the people of Makkah give young Prophet Muhammad ﷺ due to his supreme honesty?",
          options: ["Al-Malik and Al-Wazeer", "Al-Sadiq (The Truthful) & Al-Ameen (The Trustworthy)", "Al-Qawi and Al-Hakeem", "Al-Fatih and Al-Ghalib"],
          answer: 1,
          hint: "Known for complete truthfulness and trustworthiness."
        },
        {
          q: "What profession did young Muhammad ﷺ practice that taught him patience and gentleness?",
          options: ["Shepherd (tending sheep)", "Blacksmith", "Fisherman", "Carpenter"],
          answer: 0,
          hint: "Every prophet of Allah was a shepherd caring for sheep."
        },
        {
          q: "In Surah Quraysh, which two seasonal trade journeys did Allah make safe for Quraysh?",
          options: ["Spring and Autumn", "Winter and Summer (الشِّتَاءِ وَالصَّيْفِ)", "Day and Night", "North and South"],
          answer: 1,
          hint: "'Rihlatash-shitaa'i was-sayf'!"
        }
      ]
    },
    {
      chapter: "worship",
      title: "Pillars of Islam, Wudoo' & Salah Quiz",
      questions: [
        {
          q: "How many obligatory daily prayers (Salah) are there in Islam?",
          options: ["3 prayers", "5 prayers (Fajr, Dhuhr, Asr, Maghrib, Isha)", "7 prayers", "10 prayers"],
          answer: 1,
          hint: "Five daily prayers connecting us with Allah."
        },
        {
          q: "In Wudoo', how many times is it Sunnah to wash our hands, mouth, nose, face, and arms?",
          options: ["Once only", "2 times", "3 times", "5 times"],
          answer: 2,
          hint: "The Sunnah is washing each part 3 times thoroughly."
        },
        {
          q: "What do we say while in Ruku' (bowing in prayer)?",
          options: ["Subhana Rabbiyal 'Azeem (3x)", "Subhana Rabbiyal A'laa (3x)", "Allahu Akbar once", "Alhamdulillah"],
          answer: 0,
          hint: "'Glory be to my Lord, the Most Magnificent'."
        },
        {
          q: "Reciting Surah Al-Ikhlas (قُلْ هُوَ اللَّهُ أَحَدٌ) equals what fraction of the Quran in reward?",
          options: ["One half (1/2)", "One third (1/3)", "One quarter (1/4)", "The entire Quran"],
          answer: 1,
          hint: "Prophet Muhammad ﷺ said it equals one third (1/3) of the Quran!"
        }
      ]
    }
  ],

  // ==========================================
  // WORD MATCHING GAME DATA
  // ==========================================
  matchingGame: [
    {
      category: "tajweed",
      title: "Tajweed Rules Matcher",
      pairs: [
        { left: "مَن يَقُولُ", right: "Idgham with Ghunnah (ي)", id: 1 },
        { left: "مِنۢ بَعْدِ", right: "Iqlaab (turns to Meem)", id: 2 },
        { left: "أَنْعَمْتَ", right: "Izhaar (Clear Noon before ع)", id: 3 },
        { left: "الْفَلَقْ", right: "Qalqalah Wusta (Bounce on ق)", id: 4 },
        { left: "مِن لَّدُنْهُ", right: "Idgham without Ghunnah (ل)", id: 5 }
      ]
    },
    {
      category: "harakat",
      title: "Harakat & Symbols Matcher",
      pairs: [
        { left: "فَتْحَة (ـَ)", right: "'a' in man, open mouth smiling", id: 1 },
        { left: "كَسْرَة (ـِ)", right: "'i' in tin, lower jaw down", id: 2 },
        { left: "ضَمَّة (ـُ)", right: "'u' in push, circle two lips", id: 3 },
        { left: "سُكُون (ـْ)", right: "Resting stop mark with no vowel", id: 4 },
        { left: "شَدَّة (ـّ)", right: "Doubled letter crown of emphasis", id: 5 }
      ]
    },
    {
      category: "letters",
      title: "Friendly vs Unfriendly Matcher",
      pairs: [
        { left: "Letter د (Daal)", right: "Unfriendly (Refuses left connection)", id: 1 },
        { left: "Letter ب (Baa)", right: "Friendly (Connects both sides)", id: 2 },
        { left: "Letter و (Waaw)", right: "Unfriendly (6 Stubborn letters)", id: 3 },
        { left: "Letter هـ (Haa)", right: "Shape-shifter (Initial, Medial, Final)", id: 4 },
        { left: "Letter ر (Raa)", right: "Unfriendly (Leaves a space after)", id: 5 }
      ]
    }
  ],

  // ==========================================
  // MEMORY FLIP GAME DATA
  // ==========================================
  memoryGame: [
    { id: 1, front: "ب", back: "Baa (Boat with 1 Dot)", pairId: "baa" },
    { id: 2, front: "Boat with 1 Dot", back: "ب", pairId: "baa" },
    { id: 3, front: "قُطْبُ جَدّ", back: "5 Qalqalah Letters", pairId: "qalqala" },
    { id: 4, front: "5 Qalqalah Letters", back: "قُطْبُ جَدّ", pairId: "qalqala" },
    { id: 5, front: "Al-Ameen", back: "The Trustworthy ﷺ", pairId: "ameen" },
    { id: 6, front: "The Trustworthy ﷺ", back: "Al-Ameen", pairId: "ameen" },
    { id: 7, front: "Cave Hira", back: "First Revelation (Iqra')", pairId: "hira" },
    { id: 8, front: "First Revelation (Iqra')", back: "Cave Hira", pairId: "hira" },
    { id: 9, front: "Surah Al-Ikhlas", back: "1/3 of the Holy Quran", pairId: "ikhlas" },
    { id: 10, front: "1/3 of the Holy Quran", back: "Surah Al-Ikhlas", pairId: "ikhlas" },
    { id: 11, front: "5 Daily Prayers", back: "Pillar of Salah 🕌", pairId: "salah" },
    { id: 12, front: "Pillar of Salah 🕌", back: "5 Daily Prayers", pairId: "salah" }
  ]
};

// Export to window for vanilla browser script access
if (typeof window !== "undefined") {
  window.CURRICULUM_DATA = CURRICULUM_DATA;
}
