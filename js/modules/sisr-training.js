/* ==========================================================================
   SISR TRAINING MODULE : COURS & ATELIERS ADAPTÉS
   1. Tables de Routage : Anatomie, Distances Administratives & Longest Prefix Match
   2. Spanning Tree Protocol (STP & RSTP) : Élection Root Bridge, Rôles de Port & Sécurité
   Profil cognitif adapté : Phrases courtes, listes à puces, décomposition pas-à-pas.
   ========================================================================== */

const SisrTraining = {
  containerEl: null,
  currentTab: "routage", // "routage" | "stp"
  selectedToken: "proto",
  currentRouteDrillIndex: 0,
  currentStpStep: 1,

  // ------------------------------------------------------------------------
  // Data for Interactive Route Tokens
  // ------------------------------------------------------------------------
  routeTokens: {
    proto: {
      label: "O (Code Source)",
      tagClass: "token-proto",
      title: "1. Protocole source de la route",
      desc: "Indique <b>comment</b> le routeur a appris cette route :<br>• <b>C</b> : Directement connecté (Connected)<br>• <b>L</b> : Adresse IP locale configurée sur l'interface (/32)<br>• <b>S</b> : Route statique (créée à la main par l'administrateur)<br>• <b>S*</b> : Route par défaut (passerelle de dernier recours 0.0.0.0/0)<br>• <b>O</b> : Protocole dynamique OSPF<br>• <b>D</b> : Protocole dynamique EIGRP (DUAL)<br>• <b>R</b> : Protocole dynamique RIP."
    },
    net: {
      label: "172.16.1.0/24",
      tagClass: "token-net",
      title: "2. Réseau de destination & Préfixe",
      desc: "L'adresse réseau que ce chemin permet d'atteindre avec son masque CIDR.<br>• Ici, <b>/24</b> signifie que les 24 premiers bits identifient le réseau.<br>• La plage d'adresses couverte va de <b>172.16.1.1</b> à <b>172.16.1.254</b>.<br>• <i>Rappel clé :</i> Plus le préfixe est grand (/28 > /24 > /16), plus la route est précise !"
    },
    ad: {
      label: "[110/",
      tagClass: "token-ad",
      title: "3. Distance Administrative (AD)",
      desc: "C'est la <b>mesure de confiance</b> du routeur envers la source de la route.<br>• Plus le chiffre est <b>PETIT</b>, plus la source est jugée fiable !<br>• OSPF a une AD de <b>110</b>.<br>• Une route statique (AD 1) est plus prioritaire qu'OSPF (AD 110) à masque égal."
    },
    metric: {
      label: "20]",
      tagClass: "token-metric",
      title: "4. Métrique (Coût du chemin)",
      desc: "C'est le <b>coût calculé</b> par le protocole pour traverser le réseau.<br>• OSPF utilise la formule : <code>Coût = 10^8 / Bande passante</code>.<br>• Plus le coût est <b>FAIBLE</b>, plus la liaison est rapide et préférée.<br>• La métrique ne sert à départager deux routes QUE si elles viennent du <b>même protocole</b> et ont le même masque."
    },
    via: {
      label: "via 192.168.1.1",
      tagClass: "token-via",
      title: "5. Prochain Saut (Next-Hop)",
      desc: "L'adresse IPv4 de la carte réseau du <b>routeur voisin</b> à qui passer le paquet.<br>• Le routeur local ne connaît pas tout Internet : il confie le paquet à son voisin le plus proche sur le chemin."
    },
    time: {
      label: "00:05:12",
      tagClass: "token-time",
      title: "6. Âge de la route",
      desc: "Le temps écoulé (heures:minutes:secondes) depuis la dernière mise à jour reçue pour cette route.<br>• Si aucun paquet de mise à jour n'arrive avant un temps limite, la route est déclarée morte et supprimée."
    },
    iface: {
      label: "GigabitEthernet0/1",
      tagClass: "token-iface",
      title: "7. Interface de sortie locale",
      desc: "Le port physique du routeur par lequel le paquet sera expulsé sur le câble.<br>• Ici, le port Gigabit 0/1."
    }
  },

  // ------------------------------------------------------------------------
  // Route Decision Drills
  // ------------------------------------------------------------------------
  routeDrills: [
    {
      targetIp: "10.1.2.77",
      routes: [
        { net: "10.0.0.0/8", via: "192.168.10.1", proto: "O [110/10]", bits: 8 },
        { net: "10.1.0.0/16", via: "192.168.10.2", proto: "D [90/2560]", bits: 16 },
        { net: "10.1.2.0/24", via: "192.168.10.3", proto: "R [120/2]", bits: 24 },
        { net: "0.0.0.0/0", via: "192.168.10.4", proto: "S* [1/0]", bits: 0 }
      ],
      correctIndex: 2,
      explanation: "<b>Victoire de la route /24 (10.1.2.0/24) !</b><br>1. Toutes ces routes englobent bien l'adresse 10.1.2.77.<br>2. On compare la longueur du masque : <b>24 bits > 16 bits > 8 bits > 0 bit</b>.<br>3. Règle absolue du <i>Longest Prefix Match</i> : le routeur choisit TOUJOURS le masque le plus long, même si son AD (120 - RIP) est moins bonne que la route statique (AD 1) !"
    },
    {
      targetIp: "192.168.1.45",
      routes: [
        { net: "192.168.1.0/26", via: "10.0.0.1", proto: "O [110/20]", bits: 26 },
        { net: "192.168.1.0/24", via: "10.0.0.2", proto: "S [1/0]", bits: 24 },
        { net: "192.168.0.0/16", via: "10.0.0.3", proto: "C [0/0]", bits: 16 },
        { net: "0.0.0.0/0", via: "10.0.0.4", proto: "S* [1/0]", bits: 0 }
      ],
      correctIndex: 0,
      explanation: "<b>Victoire de la route /26 (192.168.1.0/26) !</b><br>1. Le sous-réseau /26 va de .0 à .63 (hôtes .1 à .62). L'adresse .45 est bien comprise dedans.<br>2. Comparaison des bits réseau : <b>26 > 24 > 16 > 0</b>.<br>3. Le masque /26 est le plus spécifique, il est donc immédiatement choisi."
    }
  ],

  // ------------------------------------------------------------------------
  // Initialize
  // ------------------------------------------------------------------------
  init(containerEl) {
    this.containerEl = containerEl;
    this.render();
  },

  setTab(tabName) {
    this.currentTab = tabName;
    this.render();
    App.playSound("click");
  },

  selectToken(tokenKey) {
    this.selectedToken = tokenKey;
    this.render();
    App.playSound("flip");
  },

  render() {
    if (!this.containerEl) return;

    this.containerEl.innerHTML = `
      <!-- Navigation Tabs -->
      <div class="training-nav-tabs">
        <button class="training-tab-btn ${this.currentTab === 'routage' ? 'active' : ''}" onclick="SisrTraining.setTab('routage')">
          <span>🗺️</span> 1. Tables de Routage & Longest Match
        </button>
        <button class="training-tab-btn ${this.currentTab === 'stp' ? 'active' : ''}" onclick="SisrTraining.setTab('stp')">
          <span>🌳</span> 2. Spanning Tree Protocol (STP & RSTP)
        </button>
        <button class="training-tab-btn" onclick="App.renderView('sisr')" style="margin-left: auto;">
          <span>↩️</span> Retour au Pôle SISR
        </button>
      </div>

      <div id="training-tab-content">
        ${this.currentTab === 'routage' ? this.renderRoutageHTML() : this.renderStpHTML()}
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // TAB 1: ROUTING TABLES & LONGEST PREFIX MATCH
  // ------------------------------------------------------------------------
  renderRoutageHTML() {
    const currentTokenData = this.routeTokens[this.selectedToken];
    const currentDrill = this.routeDrills[this.currentRouteDrillIndex];

    return `
      <!-- HERO INTRO -->
      <div class="action-hero-card" style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(19, 27, 46, 0.95)); border-color: rgba(59, 130, 246, 0.3); margin-bottom: 1.5rem;">
        <div class="hero-tag" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa;">Fiche Méthode • Routage IP</div>
        <h2>Lire & Décoder une Table de Routage Cisco</h2>
        <p>
          Un routeur est un aiguilleur de paquets. Sa table de routage répertorie toutes les directions connues.
          Clique sur chaque élément ci-dessous pour comprendre sa signification exacte en un clin d'œil.
        </p>
      </div>

      <!-- INTERACTIVE LINE DECOMPOSITION -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem;">
          <span>🔍</span> Anatomie Interactive d'une Ligne Cisco (<code style="color: var(--cyan-primary);">show ip route</code>)
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem;">
          👉 Clique sur l'un des blocs de la commande ci-dessous pour afficher son rôle :
        </p>

        <div class="route-dissect-box">
          <span class="route-token token-proto ${this.selectedToken === 'proto' ? 'active' : ''}" onclick="SisrTraining.selectToken('proto')">O</span>
          <span class="route-token token-net ${this.selectedToken === 'net' ? 'active' : ''}" onclick="SisrTraining.selectToken('net')">172.16.1.0/24</span>
          <span class="route-token token-ad ${this.selectedToken === 'ad' ? 'active' : ''}" onclick="SisrTraining.selectToken('ad')">[110</span>
          <span style="color: var(--text-dim);">/</span>
          <span class="route-token token-metric ${this.selectedToken === 'metric' ? 'active' : ''}" onclick="SisrTraining.selectToken('metric')">20]</span>
          <span class="route-token token-via ${this.selectedToken === 'via' ? 'active' : ''}" onclick="SisrTraining.selectToken('via')">via 192.168.1.1</span>
          <span class="route-token token-time ${this.selectedToken === 'time' ? 'active' : ''}" onclick="SisrTraining.selectToken('time')">00:05:12</span>
          <span class="route-token token-iface ${this.selectedToken === 'iface' ? 'active' : ''}" onclick="SisrTraining.selectToken('iface')">GigabitEthernet0/1</span>
        </div>

        <div class="token-desc-card">
          <div style="font-weight: 700; color: var(--cyan-primary); margin-bottom: 0.35rem;">
            ${currentTokenData.title}
          </div>
          <div style="color: var(--text-highlight); font-size: 0.9rem;">
            ${currentTokenData.desc}
          </div>
        </div>
      </div>

      <!-- ADMINISTRATIVE DISTANCES MEMO -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>⚖️</span> Distance Administrative (AD) : La Hiérarchie de Confiance
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Quand un routeur apprend le même réseau par deux sources différentes, il choisit celle qui a l'<b>AD la plus petite</b> :
        </p>

        <div class="ad-table-grid">
          <div class="ad-card" style="border-top: 3px solid #10b981;">
            <div class="ad-val" style="color: #10b981;">0</div>
            <div class="ad-name">Directement Connecté (C)</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.3rem;">Confiance absolue physique</div>
          </div>
          <div class="ad-card" style="border-top: 3px solid #3b82f6;">
            <div class="ad-val" style="color: #60a5fa;">1</div>
            <div class="ad-name">Route Statique (S)</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.3rem;">Choix manuel de l'admin</div>
          </div>
          <div class="ad-card" style="border-top: 3px solid #a855f7;">
            <div class="ad-val" style="color: #c084fc;">90</div>
            <div class="ad-name">EIGRP Interne (D)</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.3rem;">Protocole propriétaire Cisco</div>
          </div>
          <div class="ad-card" style="border-top: 3px solid #f59e0b;">
            <div class="ad-val" style="color: #fbbf24;">110</div>
            <div class="ad-name">OSPF (O)</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.3rem;">Standard ouvert universel</div>
          </div>
          <div class="ad-card" style="border-top: 3px solid #ec4899;">
            <div class="ad-val" style="color: #f472b6;">120</div>
            <div class="ad-name">RIP (R)</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.3rem;">Ancien (vecteur de distance)</div>
          </div>
          <div class="ad-card" style="border-top: 3px solid #ef4444;">
            <div class="ad-val" style="color: #f87171;">255</div>
            <div class="ad-name">Non Fiable / Rejetée</div>
            <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.3rem;">La route n'est pas installée</div>
          </div>
        </div>
      </div>

      <!-- DECISION ALGORITHM (TDAH / DYSCALCULIE ADAPTED) -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>🧠</span> L'Algorithme Décisionnel du Routeur en 3 Étapes Strictes
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Quand un paquet arrive, le routeur applique TOUJOURS ces 3 règles dans cet ordre précis, sans exception :
        </p>

        <div class="step-flow">
          <div class="step-row">
            <div class="step-num">1</div>
            <div class="step-body">
              <h4>Règle n°1 : Longest Prefix Match (Masque le plus précis)</h4>
              <p>
                Le routeur garde toutes les routes qui englobent l'IP de destination.<br>
                <b>La route avec le masque le plus long (le plus grand nombre de bits) gagne TOUJOURS !</b><br>
                <i>Exemple :</i> Un masque <code>/26</code> battra TOUJOURS un masque <code>/24</code>, même si la route en /26 vient de RIP (AD 120) et la route en /24 est statique (AD 1) !
              </p>
            </div>
          </div>

          <div class="step-row">
            <div class="step-num">2</div>
            <div class="step-body">
              <h4>Règle n°2 : Distance Administrative (En cas d'égalité sur le masque)</h4>
              <p>
                Si et seulement si deux routes ont exactement la <b>même longueur de masque</b> (ex: deux routes en /24), le routeur choisit celle qui a la <b>Distance Administrative la plus petite</b> (ex: Statique AD 1 gagne contre OSPF AD 110).
              </p>
            </div>
          </div>

          <div class="step-row">
            <div class="step-num">3</div>
            <div class="step-body">
              <h4>Règle n°3 : Métrique (En cas d'égalité sur le masque ET sur l'AD)</h4>
              <p>
                Si les deux routes proviennent du <b>même protocole</b> (ex: 2 routes OSPF pour le même réseau), le routeur choisit la métrique (le coût) la plus faible. S'il y a égalité parfaite, il fait de la répartition de charge (Load Balancing).
              </p>
            </div>
          </div>
        </div>

        <div class="callout-dys">
          💡 <b>À retenir absolument pour tes épreuves BTS SIO :</b><br>
          Le piège classique des examinateurs est de te montrer une route par défaut statique (<code>0.0.0.0/0</code> avec AD 1) et une route dynamique OSPF (<code>10.1.1.0/24</code> avec AD 110).<br>
          <b>Réflexe :</b> La route en <code>/24</code> est plus longue que <code>/0</code>, donc c'est <b>OSPF qui gagne</b> ! L'AD ne s'applique pas car les masques sont différents.
        </div>
      </div>

      <!-- INTERACTIVE ROUTE DRILL -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>🎯</span> Exercice Interactif Guidé : Quelle route sera choisie ?
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
          Un paquet arrive sur le routeur avec l'adresse IP de destination suivante :
        </p>

        <div style="background: rgba(6, 182, 212, 0.15); border: 1px solid var(--cyan-primary); padding: 0.75rem 1.5rem; border-radius: var(--radius-md); display: inline-block; font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: #fff; margin-bottom: 1.25rem;">
          IP Destination : ${currentDrill.targetIp}
        </div>

        <div class="drill-options-grid">
          ${currentDrill.routes.map((r, idx) => `
            <button class="drill-btn" id="drill-btn-${idx}" onclick="SisrTraining.checkRouteDrillAnswer(${idx})">
              <div style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan-primary);">${r.net}</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">via ${r.via} • ${r.proto}</div>
            </button>
          `).join("")}
        </div>

        <div id="drill-feedback-box"></div>
      </div>
    `;
  },

  checkRouteDrillAnswer(chosenIdx) {
    const drill = this.routeDrills[this.currentRouteDrillIndex];
    const isCorrect = chosenIdx === drill.correctIndex;
    const feedbackBox = document.getElementById("drill-feedback-box");

    document.querySelectorAll(".drill-btn").forEach((btn, i) => {
      btn.classList.remove("selected-correct", "selected-wrong");
      if (i === drill.correctIndex) {
        btn.classList.add("selected-correct");
      } else if (i === chosenIdx && !isCorrect) {
        btn.classList.add("selected-wrong");
      }
    });

    if (isCorrect) {
      App.playSound("correct");
      feedbackBox.innerHTML = `
        <div style="margin-top: 1rem; padding: 1rem 1.25rem; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-md); color: #a7f3d0; font-size: 0.9rem; line-height: 1.5;">
          ✅ <b>EXCELLENT RÉFLEXE !</b><br>${drill.explanation}
          <div style="margin-top: 0.75rem;">
            <button class="header-btn primary" onclick="SisrTraining.nextRouteDrill()" style="font-size: 0.82rem;">
              Passer au cas suivant ➔
            </button>
          </div>
        </div>
      `;
    } else {
      App.playSound("incorrect");
      feedbackBox.innerHTML = `
        <div style="margin-top: 1rem; padding: 1rem 1.25rem; background: rgba(244, 63, 94, 0.15); border: 1px solid #f43f5e; border-radius: var(--radius-md); color: #fecdd3; font-size: 0.9rem; line-height: 1.5;">
          ❌ <b>Ce n'est pas cette route !</b><br>
          Rappelle-toi la règle d'or : compare d'abord la <b>longueur du masque</b> (/24 > /16 > /8 > /0).<br>
          ${drill.explanation}
        </div>
      `;
    }
  },

  nextRouteDrill() {
    this.currentRouteDrillIndex = (this.currentRouteDrillIndex + 1) % this.routeDrills.length;
    this.render();
    App.playSound("flip");
  },

  // ------------------------------------------------------------------------
  // TAB 2: SPANNING TREE PROTOCOL (STP & RSTP)
  // ------------------------------------------------------------------------
  renderStpHTML() {
    return `
      <!-- HERO INTRO -->
      <div class="action-hero-card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(19, 27, 46, 0.95)); border-color: rgba(16, 185, 129, 0.3); margin-bottom: 1.5rem;">
        <div class="hero-tag" style="background: rgba(16, 185, 129, 0.2); color: #34d399;">Fiche Méthode • Commutation Cisco</div>
        <h2>Spanning Tree Protocol (STP 802.1D / RSTP 802.1w)</h2>
        <p>
          En entreprise, on relie les switches avec des câbles redondants pour éviter les coupures.
          Mais sans STP, ces liens créent des <b>boucles mortelles</b> qui font planter tout le réseau !
        </p>
      </div>

      <!-- PROBLEM: BROADCAST STORM -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>⚡</span> Pourquoi STP est-il indispensable ? Le drame des boucles de niveau 2
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
          <div style="background: rgba(244, 63, 94, 0.08); border: 1px solid rgba(244, 63, 94, 0.3); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="font-weight: 700; color: #fb7185; margin-bottom: 0.5rem;">❌ SANS STP (Le Crash)</div>
            <ul style="font-size: 0.88rem; color: var(--text-highlight); padding-left: 1.2rem; line-height: 1.5;">
              <li>Une trame Ethernet <b>n'a pas de champ TTL</b> (contrairement aux paquets IP).</li>
              <li>Un broadcast (ex: ARP, DHCP) est dupliqué et tourne en boucle <b>à l'infini</b>.</li>
              <li><b>Tempête de broadcast :</b> liens saturés à 100% en quelques secondes.</li>
              <li><b>Instabilité de la table MAC :</b> les adresses sautent de port en permanence (MAC flapping).</li>
            </ul>
          </div>

          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="font-weight: 700; color: #34d399; margin-bottom: 0.5rem;">✅ AVEC STP (La Solution)</div>
            <ul style="font-size: 0.88rem; color: var(--text-highlight); padding-left: 1.2rem; line-height: 1.5;">
              <li>STP échange des trames de contrôle appelées <b>BPDU</b> toutes les 2 secondes.</li>
              <li>Il détecte automatiquement la boucle physique.</li>
              <li>Il <b>bloque logiquement</b> le port redondant (état Blocking/Alternate).</li>
              <li>Si le câble principal est coupé, le port bloqué <b>se débloque automatiquement</b> !</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ROOT BRIDGE ELECTION IN 2 SIMPLE STEPS -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>👑</span> Élection du Root Bridge (Pont Racine) : 2 étapes simples
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Le switch qui a le <b>Bridge ID (BID) le plus FAIBLE</b> devient le chef du réseau (Root Bridge) :
        </p>

        <div class="step-flow">
          <div class="step-row">
            <div class="step-num" style="background: #10b981;">1</div>
            <div class="step-body">
              <h4>Étape 1 : Comparer la Priorité STP</h4>
              <p>
                Chaque switch a une priorité configurable (valeur par défaut = <b>32768</b>).<br>
                <b>La plus petite priorité l'emporte immédiatement !</b><br>
                <i>Exemple :</i> Un switch configuré à <code>4096</code> bat TOUS les autres configurés à <code>32768</code>. Fin de l'élection !
              </p>
            </div>
          </div>

          <div class="step-row">
            <div class="step-num" style="background: #3b82f6;">2</div>
            <div class="step-body">
              <h4>Étape 2 : Comparer l'Adresse MAC (Uniquement si égalité de priorité)</h4>
              <p>
                Si tous les switches ont la même priorité (ex: 32768 par défaut), on compare leur <b>adresse MAC</b> physique.<br>
                <b>L'adresse MAC la plus petite l'emporte !</b><br>
                <i>Exemple :</i> <code>00:01:02:...</code> est plus petit que <code>00:AA:BB:...</code>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 3 PORT ROLES -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>🔌</span> Les 3 Rôles de Ports STP
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Une fois le Root Bridge élu, chaque port des commutateurs reçoit un rôle bien défini :
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
          <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid #3b82f6; border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-weight: 800; color: #60a5fa;">Root Port (RP)</span>
              <span class="stp-badge rp">RP</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-highlight); line-height: 1.45; margin: 0;">
              <b>1 seul par switch non-racine.</b><br>
              C'est le port qui a le chemin le plus rapide (coût le plus faible) pour envoyer du trafic vers le Root Bridge.
            </p>
          </div>

          <div style="background: rgba(6, 182, 212, 0.1); border: 1px solid #06b6d4; border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-weight: 800; color: #38bdf8;">Designated Port (DP)</span>
              <span class="stp-badge dp">DP</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-highlight); line-height: 1.45; margin: 0;">
              <b>Port en transmission active.</b><br>
              TOUS les ports du Root Bridge sont Designated Ports. Sur chaque câble entre 2 switches, il y a obligatoirement 1 port DP.
            </p>
          </div>

          <div style="background: rgba(244, 63, 94, 0.1); border: 1px solid #f43f5e; border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-weight: 800; color: #fb7185;">Alternate / Blocked</span>
              <span class="stp-badge blk">BLK</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-highlight); line-height: 1.45; margin: 0;">
              <b>Port bloqué logiquement.</b><br>
              Il ne transmet aucune donnée utilisateur. Il écoute les BPDU en silence et est prêt à s'ouvrir si le lien principal tombe.
            </p>
          </div>
        </div>

        <div class="callout-math" style="margin-top: 1.25rem;">
          📊 <b>Coûts des liaisons STP (Rappel officiel Cisco) :</b><br>
          • 10 Mb/s = Coût <b>100</b><br>
          • 100 Mb/s (FastEthernet) = Coût <b>19</b><br>
          • 1 Gb/s (GigabitEthernet) = Coût <b>4</b><br>
          • 10 Gb/s (TenGigabit) = Coût <b>2</b>
        </div>
      </div>

      <!-- STP SECURITY (PORTFAST & BPDU GUARD) -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>🛡️</span> Sécurisation STP Indispensable : PortFast & BPDU Guard
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Deux fonctionnalités majeures à maîtriser pour les examens et en entreprise :
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="font-weight: 700; color: var(--cyan-primary); margin-bottom: 0.35rem;">🚀 Spanning-Tree PortFast</div>
            <p style="font-size: 0.85rem; color: var(--text-highlight); line-height: 1.45;">
              Permet à un port de passer immédiatement en état <b>Forwarding</b> sans attendre les 30 secondes de STP.<br>
              ⚠️ <b>Règle de sécurité :</b> À activer UNIQUEMENT sur les ports reliés à des PC, serveurs ou imprimantes. JAMAIS entre deux switches !
            </p>
            <code style="display: block; background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; color: #38bdf8; margin-top: 0.5rem;">
              Switch(config-if)# spanning-tree portfast
            </code>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="font-weight: 700; color: #f43f5e; margin-bottom: 0.35rem;">🛑 Spanning-Tree BPDU Guard</div>
            <p style="font-size: 0.85rem; color: var(--text-highlight); line-height: 1.45;">
              Protège le réseau contre les attaques ou erreurs de câblage.<br>
              Si quelqu'un branche un commutateur sur un port où PortFast est activé, le port reçoit un BPDU et se <b>désactive instantanément</b> (état <code>err-disable</code>).
            </p>
            <code style="display: block; background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 4px; font-size: 0.8rem; color: #fca5a5; margin-top: 0.5rem;">
              Switch(config-if)# spanning-tree bpduguard enable
            </code>
          </div>
        </div>
      </div>

      <!-- INTERACTIVE STP EXERCISE -->
      <div class="training-card">
        <h3 style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; margin-bottom: 0.5rem;">
          <span>🎯</span> Exercice Interactif STP : Qui est élu Root Bridge ?
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
          Voici 3 commutateurs Cisco reliés en triangle :
        </p>

        <div class="stp-topology-box">
          <div class="stp-switch-card" id="stp-card-sw1">
            <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-highlight);">Switch-1 (Étage 1)</div>
            <div style="margin: 0.5rem 0; font-size: 0.85rem; color: var(--text-muted);">
              • Priorité : <span style="font-family: var(--font-mono); color: #fbbf24; font-weight: 700;">32768</span><br>
              • Adresse MAC : <span style="font-family: var(--font-mono); color: var(--cyan-primary);">00:AA:11:22:33:44</span>
            </div>
            <button class="header-btn" style="width: 100%; font-size: 0.8rem;" onclick="SisrTraining.checkStpElection('sw1')">C'est Switch-1 ➔</button>
          </div>

          <div class="stp-switch-card" id="stp-card-sw2">
            <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-highlight);">Switch-2 (Cœur Réseau)</div>
            <div style="margin: 0.5rem 0; font-size: 0.85rem; color: var(--text-muted);">
              • Priorité : <span style="font-family: var(--font-mono); color: #10b981; font-weight: 700;">4096</span><br>
              • Adresse MAC : <span style="font-family: var(--font-mono); color: var(--cyan-primary);">00:FF:99:88:77:66</span>
            </div>
            <button class="header-btn" style="width: 100%; font-size: 0.8rem;" onclick="SisrTraining.checkStpElection('sw2')">C'est Switch-2 ➔</button>
          </div>

          <div class="stp-switch-card" id="stp-card-sw3">
            <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-highlight);">Switch-3 (Serveurs)</div>
            <div style="margin: 0.5rem 0; font-size: 0.85rem; color: var(--text-muted);">
              • Priorité : <span style="font-family: var(--font-mono); color: #fbbf24; font-weight: 700;">32768</span><br>
              • Adresse MAC : <span style="font-family: var(--font-mono); color: var(--cyan-primary);">00:01:02:03:04:05</span>
            </div>
            <button class="header-btn" style="width: 100%; font-size: 0.8rem;" onclick="SisrTraining.checkStpElection('sw3')">C'est Switch-3 ➔</button>
          </div>
        </div>

        <div id="stp-drill-feedback"></div>
      </div>
    `;
  },

  checkStpElection(swChoice) {
    const feedbackEl = document.getElementById("stp-drill-feedback");
    const cardSw2 = document.getElementById("stp-card-sw2");

    if (swChoice === "sw2") {
      App.playSound("correct");
      if (cardSw2) cardSw2.classList.add("root-winner");
      feedbackEl.innerHTML = `
        <div style="padding: 1rem 1.25rem; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: var(--radius-md); color: #a7f3d0; font-size: 0.9rem; line-height: 1.5;">
          👑 <b>BRAVO ! SWITCH-2 EST ÉLU ROOT BRIDGE !</b><br>
          <b>Explication pas-à-pas :</b><br>
          1. On compare la Priorité STP : Switch-2 a <b>4096</b> alors que Switch-1 et Switch-3 ont <b>32768</b>.<br>
          2. Comme <b>4096 est strictement plus petit que 32768</b>, Switch-2 gagne immédiatement !<br>
          3. Même si Switch-3 a une adresse MAC très basse (00:01:02:...), on ne regarde l'adresse MAC <i>qu'en cas d'égalité de priorité</i>.
        </div>
      `;
    } else {
      App.playSound("incorrect");
      feedbackEl.innerHTML = `
        <div style="padding: 1rem 1.25rem; background: rgba(244, 63, 94, 0.15); border: 1px solid #f43f5e; border-radius: var(--radius-md); color: #fecdd3; font-size: 0.9rem; line-height: 1.5;">
          ❌ <b>Attention au piège de l'adresse MAC !</b><br>
          Rappelle-toi l'étape 1 : on compare d'abord la <b>Priorité STP</b>.<br>
          Switch-2 a une priorité de <b>4096</b>, ce qui est inférieur à 32768. C'est donc lui qui gagne !
        </div>
      `;
    }
  }
};
