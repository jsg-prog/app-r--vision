/* ==========================================================================
   CYBEROPS HUB MODULE (VERSION NETACAD & ITEXAMANSWERS COMPLETE)
   Direct access to all 9 Checkpoint Module Groups & 200-201 Certification
   ========================================================================== */

const CyberOpsHub = {
  currentModuleFilter: "all",
  containerEl: null,

  init(containerEl) {
    this.containerEl = containerEl;
    this.render();
  },

  render() {
    const modules = CYBEROPS_DATABASE.modules;
    const allQuestions = [...CYBEROPS_DATABASE.quizzes, ...(StorageManager.loadData().customQuestions.filter(q => q.domain === "cyberops"))];
    const filteredQuestions = this.currentModuleFilter === "all" 
      ? allQuestions 
      : allQuestions.filter(q => q.moduleId === this.currentModuleFilter);

    this.containerEl.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <!-- Header Hero -->
        <div class="action-hero-card" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(19, 27, 46, 0.95)); border-color: var(--border-glow); margin-bottom: 1.5rem;">
          <div class="hero-tag">🛡️ Certification Officielle Cisco 200-201 CBROPS • ITExamAnswers Hub</div>
          <h2>Cisco CyberOps Associate (Version 1.0) Exam Prep</h2>
          <p>
            Révise l'intégralité des <strong>9 groupes de modules Checkpoint NetAcad</strong> et l'examen final de certification <strong>200-201 CBROPS</strong>. Entraîne-toi en mode examen avec explications instantanées, accède directement aux corrigés officiels d'ITExamAnswers et importe de nouvelles questions en un clic !
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <button class="header-btn primary" onclick="CyberOpsHub.startPracticeExam()">
              🎯 Lancer l'Examen Complet (${filteredQuestions.length} questions)
            </button>
            <button class="header-btn" onclick="CyberOpsHub.startFlashcards()">
              🗂️ Réviser les Flashcards CyberOps
            </button>
            <button class="header-btn" onclick="CyberOpsHub.openImporterModal()">
              📥 Importer des Questions d'Évaluation
            </button>
            <a href="https://itexamanswers.net/ccna-cyberops-associate-version-1-0-exam-answers.html" target="_blank" rel="noopener" class="header-btn" style="color: var(--cyan-primary);">
              🌐 Ouvrir ITExamAnswers Officiel ↗
            </a>
          </div>
        </div>

        <!-- Checkpoint Exams Grid -->
        <h3 style="margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>📋</span> Modules Checkpoint & Examens NetAcad
        </h3>

        <div class="actions-grid">
          ${modules.filter(m => m.id !== 'all').map(mod => {
            const count = allQuestions.filter(q => q.moduleId === mod.id).length;
            return `
              <div class="action-hero-card">
                <div class="hero-tag">${mod.id.toUpperCase()}</div>
                <h3>${mod.icon} ${mod.name}</h3>
                <p style="font-size: 0.82rem; color: var(--text-muted);">
                  ${count} question(s) interactive(s) avec explications détaillées disponibles.
                </p>
                <div style="display: flex; gap: 0.5rem; margin-top: auto;">
                  <button class="header-btn primary" style="flex: 1; font-size: 0.8rem; justify-content: center;" onclick="CyberOpsHub.filterAndQuiz('${mod.id}')">
                    S'entraîner 🎯
                  </button>
                  ${mod.link ? `
                    <a href="${mod.link}" target="_blank" rel="noopener" class="header-btn" style="font-size: 0.8rem;" title="Consulter le corrigé sur ITExamAnswers">
                      🔗 Corrigé ↗
                    </a>
                  ` : ''}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  },

  filterAndQuiz(moduleId) {
    this.currentModuleFilter = moduleId;
    this.startPracticeExam();
  },

  startPracticeExam() {
    const allQuestions = [...CYBEROPS_DATABASE.quizzes, ...(StorageManager.loadData().customQuestions.filter(q => q.domain === "cyberops"))];
    const filtered = this.currentModuleFilter === "all" 
      ? allQuestions 
      : allQuestions.filter(q => q.moduleId === this.currentModuleFilter);

    const modObj = CYBEROPS_DATABASE.modules.find(m => m.id === this.currentModuleFilter);
    const title = modObj ? `CyberOps - ${modObj.name}` : "Cisco CyberOps Associate (Général)";

    App.renderView("quiz");
    QuizEngine.startQuiz(document.getElementById("quiz-container-root"), filtered, title);
  },

  startFlashcards() {
    const cards = CYBEROPS_DATABASE.flashcards;
    App.renderView("flashcards");
    FlashcardsEngine.init(document.getElementById("flashcards-container-root"), cards);
  },

  openImporterModal() {
    const modal = document.getElementById("import-questions-modal");
    if (modal) {
      // populate module selector with the 9 checkpoint groups
      const select = document.getElementById("import-target-domain");
      if (select) {
        select.innerHTML = CYBEROPS_DATABASE.modules.filter(m => m.id !== 'all').map(m => `
          <option value="${m.id}">${m.name}</option>
        `).join("");
      }
      modal.classList.add("active");
    }
  },

  closeImporterModal() {
    const modal = document.getElementById("import-questions-modal");
    if (modal) modal.classList.remove("active");
  },

  processRawPastedQuestions() {
    const textarea = document.getElementById("raw-questions-input");
    const domainSelect = document.getElementById("import-target-domain");
    const rawText = textarea.value.trim();

    if (!rawText) {
      alert("Veuillez coller du texte de questions d'évaluation.");
      return;
    }

    // Smart Parser for questions (handles typical NetAcad / ITExamAnswers formatting)
    const blocks = rawText.split(/(?=\n(?:Question\s+\d+|\d+[\.\)]\s+))/i);
    let importedCount = 0;

    blocks.forEach(block => {
      const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
      if (lines.length < 3) return;

      const qLine = lines[0].replace(/^(?:Question\s+\d+[:\.]?|\d+[\.\)]\s*)/i, "").trim();
      const options = [];
      let correctAnswer = 0;
      let explanation = "Question importée depuis le corrigé ITExamAnswers / NetAcad CyberOps.";

      lines.slice(1).forEach(line => {
        let isCorrect = false;
        let cleanText = line;

        if (/^\[x\]/i.test(line) || /\(correct\)/i.test(line) || /^\*\s+/i.test(line)) {
          isCorrect = true;
          cleanText = line.replace(/^\[x\]|\(correct\)|\*/gi, "").trim();
        }

        cleanText = cleanText.replace(/^[A-F][\.\)]\s*|^-\s*/i, "").trim();

        if (cleanText.toLowerCase().startsWith("explanation:") || cleanText.toLowerCase().startsWith("explication:")) {
          explanation = cleanText;
          return;
        }

        if (cleanText.toLowerCase().startsWith("answer:") || cleanText.toLowerCase().startsWith("correct answer:")) {
          const letter = cleanText.split(":")[1]?.trim()?.toUpperCase();
          if (letter) {
            const letterIdx = ["A", "B", "C", "D", "E"].indexOf(letter[0]);
            if (letterIdx >= 0) correctAnswer = letterIdx;
          }
          return;
        }

        if (cleanText.length > 1) {
          options.push(cleanText);
          if (isCorrect) {
            correctAnswer = options.length - 1;
          }
        }
      });

      if (options.length >= 2) {
        StorageManager.addCustomQuestion({
          domain: "cyberops",
          moduleId: domainSelect.value || "mod1_2",
          question: qLine,
          options,
          correctAnswer,
          explanation
        });
        importedCount++;
      }
    });

    textarea.value = "";
    this.closeImporterModal();
    alert(`🎉 Bravo ! ${importedCount} question(s) d'évaluation ont été importées avec succès dans ta base de données CyberOps !`);
    this.render();
  }
};
