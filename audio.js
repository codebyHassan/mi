/**
 * Noor ul Bayan & Tajweed Academy - Audio Engine
 * Provides crystal-clear procedural sound effects via Web Audio API
 * and Arabic speech synthesis with graceful audio fallbacks.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = true;
    this.speechSynth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.arabicVoice = null;
    this.initAudioContext();
    this.initVoices();
  }

  initAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.ctx = new AudioCtx();
    }
  }

  ensureContext() {
    if (!this.ctx) {
      this.initAudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initVoices() {
    if (!this.speechSynth) return;
    const findVoice = () => {
      const voices = this.speechSynth.getVoices();
      // Look for Arabic voices (e.g. ar-SA, ar-EG, ar, Maged, Laila, Tarik, Naayf)
      this.arabicVoice = voices.find(v => v.lang.startsWith('ar') || v.lang.includes('ar-')) || null;
    };

    findVoice();
    if (this.speechSynth.onvoiceschanged !== undefined) {
      this.speechSynth.onvoiceschanged = findVoice;
    }
  }

  toggleSound(enabled) {
    this.soundEnabled = enabled !== undefined ? enabled : !this.soundEnabled;
    return this.soundEnabled;
  }

  // --- PROCEDURAL SOUND EFFECTS --- //

  // Subtle clean tactile button pop
  playClick() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }

  // Card Flip Whoosh
  playFlip() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.11);
  }

  // Star collect twinkle
  playStar() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [659.25, 783.99, 987.77, 1318.51]; // E5, G5, B5, E6
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = freq;

      const startTime = this.ctx.currentTime + i * 0.06;
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.15, startTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.28);
    });
  }

  // Correct answer chime (Bright major triad)
  playCorrect() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.07);

      const startTime = this.ctx.currentTime + idx * 0.07;
      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.36);
    });
  }

  // Gentle, soft boing for incorrect answer
  playWrong() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, this.ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(160, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }

  // Celebratory winning fanfare
  playCelebration() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    const melody = [
      { f: 523.25, d: 0.12, wait: 0.0 },   // C5
      { f: 659.25, d: 0.12, wait: 0.12 },  // E5
      { f: 783.99, d: 0.12, wait: 0.24 },  // G5
      { f: 1046.50, d: 0.35, wait: 0.36 }, // C6
      { f: 880.00, d: 0.15, wait: 0.55 },  // A5
      { f: 1046.50, d: 0.5, wait: 0.72 }   // C6 held
    ];

    melody.forEach(item => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = item.f;

      const t0 = this.ctx.currentTime + item.wait;
      gain.gain.setValueAtTime(0.16, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + item.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t0);
      osc.stop(t0 + item.d + 0.05);
    });
  }

  // Play peaceful recitation chime for Quranic verses / Arabic text
  playQuranicTone() {
    if (!this.soundEnabled) return;
    this.ensureContext();
    if (!this.ctx) return;

    // Harmonic bells (Ney / chime harmonic simulation)
    const baseFreq = 440;
    [1, 1.5, 2, 2.67].forEach((ratio, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = baseFreq * ratio;

      const t0 = this.ctx.currentTime + i * 0.05;
      gain.gain.setValueAtTime(0.08 / (i + 1), t0);
      gain.gain.exponentialRampToValueAtTime(0.0005, t0 + 0.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t0);
      osc.stop(t0 + 0.85);
    });
  }

  // Speak Arabic text using Web Speech API with fallback tone
  speakArabic(text) {
    this.playQuranicTone();

    if (!this.speechSynth) return;

    try {
      this.speechSynth.cancel(); // Stop prior speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.82; // Slightly slowed down for kids educational clarity
      utterance.pitch = 1.05;

      if (this.arabicVoice) {
        utterance.voice = this.arabicVoice;
        utterance.lang = this.arabicVoice.lang;
      } else {
        utterance.lang = 'ar-SA';
      }

      this.speechSynth.speak(utterance);
    } catch (e) {
      console.warn("Speech synthesis fallback engaged:", e);
    }
  }
}

// Global Sound Instance
window.Sound = new SoundEngine();
