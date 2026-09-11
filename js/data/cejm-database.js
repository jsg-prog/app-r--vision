/* ==========================================================================
   CEJM (Culture Économique, Juridique et Managériale) DATABASE
   Spécialement conçu pour les BTS SIO (Explications simples, concrètes, orientées Tech)
   ========================================================================== */

const CEJM_DATABASE = {
  themes: [
    { id: "all", name: "Tous les thèmes CEJM", icon: "📚" },
    { id: "th1", name: "Thème 1 : L'entreprise et son environnement", icon: "🏢" },
    { id: "th2", name: "Thème 2 : La régulation économique", icon: "⚖️" },
    { id: "th3", name: "Thème 3 : L'organisation de l'activité", icon: "⚙️" },
    { id: "th4", name: "Thème 4 : L'impact du numérique & RGPD", icon: "💻" },
    { id: "th5", name: "Thème 5 : Les mutations du travail", icon: "👥" },
    { id: "th6", name: "Thème 6 : Les choix stratégiques (SWOT/Porter)", icon: "🎯" }
  ],

  methodology: {
    syllogisme: {
      title: "La Méthode d'Or du Syllogisme Juridique",
      subtitle: "La structure obligatoire pour décrocher tous les points aux questions de droit en CEJM",
      steps: [
        {
          num: 1,
          name: "1. La Majeure (La règle de droit)",
          description: "Énoncer la loi ou le principe général sans parler de l'entreprise du sujet. On commence par : 'En vertu de l'article...', 'Selon le Code civil...', 'En principe...'",
          example: "Exemple : 'En vertu de l'article 1231-1 du Code civil, toute inexécution contractuelle engage la responsabilité contractuelle du débiteur si elle cause un dommage.'"
        },
        {
          num: 2,
          name: "2. La Mineure (Les faits de l'espèce)",
          description: "Appliquer la règle à la situation concrète du sujet. On résume les faits précis en reliant le comportement aux conditions de la loi. On commence par : 'En l'espèce...', 'Or, dans le cas présent...'",
          example: "Exemple : 'En l'espèce, la société CloudSecure n'a pas livré le serveur de sauvegarde à la date convenue dans le contrat signé avec la clinique.'"
        },
        {
          num: 3,
          name: "3. La Conclusion (La solution juridique)",
          description: "Donner la réponse claire au problème posé. On commence par : 'Par conséquent...', 'Dès lors...', 'La société X peut donc demander...'",
          example: "Exemple : 'Par conséquent, la clinique est en droit d'exiger des dommages et intérêts pour réparer le préjudice causé par le retard.'"
        }
      ]
    },
    tools: [
      {
        name: "Matrice SWOT",
        purpose: "Diagnostic stratégique interne & externe",
        explanation: "• Forces (Interne) : Ce que l'entreprise maîtrise (ex: brevets, équipe certifiée Cisco).\n• Faiblesses (Interne) : Ce qui lui manque (ex: manque de budget, logiciels obsolètes).\n• Opportunités (Externe) : Tendances du marché favorables (ex: hausse de la demande en cybersécurité).\n• Menaces (Externe) : Dangers extérieurs (ex: nouvelle réglementation contraignante, concurrent agressif)."
      },
      {
        name: "Les 5 Forces de Michael Porter",
        purpose: "Évaluer l'intensité concurrentielle d'un secteur",
        explanation: "1. Rivalité entre concurrents existants (guerre des prix).\n2. Pouvoir de négociation des clients (s'ils ont le choix, ils négocient fort).\n3. Pouvoir de négociation des fournisseurs (ex: monopole sur les puces électroniques).\n4. Menace des nouveaux entrants (facilité d'entrer sur le marché).\n5. Menace des produits de substitution (ex: le Cloud qui remplace les serveurs physiques sur site)."
      },
      {
        name: "Modèle PESTEL",
        purpose: "Analyser l'environnement global (Macro-environnement)",
        explanation: "P = Politique (stabilité de l'État), E = Économique (inflation, taux d'intérêt), S = Socioculturel (modes, télétravail), T = Technologique (IA, 5G), E = Écologique (Green IT, sobriété énergétique), L = Légal (RGPD, droit du travail)."
      }
    ]
  },

  flashcards: [
    {
      id: "cejm_fc_1",
      themeId: "th4",
      title: "Les grands principes du RGPD (Données personnelles)",
      front: "Quels sont les 3 principes cardinaux du RGPD que tout informaticien/admin SISR doit appliquer ?",
      back: "1. Licéité, loyauté et transparence : Recueillir le consentement explicite et informer clairement l'utilisateur.\n2. Minimisation des données : Ne collecter STRICTEMENT que les données nécessaires au service (Privacy by Design).\n3. Sécurité et confidentialité : Mettre en place des mesures techniques (chiffrement, mots de passe forts, sauvegardes) pour protéger les données contre le vol et les fuites (obligation de notification à la CNIL sous 72h en cas de violation)."
    },
    {
      id: "cejm_fc_2",
      themeId: "th1",
      title: "Asymétrie d'information & Aléa moral (Akerlof / Stiglitz)",
      front: "Qu'est-ce que l'aléa moral et la sélection adverse en économie ?",
      back: "• Sélection adverse (avant le contrat) : Une partie cache des informations défavorables (ex: vente d'une voiture d'occasion avec défaut caché, marché des 'lemons' d'Akerlof).\n• Aléa moral (après le contrat) : Une partie change de comportement et prend des risques inconsidérés car elle se sait assurée ou protégée (ex: un utilisateur qui clique sur n'importe quel mail douteux car le service informatique s'occupe de tout)."
    },
    {
      id: "cejm_fc_3",
      themeId: "th3",
      title: "Management Stratégique vs Management Opérationnel",
      front: "Quelle est la différence clé entre décision stratégique et décision opérationnelle ?",
      back: "• Décision Stratégique : Prise par la Direction Générale sur le LONG TERME (3 à 5 ans), engage de lourds investissements et est difficilement réversible (ex: basculer toute l'infrastructure d'entreprise sur AWS).\n• Décision Opérationnelle : Prise par les managers de terrain sur le COURT TERME, gère le quotidien et est facilement réversible (ex: commander 5 switchs pour un nouveau bureau, planifier les astreintes du week-end)."
    },
    {
      id: "cejm_fc_4",
      themeId: "th6",
      title: "Les 3 Stratégies Génériques de Michael Porter",
      front: "Quelles sont les 3 options stratégiques fondamentales d'une entreprise selon Porter ?",
      back: "1. Domination par les coûts : Produire au coût le plus bas possible pour proposer les prix les plus bas du marché (ex: Free à ses débuts, Dacia).\n2. Différenciation : Proposer une offre perçue comme unique et de haute valeur par le client (qualité, design, sécurité) pour vendre plus cher (ex: Apple, Cisco).\n3. Focalisation (stratégie de niche) : Se concentrer sur un petit segment de marché très spécifique (ex: solutions de chiffrement militaire souveraines)."
    }
  ],

  quizzes: [
    {
      id: "cejm_q1",
      themeId: "th4",
      question: "En cas de violation grave de données personnelles (ex: ransomware qui exfiltre la base clients), dans quel délai maximal l'entreprise doit-elle notifier la CNIL selon le RGPD ?",
      options: [
        "24 heures",
        "72 heures",
        "15 jours",
        "1 mois"
      ],
      correctAnswer: 1,
      explanation: "L'article 33 du RGPD impose de notifier l'autorité de contrôle compétente (la CNIL en France) au plus tard 72 heures après en avoir pris connaissance lorsque la violation présente un risque pour les droits et libertés des personnes."
    },
    {
      id: "cejm_q2",
      themeId: "th6",
      question: "Dans le cadre d'un diagnostic SWOT pour une PME de services informatiques, où classe-t-on 'L'arrivée sur le marché d'une nouvelle IA open-source concurrente' ?",
      options: [
        "Une Force (Strength)",
        "Une Faiblesse (Weakness)",
        "Une Opportunité (Opportunity)",
        "Une Menace (Threat)"
      ],
      correctAnswer: 3,
      explanation: "L'arrivée d'un concurrent extérieur provient de l'environnement externe et nuit potentiellement à l'activité de l'entreprise : il s'agit typiquement d'une Menace (Threat)."
    },
    {
      id: "cejm_q3",
      themeId: "th1",
      question: "Quelle notion juridique désigne la situation où une entreprise en position dominante sur un marché impose des conditions abusives à ses partenaires ou évince ses concurrents ?",
      options: [
        "La concurrence parfaite",
        "L'abus de position dominante",
        "L'aléa moral",
        "La responsabilité délictuelle"
      ],
      correctAnswer: 1,
      explanation: "Être en position dominante n'est pas illégal en soi, mais l'exploiter de façon déloyale (prix prédateurs, ventes liées forcées) constitue un 'abus de position dominante' sévèrement sanctionné par l'Autorité de la Concurrence et l'UE (art. 102 TFUE)."
    },
    {
      id: "cejm_q4",
      themeId: "th3",
      question: "Dans une organisation de travail, quelle est la caractéristique principale d'une structure hiérarchique pyramidale traditionnelle (modèle de Fayol) ?",
      options: [
        "Chaque salarié dépend de plusieurs chefs spécialisés en même temps",
        "Chaque subordonné ne reçoit des ordres que d'un seul et unique supérieur (Unité de commandement)",
        "Absence totale de direction générale et fonctionnement horizontal",
        "Travail exclusivement en équipes projets éphémères"
      ],
      correctAnswer: 1,
      explanation: "Le principe fondamental de la structure hiérarchique d'Henri Fayol est l'Unité de commandement : un employé ne doit recevoir des ordres que d'un seul chef direct pour éviter les ordres contradictoires."
    }
  ]
};
