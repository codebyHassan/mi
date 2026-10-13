/**
 * Quran & Tajweed Curriculum Library - Main Application Logic
 * Book-based dashboard + step-by-step lesson viewer built directly from
 * the original PDF page images (see books.js, auto-generated from the PDFs).
 * Includes the practice games, quiz, memory cards, flashcards, profile,
 * Salah tracker and confetti celebration.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // APP STATE & LOCAL STORAGE
  // ==========================================
  const AppState = {
    stars: parseInt(localStorage.getItem('noor_stars') || '25', 10),
    badges: JSON.parse(localStorage.getItem('noor_badges') || '[]'),
    salahChecks: JSON.parse(localStorage.getItem('noor_salah_checks') || '{}'),
    bookProgress: JSON.parse(localStorage.getItem('noor_book_progress') || '{}'),
    activeView: 'view-library',
    currentBookSlug: null,
    currentLesson: 0,
    flashcardIdx: 0,
    currentMatchingCat: 0,
    selectedMatchLeft: null,
    matchedPairsCount: 0,
    currentQuizChapter: 0,
    currentQuizQIndex: 0,
    quizScore: 0,
    memoryFlippedCards: [],
    memoryMatchedCount: 0,
    isMemoryLocked: false
  };

  const BADGES_LIST = [
    { id: 'bookworm', title: 'Library Bookworm', icon: '📚', desc: 'Finished every lesson of a book' },
    { id: 'first_lesson', title: 'First Steps', icon: '🌱', desc: 'Completed your very first lesson' },
    { id: 'alpha_champ', title: 'Alphabet Champ', icon: '🔤', desc: 'Solved the Alphabet & Shapes quiz' },
    { id: 'harakat_hero', title: 'Harakat Hero', icon: '✨', desc: 'Solved the Harakat & Tanween quiz' },
    { id: 'tajweed_star', title: 'Tajweed Star', icon: '📜', desc: 'Solved the Tajweed rules & matching challenges' },
    { id: 'seerah_scholar', title: "Prophet's Historian", icon: '🕊️', desc: 'Learned about Prophet Muhammad ﷺ & Sahabah' },
    { id: 'memory_wizard', title: 'Memory Wizard', icon: '🃏', desc: 'Matched all pairs in the Memory Flip Game' }
  ];

  // Helper to save state
  function saveState() {
    localStorage.setItem('noor_stars', AppState.stars.toString());
    localStorage.setItem('noor_badges', JSON.stringify(AppState.badges));
    localStorage.setItem('noor_salah_checks', JSON.stringify(AppState.salahChecks));
    localStorage.setItem('noor_book_progress', JSON.stringify(AppState.bookProgress));
    updateHeaderCounters();
  }

  // Add stars with sound & visual feedback
  function awardStars(amount = 5, reason = '') {
    AppState.stars += amount;
    saveState();
    window.Sound && window.Sound.playStar();
    showCelebrationToast(`+${amount} Stars Earned! ⭐`, reason || "MashaAllah! Great work!");
  }

  // Unlock badge
  function unlockBadge(badgeId) {
    if (!AppState.badges.includes(badgeId)) {
      AppState.badges.push(badgeId);
      saveState();
      const badge = BADGES_LIST.find(b => b.id === badgeId);
      if (badge) {
        window.Sound && window.Sound.playCelebration();
        triggerConfetti();
        showCelebrationModal(`🏅 Badge Unlocked: ${badge.title}!`, badge.desc);
      }
    }
  }

  // Update header counters & profile stats
  function updateHeaderCounters() {
    const starDisplay = document.getElementById('starCounterDisplay');
    if (starDisplay) starDisplay.textContent = AppState.stars;

    const profileStars = document.getElementById('profileStarsCount');
    if (profileStars) profileStars.textContent = AppState.stars;

    const profileBadges = document.getElementById('profileBadgesCount');
    if (profileBadges) profileBadges.textContent = `${AppState.badges.length} / ${BADGES_LIST.length}`;

    const rankTitle = document.getElementById('profileRankTitle');
    if (rankTitle) {
      if (AppState.stars >= 100) rankTitle.textContent = "🏆 Master Tajweed Scholar";
      else if (AppState.stars >= 50) rankTitle.textContent = "⭐ Shining Quran Star";
      else if (AppState.stars >= 25) rankTitle.textContent = "📖 Dedicated Student";
      else rankTitle.textContent = "🌱 Seeker of Knowledge";
    }
  }

  // ==========================================
  // CONFETTI CELEBRATION ENGINE
  // ==========================================
  const confettiCanvas = document.getElementById('confettiCanvas');
  const confettiCtx = confettiCanvas.getContext('2d');
  let confettiParticles = [];
  let confettiAnimationId = null;

  function resizeCanvas() {
    if (confettiCanvas) {
      confettiCanvas.width = window.innerWidth;
      confettiCanvas.height = window.innerHeight;
    }
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function triggerConfetti() {
    resizeCanvas();
    const colors = ['#10B981', '#F59E0B', '#38BDF8', '#EC4899', '#8B5CF6', '#FBBF24', '#FFFFFF'];
    confettiParticles = [];

    for (let i = 0; i < 120; i++) {
      confettiParticles.push({
        x: window.innerWidth / 2 + (Math.random() * 200 - 100),
        y: window.innerHeight / 2 - 50,
        w: Math.random() * 12 + 6,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 18 - 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.35,
        opacity: 1
      });
    }

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    animateConfetti();
  }

  function animateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let alive = false;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.008;

      if (p.opacity > 0) {
        alive = true;
        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rotation * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.globalAlpha = Math.max(0, p.opacity);
        confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        confettiCtx.restore();
      }
    });

    if (alive) {
      confettiAnimationId = requestAnimationFrame(animateConfetti);
    } else {
      confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  // ==========================================
  // NAVIGATION & VIEW SWITCHER
  // ==========================================
  function switchView(targetViewId) {
    window.Sound && window.Sound.playClick();
    AppState.activeView = targetViewId;

    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const targetSec = document.getElementById(targetViewId);
    if (targetSec) {
      targetSec.classList.add('active');
      window.scrollTo({ top: targetViewId === 'view-course' ? 0 : 380, behavior: 'smooth' });
    }

    // Highlight the nav button that owns this view (course belongs to library)
    const navTarget = (targetViewId === 'view-course') ? 'view-library' : targetViewId;
    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-target') === navTarget);
    });
  }

  // Nav buttons click
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      switchView(target);
    });
  });

  // Hero action buttons
  document.getElementById('brandLogoBtn')?.addEventListener('click', () => {
    switchView('view-library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('startLearningHeroBtn')?.addEventListener('click', () => {
    switchView('view-library');
  });

  document.getElementById('playGamesHeroBtn')?.addEventListener('click', () => {
    switchView('view-games');
  });

  // Sound toggle button
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const state = window.Sound.toggleSound();
      soundBtn.textContent = state ? '🔊' : '🔇';
      showCelebrationToast(state ? 'Sound Enabled 🔊' : 'Sound Muted 🔇', '');
    });
  }

  // ==========================================
  // MODAL HANDLERS
  // ==========================================
  const profileModal = document.getElementById('profileModalBackdrop');
  const celebrationModal = document.getElementById('celebrationModalBackdrop');

  document.getElementById('openProfileBtn')?.addEventListener('click', () => {
    window.Sound && window.Sound.playClick();
    renderProfileBadges();
    renderSalahTracker();
    profileModal.classList.add('show');
  });

  document.getElementById('starPillBtn')?.addEventListener('click', () => {
    window.Sound && window.Sound.playClick();
    renderProfileBadges();
    renderSalahTracker();
    profileModal.classList.add('show');
  });

  document.getElementById('closeProfileModalBtn')?.addEventListener('click', () => {
    profileModal.classList.remove('show');
  });

  profileModal?.addEventListener('click', (e) => {
    if (e.target === profileModal) profileModal.classList.remove('show');
  });

  function showCelebrationModal(title, desc) {
    const modalTitle = document.getElementById('celebrationTitle');
    const modalDesc = document.getElementById('celebrationDesc');
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    celebrationModal.classList.add('show');
  }

  document.getElementById('closeCelebrationModalBtn')?.addEventListener('click', () => {
    celebrationModal.classList.remove('show');
  });

  celebrationModal?.addEventListener('click', (e) => {
    if (e.target === celebrationModal) celebrationModal.classList.remove('show');
  });

  // Cheerful floating toast
  function showCelebrationToast(msg, sub = '') {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.background = 'linear-gradient(135deg, #0D6E4F 0%, #059669 100%)';
    toast.style.color = '#FFFFFF';
    toast.style.padding = '0.9rem 1.4rem';
    toast.style.borderRadius = '16px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    toast.style.zIndex = '99999';
    toast.style.fontWeight = '700';
    toast.style.border = '2px solid #F59E0B';
    toast.style.animation = 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    toast.innerHTML = `<div>${msg}</div>${sub ? `<div style="font-size:0.85rem; font-weight:500; color:#FDE68A;">${sub}</div>` : ''}`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.4s';
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  // ==========================================
  // BOOK LIBRARY RENDERER
  // ==========================================
  function getBookProgress(slug) {
    const done = AppState.bookProgress[slug] || [];
    const book = BOOKS.find(b => b.slug === slug);
    const total = book ? book.lessons.length : 0;
    return { done: done.length, total, pct: total ? Math.round((done.length / total) * 100) : 0 };
  }

  function renderLibrary() {
    const grid = document.getElementById('bookLibraryGrid');
    if (!grid || typeof BOOKS === 'undefined') return;

    grid.innerHTML = BOOKS.map(book => {
      const prog = getBookProgress(book.slug);
      return `
        <article class="book-card" data-slug="${book.slug}">
          <div class="book-cover-wrap">
            <img class="book-cover" src="${book.cover}" alt="${book.title} cover" loading="lazy">
            <span class="book-page-badge">${book.pageCount} pages</span>
          </div>
          <div class="book-card-body">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-subtitle" dir="rtl">${book.subtitle}</p>
            <p class="book-author">✍️ ${book.author}</p>
            <p class="book-desc">${book.description}</p>
            <div class="book-progress-row">
              <div class="book-progress-track"><div class="book-progress-fill" style="width:${prog.pct}%"></div></div>
              <span class="book-progress-text">${prog.done}/${prog.total} lessons</span>
            </div>
            <button class="btn-primary book-open-btn">Open Course →</button>
          </div>
        </article>
      `;
    }).join('');

    document.querySelectorAll('.book-card').forEach(card => {
      card.addEventListener('click', () => openCourse(card.getAttribute('data-slug')));
    });
  }

  // ==========================================
  // COURSE & LESSON VIEWER
  // ==========================================
  const ARABIC_RE = /[\u0600-\u06FF]/;

  function findBook(slug) {
    return BOOKS.find(b => b.slug === slug);
  }

  function openCourse(slug) {
    const book = findBook(slug);
    if (!book) return;
    AppState.currentBookSlug = slug;
    AppState.currentLesson = 0;
    renderCourseHeader(book);
    renderLesson(book, 0);
    switchView('view-course');
  }

  function renderCourseHeader(book) {
    const header = document.getElementById('courseHeader');
    if (!header) return;
    const prog = getBookProgress(book.slug);
    header.innerHTML = `
      <div class="course-header-card">
        <img class="course-header-cover" src="${book.cover}" alt="${book.title} cover">
        <div class="course-header-info">
          <span class="course-tag">📖 Complete Course</span>
          <h2 class="course-title">${book.title}</h2>
          <p class="course-subtitle" dir="rtl">${book.subtitle}</p>
          <p class="course-author">✍️ ${book.author} • ${book.pageCount} pages • ${book.lessons.length} lessons</p>
          <p class="course-desc">${book.description}</p>
          <div class="course-progress-row">
            <div class="book-progress-track"><div class="book-progress-fill" id="courseProgressFill" style="width:${prog.pct}%"></div></div>
            <span class="book-progress-text" id="courseProgressText">${prog.done}/${prog.total} lessons completed</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderStepper(book, activeIdx) {
    const stepper = document.getElementById('lessonStepper');
    if (!stepper) return;
    const done = AppState.bookProgress[book.slug] || [];
    stepper.innerHTML = book.lessons.map((lesson, i) => {
      const isDone = done.includes(lesson.num);
      return `
        <button class="stepper-item ${i === activeIdx ? 'active' : ''} ${isDone ? 'done' : ''}" data-lesson="${i}">
          <span class="stepper-num">${isDone ? '✓' : lesson.num}</span>
          <span class="stepper-label">${lesson.title}</span>
        </button>
      `;
    }).join('');

    stepper.querySelectorAll('.stepper-item').forEach(item => {
      item.addEventListener('click', () => {
        renderLesson(book, parseInt(item.getAttribute('data-lesson'), 10));
      });
    });

    const active = stepper.querySelector('.stepper-item.active');
    if (active) active.scrollIntoView({ block: 'nearest' });
  }

  function renderLesson(book, idx) {
    idx = Math.max(0, Math.min(idx, book.lessons.length - 1));
    AppState.currentLesson = idx;
    const lesson = book.lessons[idx];
    const done = AppState.bookProgress[book.slug] || [];
    const isDone = done.includes(lesson.num);

    renderStepper(book, idx);

    const viewer = document.getElementById('lessonViewer');
    if (!viewer) return;

    const pagesHtml = lesson.pages.map((src, i) => `
      <figure class="lesson-page-figure">
        <img class="lesson-page-img" src="${src}"
          alt="${book.title} — ${lesson.title} — page ${lesson.firstPage + i}"
          loading="lazy" onclick="window.open('${src}', '_blank')">
        <figcaption>Page ${lesson.firstPage + i} of ${book.pageCount} — tap image to open full size</figcaption>
      </figure>
    `).join('');

    const hasText = !!(lesson.text && lesson.text.trim());
    const hasArabic = hasText && ARABIC_RE.test(lesson.text);
    const textHtml = hasText ? `
      <details class="lesson-text-panel" open>
        <summary>📝 Text extracted from this lesson ${hasArabic ? `<button class="pronounce-btn lesson-listen-btn" data-speak="${encodeURIComponent(lesson.text)}" title="Listen">🔊</button>` : ''}</summary>
        <p class="lesson-text-body" ${hasArabic ? 'dir="rtl"' : ''}>${lesson.text}</p>
      </details>
    ` : '';

    viewer.innerHTML = `
      <div class="lesson-viewer-head">
        <div>
          <span class="lesson-kicker">Lesson ${lesson.num} of ${book.lessons.length}</span>
          <h3 class="lesson-title-text">${lesson.title}</h3>
        </div>
        <span class="lesson-status ${isDone ? 'done' : ''}">${isDone ? '✅ Completed' : '⏳ In progress'}</span>
      </div>

      <div class="lesson-pages-stack">${pagesHtml}</div>
      ${textHtml}

      <div class="lesson-nav-row">
        <button class="btn-secondary lesson-nav-btn" id="lessonPrevBtn" ${idx === 0 ? 'disabled' : ''}>⬅️ Previous Lesson</button>
        <button class="btn-secondary lesson-complete-btn ${isDone ? 'done' : ''}" id="lessonCompleteBtn">
          ${isDone ? '✅ Completed' : '✅ Mark Complete'}
        </button>
        <button class="btn-primary lesson-nav-btn" id="lessonNextBtn" ${idx === book.lessons.length - 1 ? 'disabled' : ''}>Next Lesson ➡️</button>
      </div>
    `;

    // Wire lesson controls
    document.getElementById('lessonPrevBtn')?.addEventListener('click', () => {
      window.Sound && window.Sound.playClick();
      renderLesson(book, idx - 1);
    });
    document.getElementById('lessonNextBtn')?.addEventListener('click', () => {
      window.Sound && window.Sound.playClick();
      renderLesson(book, idx + 1);
    });
    document.getElementById('lessonCompleteBtn')?.addEventListener('click', () => {
      completeLesson(book, lesson);
    });
    viewer.querySelectorAll('.lesson-listen-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.Sound && window.Sound.speakArabic(decodeURIComponent(btn.getAttribute('data-speak')));
      });
    });

    const main = document.querySelector('.lesson-main');
    if (main) main.scrollIntoView({ block: 'start' });
  }

  function completeLesson(book, lesson) {
    if (!AppState.bookProgress[book.slug]) AppState.bookProgress[book.slug] = [];
    const done = AppState.bookProgress[book.slug];

    if (!done.includes(lesson.num)) {
      done.push(lesson.num);
      window.Sound && window.Sound.playCorrect();
      saveState();
      unlockBadge('first_lesson');
      awardStars(5, `Completed: ${book.title} — ${lesson.title}`);

      renderCourseHeader(book);
      renderLesson(book, AppState.currentLesson);

      const prog = getBookProgress(book.slug);
      if (prog.done === prog.total) {
        window.Sound && window.Sound.playCelebration();
        triggerConfetti();
        unlockBadge('bookworm');
        showCelebrationModal(`🎉 Book Completed!`, `MashaAllah! You finished every lesson of "${book.title}"! ${book.lessons.length} lessons complete.`);
      }
    } else {
      // Already complete — just move on
      if (AppState.currentLesson < book.lessons.length - 1) {
        renderLesson(book, AppState.currentLesson + 1);
      }
    }
  }

  document.getElementById('courseBackBtn')?.addEventListener('click', () => {
    window.Sound && window.Sound.playClick();
    renderLibrary();
    switchView('view-library');
  });

  // ==========================================
  // FLASHCARDS ENGINE
  // ==========================================
  function renderFlashcard() {
    const cards = CURRICULUM_DATA.flashcards;
    if (!cards || cards.length === 0) return;

    const card = cards[AppState.flashcardIdx];
    const frontBadge = document.getElementById('fcBadgeFront');
    const frontArabic = document.getElementById('fcArabicFront');
    const frontSub = document.getElementById('fcSubFront');
    const backBadge = document.getElementById('fcBadgeBack');
    const backTitle = document.getElementById('fcTitleBack');
    const backContent = document.getElementById('fcContentBack');
    const backTip = document.getElementById('fcTipBack');
    const counter = document.getElementById('fcCounterDisplay');

    if (frontBadge) frontBadge.textContent = card.badge;
    if (frontArabic) frontArabic.textContent = card.frontText;
    if (frontSub) frontSub.textContent = card.frontSub;
    if (backBadge) backBadge.textContent = card.badge;
    if (backTitle) backTitle.textContent = card.backTitle;
    if (backContent) backContent.textContent = card.backContent;
    if (backTip) backTip.textContent = card.tip;
    if (counter) counter.textContent = `Card ${AppState.flashcardIdx + 1} / ${cards.length}`;

    const activeCard = document.getElementById('activeFlipCard');
    if (activeCard) activeCard.classList.remove('flipped');
  }

  const activeFlipCard = document.getElementById('activeFlipCard');
  if (activeFlipCard) {
    activeFlipCard.addEventListener('click', () => {
      window.Sound && window.Sound.playFlip();
      activeFlipCard.classList.toggle('flipped');
    });
  }

  document.getElementById('fcPrevBtn')?.addEventListener('click', () => {
    window.Sound && window.Sound.playClick();
    const len = CURRICULUM_DATA.flashcards.length;
    AppState.flashcardIdx = (AppState.flashcardIdx - 1 + len) % len;
    renderFlashcard();
  });

  document.getElementById('fcNextBtn')?.addEventListener('click', () => {
    window.Sound && window.Sound.playClick();
    const len = CURRICULUM_DATA.flashcards.length;
    AppState.flashcardIdx = (AppState.flashcardIdx + 1) % len;
    renderFlashcard();
  });

  // ==========================================
  // MINI-GAMES HUB TABS
  // ==========================================
  document.querySelectorAll('.game-tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      window.Sound && window.Sound.playClick();
      document.querySelectorAll('.game-tab-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const game = pill.getAttribute('data-game');
      document.querySelectorAll('.game-arena-content').forEach(arena => {
        arena.style.display = 'none';
      });

      const activeArena = document.getElementById(`arena-${game}`);
      if (activeArena) activeArena.style.display = 'block';

      if (game === 'matching') initMatchingGame();
      if (game === 'quiz') initQuiz();
      if (game === 'memory') initMemoryGame();
      if (game === 'flashcards') renderFlashcard();
    });
  });

  // ==========================================
  // GAME 1: WORD MATCHING GAME
  // ==========================================
  function initMatchingGame(catIndex = 0) {
    AppState.currentMatchingCat = catIndex;
    AppState.selectedMatchLeft = null;
    AppState.matchedPairsCount = 0;

    const gameData = CURRICULUM_DATA.matchingGame[catIndex];
    if (!gameData) return;

    document.getElementById('matchCategoryTitle').textContent = gameData.title;

    document.querySelectorAll('#matchSubTabs .submodule-btn').forEach((b, idx) => {
      b.classList.toggle('active', idx === catIndex);
    });

    const leftCol = document.getElementById('matchingLeftColumn');
    const rightCol = document.getElementById('matchingRightColumn');

    const leftItems = [...gameData.pairs];
    const rightItems = [...gameData.pairs].sort(() => Math.random() - 0.5);

    leftCol.innerHTML = leftItems.map(p => `
      <button class="match-card-btn ${catIndex === 0 ? 'arabic-text' : ''}" data-id="${p.id}" data-side="left">
        ${p.left}
      </button>
    `).join('');

    rightCol.innerHTML = rightItems.map(p => `
      <button class="match-card-btn" data-id="${p.id}" data-side="right">
        ${p.right}
      </button>
    `).join('');

    document.querySelectorAll('.match-card-btn').forEach(btn => {
      btn.addEventListener('click', handleMatchCardClick);
    });
  }

  document.querySelectorAll('#matchSubTabs .submodule-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = parseInt(btn.getAttribute('data-matchcat'), 10);
      initMatchingGame(cat);
    });
  });

  function handleMatchCardClick(e) {
    const btn = e.currentTarget;
    if (btn.classList.contains('matched')) return;

    const side = btn.getAttribute('data-side');
    const id = btn.getAttribute('data-id');

    window.Sound && window.Sound.playClick();

    if (side === 'left') {
      document.querySelectorAll('[data-side="left"]').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      AppState.selectedMatchLeft = id;
    } else if (side === 'right') {
      if (!AppState.selectedMatchLeft) {
        showCelebrationToast('Select an item on the left first! 👈', '');
        return;
      }

      if (AppState.selectedMatchLeft === id) {
        window.Sound && window.Sound.playCorrect();
        const leftBtn = document.querySelector(`[data-side="left"][data-id="${id}"]`);
        leftBtn.classList.remove('selected');
        leftBtn.classList.add('matched');
        btn.classList.add('matched');
        AppState.selectedMatchLeft = null;
        AppState.matchedPairsCount++;

        const totalPairs = CURRICULUM_DATA.matchingGame[AppState.currentMatchingCat].pairs.length;
        if (AppState.matchedPairsCount === totalPairs) {
          awardStars(5, "Completed the Matching Challenge!");
          unlockBadge('tajweed_star');
          triggerConfetti();
          window.Sound && window.Sound.playCelebration();
          showCelebrationModal("MashaAllah! All Matched!", "You successfully paired all rules and terms correctly! +5 Stars awarded! 🌟");
        }
      } else {
        window.Sound && window.Sound.playWrong();
        btn.classList.add('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 500);
      }
    }
  }

  // ==========================================
  // GAME 2: MCQ QUIZ ENGINE
  // ==========================================
  function initQuiz(chapterIdx = 0) {
    AppState.currentQuizChapter = chapterIdx;
    AppState.currentQuizQIndex = 0;
    AppState.quizScore = 0;

    const select = document.getElementById('quizChapterSelect');
    if (select) select.value = chapterIdx.toString();

    renderQuizQuestion();
  }

  document.getElementById('quizChapterSelect')?.addEventListener('change', (e) => {
    initQuiz(parseInt(e.target.value, 10));
  });

  function renderQuizQuestion() {
    const chapterData = CURRICULUM_DATA.quizzes[AppState.currentQuizChapter];
    if (!chapterData) return;

    const q = chapterData.questions[AppState.currentQuizQIndex];
    const totalQ = chapterData.questions.length;

    const fill = document.getElementById('quizProgressBar');
    if (fill) fill.style.width = `${((AppState.currentQuizQIndex) / totalQ) * 100}%`;

    const qNum = document.getElementById('quizQuestionNum');
    if (qNum) qNum.textContent = `Question ${AppState.currentQuizQIndex + 1} of ${totalQ}`;

    const scoreDisp = document.getElementById('quizScoreDisplay');
    if (scoreDisp) scoreDisp.textContent = `Score: ${AppState.quizScore} / ${totalQ}`;

    const qText = document.getElementById('quizQuestionText');
    if (qText) qText.textContent = q.q;

    const hint = document.getElementById('quizHintTrigger');
    if (hint) {
      hint.onclick = () => {
        showCelebrationToast(`💡 Hint: ${q.hint}`);
      };
    }

    const feedbackBox = document.getElementById('quizFeedbackBox');
    if (feedbackBox) {
      feedbackBox.className = 'quiz-feedback-box';
      feedbackBox.style.display = 'none';
    }

    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) nextBtn.style.display = 'none';

    const optContainer = document.getElementById('quizOptionsContainer');
    if (optContainer) {
      optContainer.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option-btn" data-index="${i}">
          <span>${opt}</span>
          <span style="font-size:1.2rem;">➡️</span>
        </button>
      `).join('');

      document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', handleQuizOptionClick);
      });
    }
  }

  function handleQuizOptionClick(e) {
    const btn = e.currentTarget;
    const chosenIdx = parseInt(btn.getAttribute('data-index'), 10);
    const chapterData = CURRICULUM_DATA.quizzes[AppState.currentQuizChapter];
    const q = chapterData.questions[AppState.currentQuizQIndex];

    document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

    const feedbackBox = document.getElementById('quizFeedbackBox');
    const nextBtn = document.getElementById('quizNextBtn');

    if (chosenIdx === q.answer) {
      window.Sound && window.Sound.playCorrect();
      btn.classList.add('correct');
      AppState.quizScore++;
      feedbackBox.className = 'quiz-feedback-box show success';
      feedbackBox.innerHTML = `<strong>MashaAllah! Correct answer! 🎉</strong>`;
    } else {
      window.Sound && window.Sound.playWrong();
      btn.classList.add('wrong');
      const correctBtn = document.querySelector(`.quiz-option-btn[data-index="${q.answer}"]`);
      if (correctBtn) correctBtn.classList.add('correct');
      feedbackBox.className = 'quiz-feedback-box show error';
      feedbackBox.innerHTML = `<strong>Not quite!</strong> The correct answer was: <em>${q.options[q.answer]}</em>`;
    }

    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.onclick = handleQuizNextQuestion;
    }
  }

  function handleQuizNextQuestion() {
    const chapterData = CURRICULUM_DATA.quizzes[AppState.currentQuizChapter];
    const totalQ = chapterData.questions.length;

    AppState.currentQuizQIndex++;

    if (AppState.currentQuizQIndex < totalQ) {
      renderQuizQuestion();
    } else {
      window.Sound && window.Sound.playCelebration();
      triggerConfetti();
      awardStars(5, `Scored ${AppState.quizScore}/${totalQ} on ${chapterData.title}`);

      if (AppState.currentQuizChapter === 0) unlockBadge('alpha_champ');
      if (AppState.currentQuizChapter === 1) unlockBadge('harakat_hero');
      if (AppState.currentQuizChapter === 2) unlockBadge('tajweed_star');
      if (AppState.currentQuizChapter === 3) unlockBadge('seerah_scholar');

      showCelebrationModal(
        `🏆 Quiz Completed!`,
        `MashaAllah! You scored ${AppState.quizScore} out of ${totalQ}! You earned +5 golden stars! 🌟`
      );

      initQuiz(AppState.currentQuizChapter);
    }
  }

  // ==========================================
  // GAME 3: MEMORY FLIP GAME
  // ==========================================
  function initMemoryGame() {
    AppState.memoryFlippedCards = [];
    AppState.memoryMatchedCount = 0;
    AppState.isMemoryLocked = false;

    const cards = [...CURRICULUM_DATA.memoryGame].sort(() => Math.random() - 0.5);
    const grid = document.getElementById('memoryGridContainer');
    if (!grid) return;

    grid.innerHTML = cards.map(c => `
      <div class="memory-card" data-pair="${c.pairId}" data-id="${c.id}">
        <div class="memory-card-inner">
          <div class="memory-card-front">❓</div>
          <div class="memory-card-back">${c.front}</div>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.memory-card').forEach(card => {
      card.addEventListener('click', handleMemoryCardClick);
    });
  }

  document.getElementById('restartMemoryBtn')?.addEventListener('click', () => {
    window.Sound && window.Sound.playClick();
    initMemoryGame();
  });

  function handleMemoryCardClick(e) {
    if (AppState.isMemoryLocked) return;
    const card = e.currentTarget;

    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    window.Sound && window.Sound.playFlip();
    card.classList.add('flipped');
    AppState.memoryFlippedCards.push(card);

    if (AppState.memoryFlippedCards.length === 2) {
      AppState.isMemoryLocked = true;
      const [c1, c2] = AppState.memoryFlippedCards;
      const pair1 = c1.getAttribute('data-pair');
      const pair2 = c2.getAttribute('data-pair');

      if (pair1 === pair2) {
        setTimeout(() => {
          window.Sound && window.Sound.playCorrect();
          c1.classList.add('matched');
          c2.classList.add('matched');
          AppState.memoryFlippedCards = [];
          AppState.isMemoryLocked = false;
          AppState.memoryMatchedCount += 2;

          if (AppState.memoryMatchedCount === CURRICULUM_DATA.memoryGame.length) {
            awardStars(5, "Beat the Memory Game!");
            unlockBadge('memory_wizard');
            triggerConfetti();
            window.Sound && window.Sound.playCelebration();
            showCelebrationModal("🃏 Memory Master!", "MashaAllah! You uncovered all matching pairs! +5 Stars awarded! 🌟");
          }
        }, 400);
      } else {
        setTimeout(() => {
          window.Sound && window.Sound.playWrong();
          c1.classList.remove('flipped');
          c2.classList.remove('flipped');
          AppState.memoryFlippedCards = [];
          AppState.isMemoryLocked = false;
        }, 1000);
      }
    }
  }

  // ==========================================
  // STUDENT PROFILE & BADGES
  // ==========================================
  function renderProfileBadges() {
    const grid = document.getElementById('badgesDisplayGrid');
    if (!grid) return;

    grid.innerHTML = BADGES_LIST.map(b => {
      const isUnlocked = AppState.badges.includes(b.id);
      return `
        <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="badge-icon-box">${b.icon}</div>
          <h4 style="font-size:1.1rem; color:var(--text-main);">${b.title}</h4>
          <p style="font-size:0.82rem; color:var(--text-muted);">${b.desc}</p>
          <span style="font-size:0.75rem; font-weight:700; color:${isUnlocked ? '#059669' : '#94A3B8'};">
            ${isUnlocked ? '✅ Unlocked' : '🔒 Locked'}
          </span>
        </div>
      `;
    }).join('');
  }

  // ==========================================
  // WEEKLY SALAH TRACKER
  // ==========================================
  const PRAYERS = ['Fajr 🌅', 'Dhuhr ☀️', 'Asr 🌤️', 'Maghrib 🌇', 'Isha 🌙'];
  const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  function renderSalahTracker() {
    const tbody = document.getElementById('salahTrackerTableBody');
    if (!tbody) return;

    let checkedCount = 0;

    tbody.innerHTML = PRAYERS.map((prayer, pIdx) => {
      const rowTds = DAYS.map(day => {
        const key = `${pIdx}_${day}`;
        const isChecked = !!AppState.salahChecks[key];
        if (isChecked) checkedCount++;
        return `
          <td>
            <input type="checkbox" class="prayer-check" data-key="${key}" ${isChecked ? 'checked' : ''}>
          </td>
        `;
      }).join('');

      return `
        <tr>
          <td style="font-weight:700; color:var(--primary-emerald-dark);">${prayer}</td>
          ${rowTds}
        </tr>
      `;
    }).join('');

    const streakDisp = document.getElementById('salahStreakDisplay');
    if (streakDisp) streakDisp.textContent = `🔥 ${checkedCount} Prayers Prayed this Week!`;

    document.querySelectorAll('.prayer-check').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const key = e.target.getAttribute('data-key');
        AppState.salahChecks[key] = e.target.checked;
        saveState();

        if (e.target.checked) {
          awardStars(1, "Logged prayer in Salah Tracker!");
        }
        renderSalahTracker();
      });
    });
  }

  // ==========================================
  // INITIALIZE APP
  // ==========================================
  updateHeaderCounters();
  renderLibrary();
  renderFlashcard();
  initMatchingGame(0);
  initQuiz(0);
  initMemoryGame();
  renderProfileBadges();
  renderSalahTracker();

  console.log("Quran & Tajweed Curriculum Library initialized successfully.");
});
