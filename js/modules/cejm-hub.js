/* ==========================================================================
   CEJM HUB MODULE
   Culture Économique, Juridique et Managériale
   Conforme au Référentiel National BTS & Manuel Foucher Tome Unique
   Atelier Syllogisme, Glossaire Interactif des Notions, Outils Stratégiques
   ========================================================================== */

const CejmHub = {
  currentThemeFilter: "all",
  searchQuery: "",
  containerEl: null,

  init(containerEl) {
    this.containerEl = containerEl;
    this.currentThemeFilter = "all";
    this.searchQuery = "";
    this.render();
  },

  render() {
    const themes = CEJM_DATABASE.themes;
    const syllogism = CEJM_DATABASE.methodology.syllogisme;
    const tools = CEJM_DATABASE.methodology.tools;
    const notions = this.getFilteredNotions();

    this.containerEl.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <!-- Hero Banner -->
        <div class="cejm-hero-banner">
          <div class="hero-tag" style="background: rgba(139, 92, 246, 0.2); color: #c084fc; border-color: rgba(139, 92, 246, 0.4);">
            ⚖️ Référentiel National BTS • Manuel Foucher Tome Unique (1re & 2e années)
          </div>
          <h2 style="margin: 0.75rem 0 0.5rem;">CEJM : Le Guide Anti-Galère & Notions Clés</h2>
          <p style="font-size: 0.92rem; line-height: 1.6; max-width: 850px;">
            La CEJM sans stress pour le BTS SIO : chaque notion officielle du livre <strong>Foucher</strong> est synthétisée en <strong>phrases courtes, bullet points et cas réels d'entreprises Tech (Cloud, RGPD, cybersécurité, ESN)</strong>. Maîtrisez le <strong>syllogisme juridique</strong> pour assurer un maximum de points à l'examen écrit.
          </p>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1.25rem;">
            <button class="header-btn primary" style="background: linear-gradient(135deg, var(--purple-primary), #6366f1);" onclick="CejmHub.startQuiz()">
              🎯 Lancer le Quizz Global (12 Q)
            </button>
            <button class="header-btn" onclick="CejmHub.startFlashcards()">
              🗂️ Réviser les 18 Flashcards
            </button>
            <button class="header-btn" onclick="document.getElementById('notions-glossaire-section').scrollIntoView({ behavior: 'smooth' })">
              📖 Consulter le Glossaire Foucher (24 Notions)
            </button>
            <button class="header-btn" onclick="document.getElementById('syllogisme-section').scrollIntoView({ behavior: 'smooth' })">
              📝 Méthode du Syllogisme Juridique
            </button>
          </div>
        </div>

        <!-- Syllogisme Method Highlight Section -->
        <div id="syllogisme-section" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 1.75rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <h3 style="font-size: 1.2rem; color: #a78bfa; display: flex; align-items: center; gap: 0.5rem; margin: 0;">
              <span>🏆</span> ${syllogism.title}
            </h3>
            <span style="font-size: 0.78rem; background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 0.25rem 0.6rem; border-radius: 999px; border: 1px solid rgba(16, 185, 129, 0.3);">
              Structure type exigée par les jurys de BTS
            </span>
          </div>
          <p style="font-size: 0.88rem; margin-bottom: 1.25rem; color: var(--text-muted);">${syllogism.subtitle}</p>

          <div class="syllogism-box">
            ${syllogism.steps.map(step => `
              <div class="syllogism-step step-${step.num}">
                <h5 style="color: #c084fc; font-size: 0.95rem; margin-bottom: 0.35rem;">${step.name}</h5>
                <p style="color: var(--text-muted); margin-bottom: 0.5rem; font-size: 0.86rem; line-height: 1.45;">${step.description}</p>
                <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">
                  <strong>Formulation type :</strong> <code style="color: #38bdf8;">${step.formulation}</code>
                </div>
                <div style="background: rgba(7, 10, 18, 0.8); border-radius: var(--radius-sm); padding: 0.75rem; font-size: 0.82rem; color: #e2e8f0; font-style: italic; border-left: 3px solid #8b5cf6;">
                  ${step.example}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Strategic Diagnostic Tools (SWOT, Porter, PESTEL, Chaîne de valeur) -->
        <h3 style="margin-bottom: 1rem; font-size: 1.15rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>📊</span> Les Outils Stratégiques Incontournables
        </h3>
        <div class="dashboard-grid" style="margin-bottom: 2rem;">
          ${tools.map(tool => `
            <div class="stat-card" style="--accent-color: var(--purple-primary);">
              <div class="stat-header">
                <span class="stat-title" style="color: #c084fc; font-size: 0.95rem;">${tool.name}</span>
                <span class="stat-icon">📈</span>
              </div>
              <p style="font-size: 0.82rem; font-weight: 600; color: #38bdf8; margin: 0.25rem 0;">Auteur : ${tool.author || "Théorie managériale"}</p>
              <p style="font-size: 0.82rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">${tool.purpose}</p>
              <div style="font-size: 0.82rem; color: var(--text-muted); line-height: 1.5; white-space: pre-line; background: rgba(7, 10, 18, 0.6); padding: 0.75rem; border-radius: var(--radius-sm); border-left: 2px solid rgba(139, 92, 246, 0.4);">
                ${tool.explanation}
              </div>
            </div>
          `).join("")}
        </div>

        <!-- INTERACTIVE NOTIONS & GLOSSARY (FOUCHER TOME UNIQUE) -->
        <div id="notions-glossaire-section" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 1.75rem; margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
            <div>
              <h3 style="font-size: 1.2rem; color: #c084fc; display: flex; align-items: center; gap: 0.5rem; margin: 0;">
                <span>📖</span> Glossaire & Notions de Cours (Livre Foucher)
              </h3>
              <p style="font-size: 0.86rem; color: var(--text-muted); margin-top: 0.25rem;">
                Définitions officielles synthétisées, fondements juridiques et exemples applicatifs Tech.
              </p>
            </div>

            <!-- Search input -->
            <div style="position: relative; min-width: 250px; flex: 1; max-width: 400px;">
              <input 
                type="text" 
                id="cejm-search-input" 
                placeholder="🔍 Rechercher une notion, un auteur (ex: RGPD, Porter, VA)..."
                value="${this.searchQuery}"
                oninput="CejmHub.handleSearch(this.value)"
                style="width: 100%; padding: 0.55rem 0.85rem; background: rgba(7, 10, 18, 0.8); border: 1px solid var(--border-glow); border-radius: 8px; color: #fff; font-size: 0.85rem;"
              />
            </div>
          </div>

          <!-- Theme Filter Chips -->
          <div style="display: flex; gap: 0.4rem; overflow-x: auto; padding-bottom: 0.5rem; margin-bottom: 1.25rem;">
            ${themes.map(t => `
              <button 
                class="filter-chip ${this.currentThemeFilter === t.id ? 'active' : ''}" 
                onclick="CejmHub.filterTheme('${t.id}')"
                style="padding: 0.35rem 0.75rem; border-radius: 999px; font-size: 0.78rem; white-space: nowrap; border: 1px solid ${this.currentThemeFilter === t.id ? 'var(--purple-primary)' : 'var(--border-subtle)'}; background: ${this.currentThemeFilter === t.id ? 'rgba(139, 92, 246, 0.25)' : 'rgba(15, 23, 42, 0.6)'}; color: ${this.currentThemeFilter === t.id ? '#c084fc' : 'var(--text-muted)'}; cursor: pointer; transition: all 0.2s;"
              >
                ${t.icon} ${t.id === 'all' ? 'Toutes les notions' : t.id.toUpperCase()}
              </button>
            `).join("")}
          </div>

          <!-- Notions Grid List -->
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
            ${notions.length > 0 ? notions.map(notion => {
              const theme = themes.find(t => t.id === notion.themeId) || {};
              return `
                <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg); padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; transition: transform 0.2s, border-color 0.2s;" onmouseover="this.style.borderColor='rgba(139, 92, 246, 0.5)'" onmouseout="this.style.borderColor='var(--border-subtle)'">
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
                      <span style="font-size: 0.72rem; padding: 0.2rem 0.5rem; background: rgba(139, 92, 246, 0.15); color: #c084fc; border-radius: 4px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        ${theme.icon || "📚"} ${notion.themeId.toUpperCase()}
                      </span>
                      <span style="font-size: 0.72rem; color: #38bdf8; font-style: italic; text-align: right;">
                        ${notion.source}
                      </span>
                    </div>

                    <h4 style="font-size: 1.05rem; color: #fff; margin-bottom: 0.6rem; font-weight: 700;">
                      ${notion.term}
                    </h4>

                    <div style="font-size: 0.84rem; line-height: 1.55; color: #cbd5e1; margin-bottom: 0.75rem;">
                      ${notion.definition.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong style='color:#e2e8f0;'>$1</strong>")}
                    </div>
                  </div>

                  ${notion.example ? `
                    <div style="background: rgba(7, 10, 18, 0.85); border-radius: 6px; padding: 0.6rem 0.75rem; font-size: 0.78rem; color: #94a3b8; border-left: 2px solid #38bdf8;">
                      <span style="color: #38bdf8; font-weight: 600;">💻 Cas d'application Tech :</span> ${notion.example}
                    </div>
                  ` : ""}
                </div>
              `;
            }).join("") : `
              <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
                🔍 Aucune notion ne correspond à votre recherche « <strong>${this.searchQuery}</strong> ».
              </div>
            `}
          </div>
        </div>

        <!-- 6 Themes Navigation & Quizzes/Flashcards launcher -->
        <h3 style="margin-bottom: 1rem; font-size: 1.15rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>📚</span> Entraînement par Thème du Programme
        </h3>
        <div class="actions-grid">
          ${themes.filter(t => t.id !== 'all').map(theme => {
            const countCards = CEJM_DATABASE.flashcards.filter(c => c.themeId === theme.id).length;
            const countQuizzes = CEJM_DATABASE.quizzes.filter(q => q.themeId === theme.id).length;
            return `
              <div class="action-hero-card purple">
                <div class="hero-tag">${theme.id.toUpperCase()}</div>
                <h3 style="font-size: 1.05rem;">${theme.icon} ${theme.name}</h3>
                <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 1rem;">
                  Notions clés, mécanismes juridiques et QCM d'entraînement pour ce thème.
                </p>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <button class="header-btn" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.78rem;" onclick="CejmHub.quizByTheme('${theme.id}')">
                    🎯 Quizz (${countQuizzes} Q)
                  </button>
                  <button class="header-btn" style="flex: 1; padding: 0.4rem 0.6rem; font-size: 0.78rem;" onclick="CejmHub.flashcardsByTheme('${theme.id}')">
                    🗂️ Fiches (${countCards})
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  },

  getFilteredNotions() {
    let notions = CEJM_DATABASE.notions || [];

    if (this.currentThemeFilter !== "all") {
      notions = notions.filter(n => n.themeId === this.currentThemeFilter);
    }

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      notions = notions.filter(n => 
        n.term.toLowerCase().includes(q) ||
        n.definition.toLowerCase().includes(q) ||
        n.source.toLowerCase().includes(q) ||
        (n.example && n.example.toLowerCase().includes(q))
      );
    }

    return notions;
  },

  filterTheme(themeId) {
    this.currentThemeFilter = themeId;
    this.render();
  },

  handleSearch(query) {
    this.searchQuery = query;
    this.render();
    const input = document.getElementById("cejm-search-input");
    if (input) {
      input.focus();
      input.selectionStart = input.selectionEnd = input.value.length;
    }
  },

  startQuiz() {
    const questions = CEJM_DATABASE.quizzes;
    App.renderView("quiz");
    QuizEngine.startQuiz(document.getElementById("quiz-container-root"), questions, "CEJM - Quizz Complet (Tous Thèmes)");
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
  },

  flashcardsByTheme(themeId) {
    const cards = CEJM_DATABASE.flashcards.filter(c => c.themeId === themeId);
    const themeObj = CEJM_DATABASE.themes.find(t => t.id === themeId);

    App.renderView("flashcards");
    FlashcardsEngine.init(document.getElementById("flashcards-container-root"), cards.length ? cards : CEJM_DATABASE.flashcards);
  }
};
