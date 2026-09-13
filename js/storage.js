/* ==========================================================================
   STORAGE MANAGER (LocalStorage + JSON Backup/Restore)
   ========================================================================== */

const STORAGE_KEY = "CYBER_SISR_PLATFORM_V1";

const StorageManager = {
  // Default structure
  defaultData: {
    stats: {
      totalQuestionsAnswered: 0,
      correctAnswers: 0,
      quizzesTaken: 0,
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      moduleScores: {
        sisr: { answered: 0, correct: 0 },
        cyberops: { answered: 0, correct: 0 },
        cejm: { answered: 0, correct: 0 },
        toeic: { answered: 0, correct: 0 }
      }
    },
    settings: {
      geminiApiKey: "",
      useLMStudio: false,
      soundEnabled: true,
      userName: "Étudiant SISR"
    },
    customQuestions: [],
    customFlashcards: [],
    flashcardsHistory: {} // cardId: { level: 1-3, lastReview: date }
  },

  // Initialize or load
  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        this.saveData(this.defaultData);
        return JSON.parse(JSON.stringify(this.defaultData));
      }
      const parsed = JSON.parse(stored);
      // Merge with default to ensure all keys exist
      const merged = {
        ...this.defaultData,
        ...parsed,
        stats: { ...this.defaultData.stats, ...(parsed.stats || {}) },
        settings: { ...this.defaultData.settings, ...(parsed.settings || {}) }
      };
      this.checkDailyStreak(merged);
      return merged;
    } catch (e) {
      console.warn("StorageManager: Failed to load data, using default", e);
      return JSON.parse(JSON.stringify(this.defaultData));
    }
  },

  saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("StorageManager: Error saving to localStorage", e);
    }
  },

  checkDailyStreak(data) {
    const today = new Date().toISOString().split("T")[0];
    const lastDate = data.stats.lastActiveDate;
    if (lastDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (lastDate === yesterday) {
        data.stats.streakDays += 1;
      } else {
        data.stats.streakDays = 1; // reset streak if missed a day
      }
      data.stats.lastActiveDate = today;
      this.saveData(data);
    }
  },

  recordQuizResult(domain, totalQuestions, correctCount) {
    const data = this.loadData();
    data.stats.totalQuestionsAnswered += totalQuestions;
    data.stats.correctAnswers += correctCount;
    data.stats.quizzesTaken += 1;

    if (!data.stats.moduleScores[domain]) {
      data.stats.moduleScores[domain] = { answered: 0, correct: 0 };
    }
    data.stats.moduleScores[domain].answered += totalQuestions;
    data.stats.moduleScores[domain].correct += correctCount;

    this.saveData(data);
    return data.stats;
  },

  getSettings() {
    const data = this.loadData();
    return data.settings;
  },

  saveSettings(newSettings) {
    const data = this.loadData();
    data.settings = { ...data.settings, ...newSettings };
    this.saveData(data);
  },

  addCustomQuestion(questionObj) {
    const data = this.loadData();
    questionObj.id = "custom_q_" + Date.now();
    data.customQuestions.push(questionObj);
    this.saveData(data);
    return questionObj;
  },

  addCustomFlashcard(cardObj) {
    const data = this.loadData();
    cardObj.id = "custom_fc_" + Date.now();
    data.customFlashcards.push(cardObj);
    this.saveData(data);
    return cardObj;
  },

  exportJSON() {
    const data = this.loadData();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `revision-sisr-backup-${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.stats || parsed.settings || parsed.customQuestions) {
        this.saveData(parsed);
        return { success: true };
      }
      return { success: false, error: "Format de fichier invalide." };
    } catch (e) {
      return { success: false, error: "Fichier JSON corrompu ou illisible." };
    }
  }
};
