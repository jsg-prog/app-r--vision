/* ==========================================================================
   TOEIC HUB MODULE
   Speed drills, Part 5 Grammar rules, and IT / Business Vocabulary Trainer
   ========================================================================== */

const ToeicHub = {
  containerEl: null,

  init(containerEl) {
    this.containerEl = containerEl;
    this.render();
  },

  render() {
    const tips = TOEIC_DATABASE.tips;
    const questions = TOEIC_DATABASE.quizzes;

    this.containerEl.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <!-- Hero Banner -->
        <div class="action-hero-card emerald" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(19, 27, 46, 0.95)); border-color: rgba(16, 185, 129, 0.4); margin-bottom: 1.5rem;">
          <div class="hero-tag">🇬🇧 TOEIC Prep • Target 750+ / 850+ Points</div>
          <h2>TOEIC Booster pour BTS SIO & IT</h2>
          <p>
            Maximise ton score au test officiel du TOEIC ! Entraîne-toi sur la <strong>Part 5 (Incomplete Sentences)</strong>, élimine les pièges de grammaire fréquents et mémorise le vocabulaire Business & Réseaux indispensable.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <button class="header-btn primary" style="background: linear-gradient(135deg, var(--emerald-primary), #059669);" onclick="ToeicHub.startSpeedDrill()">
              ⚡ Lancer un Speed Drill (Part 5)
            </button>
            <button class="header-btn" onclick="ToeicHub.startFlashcards()">
              🗂️ Vocabulaire Business & IT Flashcards
            </button>
          </div>
        </div>

        <!-- Strategic Tips for TOEIC -->
        <h3 style="margin-bottom: 1rem; font-size: 1.15rem;">🎯 Les 3 Règles d'Or du Test</h3>
        <div class="dashboard-grid" style="margin-bottom: 2rem;">
          ${tips.map(tip => `
            <div class="stat-card" style="--accent-color: var(--emerald-primary);">
              <div class="stat-header">
                <span class="stat-title" style="color: #34d399;">${tip.title}</span>
                <span class="stat-icon">💡</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.6; white-space: pre-line;">
                ${tip.tip}
              </p>
            </div>
          `).join("")}
        </div>

        <!-- Modules Grid -->
        <div class="actions-grid">
          <div class="action-hero-card emerald">
            <div class="hero-tag">Part 5 Reading</div>
            <h3>✍️ Incomplete Sentences Practice</h3>
            <p>Concordance des temps, passif, adverbes vs adjectifs, prépositions clés (prior to, despite, throughout).</p>
            <button class="header-btn" onclick="ToeicHub.startSpeedDrill()">Lancer l'entraînement Part 5 ➔</button>
          </div>

          <div class="action-hero-card emerald">
            <div class="hero-tag">Vocabulaire Clé</div>
            <h3>💻 IT, Helpdesk & Corporate English</h3>
            <p>Vocabulaire technique et bureautique indispensable (outage, downtime, bandwidth, schedule, postpone).</p>
            <button class="header-btn" onclick="ToeicHub.startFlashcards()">Réviser le vocabulaire ➔</button>
          </div>
        </div>
      </div>
    `;
  },

  startSpeedDrill() {
    const questions = TOEIC_DATABASE.quizzes;
    App.renderView("quiz");
    QuizEngine.startQuiz(document.getElementById("quiz-container-root"), questions, "TOEIC - Part 5 Drills");
  },

  startFlashcards() {
    const cards = TOEIC_DATABASE.flashcards;
    App.renderView("flashcards");
    FlashcardsEngine.init(document.getElementById("flashcards-container-root"), cards);
  }
};
