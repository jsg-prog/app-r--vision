/* ==========================================================================
   MAIN APP CONTROLLER & ROUTER
   ========================================================================== */

const App = {
  currentView: "dashboard",
  audioCtx: null,

  init() {
    console.log("🚀 Initializing Cyber-SISR & CyberOps Platform...");
    this.initAudio();
    this.updateStatsDisplay();
    this.renderView("dashboard");

    // Initialize sidebar nav clicks
    document.querySelectorAll(".nav-item").forEach(item => {
      item.addEventListener("click", () => {
        const view = item.getAttribute("data-view");
        if (view) {
          this.renderView(view);
          this.playSound("click");
        }
      });
    });

    // Check streak
    StorageManager.loadData();
  },

  // ------------------------------------------------------------------------
  // Web Audio Synthesizer for Modern Futuristic Sound Effects
  // ------------------------------------------------------------------------
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn("AudioContext not supported", e);
    }
  },

  playSound(type) {
    const settings = StorageManager.getSettings();
    if (!settings.soundEnabled || !this.audioCtx) return;

    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "correct") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === "incorrect") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.25);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "flip") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.linearRampToValueAtTime(700, now + 0.08);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "complete") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.1);
      osc.frequency.setValueAtTime(659.25, now + 0.2);
      osc.frequency.setValueAtTime(880, now + 0.3);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  },

  // ------------------------------------------------------------------------
  // View Router
  // ------------------------------------------------------------------------
  renderView(viewId) {
    this.currentView = viewId;

    // Update active nav button
    document.querySelectorAll(".nav-item").forEach(item => {
      if (item.getAttribute("data-view") === viewId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Hide all view sections
    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.remove("active");
    });

    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Header title update
    const titleEl = document.getElementById("header-title");
    const subEl = document.getElementById("header-subtitle");

    switch (viewId) {
      case "dashboard":
        titleEl.textContent = "Tableau de Bord des Révisions";
        subEl.textContent = "Progression globale BTS SIO SISR, CyberOps, CEJM & TOEIC";
        this.renderDashboard();
        break;

      case "sisr":
        titleEl.textContent = "BTS SIO SISR • Pôle Réseaux & Systèmes";
        subEl.textContent = "Fiches de cours, QCM et entraînements techniques";
        this.renderSisrHub();
        break;

      case "cyberops":
        titleEl.textContent = "Cisco CyberOps Associate (200-201 CBROPS)";
        subEl.textContent = "Modules officiels d'examen et questions d'évaluations";
        CyberOpsHub.init(document.getElementById("view-cyberops"));
        break;

      case "cejm":
        titleEl.textContent = "CEJM • Culture Éco, Juridique et Managériale";
        subEl.textContent = "Méthode du syllogisme juridique et 6 thèmes vulgarisés";
        CejmHub.init(document.getElementById("view-cejm"));
        break;

      case "toeic":
        titleEl.textContent = "TOEIC Preparation Hub";
        subEl.textContent = "Drills Part 5, vocabulaire corporate & IT, pièges de grammaire";
        ToeicHub.init(document.getElementById("view-toeic"));
        break;

      case "coach":
        titleEl.textContent = "Coach IA & Tuteur Personnel SISR";
        subEl.textContent = "Interrogations en direct, générateur de fiches et explications";
        AiCoach.init(document.getElementById("view-coach"));
        break;

      case "tools":
        titleEl.textContent = "Boîte à Outils SISR & Mémo Commandes";
        subEl.textContent = "Calculateur IP / VLSM et cheat-sheet Cisco, Linux, PowerShell";
        this.renderToolsView();
        break;

      case "quiz":
        titleEl.textContent = "Moteur de Quizz & Évaluation";
        subEl.textContent = "Testez vos réflexes en conditions d'examen";
        break;

      case "flashcards":
        titleEl.textContent = "Cartes Mémoires & Répétition Espacée";
        subEl.textContent = "Révisez activement les définitions et protocoles clés";
        break;
    }

    this.updateStatsDisplay();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // ------------------------------------------------------------------------
  // Dashboard Renderer
  // ------------------------------------------------------------------------
  renderDashboard() {
    const data = StorageManager.loadData();
    const stats = data.stats;
    const accuracy = stats.totalQuestionsAnswered > 0 
      ? Math.round((stats.correctAnswers / stats.totalQuestionsAnswered) * 100) 
      : 0;

    const targetEl = document.getElementById("view-dashboard");
    targetEl.innerHTML = `
      <!-- Stats Overview Grid -->
      <div class="dashboard-grid">
        <div class="stat-card" style="--accent-color: var(--cyan-primary);">
          <div class="stat-header">
            <span class="stat-title">Questions Traitées</span>
            <span class="stat-icon">🎯</span>
          </div>
          <div class="stat-value">${stats.totalQuestionsAnswered}</div>
          <div class="stat-footer">
            <span class="stat-trend">${stats.correctAnswers} réponses correctes</span>
          </div>
        </div>

        <div class="stat-card" style="--accent-color: var(--emerald-primary);">
          <div class="stat-header">
            <span class="stat-title">Taux de Réussite</span>
            <span class="stat-icon">📊</span>
          </div>
          <div class="stat-value" style="color: ${accuracy >= 70 ? 'var(--emerald-primary)' : 'var(--cyan-primary)'};">${accuracy}%</div>
          <div class="stat-footer">
            <span>Sur ${stats.quizzesTaken} session(s) de révision</span>
          </div>
        </div>

        <div class="stat-card" style="--accent-color: #fbbf24;">
          <div class="stat-header">
            <span class="stat-title">Série de Jours (Streak)</span>
            <span class="stat-icon">🔥</span>
          </div>
          <div class="stat-value" style="color: #fbbf24;">${stats.streakDays} jour${stats.streakDays > 1 ? 's' : ''}</div>
          <div class="stat-footer">
            <span>Régularité = Clé du BTS !</span>
          </div>
        </div>

        <div class="stat-card" style="--accent-color: var(--purple-primary);">
          <div class="stat-header">
            <span class="stat-title">Assistant d'Étude</span>
            <span class="stat-icon">🤖</span>
          </div>
          <div class="stat-value" style="font-size: 1.25rem; color: #c084fc;">Coach Actif</div>
          <div class="stat-footer">
            <span>Prêt à t'interroger en direct</span>
          </div>
        </div>
      </div>

      <!-- Quick Launch Hub Cards -->
      <h3 style="margin-bottom: 1rem; font-size: 1.15rem;">⚡ Accès Rapide aux Pôles de Révision</h3>
      <div class="actions-grid">
        <div class="action-hero-card" onclick="App.renderView('sisr')">
          <div class="hero-tag">BTS SIO SISR</div>
          <h3>🖥️ Réseaux, Systèmes & AD DS</h3>
          <p>Fiches mémos (VLAN, OSPF, NAT, DHCP, GPO, FSMO) et quizz conformes au référentiel officiel.</p>
          <button class="header-btn primary">Ouvrir le Pôle SISR ➔</button>
        </div>

        <div class="action-hero-card" onclick="App.renderView('cyberops')">
          <div class="hero-tag">Certification Cisco</div>
          <h3>🛡️ Cisco CyberOps Associate (200-201)</h3>
          <p>Banque de questions d'examen avec explications et importateur de corrigés NetAcad / ITExamAnswers.</p>
          <button class="header-btn primary">Ouvrir CyberOps Hub ➔</button>
        </div>

        <div class="action-hero-card purple" onclick="App.renderView('cejm')">
          <div class="hero-tag">Bête Noire du BTS</div>
          <h3>⚖️ CEJM Anti-Galère (Éco, Droit, Management)</h3>
          <p>Méthode du syllogisme juridique pas-à-pas et fiches vulgarisées des 6 thèmes officiels.</p>
          <button class="header-btn primary" style="background: var(--purple-primary); color: #fff;">Ouvrir la CEJM ➔</button>
        </div>

        <div class="action-hero-card emerald" onclick="App.renderView('toeic')">
          <div class="hero-tag">Objectif 750+</div>
          <h3>🇬🇧 TOEIC Prep (Part 5 & IT Vocab)</h3>
          <p>Speed drills de 30 secondes pour Part 5 et flashcards du vocabulaire corporate informatique.</p>
          <button class="header-btn primary" style="background: var(--emerald-primary); color: #070a12;">Lancer un Speed Drill ➔</button>
        </div>
      </div>

      <!-- Live AI Coach Banner -->
      <div class="action-hero-card" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2)); border-color: var(--border-glow); margin-top: 1rem;" onclick="App.renderView('coach')">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div class="hero-tag">Coach IA Interactif</div>
            <h3 style="margin-top: 0.35rem;">Besoin d'une explication ou d'une interrogation à l'oral ?</h3>
            <p>Le coach t'aide à comprendre n'importe quelle commande ou notion floue sans jugement.</p>
          </div>
          <button class="header-btn primary">Discuter avec le Coach 🤖</button>
        </div>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // SISR Hub Renderer
  // ------------------------------------------------------------------------
  renderSisrHub() {
    const targetEl = document.getElementById("view-sisr");
    const categories = SISR_DATABASE.categories;
    const questions = SISR_DATABASE.quizzes;

    targetEl.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <div class="action-hero-card" style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(19, 27, 46, 0.95)); border-color: var(--border-glow); margin-bottom: 1.5rem;">
          <div class="hero-tag">Programme Officiel BTS SIO SISR</div>
          <h2>Pôle Solutions d'Infrastructure, Systèmes et Réseaux</h2>
          <p>
            Maîtrise les architectures réseaux Cisco, les services d'infrastructure indispensables (DNS, DHCP, AD DS), la sécurité périmétrique et la supervision.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem;">
            <button class="header-btn primary" onclick="App.startSisrQuiz('all')">
              🎯 Lancer le Quizz SISR (${questions.length} questions)
            </button>
            <button class="header-btn" onclick="App.startSisrFlashcards()">
              🗂️ Réviser les Flashcards SISR
            </button>
            <button class="header-btn" onclick="App.renderView('tools')">
              🧮 Ouvrir le Calculateur IP & Cheat-Sheet
            </button>
          </div>
        </div>

        <h3 style="margin-bottom: 1rem; font-size: 1.15rem;">📂 Modules de Compétences SISR</h3>
        <div class="actions-grid">
          <div class="action-hero-card">
            <div class="hero-tag">Réseaux</div>
            <h3>🔌 Commutation & Routage</h3>
            <p>VLANs 802.1Q, Trunk, Router-on-a-stick, OSPF, distances administratives, NAT/PAT.</p>
            <button class="header-btn" onclick="App.startSisrQuiz('reseau')">Quizz Réseaux ➔</button>
          </div>

          <div class="action-hero-card">
            <div class="hero-tag">Systèmes</div>
            <h3>🖥️ Active Directory DS & Linux</h3>
            <p>Rôles FSMO, GPO (LSDOU), permissions NTFS et partage, commandes Linux et systemd.</p>
            <button class="header-btn" onclick="App.startSisrQuiz('systeme')">Quizz Systèmes ➔</button>
          </div>

          <div class="action-hero-card">
            <div class="hero-tag">Services</div>
            <h3>⚙️ Services Réseau (DNS / DHCP)</h3>
            <p>Cycle DORA, DHCP Relay (ip helper-address), zones directes/inverses DNS, enregistrements A/MX/PTR.</p>
            <button class="header-btn" onclick="App.startSisrQuiz('services')">Quizz Services ➔</button>
          </div>

          <div class="action-hero-card">
            <div class="hero-tag">Cybersécurité</div>
            <h3>🛡️ Sécurité & Sauvegardes</h3>
            <p>Règle 3-2-1, ACL Cisco standard/étendues, SNMP v3, supervision Zabbix/Nagios.</p>
            <button class="header-btn" onclick="App.startSisrQuiz('securite')">Quizz Sécurité ➔</button>
          </div>
        </div>
      </div>
    `;
  },

  startSisrQuiz(category) {
    const all = SISR_DATABASE.quizzes;
    const filtered = category === "all" ? all : all.filter(q => q.category === category);
    this.renderView("quiz");
    QuizEngine.startQuiz(document.getElementById("quiz-container-root"), filtered, `BTS SIO SISR (${category})`);
  },

  startSisrFlashcards() {
    this.renderView("flashcards");
    FlashcardsEngine.init(document.getElementById("flashcards-container-root"), SISR_DATABASE.flashcards);
  },

  renderToolsView() {
    const targetEl = document.getElementById("view-tools");
    targetEl.innerHTML = `
      <div id="calc-container-mount"></div>
      <div id="cheatsheet-container-mount"></div>
    `;
    SisrTools.initCalculator(document.getElementById("calc-container-mount"));
    SisrTools.initCheatSheet(document.getElementById("cheatsheet-container-mount"));
  },

  // ------------------------------------------------------------------------
  // Helper / Contextual Triggers
  // ------------------------------------------------------------------------
  askAiCoachAboutMistakes(domainName) {
    this.renderView("coach");
    AiCoach.triggerPrompt(`Je viens de faire des erreurs sur le module "${domainName}". Peux-tu m'expliquer les points clés indispensables à retenir et me donner 2 questions d'entraînement simples ?`);
  },

  updateStatsDisplay() {
    const data = StorageManager.loadData();
    const streakEl = document.getElementById("sidebar-streak-count");
    if (streakEl) {
      streakEl.textContent = `${data.stats.streakDays} Jour${data.stats.streakDays > 1 ? 's' : ''}`;
    }
  },

  // ------------------------------------------------------------------------
  // Modals & Settings
  // ------------------------------------------------------------------------
  openSettingsModal() {
    const modal = document.getElementById("settings-modal");
    if (!modal) return;
    const settings = StorageManager.getSettings();
    document.getElementById("settings-gemini-key").value = settings.geminiApiKey || "";
    document.getElementById("settings-sound-toggle").checked = settings.soundEnabled;
    modal.classList.add("active");
  },

  closeSettingsModal() {
    const modal = document.getElementById("settings-modal");
    if (modal) modal.classList.remove("active");
  },

  saveSettingsFromModal() {
    const key = document.getElementById("settings-gemini-key").value.trim();
    const sound = document.getElementById("settings-sound-toggle").checked;

    StorageManager.saveSettings({
      geminiApiKey: key,
      soundEnabled: sound
    });

    this.closeSettingsModal();
    this.playSound("correct");
    alert("✅ Paramètres enregistrés avec succès !");
    if (this.currentView === "coach") {
      AiCoach.init(document.getElementById("view-coach"));
    }
  },

  exportUserData() {
    StorageManager.exportJSON();
    this.playSound("correct");
  },

  triggerImportJSON() {
    const fileInput = document.getElementById("backup-file-input");
    if (fileInput) fileInput.click();
  },

  handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const res = StorageManager.importJSON(content);
      if (res.success) {
        this.playSound("correct");
        alert("🎉 Sauvegarde restaurée avec succès !");
        location.reload();
      } else {
        alert("❌ Erreur : " + res.error);
      }
    };
    reader.readAsText(file);
  }
};

// Auto-boot on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
