/* ==========================================================================
   CEJM (Culture Économique, Juridique et Managériale) DATABASE
   Conforme au Référentiel National BTS & Manuel Foucher Tome Unique (1re & 2e années)
   Adapté pour Julia (BTS SIO SISR) : Définitions courtes, bullet points, exemples Tech/IT
   Banque d'entraînement : Au moins 20 questions par thème (120 Q total) + Définitions complètes
   ========================================================================== */

const CEJM_DATABASE = {
  textbook: "CEJM Tome Unique 1ère et 2e années - Éditions Foucher (Programme National BTS)",
  
  themes: [
    { id: "all", name: "Tous les thèmes CEJM", icon: "📚" },
    { id: "th1", name: "Thème 1 : L'intégration de l'entreprise dans son environnement", icon: "🏢" },
    { id: "th2", name: "Thème 2 : La régulation d'un marché & politiques économiques", icon: "⚖️" },
    { id: "th3", name: "Thème 3 : L'organisation de l'activité de l'entreprise", icon: "⚙️" },
    { id: "th4", name: "Thème 4 : L'impact du numérique & RGPD", icon: "💻" },
    { id: "th5", name: "Thème 5 : Les mutations du travail & droit social", icon: "👥" },
    { id: "th6", name: "Thème 6 : Les choix stratégiques de l'entreprise", icon: "🎯" }
  ],

  methodology: {
    syllogisme: {
      title: "La Méthode d'Or du Syllogisme Juridique",
      subtitle: "La structure obligatoire en 3 étapes pour décrocher le maximum de points aux questions de droit en CEJM",
      steps: [
        {
          num: 1,
          name: "1. La Majeure (La règle de droit abstraite)",
          description: "Énoncer la règle juridique générale (loi, article de code, jurisprudence) sans JAMAIS citer les noms de l'entreprise ou des personnages du sujet.",
          formulation: "« En vertu de l'article... », « Selon le Code civil... », « En principe, tout contrat... »",
          example: "Exemple : « En vertu de l'article 1231-1 du Code civil, toute inexécution ou retard dans l'exécution d'une obligation contractuelle engage la responsabilité contractuelle du débiteur et l'oblige à réparer le dommage causé. »"
        },
        {
          num: 2,
          name: "2. La Mineure (L'application aux faits de l'espèce)",
          description: "Reprendre les faits précis du cas d'examen et vérifier si les conditions exigées par la règle de droit (la Majeure) sont bien réunies dans la situation.",
          formulation: "« En l'espèce... », « Or, dans le cas présent... », « Il apparaît que la société X... »",
          example: "Exemple : « En l'espèce, la société d'infogérance CloudSecure s'était engagée par contrat à restaurer les sauvegardes du serveur en moins de 4 heures. Or, le serveur a été indisponible pendant 48 heures, entraînant l'arrêt de l'usine cliente. »"
        },
        {
          num: 3,
          name: "3. La Conclusion (La solution juridique au problème)",
          description: "Répondre explicitement à la question posée dans le sujet en tirant la conséquence logique du rapprochement entre la règle et les faits.",
          formulation: "« Par conséquent... », « Dès lors... », « L'entreprise peut donc valablement exiger... »",
          example: "Exemple : « Par conséquent, l'usine cliente est juridiquement fondée à engager la responsabilité contractuelle de CloudSecure et à demander l'octroi de dommages et intérêts pour compenser sa perte d'exploitation. »"
        }
      ]
    },
    tools: [
      {
        name: "Matrice SWOT",
        author: "Albert Humphrey (Stanford)",
        purpose: "Diagnostic stratégique interne & externe global",
        explanation: "• Forces (Interne) : Atouts maîtrisés (ex: brevets logiciels, techniciens certifiés Cisco/Linux).\n• Faiblesses (Interne) : Lacunes internes (ex: manque de trésorerie, dette technique, SI obsolète).\n• Opportunités (Externe) : Facteurs favorables du marché (ex: hausse de la demande en cybersécurité, aide France 2030).\n• Menaces (Externe) : Risques extérieurs (ex: nouvelle réglementation contraignante, cyberattaques, pénurie de puces)."
      },
      {
        name: "Les 5 Forces (+ 1) de Michael Porter",
        author: "Michael Porter (Harvard)",
        purpose: "Évaluer l'intensité concurrentielle et l'attractivité d'un secteur",
        explanation: "1. Rivalité entre concurrents du secteur (guerre des prix, parts de marché).\n2. Pouvoir de négociation des clients (capacité à négocier les tarifs).\n3. Pouvoir de négociation des fournisseurs (ex: monopole Nvidia sur les puces IA).\n4. Menace des nouveaux entrants (barrières à l'entrée : investissements, brevets).\n5. Menace des produits de substitution (ex: Cloud remplaçant les serveurs sur site).\n6. Rôle des pouvoirs publics / Régulateur (normes imposées par l'État/UE)."
      },
      {
        name: "Modèle PESTEL",
        author: "Analyse macro-environnementale",
        purpose: "Identifier les 6 influences globales externes qui pèsent sur l'entreprise",
        explanation: "• P - Politique : Stabilité gouvernementale, régimes fiscaux, tensions géopolitiques.\n• E - Économique : Inflation, taux directeurs de la BCE, croissance du PIB.\n• S - Socioculturel : Habitudes de consommation, attrait pour le télétravail.\n• T - Technologique : IA générative, réseaux 5G/fibre, informatique quantique.\n• E - Écologique : Sobriété énergétique, normes Green IT, recyclage DEEE.\n• L - Légal : RGPD, droit du travail, directives de cybersécurité NIS 2."
      },
      {
        name: "La Chaîne de Valeur de Porter",
        author: "Michael Porter",
        purpose: "Identifier les activités créatrices de valeur et les sources d'avantage concurrentiel",
        explanation: "• Activités principales : Logistique entrante, Production/Développement, Logistique sortante, Commercialisation & Vente, Services après-vente (support/SLA).\n• Activités de soutien : Infrastructure de la firme, Gestion des RH, Recherche & Développement (R&D), Achats/Approvisionnements."
      }
    ]
  },

  /* ==========================================================================
     RUBRIQUE DÉFINITIONS DU COURS PAR THÈME (MANUEL FOUCHER TOME UNIQUE)
     6 définitions majeures par thème = 36 notions exhaustives
     ========================================================================== */
  notions: [
    /* --- THÈME 1 : ENVIRONNEMENT & INTÉGRATION --- */
    {
      id: "notion_th1_1",
      themeId: "th1",
      term: "Valeur Ajoutée (VA)",
      source: "Comptabilité nationale & Économie d'entreprise",
      definition: "Richesse réelle créée par l'entreprise lors de son processus de production.\n• **Formule :** `Valeur Ajoutée = Chiffre d'Affaires (CA) - Consommations Intermédiaires (CI)`.\n• Les **Consommations Intermédiaires (CI)** représentent la valeur des biens et services détruits ou transformés au cours de la production (ex: électricité, licences logicielles, hébergement).\n• La VA est répartie entre 5 acteurs : Salariés (salaires), État (impôts), Banques (intérêts), Associés (dividendes) et Entreprise (autofinancement).",
      example: "Une ESN facture 150 000 € de prestations (CA) et consomme 50 000 € de serveurs Cloud loués et fournitures (CI). Sa Valeur Ajoutée est de 100 000 €."
    },
    {
      id: "notion_th1_2",
      themeId: "th1",
      term: "Conditions de Validité du Contrat",
      source: "Article 1128 du Code civil",
      definition: "Pour être juridiquement valable, un contrat doit satisfaire **3 conditions cumulatives** :\n1. **Le consentement libre et éclairé** des parties (sans vice : erreur, dol ou violence).\n2. **La capacité juridique** de contracter (personne majeure capable ou représentant légal).\n3. **Un contenu licite et certain** (l'objet doit exister, être déterminé ou déterminable, et ne pas déroger à l'ordre public).\n• Sanction si l'une des conditions manque : la **nullité** du contrat.",
      example: "Un contrat de maintenance réseau signé suite à des mensonges délibérés sur les débits réels de la fibre (dol) est frappé de nullité relative."
    },
    {
      id: "notion_th1_3",
      themeId: "th1",
      term: "Inexécution Contractuelle & Sanctions",
      source: "Article 1217 du Code civil",
      definition: "Lorsqu'une partie n'exécute pas son obligation, le créancier dispose de plusieurs remèdes :\n• **Exception d'inexécution :** refuser d'exécuter sa propre prestation tant que l'autre n'agit pas.\n• **Exécution forcée en nature :** contraindre légalement l'autre à accomplir la prestation.\n• **Réduction du prix :** en cas d'exécution imparfaite.\n• **Résolution / Résiliation :** anéantissement du contrat.\n• **Dommages et intérêts :** réparation du préjudice subi.\n• **Force majeure :** événement imprévisible, irrésistible et extérieur exonérant le débiteur.",
      example: "Un client refuse de payer sa redevance mensuelle tant que son prestataire n'a pas réparé l'accès au serveur (exception d'inexécution)."
    },
    {
      id: "notion_th1_4",
      themeId: "th1",
      term: "Responsabilité Contractuelle vs Extracontractuelle",
      source: "Articles 1231-1 et 1240 du Code civil",
      definition: "Deux régimes juridiques de réparation d'un dommage :\n• **Responsabilité Contractuelle (Art. 1231-1) :** le dommage résulte de l'inexécution ou du retard dans l'exécution d'un contrat valide unissant les parties.\n• **Responsabilité Extracontractuelle / Délictuelle (Art. 1240) :** le dommage est causé à un tiers en dehors de tout lien contractuel.\n• **3 conditions obligatoires :** une Faute (fait générateur), un Préjudice (certain, direct, légitime) et un Lien de causalité direct.",
      example: "Un technicien réseau fait tomber accidentellement un switch sur le pied d'un visiteur dans le hall : responsabilité extracontractuelle de l'entreprise."
    },
    {
      id: "notion_th1_5",
      themeId: "th1",
      term: "Asymétrie d'Information : Sélection Adverse & Aléa Moral",
      source: "Théorie économique (George Akerlof & Joseph Stiglitz)",
      definition: "Situation où une partie à la transaction détient des informations que l'autre ignore :\n• **Sélection adverse (Akerlof - ex-ante) :** l'acheteur ignore la qualité réelle du produit avant d'acheter, risquant de ne retenir que des mauvais produits ('market for lemons').\n• **Aléa moral (Stiglitz - ex-post) :** une partie prend des risques démesurés après la signature car elle sait que les conséquences négatives seront payées par l'autre ou par l'assurance.",
      example: "Un salarié clique sur des liens inconnus sans prudence car il sait que le service informatique restaure automatiquement les sauvegardes en cas d'incident."
    },
    {
      id: "notion_th1_6",
      themeId: "th1",
      term: "Externalités & Biens Publics",
      source: "Arthur Pigou & Paul Samuelson",
      definition: "Défaillances du marché économique pur :\n• **Externalité :** impact positif ou négatif de l'activité d'une entreprise sur un tiers sans contrepartie financière (ex négatif : émission de carbone des datacenters ; ex positif : raccordement fibre désenclavant une zone rurale).\n• **Bien public (ou collectif) :** bien répondant aux principes de **non-rivalité** (la consommation par l'un ne réduit pas celle des autres) et de **non-exclusion** (impossible d'empêcher quelqu'un d'en profiter, ex: signal GPS, éclairage public).",
      example: "Le réseau de satellites GPS est un bien public mondial gratuit utilisé par tous les systèmes de géolocalisation et de routage."
    },

    /* --- THÈME 2 : RÉGULATION ÉCONOMIQUE & POLITIQUES --- */
    {
      id: "notion_th2_1",
      themeId: "th2",
      term: "Finalités de l'Entreprise & RSE",
      source: "Peter Drucker, Milton Friedman & R. Edward Freeman (Loi PACTE 2019)",
      definition: "L'entreprise poursuit plusieurs finalités interdépendantes :\n• **Finalité économique :** générer du profit pour assurer sa pérennité et rémunérer le capital.\n• **Finalité sociale :** créer des emplois, former et favoriser l'épanouissement des salariés.\n• **RSE (Responsabilité Sociétale des Entreprises) :** intégration volontaire des enjeux sociaux, éthiques et écologiques.\n• **Parties prenantes (Freeman) :** acteurs internes (salariés, dirigeants) et externes (clients, fournisseurs, banques, ONG, État).",
      example: "Une entreprise d'hébergement web qui s'engage dans le Green IT en alimentant ses datacenters à 100% avec de l'énergie solaire."
    },
    {
      id: "notion_th2_2",
      themeId: "th2",
      term: "Politiques Économiques Conjoncturelles vs Structurelles",
      source: "Macroéconomie & Carré magique de Nicolas Kaldor",
      definition: "Les deux leviers de l'intervention publique de l'État :\n• **Politique conjoncturelle (court terme) :** vise à réguler l'économie face aux chocs selon le carré magique (croissance, plein-emploi, stabilité des prix, équilibre extérieur). Elle utilise la politique **budgétaire** (impôts, dépenses publiques) et la politique **monétaire** (taux directeurs de la BCE).\n• **Politique structurelle (long terme) :** transforme les structures fondamentales de l'économie (recherche, infrastructures numériques, souveraineté industrielle).",
      example: "La Banque Centrale Européenne augmentant ses taux directeurs pour freiner l'inflation est une mesure de politique monétaire conjoncturelle."
    },
    {
      id: "notion_th2_3",
      themeId: "th2",
      term: "Régulation de la Concurrence & Pratiques Anticoncurrentielles",
      source: "Autorité de la Concurrence & Articles 101 et 102 du TFUE",
      definition: "Règles protégeant le libre jeu du marché et les consommateurs contre 3 dérives majeures :\n1. **Entente illicite (cartel) :** accord secret entre concurrents pour fixer les prix ou se répartir des clients.\n2. **Abus de position dominante :** comportement déloyal d'une entreprise en position de force pour éliminer ses rivaux (ventes liées, prix prédateurs).\n3. **Contrôle des concentrations :** validation préalable des fusions-acquisitions pour éviter les monopoles.",
      example: "L'obligation pour Microsoft de proposer un écran de choix de navigateurs web en Europe suite à une condamnation pour abus de position dominante."
    },
    {
      id: "notion_th2_4",
      themeId: "th2",
      term: "Autorités Administratives Indépendantes (CNIL, ARCEP, ANSSI)",
      source: "Droit public économique & Sécurité numérique",
      definition: "Organismes publics dotés d'un pouvoir réglementaire, de contrôle et de sanction :\n• **CNIL :** protège la vie privée et les données à caractère personnel (contrôle du RGPD, amendes jusqu'à 20M€ ou 4% du CA).\n• **ARCEP :** régulateur des télécoms, gère les fréquences 5G et veille à la neutralité du net.\n• **ANSSI :** autorité nationale de défense des systèmes d'information, pilote la transposition de la directive européenne NIS 2.",
      example: "L'ANSSI délivre le visa de sécurité SecNumCloud garantissant qu'un hébergeur Cloud respecte les plus hauts critères de souveraineté et cybersécurité."
    },
    {
      id: "notion_th2_5",
      themeId: "th2",
      term: "Loi PACTE & Entreprise à Mission",
      source: "Loi PACTE du 22 mai 2019 (Code de commerce)",
      definition: "La loi relative à la croissance et la transformation des entreprises renforce la dimension sociétale :\n• **Raison d'être :** formulation dans les statuts des principes que l'entreprise se donne en contribuant à la société.\n• **Société à mission :** statut juridique optionnel dans lequel l'entreprise inscrit des objectifs sociaux et environnementaux précis, contrôlés par un organisme tiers indépendant.",
      example: "Une entreprise informatique devient 'société à mission' avec pour objectif statutaire de former gratuitement 10 000 jeunes défavorisés au code chaque année."
    },
    {
      id: "notion_th2_6",
      themeId: "th2",
      term: "Directive Européenne NIS 2",
      source: "Directive (UE) 2022/2555 relative à la cybersécurité",
      definition: "Législation européenne renforçant les exigences de cybersécurité pour les organisations :\n• Élargit le périmètre des Opérateurs de Services Essentiels (OSE) aux **Entités Essentielles (EE)** et **Entités Importantes (EI)** (santé, énergie, transports, Cloud, infogérance IT).\n• Impose des obligations strictes : gouvernance de la sécurité, gestion des risques, sécurisation de la chaîne d'approvisionnement, et **notification des incidents majeurs sous 24h à l'ANSSI**.",
      example: "Une ESN gérant l'infrastructure réseau d'une chaîne de cliniques est soumise aux obligations de NIS 2 et doit auditer ses fournisseurs de routeurs."
    },

    /* --- THÈME 3 : ORGANISATION DE L'ACTIVITÉ DE L'ENTREPRISE --- */
    {
      id: "notion_th3_1",
      themeId: "th3",
      term: "Les Structures Organisationnelles (Fayol, Divisionnelle, Matricielle)",
      source: "Henri Fayol & Théorie des organisations",
      definition: "Modes de répartition des tâches, des pouvoirs et des responsabilités :\n• **Structure hiérarchique (Fayol) :** principe strict de l'**unité de commandement** (un seul chef par salarié). Claire mais rigide.\n• **Structure divisionnelle :** organisation découpée par produits, clients ou marchés géographiques autonomes.\n• **Structure matricielle :** double dépendance croisant des responsables fonctionnels (technique, finance) et des chefs de projets. Souple mais propice aux tensions.",
      example: "Dans une société de cybersécurité, un analyste SOC rapporte à la fois au Directeur Technique et au Chef de projet du client Banque (structure matricielle)."
    },
    {
      id: "notion_th3_2",
      themeId: "th3",
      term: "Les 5 Composantes de Base de l'Organisation (Mintzberg)",
      source: "Henry Mintzberg (Structure et dynamique des organisations)",
      definition: "Mintzberg schématise l'organisation en 5 parties fondamentales :\n1. **Sommet stratégique :** dirigeants définissant la stratégie globale.\n2. **Ligne hiérarchique :** managers intermédiaires transmettant les directives.\n3. **Centre opérationnel :** exécutants produisant directement le bien ou service (techniciens, développeurs).\n4. **Technostructure :** experts standardisant le travail des autres (ingénieurs méthodes, qualité, architectes SI).\n5. **Support logistique :** services internes assurant le soutien indirect (paie, service juridique, entretien).",
      example: "L'architecte réseau qui conçoit les règles de configuration Cisco sans intervenir sur le terrain fait partie de la technostructure."
    },
    {
      id: "notion_th3_3",
      themeId: "th3",
      term: "Les 6 Mécanismes de Coordination de Mintzberg",
      source: "Henry Mintzberg",
      definition: "Moyens par lesquels le travail divisé est coordonné au sein de l'entreprise :\n1. **Ajustement mutuel :** communication informelle directe entre pairs.\n2. **Supervision directe :** ordres donnés par un supérieur hiérarchique.\n3. **Standardisation des procédés :** fiches de procédures opératoires et guides techniques.\n4. **Standardisation des résultats :** objectifs chiffrés assignés (KPI, temps de résolution).\n5. **Standardisation des qualifications :** compétences garanties par les diplômes et certifications.\n6. **Standardisation des normes :** culture et valeurs communes partagées.",
      example: "Exiger qu'un ingénieur réseau détienne la certification Cisco CCNP avant d'intervenir en production illustre la standardisation des qualifications."
    },
    {
      id: "notion_th3_4",
      themeId: "th3",
      term: "Les 4 Styles de Direction de Likert",
      source: "Rensis Likert (Psychologie managériale)",
      definition: "Typologie des comportements managériaux de commandement :\n1. **Autoritaire exploiteur :** management par la peur et la sanction, communication descendante pure.\n2. **Paternaliste :** autorité bienveillante, motivation par les primes, mais centralisation forte.\n3. **Consultatif :** les employés sont consultés avant la décision finale du chef.\n4. **Participatif :** prise de décision collective, travail en équipe autonome, confiance absolue (méthodes Agiles/DevOps).",
      example: "Une équipe d'administrateurs systèmes travaillant en stand-up meeting quotidien où chacun vote les priorités applique le style participatif."
    },
    {
      id: "notion_th3_5",
      themeId: "th3",
      term: "Management Stratégique vs Management Opérationnel",
      source: "Igor Ansoff",
      definition: "Distinction fondamentale entre les deux horizons de décision managériale :\n• **Management Stratégique :** exercé par la Direction Générale sur le **long terme (3-5 ans)**. Engage des capitaux importants, non réversible facilement (ex: basculer toute l'infrastructure sur AWS).\n• **Management Opérationnel :** exercé par les managers de terrain sur le **court terme**. Optimise les ressources courantes, décisions réversibles (ex: planning des astreintes réseau).",
      example: "Acheter 10 nouveaux câbles Ethernet RJ45 relève du management opérationnel ; fusionner avec un concurrent Cloud relève du management stratégique."
    },
    {
      id: "notion_th3_6",
      themeId: "th3",
      term: "Les Méthodes Agiles & Flexibilité Organisationnelle",
      source: "Manifeste Agile (2001) & Management de projet IT",
      definition: "Approche de gestion de projet privilégiant l'adaptabilité, la collaboration continue et les livraisons rapides :\n• S'oppose au modèle rigide en cascade (Cycle en V).\n• Repose sur des itérations courtes (Sprints), des réunions quotidiennes (Daily Scrum) et un dialogue permanent avec le client (Product Owner).\n• Favorise l'autonomie et l'auto-organisation des équipes pluridisciplinaires.",
      example: "Dans un projet de refonte réseau, l'équipe livre d'abord le Wi-Fi invités en 2 semaines avant de s'attaquer au cœur de réseau le mois suivant."
    },

    /* --- THÈME 4 : IMPACT DU NUMÉRIQUE & RGPD --- */
    {
      id: "notion_th4_1",
      themeId: "th4",
      term: "Système d'Information (SI) & ERP/PGI",
      source: "Management des Systèmes d'Information",
      definition: "• **Système d'Information (SI) :** ensemble organisé de ressources humaines, matérielles et logicielles permettant de **collecter, stocker, traiter et diffuser l'information**.\n• **PGI / ERP (Progiciel de Gestion Intégré) :** progiciel articulé autour d'une **base de données relationnelle unique** permettant de piloter l'ensemble des fonctions de l'entreprise (comptabilité, RH, stocks, achats, ventes).",
      example: "Dès qu'un client passe commande sur le site, l'ERP décrémente automatiquement le stock, édite le bon de livraison et comptabilise la facture."
    },
    {
      id: "notion_th4_2",
      themeId: "th4",
      term: "Économie de Plateforme & Modèles d'Affaires du Numérique",
      source: "Jean Tirole & Économie numérique",
      definition: "• **Économie de plateforme :** modèle reposant sur une plateforme intermédiaire mettant en relation offreurs et demandeurs sur un marché biface avec de puissants **effets de réseau** directs et indirects.\n• **Modèle SaaS (Software as a Service) :** distribution d'applications hébergées dans le Cloud accessibles via un navigateur et facturées par abonnement mensuel/annuel.\n• **Modèle Freemium :** version de base gratuite attirant une large audience, combinée à des options Premium payantes.",
      example: "Slack et Microsoft 365 appliquent le modèle SaaS par abonnement, tandis que Spotify ou GitHub exploitent le Freemium."
    },
    {
      id: "notion_th4_3",
      themeId: "th4",
      term: "Principes Fondamentaux du RGPD (Règlement UE 2016/679)",
      source: "Règlement Général sur la Protection des Données",
      definition: "Cadre européen obligatoire pour protéger les données à caractère personnel :\n• **Minimisation des données :** ne collecter STRICTEMENT que ce qui est adéquat et nécessaire au service.\n• **Licéité et consentement :** accord explicite, libre et éclairé de la personne.\n• **Notification de violation sous 72h :** obligation légale d'informer la CNIL en cas de fuite de données présentant un risque.\n• **DPO (Délégué à la Protection des Données) :** chef d'orchestre de la conformité au sein de l'organisation.\n• **Privacy by Design / Default :** sécurité et confidentialité intégrées dès la conception technique.",
      example: "Une entreprise subissant un rançongiciel avec vol de base clients doit notifier la CNIL dans les 72h avec inventaire des données exposées."
    },
    {
      id: "notion_th4_4",
      themeId: "th4",
      term: "Droits des Personnes selon le RGPD",
      source: "Articles 15 à 21 du RGPD",
      definition: "Droits conférés à chaque citoyen européen sur ses informations personnelles :\n• **Droit d'accès :** savoir si des données sont détenues et en obtenir une copie.\n• **Droit de rectification :** corriger des informations erronées ou obsolètes.\n• **Droit à l'effacement (« Droit à l'oubli ») :** exiger la suppression définitive de ses données.\n• **Droit à la portabilité :** récupérer ses données dans un format informatique standard pour les transférer à un autre prestataire.\n• **Droit d'opposition :** refuser l'utilisation de ses données pour de la prospection commerciale.",
      example: "Un internaute demande à un site e-commerce d'exporter l'intégralité de son historique d'achats sous forme d'un fichier CSV (droit à la portabilité)."
    },
    {
      id: "notion_th4_5",
      themeId: "th4",
      term: "Droit d'Auteur sur les Logiciels & Droits du Salarié",
      source: "Article L. 113-9 du Code de la propriété intellectuelle (CPI)",
      definition: "Régime juridique protégeant les créations informatiques :\n• Le logiciel est protégé par le **droit d'auteur** (code source et binaire), dès sa création originale, sans obligation de dépôt.\n• **Exception pour les salariés (Art. L. 113-9) :** sauf clause statutaire contraire, les droits patrimoniaux sur les logiciels créés par un salarié dans l'exercice de ses fonctions sont dévolus **automatiquement à l'employeur**.",
      example: "Un développeur salarié crée un outil d'administration réseau sur ses heures de bureau : c'est son employeur qui détient le droit exclusif de le vendre."
    },
    {
      id: "notion_th4_6",
      themeId: "th4",
      term: "Infractions aux STAD (Code Pénal & Loi Godfrain)",
      source: "Articles 323-1 à 323-3-1 du Code pénal",
      definition: "Répression pénale des délits informatiques portant atteinte aux Systèmes de Traitement Automatisé de Données :\n• **Accès ou maintien frauduleux (Art. 323-1) :** s'introduire ou rester dans un serveur sans autorisation (jusqu'à 3 ans de prison et 100 000 € d'amende).\n• **Entrave au fonctionnement (Art. 323-2) :** bloquer un système (attaques DDoS).\n• **Altération de données (Art. 323-3) :** modifier ou supprimer frauduleusement des données.\n• **Fourniture d'outils d'attaque (Art. 323-3-1) :** programmer ou détenir des chevaux de Troie ou logiciels de piratage.",
      example: "Lancer une attaque par déni de service distribué (DDoS) pour saturer le site d'un concurrent constitue une entrave à un STAD lourdement punie."
    },

    /* --- THÈME 5 : MUTATIONS DU TRAVAIL & DROIT SOCIAL --- */
    {
      id: "notion_th5_1",
      themeId: "th5",
      term: "Contrat de Travail & Lien de Subordination",
      source: "Cour de cassation (Arrêt Société générale 1996) & Code du travail",
      definition: "Le contrat de travail est constitué de **3 éléments cumulatifs indispensables** :\n1. Une **prestation de travail** manuelle ou intellectuelle.\n2. Une **rémunération** en contrepartie.\n3. Un **lien de subordination juridique** (critère déterminant) : l'employeur détient le pouvoir de donner des ordres, d'en contrôler l'exécution et de sanctionner les manquements.\n• Le **CDI** est la forme normale d'emploi ; le **CDD** est strictement dérogatoire (remplacement temporaire, surcroît exceptionnel d'activité).",
      example: "Un livreur à vélo sous statut d'auto-entrepreneur dont l'application fixe les trajets, les prix et applique des pénalités peut être requalifié en salarié en CDI."
    },
    {
      id: "notion_th5_2",
      themeId: "th5",
      term: "Les 3 Pouvoirs de l'Employeur",
      source: "Code du travail & Jurisprudence sociale",
      definition: "Prérogatives légales reconnues au chef d'entreprise :\n• **Pouvoir de direction :** organiser le travail, définir les postes et choisir les technologies.\n• **Pouvoir réglementaire :** rédiger le **Règlement Intérieur** (obligatoire dès 50 salariés), fixant les règles de sécurité, d'hygiène et la discipline (dont la charte informatique).\n• **Pouvoir disciplinaire :** sanctionner les fautes (avertissement, blâme, mise à pied, rétrogradation, licenciement). **Les sanctions pécuniaires (amendes sur salaire) sont formellement interdites**.",
      example: "Un employeur ne peut pas retirer 50 € sur le salaire d'un technicien qui est arrivé en retard : cette amende financière est nulle et illégale."
    },
    {
      id: "notion_th5_3",
      themeId: "th5",
      term: "Modes de Rupture du Contrat de Travail",
      source: "Articles L. 1231-1 et suivants du Code du travail",
      definition: "Manières légales de mettre fin à un CDI :\n• **Démission :** décision unilatérale, libre et non équivoque du salarié.\n• **Rupture conventionnelle :** accord amiable bilatéral homologué par la DREETS ouvrant droit aux allocations chômage et à une indemnité spécifique.\n• **Licenciement personnel :** exige une **Cause Réelle et Sérieuse** (faute simple, grave ou lourde, inaptitude, insuffisance pro).\n• **Licenciement économique :** motivé par des difficultés économiques, mutations technologiques ou réorganisation nécessaire à la compétitivité.",
      example: "L'employeur et un administrateur réseau s'entendent pour se séparer à l'amiable en signant une rupture conventionnelle homologuée."
    },
    {
      id: "notion_th5_4",
      themeId: "th5",
      term: "Télétravail, Égalité de Traitement & Droit à la Déconnexion",
      source: "Ordonnances Travail & Article L. 1222-9 du Code du travail",
      definition: "Régulation du travail à distance :\n• **Mise en place :** par accord collectif, charte unilatérale ou accord mutuel de gré à gré.\n• **Égalité de traitement :** le télétravailleur a les mêmes droits que les salariés sur site (droits collectifs, accès à la formation, tickets restaurant).\n• **Prise en charge des coûts :** l'employeur fournit les outils informatiques sécurisés.\n• **Droit à la déconnexion :** interdiction de contraindre le salarié à répondre à des courriels ou appels professionnels en dehors de ses horaires de travail.",
      example: "Un serveur de messagerie professionnelle configuré pour bloquer l'acheminement des notifications entre 20h et 7h30 protège le droit à la déconnexion."
    },
    {
      id: "notion_th5_5",
      themeId: "th5",
      term: "GEPP (Gestion des Emplois et des Parcours Professionnels)",
      source: "Code du travail (ex-GPEC)",
      definition: "Démarche prospective de gestion des ressources humaines :\n• Permet à l'entreprise d'anticiper les évolutions démographiques, économiques et technologiques (notamment l'impact de l'intelligence artificielle et du Cloud).\n• Vise à adapter les compétences des salariés via la formation continue, la reconversion et la gestion prévisionnelle des recrutements pour éviter l'inadéquation des compétences.",
      example: "Une banque forme ses techniciens de support bureautique aux métiers de la cybersécurité dans le cadre de son plan de GEPP."
    },
    {
      id: "notion_th5_6",
      themeId: "th5",
      term: "Cybersurveillance des Salariés & Respect de la Vie Privée",
      source: "Cour de cassation (Arrêt Nikon 2001) & CNIL",
      definition: "Encadrement strict du contrôle des outils informatiques par l'employeur :\n• L'employeur peut surveiller l'activité réseau pour des motifs légitimes de sécurité, à condition d'avoir **informé préalablement les salariés et le CSE**.\n• **Principe de proportionnalité :** la surveillance continue et permanente (keylogger, caméra filmant un clavier) est formellement prohibée.\n• **Vie privée au bureau :** les courriels portant la mention 'Personnel' ne peuvent être ouverts par l'employeur qu'en présence du salarié ou sur décision de justice.",
      example: "L'employeur ne peut pas ouvrir un dossier sur le bureau du PC intitulé 'Personnel - Photos' sans convoquer le salarié."
    },

    /* --- THÈME 6 : LES CHOIX STRATÉGIQUES DE L'ENTREPRISE --- */
    {
      id: "notion_th6_1",
      themeId: "th6",
      term: "Diagnostic Stratégique Interne & Modèle VRIN",
      source: "Edith Penrose (RBV) & Jay Barney",
      definition: "Évaluation des atouts et faiblesses internes pour dégager un avantage concurrentiel soutenable :\n• **Ressources :** tangibles (équipements informatiques, serveurs) et intangibles (brevets, réputation, compétences des équipes).\n• **Compétences fondamentales (Hamel & Prahalad) :** savoir-faire organisationnel distinctif difficile à imiter.\n• **Modèle VRIN (Barney) :** une ressource génère un avantage durable si elle est **Valeureuse**, **Rare**, **Inimitable** et **Non-substituable**.",
      example: "Une équipe d'ingénieurs détenant une expertise unique en cryptographie post-quantique constitue une ressource VRIN créant un avantage concurrentiel."
    },
    {
      id: "notion_th6_2",
      themeId: "th6",
      term: "Options Stratégiques Globales : Spécialisation vs Diversification",
      source: "Igor Ansoff (Matrice Produits/Marchés)",
      definition: "Orientations fondamentales au niveau corporate de l'entreprise :\n• **Spécialisation :** concentrer tous ses efforts sur un seul métier pour en devenir l'expert absolu et dégager des économies d'échelle (effet d'expérience).\n• **Diversification :** s'implanter sur plusieurs marchés ou métiers distincts pour répartir les risques et exploiter des synergies complémentaires (diversification liée ou conglomérale).",
      example: "Cisco s'est d'abord spécialisé dans les routeurs réseau, avant de se diversifier dans la cybersécurité (Splunk) et la visioconférence (Webex)."
    },
    {
      id: "notion_th6_3",
      themeId: "th6",
      term: "Intégration (« Faire ») vs Externalisation (« Faire-faire »)",
      source: "Ronald Coase & Oliver Williamson (Théorie des coûts de transaction)",
      definition: "Arbitrage entre réaliser une tâche en interne ou la confier à un prestataire externe :\n• **Intégration :** faire soi-même pour garder la maîtrise technologique, protéger ses secrets et préserver son indépendance.\n• **Externalisation (Outsourcing) :** faire-faire par un sous-traitant spécialisé (infogérance) pour transformer des coûts fixes en coûts variables et se recentrer sur son cœur de métier.",
      example: "Un hôpital externalise la gestion de son infrastructure Cloud auprès d'un hébergeur certifié HDS (Hébergeur de Données de Santé)."
    },
    {
      id: "notion_th6_4",
      themeId: "th6",
      term: "Les 3 Stratégies Génériques de Michael Porter",
      source: "Michael Porter (Competitive Advantage)",
      definition: "Stratégies concurrentielles au niveau d'un Domaine d'Activité Stratégique (DAS) :\n1. **Domination par les coûts :** proposer des prix inférieurs grâce aux économies d'échelle et aux volumes (ex: Free, OVHcloud).\n2. **Différenciation :** proposer une offre perçue comme unique et de qualité supérieure (sécurité, prestige) justifiant un prix plus élevé (ex: Apple, Cisco).\n3. **Focalisation (Niche) :** s'adresser exclusivement à un segment de marché très étroit avec une offre sur-mesure.",
      example: "Une entreprise concevant des ordinateurs durcis étanches exclusivement réservés aux sous-marins militaires applique une stratégie de focalisation."
    },
    {
      id: "notion_th6_5",
      themeId: "th6",
      term: "Modalités de Croissance : Interne, Externe, Conjointe",
      source: "Développement de l'entreprise",
      definition: "Méthodes employées par l'entreprise pour accroître sa taille et son pouvoir de marché :\n• **Croissance interne (organique) :** développement autonome avec ses propres moyens (achats de machines, recrutements). Sûre mais lente.\n• **Croissance externe :** rachat ou fusion d'entreprises concurrentes ou complémentaires. Gain de temps immédiat mais coût financier et choc culturel.\n• **Croissance conjointe (partenariale) :** alliance stratégique, franchise ou joint-venture entre entreprises indépendantes.",
      example: "Microsoft rachetant GitHub illustre une croissance externe pour acquérir immédiatement une communauté de 100 millions de développeurs."
    },
    {
      id: "notion_th6_6",
      themeId: "th6",
      term: "L'Effet d'Expérience & Économies d'Échelle",
      source: "Boston Consulting Group (BCG)",
      definition: "Mécanismes économiques de réduction des coûts de revient unitaires :\n• **Économies d'échelle :** baisse du coût unitaire de production grâce à l'augmentation des volumes produits, permettant d'amortir les coûts fixes.\n• **Effet d'expérience :** diminution prévisible du coût unitaire au fur et à mesure que la production cumulée double, grâce à l'apprentissage des salariés et à l'optimisation des procédés.",
      example: "Un grand opérateur Cloud comme AWS réduit drastiquement le coût de stockage par Go en achetant des millions de disques durs en gros."
    }
  ],

  /* ==========================================================================
     FLASHCARDS (3 PAR THÈME = 18 FLASHCARDS RECOMMANDÉES)
     ========================================================================== */
  flashcards: [
    {
      id: "cejm_fc_1",
      themeId: "th1",
      title: "Valeur Ajoutée (Formule & Répartition)",
      front: "Quelle est la formule de calcul de la Valeur Ajoutée (VA) et entre qui est-elle répartie ?",
      back: "• Formule : VA = Chiffre d'Affaires (CA) - Consommations Intermédiaires (CI).\n• Répartition entre 5 bénéficiaires :\n1. Les salariés (salaires et cotisations).\n2. L'État (impôts et taxes).\n3. Les banques/prêteurs (intérêts des emprunts).\n4. Les associés/actionnaires (dividendes).\n5. L'entreprise elle-même (autofinancement et amortissements)."
    },
    {
      id: "cejm_fc_2",
      themeId: "th1",
      title: "Les 3 Conditions de Validité d'un Contrat",
      front: "Quelles sont les 3 conditions cumulatives pour qu'un contrat soit légalement valide (Art. 1128 C. civ.) ?",
      back: "1. Consentement libre et éclairé (sans vice : erreur, dol ou violence).\n2. Capacité juridique des parties (majeur capable ou représentant légal habilité).\n3. Contenu licite et certain (objet déterminé/déterminable, non contraire à l'ordre public).\n• Sanction en cas de manquement : la nullité du contrat."
    },
    {
      id: "cejm_fc_3",
      themeId: "th1",
      title: "Asymétrie d'Information : Sélection Adverse vs Aléa Moral",
      front: "Comment différencier la Sélection adverse de l'Aléa moral en économie ?",
      back: "• Sélection adverse (Akerlof) : Se produit AVANT la signature du contrat (ex-ante). L'une des parties cache des informations sur la qualité du produit (marché des citrons).\n• Aléa moral (Stiglitz) : Se produit APRÈS la signature du contrat (ex-post). Une partie prend des risques démesurés car elle n'en supporte pas les conséquences financières."
    },
    {
      id: "cejm_fc_4",
      themeId: "th2",
      title: "La RSE et les Parties Prenantes",
      front: "Qu'est-ce que la démarche RSE et qui sont les 'parties prenantes' de l'entreprise ?",
      back: "• RSE (Responsabilité Sociétale des Entreprises) : Intégration volontaire des préoccupations sociales et écologiques aux activités commerciales.\n• Parties prenantes (Stakeholders de Freeman) :\n- Internes : Salariés, dirigeants, représentants syndicaux.\n- Externes : Clients, fournisseurs, actionnaires, banques, État, ONG, riverains."
    },
    {
      id: "cejm_fc_5",
      themeId: "th2",
      title: "Politique Conjoncturelle vs Structurelle",
      front: "Quelle est la différence fondamentale entre politique conjoncturelle et politique structurelle ?",
      back: "• Conjoncturelle : Action à COURT TERME pour réguler les déséquilibres immédiats (chômage, inflation) via les budgets publics et les taux de la BCE.\n• Structurelle : Action à LONG TERME pour transformer les fondements de l'économie (recherche, infrastructures numériques, transition écologique, éducation)."
    },
    {
      id: "cejm_fc_6",
      themeId: "th2",
      title: "Régulation : Abus de Position Dominante",
      front: "Avoir une position dominante sur un marché est-il illégal ? Qu'est-ce qui est sanctionné ?",
      back: "• Être en position dominante n'est PAS illégal en soi (résultat d'un succès commercial).\n• Ce qui est STRICTEMENT INTERDIT et sanctionné par l'Autorité de la Concurrence, c'est l'ABUS de cette position (ex: ventes liées forcées, prix prédateurs, refus de vente injustifié)."
    },
    {
      id: "cejm_fc_7",
      themeId: "th3",
      title: "Structure Hiérarchique vs Matricielle",
      front: "Quels sont les avantages et inconvénients comparés des structures hiérarchique et matricielle ?",
      back: "• Structure Hiérarchique (Fayol) : Unité de commandement (1 seul chef). Clair et discipliné, mais rigide et lent à communiquer.\n• Structure Matricielle : Double hiérarchie (par fonction technique + par projet client). Très flexible et transversale, mais risque de tensions et d'ordres contradictoires."
    },
    {
      id: "cejm_fc_8",
      themeId: "th3",
      title: "Les 6 Mécanismes de Coordination de Mintzberg",
      front: "Citez les 6 mécanismes de coordination décrits par Henry Mintzberg.",
      back: "1. Ajustement mutuel (communication informelle directe).\n2. Supervision directe (ordres donnés par un responsable).\n3. Standardisation des procédés de travail (fiches de procédures, scripts).\n4. Standardisation des résultats (objectifs chiffrés à atteindre).\n5. Standardisation des qualifications (diplômes, certifications professionnelles).\n6. Standardisation des normes (culture et valeurs de l'entreprise)."
    },
    {
      id: "cejm_fc_9",
      themeId: "th3",
      title: "Management Stratégique vs Opérationnel",
      front: "Comment distinguer une décision stratégique d'une décision opérationnelle ?",
      back: "• Décision Stratégique : Prise par la Direction Générale sur le LONG TERME (3-5 ans). Engage d'importants investissements financiers et est difficilement réversible (ex: bascule sur le Cloud public).\n• Décision Opérationnelle : Prise par les managers intermédiaires sur le COURT TERME. Concerne la gestion courante des ressources et est facilement réversible (ex: planning des astreintes)."
    },
    {
      id: "cejm_fc_10",
      themeId: "th4",
      title: "Les Grands Principes du RGPD",
      front: "Quels sont les 3 principes cardinaux du RGPD que tout administrateur SISR doit respecter ?",
      back: "1. Licéité, loyauté et transparence : Consentement explicite et information claire de l'utilisateur.\n2. Minimisation des données : Ne collecter STRICTEMENT que les informations nécessaires au service.\n3. Sécurité et confidentialité : Mesures techniques (chiffrement, accès restreint) et notification obligatoire à la CNIL sous 72h en cas de violation de données."
    },
    {
      id: "cejm_fc_11",
      themeId: "th4",
      title: "Droit d'Auteur sur les Logiciels",
      front: "Qui est propriétaire des droits patrimoniaux sur un logiciel créé par un salarié dans son travail ?",
      back: "En vertu de l'article L. 113-9 du Code de la propriété intellectuelle, les droits patrimoniaux sur les logiciels créés par un salarié dans l'exercice de ses fonctions sont dévolus AUTOMATIQUEMENT à L'EMPLOYEUR, qui est le seul autorisé à les commercialiser."
    },
    {
      id: "cejm_fc_12",
      themeId: "th4",
      title: "Infractions aux STAD (Code pénal)",
      front: "Quels actes constituent une infraction relative aux STAD selon l'article 323-1 du Code pénal ?",
      back: "• Le fait d'accéder ou de se maintenir frauduleusement dans tout ou partie d'un Système de Traitement Automatisé de Données.\n• L'entrave ou l'altération du fonctionnement du système (ex: attaque par déni de service DDoS).\n• L'introduction, la suppression ou la modification frauduleuse de données."
    },
    {
      id: "cejm_fc_13",
      themeId: "th5",
      title: "Lien de Subordination Juridique",
      front: "Qu'est-ce qui caractérise juridiquement le lien de subordination d'un salarié ?",
      back: "Selon la jurisprudence de la Cour de cassation (1996), le lien de subordination est caractérisé par l'exécution d'un travail sous l'autorité d'un employeur qui a le pouvoir :\n1. De donner des ordres et des directives,\n2. D'en contrôler l'exécution,\n3. De sanctionner les manquements du travailleur."
    },
    {
      id: "cejm_fc_14",
      themeId: "th5",
      title: "Les 3 Pouvoirs de l'Employeur",
      front: "Quels sont les 3 pouvoirs reconnus à l'employeur dans l'entreprise ?",
      back: "1. Pouvoir de direction : Organiser l'entreprise, décider des choix techniques et assigner les postes.\n2. Pouvoir réglementaire : Rédiger le règlement intérieur (obligatoire dès 50 salariés).\n3. Pouvoir disciplinaire : Sanctionner les fautes (avertissement, blâme, mise à pied, licenciement - les amendes financières étant formellement interdites)."
    },
    {
      id: "cejm_fc_15",
      themeId: "th5",
      title: "Rupture Conventionnelle vs Licenciement",
      front: "Quelle est la spécificité de la rupture conventionnelle par rapport au licenciement ?",
      back: "• Licenciement : Décision UNILATÉRALE de l'employeur qui doit obligatoirement justifier d'une Cause Réelle et Sérieuse (faute, inaptitude, motif économique).\n• Rupture conventionnelle : Accord AMIABLE BILATÉRAL entre l'employeur et le salarié, assorti d'une indemnité spécifique et validé après homologation administrative de la DREETS."
    },
    {
      id: "cejm_fc_16",
      themeId: "th6",
      title: "Les 3 Stratégies Génériques de Porter",
      front: "Quelles sont les 3 stratégies génériques définies par Michael Porter ?",
      back: "1. Domination par les coûts : Vendre au prix le plus bas possible grâce aux volumes et économies d'échelle (ex: Free).\n2. Différenciation : Offrir des qualités uniques et valorisées permettant de vendre plus cher (ex: Apple, Cisco).\n3. Focalisation (niche) : Se concentrer sur un segment de clientèle très restreint et hyperspécialisé."
    },
    {
      id: "cejm_fc_17",
      themeId: "th6",
      title: "Spécialisation vs Diversification",
      front: "Quelle est la différence stratégique entre spécialisation et diversification ?",
      back: "• Spécialisation : L'entreprise concentre l'ensemble de ses ressources sur un SEUL métier pour en devenir l'expert incontesté (forte maîtrise mais vulnérable en cas de crise du secteur).\n• Diversification : L'entreprise s'implante sur PLUSIEURS métiers ou marchés différents pour répartir ses risques financiers."
    },
    {
      id: "cejm_fc_18",
      themeId: "th6",
      title: "Croissance Interne vs Croissance Externe",
      front: "Quels sont les atouts respectifs de la croissance interne et de la croissance externe ?",
      back: "• Croissance interne (organique) : Développement avec ses propres forces (embauches, achats de matériel). Préserve l'indépendance et la culture d'entreprise, mais progression lente.\n• Croissance externe : Rachat ou fusion d'entreprises concurrentes. Gain de temps immédiat et accès direct à de nouveaux clients/brevets, mais coût élevé et risque de choc des cultures."
    }
  ],

  /* ==========================================================================
     QUIZZES COMPLETS : 20 QUESTIONS PAR THÈME (TOTAL = 120 QUESTIONS EXAMEN)
     ========================================================================== */
  quizzes: [
    /* ========================================================================
       THÈME 1 : L'INTÉGRATION DE L'ENTREPRISE DANS SON ENVIRONNEMENT (20 Q)
       ======================================================================== */
    {
      id: "cejm_th1_q1",
      themeId: "th1",
      question: "Une entreprise informatique réalise un Chiffre d'Affaires de 200 000 €. Elle a acheté pour 80 000 € de serveurs loués et d'électricité consommée. À combien s'élève sa Valeur Ajoutée ?",
      options: [ "280 000 €", "120 000 €", "80 000 €", "200 000 €" ],
      correctAnswer: 1,
      explanation: "La Valeur Ajoutée (VA) = Chiffre d'Affaires (200 000 €) - Consommations Intermédiaires (80 000 €) = 120 000 €."
    },
    {
      id: "cejm_th1_q2",
      themeId: "th1",
      question: "Parmi les éléments suivants, lequel constitue une Consommation Intermédiaire (CI) pour une entreprise de services numériques (ESN) ?",
      options: [ "Les salaires nets versés aux développeurs", "L'abonnement d'électricité alimentant la salle serveurs", "L'impôt sur les sociétés payé à l'État", "Les dividendes distribués aux actionnaires" ],
      correctAnswer: 1,
      explanation: "L'électricité consommée est un bien détruit lors du processus de production : c'est typiquement une Consommation Intermédiaire. Les salaires et impôts font partie de la répartition de la Valeur Ajoutée."
    },
    {
      id: "cejm_th1_q3",
      themeId: "th1",
      question: "Dans le cadre de la répartition de la Valeur Ajoutée, quelle part revient spécifiquement aux prêteurs (banques) ?",
      options: [ "Les dividendes", "Les salaires et charges sociales", "Les intérêts des emprunts", "Les réserves d'autofinancement" ],
      correctAnswer: 2,
      explanation: "Les banques et organismes de crédit sont rémunérés par les intérêts sur les sommes prêtées à l'entreprise."
    },
    {
      id: "cejm_th1_q4",
      themeId: "th1",
      question: "En vertu de l'article 1128 du Code civil, combien de conditions cumulatives sont obligatoires pour la validité d'un contrat ?",
      options: [ "2 conditions (signature et paiement)", "3 conditions (consentement, capacité, contenu licite et certain)", "4 conditions (devis, délai, garantie, assurance)", "5 conditions écrites devant notaire" ],
      correctAnswer: 1,
      explanation: "L'article 1128 du Code civil exige 3 conditions cumulatives : 1. Le consentement des parties ; 2. Leur capacité de contracter ; 3. Un contenu licite et certain."
    },
    {
      id: "cejm_th1_q5",
      themeId: "th1",
      question: "Un vendeur de matériel informatique dissimule délibérément une panne récurrente de carte mère pour inciter un client à acheter. Quel vice du consentement est caractérisé ?",
      options: [ "L'erreur excusable", "Le dol (Article 1137 du Code civil)", "La force majeure", "La lésion de droit commun" ],
      correctAnswer: 1,
      explanation: "Le dol est l'obtention du consentement par des manœuvres frauduleuses, des mensonges ou la dissimulation intentionnelle d'une information déterminante (réticence dolosive)."
    },
    {
      id: "cejm_th1_q6",
      themeId: "th1",
      question: "Lorsqu'un contrat est conclu sous l'empire de la violence ou du dol, quelle est la sanction juridique encourue ?",
      options: [ "La nullité absolue", "La nullité relative", "La suspension temporaire pour 30 jours", "Une simple réduction d'impôt" ],
      correctAnswer: 1,
      explanation: "La nullité relative sanctionne la violation d'une règle destinée à protéger un intérêt privé (comme un vice du consentement ou l'incapacité d'une partie). Seule la victime peut l'invoquer."
    },
    {
      id: "cejm_th1_q7",
      themeId: "th1",
      question: "Un prestataire Cloud refuse d'ouvrir l'accès aux serveurs tant que le client n'a pas réglé la facture d'acompte convenue au contrat. Quel remède juridique utilise-t-il ?",
      options: [ "L'exception d'inexécution (Art. 1219 C. civ.)", "L'abus de confiance", "L'enrichissement sans cause", "L'exécution forcée par huissier" ],
      correctAnswer: 0,
      explanation: "L'exception d'inexécution permet à une partie de refuser d'exécuter son obligation tant que son cocontractant n'exécute pas la sienne alors qu'elle est exigible."
    },
    {
      id: "cejm_th1_q8",
      themeId: "th1",
      question: "Dans un contrat de service informatique (SLA), comment nomme-t-on la clause fixant par avance une indemnité forfaitaire de 1 000 € par heure de panne constatée ?",
      options: [ "Une clause léonine", "Une clause pénale (Art. 1231-5 C. civ.)", "Une clause de non-concurrence", "Une clause compromissoire" ],
      correctAnswer: 1,
      explanation: "La clause pénale fixe forfaitairement à l'avance et d'un commun accord le montant des dommages et intérêts dus en cas d'inexécution ou de retard."
    },
    {
      id: "cejm_th1_q9",
      themeId: "th1",
      question: "Pour être qualifié d'événement de 'Force Majeure' exonérant le débiteur de sa responsabilité contractuelle, quels sont les 3 critères obligatoires ?",
      options: [ "Coûteux, imprévu et national", "Imprévisible, irrésistible et extérieur", "Légal, écrit et réversible", "Soudain, commercial et temporaire" ],
      correctAnswer: 1,
      explanation: "Selon l'article 1218 du Code civil, la force majeure réunit trois conditions cumulatives : un événement imprévisible lors de la conclusion du contrat, irrésistible dans son exécution, et échappant au contrôle du débiteur (extérieur)."
    },
    {
      id: "cejm_th1_q10",
      themeId: "th1",
      question: "Un stagiaire informaticien fait tomber un tournevis sur le pare-brise de la voiture d'un client garée sur le parking de l'entreprise. Quel régime de responsabilité s'applique ?",
      options: [ "La responsabilité contractuelle", "La responsabilité civile extracontractuelle (Art. 1240 C. civ.)", "La responsabilité pénale pour attentat", "La garantie décennale du bâtiment" ],
      correctAnswer: 1,
      explanation: "Aucun contrat ne lie l'entreprise au client pour le stationnement de son véhicule : le dommage causé relève donc de la responsabilité extracontractuelle (délictuelle)."
    },
    {
      id: "cejm_th1_q11",
      themeId: "th1",
      question: "Quelles sont les trois conditions nécessaires pour engager la responsabilité civile extracontractuelle ?",
      options: [ "Une infraction pénale, une déposition et une amende", "Un fait générateur (faute), un préjudice et un lien de causalité", "Un contrat écrit, deux témoins et une mise en demeure", "Un devis, une facture et une assurance" ],
      correctAnswer: 1,
      explanation: "Pour obtenir réparation (Art. 1240), la victime doit prouver : 1. Un fait générateur (faute ou fait des choses) ; 2. Un dommage certain et direct ; 3. Le lien de causalité direct entre le fait et le dommage."
    },
    {
      id: "cejm_th1_q12",
      themeId: "th1",
      question: "Selon George Akerlof (théorie des 'lemons'), qu'est-ce que la sélection adverse sur un marché ?",
      options: [ "L'augmentation des prix par entente entre distributeurs", "La disparition des produits de bonne qualité provoquée par l'asymétrie d'information avant la transaction", "L'embauche exclusive de candidats certifiés Cisco", "La faillite des entreprises trop petites" ],
      correctAnswer: 1,
      explanation: "La sélection adverse se produit avant la signature du contrat : ignorant la qualité réelle du produit, l'acheteur refuse de payer le prix fort, ce qui chasse les bons produits du marché au profit des produits défectueux."
    },
    {
      id: "cejm_th1_q13",
      themeId: "th1",
      question: "Un utilisateur connecté au réseau d'entreprise clique sur un lien suspect sans vérifier car il sait que l'administrateur système sauvegarde tout quotidiennement. De quoi s'agit-il en économie ?",
      options: [ "D'une sélection adverse", "D'un aléa moral (Joseph Stiglitz)", "D'une externalité de réseau", "D'un abus de monopole" ],
      correctAnswer: 1,
      explanation: "L'aléa moral survient après la conclusion d'un accord : une personne se sachant couverte contre un risque modifie son comportement et devient plus négligente ou imprudente."
    },
    {
      id: "cejm_th1_q14",
      themeId: "th1",
      question: "L'implantation d'un centre de données (datacenter) rejette une grande quantité de chaleur dans l'atmosphère sans indemnisation du voisinage. Comment nomme-t-on cet effet en économie ?",
      options: [ "Un bien collectif pur", "Une externalité négative (Arthur Pigou)", "Un aléa moral", "Une économie d'échelle" ],
      correctAnswer: 1,
      explanation: "Une externalité négative est la conséquence dommageable de l'activité d'un agent économique sur des tiers sans compensation financière via le marché."
    },
    {
      id: "cejm_th1_q15",
      themeId: "th1",
      question: "Le raccordement gratuit en fibre optique d'une zone industrielle permettant à toutes les entreprises locales d'accélérer leurs échanges constitue :",
      options: [ "Une externalité positive", "Un abus de position dominante", "Une entente illicite", "Une sélection adverse" ],
      correctAnswer: 0,
      explanation: "Une externalité positive est un impact bénéfique produit sur des tiers par une activité économique sans contrepartie marchande directe."
    },
    {
      id: "cejm_th1_q16",
      themeId: "th1",
      question: "Quelles sont les deux caractéristiques fondamentales d'un bien public (bien collectif) selon Paul Samuelson ?",
      options: [ "Rentable et privé", "Non-rivalité et non-exclusion", "Payant et réservé aux entreprises", "Rare et amortissable" ],
      correctAnswer: 1,
      explanation: "Un bien public se caractérise par la non-rivalité (la consommation par un individu ne réduit pas celle disponible pour les autres) et la non-exclusion (impossible d'en exclure quiconque, ex: signal GPS, éclairage)."
    },
    {
      id: "cejm_th1_q17",
      themeId: "th1",
      question: "Quelle clause contractuelle permet au vendeur de matériel réseau de rester propriétaire des équipements jusqu'au paiement intégral de la facture par le client ?",
      options: [ "La clause compromissoire", "La clause de réserve de propriété", "La clause de mobilité géographique", "La clause de dédit" ],
      correctAnswer: 1,
      explanation: "La clause de réserve de propriété suspend le transfert de propriété d'un bien jusqu'au paiement complet du prix convenue, protégeant le vendeur en cas de faillite de l'acheteur."
    },
    {
      id: "cejm_th1_q18",
      themeId: "th1",
      question: "Dans un contrat entre professionnels, qu'appelle-t-on la clause résolutoire ?",
      options: [ "Une clause obligeant à renégocier les prix chaque trimestre", "Une clause prévoyant que le contrat sera automatiquement anéanti en cas de manquement d'une partie", "Une clause interdisant d'embaucher les techniciens du client", "Une clause transférant le litige au tribunal administratif" ],
      correctAnswer: 1,
      explanation: "La clause résolutoire prévoit qu'en cas d'inexécution d'une obligation précise (ex: non-paiement sous 30 jours), le contrat sera résolu de plein droit sans recourir au juge."
    },
    {
      id: "cejm_th1_q19",
      themeId: "th1",
      question: "Quelle distinction juridique sépare la 'résolution' de la 'résiliation' d'un contrat ?",
      options: [ "La résolution concerne les contrats à durée indéterminée, la résiliation les CDD", "La résolution a un effet rétroactif (anéantissement passé et futur), alors que la résiliation ne vaut que pour l'avenir", "La résolution est gratuite, la résiliation coûte 1 000 €", "Il n'y a aucune différence en droit civil" ],
      correctAnswer: 1,
      explanation: "La résolution anéantit rétroactivement le contrat (on remet les parties dans l'état où elles étaient avant, ex: vente). La résiliation opère pour l'avenir sans rétroactivité (contrats successifs comme un abonnement)."
    },
    {
      id: "cejm_th1_q20",
      themeId: "th1",
      question: "Dans la méthode du syllogisme juridique, quel élément constitue la 'Majeure' ?",
      options: [ "La description détaillée de la société du cas pratique", "La règle de droit abstraite (l'article de loi, le principe général)", "La décision finale rendue par le juge", "Le montant des dommages et intérêts" ],
      correctAnswer: 1,
      explanation: "La Majeure est l'énoncé de la règle juridique abstraite et générale applicable (ex: un article du Code civil), sans jamais mentionner les protagonistes de l'exercice."
    },

    /* ========================================================================
       THÈME 2 : LA RÉGULATION D'UN MARCHÉ & POLITIQUES ÉCONOMIQUES (20 Q)
       ======================================================================== */
    {
      id: "cejm_th2_1",
      themeId: "th2",
      question: "Selon Milton Friedman, quelle est la seule et unique responsabilité sociale de l'entreprise dans une économie de libre marché ?",
      options: [ "Améliorer les conditions de vie des salariés", "Accroître ses profits pour ses actionnaires dans le respect des règles du jeu", "Protéger la biodiversité et l'environnement", "Financer les services publics de l'État" ],
      correctAnswer: 1,
      explanation: "Pour la vision libérale de Friedman (théorie des actionnaires), la seule finalité de l'entreprise privée est de maximiser le profit pour les actionnaires (shareholders)."
    },
    {
      id: "cejm_th2_2",
      themeId: "th2",
      question: "Selon la théorie des parties prenantes formulée par R. Edward Freeman, qui sont les 'parties prenantes internes' ?",
      options: [ "Les clients et les fournisseurs de serveurs", "Les salariés, les dirigeants et les représentants du personnel", "L'État et la mairie d'implantation", "Les banques et les créanciers obligataires" ],
      correctAnswer: 1,
      explanation: "Les parties prenantes internes sont les acteurs situés à l'intérieur même de l'organisation : salariés, encadrement, dirigeants et délégués du personnel."
    },
    {
      id: "cejm_th2_3",
      themeId: "th2",
      question: "Que signifie le sigle RSE en gestion et management d'entreprise ?",
      options: [ "Règlement Spécifique d'Exploitation", "Responsabilité Sociétale (ou Sociale) des Entreprises", "Réseau Sécurisé d'Entreprise", "Régime Spécial d'Embauche" ],
      correctAnswer: 1,
      explanation: "La RSE désigne l'intégration volontaire par les entreprises de préoccupations sociales et environnementales à leurs activités commerciales et relations avec les parties prenantes."
    },
    {
      id: "cejm_th2_4",
      themeId: "th2",
      question: "Quelle norme internationale de référence définit les lignes directrices de la Responsabilité Sociétale des Entreprises ?",
      options: [ "ISO 9001 (Qualité)", "ISO 27001 (Sécurité SI)", "ISO 26000 (RSE)", "IEEE 802.1Q (VLAN)" ],
      correctAnswer: 2,
      explanation: "La norme ISO 26000 est la norme mondiale fixant les lignes directrices relatives à la responsabilité sociétale (gouvernance, droits de l'homme, relations de travail, environnement, loyauté)."
    },
    {
      id: "cejm_th2_5",
      themeId: "th2",
      question: "Adoptée en 2019, qu'a permis la loi PACTE aux entreprises françaises concernant leur engagement sociétal ?",
      options: [ "L'interdiction des contrats à durée déterminée", "L'inscription d'une 'raison d'être' dans les statuts ou l'adoption du statut d'entreprise à mission", "L'obligation de verser 50% des bénéfices à des associations", "La suppression de l'impôt sur les sociétés" ],
      correctAnswer: 1,
      explanation: "La loi PACTE (mai 2019) permet aux sociétés d'inscrire une 'raison d'être' dans leurs statuts et crée le statut d''entreprise à mission', contrôlé par un organisme tiers."
    },
    {
      id: "cejm_th2_6",
      themeId: "th2",
      question: "Quels sont les 4 objectifs macroéconomiques représentés sur le 'Carré magique' de l'économiste Nicolas Kaldor ?",
      options: [ "Production, Impôts, Exportations, Dividendes", "Croissance du PIB, Plein-emploi, Stabilité des prix, Équilibre du commerce extérieur", "Taux de change, Taux d'intérêt, Dette publique, Épargne", "Investissement, Consommation, Dépense publique, R&D" ],
      correctAnswer: 1,
      explanation: "Le carré magique de Kaldor résume la santé macroéconomique d'un pays : 1. Croissance économique forte ; 2. Plein-emploi (faible chômage) ; 3. Stabilité des prix (faible inflation) ; 4. Équilibre extérieur."
    },
    {
      id: "cejm_th2_7",
      themeId: "th2",
      question: "Quelle est la différence fondamentale entre une politique économique conjoncturelle et une politique structurelle ?",
      options: [ "La conjoncturelle agit à court terme sur les déséquilibres, la structurelle transforme l'économie à long terme", "La conjoncturelle est menée par l'UE, la structurelle par les maires", "La conjoncturelle concerne l'agriculture, la structurelle le numérique", "Il n'y a aucune différence" ],
      correctAnswer: 0,
      explanation: "La politique conjoncturelle cherche à rétablir les grands équilibres à court terme (1 à 2 ans), tandis que la politique structurelle modifie durablement le tissu économique sur le long terme."
    },
    {
      id: "cejm_th2_8",
      themeId: "th2",
      question: "Quel instrument la Banque Centrale Européenne (BCE) manipule-t-elle principalement dans le cadre de sa politique monétaire ?",
      options: [ "Le taux de l'impôt sur le revenu", "Les taux d'intérêt directeurs", "Le salaire minimum légal (SMIC)", "Le budget du ministère de la Défense" ],
      correctAnswer: 1,
      explanation: "La BCE pilote la politique monétaire de la zone euro par ses taux directeurs, influençant le coût du crédit pour les banques commerciales afin de maintenir l'inflation autour de 2%."
    },
    {
      id: "cejm_th2_9",
      themeId: "th2",
      question: "Lorsque la Banque Centrale augmente ses taux directeurs pour freiner une inflation galopante, quel effet direct cela entraîne-t-il ?",
      options: [ "Le crédit devient plus cher, ce qui ralentit la consommation et l'investissement", "Tous les crédits immobiliers deviennent gratuits", "Les entreprises embauchent massivement", "Le Chiffre d'Affaires de l'État baisse immédiatement" ],
      correctAnswer: 0,
      explanation: "Une hausse des taux directeurs renchérit le coût du crédit pour les ménages et les entreprises, ce qui freine la demande globale et ralentit la hausse des prix."
    },
    {
      id: "cejm_th2_10",
      themeId: "th2",
      question: "Le plan national 'France 2030' finançant la recherche en microélectronique, en intelligence artificielle et dans le Cloud souverain relève de :",
      options: [ "La politique budgétaire conjoncturelle", "La politique industrielle structurelle", "La politique monétaire de la BCE", "La politique de rigueur salariale" ],
      correctAnswer: 1,
      explanation: "Investir sur 5 à 10 ans dans des filières technologiques d'avenir pour transformer le potentiel de production national est l'archétype d'une politique industrielle structurelle."
    },
    {
      id: "cejm_th2_11",
      themeId: "th2",
      question: "En vertu de l'article 101 du TFUE, qu'est-ce qu'une 'entente illicite' (cartel) ?",
      options: [ "Une fusion officielle entre deux entreprises cotées", "Un accord secret entre concurrents visant à fixer les prix ou à se répartir des marchés", "Un contrat de travail à temps partiel", "Une alliance technologique pour créer une norme ouverte" ],
      correctAnswer: 1,
      explanation: "Une entente illicite est un concert d'action ou un accord secret entre entreprises rivales pour fausser le jeu de la libre concurrence (fixation concertée des tarifs, quotas de production)."
    },
    {
      id: "cejm_th2_12",
      themeId: "th2",
      question: "Avoir une position dominante sur un marché est-il illégal dans l'Union européenne ?",
      options: [ "Oui, posséder plus de 20% de part de marché est interdit", "Non, la position dominante est légale, c'est son exploitation abusive qui est interdite et sanctionnée (Art. 102 TFUE)", "Oui, toute entreprise dominante doit obligatoirement être nationalisée", "Non, les monopoles sont totalement libres de fixer leurs règles" ],
      correctAnswer: 1,
      explanation: "Détenir une part de marché écrasante n'est pas répréhensible en soi (succès commercial). Ce qui est illégal, c'est d'en abuser pour éliminer ses concurrents (prix d'éviction, ventes liées)."
    },
    {
      id: "cejm_th2_13",
      themeId: "th2",
      question: "Comment qualifie-t-on la pratique commerciale consistant pour un éditeur d'OS à imposer l'installation de son propre logiciel de messagerie sans alternative possible ?",
      options: [ "Une vente liée abusive (ou vente subordonnée)", "Une clause de non-concurrence", "Un mécénat d'entreprise", "Un accord de licence réciproque" ],
      correctAnswer: 0,
      explanation: "La vente liée abusive prive les consommateurs du choix et barre l'accès du marché aux éditeurs concurrents : elle est lourdement sanctionnée par les autorités de concurrence."
    },
    {
      id: "cejm_th2_14",
      themeId: "th2",
      question: "En France, quelle institution indépendante est chargée de contrôler les fusions d'entreprises et de sanctionner les cartels de prix ?",
      options: [ "La Cour des comptes", "L'Autorité de la Concurrence", "Le Conseil économique et social", "L'INSEE" ],
      correctAnswer: 1,
      explanation: "L'Autorité de la Concurrence est l'autorité administrative indépendante française chargée de réguler le fonctionnement concurrentiel des marchés et de lutter contre les pratiques anticoncurrentielles."
    },
    {
      id: "cejm_th2_15",
      themeId: "th2",
      question: "Quel organisme français est le régulateur officiel des communications électroniques et garantit la neutralité du net ?",
      options: [ "La CNIL", "L'ARCEP", "L'ANSSI", "L'AFNOR" ],
      correctAnswer: 1,
      explanation: "L'ARCEP (Autorité de Régulation des Communications Électroniques, des Postes et de la distribution de la presse) veille à la concurrence des opérateurs télécoms et à la neutralité d'Internet."
    },
    {
      id: "cejm_th2_16",
      themeId: "th2",
      question: "Quelle autorité publique française délivre le visa de qualification 'SecNumCloud' pour les prestataires de services informatiques en nuage ?",
      options: [ "La CNIL", "L'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)", "L'ARCEP", "La Banque de France" ],
      correctAnswer: 1,
      explanation: "L'ANSSI pilote la politique de cyberdéfense de la France et délivre les labels les plus exigeants, dont SecNumCloud pour l'hébergement hautement sécurisé et souverain."
    },
    {
      id: "cejm_th2_17",
      themeId: "th2",
      question: "En cas de manquement grave et répété au RGPD, quel est le montant maximal des sanctions financières que la CNIL peut prononcer ?",
      options: [ "100 000 € au maximum", "Jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial total", "1 an d'interdiction de vente en magasin", "La saisie de tous les ordinateurs" ],
      correctAnswer: 1,
      explanation: "L'article 83 du RGPD prévoit des sanctions administratives pouvant atteindre le montant le plus élevé entre 20 millions d'euros ou 4% du chiffre d'affaires mondial consolidé de l'exercice précédent."
    },
    {
      id: "cejm_th2_18",
      themeId: "th2",
      question: "Quel principe de gouvernance numérique stipule que les fournisseurs d'accès à Internet doivent traiter tous les flux de données de manière égale, sans discrimination de débit ?",
      options: [ "Le Cloud Act", "La neutralité du Net (Net Neutrality)", "Le droit à l'oubli", "Le Privacy Shield" ],
      correctAnswer: 1,
      explanation: "La neutralité du Net garantit que les opérateurs télécoms n'ont pas le droit de brider, ralentir ou surtaxer certains sites ou protocoles par rapport à d'autres."
    },
    {
      id: "cejm_th2_19",
      themeId: "th2",
      question: "La directive européenne NIS 2 (Network and Information Security) s'applique particulièrement à quelles catégories d'organisations ?",
      options: [ "Uniquement aux écoles primaires", "Aux Entités Essentielles (EE) et Entités Importantes (EI) des secteurs critiques (santé, énergie, télécoms, Cloud, infogérance)", "Exclusivement aux armées des pays membres", "Uniquement aux banques centrales" ],
      correctAnswer: 1,
      explanation: "NIS 2 élargit les obligations de sécurité informatique à des milliers d'entreprises assurant des services indispensables au fonctionnement de la société et de l'économie européenne."
    },
    {
      id: "cejm_th2_20",
      themeId: "th2",
      question: "Dans le cadre de la politique de Green IT, que vise en priorité la gestion des DEEE pour une entreprise d'infrastructure réseau ?",
      options: [ "Diminuer les impôts sur le revenu", "Collecter, recycler et valoriser les Déchets d'Équipements Électriques et Électroniques pour limiter la pollution", "Acheter uniquement des câbles en cuivre neufs", "Créer un site vitrine sur les réseaux sociaux" ],
      correctAnswer: 1,
      explanation: "La directive DEEE oblige les entreprises à organiser la reprise et le traitement écologique de leurs matériels informatiques et télécoms usagés (serveurs, switches, PC)."
    },

    /* ========================================================================
       THÈME 3 : L'ORGANISATION DE L'ACTIVITÉ DE L'ENTREPRISE (20 Q)
       ======================================================================== */
    {
      id: "cejm_th3_1",
      themeId: "th3",
      question: "Quel est le principe d'organisation fondamental formulé par Henri Fayol pour la structure hiérarchique traditionnelle ?",
      options: [ "La double subordination permanente", "L'unité de commandement (un agent ne doit recevoir des ordres que d'un seul chef)", "Le travail sans aucun supérieur hiérarchique", "La rémunération aux pièces produites" ],
      correctAnswer: 1,
      explanation: "Henri Fayol a théorisé l'unité de commandement : pour une action quelconque, un agent ne doit recevoir des ordres que d'un seul supérieur pour éviter les ordres contradictoires."
    },
    {
      id: "cejm_th3_2",
      themeId: "th3",
      question: "Quel est le principal défaut ou inconvénient d'une structure hiérarchique pyramidale rigide ?",
      options: [ "Elle coûte trop peu cher", "La lenteur des communications et la transmission déformée des informations entre la base et le sommet", "L'absence totale de discipline interne", "Le fait que les décisions soient prises par les ouvriers" ],
      correctAnswer: 1,
      explanation: "La structure hiérarchique souffre d'une communication descendante et ascendante très lente, d'une lourdeur bureaucratique et d'un cloisonnement entre services."
    },
    {
      id: "cejm_th3_3",
      themeId: "th3",
      question: "Dans une entreprise organisée selon une structure divisionnelle, sur quel critère découpe-t-on principalement les divisions ?",
      options: [ "Par famille de diplôme obtenu", "Par produit/service, par type de client ou par zone géographique", "Par marque d'ordinateur portable utilisé", "Selon l'ancienneté des employés" ],
      correctAnswer: 1,
      explanation: "La structure divisionnelle accorde une large autonomie à des divisions spécialisées par produit (ex: division Cloud, division Cybersécurité), par zone géographique ou par type de marché."
    },
    {
      id: "cejm_th3_4",
      themeId: "th3",
      question: "Quelle est la caractéristique distinctive d'une structure organisationnelle matricielle ?",
      options: [ "Elle n'a aucun cadre dirigeant", "Elle fait coexister une double hiérarchie (par exemple un responsable métier et un chef de projet client)", "Elle interdit l'usage du courrier électronique", "Tous les salariés sont bénévoles" ],
      correctAnswer: 1,
      explanation: "La structure matricielle croise deux logiques : une autorité fonctionnelle (par métier technique) et une autorité opérationnelle (par projet ou produit), ce qui favorise la flexibilité."
    },
    {
      id: "cejm_th3_5",
      themeId: "th3",
      question: "Quel risque managérial majeur menace fréquemment les entreprises adoptant une structure matricielle ?",
      options: [ "Une trop grande rapidité d'exécution", "Les conflits de pouvoir et le stress des subordonnés confrontés à des directives contradictoires", "Le manque total de compétences techniques", "Une rentabilité excessive" ],
      correctAnswer: 1,
      explanation: "Comme le salarié dépend de deux chefs distincts (ex: chef de projet vs directeur technique), des désaccords sur les priorités peuvent créer des blocages et du stress."
    },
    {
      id: "cejm_th3_6",
      themeId: "th3",
      question: "Selon Henry Mintzberg, quelle composante de l'organisation regroupe les personnes effectuant directement le travail de production du service ou du bien ?",
      options: [ "Le sommet stratégique", "La technostructure", "Le centre opérationnel", "Le support logistique" ],
      correctAnswer: 2,
      explanation: "Le centre opérationnel rassemble les opérateurs de base (développeurs, techniciens réseaux, ouvriers) dont le travail est directement lié à la production de l'offre."
    },
    {
      id: "cejm_th3_7",
      themeId: "th3",
      question: "Où se situe l'architecte système chargé de concevoir les procédures techniques d'installation sans exécuter lui-même le travail de terrain dans le modèle de Mintzberg ?",
      options: [ "Dans la technostructure", "Dans le centre opérationnel", "Dans la ligne hiérarchique", "Au conseil d'administration" ],
      correctAnswer: 0,
      explanation: "La technostructure réunit les analystes, experts et spécialistes qui conçoivent, planifient et standardisent le travail des autres sans avoir de pouvoir hiérarchique direct."
    },
    {
      id: "cejm_th3_8",
      themeId: "th3",
      question: "Quel mécanisme de coordination de Mintzberg repose sur la communication directe et informelle entre collègues pour accomplir leur tâche ?",
      options: [ "La supervision directe", "L'ajustement mutuel", "La standardisation des résultats", "Le commandement militaire" ],
      correctAnswer: 1,
      explanation: "L'ajustement mutuel permet une coordination rapide et souple par simple dialogue horizontal entre personnes effectuant le travail (très présent dans les start-ups et équipes informatiques)."
    },
    {
      id: "cejm_th3_9",
      themeId: "th3",
      question: "Un chef de projet qui assigne un objectif chiffré de '99,99% de disponibilité annuelle des serveurs' à son équipe recourt à quel mécanisme de Mintzberg ?",
      options: [ "L'ajustement mutuel", "La standardisation des résultats", "La supervision directe", "La standardisation des normes" ],
      correctAnswer: 1,
      explanation: "La standardisation des résultats consiste à coordonner le travail en fixant des objectifs de performance mesurables, en laissant l'équipe libre des moyens pour y parvenir."
    },
    {
      id: "cejm_th3_10",
      themeId: "th3",
      question: "L'obligation légale d'embaucher uniquement des techniciens détenant un BTS SIO ou une certification Cisco CyberOps relève de quel mécanisme de Mintzberg ?",
      options: [ "La standardisation des qualifications", "L'ajustement mutuel", "La technostructure", "La ligne hiérarchique" ],
      correctAnswer: 0,
      explanation: "La standardisation des qualifications coordonne les actions grâce aux compétences acquises en amont lors des formations universitaires ou des certifications professionnelles."
    },
    {
      id: "cejm_th3_11",
      themeId: "th3",
      question: "Quel style de direction selon Rensis Likert est caractérisé par un management unilatéral, l'usage exclusif de la contrainte et des menaces de sanction ?",
      options: [ "Le style paternaliste", "Le style autoritaire exploiteur", "Le style consultatif", "Le style participatif" ],
      correctAnswer: 1,
      explanation: "Le style autoritaire exploiteur ne laisse aucune autonomie aux salariés, centralise tout le pouvoir et utilise la peur de la sanction comme moteur principal."
    },
    {
      id: "cejm_th3_12",
      themeId: "th3",
      question: "Dans la typologie de Likert, comment nomme-t-on le dirigeant qui entretient une autorité bienveillante, motive par des récompenses mais garde le monopole des décisions ?",
      options: [ "Le style paternaliste", "Le style participatif", "Le style anarchique", "Le style bureaucratique" ],
      correctAnswer: 0,
      explanation: "Le style paternaliste associe une proximité protectrice et des gratifications à une centralisation ferme du pouvoir décisionnel."
    },
    {
      id: "cejm_th3_13",
      themeId: "th3",
      question: "Quelle méthode contemporaine de management de projet IT privilégie les itérations courtes (sprints) et l'auto-organisation des équipes pluridisciplinaires ?",
      options: [ "Le cycle de vie en cascade (Cascade / Waterfall)", "Les méthodes Agiles (ex: framework Scrum)", "L'organisation scientifique du travail taylorienne", "Le modèle fordiste à la chaîne" ],
      correctAnswer: 1,
      explanation: "Les méthodes Agiles s'appuient sur des livraisons fréquentes, une collaboration quotidienne client-équipe et une forte autonomie des collaborateurs."
    },
    {
      id: "cejm_th3_14",
      themeId: "th3",
      question: "Parmi les décisions suivantes, laquelle relève expressément du 'Management Stratégique' ?",
      options: [ "Planifier les tours de garde du week-end pour l'équipe réseau", "Acheter une boîte de cordons RJ45 de secours", "Décider de fermer tous les centres de données locaux pour basculer vers un Cloud public européen", "Remplacer la souris cassée d'un comptable" ],
      correctAnswer: 2,
      explanation: "La bascule vers le Cloud est une décision à long terme engageant des investissements financiers lourds et l'organisation globale de l'entreprise : c'est du management stratégique."
    },
    {
      id: "cejm_th3_15",
      themeId: "th3",
      question: "Quelle caractéristique différencie une décision opérationnelle d'une décision stratégique ?",
      options: [ "La décision opérationnelle est prise pour 10 ans", "La décision opérationnelle gère le court terme du quotidien et est facilement réversible", "La décision opérationnelle engage des milliards d'euros", "La décision opérationnelle est prise par le PDG seul" ],
      correctAnswer: 1,
      explanation: "Les décisions opérationnelles sont prises par l'encadrement de terrain pour optimiser les processus courants avec un impact immédiat et aisément modifiable."
    },
    {
      id: "cejm_th3_16",
      themeId: "th3",
      question: "Dans le modèle de Mintzberg, quelle fonction occupent les agents assurant l'entretien des locaux, le service juridique et le restaurant d'entreprise ?",
      options: [ "La technostructure", "Le support logistique (Services fonctionnels de soutien)", "Le sommet stratégique", "Le centre opérationnel" ],
      correctAnswer: 1,
      explanation: "Le support logistique regroupe les unités qui fournissent une assistance indirecte hors du flux principal de production."
    },
    {
      id: "cejm_th3_17",
      themeId: "th3",
      question: "Qu'appelle-t-on la 'décentralisation du pouvoir' au sein d'une organisation d'entreprise ?",
      options: [ "Le transfert de l'autorité de décision vers des niveaux hiérarchiques inférieurs ou des unités locales", "Le licenciement de toute la direction", "Le déménagement des locaux hors de Paris", "La suppression des primes de fin d'année" ],
      correctAnswer: 0,
      explanation: "La décentralisation consiste à déléguer le pouvoir décisionnel aux responsables de divisions, filiales ou équipes de terrain pour gagner en réactivité."
    },
    {
      id: "cejm_th3_18",
      themeId: "th3",
      question: "Quel économiste a mis en évidence les dysfonctionnements bureaucratiques et le formalisme excessif des grandes administrations ?",
      options: [ "Max Weber et Michel Crozier", "Adam Smith", "Milton Friedman", "Joseph Schumpeter" ],
      correctAnswer: 0,
      explanation: "Max Weber a décrit le modèle bureaucratique rationnel-légal, et Michel Crozier a montré les 'effets pervers' bureaucratiques et les zones d'incertitude dans les organisations."
    },
    {
      id: "cejm_th3_19",
      themeId: "th3",
      question: "Dans une équipe d'ingénieurs cybersécurité SOC fonctionnant en 24h/24, quel rôle joue la standardisation des procédés ?",
      options: [ "Elle oblige à éteindre les écrans la nuit", "Elle garantit que chaque incident de sécurité soit traité selon un playbook (mode opératoire) identique quel que soit l'analyste de garde", "Elle permet de supprimer tous les chefs", "Elle augmente les prix des prestations" ],
      correctAnswer: 1,
      explanation: "Standardiser les procédés (playbooks SOC, procédures d'astreinte) garantit une qualité constante et un traitement rigoureux sans dépendre de l'humeur ou de l'oubli d'un individu."
    },
    {
      id: "cejm_th3_20",
      themeId: "th3",
      question: "Qu'est-ce que la culture d'entreprise ?",
      options: [ "La somme des diplômes affichés dans le hall", "L'ensemble des valeurs partagées, des symboles, des mythes et des rites qui unissent les membres d'une organisation", "La liste des matériels informatiques inventoriés", "Le règlement de sécurité incendie" ],
      correctAnswer: 1,
      explanation: "La culture d'entreprise est le ciment identitaire de l'organisation : valeurs fondatrices, langage commun, traditions et manières de collaborer."
    },

    /* ========================================================================
       THÈME 4 : L'IMPACT DU NUMÉRIQUE & RGPD (20 Q)
       ======================================================================== */
    {
      id: "cejm_th4_1",
      themeId: "th4",
      question: "Quelles sont les 4 fonctions fondamentales assurées par tout Système d'Information (SI) en entreprise ?",
      options: [ "Acheter, Vendre, Négocier, Payer", "Collecter, Stocker, Traiter et Diffuser l'information", "Câbler, Éteindre, Réparer, Jeter", "Recruter, Évaluer, Sanctionner, Promouvoir" ],
      correctAnswer: 1,
      explanation: "Le Système d'Information (SI) assure le cycle de vie de la donnée : la collecte (saisie/capteurs), le stockage (bases de données), le traitement (calculs/algorithmes) et la diffusion (rapports/écrans)."
    },
    {
      id: "cejm_th4_2",
      themeId: "th4",
      question: "Qu'est-ce qu'un ERP / PGI (Progiciel de Gestion Intégré) ?",
      options: [ "Un simple logiciel de traitement de texte", "Un logiciel d'entreprise modulaire unifiant tous les processus métier autour d'une base de données unique et partagée", "Un pare-feu matériel filtrant les attaques DDoS", "Un protocole de routage réseau" ],
      correctAnswer: 1,
      explanation: "L'ERP (Enterprise Resource Planning, ex: SAP, Odoo) coordonne l'ensemble des flux (comptabilité, RH, logistique, achats) à partir d'une source unique de vérité sans ressaisie."
    },
    {
      id: "cejm_th4_3",
      themeId: "th4",
      question: "Qu'appelle-t-on un 'effet de réseau direct' dans l'économie des plateformes numériques ?",
      options: [ "L'usure des câbles réseau quand trop de données circulent", "Le fait que l'utilité d'un service augmente pour chaque utilisateur au fur et à mesure que le nombre d'utilisateurs grandit", "La réduction de la bande passante lors des sauvegardes", "L'interdiction de se connecter en Wi-Fi public" ],
      correctAnswer: 1,
      explanation: "L'effet de réseau (loi de Metcalfe) fait qu'une plateforme gagne en valeur intrinsèque avec le nombre de ses inscrits (ex: réseaux sociaux, messageries, marketplaces)."
    },
    {
      id: "cejm_th4_4",
      themeId: "th4",
      question: "Comment définit-on le modèle de monétisation SaaS (Software as a Service) ?",
      options: [ "L'achat d'un CD-ROM d'installation définitif avec licence perpétuelle", "L'accès à un logiciel hébergé sur le Cloud, facturé sous forme d'abonnement récurrent par utilisateur", "Un logiciel entièrement gratuit conçu par des bénévoles", "Une prestation d'installation physique d'armoires serveurs" ],
      correctAnswer: 1,
      explanation: "Le modèle SaaS supprime l'achat de licence unique : le client paye un abonnement d'usage et bénéficie des mises à jour continues et de l'hébergement inclus."
    },
    {
      id: "cejm_th4_5",
      themeId: "th4",
      question: "Qu'est-ce que le modèle économique 'Freemium' ?",
      options: [ "Un service payant remboursé si le client est mécontent", "Une offre où les fonctionnalités de base sont gratuites pour capter une large audience, et les options avancées sont payantes", "Un système de troc entre entreprises", "L'obligation d'acheter pour tester" ],
      correctAnswer: 1,
      explanation: "Freemium (Free + Premium) incite un grand nombre d'usagers à tester le service gratuitement et convertit une fraction d'entre eux en abonnés payants."
    },
    {
      id: "cejm_th4_6",
      themeId: "th4",
      question: "Selon l'article 4 du RGPD, qu'est-ce qu'une 'donnée à caractère personnel' ?",
      options: [ "Uniquement le numéro de carte bancaire", "Toute information se rapportant à une personne physique identifiée ou identifiable directement ou indirectement", "Seulement le nom et le prénom d'un chef d'entreprise", "Le code source d'un logiciel sous licence MIT" ],
      correctAnswer: 1,
      explanation: "Une donnée personnelle est toute donnée permettant d'identifier un individu (nom, email, adresse IP, plaque d'immatriculation, empreinte digitale, cookie traceur)."
    },
    {
      id: "cejm_th4_7",
      themeId: "th4",
      question: "Que stipule le principe fondamental de 'minimisation des données' énoncé par le RGPD ?",
      options: [ "Compresser tous les fichiers au format ZIP", "Ne collecter et ne traiter que les données strictement adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités", "Effacer les données toutes les 24 heures sans exception", "Limiter le nombre d'employés ayant accès à Internet" ],
      correctAnswer: 1,
      explanation: "Le responsable de traitement n'a pas le droit de demander des informations superflues (ex: demander le numéro de sécurité sociale pour s'inscrire à une newsletter)."
    },
    {
      id: "cejm_th4_8",
      themeId: "th4",
      question: "Quel rôle officiel le RGPD confie-t-il au DPO (Data Protection Officer / Délégué à la Protection des Données) ?",
      options: [ "Développer le site web marchand de l'entreprise", "Conseiller le responsable de traitement, contrôler le respect du RGPD et être l'interlocuteur privilégié de la CNIL", "Payer les amendes en cas de cyberattaque", "Vendre les données des utilisateurs à des tiers" ],
      correctAnswer: 1,
      explanation: "Le DPO est le garant indépendant de la conformité : il informe, audite les traitements, conseille sur les études d'impact (AIPD) et fait le lien avec la CNIL."
    },
    {
      id: "cejm_th4_9",
      themeId: "th4",
      question: "En vertu de l'article 33 du RGPD, quel est le délai maximal pour notifier une violation de données personnelles à la CNIL ?",
      options: [ "24 heures", "72 heures", "15 jours", "1 mois" ],
      correctAnswer: 1,
      explanation: "La notification doit être transmise à la CNIL dans les 72 heures au plus tard après en avoir pris connaissance lorsque la faille présente un risque pour les droits et libertés."
    },
    {
      id: "cejm_th4_10",
      themeId: "th4",
      question: "Qu'est-ce que le 'droit à l'effacement' (droit à l'oubli) consacré par l'article 17 du RGPD ?",
      options: [ "L'autorisation d'effacer le disque dur de son patron", "Le droit pour une personne physique d'obtenir du responsable du traitement l'effacement de ses données personnelles dans les meilleurs délais", "La suppression automatique des emails tous les vendredis", "L'interdiction des logs de connexion sur les routeurs" ],
      correctAnswer: 1,
      explanation: "Le citoyen peut demander la destruction de ses données si elles ne sont plus nécessaires ou s'il retire son consentement, sous réserve d'obligations légales de conservation."
    },
    {
      id: "cejm_th4_11",
      themeId: "th4",
      question: "Qu'implique le principe de 'Privacy by Design' (Protection des données dès la conception) ?",
      options: [ "Recruter des designers pour refaire le logo", "Prendre en compte les mesures de protection des données et de sécurité dès la phase amont de développement de tout nouveau produit ou service", "Imposer le mode sombre à tous les utilisateurs", "Signer une charte papier après le déploiement" ],
      correctAnswer: 1,
      explanation: "La confidentialité et la sécurité ne doivent pas être ajoutées après coup : elles doivent être intégrées dès le cahier des charges et l'architecture initiale."
    },
    {
      id: "cejm_th4_12",
      themeId: "th4",
      question: "Quand une entreprise doit-elle obligatoirement réaliser une AIPD (Analyse d'Impact relative à la Protection des Données) ?",
      options: [ "Avant chaque achat d'ordinateur portable", "Lorsqu'un traitement de données est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes (ex: vidéosurveillance algorithmique, données de santé)", "Uniquement si l'entreprise est en déficit", "Tous les 10 ans sans motif particulier" ],
      correctAnswer: 1,
      explanation: "L'AIPD évalue la gravité et la vraisemblance des risques pour la vie privée et liste les garanties techniques mises en œuvre pour les atténuer."
    },
    {
      id: "cejm_th4_13",
      themeId: "th4",
      question: "En droit français de la propriété intellectuelle, par quel mécanisme juridique un logiciel informatique est-il protégé ?",
      options: [ "Par le droit des brevets mécaniques uniquement", "Par le droit d'auteur (Code de la propriété intellectuelle)", "Par le droit maritime", "Par la loi sur la liberté de la presse" ],
      correctAnswer: 1,
      explanation: "En France et en Europe, le logiciel (code source et binaire) est une œuvre de l'esprit protégée par le droit d'auteur dès sa création originale sans formalité obligatoire."
    },
    {
      id: "cejm_th4_14",
      themeId: "th4",
      question: "Un technicien réseau salarié développe un script d'automatisation de configuration de switchs pendant son temps de travail. À qui appartiennent les droits d'exploitation commerciale ?",
      options: [ "Au technicien exclusivement en tant qu'auteur", "À l'employeur automatiquement en vertu de l'article L. 113-9 du CPI", "À la société Cisco", "Au ministère de l'Éducation nationale" ],
      correctAnswer: 1,
      explanation: "L'article L. 113-9 du Code de la propriété intellectuelle prévoit une dévolution légale automatique des droits patrimoniaux sur les logiciels créés par des salariés à l'employeur."
    },
    {
      id: "cejm_th4_15",
      themeId: "th4",
      question: "Selon l'article 323-1 du Code pénal, que risque une personne qui accède ou se maintient frauduleusement dans un STAD (Système de Traitement Automatisé de Données) ?",
      options: [ "Une simple réprimande verbale", "Des sanctions pénales pouvant aller jusqu'à 3 ans d'emprisonnement et 100 000 € d'amende", "L'obligation de travailler gratuitement pour la victime", "Une indemnité versée par l'État" ],
      correctAnswer: 1,
      explanation: "L'intrusion non autorisée dans un serveur informatique (même sans dégradation) constitue une infraction pénale sévèrement punie."
    },
    {
      id: "cejm_th4_16",
      themeId: "th4",
      question: "Comment le Code pénal qualifie-t-il le fait de saturer délibérément les serveurs d'une entreprise par une attaque DDoS pour bloquer son activité ?",
      options: [ "Un vice de consentement", "Une entrave au fonctionnement d'un STAD (Article 323-2 du Code pénal)", "Un abus de majorité", "Une faute de gestion civile" ],
      correctAnswer: 1,
      explanation: "L'article 323-2 réprime l'entrave ou la faussure du fonctionnement d'un système informatique de peines pouvant atteindre 5 ans de prison et 150 000 € d'amende (7 ans si en bande organisée)."
    },
    {
      id: "cejm_th4_17",
      themeId: "th4",
      question: "Quelle licence logicielle impose que tout logiciel dérivé soit obligatoirement redistribué selon les mêmes conditions libres et avec accès au code source (effet 'copyleft') ?",
      options: [ "La licence commerciale propriétaire", "La licence GNU GPL (General Public License)", "La licence MIT permissive", "La licence freeware sans code" ],
      correctAnswer: 1,
      explanation: "La licence GPL contient une clause de contamination virale (copyleft) obligeant quiconque redistribue un dérivé du code à le laisser libre et ouvert sous GPL."
    },
    {
      id: "cejm_th4_18",
      themeId: "th4",
      question: "Qu'est-ce que le 'droit à la portabilité' des données instauré par l'article 20 du RGPD ?",
      options: [ "Le droit de transporter son PC portable chez soi", "Le droit pour une personne de recevoir les données personnelles qu'elle a fournies dans un format structuré et lisible par machine pour les transmettre à un concurrent", "L'interdiction des câbles Ethernet", "Le transfert obligatoire des données vers les USA" ],
      correctAnswer: 1,
      explanation: "Ce droit permet à un utilisateur de récupérer facilement ses playlists, données de santé ou contacts pour changer de fournisseur de service sans friction."
    },
    {
      id: "cejm_th4_19",
      themeId: "th4",
      question: "Le 'Cloud Act' (Clarifying Lawful Overseas Use of Data Act) américain crée quelle inquiétude majeure pour les entreprises européennes ?",
      options: [ "Il interdit aux entreprises européennes d'acheter des ordinateurs", "Il autorise la justice américaine à exiger les données stockées par les hébergeurs américains, même si les serveurs sont physiquement situés en Europe", "Il impose l'usage de Linux", "Il rend les abonnements au Cloud gratuits" ],
      correctAnswer: 1,
      explanation: "Cette loi extraterritoriale américaine fait peser un risque d'espionnage économique ou d'accès judiciaire sur les données européennes confiées aux GAFAM."
    },
    {
      id: "cejm_th4_20",
      themeId: "th4",
      question: "Pour être juridiquement valable sous l'empire du RGPD, le recueil du consentement d'un utilisateur sur un site web doit être :",
      options: [ "Tacite et pré-coché par défaut", "Libre, spécifique, éclairé et univoque (acte positif clair sans case pré-cochée)", "Signé manuscritement et envoyé par courrier postal", "Demandé uniquement aux personnes de plus de 60 ans" ],
      correctAnswer: 1,
      explanation: "Les cases pré-cochées et le consentement passif sont formellement illégaux : l'utilisateur doit accomplir une action positive pour accepter le traitement."
    },

    /* ========================================================================
       THÈME 5 : LES MUTATIONS DU TRAVAIL & DROIT SOCIAL (20 Q)
       ======================================================================== */
    {
      id: "cejm_th5_1",
      themeId: "th5",
      question: "Quels sont les trois éléments cumulatifs constituant obligatoirement un contrat de travail ?",
      options: [ "Un bureau, un badge et un téléphone", "Une prestation de travail, une rémunération et un lien de subordination juridique", "Un diplôme, une promesse d'embauche et une période d'essai", "Un CV, une lettre de motivation et un entretien" ],
      correctAnswer: 1,
      explanation: "Le contrat de travail se définit juridiquement par la réunion d'une activité personnelle, d'un salaire en contrepartie et de la subordination juridique à l'égard de l'employeur."
    },
    {
      id: "cejm_th5_2",
      themeId: "th5",
      question: "Selon l'arrêt de principe de la Cour de cassation (1996), qu'est-ce qui caractérise le 'lien de subordination juridique' ?",
      options: [ "Le port d'une cravate obligatoire", "Le pouvoir pour l'employeur de donner des ordres et des directives, d'en contrôler l'exécution et de sanctionner les manquements", "Le fait de gagner moins de 2 000 € par mois", "Le fait d'avoir un bureau individuel fermé" ],
      correctAnswer: 1,
      explanation: "La subordination juridique repose sur le triptyque de prérogatives patronales : pouvoir de commandement (ordres), de surveillance (contrôle) et de sanction (disciplinaire)."
    },
    {
      id: "cejm_th5_3",
      themeId: "th5",
      question: "Quelle est la forme normale et générale de la relation de travail en France selon le Code du travail ?",
      options: [ "Le Contrat à Durée Déterminée (CDD)", "Le Contrat de Travail Temporaire (intérim)", "Le Contrat à Durée Indéterminée (CDI)", "Le statut de micro-entrepreneur indépendant" ],
      correctAnswer: 2,
      explanation: "L'article L. 1221-2 du Code du travail pose le principe que le CDI est la forme normale et générale de la relation contractuelle de travail."
    },
    {
      id: "cejm_th5_4",
      themeId: "th5",
      question: "Un employeur a-t-il le droit de conclure un CDD pour pourvoir durablement un emploi lié à l'activité normale et permanente de son entreprise ?",
      options: [ "Oui, l'employeur est totalement libre de choisir", "Non, le CDD est strictement interdit pour pourvoir un emploi permanent (Art. L. 1242-1 C. trav.)", "Oui, s'il accorde une prime de 50%", "Oui, si le salarié est d'accord par écrit" ],
      correctAnswer: 1,
      explanation: "Le CDD ne peut avoir ni pour objet ni pour effet de pourvoir durablement un emploi lié à l'activité normale : la sanction encourue est la requalification judiciaire immédiate en CDI."
    },
    {
      id: "cejm_th5_5",
      themeId: "th5",
      question: "Dans le cadre de son pouvoir réglementaire, à partir de quel effectif un employeur a-t-il l'obligation d'établir un Règlement Intérieur ?",
      options: [ "Dès 10 salariés", "Dès 50 salariés", "Dès 250 salariés", "Uniquement s'il y a plus de 1 000 salariés" ],
      correctAnswer: 1,
      explanation: "Le règlement intérieur fixant les règles d'hygiène, de sécurité et la discipline générale est obligatoire dans toute entreprise ou établissement employant au moins 50 salariés."
    },
    {
      id: "cejm_th5_6",
      themeId: "th5",
      question: "En vertu de l'article L. 1331-2 du Code du travail, quelle sanction disciplinaire est expressément prohibée et déclarée nulle ?",
      options: [ "Le blâme", "L'avertissement écrit", "Les amendes et sanctions pécuniaires (retenues sur salaire)", "La mise à pied disciplinaire sans traitement" ],
      correctAnswer: 2,
      explanation: "Toute sanction pécuniaire (amende, retenue d'argent sur salaire en punition d'une faute) est strictement interdite par la loi et punie pénalement."
    },
    {
      id: "cejm_th5_7",
      themeId: "th5",
      question: "Quelle procédure permet à un employeur et à un salarié en CDI de convenir d'un commun accord de la rupture du contrat avec versement d'une indemnité et droit aux allocations chômage ?",
      options: [ "La démission forcée", "La rupture conventionnelle homologuée", "La prise d'acte de rupture", "Le licenciement pour faute grave" ],
      correctAnswer: 1,
      explanation: "La rupture conventionnelle est un accord amiable bilatéral qui doit être validé et homologué par l'administration du travail (DREETS)."
    },
    {
      id: "cejm_th5_8",
      themeId: "th5",
      question: "Quelle condition juridique absolue tout licenciement prononcé par un employeur doit-il obligatoirement respecter ?",
      options: [ "Être validé par vote de tous les collègues", "Reposer sur une Cause Réelle et Sérieuse", "Donner lieu au versement de 10 ans de salaire", "Avoir lieu un vendredi après-midi" ],
      correctAnswer: 1,
      explanation: "Le licenciement pour motif personnel (disciplinaire ou non) exige une Cause Réelle (faits objectifs, vérifiables et existants) et Sérieuse (suffisamment grave pour justifier la rupture)."
    },
    {
      id: "cejm_th5_9",
      themeId: "th5",
      question: "Quelle est la conséquence directe d'un licenciement qualifié pour 'faute grave' ?",
      options: [ "Le salarié part en prison immédiatement", "Le départ du salarié est immédiat : privation de l'indemnité de préavis et de l'indemnité de licenciement", "Le salarié conserve son ordinateur portable", "L'employeur doit lui payer le double de ses congés" ],
      correctAnswer: 1,
      explanation: "La faute grave rend impossible le maintien du salarié dans l'entreprise, même pendant la durée du préavis, le privant des indemnités de préavis et de licenciement."
    },
    {
      id: "cejm_th5_10",
      themeId: "th5",
      question: "Qu'est-ce qu'un licenciement pour motif économique selon l'article L. 1233-3 du Code du travail ?",
      options: [ "Un licenciement punissant un salarié qui a fait perdre de l'argent par erreur", "Un licenciement non inhérent à la personne du salarié, motivé par des difficultés économiques, des mutations technologiques ou la sauvegarde de la compétitivité", "Le refus d'une augmentation de salaire", "L'annulation d'un contrat de vente" ],
      correctAnswer: 1,
      explanation: "Le motif économique ne sanctionne pas le travailleur mais découle de causes économiques objectives nécessitant la suppression ou transformation de son poste."
    },
    {
      id: "cejm_th5_11",
      themeId: "th5",
      question: "Que garantit le principe d'égalité de traitement pour les salariés effectuant du télétravail ?",
      options: [ "Qu'ils reçoivent le même salaire que le PDG", "Qu'ils bénéficient des mêmes droits individuels et collectifs que les salariés exécutant leur travail dans les locaux de l'entreprise (tickets resto, accès à la formation)", "L'obligation d'avoir une piscine chez soi", "Le droit de ne jamais allumer leur caméra" ],
      correctAnswer: 1,
      explanation: "L'article L. 1222-9 du Code du travail garantit aux télétravailleurs une stricte égalité de traitement avec leurs collègues travaillant sur site."
    },
    {
      id: "cejm_th5_12",
      themeId: "th5",
      question: "Qu'est-ce que le 'droit à la déconnexion' inscrit dans le Code du travail ?",
      options: [ "L'interdiction de brancher son chargeur de smartphone au travail", "Le droit pour le salarié de ne pas être sollicité ni de répondre à des courriels ou appels professionnels en dehors de son temps de travail pour protéger son repos", "L'obligation d'éteindre tous les serveurs la nuit", "Le blocage des réseaux sociaux sur le Wi-Fi" ],
      correctAnswer: 1,
      explanation: "Ce droit vise à assurer le respect des temps de repos, des congés payés et l'équilibre entre vie professionnelle et vie personnelle face aux outils numériques."
    },
    {
      id: "cejm_th5_13",
      themeId: "th5",
      question: "Que signifie le sigle GEPP en gestion des ressources humaines ?",
      options: [ "Garantie Exceptionnelle de Pouvoir d'Achat", "Gestion des Emplois et des Parcours Professionnels", "Grille Économique des Primes Patronales", "Groupement Européen de Protection du Personnel" ],
      correctAnswer: 1,
      explanation: "La GEPP (qui a succédé à la GPEC) permet d'anticiper les compétences nécessaires à l'entreprise pour accompagner les transitions écologiques et technologiques (IA, robotique)."
    },
    {
      id: "cejm_th5_14",
      themeId: "th5",
      question: "Selon la jurisprudence de la Cour de cassation (Arrêt Nikon 2001), l'employeur a-t-il le droit d'ouvrir les fichiers personnels d'un salarié sur son PC de travail ?",
      options: [ "Oui, l'ordinateur appartenant à l'entreprise, l'employeur peut tout lire à tout moment", "Non, l'employeur ne peut pas ouvrir les messages identifiés expressément comme 'Personnel' sans la présence du salarié ou une décision de justice", "Oui, si le salarié est en vacances", "Non, l'employeur ne peut jamais allumer le PC d'un subordonné" ],
      correctAnswer: 1,
      explanation: "Le respect de la vie privée au travail interdit à l'employeur de consulter les dossiers ou courriels identifiés comme 'Personnel', protégés par le secret des correspondances."
    },
    {
      id: "cejm_th5_15",
      themeId: "th5",
      question: "Un employeur peut-il installer un logiciel enregistreur de frappes (keylogger) sur l'ordinateur de ses salariés pour vérifier leur productivité ?",
      options: [ "Oui, sans aucune restriction", "Non, la CNIL considère la surveillance constante et permanente comme disproportionnée et formellement illicite", "Oui, si les salariés sont avertis par SMS", "Oui, s'il n'y a pas de syndicats dans la société" ],
      correctAnswer: 1,
      explanation: "La surveillance permanente (keylogger, webcam allumée en continu) viole le principe de proportionnalité et est déclarée illicite par la CNIL et les juridictions."
    },
    {
      id: "cejm_th5_16",
      themeId: "th5",
      question: "Quelle instance représentative du personnel est obligatoire dans toutes les entreprises de 11 salariés et plus depuis les ordonnances Travail de 2017 ?",
      options: [ "Le Comité Social et Économique (CSE)", "Le tribunal de commerce", "Le conseil constitutionnel", "La commission d'arbitrage de l'OCDE" ],
      correctAnswer: 0,
      explanation: "Le CSE fusionne les anciennes instances (délégués du personnel, comité d'entreprise, CHSCT) et représente les salariés auprès de l'employeur."
    },
    {
      id: "cejm_th5_17",
      themeId: "th5",
      question: "En droit du travail, quelle est la nature de la responsabilité de l'employeur quant à la santé et la sécurité de ses salariés (Art. L. 4121-1 C. trav.) ?",
      options: [ "Une simple obligation morale", "Une obligation de sécurité renforcée (obligation de moyens renforcée / prévention effective)", "Aucune responsabilité en dehors de l'usine", "Une responsabilité partagée avec la sécurité sociale" ],
      correctAnswer: 1,
      explanation: "L'employeur doit prendre toutes les mesures nécessaires pour assurer la sécurité et protéger la santé physique et mentale des travailleurs (prévention des RPS, du burn-out)."
    },
    {
      id: "cejm_th5_18",
      themeId: "th5",
      question: "Que désigne la notion de RPS en santé au travail ?",
      options: [ "Réseau Privé Sécurisé", "Risques Psychosociaux (stress, épuisement professionnel/burn-out, violences internes)", "Réglementation des Postes de Saisie", "Régime Professionnel des Salaires" ],
      correctAnswer: 1,
      explanation: "Les RPS sont des risques professionnels portant atteinte à l'intégrité mentale et physique des travailleurs générés par les conditions de travail ou le management."
    },
    {
      id: "cejm_th5_19",
      themeId: "th5",
      question: "Un technicien informatique peut-il exercer son droit de retrait face à une situation de travail ?",
      options: [ "Non, le droit de retrait est réservé aux policiers", "Oui, s'il a un motif raisonnable de penser que la situation présente un danger grave et imminent pour sa vie ou sa santé", "Oui, dès qu'il n'a pas envie de faire une tâche", "Non, les informaticiens sont astreints sans exception" ],
      correctAnswer: 1,
      explanation: "L'article L. 4131-1 accorde à tout travailleur le droit de se retirer d'une situation dangereuse présentant un risque grave et imminent sans encourir de sanction."
    },
    {
      id: "cejm_th5_20",
      themeId: "th5",
      question: "Qu'est-ce que la Clause de Non-Concurrence insérée dans un contrat de travail de spécialiste réseau ?",
      options: [ "Une interdiction d'acheter du matériel concurrent", "Une clause interdisant au salarié, après la rupture de son contrat, d'exercer une activité concurrente, devant obligatoirement comporter une contrepartie financière", "Une obligation de ne parler à personne sur LinkedIn", "Une prime de fin de carrière" ],
      correctAnswer: 1,
      explanation: "Pour être valide, la clause de non-concurrence doit être limitée dans le temps et l'espace, indispensable à la protection des intérêts légitimes de l'entreprise et assortie d'une indemnité financière."
    },

    /* ========================================================================
       THÈME 6 : LES CHOIX STRATÉGIQUES DE L'ENTREPRISE (20 Q)
       ======================================================================== */
    {
      id: "cejm_th6_1",
      themeId: "th6",
      question: "Dans le diagnostic stratégique interne, que représentent les critères du modèle VRIN théorisé par Jay Barney ?",
      options: [ "Vitesse, Rendement, Intérêt, Nouveauté", "Valeureuse, Rare, Inimitable, Non-substituable (pour fonder un avantage concurrentiel durable)", "Vente, Réduction, Importation, Normalisation", "Vérification, Réseau, Informatique, Numérique" ],
      correctAnswer: 1,
      explanation: "Le modèle VRIN de la théorie des ressources évalue si une ressource permet à l'entreprise d'exploiter un avantage concurrentiel que les rivaux ne peuvent pas copier."
    },
    {
      id: "cejm_th6_2",
      themeId: "th6",
      question: "Selon Gary Hamel et C.K. Prahalad, qu'appelle-t-on les 'compétences fondamentales' (Core Competencies) d'une entreprise ?",
      options: [ "Les diplômes de secrétariat général", "Un ensemble collectif d'apprentissages et de savoir-faire distinctifs difficilement imitables qui confèrent un avantage compétitif", "Le montant d'argent liquide disponible sur le compte courant", "La vitesse de connexion Internet du siège" ],
      correctAnswer: 1,
      explanation: "Ce sont les compétences clés intégrées (ex: savoir-faire unique en cryptographie ou miniaturisation) qui permettent de créer de la valeur et d'ouvrir de nouveaux marchés."
    },
    {
      id: "cejm_th6_3",
      themeId: "th6",
      question: "Dans la Chaîne de Valeur de Michael Porter, parmi les activités suivantes, laquelle est classée comme 'activité principale' ?",
      options: [ "La gestion des ressources humaines", "Les services après-vente (support technique / assistance aux clients)", "La recherche et développement (R&D)", "L'infrastructure de la firme (direction générale, juridique)" ],
      correctAnswer: 1,
      explanation: "Les activités principales participent directement à la création matérielle et à la vente du produit : Logistique entrante, Production, Logistique sortante, Commercialisation et SAV."
    },
    {
      id: "cejm_th6_4",
      themeId: "th6",
      question: "Dans la matrice PESTEL analysant le macro-environnement d'une société informatique, où classe-t-on 'Une nouvelle réglementation européenne imposant la souveraineté des datacenters' ?",
      options: [ "Dans la composante Économique", "Dans la composante Légale (L)", "Dans la composante Socioculturelle", "Dans la composante Écologique" ],
      correctAnswer: 1,
      explanation: "Les lois, directives européennes et règlements obligatoires relèvent de la dimension Légale (L) de l'analyse PESTEL."
    },
    {
      id: "cejm_th6_5",
      themeId: "th6",
      question: "Dans le modèle des 5 forces de Porter, comment qualifie-t-on le risque que des solutions Cloud d'entreprises américaines remplacent définitivement les serveurs matériels vendus sur site ?",
      options: [ "Le pouvoir de négociation des salariés", "La menace des produits (ou services) de substitution", "Une entente illicite", "Une barrière à la sortie" ],
      correctAnswer: 1,
      explanation: "Un produit de substitution répond au même besoin client (stockage/calcul) par une technologie ou un mode de consommation différent, menaçant l'offre existante."
    },
    {
      id: "cejm_th6_6",
      themeId: "th6",
      question: "Dans un diagnostic SWOT réalisé pour un hébergeur web, où classe-t-on 'La certification Cisco et ISO 27001 obtenue par l'ensemble des techniciens de l'équipe' ?",
      options: [ "Une Menace (Threat)", "Une Opportunité (Opportunity)", "Une Force (Strength)", "Une Faiblesse (Weakness)" ],
      correctAnswer: 2,
      explanation: "Les compétences et certifications internes des équipes sont des atouts maîtrisés en interne : ce sont donc des Forces (Strengths)."
    },
    {
      id: "cejm_th6_7",
      themeId: "th6",
      question: "Quelle est la caractéristique fondamentale d'une stratégie globale de 'Spécialisation' ?",
      options: [ "Vendre dans tous les secteurs industriels possibles", "Concentrer l'ensemble des compétences et des ressources sur un seul métier ou domaine d'activité", "Fermer l'entreprise tous les étés", "N'embaucher que des alternants" ],
      correctAnswer: 1,
      explanation: "La spécialisation consiste à miser sur un cœur de métier unique pour y acquérir une grande maîtrise, bénéficier d'économies d'échelle et exploiter la courbe d'expérience."
    },
    {
      id: "cejm_th6_8",
      themeId: "th6",
      question: "Quel est le risque stratégique principal encouru par une entreprise qui applique une stratégie de spécialisation pure ?",
      options: [ "Gagner trop de parts de marché", "Être extrêmement vulnérable en cas de retournement de marché ou d'obsolescence technologique de son unique produit", "Perdre le soutien de son banquier", "Avoir trop de filiales à gérer" ],
      correctAnswer: 1,
      explanation: "L'entreprise met 'tous ses œufs dans le même panier' : si son secteur unique s'effondre (ex: Kodak et la pellicule argentique), sa survie est immédiatement compromise."
    },
    {
      id: "cejm_th6_9",
      themeId: "th6",
      question: "En quoi consiste une stratégie de 'Diversification liée' (ou concentrique) ?",
      options: [ "Ouvrir des magasins au hasard", "Se développer sur de nouvelles activités présentant des complémentarités techniques, commerciales ou technologiques avec le métier d'origine", "Acheter des actions en bourse sans lien avec l'activité", "Vendre son entreprise à ses employés" ],
      correctAnswer: 1,
      explanation: "La diversification liée valorise les synergies avec les savoir-faire existants (ex: un constructeur de routeurs qui se diversifie dans les pare-feux et la cybersécurité logicielle)."
    },
    {
      id: "cejm_th6_10",
      themeId: "th6",
      question: "Dans la théorie des coûts de transaction formulée par Ronald Coase et Oliver Williamson, sur quel critère l'entreprise choisit-elle entre 'Faire' (intégration) et 'Faire-faire' (externalisation) ?",
      options: [ "Elle compare les coûts d'organisation interne avec les coûts de transaction sur le marché (recherche de prestataires, négociation, contrôle des contrats)", "Elle choisit toujours l'option la plus chère", "Elle tire au sort chaque année", "Elle applique le choix du ministère" ],
      correctAnswer: 0,
      explanation: "Si recourir au marché engendre trop de coûts de transaction et d'incertitudes (spécificité des actifs, risque d'opportunisme), l'entreprise a intérêt à internaliser l'activité."
    },
    {
      id: "cejm_th6_11",
      themeId: "th6",
      question: "Qu'est-ce que l'externalisation (outsourcing / infogérance) pour une direction informatique bancaire ?",
      options: [ "Implanter une agence à l'étranger", "Confier la gestion de ses serveurs et du support utilisateur à un prestataire spécialisé externe (ESN) sous contrat de service", "Créer un nouveau compte bancaire", "Embaucher 500 informaticiens en interne" ],
      correctAnswer: 1,
      explanation: "L'externalisation consiste à transférer une activité ou une fonction non cœur de métier à un tiers expert pour gagner en flexibilité et variabiliser les coûts."
    },
    {
      id: "cejm_th6_12",
      themeId: "th6",
      question: "Selon Michael Porter, quelle stratégie générique consiste à réduire au maximum ses coûts de revient pour proposer les tarifs les plus bas du marché ?",
      options: [ "La différenciation par le haut", "La domination par les coûts", "La focalisation sur une niche de luxe", "La diversification conglomérale" ],
      correctAnswer: 1,
      explanation: "La domination par les coûts vise à obtenir le coût unitaire le plus faible grâce aux économies d'échelle et aux volumes élevés pour pratiquer des prix agressifs (ex: Free, Dacia)."
    },
    {
      id: "cejm_th6_13",
      themeId: "th6",
      question: "Quelle stratégie de Porter est illustrée par Apple vendant ses ordinateurs Mac plus cher que la moyenne en s'appuyant sur un design épuré, un écosystème fermé et une haute réputation de sécurité ?",
      options: [ "La domination par les coûts", "La différenciation par le haut (sophistication)", "La sous-traitance intégrale", "La nationalisation" ],
      correctAnswer: 1,
      explanation: "La différenciation par le haut dote l'offre de spécificités reconnues et valorisées par les clients, ce qui permet à l'entreprise d'appliquer un prix plus élevé (surprix)."
    },
    {
      id: "cejm_th6_14",
      themeId: "th6",
      question: "Comment nomme-t-on la stratégie générique qui consiste à cibler un segment de marché minuscule mais avec une offre parfaitement adaptée à ses besoins particuliers ?",
      options: [ "La stratégie de focalisation (ou stratégie de niche)", "La guerre des prix mondiale", "La domination par le volume", "L'alignement concurrentiel" ],
      correctAnswer: 0,
      explanation: "La focalisation (stratégie de niche) renonce à affronter les leaders sur le marché généraliste pour régner sur un micromarché très spécifique (ex: OS pour satellites)."
    },
    {
      id: "cejm_th6_15",
      themeId: "th6",
      question: "Que risque selon Michael Porter une entreprise qui ne choisit clairement aucune des trois stratégies génériques ?",
      options: [ "De devenir un monopole", "D'être 'coincée au milieu' (stuck in the middle), avec des coûts trop élevés pour rivaliser en prix et une offre pas assez distinctive pour attirer les clients premium", "De payer trop d'impôts", "D'être rachetée par l'État" ],
      correctAnswer: 1,
      explanation: "L'enlisement dans la voie moyenne ('coincé au milieu') conduit à une rentabilité médiocre : l'entreprise n'a ni l'avantage du volume ni l'attractivité de la différenciation."
    },
    {
      id: "cejm_th6_16",
      themeId: "th6",
      question: "Quelle modalité de croissance caractérise une ESN qui se développe en autofinançant ses nouveaux bureaux et en embauchant 20 techniciens par an ?",
      options: [ "La croissance externe", "La croissance interne (croissance organique)", "La fusion par absorption", "L'alliance capitalistique" ],
      correctAnswer: 1,
      explanation: "La croissance interne repose sur la création de capacités nouvelles par l'entreprise elle-même (recrutements, investissements matériels, R&D propre)."
    },
    {
      id: "cejm_th6_17",
      themeId: "th6",
      question: "Quel avantage stratégique majeur procure la croissance externe (rachat d'un concurrent) par rapport à la croissance interne ?",
      options: [ "Elle ne coûte jamais rien", "Elle procure un gain de temps immédiat, des parts de marché acquises instantanément et l'accès direct aux technologies et clients de la cible", "Elle élimine immédiatement tout impôt", "Elle simplifie les relations humaines" ],
      correctAnswer: 1,
      explanation: "Racheter une entreprise existante permet de franchir les barrières à l'entrée en quelques jours et d'acquérir immédiatement des clients, des brevets et des experts qualifiés."
    },
    {
      id: "cejm_th6_18",
      themeId: "th6",
      question: "Quel risque managérial majeur menace fréquemment la réussite des opérations de fusion-acquisition (croissance externe) ?",
      options: [ "Le choc culturel entre les équipes et les difficultés techniques d'intégration des systèmes d'information", "L'obligation de baisser les salaires de moitié", "Le manque de clients", "L'absence totale de concurrence" ],
      correctAnswer: 0,
      explanation: "Plus de 50% des fusions échouent en raison du choc des cultures d'entreprise, du rejet des nouvelles méthodes par les salariés et de l'incompatibilité des SI."
    },
    {
      id: "cejm_th6_19",
      themeId: "th6",
      question: "Comment nomme-t-on le partenariat entre Cisco et Apple créant des fonctionnalités d'itinérance réseau Wi-Fi optimisées pour iPhone sans qu'aucune des deux entreprises ne rachète l'autre ?",
      options: [ "Une fusion-absorption", "Une croissance conjointe (ou alliance stratégique partenariale)", "Une scission d'entreprise", "Un contrat de travail" ],
      correctAnswer: 1,
      explanation: "L'alliance ou croissance conjointe associe deux entreprises indépendantes qui coopèrent pour mener un projet commun tout en conservant leur autonomie juridique."
    },
    {
      id: "cejm_th6_20",
      themeId: "th6",
      question: "Selon la théorie de l'effet d'expérience, que se passe-t-il pour le coût unitaire de fabrication d'un routeur à chaque fois que la production cumulée totale double ?",
      options: [ "Le coût unitaire augmente de 50%", "Le coût unitaire baisse d'un pourcentage prévisible et régulier grâce à l'apprentissage et aux gains de productivité", "Le coût reste strictement identique", "La qualité du matériel se dégrade" ],
      correctAnswer: 1,
      explanation: "L'effet d'expérience (BCG) démontre que les coûts unitaires diminuent à mesure que l'expérience globale s'accumule (maîtrise des gestes, automatisation, amélioration des procédés)."
    }
  ]
};
