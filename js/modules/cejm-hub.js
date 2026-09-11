/* ==========================================================================
   CEJM HUB MODULE
   Culture Économique, Juridique et Managériale
   Vulgarisation, Fiches Thématiques, Outils Stratégiques & Atelier Syllogisme
   ========================================================================== */

const CejmHub = {
  currentThemeFilter: "all",
  containerEl: null,

  init(containerEl) {
    this.containerEl = containerEl;
    this.render();
  },

  render() {
    const themes = CEJM_DATABASE.themes;
    const syllogism = CEJM_DATABASE.methodology.syllogisme;
    const tools = CEJM_DATABASE.methodology.tools;

    this.containerEl.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <!-- Hero Banner -->
        <div class="cejm-hero-banner">
          <div class="hero-tag" style="background: rgba(139, 92, 246, 0.2); color: #c084fc; border-color: rgba(139, 92, 246, 0.4);">
            ⚖️ Spécial BTS SIO : La CEJM Sans Prise de Tête
          </div>
          <h2 style="margin: 0.75rem 0 0.5rem;">CEJM : Le Guide Anti-Galère</h2>
          <p style="font-size: 0.92rem; line-height: 1.6; max-width: 800px;">
            Tu te trouves nul en CEJM ? C'est normal : les cours sont souvent trop théoriques et abstraits ! Ici, on décode tout avec des <strong>exemples simples du monde informatique (Cloud, RGPD, cybersécurité, SSII/ESN)</strong> et on t'apprend la méthode infaillible du <strong>syllogisme juridique</strong> pour assurer la moyenne à l'examen écrit.
          </p>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.25rem;">
            <button class="header-btn primary" style="background: linear-gradient(135deg, var(--purple-primary), #6366f1);" onclick="CejmHub.startQuiz()">
              🎯 Lancer le Quizz CEJM
            </button>
            <button class="header-btn" onclick="CejmHub.startFlashcards()">
              🗂️ Réviser les Fiches Mémo
            </button>
            <button class="header-btn" onclick="document.getElementById('syllogisme-section').scrollIntoView({ behavior: 'smooth' })">
              📝 Maîtriser le Syllogisme Juridique
            </button>
          </div>
        </div>

        <!-- Syllogisme Method Highlight Section -->
        <div id="syllogisme-section" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 1.75rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <h3 style="font-size: 1.2rem; color: #a78bfa; display: flex; align-items: center; gap: 0.5rem;">
              <span>🏆</span> ${syllogism.title}
            </h3>
            <span style="font-size: 0.78rem; background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid rgba(16, 185, 129, 0.3);">
              +5 à +8 points assurés à l'épreuve
            </span>
          </div>
          <p style="font-size: 0.88rem; margin-bottom: 1.25rem;">${syllogism.subtitle}</p>

          <div class="syllogism-box">
            ${syllogism.steps.map(step => `
              <div class="syllogism-step step-${step.num}">
                <h5>${step.name}</h5>
                <p style="color: var(--text-muted); margin-bottom: 0.75rem;">${step.description}</p>
                <div style="background: rgba(7, 10, 18, 0.7); border-radius: var(--radius-sm); padding: 0.75rem; font-size: 0.8rem; color: #e2e8f0; font-style: italic; border-left: 2px solid var(--border-glow);">
                  ${step.example}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Strategic Diagnostic Tools (SWOT, Porter, PESTEL) -->
        <h3 style="margin-bottom: 1rem; font-size: 1.15rem;">📊 Les Outils Stratégiques Incontournables</h3>
        <div class="dashboard-grid" style="margin-bottom: 2rem;">
          ${tools.map(tool => `
            <div class="stat-card" style="--accent-color: var(--purple-primary);">
              <div class="stat-header">
                <span class="stat-title" style="color: #c084fc;">${tool.name}</span>
                <span class="stat-icon">📈</span>
              </div>
              <p style="font-size: 0.82rem; font-weight: 600; color: var(--text-main);">${tool.purpose}</p>
              <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; white-space: pre-line; background: rgba(7, 10, 18, 0.5); padding: 0.75rem; border-radius: var(--radius-sm);">
                ${tool.explanation}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- 6 Themes List -->
        <h3 style="margin-bottom: 1rem; font-size: 1.15rem;">📚 Les 6 Thèmes du Programme CEJM</h3>
        <div class="actions-grid">
          ${themes.filter(t => t.id !== 'all').map(theme => `
            <div class="action-hero-card purple">
              <div class="hero-tag">${theme.id.toUpperCase()}</div>
              <h3>${theme.icon} ${theme.name}</h3>
              <p>Révise les mécanismes clés, auteurs importants et cas pratiques types de ce thème.</p>
              <button class="header-btn" onclick="CejmHub.quizByTheme('${theme.id}')">S'entraîner sur ce thème ➔</button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  },

  startQuiz() {
    const questions = CEJM_DATABASE.quizzes;
    App.renderView("quiz");
    QuizEngine.startQuiz(document.getElementById("quiz-container-root"), questions, "CEJM - Général");
  },

  quizByTheme(themeId) {
    const questions = CEJM_DATABASE.quizzes.filter(q => q.themeId === themeId);
    const themeObj = CEJM_DATABASE.themes.find(t => t.id === themeId);
    const title = themeObj ? `CEJM - ${themeObj.name}` : "CEJM";

    App.renderView("quiz");
    QuizEngine.startQuiz(document.getElementById("quiz-container-root"), questions.length ? questions : CEJM_DATABASE.quizzes, title);
  },

  startFlashcards() {
    const cards = CEJM_DATABASE.flashcards;
    App.renderView("flashcards");
    FlashcardsEngine.init(document.getElementById("flashcards-container-root"), cards);
  }
};
