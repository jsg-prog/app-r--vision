/* ==========================================================================
   TOEIC PREPARATION DATABASE (Reading Part 5 & 6 Drills + Business/IT Vocab)
   Designed for IT & BTS SIO students aiming for 750+ points
   ========================================================================== */

const TOEIC_DATABASE = {
  categories: [
    { id: "all", name: "All Topics", icon: "🇬🇧" },
    { id: "it_business", name: "IT & Tech Corporate", icon: "💻" },
    { id: "grammar", name: "Part 5 Grammar Drills", icon: "✍️" },
    { id: "office", name: "Office & Operations", icon: "🏢" },
    { id: "logistics", name: "Contracts & Finance", icon: "📑" }
  ],

  tips: [
    {
      title: "Part 5 Speed Rule (30 seconds per question)",
      tip: "Never spend more than 30 seconds on a Part 5 sentence. Either you know the grammar rule/word, or you eliminate the obviously wrong answers, guess, and move on to save time for Part 7 reading!"
    },
    {
      title: "Look at the Words Right Before and After the Blank",
      tip: "Often, looking at the entire sentence is unnecessary. If the blank is between 'the' and 'of', you almost certainly need a NOUN. If it follows a form of 'to be' and precedes a noun, you need an ADJECTIVE or PARTICIPLE."
    },
    {
      title: "Beware of False Friends (Faux-amis)",
      tip: "• 'Actually' means 'in fact' / 'really' (not 'actuellement' which is 'currently' or 'presently').\n• 'Eventually' means 'in the end' / 'finally' (not 'éventuellement' which is 'possibly').\n• 'Delay' means 'retard' (not 'délai' which is 'deadline' or 'timeframe')."
    }
  ],

  flashcards: [
    {
      id: "toeic_fc_1",
      category: "it_business",
      title: "Crucial Business IT Vocabulary #1",
      front: "What do these common TOEIC IT words mean in French?\n\n1. Outage\n2. Downtime\n3. Bandwidth\n4. Upgrade",
      back: "1. Outage = Panne / Interruption de service (ex: power outage = panne de courant)\n2. Downtime = Temps d'arrêt / Indisponibilité d'un serveur\n3. Bandwidth = Bande passante (capacité réseau)\n4. Upgrade = Mise à niveau / Mise à niveau matérielle ou logicielle."
    },
    {
      id: "toeic_fc_2",
      category: "logistics",
      title: "Corporate & Contract Vocabulary #2",
      front: "What do these essential TOEIC verbs mean in French?\n\n1. To implement\n2. To comply with\n3. To postpone\n4. To schedule",
      back: "1. To implement = Mettre en œuvre / Déployer (ex: implement a new security policy)\n2. To comply with = Se conformer à / Respecter une norme ou loi\n3. To postpone = Reporter / Décaler à plus tard\n4. To schedule = Planifier / Programmer (un rendez-vous, une maintenance)."
    },
    {
      id: "toeic_fc_3",
      category: "office",
      title: "Office Expressions #3",
      front: "Translate these high-frequency TOEIC business phrases into French:\n\n1. In advance\n2. On behalf of\n3. Ahead of schedule\n4. At your earliest convenience",
      back: "1. In advance = À l'avance / Par anticipation\n2. On behalf of = De la part de / Au nom de\n3. Ahead of schedule = En avance sur le calendrier prévu\n4. At your earliest convenience = Dès que possible / À votre meilleure convenance."
    }
  ],

  quizzes: [
    {
      id: "toeic_q1",
      category: "grammar",
      question: "The IT department announced that the scheduled server maintenance has been ________ until next Tuesday due to a technical conflict.",
      options: [
        "postponed",
        "postponing",
        "postpones",
        "postpone"
      ],
      correctAnswer: 0,
      explanation: "Règle de la voix passive : 'has been + participe passé (V-ed)'. La forme correcte est 'postponed' (a été reportée). On élimine les formes actives (postpone, postponing, postpones)."
    },
    {
      id: "toeic_q2",
      category: "it_business",
      question: "All network technicians are required to wear security badges ________ entering the data center facility.",
      options: [
        "prior to",
        "ahead",
        "until",
        "except"
      ],
      correctAnswer: 0,
      explanation: "'Prior to' est une préposition formelle très fréquente au TOEIC qui signifie 'avant' (synonyme de 'before'). Elle est suivie d'un gérondif (-ing) ou d'un nom : 'prior to entering'."
    },
    {
      id: "toeic_q3",
      category: "grammar",
      question: "Ms. Foster provided a ________ detailed analysis of the company's cybersecurity vulnerabilities during yesterday's meeting.",
      options: [
        "remark",
        "remarkable",
        "remarkably",
        "remarking"
      ],
      correctAnswer: 2,
      explanation: "Règle de syntaxe : Pour modifier un adjectif ('detailed'), on doit utiliser un ADVERBE (se terminant par -ly). 'Remarkably detailed' = 'remarquablement détaillée'."
    },
    {
      id: "toeic_q4",
      category: "logistics",
      question: "If our team ________ the cybersecurity audit by Friday, the management will approve the budget for new firewalls.",
      options: [
        "completes",
        "will complete",
        "completed",
        "had completed"
      ],
      correctAnswer: 0,
      explanation: "Règle du First Conditional (conditionnel réel) : 'If + Présent simple, Future simple (will + base verbale)'. Avec 'our team' (sujet 3e personne du singulier), on accorde au présent : 'completes'."
    }
  ]
};
