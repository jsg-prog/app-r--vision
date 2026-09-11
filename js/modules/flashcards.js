/* ==========================================================================
   FLASHCARDS MODULE
   3D Flip Cards for active recall & spaced repetition
   ========================================================================== */

const FlashcardsEngine = {
  cardsList: [],
  currentIndex: 0,
  isFlipped: false,
  containerEl: null,

  init(containerEl, cards) {
    this.containerEl = containerEl;
    this.cardsList = cards || [];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.render();
  },

  render() {
    if (!this.cardsList || this.cardsList.length === 0) {
      this.containerEl.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <p>📭 Aucune carte mémoire trouvée pour cette catégorie.</p>
        </div>
      `;
      return;
    }

    const card = this.cardsList[this.currentIndex];
    const total = this.cardsList.length;

    this.containerEl.innerHTML = `
      <div class="flashcards-container">
        <div class="card-top" style="margin-bottom: 1rem;">
          <span style="font-weight: 600; color: var(--cyan-primary);">${card.title || "Carte Mémoire"}</span>
          <span style="font-family: var(--font-mono); color: var(--text-dim);">Carte ${this.currentIndex + 1} / ${total}</span>
        </div>

        <div id="active-flashcard" class="flashcard ${this.isFlipped ? 'flipped' : ''}" onclick="FlashcardsEngine.toggleFlip()">
          <!-- FRONT FACE -->
          <div class="flashcard-face front">
            <div class="card-top">
              <span>❓ Question / Notion</span>
              <span>💡 Cliquer pour retourner</span>
            </div>
            <div class="card-content">
              ${card.front.replace(/\n/g, "<br>")}
            </div>
            <div class="card-hint-click">
              ⚡ Clique n'importe où sur la carte pour révéler la réponse
            </div>
          </div>

          <!-- BACK FACE -->
          <div class="flashcard-face back">
            <div class="card-top">
              <span>✅ Réponse & Synthèse</span>
              <span>💡 Cliquer pour masquer</span>
            </div>
            <div class="card-content back-text">
              ${card.back.replace(/\n/g, "<br>")}
            </div>
            <div class="card-hint-click">
              Évalue ta maîtrise ci-dessous 👇
            </div>
          </div>
        </div>

        <div class="card-rating-buttons">
          <button class="rate-btn again" onclick="FlashcardsEngine.rateCard(1)">❌ À revoir (Encore)</button>
          <button class="rate-btn good" onclick="FlashcardsEngine.rateCard(2)">🤔 Moyen (Bien)</button>
          <button class="rate-btn easy" onclick="FlashcardsEngine.rateCard(3)">✨ Acquis (Facile)</button>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
          <button class="header-btn" onclick="FlashcardsEngine.prevCard()" ${this.currentIndex === 0 ? "disabled" : ""}>
            ⬅️ Précédente
          </button>
          <button class="header-btn" onclick="FlashcardsEngine.shuffle()">
            🔀 Mélanger
          </button>
          <button class="header-btn primary" onclick="FlashcardsEngine.nextCard()" ${this.currentIndex + 1 === total ? "disabled" : ""}>
            Suivante ➡️
          </button>
        </div>
      </div>
    `;
  },

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
    const cardEl = document.getElementById("active-flashcard");
    if (cardEl) {
      if (this.isFlipped) cardEl.classList.add("flipped");
      else cardEl.classList.remove("flipped");
    }
    App.playSound("flip");
  },

  rateCard(rating) {
    // Rating 1 = again, 2 = good, 3 = easy
    App.playSound("correct");
    this.nextCard();
  },

  nextCard() {
    if (this.currentIndex < this.cardsList.length - 1) {
      this.currentIndex++;
      this.isFlipped = false;
      this.render();
    }
  },

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
      this.render();
    }
  },

  shuffle() {
    this.cardsList.sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
    this.isFlipped = false;
    this.render();
  }
};
