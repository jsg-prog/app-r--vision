/* ==========================================================================
   CISCO CYBEROPS ASSOCIATE (200-201 CBROPS) FULL DATABASE
   Aligns with Cisco NetAcad & ITExamAnswers Checkpoint & Certification Structure
   ========================================================================== */

const CYBEROPS_DATABASE = {
  // Official NetAcad Module Checkpoint Groups & Certification Modules
  modules: [
    { id: "all", name: "Tous les Modules CyberOps", icon: "🌐" },
    { id: "mod1_2", name: "Modules 1 - 2 : Threat Actors & Defenders", icon: "🕵️‍♂️", link: "https://itexamanswers.net/modules-1-2-threat-actors-and-defenders-group-exam-answers.html" },
    { id: "mod3_4", name: "Modules 3 - 4 : Operating System Overview", icon: "🖥️", link: "https://itexamanswers.net/modules-3-4-operating-system-overview-group-exam-answers.html" },
    { id: "mod5_10", name: "Modules 5 - 10 : Network Fundamentals", icon: "🔌", link: "https://itexamanswers.net/modules-5-10-network-fundamentals-group-exam-answers.html" },
    { id: "mod11_12", name: "Modules 11 - 12 : Network Infrastructure Security", icon: "🛡️", link: "https://itexamanswers.net/modules-11-12-network-infrastructure-security-group-exam-answers.html" },
    { id: "mod13_17", name: "Modules 13 - 17 : Threats and Attacks", icon: "⚠️", link: "https://itexamanswers.net/modules-13-17-threats-and-attacks-group-exam-answers.html" },
    { id: "mod18_20", name: "Modules 18 - 20 : Network Defense & Tools", icon: "📡", link: "https://itexamanswers.net/modules-18-20-network-defense-group-exam-answers.html" },
    { id: "mod21_23", name: "Modules 21 - 23 : Cryptography & Endpoint Protection", icon: "🔐", link: "https://itexamanswers.net/modules-21-23-cryptography-and-endpoint-protection-group-exam-answers.html" },
    { id: "mod24_25", name: "Modules 24 - 25 : Protocols & Log Files", icon: "📑", link: "https://itexamanswers.net/modules-24-25-protocols-and-log-files-group-exam-answers.html" },
    { id: "mod26_28", name: "Modules 26 - 28 : Analyzing Security Data", icon: "🔬", link: "https://itexamanswers.net/modules-26-28-analyzing-security-data-group-exam-answers.html" },
    { id: "cert_final", name: "Certification 200-201 & Final Exam", icon: "🏆", link: "https://itexamanswers.net/cyberops-associate-200-201-certification-practice-exam-answers.html" }
  ],

  flashcards: [
    {
      id: "cbrops_fc_1",
      moduleId: "mod1_2",
      title: "Rôles au sein d'un SOC (Security Operations Center)",
      front: "Quels sont les rôles des analystes de Tier 1, Tier 2 et Tier 3 dans un SOC moderne ?",
      back: "• Tier 1 (Alert Analyst) : Surveille les alertes en continu, fait le tri (triage), valide les vrais incidents vs faux positifs et crée les tickets.\n• Tier 2 (Incident Responder) : Enquête en profondeur sur les incidents confirmés, évalue l'impact et applique les mesures de confinement.\n• Tier 3 (Threat Hunter / SME) : Expert de haut niveau (reverse engineering malware, forensic). Recherche activement les menaces cachées qui ont contourné les défenses automatiques."
    },
    {
      id: "cbrops_fc_2",
      moduleId: "mod1_2",
      title: "Différence essentielle entre SIEM et SOAR",
      front: "Quelle est la valeur ajoutée apportée par un SOAR par rapport à un SIEM traditionnel ?",
      back: "• SIEM : Collecte, filtre, corrèle les journaux et détecte les anomalies.\n• SOAR (Security Orchestration, Automation, and Response) : Va plus loin en automatisant l'investigation et la réponse aux incidents grâce à des guides opératoires préprogrammés (Playbooks), réduisant drastiquement le temps de remédiation sans intervention humaine pour les tâches répétitives."
    },
    {
      id: "cbrops_fc_3",
      moduleId: "mod3_4",
      title: "Event IDs Windows critiques",
      front: "Quels sont les codes d'événements Windows Event Log à connaître par cœur pour l'examen CyberOps ?",
      back: "• 4624 : Connexion réussie (Logon Success - Type 2 interactif local, Type 3 réseau, Type 10 RDP).\n• 4625 : Échec de connexion (Logon Failure - pics anormaux = brute force).\n• 4672 : Attribution de privilèges spéciaux (élévation de droits administrateur).\n• 7045 : Installation d'un nouveau service Windows (technique de persistance malware).\n• 1102 : Journal d'audit de sécurité effacé par un attaquant."
    },
    {
      id: "cbrops_fc_4",
      moduleId: "mod18_20",
      title: "Syntaxe de base des règles Snort",
      front: "Quelle est la structure obligatoire d'une règle de détection Snort ?",
      back: "La règle se compose de deux parties :\n1. L'en-tête (Header) : [Action] [Protocole] [IP Source] [Port Source] -> [IP Destination] [Port Destination]\nExemple : alert tcp any any -> $HOME_NET 80\n2. Les options (entre parenthèses) : (msg:\"...\"; content:\"...\"; sid:100001; rev:1;)"
    },
    {
      id: "cbrops_fc_5",
      moduleId: "mod21_23",
      title: "Chiffrement Symétrique vs Asymétrique",
      front: "Quand utilise-t-on le chiffrement symétrique et quand utilise-t-on l'asymétrique ?",
      back: "• Symétrique (ex: AES, 3DES) : Une seule clé secrète partagée. Ultra rapide et léger, utilisé pour chiffrer de gros volumes de données (fichiers, disques, sessions SSL/TLS).\n• Asymétrique (ex: RSA, ECC, Diffie-Hellman) : Paire de clés (publique pour chiffrer/vérifier, privée pour déchiffrer/signer). Plus lent en calcul, utilisé pour l'échange sécurisé de clé secrète et les signatures numériques (non-répudiation)."
    }
  ],

  quizzes: [
    // --- MODULES 1 - 2 ---
    {
      id: "q_mod1_2_1",
      moduleId: "mod1_2",
      question: "Quel rôle au sein d'un SOC a pour mission principale de rechercher activement les menaces cachées (Threat Hunting) et de faire du reverse-engineering de malwares ?",
      options: [
        "Tier 1 Alert Analyst",
        "Tier 2 Incident Responder",
        "Tier 3 SME / Threat Hunter",
        "SOC Manager"
      ],
      correctAnswer: 2,
      explanation: "Les analystes de Tier 3 (Threat Hunters / Sujet Experts) possèdent une expertise avancée en réseau, endpoint, threat intelligence et rétro-ingénierie (reverse engineering) de malwares pour débusquer les attaques furtives."
    },
    {
      id: "q_mod1_2_2",
      moduleId: "mod1_2",
      question: "Quel est le rôle principal d'une solution SOAR au sein d'un SOC par rapport à un SIEM classique ?",
      options: [
        "Garantir une disponibilité matérielle à 99,999%",
        "Automatiser l'investigation et exécuter des flux de réponse aux incidents basés sur des playbooks",
        "Remplacer entièrement tous les analystes humains du SOC",
        "Empêcher les attaques DDoS au niveau de la couche physique"
      ],
      correctAnswer: 1,
      explanation: "Le SOAR (Security Orchestration, Automation, and Response) automatise l'investigation des incidents et déclenche des scénarios de remédiation programmés (playbooks) pour réagir à la vitesse de la machine."
    },
    {
      id: "q_mod1_2_3",
      moduleId: "mod1_2",
      question: "Un technicien constate qu'un PC affiche un message indiquant que tous ses fichiers sont chiffrés et réclame un paiement en Bitcoins pour fournir la clé de déchiffrement. De quel type de menace s'agit-il ?",
      options: [
        "Spyware",
        "Ransomware (Rançongiciel)",
        "Cheval de Troie bancaire",
        "Adware"
      ],
      correctAnswer: 1,
      explanation: "Le ransomware (rançongiciel) chiffre les fichiers de la victime et exige une rançon, généralement sous forme de cryptomonnaie difficilement traçable comme le Bitcoin, pour rétablir l'accès."
    },
    {
      id: "q_mod1_2_4",
      moduleId: "mod1_2",
      question: "Quel indicateur de performance clé (KPI) mesure la durée pendant laquelle un pirate a accès au réseau avant d'être détecté et neutralisé ?",
      options: [
        "MTTD (Mean Time to Detect)",
        "MTTR (Mean Time to Respond)",
        "Dwell Time",
        "Time to Control"
      ],
      correctAnswer: 2,
      explanation: "Le 'Dwell Time' (temps de séjour) correspond à la durée totale pendant laquelle l'attaquant reste présent et non détecté au sein du réseau de l'organisation."
    },

    // --- MODULES 3 - 4 ---
    {
      id: "q_mod3_4_1",
      moduleId: "mod3_4",
      question: "Sous Windows, quel Event ID de sécurité indique qu'une tentative d'ouverture de session a échoué (Logon Failure) ?",
      options: [
        "Event ID 4624",
        "Event ID 4625",
        "Event ID 1102",
        "Event ID 4672"
      ],
      correctAnswer: 1,
      explanation: "L'Event ID 4625 enregistre chaque échec d'authentification. Une grande quantité d'ID 4625 en peu de temps est l'indicateur typique d'une attaque par force brute."
    },
    {
      id: "q_mod3_4_2",
      moduleId: "mod3_4",
      question: "Sous Linux, dans quel fichier ou répertoire système un analyste SOC recherche-t-il les journaux d'authentification et de tentatives de connexion (SSH, sudo) ?",
      options: [
        "/etc/shadow",
        "/var/log/auth.log ou /var/log/secure",
        "/proc/kcore",
        "/dev/null"
      ],
      correctAnswer: 1,
      explanation: "Les journaux d'authentification sous Debian/Ubuntu sont stockés dans '/var/log/auth.log' (et '/var/log/secure' sous RedHat/CentOS). Ils tracent les connexions SSH, commandes sudo et authentifications locales."
    },

    // --- MODULES 5 - 10 ---
    {
      id: "q_mod5_10_1",
      moduleId: "mod5_10",
      question: "Quelle est la taille en bits d'une adresse IPv6 et comment est-elle représentée ?",
      options: [
        "32 bits représentés en décimal séparé par des points",
        "64 bits représentés en octal",
        "128 bits représentés en notation hexadécimale séparée par des deux-points (:)",
        "256 bits représentés en binaire"
      ],
      correctAnswer: 2,
      explanation: "Une adresse IPv6 mesure 128 bits, divisée en 8 blocs de 16 bits écrits en hexadécimal et séparés par des deux-points (ex: 2001:db8::1)."
    },
    {
      id: "q_mod5_10_2",
      moduleId: "mod5_10",
      question: "Dans une connexion TCP, quels drapeaux (flags) sont échangés successivement lors de la poignée de main en 3 étapes (3-way handshake) ?",
      options: [
        "SYN -> SYN-ACK -> ACK",
        "ACK -> SYN -> FIN",
        "RST -> SYN -> ACK",
        "SYN -> ACK -> RST"
      ],
      correctAnswer: 0,
      explanation: "L'établissement d'une session TCP nécessite : 1) Le client envoie SYN, 2) Le serveur répond SYN-ACK, 3) Le client confirme par ACK."
    },

    // --- MODULES 11 - 12 ---
    {
      id: "q_mod11_12_1",
      moduleId: "mod11_12",
      question: "Quelle technologie de sécurité permet à un commutateur Cisco de bloquer les réponses DHCP non autorisées provenant d'un serveur pirate (Rogue DHCP) ?",
      options: [
        "Port Security",
        "DHCP Snooping",
        "Dynamic ARP Inspection (DAI)",
        "BPDU Guard"
      ],
      correctAnswer: 1,
      explanation: "DHCP Snooping classe les ports du switch en 'trusted' (de confiance, où se trouve le vrai serveur DHCP) et 'untrusted' (ports clients). Toute réponse DHCP Offer sur un port non fiable est immédiatement rejetée."
    },

    // --- MODULES 13 - 17 ---
    {
      id: "q_mod13_17_1",
      moduleId: "mod13_17",
      question: "Quelle attaque réseau consiste pour un pirate à envoyer de fausses réponses ARP pour associer son adresse MAC à l'adresse IP de la passerelle par défaut ?",
      options: [
        "ARP Spoofing / Poisoning",
        "DNS Amplification",
        "Smurf Attack",
        "SYN Flood"
      ],
      correctAnswer: 0,
      explanation: "L'empoisonnement de cache ARP (ARP Poisoning) permet à l'attaquant de détourner tout le trafic entre les clients et la passerelle par défaut pour réaliser une écoute active (Man-in-the-Middle)."
    },

    // --- MODULES 18 - 20 ---
    {
      id: "q_mod18_20_1",
      moduleId: "mod18_20",
      question: "Quelle différence fondamentale distingue un système de détection d'intrusion (IDS) d'un système de prévention d'intrusion (IPS) ?",
      options: [
        "L'IDS chiffre le trafic alors que l'IPS analyse les adresses IP",
        "L'IDS est passif (copie du trafic, génère des alertes) tandis que l'IPS est déployé en ligne (in-line) et bloque activement le trafic malveillant",
        "L'IPS est uniquement matériel et ne peut inspecter que la couche 2",
        "L'IDS remplace le routeur de l'entreprise"
      ],
      correctAnswer: 1,
      explanation: "Un IDS analyse une copie du trafic (via port mirroring/SPAN) et alerte sans couper le flux. Un IPS est inséré directement sur le trajet des paquets (in-line) et a le pouvoir de rejeter (drop) immédiatement les paquets suspects."
    },

    // --- MODULES 21 - 23 ---
    {
      id: "q_mod21_23_1",
      moduleId: "mod21_23",
      question: "Quelle fonction cryptographique garantit que l'intégrité d'un fichier n'a pas été compromise pendant son transfert ?",
      options: [
        "Une fonction de hachage à sens unique (ex: SHA-256)",
        "Un chiffrement de flux RC4",
        "Une compression GZIP",
        "Une clé de chiffrement DES"
      ],
      correctAnswer: 0,
      explanation: "Une fonction de hachage cryptographique (ex: SHA-256) produit une empreinte numérique unique. Si le fichier est altéré même d'un seul bit, le hash résultant sera totalement différent (effet avalanche)."
    },

    // --- MODULES 24 - 25 ---
    {
      id: "q_mod24_25_1",
      moduleId: "mod24_25",
      question: "Quel format de données réseau permet d'analyser le volume et les flux de communication (5-tuple) sans stocker la totalité du contenu des paquets ?",
      options: [
        "NetFlow / IPFIX",
        "Full Packet Capture (PCAP)",
        "Fichier de zone DNS",
        "Journal EventLog Windows"
      ],
      correctAnswer: 0,
      explanation: "NetFlow fournit des métadonnées de flux réseau (adresses IP source/destination, ports, protocole, nombre d'octets) très compactes, idéales pour l'analyse à grande échelle sans surcharger le stockage."
    },

    // --- MODULES 26 - 28 ---
    {
      id: "q_mod26_28_1",
      moduleId: "mod26_28",
      question: "Dans le framework NIST SP 800-61r2, quelle phase succède immédiatement à la phase de 'Détection et Analyse' lors du traitement d'un incident de sécurité ?",
      options: [
        "Activités Post-Incident (Lessons Learned)",
        "Préparation (Preparation)",
        "Confinement, Éradication et Récupération (Containment, Eradication & Recovery)",
        "Dépôt de plainte judiciaire"
      ],
      correctAnswer: 2,
      explanation: "Dès qu'un incident est détecté et confirmé, l'équipe passe à l'étape de Confinement (isoler la menace pour stopper sa propagation), puis à l'Éradication du malware et à la Récupération des systèmes sains."
    },

    // --- CERTIFICATION 200-201 ---
    {
      id: "q_cert_1",
      moduleId: "cert_final",
      question: "Quelle métrique de base CVSS v3.1 évalue si un attaquant a besoin de privilèges d'administrateur ou d'utilisateur standard avant de pouvoir exploiter la faille ?",
      options: [
        "Attack Complexity (AC)",
        "Privileges Required (PR)",
        "User Interaction (UI)",
        "Scope (S)"
      ],
      correctAnswer: 1,
      explanation: "La métrique 'Privileges Required' (PR) mesure le niveau de privilèges que l'attaquant doit détenir avant d'exploiter la vulnérabilité (None, Low, High)."
    }
  ]
};
