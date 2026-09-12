/* ==========================================================================
   J.A.R.V.I.S. AI COACH & HOLOGRAPHIC STUDY TUTOR MODULE
   Dual Voice Engine: Web SpeechSynthesis (Voice Output) + SpeechRecognition (Voice Input)
   Dual Intelligence: Offline Heuristic SISR/CyberOps Brain + Google Gemini API
   ========================================================================== */

const AiCoach = {
  chatHistory: [],
  containerEl: null,
  isThinking: false,
  isSpeaking: false,
  isListening: false,
  voiceEnabled: true,
  speechRate: 1.0,
  currentVoice: null,
  recognition: null,

  init(containerEl) {
    this.containerEl = containerEl;
    this.initSpeechEngines();

    if (this.chatHistory.length === 0) {
      this.chatHistory = [
        {
          sender: "ai",
          text: `⚡ **SYSTÈMES OPÉRATIONNELS EN LIGNE • J.A.R.V.I.S. V4.2 ACTIVÉ**\n\nBonjour Julia. Tous les modules de révision **BTS SIO SISR**, **Cisco CyberOps**, **CEJM** et **TOEIC** sont chargés dans le noyau neuronal.\n\n🎙️ *Vous pouvez me parler au micro avec le bouton ci-dessous, ou taper vos requêtes au clavier. Je vous répondrai oralement et textuellement.*`
        }
      ];
    }
    this.render();
  },

  initSpeechEngines() {
    // 1. Text-to-Speech (SpeechSynthesis)
    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadBestFrenchVoice();
      };
      this.loadBestFrenchVoice();
    }

    // 2. Speech-to-Text (Microphone Recognition)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = "fr-FR";
      this.recognition.continuous = true;
      this.recognition.interimResults = false;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.updateJarvisHUDState();
        App.playSound("click");
      };

      this.recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript + " ";
          }
        }
        const input = document.getElementById("ai-user-input");
        if (input && transcript.trim() !== "") {
          input.value = (input.value + " " + transcript).trim();
        }
        // J.A.R.V.I.S. n'envoie plus automatiquement. Il attend l'appui sur "Transmettre".
      };

      this.recognition.onerror = (event) => {
        console.warn("JARVIS Speech recognition error:", event.error);
        this.isListening = false;
        this.updateJarvisHUDState();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.updateJarvisHUDState();
      };
    }
  },

  loadBestFrenchVoice() {
    if (!("speechSynthesis" in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural female French voices (Microsoft Julie, Microsoft Hortense)
    this.currentVoice = voices.find(v => v.lang.startsWith("fr") && (v.name.includes("Julie") || v.name.includes("Hortense") || v.name.includes("Denise")))
      || voices.find(v => v.lang.startsWith("fr") && (v.name.includes("Google") || v.name.includes("Natural")))
      || voices.find(v => v.lang.startsWith("fr"))
      || voices[0];
  },

  render() {
    const settings = StorageManager.getSettings();
    const hasApiKey = Boolean(settings.geminiApiKey && settings.geminiApiKey.trim());

    this.containerEl.innerHTML = `
      <!-- J.A.R.V.I.S. HOLOGRAPHIC HUD HEADER -->
      <div class="jarvis-hud-header">
        <div class="jarvis-reactor-box">
          <div id="jarvis-reactor" class="jarvis-arc-reactor ${this.isSpeaking ? 'speaking' : ''} ${this.isListening ? 'listening' : ''}" onclick="AiCoach.toggleSpeechSynthesis()">
            <div class="reactor-ring-outer"></div>
            <div class="reactor-ring-mid"></div>
            <div class="reactor-ring-inner"></div>
            <div class="reactor-core-glow"></div>
          </div>

          <div class="jarvis-title-group">
            <h3>
              <span>J.A.R.V.I.S. // TUTEUR NEURONAL</span>
              <div class="jarvis-wave-container ${this.isSpeaking ? 'jarvis-wave-active' : ''}">
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
              </div>
            </h3>
            <div class="jarvis-telemetry-status" id="jarvis-status-text">
              ● STATUT : ${this.isSpeaking ? "SYNTHÈSE VOCALE ACTIVE..." : this.isListening ? "ÉCOUTE DU SIGNAL AUDIO..." : this.isThinking ? "ANALYSE EN COURS..." : "STANDBY OPÉRATIONNEL"}
              | IA : ${hasApiKey ? "GEMINI PRO CLOUD" : "CERVEAU LOCAL SISR"}
            </div>
          </div>
        </div>

        <div class="jarvis-voice-controls">
          <button id="jarvis-mic-trigger" class="jarvis-mic-btn ${this.isListening ? 'recording' : ''}" onclick="AiCoach.toggleMicrophone()">
            <span>${this.isListening ? "🛑 Arrêter l'écoute" : "🎙️ Parler à J.A.R.V.I.S."}</span>
          </button>

          <button class="jarvis-stop-speech-btn" onclick="AiCoach.toggleVoiceSound()" title="Activer / Désactiver la voix">
            <span>${this.voiceEnabled ? "🔊 Voix Active" : "🔇 Voix Muette"}</span>
          </button>

          ${this.isSpeaking ? `
            <button class="jarvis-stop-speech-btn" onclick="AiCoach.stopSpeaking()" style="color: var(--rose-primary);">
              ⏹️ Silence
            </button>
          ` : ""}

          <button class="header-btn" onclick="App.openSettingsModal()" title="Paramètres IA">
            ⚙️ ${hasApiKey ? "Clé API Active" : "Connecter Gemini"}
          </button>
        </div>
      </div>

      <!-- MAIN CHAT & EXAM SIMULATOR PANEL -->
      <div class="coach-container">
        <!-- Main Chat Area -->
        <div class="chat-panel">
          <div class="chat-header">
            <div class="coach-identity">
              <div class="coach-avatar" style="background: radial-gradient(circle, var(--cyan-primary), #0284c7); font-size: 1.1rem; box-shadow: 0 0 15px var(--cyan-glow);">
                ⚡
              </div>
              <div class="coach-info">
                <h4>Journal de Dialogue & Entraînement Oral</h4>
                <div class="coach-status">
                  <span class="status-dot" style="${this.isSpeaking ? 'background: #ec4899; box-shadow: 0 0 8px #ec4899;' : this.isListening ? 'background: #10b981;' : ''}"></span>
                  <span>${this.isSpeaking ? "Émission Vocale En Cours" : this.isListening ? "Microphone En Écoute..." : "En attente d'ordres"}</span>
                </div>
              </div>
            </div>

            <button class="header-btn" onclick="AiCoach.clearChatHistory()" title="Effacer la conversation">
              🧹 Réinitialiser
            </button>
          </div>

          <div class="chat-messages-area" id="chat-messages-box">
            ${this.chatHistory.map(msg => `
              <div class="message-row ${msg.sender}">
                <div class="msg-bubble">
                  ${this.formatMarkdown(msg.text)}
                  ${msg.sender === "ai" ? `
                    <div style="margin-top: 0.5rem; text-align: right;">
                      <button class="header-btn" style="padding: 0.2rem 0.6rem; font-size: 0.72rem; display: inline-flex;" onclick="AiCoach.speakText(\`${this.escapeForSpeech(msg.text)}\`)">
                        🔊 Réécouter
                      </button>
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join("")}
            ${this.isThinking ? `
              <div class="message-row ai">
                <div class="msg-bubble" style="font-style: italic; color: var(--cyan-primary);">
                  ⚡ J.A.R.V.I.S. consulte les bases de données et formule sa réponse...
                </div>
              </div>
            ` : ""}
          </div>

          <div class="chat-input-bar">
            <input type="text" id="ai-user-input" class="chat-input" placeholder="Posez une question à J.A.R.V.I.S. ou cliquez sur 'Parler à J.A.R.V.I.S.'..." onkeydown="if(event.key === 'Enter') AiCoach.handleSendMessage()">
            <button class="chat-send-btn" onclick="AiCoach.handleSendMessage()">
              Transmettre 🚀
            </button>
          </div>
        </div>

        <!-- Quick Scenarios & Oral Exam Modes -->
        <div class="coach-sidebar-panel">
          <h4>🎯 Protocoles de Simulation Vocale</h4>
          <div class="quick-prompts-list">
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('J.A.R.V.I.S., lance une simulation d examen oral sur les VLANs et 802.1Q')">
              🗣️ <strong>Oral d'Examen :</strong> VLANs & Trunk 802.1Q
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('J.A.R.V.I.S., interroge-moi sur la détection des attaques dans un SOC CyberOps')">
              🛡️ <strong>Oral CyberOps :</strong> Alertes SOC & Triade CIA
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('J.A.R.V.I.S., donne-moi un cas pratique de CEJM et guide-moi avec le syllogisme juridique')">
              ⚖️ <strong>Cas Pratique CEJM :</strong> Atelier Syllogisme
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('J.A.R.V.I.S., fais-moi un drill oral de vocabulaire TOEIC en anglais')">
              🇬🇧 <strong>Oral TOEIC :</strong> IT English Drill
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('J.A.R.V.I.S., explique-moi les commandes indispensables sous Cisco IOS pour configurer OSPF')">
              📡 <strong>Protocole OSPF :</strong> Syntaxe Cisco IOS
            </button>
          </div>

          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-subtle); font-size: 0.78rem; color: var(--text-dim); line-height: 1.5;">
            💡 <strong>Raccourci micro :</strong> Cliquez sur <em>🎙️ Parler à J.A.R.V.I.S.</em> pour poser votre question de vive voix sans toucher au clavier.
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const box = document.getElementById("chat-messages-box");
      if (box) box.scrollTop = box.scrollHeight;
    }, 50);
  },

  updateJarvisHUDState() {
    const reactor = document.getElementById("jarvis-reactor");
    const micBtn = document.getElementById("jarvis-mic-trigger");
    const statusText = document.getElementById("jarvis-status-text");

    if (reactor) {
      reactor.className = `jarvis-arc-reactor ${this.isSpeaking ? 'speaking' : ''} ${this.isListening ? 'listening' : ''}`;
    }
    if (micBtn) {
      micBtn.className = `jarvis-mic-btn ${this.isListening ? 'recording' : ''}`;
      micBtn.innerHTML = `<span>${this.isListening ? "🛑 Arrêter l'écoute" : "🎙️ Parler à J.A.R.V.I.S."}</span>`;
    }
    if (statusText) {
      statusText.textContent = `● STATUT : ${this.isSpeaking ? "SYNTHÈSE VOCALE ACTIVE..." : this.isListening ? "ÉCOUTE DU SIGNAL AUDIO..." : this.isThinking ? "ANALYSE EN COURS..." : "STANDBY OPÉRATIONNEL"}`;
    }
  },

  // ------------------------------------------------------------------------
  // Voice Controls: Speak & Listen
  // ------------------------------------------------------------------------
  toggleMicrophone() {
    if (!this.recognition) {
      alert("⚠️ La reconnaissance vocale n'est pas supportée par votre navigateur actuel. Utilisez Microsoft Edge ou Google Chrome pour parler à J.A.R.V.I.S.");
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
      this.isListening = false;
      this.updateJarvisHUDState();
    } else {
      this.stopSpeaking();
      try {
        this.recognition.start();
      } catch (e) {
        console.warn("Recognition already started", e);
      }
    }
  },

  speakText(rawText) {
    if (!this.voiceEnabled || !("speechSynthesis" in window)) return;

    this.stopSpeaking();

    // Clean text for natural speech (remove markdown asterisks, hashes, code blocks)
    let speechString = rawText
      .replace(/```[\s\S]*?```/g, " Consigne technique détaillée affichée à l'écran. ")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/[#*_\-•]/g, "")
      .replace(/https?:\/\/\S+/g, "lien internet")
      .trim();

    if (!speechString) return;

    const utterance = new SpeechSynthesisUtterance(speechString);
    utterance.lang = "fr-FR";
    utterance.rate = this.speechRate;
    utterance.pitch = 1.0;

    if (this.currentVoice) {
      utterance.voice = this.currentVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.updateJarvisHUDState();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.updateJarvisHUDState();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      this.updateJarvisHUDState();
    };

    window.speechSynthesis.speak(utterance);
  },

  stopSpeaking() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
      this.updateJarvisHUDState();
    }
  },

  toggleVoiceSound() {
    this.voiceEnabled = !this.voiceEnabled;
    if (!this.voiceEnabled) {
      this.stopSpeaking();
    } else {
      this.speakText("Système vocal de J.A.R.V.I.S. réactivé.");
    }
    this.render();
  },

  toggleSpeechSynthesis() {
    if (this.isSpeaking) {
      this.stopSpeaking();
    } else {
      this.speakText("J.A.R.V.I.S. à votre écoute, Julia.");
    }
  },

  triggerPrompt(promptText) {
    const input = document.getElementById("ai-user-input");
    if (input) {
      input.value = promptText;
      this.handleSendMessage();
    }
  },

  clearChatHistory() {
    this.stopSpeaking();
    this.chatHistory = [
      {
        sender: "ai",
        text: `⚡ **MÉMOIRE DU DIALOGUE RÉINITIALISÉE**\n\nJ.A.R.V.I.S. est prêt pour une nouvelle session d'entraînement.`
      }
    ];
    this.render();
    this.speakText("Mémoire de dialogue réinitialisée. À vos ordres.");
  },

  // ------------------------------------------------------------------------
  // Message Handling & Jarvis Brain
  // ------------------------------------------------------------------------
  async handleSendMessage() {
    const input = document.getElementById("ai-user-input");
    if (!input || this.isThinking) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    this.stopSpeaking();

    this.chatHistory.push({ sender: "user", text });
    this.isThinking = true;
    this.render();
    this.updateJarvisHUDState();

    App.playSound("flip");

    const settings = StorageManager.getSettings();
    let responseText = "";

    if (settings.geminiApiKey && settings.geminiApiKey.trim()) {
      try {
        responseText = await this.callGeminiApi(text, settings.geminiApiKey.trim());
      } catch (err) {
        console.error("Gemini error, fallback to Jarvis local core", err);
        const fallback = this.generateJarvisLocalResponse(text);
        responseText = `⚠️ *Note : Erreur de connexion API (${err.message}). Basculement sur le noyau local J.A.R.V.I.S. :*\n\n${fallback}`;
      }
    } else {
      // Offline Jarvis Core
      await new Promise(r => setTimeout(r, 600));
      responseText = this.generateJarvisLocalResponse(text);
    }

    this.chatHistory.push({ sender: "ai", text: responseText });
    this.isThinking = false;
    this.render();
    this.updateJarvisHUDState();
    App.playSound("correct");

    // Speak response out loud
    this.speakText(responseText);
  },

  async callGeminiApi(userPrompt, apiKey) {
    const systemInstruction = `Tu es J.A.R.V.I.S., l'intelligence artificielle ultra-avancée, élégante, polie et tactique, dédiée à la réussite de Julia pour son BTS SIO option SISR, sa certification Cisco CyberOps Associate (200-201 CBROPS) et sa matière CEJM.
Adopte la personnalité de J.A.R.V.I.S. (style Tony Stark) :
- Appelle l'utilisatrice "Julia" ou "Major".
- Sois d'un calme absolu, extrêmement compétent techniquement, avec un brin d'esprit et de dévouement.
- Tu maîtrises les réseaux (Cisco IOS, VLAN 802.1Q, OSPF, NAT, ACL, DHCP, DNS), les systèmes (Windows Server AD DS, GPO, Linux bash/systemd), la cybersécurité (NIST, MITRE ATT&CK, Wireshark, Event IDs Windows), la méthode du syllogisme juridique en CEJM et le TOEIC.
- Fournis des réponses impeccablement structurées, claires et faciles à lire et à écouter oralement.`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemInstruction}\n\nQuestion de Julia : ${userPrompt}` }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000
      }
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errJson = await res.json();
      throw new Error(errJson.error?.message || `Erreur HTTP ${res.status}`);
    }

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Désolé Julia, anomalie dans les flux de données.";
  },

  generateJarvisLocalResponse(prompt) {
    const p = prompt.toLowerCase();

    if (p.includes("syllogisme") || p.includes("cejm")) {
      return `À vos ordres, Julia. Voici le protocole de résolution juridique par syllogisme, indispensable pour sécuriser vos points en CEJM :

### ⚖️ Protocole du Syllogisme Juridique

1. **La Majeure (La Loi) :**
   Énoncer le principe de droit général sans mentionner les protagonistes du sujet.
   *Formule recommandée :* "En vertu de l'article 1231-1 du Code civil, toute inexécution d'une obligation contractuelle engage la responsabilité du débiteur si elle cause un dommage."

2. **La Mineure (Les Faits de l'Espèce) :**
   Relier directement les faits précis du cas concret aux conditions de la loi.
   *Formule recommandée :* "En l'espèce, le prestataire d'infogérance n'a pas appliqué le correctif de sécurité prévu au contrat d'assistance, ce qui a permis l'intrusion."

3. **La Conclusion (La Solution) :**
   Trancher la question posée sans ambiguïté.
   *Formule recommandée :* "Par conséquent, la société cliente est fondée à exiger des dommages et intérêts pour réparer son préjudice."

Souhaitez-vous que nous traitions un cas d'entraînement ensemble ?`;
    }

    if (p.includes("vlan") || p.includes("trunk") || p.includes("802.1q") || p.includes("inter-vlan")) {
      return `Analyse des architectures de commutation Cisco en cours...

### 🔌 Diagnostic Réseau : VLANs & Trunk 802.1Q

Bonjour Julia. Pour garantir le cloisonnement et la communication inter-VLANs, voici la séquence tactique :

1. **Création du VLAN sur le switch :**
\`\`\`cisco
Switch(config)# vlan 20
Switch(config-vlan)# name PROD_SERVERS
\`\`\`

2. **Liaison Trunk 802.1Q vers le routeur :**
\`\`\`cisco
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20
\`\`\`

3. **Sous-interfaçage sur le Routeur (Router-on-a-Stick) :**
\`\`\`cisco
Router(config)# interface g0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.254 255.255.255.0
\`\`\`

Tous les paquets traversant ce lien seront étiquetés avec le VLAN ID sur 12 bits. Vos communications sont opérationnelles.`;
    }

    if (p.includes("event id") || p.includes("cyberops") || p.includes("soc") || p.includes("alerte")) {
      return `Activation du module d'analyse SOC Cisco CyberOps 200-201.

### 🛡️ Télémétrie & Event IDs Windows Critiques

Pour vos examens CyberOps, Julia, ces identifiants de sécurité doivent être mémorisés immédiatement :

- **Event ID 4624** : Ouverture de session réussie (*Logon Success*).
  - Type 2 : Session locale interactive (clavier physique).
  - Type 3 : Session réseau (partage SMB).
  - Type 10 : Session Bureau à distance (RDP).
- **Event ID 4625** : Échec d'authentification. Une anomalie statistique indique une attaque par force brute.
- **Event ID 4672** : Attribution de privilèges spéciaux (élévation Administrateur).
- **Event ID 7045** : Installation d'un nouveau service Windows (technique de persistance d'un rootkit).
- **Event ID 1102** : Le journal de sécurité a été effacé (tentative d'effacement de traces par l'attaquant).

Je surveille vos flux en temps réel. Quelle menace souhaitez-vous analyser ensuite ?`;
    }

    if (p.includes("toeic") || p.includes("anglais") || p.includes("english")) {
      return `Very well, Julia. Initializing TOEIC oral speed drill protocol.

### 🇬🇧 High-Yield Corporate & IT Expressions

1. **Outage / Downtime** : Panne / Interruption d'un serveur (*"The unexpected server outage lasted two hours"*).
2. **To comply with** : Se conformer à une réglementation (*"All security policies must comply with GDPR"*).
3. **Prior to** : Formule formelle pour "Avant" (*"Prior to entering the server room, badges are checked"*).

**Règle de rapidité Part 5 :** Moins de 30 secondes par phrase. Éliminez immédiatement les formes grammaticalement impossibles. Ready for the next drill?`;
    }

    if (p.includes("ospf")) {
      return `Déploiement des tables de routage dynamique OSPFv2, Julia.

### 📡 Configuration Cisco IOS du Protocole OSPF

- **Algorithme :** Dijkstra (Shortest Path First), protocole à état de liens.
- **Distance administrative :** 110.
- **Configuration standard :**
\`\`\`cisco
Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 192.168.10.0 0.0.0.255 area 0
Router(config-router)# passive-interface g0/0
\`\`\`
*Rappel tactique :* Le masque générique (Wildcard) est l'inverse exact du masque de sous-réseau. Pour un /24 (255.255.255.0), le wildcard est **0.0.0.255**.`;
    }

    // Default Jarvis response
    return `Bien reçu, Julia.

J'ai analysé votre requête : **"${prompt}"**.

Les systèmes d'apprentissage sont calibrés pour maximiser votre efficacité :
1. Chaque notion technique est couplée à sa commande Cisco IOS, son filtre Wireshark ou sa règle de droit CEJM.
2. N'hésitez pas à activer le microphone pour vous entraîner à l'oral comme face à un jury d'examen.

À vos ordres, que souhaiteriez-vous réviser maintenant ?`;
  },

  escapeForSpeech(text) {
    if (!text) return "";
    return text
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/"/g, '\\"')
      .replace(/\n/g, " ");
  },

  formatMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/^### (.*$)/gim, '<h4 style="margin: 0.5rem 0; color: var(--cyan-primary); font-size: 1.05rem; display: flex; align-items: center; gap: 0.4rem;">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 style="margin: 0.6rem 0; color: var(--text-highlight); font-size: 1.15rem;">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```cisco([\s\S]*?)```/g, '<pre style="background: rgba(7, 10, 18, 0.9); border: 1px solid var(--border-glow); padding: 0.75rem; border-radius: 6px; font-family: monospace; color: #38bdf8; margin: 0.5rem 0;"><code>$1</code></pre>')
      .replace(/```([\s\S]*?)```/g, '<pre style="background: rgba(7, 10, 18, 0.9); border: 1px solid var(--border-subtle); padding: 0.75rem; border-radius: 6px; font-family: monospace; color: #a7f3d0; margin: 0.5rem 0;"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code style="background: rgba(255, 255, 255, 0.08); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: monospace; color: var(--cyan-primary);">$1</code>')
      .replace(/\n/g, '<br>');
  }
};
