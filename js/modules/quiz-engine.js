/* ==========================================================================
   QUIZ ENGINE MODULE
   Interactive QCM with instant feedback, scoring, sound and explanations
   ========================================================================== */

const QuizEngine = {
  currentDomain: "all",
  questionsList: [],
  currentIndex: 0,
  score: 0,
  timerInterval: null,
  secondsElapsed: 0,
  isAnswered: false,

  startQuiz(containerEl, questions, domainName = "Général") {
    if (!questions || questions.length === 0) {
      containerEl.innerHTML = `
        <div class="quiz-container" style="text-align: center; padding: 3rem 1rem;">
          <p style="font-size: 1.2rem; margin-bottom: 1rem;">📭 Aucune question disponible pour ce filtre.</p>
          <button class="header-btn primary" onclick="App.renderView('dashboard')">Retour au Tableau de Bord</button>
        </div>
      `;
      return;
    }

    // Shuffle questions
    this.questionsList = [...questions].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.score = 0;
    this.currentDomain = domainName;
    this.secondsElapsed = 0;
    this.startTimer();
    this.renderQuestion(containerEl);
  },

  startTimer() {
    clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      const timerEl = document.getElementById("quiz-active-timer");
      if (timerEl) {
        const mins = String(Math.floor(this.secondsElapsed / 60)).padStart(2, "0");
        const secs = String(this.secondsElapsed % 60).padStart(2, "0");
        timerEl.textContent = `⏱️ ${mins}:${secs}`;
      }
    }, 1000);
  },

  stopTimer() {
    clearInterval(this.timerInterval);
  },

  renderQuestion(containerEl) {
    this.isAnswered = false;
    const q = this.questionsList[this.currentIndex];
    const total = this.questionsList.length;
    const progressPercent = ((this.currentIndex) / total) * 100;

    const letters = ["A", "B", "C", "D", "E", "F"];

    containerEl.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-top-bar">
          <span class="quiz-badge-module">${this.currentDomain} • Question ${this.currentIndex + 1} / ${total}</span>
          <span id="quiz-active-timer" class="quiz-timer">⏱️ 00:00</span>
        </div>

        <div class="quiz-progress-bar-container">
          <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>

        <div class="quiz-question-box">
          <h3>${q.question}</h3>
        </div>

        <div class="quiz-options-list" id="quiz-options-wrapper">
          ${q.options.map((opt, idx) => `
            <div class="quiz-option" data-index="${idx}" onclick="QuizEngine.selectAnswer(${idx}, ${q.correctAnswer}, this)">
              <span class="option-letter">${letters[idx]}</span>
              <span class="option-text">${opt}</span>
            </div>
          `).join("")}
        </div>

        <div id="quiz-explanation-target"></div>

        <div class="quiz-controls">
          <button class="header-btn" onclick="QuizEngine.quitQuiz()">Quitter le Quizz</button>
          <button id="quiz-next-btn" class="header-btn primary" style="display: none;" onclick="QuizEngine.nextQuestion()">
            ${this.currentIndex + 1 === total ? "Voir les Résultats 🎉" : "Question Suivante ➔"}
          </button>
        </div>
      </div>
    `;
  },

  selectAnswer(selectedIndex, correctIndex, optionEl) {
    if (this.isAnswered) return;
    this.isAnswered = true;

    const options = document.querySelectorAll(".quiz-option");
    options.forEach(opt => opt.classList.add("disabled"));

    const q = this.questionsList[this.currentIndex];
    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
      this.score++;
      optionEl.classList.add("correct");
      App.playSound("correct");
    } else {
      optionEl.classList.add("incorrect");
      options[correctIndex].classList.add("correct");
      App.playSound("incorrect");
    }

    // Render explanation
    const expTarget = document.getElementById("quiz-explanation-target");
    if (expTarget && q.explanation) {
      expTarget.innerHTML = `
        <div class="quiz-explanation-box">
          <div class="explanation-header">
            <span>${isCorrect ? "✅ Excellente réponse !" : "❌ Explication de la réponse correcte :"}</span>
          </div>
          <div class="explanation-body">
            ${q.explanation}
          </div>
        </div>
      `;
    }

    const nextBtn = document.getElementById("quiz-next-btn");
    if (nextBtn) {
      nextBtn.style.display = "inline-flex";
    }
  },

  nextQuestion() {
    this.currentIndex++;
    const container = document.getElementById("quiz-container-root");
    if (this.currentIndex < this.questionsList.length) {
      this.renderQuestion(container);
    } else {
      this.finishQuiz(container);
    }
  },

  finishQuiz(containerEl) {
    this.stopTimer();
    const total = this.questionsList.length;
    const percentage = Math.round((this.score / total) * 100);

    // Save in storage
    let domainKey = "sisr";
    const lower = this.currentDomain.toLowerCase();
    if (lower.includes("cyberops")) domainKey = "cyberops";
    else if (lower.includes("cejm")) domainKey = "cejm";
    else if (lower.includes("toeic")) domainKey = "toeic";

    StorageManager.recordQuizResult(domainKey, total, this.score);
    App.playSound("complete");

    let message = "";
    let badgeColor = "#10b981";
    if (percentage >= 80) {
      message = "🏆 Félicitations ! Tu maîtrises parfaitement ce module. Continue comme ça !";
      badgeColor = "#10b981";
    } else if (percentage >= 60) {
      message = "👍 Bon travail ! Quelques notions à revoir pour sécuriser la mention ou la certif.";
      badgeColor = "#06b6d4";
    } else {
      message = "💡 Pas d'inquiétude, c'est en forgeant qu'on devient cyber-analyste ! Relis les fiches et réessaie.";
      badgeColor = "#f59e0b";
    }

    containerEl.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-results-screen">
          <div class="results-score-circle" style="border-color: ${badgeColor};">
            <span class="score-num" style="color: ${badgeColor};">${percentage}%</span>
            <span class="score-total">${this.score} / ${total} justes</span>
          </div>

          <h2 style="margin-bottom: 0.75rem;">Session Terminée !</h2>
          <p style="margin-bottom: 1.5rem; max-width: 500px; margin-left: auto; margin-right: auto; color: var(--text-main);">
            ${message}
          </p>

          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button class="header-btn primary" onclick="QuizEngine.restartCurrentQuiz()">Recommencer 🔄</button>
            <button class="header-btn" onclick="App.renderView('dashboard')">Tableau de Bord 📊</button>
            <button class="header-btn" onclick="App.askAiCoachAboutMistakes('${this.currentDomain}')">Demander conseil au Coach IA 🤖</button>
          </div>
        </div>
      </div>
    `;
  },

  restartCurrentQuiz() {
    const container = document.getElementById("quiz-container-root");
    this.startQuiz(container, this.questionsList, this.currentDomain);
  },

  quitQuiz() {
    this.stopTimer();
    App.renderView("dashboard");
  }
};
