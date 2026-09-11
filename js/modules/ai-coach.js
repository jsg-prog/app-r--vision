/* ==========================================================================
   AI COACH & STUDY TUTOR MODULE
   Dual Mode: Offline Heuristic SISR/CyberOps Brain + Google Gemini API
   ========================================================================== */

const AiCoach = {
  chatHistory: [],
  containerEl: null,
  isThinking: false,

  init(containerEl) {
    this.containerEl = containerEl;
    if (this.chatHistory.length === 0) {
      this.chatHistory = [
        {
          sender: "ai",
          text: `👋 Salut ! Je suis ton **Coach IA dédié au BTS SIO SISR & Cisco CyberOps**.\n\nJe suis là pour t'entraîner, tester tes connaissances, t'expliquer des notions difficiles (même la CEJM !) et générer des fiches de révision sur mesure.\n\n💡 *Astuce : Tu peux utiliser les suggestions rapides à droite ou me poser n'importe quelle question directement.*`
        }
      ];
    }
    this.render();
  },

  render() {
    const settings = StorageManager.getSettings();
    const hasApiKey = Boolean(settings.geminiApiKey && settings.geminiApiKey.trim());

    this.containerEl.innerHTML = `
      <div class="coach-container">
        <!-- Main Chat Area -->
        <div class="chat-panel">
          <div class="chat-header">
            <div class="coach-identity">
              <div class="coach-avatar">🤖</div>
              <div class="coach-info">
                <h4>Cyber-Tuteur SISR & CyberOps</h4>
                <div class="coach-status">
                  <span class="status-dot"></span>
                  <span>${hasApiKey ? "Mode Connecté (Gemini AI Studio ⚡)" : "Mode Tuteur Embarqué (Autonome 🧠)"}</span>
                </div>
              </div>
            </div>

            <button class="header-btn" onclick="App.openSettingsModal()" title="Configurer la clé API IA">
              ⚙️ ${hasApiKey ? "Clé Configurée" : "Activer Clé API"}
            </button>
          </div>

          <div class="chat-messages-area" id="chat-messages-box">
            ${this.chatHistory.map(msg => `
              <div class="message-row ${msg.sender}">
                <div class="msg-bubble">
                  ${this.formatMarkdown(msg.text)}
                </div>
              </div>
            `).join("")}
            ${this.isThinking ? `
              <div class="message-row ai">
                <div class="msg-bubble" style="font-style: italic; color: var(--cyan-primary);">
                  ⚡ Le coach réfléchit et prépare sa réponse...
                </div>
              </div>
            ` : ""}
          </div>

          <div class="chat-input-bar">
            <input type="text" id="ai-user-input" class="chat-input" placeholder="Pose une question (ex: Explique-moi le protocole OSPF, ou interroge-moi sur les VLANs)..." onkeydown="if(event.key === 'Enter') AiCoach.handleSendMessage()">
            <button class="chat-send-btn" onclick="AiCoach.handleSendMessage()">
              Envoyer 🚀
            </button>
          </div>
        </div>

        <!-- Quick Actions Sidebar -->
        <div class="coach-sidebar-panel">
          <h4>💡 Actions Rapides & Interrogations</h4>
          <div class="quick-prompts-list">
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('Interroge-moi sur les VLANs et le routage inter-vlan')">
              🎯 <strong>Interroge-moi :</strong> VLANs & Routage 802.1Q
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('Explique-moi la méthode du syllogisme juridique en CEJM avec un exemple simple pour un BTS SIO')">
              ⚖️ <strong>Sauve-moi en CEJM :</strong> Méthode du Syllogisme
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('Quels sont les Event IDs Windows les plus importants à surveiller pour la certif Cisco CyberOps ?')">
              🛡️ <strong>CyberOps :</strong> Logs & Event IDs Windows
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('Donne-moi 3 astuces pour ne pas tomber dans les pièges de grammaire au TOEIC')">
              🇬🇧 <strong>Boost TOEIC :</strong> Pièges de grammaire
            </button>
            <button class="quick-prompt-btn" onclick="AiCoach.triggerPrompt('Fais-moi une fiche de révision ultra synthétique sur le protocole DNS (ports, types d enregistrements)')">
              📑 <strong>Générer une Fiche :</strong> Architecture DNS
            </button>
          </div>

          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-subtle); font-size: 0.78rem; color: var(--text-dim); line-height: 1.5;">
            🔒 <strong>Vie privée :</strong> Tes révisions et discussions restent locales dans ton navigateur.
          </div>
        </div>
      </div>
    `;

    // Auto-scroll to bottom
    setTimeout(() => {
      const box = document.getElementById("chat-messages-box");
      if (box) box.scrollTop = box.scrollHeight;
    }, 50);
  },

  triggerPrompt(promptText) {
    const input = document.getElementById("ai-user-input");
    if (input) {
      input.value = promptText;
      this.handleSendMessage();
    }
  },

  async handleSendMessage() {
    const input = document.getElementById("ai-user-input");
    if (!input || this.isThinking) return;
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    this.chatHistory.push({ sender: "user", text });
    this.isThinking = true;
    this.render();

    App.playSound("flip");

    const settings = StorageManager.getSettings();
    if (settings.geminiApiKey && settings.geminiApiKey.trim()) {
      try {
        const responseText = await this.callGeminiApi(text, settings.geminiApiKey.trim());
        this.chatHistory.push({ sender: "ai", text: responseText });
      } catch (err) {
        console.error("Gemini API error, falling back to local brain", err);
        const fallback = this.generateLocalBrainResponse(text);
        this.chatHistory.push({ 
          sender: "ai", 
          text: `⚠️ *Note : Erreur de connexion avec la clé API (${err.message}). Voici la réponse du tuteur embarqué :*\n\n${fallback}` 
        });
      }
    } else {
      // Offline Heuristic Brain
      await new Promise(r => setTimeout(r, 600)); // simulated thinking
      const localResponse = this.generateLocalBrainResponse(text);
      this.chatHistory.push({ sender: "ai", text: localResponse });
    }

    this.isThinking = false;
    this.render();
    App.playSound("correct");
  },

  async callGeminiApi(userPrompt, apiKey) {
    const systemInstruction = `Tu es le tuteur d'élite bienveillant et expert pour un étudiant en BTS SIO option SISR (Systèmes et Réseaux) et candidat à la certification Cisco CyberOps Associate (200-201 CBROPS). 
Tu maîtrises parfaitement :
1. Les réseaux d'entreprise (Cisco IOS, switching 802.1Q, routage OSPF/BGP, ACL, NAT, DHCP, DNS).
2. L'administration système (Windows Server, Active Directory DS, GPO, Linux Debian/Ubuntu, bash, systemd, sécurité).
3. Cisco CyberOps (NIST 800-61, MITRE ATT&CK, Wireshark, Snort rules, Windows Event IDs, NetFlow, CVSS).
4. La CEJM (Culture Économique, Juridique et Managériale) : tu sais expliquer très simplement avec la méthode du syllogisme juridique et des exemples concrets du secteur informatique.
5. La préparation au test d'anglais TOEIC.

Style : Pédagogue, structuré avec puces claires, emojis pertinents, commandes en blocs de code, et encourageant. Réponds toujours en français (sauf pour les exercices de TOEIC).`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `${systemInstruction}\n\nQuestion de l'étudiant : ${userPrompt}` }]
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
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return candidateText || "Désolé, je n'ai pas pu générer de réponse.";
  },

  generateLocalBrainResponse(prompt) {
    const p = prompt.toLowerCase();

    if (p.includes("syllogisme") || p.includes("cejm")) {
      return `### ⚖️ La Méthode du Syllogisme Juridique (Spécial CEJM)

C'est LA technique qui assure la majorité des points en droit au BTS SIO :

1. **La Majeure (La Règle de Droit) :**
   *On énonce la loi de manière abstraite sans citer les personnes du sujet.*
   👉 *Formule type :* "En vertu de l'article 1231-1 du Code civil, toute inexécution d'une obligation contractuelle engage la responsabilité contractuelle du débiteur si elle cause un préjudice."

2. **La Mineure (L'Application aux faits) :**
   *On relie les faits du texte à la règle.*
   👉 *Formule type :* "En l'espèce, le prestataire infogérance n'a pas appliqué les correctifs de sécurité prévus au contrat, ce qui a permis l'infection par ransomware."

3. **La Conclusion (La Décision) :**
   *On tranche la question posée.*
   👉 *Formule type :* "Par conséquent, l'entreprise cliente peut légitimement demander la résiliation du contrat et des dommages-intérêts."

💡 *Entraîne-toi dès maintenant dans l'onglet **CEJM** du site !*`;
    }

    if (p.includes("vlan") || p.includes("inter-vlan") || p.includes("802.1q")) {
      return `### 🔌 Question d'entraînement SISR : Les VLANs & 802.1Q

Voici une mise en situation fréquente à l'épreuve E4 / E5 du BTS SISR :

**Scénario :**
Deux PC situés sur deux switches différents doivent communiquer dans le **VLAN 20 (Comptabilité)**. Pourtant, les pings échouent.

**Vérifications clés du technicien SISR :**
1. **Lien Inter-Switch :** Le port de liaison entre les deux commutateurs est-il bien en **Trunk (802.1Q)** ?
   \`\`\`cisco
   Switch(config-if)# switchport mode trunk
   Switch(config-if)# switchport trunk allowed vlan add 20
   \`\`\`
2. **Ports d'accès :** Les ports sur lesquels sont branchés les PCs sont-ils bien configurés en mode access sur le bon VLAN ?
   \`\`\`cisco
   Switch(config-if)# switchport mode access
   Switch(config-if)# switchport access vlan 20
   \`\`\`
3. **Passerelle par défaut :** Si les PC doivent communiquer avec un autre VLAN (ex: VLAN 10), as-tu configuré le sous-interfaçage sur le routeur (*Router-on-a-Stick*) ?

Dis-moi si tu veux qu'on détaille la configuration d'une sous-interface routeur !`;
    }

    if (p.includes("event id") || p.includes("eventlog") || p.includes("cyberops") || p.includes("windows")) {
      return `### 🛡️ Cisco CyberOps : Les Windows Event IDs Incontournables

Pour l'examen CyberOps 200-201 CBROPS, ces codes d'événements doivent être connus par cœur :

- **4624** : Connexion réussie (*Successful Logon*).
  - *Type 2 :* Session interactive locale (physique au clavier).
  - *Type 3 :* Connexion réseau (partage SMB, RPC).
  - *Type 10 :* RemoteInteractive (Bureau à distance RDP).
- **4625** : Échec de connexion (*Failed Logon*). Surveille les pics anormaux = Attaque Brute-Force ou Password Spraying !
- **4672** : Attribution de privilèges spéciaux (*Special Privileges Assigned* - ex: élévation Admin).
- **7045 / 4697** : Nouveau service système installé (technique de persistance fréquente des rootkits/trojans).
- **1102** : Le journal d'audit de sécurité a été effacé (action très suspecte d'un pirate couvrant ses traces).`;
    }

    if (p.includes("toeic") || p.includes("anglais") || p.includes("english")) {
      return `### 🇬🇧 3 Astuces Rapides pour booster ton score au TOEIC (Part 5)

1. **La règle des 30 secondes :** Ne reste jamais plus de 30s sur une question de Part 5. Si tu hésites, élimine les 2 réponses grammaticalement impossibles et choisis la plus probable.
2. **La règle de position (Suffixes) :**
   - Entre un verbe et un nom ➔ **Adjectif** (*a comprehensive report*).
   - Pour modifier un adjectif ➔ **Adverbe en -ly** (*remarkably efficient*).
3. **Attention aux faux-amis fréquents :**
   - *Actually* = En réalité / En fait (et NON PAS 'actuellement' qui se dit *currently*).
   - *Eventually* = Finalement / À terme (et NON PAS 'éventuellement' qui se dit *possibly*).`;
    }

    if (p.includes("dns") || p.includes("port")) {
      return `### 📑 Fiche Mémo Express : Protocole DNS (Domain Name System)

- **Port & Transport :** Port **UDP 53** pour les requêtes de résolution usuelles, et **TCP 53** pour les transferts de zone volumineux entre serveurs DNS (AXFR/IXFR).
- **Types d'enregistrements clés :**
  - **A :** Nom d'hôte vers adresse IPv4 (ex: \`srv-web.domaine.lan -> 192.168.1.50\`).
  - **AAAA :** Nom d'hôte vers adresse IPv6.
  - **CNAME (Canonique) :** Alias vers un autre nom (ex: \`www.domaine.lan -> srv-web.domaine.lan\`).
  - **MX (Mail Exchange) :** Spécifie les serveurs de messagerie avec niveau de priorité.
  - **PTR (Pointeur) :** Résolution inverse (IP vers Nom d'hôte) - Zone \`.in-addr.arpa\`.
  - **SOA (Start of Authority) :** Informations de référence sur la zone (numéro de série pour réplication, TTL).`;
    }

    // Default intelligent response
    return `### 💡 Conseils de révision pour : "${prompt}"

En BTS SIO SISR et Cisco CyberOps, la clé de la réussite repose sur la **pratique régulière et la compréhension des flux** :

1. **Associe toujours la théorie à une commande ou un outil :**
   - Si tu révises le routage ➔ Pense à \`show ip route\` et aux paquets Hello OSPF.
   - Si tu révises la cyber ➔ Pense à Wireshark, aux filtres et aux Event IDs.
   - Si tu révises la CEJM ➔ Structure toujours selon le **Syllogisme** (Majeure, Mineure, Conclusion).
2. **Utilise les modules de l'application :**
   - Lance un **Quizz express** dans l'onglet dédié pour tester tes réflexes.
   - Utilise le **Calculateur IP** pour maîtriser le découpage VLSM en quelques secondes.

Dis-moi sur quel sujet précis tu veux que je te teste ou te prépare une fiche détaillée !`;
  },

  formatMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/^### (.*$)/gim, '<h4 style="margin: 0.5rem 0; color: var(--cyan-primary); font-size: 1.05rem;">$1</h4>')
      .replace(/^## (.*$)/gim, '<h3 style="margin: 0.6rem 0; color: var(--text-highlight); font-size: 1.15rem;">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```cisco([\s\S]*?)```/g, '<pre style="background: rgba(7, 10, 18, 0.85); border: 1px solid var(--border-glow); padding: 0.75rem; border-radius: 6px; font-family: monospace; color: #38bdf8; margin: 0.5rem 0;"><code>$1</code></pre>')
      .replace(/```([\s\S]*?)```/g, '<pre style="background: rgba(7, 10, 18, 0.85); border: 1px solid var(--border-subtle); padding: 0.75rem; border-radius: 6px; font-family: monospace; color: #a7f3d0; margin: 0.5rem 0;"><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code style="background: rgba(255, 255, 255, 0.08); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: monospace; color: var(--cyan-primary);">$1</code>')
      .replace(/\n/g, '<br>');
  }
};
