/* ==========================================================================
   CEJM (Culture Économique, Juridique et Managériale) DATABASE
   Conforme STRICTEMENT au Référentiel National BTS & Manuel Foucher Tome Unique (1re & 2e années)
   Intègre la dimension CEJMA (CEJM Appliquée BTS SIO : RGPD, SLA, STAD, Contrats IT, Cloud)
   Structure par Thèmes & Questions Officielles du Bulletin Officiel (BO)
   ========================================================================== */

const CEJM_DATABASE = {
  textbook: "CEJM Tome Unique 1ère et 2e années - Éditions Foucher (Programme National BTS & BTS SIO)",
  
  themes: [
    { 
      id: "all", 
      name: "Tous les thèmes du programme", 
      icon: "📚",
      questions: []
    },
    { 
      id: "th1", 
      name: "Thème 1 : L'intégration de l'entreprise dans son environnement", 
      icon: "🏢",
      questions: [
        { id: "q1_1", title: "Question 1.1 : Les relations de l'entreprise avec son environnement économique" },
        { id: "q1_2", title: "Question 1.2 : Le contrat, sécurisation des relations partenaires" },
        { id: "q1_3", title: "Question 1.3 : Les finalités, parties prenantes et la RSE" }
      ]
    },
    { 
      id: "th2", 
      name: "Thème 2 : La régulation de l'activité économique", 
      icon: "⚖️",
      questions: [
        { id: "q2_1", title: "Question 2.1 : Le rôle de l'État et les politiques économiques" },
        { id: "q2_2", title: "Question 2.2 : La régulation par le droit (concurrence & propriété industrielle)" }
      ]
    },
    { 
      id: "th3", 
      name: "Thème 3 : L'organisation de l'activité de l'entreprise", 
      icon: "⚙️",
      questions: [
        { id: "q3_1", title: "Question 3.1 : Les choix d'organisation et de structures" },
        { id: "q3_2", title: "Question 3.2 : Les facteurs de production et le financement" },
        { id: "q3_3", title: "Question 3.3 : Les formes juridiques et la gouvernance" }
      ]
    },
    { 
      id: "th4", 
      name: "Thème 4 : L'impact du numérique sur la vie de l'entreprise", 
      icon: "💻",
      questions: [
        { id: "q4_1", title: "Question 4.1 : La transformation numérique et les nouveaux modèles d'affaires" },
        { id: "q4_2", title: "Question 4.2 : Le cadre juridique du numérique (RGPD, contrats IT, STAD)" },
        { id: "q4_3", title: "Question 4.3 : Le Système d'Information (SI) et l'impact managérial" }
      ]
    },
    { 
      id: "th5", 
      name: "Thème 5 : Les mutations du travail", 
      icon: "👥",
      questions: [
        { id: "q5_1", title: "Question 5.1 : Les évolutions du marché du travail et formes d'emploi" },
        { id: "q5_2", title: "Question 5.2 : Le cadre juridique du travail (contrat, pouvoirs, rupture)" },
        { id: "q5_3", title: "Question 5.3 : La GEPP, le télétravail, la déconnexion et la QVT" }
      ]
    },
    { 
      id: "th6", 
      name: "Thème 6 : Les choix stratégiques de l'entreprise", 
      icon: "🎯",
      questions: [
        { id: "q6_1", title: "Question 6.1 : Le diagnostic stratégique (VRIN, PESTEL, Porter, SWOT)" },
        { id: "q6_2", title: "Question 6.2 : Les options stratégiques globales et de domaine" },
        { id: "q6_3", title: "Question 6.3 : Les voies et modalités de développement (croissance)" }
      ]
    }
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
          example: "Exemple : « En l'espèce, la société d'infogérance CloudSecure s'était engagée par contrat (SLA) à restaurer le serveur en moins de 4 heures. Or, le serveur est resté indisponible 48h, bloquant l'usine cliente. »"
        },
        {
          num: 3,
          name: "3. La Conclusion (La solution juridique au problème)",
          description: "Répondre explicitement à la question posée dans le sujet en tirant la conséquence logique du rapprochement entre la règle et les faits.",
          formulation: "« Par conséquent... », « Dès lors... », « L'entreprise peut donc valablement exiger... »",
          example: "Exemple : « Par conséquent, l'usine cliente est juridiquement fondée à engager la responsabilité contractuelle de CloudSecure et à demander des dommages et intérêts pour perte d'exploitation. »"
        }
      ]
    },
    tools: [
      {
        name: "Matrice SWOT",
        author: "Albert Humphrey (Stanford)",
        purpose: "Diagnostic stratégique interne & externe global",
        explanation: "• Forces (Interne) : Atouts maîtrisés (ex: brevets logiciels, techniciens certifiés Cisco/Linux).\n• Faiblesses (Interne) : Lacunes internes (ex: manque de trésorerie, dette technique, SI obsolète).\n• Opportunités (Externe) : Facteurs favorables du marché (ex: hausse de la demande en cybersécurité, aides France 2030).\n• Menaces (Externe) : Risques extérieurs (ex: nouvelle réglementation contraignante, cyberattaques, pénurie de composants)."
      },
      {
        name: "Les 5 Forces (+ 1) de Michael Porter",
        author: "Michael Porter (Harvard)",
        purpose: "Évaluer l'intensité concurrentielle et l'attractivité d'un secteur",
        explanation: "1. Rivalité entre concurrents du secteur (guerre des prix, parts de marché).\n2. Pouvoir de négociation des clients (capacité à négocier les tarifs à la baisse).\n3. Pouvoir de négociation des fournisseurs (ex: monopole de Nvidia sur les puces IA).\n4. Menace des nouveaux entrants (barrières à l'entrée : investissements, brevets).\n5. Menace des produits de substitution (ex: Cloud remplaçant les serveurs physiques locaux).\n6. Rôle des pouvoirs publics / Régulateur (normes imposées par l'État/UE, ex: NIS 2)."
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
     RUBRIQUE DÉFINITIONS EXACTES PAR THÈME & QUESTIONS DU RÉFÉRENTIEL OFFICIEL
     ========================================================================== */
  notions: [
    /* ========================================================================
       THÈME 1 : L'INTÉGRATION DE L'ENTREPRISE DANS SON ENVIRONNEMENT
       ======================================================================== */
    // Q1.1 : Relations économiques
    {
      id: "notion_th1_1",
      themeId: "th1",
      questionId: "q1_1",
      term: "Les Agents Économiques & Leurs Échanges",
      source: "Comptabilité nationale & Théorie économique",
      definition: "L'entreprise interagit avec plusieurs catégories d'agents économiques majeurs :\n• **Les Ménages :** fournissent leur force de travail en échange de salaires et consomment les biens/services.\n• **Les Entreprises :** produisent des biens et services marchands.\n• **Les Sociétés Financières (Banques) :** financent l'activité via le crédit et gèrent l'épargne.\n• **Les Administrations Publiques (État, Sécu) :** fournissent des services non marchands et redistribuent les revenus grâce aux impôts et cotisations.",
      example: "Une ESN embauche des techniciens (Ménages), emprunte à la banque pour acheter des serveurs et paye l'impôt sur les sociétés à l'État."
    },
    {
      id: "notion_th1_2",
      themeId: "th1",
      questionId: "q1_1",
      term: "Valeur Ajoutée (VA) & Sa Répartition",
      source: "Comptabilité nationale & Économie d'entreprise",
      definition: "Richesse réelle créée par l'entreprise lors de son processus de production.\n• **Formule :** `Valeur Ajoutée = Chiffre d'Affaires (CA) - Consommations Intermédiaires (CI)`.\n• Les **CI** sont les biens et services détruits ou transformés au cours de la production (électricité, licences logicielles, hébergement).\n• La VA est répartie entre 5 bénéficiaires : Salariés (salaires), État (impôts), Banques (intérêts), Associés (dividendes) et Entreprise (autofinancement).",
      example: "Une ESN facture 150 000 € de prestations (CA) et consomme 50 000 € d'hébergement Cloud et fournitures (CI). Sa VA créée est de 100 000 €."
    },
    {
      id: "notion_th1_3",
      themeId: "th1",
      questionId: "q1_1",
      term: "Asymétrie d'Information (Akerlof & Stiglitz)",
      source: "George Akerlof & Joseph Stiglitz (Prix Nobel d'économie)",
      definition: "Situation où une partie à la transaction détient des informations pertinentes que l'autre ignore :\n• **Sélection adverse (Akerlof - ex-ante) :** l'acheteur ignore la qualité réelle du produit avant d'acheter, ce qui conduit les mauvais produits à chasser les bons ('market for lemons').\n• **Aléa moral (Stiglitz - ex-post) :** une partie prend des risques démesurés après la signature car elle se sait assurée ou protégée contre les conséquences négatives.",
      example: "Un utilisateur connecté clique sur des pièces jointes douteuses sans précaution car il sait que le service informatique sauvegarde tout."
    },

    // Q1.2 : Sécurisation contractuelle
    {
      id: "notion_th1_4",
      themeId: "th1",
      questionId: "q1_2",
      term: "Conditions de Validité du Contrat (Art. 1128 C. civ.)",
      source: "Article 1128 du Code civil (Droit des obligations)",
      definition: "Pour être juridiquement valable, tout contrat exige **3 conditions cumulatives** :\n1. **Le consentement libre et éclairé** des parties (sans vice : erreur, dol ou violence).\n2. **La capacité juridique** de contracter (personne majeure capable ou représentant légal habilité).\n3. **Un contenu licite et certain** (l'objet doit exister, être déterminé ou déterminable, et ne pas violer l'ordre public).\n• Sanction si une condition manque : la **nullité** du contrat (relative ou absolue).",
      example: "Un contrat d'infogérance signé suite à des mensonges délibérés sur les débits réels de la fibre (dol) est frappé de nullité relative."
    },
    {
      id: "notion_th1_5",
      themeId: "th1",
      questionId: "q1_2",
      term: "Inexécution Contractuelle & Sanctions (Art. 1217 C. civ.)",
      source: "Article 1217 du Code civil",
      definition: "Lorsqu'une obligation contractuelle n'est pas exécutée, le créancier dispose de plusieurs remèdes légaux :\n• **Exception d'inexécution :** suspendre sa propre prestation tant que l'autre n'agit pas.\n• **Exécution forcée en nature :** contraindre légalement l'autre à accomplir la prestation.\n• **Réduction du prix :** acceptation d'une prestation imparfaite en diminuant le tarif.\n• **Résolution / Résiliation :** anéantissement du contrat (avec rétroactivité pour la résolution, pour l'avenir pour la résiliation).\n• **Dommages et intérêts :** réparation du dommage subi.\n• **Force majeure :** événement imprévisible, irrésistible et extérieur exonérant le débiteur.",
      example: "Un client refuse de payer son abonnement logiciel tant que le bug bloquant n'est pas corrigé par l'éditeur (exception d'inexécution)."
    },
    {
      id: "notion_th1_6",
      themeId: "th1",
      questionId: "q1_2",
      term: "Responsabilité Contractuelle vs Extracontractuelle",
      source: "Articles 1231-1 et 1240 du Code civil",
      definition: "Deux régimes juridiques de réparation du préjudice :\n• **Responsabilité Contractuelle (Art. 1231-1) :** le dommage résulte de l'inexécution ou du retard d'un contrat valide unissant les parties.\n• **Responsabilité Extracontractuelle / Délictuelle (Art. 1240) :** le dommage est causé à un tiers en dehors de tout contrat.\n• **3 conditions obligatoires :** une Faute (fait générateur), un Préjudice (certain, direct, légitime) et un Lien de causalité direct.",
      example: "Un technicien réseau fait tomber accidentellement un switch sur le pied d'un visiteur dans le hall : responsabilité extracontractuelle."
    },

    // Q1.3 : Finalités, parties prenantes et RSE
    {
      id: "notion_th1_7",
      themeId: "th1",
      questionId: "q1_3",
      term: "Les Finalités de l'Entreprise & La RSE",
      source: "Peter Drucker & R. Edward Freeman (Loi PACTE 2019)",
      definition: "L'entreprise poursuit plusieurs finalités interdépendantes :\n• **Finalité économique (lucrative) :** assurer sa pérennité et générer du profit.\n• **Finalité sociale :** créer des emplois et offrir des conditions de travail valorisantes.\n• **Finalité sociétale / RSE :** intégration volontaire des enjeux sociaux, éthiques et environnementaux (norme ISO 26000).\n• **Loi PACTE (2019) :** permet d'inscrire une 'raison d'être' dans les statuts ou de devenir 'société à mission'.",
      example: "Une entreprise d'hébergement web qui s'engage dans le Green IT en alimentant ses datacenters à 100% avec de l'énergie solaire."
    },
    {
      id: "notion_th1_8",
      themeId: "th1",
      questionId: "q1_3",
      term: "Théorie des Parties Prenantes (Freeman)",
      source: "R. Edward Freeman (Strategic Management: A Stakeholder Approach)",
      definition: "L'entreprise n'est pas responsable uniquement envers ses actionnaires, mais envers l'ensemble des acteurs influençant ou influencés par ses décisions :\n• **Parties prenantes internes :** salariés, dirigeants, représentants du personnel.\n• **Parties prenantes externes :** clients, fournisseurs de matériel, actionnaires, banques, État, collectivités locales, riverains et ONG environnementales.",
      example: "Lors de la fermeture d'un datacenter, l'entreprise doit négocier avec les salariés (internes), les clients hébergés et la mairie (externes)."
    },

    /* ========================================================================
       THÈME 2 : LA RÉGULATION DE L'ACTIVITÉ ÉCONOMIQUE
       ======================================================================== */
    // Q2.1 : Rôle de l'État & Politiques économiques
    {
      id: "notion_th2_1",
      themeId: "th2",
      questionId: "q2_1",
      term: "Les 3 Fonctions Économiques de l'État (Musgrave)",
      source: "Richard Musgrave (Théorie des finances publiques)",
      definition: "L'État intervient dans l'économie selon 3 fonctions fondamentales :\n1. **Fonction d'allocation des ressources :** financer les biens publics et corriger les défaillances du marché (infrastructures, défense, éducation).\n2. **Fonction de redistribution des revenus :** réduire les inégalités sociales par les prélèvements obligatoires et les prestations sociales.\n3. **Fonction de régulation / stabilisation :** amortir les crises économiques grâce aux politiques budgétaire et monétaire.",
      example: "L'État finançant le plan France Très Haut Débit pour équiper les zones rurales en fibre optique illustre la fonction d'allocation."
    },
    {
      id: "notion_th2_2",
      themeId: "th2",
      questionId: "q2_1",
      term: "Défaillances de Marché : Externalités & Biens Publics",
      source: "Arthur Pigou & Paul Samuelson",
      definition: "Situations où le marché seul ne parvient pas à une allocation optimale :\n• **Externalité :** impact positif ou négatif de l'activité économique sur un tiers sans compensation financière (ex négatif : pollution des datacenters ; ex positif : raccordement fibre).\n• **Bien public (ou collectif) :** bien répondant aux principes de **non-rivalité** (la consommation par un individu ne réduit pas celle des autres) et de **non-exclusion** (impossible d'empêcher quiconque d'en profiter, ex: signal GPS, éclairage public).",
      example: "Le réseau mondial de satellites GPS est un bien public gratuit utilisé par tous les équipements informatiques et réseaux."
    },
    {
      id: "notion_th2_3",
      themeId: "th2",
      questionId: "q2_1",
      term: "Politiques Conjoncturelles vs Politiques Structurelles",
      source: "Macroéconomie & Carré magique de Nicolas Kaldor",
      definition: "Deux horizons temporels de l'action publique de l'État :\n• **Politique conjoncturelle (court terme) :** réguler les déséquilibres immédiats selon le carré magique (croissance, plein-emploi, stabilité des prix, commerce extérieur) via l'arme **budgétaire** (impôts, dépenses) et **monétaire** (taux directeurs de la BCE).\n• **Politique structurelle (long terme) :** transformer durablement l'économie (plan France 2030, recherche en IA, transition écologique).",
      example: "La Banque Centrale Européenne relevant ses taux d'intérêt pour stopper l'inflation mène une politique monétaire conjoncturelle."
    },

    // Q2.2 : Régulation par le droit
    {
      id: "notion_th2_4",
      themeId: "th2",
      questionId: "q2_2",
      term: "Régulation de la Concurrence (Art. 101 et 102 TFUE)",
      source: "Autorité de la Concurrence & Droit européen de la concurrence",
      definition: "Règles protégeant le marché et les consommateurs contre 3 pratiques illicites :\n1. **Entente illicite (cartel) :** accord secret entre entreprises rivales pour fixer les prix ou se partager les clients.\n2. **Abus de position dominante :** comportement anticoncurrentiel d'une firme puissante pour asphyxier ses concurrents (ventes liées, prix prédateurs).\n3. **Contrôle des concentrations :** surveillance des fusions-acquisitions pour empêcher la constitution de quasi-monopoles.",
      example: "L'obligation pour Microsoft de dissocier son logiciel Teams de sa suite Office en Europe suite à une enquête pour abus de position dominante."
    },
    {
      id: "notion_th2_5",
      themeId: "th2",
      questionId: "q2_2",
      term: "La Propriété Industrielle (Brevets & Marques)",
      source: "Code de la propriété intellectuelle (INPI)",
      definition: "Protection juridique des innovations techniques et signes distinctifs commerciaux :\n• **Le Brevet :** protège une invention technique nouvelle, inventive et susceptible d'application industrielle pour une durée de **20 ans**.\n• **La Marque :** protège un signe distinctif (nom, logo) pour une durée de **10 ans renouvelable à l'infini**.\n• Sanction en cas d'atteinte : l'action en **contrefaçon** (sanctions civiles et pénales).",
      example: "Un constructeur de serveurs qui dépose un brevet à l'INPI sur un nouveau système de refroidissement liquide pour processeurs."
    },
    {
      id: "notion_th2_6",
      themeId: "th2",
      questionId: "q2_2",
      term: "Les Autorités Administratives Indépendantes (AAI)",
      source: "Droit public économique & Sécurité numérique",
      definition: "Organismes publics dotés de pouvoirs d'enquête et de sanction pour réguler des secteurs stratégiques :\n• **CNIL :** protège la vie privée et les données personnelles (sanctions jusqu'à 20M€ ou 4% du CA mondial).\n• **ARCEP :** régule les télécoms, attribue les fréquences 5G et veille à la neutralité du net.\n• **ANSSI :** cyberdéfense nationale, qualifie les offres Cloud (SecNumCloud) et pilote la directive européenne NIS 2.",
      example: "L'ANSSI certifie les produits de sécurité et veille à l'application de la directive NIS 2 par les opérateurs d'infrastructures critiques."
    },

    /* ========================================================================
       THÈME 3 : L'ORGANISATION DE L'ACTIVITÉ DE L'ENTREPRISE
       ======================================================================== */
    // Q3.1 : Choix d'organisation et structures
    {
      id: "notion_th3_1",
      themeId: "th3",
      questionId: "q3_1",
      term: "Les Structures Organisationnelles (Fayol, Divisionnelle, Matricielle)",
      source: "Henri Fayol & Théorie des organisations",
      definition: "Modes de répartition des pouvoirs, des tâches et des responsabilités :\n• **Structure hiérarchique (Fayol) :** principe d'**unité de commandement** (un seul chef par salarié). Claire et disciplinée mais rigide et lente.\n• **Structure divisionnelle :** organisation découpée par produits, clients ou zones géographiques autonomes.\n• **Structure matricielle :** double dépendance croisant des responsables métiers (technique) et des chefs de projets. Très souple mais risque de conflits.",
      example: "Dans une société de conseil IT, un technicien réseau dépend à la fois du Responsable Infrastructure et du Chef de projet client (matricielle)."
    },
    {
      id: "notion_th3_2",
      themeId: "th3",
      questionId: "q3_1",
      term: "Les 5 Composantes de l'Organisation (Mintzberg)",
      source: "Henry Mintzberg (Structure et dynamique des organisations)",
      definition: "Mintzberg schématise toute organisation en 5 parties complémentaires :\n1. **Sommet stratégique :** dirigeants fixant la vision et la stratégie globale.\n2. **Ligne hiérarchique :** cadres intermédiaires transmettant les ordres et assurant le suivi.\n3. **Centre opérationnel :** exécutants produisant directement le bien ou service (techniciens, développeurs).\n4. **Technostructure :** experts concevant et standardisant les méthodes de travail (qualité, architectes SI, RH).\n5. **Support logistique :** services internes d'aide indirecte (service juridique, entretien, paie).",
      example: "L'architecte réseau qui rédige les guides de configuration Cisco sans intervenir lui-même sur le terrain fait partie de la technostructure."
    },
    {
      id: "notion_th3_3",
      themeId: "th3",
      questionId: "q3_1",
      term: "Les 6 Mécanismes de Coordination (Mintzberg)",
      source: "Henry Mintzberg",
      definition: "Moyens par lesquels l'organisation coordonne le travail divisé entre ses membres :\n1. **Ajustement mutuel :** communication informelle directe entre pairs.\n2. **Supervision directe :** ordres d'un chef hiérarchique.\n3. **Standardisation des procédés :** fiches de procédures opératoires et playbooks.\n4. **Standardisation des résultats :** objectifs chiffrés à atteindre (KPI, taux de disponibilité 99,9%).\n5. **Standardisation des qualifications :** compétences acquises par les diplômes et certifications.\n6. **Standardisation des normes :** culture et valeurs communes partagées.",
      example: "Exiger qu'un ingénieur détienne la certification Cisco CCNP avant d'administrer le cœur de réseau illustre la standardisation des qualifications."
    },
    {
      id: "notion_th3_4",
      themeId: "th3",
      questionId: "q3_1",
      term: "Les 4 Styles de Direction de Likert",
      source: "Rensis Likert (Psychologie managériale)",
      definition: "Typologie des comportements de commandement des managers :\n1. **Autoritaire exploiteur :** décisions unilatérales, management par la peur et la sanction, communication descendante.\n2. **Paternaliste :** autorité bienveillante, motivation par les primes, mais centralisation forte.\n3. **Consultatif :** les employés sont consultés pour avis avant la décision finale du chef.\n4. **Participatif :** décision collective, travail en équipe autonome, confiance totale (méthodes Agiles / Scrum).",
      example: "Une équipe DevOps fonctionnant avec des réunions quotidiennes (Daily Stand-up) où chacun vote les priorités applique le style participatif."
    },

    // Q3.2 : Facteurs de production & Financement
    {
      id: "notion_th3_5",
      themeId: "th3",
      questionId: "q3_2",
      term: "Facteurs de Production & Productivité",
      source: "Économie de la production",
      definition: "Ressources combinées par l'entreprise pour produire des biens ou services :\n• **Facteur Travail :** quantité et qualification des heures de travail fournies par les salariés.\n• **Facteur Capital :** capital technique fixe (bâtiments, serveurs, routeurs amortissables) et capital circulant (consommations intermédiaires détruites).\n• **Substitution capital/travail :** remplacement de main-d'œuvre humaine par des machines ou des logiciels pour accroître la **productivité**.",
      example: "Une banque remplace la saisie manuelle des chèques par un logiciel d'IA de reconnaissance optique (substitution capital/travail)."
    },
    {
      id: "notion_th3_6",
      themeId: "th3",
      questionId: "q3_2",
      term: "Les Modes de Financement de l'Entreprise",
      source: "Finance d'entreprise & Gestion financière",
      definition: "Moyens par lesquels l'entreprise finance ses investissements matériels et immatériels :\n• **Financement interne (Autofinancement) :** bénéfices non distribués conservés en réserves + dotations aux amortissements.\n• **Financement externe indirect (intermédié) :** emprunt bancaire classique, crédit-bail (leasing).\n• **Financement externe direct (désintermédié) :** émission d'actions (augmentation de capital) ou d'obligations (dette sur les marchés financiers), crowdfunding.",
      example: "Une PME informatique finance ses nouveaux ordinateurs portables via un contrat de crédit-bail (leasing) sur 36 mois."
    },

    // Q3.3 : Formes juridiques et gouvernance
    {
      id: "notion_th3_7",
      themeId: "th3",
      questionId: "q3_3",
      term: "Les Formes Juridiques de l'Entreprise (SARL, SAS, SA)",
      source: "Code de commerce (Droit des sociétés)",
      definition: "Cadre juridique déterminant la responsabilité des associés et le fonctionnement sociétaire :\n• **Entreprise Individuelle (EI) :** pas de personne morale distincte, patrimoine professionnel séparé depuis 2022.\n• **SARL (Société à Responsabilité Limitée) :** responsabilité limitée aux apports, fonctionnement strict et protecteur fixé par la loi.\n• **SAS (Société par Actions Simplifiée) :** grande liberté statutaire offerte aux fondateurs, très prisée des start-ups technologiques.\n• **SA (Société Anonyme) :** réservée aux grandes entreprises cotées en bourse, gouvernance lourde (conseil d'administration).",
      example: "Des créateurs de start-up en cybersécurité choisissent la SAS pour fixer librement dans les statuts les droits de vote de chaque investisseur."
    },
    {
      id: "notion_th3_8",
      themeId: "th3",
      questionId: "q3_3",
      term: "Gouvernance Actionnariale vs Gouvernance Partenariale",
      source: "Théorie de la gouvernance d'entreprise",
      definition: "Deux visions opposées de l'orientation et du contrôle du pouvoir dans l'entreprise :\n• **Gouvernance actionnariale (Shareholder value) :** l'entreprise est gérée exclusivement pour maximiser la rentabilité financière des actionnaires (cours de bourse, dividendes).\n• **Gouvernance partenariale (Stakeholder value) :** le pouvoir vise à concilier les intérêts de toutes les parties prenantes (salariés, clients, environnement, fournisseurs).",
      example: "Intégrer des représentants des salariés au conseil d'administration relève d'une gouvernance partenariale."
    },

    /* ========================================================================
       THÈME 4 : L'IMPACT DU NUMÉRIQUE SUR LA VIE DE L'ENTREPRISE (CEJMA SIO)
       ======================================================================== */
    // Q4.1 : Transformation numérique et modèles
    {
      id: "notion_th4_1",
      themeId: "th4",
      questionId: "q4_1",
      term: "Économie de Plateforme & Marchés Bifaces",
      source: "Jean Tirole (Prix Nobel d'économie) & Économie numérique",
      definition: "• **Plateforme numérique :** intermédiaire technologique connectant directement deux ou plusieurs groupes d'utilisateurs interdépendants (offreurs et demandeurs).\n• **Effets de réseau :** la valeur du service augmente avec le nombre d'utilisateurs inscrits (directs : messageries ; indirects : marketplaces attirant vendeurs et acheteurs).",
      example: "Des plateformes comme Uber, Airbnb ou AWS créent un écosystème où la valeur grandit de façon exponentielle avec les inscrits."
    },
    {
      id: "notion_th4_2",
      themeId: "th4",
      questionId: "q4_1",
      term: "Modèles d'Affaires du Numérique : SaaS & Freemium",
      source: "Modèles économiques du Cloud",
      definition: "Stratégies de monétisation adaptées aux services dématérialisés :\n• **Modèle SaaS (Software as a Service) :** le logiciel est hébergé dans le Cloud, accessible en ligne et payé par un abonnement récurrent mensuel/annuel par utilisateur.\n• **Modèle Freemium :** version de base gratuite attirant une audience massive, combinée à des options Premium avancées et payantes.",
      example: "Microsoft 365 fonctionne sur un abonnement SaaS, tandis que GitHub propose une version Freemium gratuite pour les étudiants."
    },

    // Q4.2 : Cadre juridique du numérique (RGPD, contrats IT, STAD)
    {
      id: "notion_th4_3",
      themeId: "th4",
      questionId: "q4_2",
      term: "Principes Clés du RGPD (Règlement UE 2016/679)",
      source: "Règlement Général sur la Protection des Données",
      definition: "Cadre européen obligatoire régissant le traitement des données à caractère personnel :\n• **Licéité, loyauté et transparence :** base légale claire ou consentement explicite de la personne.\n• **Minimisation des données :** ne collecter STRICTEMENT que ce qui est nécessaire à la finalité.\n• **Notification CNIL sous 72h :** obligation d'alerter l'autorité de contrôle en cas de violation de données présentant un risque.\n• **DPO (Data Protection Officer) :** pilote et contrôle la conformité interne.\n• **Privacy by Design / Default :** intégration de la sécurité dès la conception technique.",
      example: "Une entreprise subissant un rançongiciel avec fuite de la base de données clients doit notifier la CNIL dans un délai maximal de 72h."
    },
    {
      id: "notion_th4_4",
      themeId: "th4",
      questionId: "q4_2",
      term: "Droits des Personnes selon le RGPD (Articles 15 à 21)",
      source: "Articles 15 à 21 du RGPD",
      definition: "Droits fondamentaux accordés à chaque citoyen européen sur ses données personnelles :\n• **Droit d'accès et de rectification :** consulter ses données et exiger la correction d'erreurs.\n• **Droit à l'effacement (« Droit à l'oubli ») :** exiger la suppression définitive de ses données.\n• **Droit à la portabilité (Art. 20) :** récupérer ses données dans un format informatique ouvert et structuré pour changer de prestataire sans perte.\n• **Droit d'opposition :** refuser l'exploitation de ses données pour de la prospection commerciale.",
      example: "Un utilisateur demande à un réseau social d'exporter l'ensemble de ses messages et photos sous forme d'un fichier JSON ou CSV."
    },
    {
      id: "notion_th4_5",
      themeId: "th4",
      questionId: "q4_2",
      term: "Le Contrat Électronique (Art. 1127-1 et 1127-2 C. civ.)",
      source: "Code civil (Droit du commerce électronique)",
      definition: "Règles encadrant la conclusion d'un contrat par voie électronique :\n• **Obligation d'information précontractuelle :** caractéristiques techniques du service, étapes de conclusion, archivage.\n• **Principe du 'Double-clic' (Art. 1127-2) :** 1er clic pour visualiser le récapitulatif de la commande et corriger les erreurs éventuelles ; 2e clic pour confirmer définitivement la commande et s'engager à payer.",
      example: "Sur un site de vente de licences logicielles, l'acheteur doit obligatoirement valider un écran récapitulatif avant de payer."
    },
    {
      id: "notion_th4_6",
      themeId: "th4",
      questionId: "q4_2",
      term: "Propriété Intellectuelle du Logiciel & Droits du Salarié",
      source: "Article L. 113-9 du Code de la propriété intellectuelle (CPI)",
      definition: "Régime juridique des créations informatiques :\n• Le logiciel est protégé par le **droit d'auteur** (code source et binaire) dès sa création originale.\n• **Exception légale pour les salariés (Art. L. 113-9) :** sauf clause statutaire contraire, les droits patrimoniaux sur les logiciels créés par un salarié dans l'exercice de ses fonctions sont dévolus **automatiquement à l'employeur**.",
      example: "Un développeur salarié conçoit un script d'automatisation réseau : seul son employeur a le droit de le breveter, vendre ou licencier."
    },
    {
      id: "notion_th4_7",
      themeId: "th4",
      questionId: "q4_2",
      term: "Infractions aux STAD (Articles 323-1 et s. Code pénal)",
      source: "Code pénal (Loi Godfrain sur la cybercriminalité)",
      definition: "Répression pénale des attaques contre les Systèmes de Traitement Automatisé de Données :\n• **Accès ou maintien frauduleux (Art. 323-1) :** s'introduire ou rester dans un serveur sans droit (jusqu'à 3 ans de prison et 100 000 € d'amende).\n• **Entrave au fonctionnement (Art. 323-2) :** paralyser un système (attaque DDoS, rançongiciel).\n• **Altération frauduleuse de données (Art. 323-3) :** modifier ou effacer des données.",
      example: "Lancer une attaque par déni de service (DDoS) pour bloquer les serveurs d'une administration constitue une entrave à un STAD."
    },

    // Q4.3 : Système d'Information & Management
    {
      id: "notion_th4_8",
      themeId: "th4",
      questionId: "q4_3",
      term: "Système d'Information (SI) & ERP/PGI",
      source: "Management des Systèmes d'Information",
      definition: "• **Système d'Information (SI) :** ensemble organisé de ressources humaines, logicielles, matérielles et réseau assurant 4 fonctions : **Collecter, Stocker, Traiter et Diffuser l'information**.\n• **ERP / PGI (Progiciel de Gestion Intégré) :** logiciel d'entreprise unifié s'appuyant sur une **base de données unique** pour synchroniser tous les métiers (comptabilité, RH, ventes, stocks).",
      example: "Lors de la saisie d'un bon de commande, l'ERP met à jour immédiatement le stock, édite la facture et avertit le service logistique."
    },

    /* ========================================================================
       THÈME 5 : LES MUTATIONS DU TRAVAIL
       ======================================================================== */
    // Q5.1 : Évolutions du marché du travail
    {
      id: "notion_th5_1",
      themeId: "th5",
      questionId: "q5_1",
      term: "Mutations du Marché du Travail & Nouvelles Formes d'Emploi",
      source: "Économie du travail & Droit social",
      definition: "Transformations structurelles de l'emploi contemporain :\n• **Flexibilité de l'emploi :** recherche d'adaptabilité via des contrats courts (CDD, intérim) et des horaires variables.\n• **Ubérisation & Plateformisation :** essor du travailleur indépendant sous statut d'auto-entrepreneur, posant le défi de la requalification en contrat de travail face à la fausse indépendance.",
      example: "Un livreur dépendant d'une application d'algorithmes exigeant des horaires fixes et fixant les prix peut obtenir la requalification en salarié."
    },

    // Q5.2 : Cadre juridique du travail
    {
      id: "notion_th5_2",
      themeId: "th5",
      questionId: "q5_2",
      term: "Le Contrat de Travail & Lien de Subordination",
      source: "Cour de cassation (Arrêt Société générale 1996) & Code du travail",
      definition: "Le contrat de travail est caractérisé par **3 éléments constitutifs obligatoires** :\n1. Une **prestation de travail** manuelle ou intellectuelle.\n2. Une **rémunération** en contrepartie (salaire).\n3. Un **lien de subordination juridique** (critère déterminant) : l'employeur détient le pouvoir de donner des ordres, d'en contrôler l'exécution et de sanctionner les manquements.\n• Le **CDI** est la forme normale d'emploi ; le **CDD** est strictement dérogatoire.",
      example: "Un prestataire informatique intégré à l'équipe cliente, soumis aux horaires de l'entreprise et recevant des ordres directs est subordonné."
    },
    {
      id: "notion_th5_3",
      themeId: "th5",
      questionId: "q5_2",
      term: "Les 3 Pouvoirs de l'Employeur",
      source: "Code du travail & Jurisprudence sociale",
      definition: "Prérogatives managériales et juridiques reconnues au chef d'entreprise :\n• **Pouvoir de direction :** organiser l'activité, fixer les objectifs et répartir les tâches.\n• **Pouvoir réglementaire :** rédiger le **Règlement Intérieur** (obligatoire dès 50 salariés), fixant les règles d'hygiène, de sécurité et la charte informatique.\n• **Pouvoir disciplinaire :** sanctionner les fautes (avertissement, blâme, mise à pied, licenciement). **Les sanctions pécuniaires (amendes sur salaire) sont formellement interdites**.",
      example: "Un employeur ne peut pas retenir 50 € sur le salaire d'un technicien arrivé en retard : cette amende financière est nulle et illégale."
    },
    {
      id: "notion_th5_4",
      themeId: "th5",
      questionId: "q5_2",
      term: "Modes de Rupture du Contrat de Travail",
      source: "Articles L. 1231-1 et suivants du Code du travail",
      definition: "Manières légales de mettre fin à un CDI :\n• **Démission :** décision unilatérale, libre, claire et non équivoque du salarié.\n• **Rupture conventionnelle :** accord amiable bilatéral homologué par la DREETS ouvrant droit aux allocations chômage et à une indemnité spécifique.\n• **Licenciement personnel :** exige une **Cause Réelle et Sérieuse** (faute simple, grave ou lourde, inaptitude médicale).\n• **Licenciement économique :** motivé par des difficultés économiques, mutations technologiques ou sauvegarde de la compétitivité.",
      example: "L'employeur et un administrateur réseau s'entendent pour se séparer à l'amiable en signant une rupture conventionnelle homologuée."
    },

    // Q5.3 : GEPP, télétravail, déconnexion et QVT
    {
      id: "notion_th5_5",
      themeId: "th5",
      questionId: "q5_3",
      term: "Télétravail, Égalité & Droit à la Déconnexion",
      source: "Article L. 1222-9 du Code du travail & Accord National Interprofessionnel",
      definition: "Régulation du travail à distance et protection de la santé mentale :\n• **Mise en place :** par accord collectif, charte unilatérale ou accord mutuel.\n• **Égalité de traitement :** le télétravailleur bénéficie des mêmes droits que les salariés sur site (tickets restaurant, accès à la formation, droits collectifs).\n• **Droit à la déconnexion :** interdiction de contraindre le salarié à répondre à des emails ou appels professionnels en dehors de ses horaires de travail.",
      example: "Un serveur de messagerie professionnelle configuré pour bloquer les notifications entre 20h et 7h30 protège le droit à la déconnexion."
    },
    {
      id: "notion_th5_6",
      themeId: "th5",
      questionId: "q5_3",
      term: "GEPP (Gestion des Emplois et des Parcours Professionnels)",
      source: "Code du travail (ex-GPEC)",
      definition: "Démarche prospective de gestion des ressources humaines :\n• Permet à l'entreprise d'anticiper les évolutions économiques, technologiques et démographiques (notamment l'impact de l'IA et de l'automatisation).\n• Vise à adapter les compétences des salariés via la formation continue et les mobilités pour éviter les licenciements pour inadaptation.",
      example: "Une entreprise formant ses techniciens Helpdesk aux métiers d'analystes cybersécurité SOC applique un plan de GEPP."
    },
    {
      id: "notion_th5_7",
      themeId: "th5",
      questionId: "q5_3",
      term: "Cybersurveillance & Vie Privée au Travail",
      source: "Cour de cassation (Arrêt Nikon 2001) & CNIL",
      definition: "Encadrement strict de la surveillance informatique par l'employeur :\n• L'employeur peut contrôler les outils informatiques pour des motifs légitimes de sécurité, sous réserve d'avoir **informé préalablement les salariés et le CSE**.\n• **Principe de proportionnalité :** la surveillance permanente (keylogger, caméra en continu) est illicite.\n• **Secret des correspondances privées :** les courriels identifiés comme 'Personnel' ne peuvent être ouverts par l'employeur sans la présence du salarié.",
      example: "L'employeur ne peut pas ouvrir un dossier sur le bureau du PC intitulé 'Personnel - Photos de famille' sans avertir le salarié."
    },

    /* ========================================================================
       THÈME 6 : LES CHOIX STRATÉGIQUES DE L'ENTREPRISE
       ======================================================================== */
    // Q6.1 : Diagnostic stratégique
    {
      id: "notion_th6_1",
      themeId: "th6",
      questionId: "q6_1",
      term: "Diagnostic Interne & Modèle VRIN (Penrose & Barney)",
      source: "Edith Penrose (RBV) & Jay Barney",
      definition: "Analyse des forces et faiblesses internes de l'entreprise pour fonder un avantage concurrentiel soutenable :\n• **Ressources :** tangibles (serveurs, trésorerie) et intangibles (brevets, marque, savoir-faire).\n• **Compétences fondamentales (Hamel & Prahalad) :** savoir-faire organisationnel distinctif difficile à copier.\n• **Critères VRIN :** une ressource confère un avantage concurrentiel durable si elle est **Valeureuse**, **Rare**, **Inimitable** et **Non-substituable**.",
      example: "Une équipe d'ingénieurs détenant une expertise unique en cryptographie post-quantique constitue une ressource VRIN créant un avantage concurrentiel."
    },
    {
      id: "notion_th6_2",
      themeId: "th6",
      questionId: "q6_1",
      term: "La Chaîne de Valeur de Michael Porter",
      source: "Michael Porter (Competitive Advantage)",
      definition: "Découpage de l'organisation en activités interdépendantes pour identifier les sources de valeur :\n• **Activités principales :** Logistique entrante, Production, Logistique sortante, Commercialisation & Vente, Services après-vente (support/SLA).\n• **Activités de soutien :** Infrastructure de la firme, Gestion des RH, Recherche & Développement (R&D), Achats et approvisionnements.",
      example: "Offrir un support technique SLA 24h/24 en 15 minutes d'intervention crée un avantage concurrentiel sur l'activité principale de service après-vente."
    },
    {
      id: "notion_th6_3",
      themeId: "th6",
      questionId: "q6_1",
      term: "Diagnostic Externe : PESTEL & 5 Forces de Porter",
      source: "Analyse macro & micro-environnementale",
      definition: "Évaluation des opportunités et menaces de l'environnement de marché :\n• **Macro-environnement (PESTEL) :** Politique, Économique, Socioculturel, Technologique, Écologique, Légal.\n• **Micro-environnement (5 forces + 1 de Porter) :** Rivalité des concurrents directs, pouvoir des clients, pouvoir des fournisseurs, menace des nouveaux entrants, menace des produits de substitution (+ rôle de l'État).",
      example: "Le Cloud public représente une menace de substitution majeure pour les vendeurs de serveurs matériels sur site."
    },

    // Q6.2 : Options stratégiques globales et de domaine
    {
      id: "notion_th6_4",
      themeId: "th6",
      questionId: "q6_2",
      term: "Stratégies Globales : Spécialisation vs Diversification",
      source: "Igor Ansoff (Matrice Produits/Marchés)",
      definition: "Orientations fondamentales au niveau de l'entreprise tout entière (Corporate Strategy) :\n• **Spécialisation :** concentrer toutes ses forces sur un seul métier pour y acquérir une grande maîtrise et des économies d'échelle (effet d'expérience).\n• **Diversification :** s'implanter sur de nouveaux métiers pour répartir les risques et exploiter des synergies (liée ou conglomérale).",
      example: "Cisco s'est d'abord spécialisé dans les routeurs, avant de se diversifier dans la cybersécurité (Splunk) et la visioconférence (Webex)."
    },
    {
      id: "notion_th6_5",
      themeId: "th6",
      questionId: "q6_2",
      term: "Intégration (« Faire ») vs Externalisation (« Faire-faire »)",
      source: "Ronald Coase & Oliver Williamson (Théorie des coûts de transaction)",
      definition: "Arbitrage entre réaliser une tâche en interne ou la confier à un prestataire extérieur :\n• **Intégration :** faire soi-même pour garder le contrôle technologique, préserver ses secrets et éviter la dépendance.\n• **Externalisation (Outsourcing / Infogérance) :** confier une activité non essentielle à un tiers spécialisé pour transformer des coûts fixes en coûts variables et se recentrer sur son cœur de métier.",
      example: "Un hôpital externalise l'hébergement de ses données de santé auprès d'un opérateur Cloud certifié HDS."
    },
    {
      id: "notion_th6_6",
      themeId: "th6",
      questionId: "q6_2",
      term: "Les 3 Stratégies Génériques de Michael Porter",
      source: "Michael Porter (Competitive Strategy)",
      definition: "Options stratégiques au niveau d'un Domaine d'Activité Stratégique (DAS) :\n1. **Domination par les coûts :** proposer les prix les plus bas grâce aux économies d'échelle et aux volumes (ex: Free, OVHcloud).\n2. **Différenciation :** proposer une offre perçue comme unique et supérieure (sécurité, prestige) justifiant un surprix (ex: Apple, Cisco).\n3. **Focalisation (Niche) :** s'adresser à un micromarché très étroit avec une offre hyperspécialisée sur-mesure.",
      example: "Une entreprise vendant des ordinateurs blindés étanches uniquement aux forces sous-marines applique une stratégie de focalisation."
    },

    // Q6.3 : Voies et modalités de développement
    {
      id: "notion_th6_7",
      themeId: "th6",
      questionId: "q6_3",
      term: "Modalités de Croissance : Interne, Externe, Conjointe",
      source: "Développement et croissance d'entreprise",
      definition: "Manières par lesquelles l'entreprise accroît sa taille et ses parts de marché :\n• **Croissance interne (organique) :** développement par ses propres moyens (investissements, embauches). Sûre mais lente.\n• **Croissance externe :** rachat ou fusion d'entreprises concurrentes ou complémentaires. Gain de temps immédiat mais coût financier et risque de choc culturel.\n• **Croissance conjointe (partenariale) :** alliances stratégiques, joint-ventures ou franchises entre entreprises indépendantes.",
      example: "Microsoft rachetant GitHub illustre une croissance externe pour acquérir immédiatement une communauté de 100 millions de développeurs."
    },
    {
      id: "notion_th6_8",
      themeId: "th6",
      questionId: "q6_3",
      term: "Économies d'Échelle & Effet d'Expérience (BCG)",
      source: "Boston Consulting Group (BCG)",
      definition: "Mécanismes de baisse des coûts de revient unitaires :\n• **Économies d'échelle :** réduction du coût unitaire de production permise par l'augmentation des volumes, amortissant les coûts fixes.\n• **Effet d'expérience :** diminution systématique du coût unitaire chaque fois que la production cumulée double, grâce aux gains de productivité et à l'apprentissage des collaborateurs.",
      example: "Un hébergeur Cloud géant comme AWS réduit considérablement son coût par Go de stockage en commandant des millions de disques durs."
    }
  ],

  /* ==========================================================================
     FLASHCARDS HAUT DE GAMME (3 PAR THÈME = 18 FLASHCARDS RECOMMANDÉES)
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
      title: "Les 3 Fonctions Économiques de l'État (Musgrave)",
      front: "Quelles sont les 3 fonctions de l'État définies par Richard Musgrave ?",
      back: "1. Allocation : Financer les biens collectifs et corriger les défaillances de marché.\n2. Redistribution : Réduire les inégalités via les impôts et aides sociales.\n3. Régulation / Stabilisation : Lutter contre les crises via les politiques budgétaire et monétaire."
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
     Strictement alignées sur les questions du référentiel national BTS SIO
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
      explanation: "L'électricité consommée est un bien détruit lors du processus de production : c'est une Consommation Intermédiaire. Les salaires et impôts font partie de la répartition de la Valeur Ajoutée."
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
      explanation: "Selon l'article 1218 du Code civil, la force majeure réunit trois conditions cumulatives : un événement imprévisible lors de la conclusion du contrat, irrésistible dans son exécution, et extérieur au débiteur."
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
      explanation: "Pour obtenir réparation (Art. 1240), la victime doit prouver : 1. Un fait générateur (faute ou fait des choses) ; 2. Un dommage certain et direct ; 3. Le lien de causalité direct."
    },
    {
      id: "cejm_th1_q12",
      themeId: "th1",
      question: "Selon George Akerlof (théorie des 'lemons'), qu'est-ce que la sélection adverse sur un marché ?",
      options: [ "L'augmentation des prix par entente entre distributeurs", "La disparition des produits de bonne qualité provoquée par l'asymétrie d'information avant la transaction", "L'embauche exclusive de candidats certifiés Cisco", "La faillite des entreprises trop petites" ],
      correctAnswer: 1,
      explanation: "La sélection adverse se produit avant la signature du contrat : ignorant la qualité réelle du produit, l'acheteur refuse de payer le prix fort, ce qui chasse les bons produits du marché."
    },
    {
      id: "cejm_th1_q13",
      themeId: "th1",
      question: "Un utilisateur connecté au réseau d'entreprise clique sur un lien suspect sans vérifier car il sait que l'administrateur système sauvegarde tout quotidiennement. De quoi s'agit-il en économie ?",
      options: [ "D'une sélection adverse", "D'un aléa moral (Joseph Stiglitz)", "D'une externalité de réseau", "D'un abus de monopole" ],
      correctAnswer: 1,
      explanation: "L'aléa moral survient après la conclusion d'un accord : une personne se sachant couverte contre un risque modifie son comportement et devient plus négligente."
    },
    {
      id: "cejm_th1_q14",
      themeId: "th1",
      question: "Selon Milton Friedman, quelle est la finalité première de l'entreprise privée dans une économie libérale ?",
      options: [ "Créer du lien social", "Maximiser le profit pour les actionnaires dans le respect des règles du jeu", "Fournir des services gratuits à l'État", "Éliminer tous ses concurrents" ],
      correctAnswer: 1,
      explanation: "Pour la vision actionnariale de Milton Friedman, la seule responsabilité sociale de l'entreprise est d'accroître ses profits au bénéfice de ses actionnaires."
    },
    {
      id: "cejm_th1_q15",
      themeId: "th1",
      question: "Selon la théorie des parties prenantes de Freeman, parmi les acteurs suivants, lequel est une partie prenante interne ?",
      options: [ "Le client de la banque", "Le représentant syndical du personnel", "Le fournisseur de routeurs", "La mairie de la commune" ],
      correctAnswer: 1,
      explanation: "Les salariés, dirigeants et représentants du personnel font partie de l'organisation : ce sont des parties prenantes internes."
    },
    {
      id: "cejm_th1_q16",
      themeId: "th1",
      question: "Qu'est-ce que la démarche RSE (Responsabilité Sociétale des Entreprises) ?",
      options: [ "Une obligation de distribuer 50% des bénéfices aux pauvres", "L'intégration volontaire de préoccupations sociales et écologiques aux activités commerciales de l'entreprise", "Le renouvellement annuel de tous les PC", "Un règlement de discipline interne" ],
      correctAnswer: 1,
      explanation: "La RSE est la contribution des entreprises aux enjeux du développement durable (social, environnemental, économique) auprès de ses parties prenantes."
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
      explanation: "La résolution anéantit rétroactivement le contrat (on remet les parties dans l'état initial, ex: vente). La résiliation opère pour l'avenir sans rétroactivité (contrats successifs comme un abonnement)."
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
       THÈME 2 : LA RÉGULATION DE L'ACTIVITÉ ÉCONOMIQUE (20 Q)
       ======================================================================== */
    {
      id: "cejm_th2_1",
      themeId: "th2",
      question: "Selon Richard Musgrave, quelle fonction économique de l'État consiste à financer les infrastructures de télécommunications et les biens publics ?",
      options: [ "La fonction de redistribution", "La fonction d'allocation des ressources", "La fonction de stabilisation monétaire", "La fonction de répression pénale" ],
      correctAnswer: 1,
      explanation: "La fonction d'allocation des ressources concerne l'intervention de l'État pour fournir les biens collectifs et financer les infrastructures que le marché seul ne produirait pas."
    },
    {
      id: "cejm_th2_2",
      themeId: "th2",
      question: "L'implantation d'un datacenter dégageant une forte chaleur dans l'atmosphère sans que les voisins soient indemnisés constitue en économie :",
      options: [ "Un bien collectif pur", "Une externalité négative (Arthur Pigou)", "Un aléa moral", "Une économie d'échelle" ],
      correctAnswer: 1,
      explanation: "Une externalité négative est une nuisance causée par un acteur économique à des tiers sans compensation financière marchande."
    },
    {
      id: "cejm_th2_3",
      themeId: "th2",
      question: "Quelles sont les deux caractéristiques d'un 'bien public' (bien collectif) au sens de Paul Samuelson ?",
      options: [ "Rentable et privé", "Non-rivalité et non-exclusion", "Payant et réservé aux entreprises", "Rare et amortissable" ],
      correctAnswer: 1,
      explanation: "Un bien public se caractérise par la non-rivalité (la consommation par l'un ne réduit pas celle des autres) et la non-exclusion (impossible d'empêcher quiconque d'en profiter, ex: signal GPS)."
    },
    {
      id: "cejm_th2_4",
      themeId: "th2",
      question: "Quels sont les 4 sommets du 'Carré magique' de Nicolas Kaldor représentant les objectifs de la politique conjoncturelle ?",
      options: [ "Production, Impôts, Exportations, Dividendes", "Croissance du PIB, Plein-emploi, Stabilité des prix, Équilibre extérieur", "Taux de change, Taux d'intérêt, Dette, Épargne", "Investissement, Consommation, Dépense publique, R&D" ],
      correctAnswer: 1,
      explanation: "Le carré magique de Kaldor résume la santé macroéconomique : 1. Croissance économique ; 2. Plein-emploi ; 3. Stabilité des prix (faible inflation) ; 4. Équilibre du commerce extérieur."
    },
    {
      id: "cejm_th2_5",
      themeId: "th2",
      question: "Quelle est la différence entre politique conjoncturelle et politique structurelle ?",
      options: [ "La conjoncturelle agit à court terme sur les déséquilibres, la structurelle transforme durablement l'économie à long terme", "La conjoncturelle est menée par les maires, la structurelle par l'UE", "La conjoncturelle concerne l'informatique, la structurelle l'agriculture", "Il n'y a aucune différence" ],
      correctAnswer: 0,
      explanation: "La politique conjoncturelle agit à court terme (1 à 2 ans) pour stabiliser l'économie ; la politique structurelle transforme les structures profondes (recherche, infrastructures, formation) à long terme."
    },
    {
      id: "cejm_th2_6",
      themeId: "th2",
      question: "Quel instrument la Banque Centrale Européenne (BCE) manipule-t-elle pour réguler l'inflation dans la zone euro ?",
      options: [ "Le taux de TVA", "Les taux d'intérêt directeurs", "Le salaire minimum (SMIC)", "Le budget du ministère de l'Économie" ],
      correctAnswer: 1,
      explanation: "La BCE pilote la politique monétaire par ses taux directeurs, renchérissant ou allégeant le coût du crédit pour maintenir l'inflation autour de 2%."
    },
    {
      id: "cejm_th2_7",
      themeId: "th2",
      question: "Lorsque la Banque Centrale augmente ses taux directeurs pour lutter contre l'inflation, quel impact observe-t-on sur l'économie ?",
      options: [ "Le crédit devient plus cher, ce qui freine la consommation et les investissements", "Tous les emprunts deviennent gratuits", "Les entreprises embauchent massivement", "Le Chiffre d'Affaires de l'État baisse immédiatement" ],
      correctAnswer: 0,
      explanation: "Une hausse des taux directeurs renchérit le coût du crédit, ce qui ralentit la demande globale et calme la hausse des prix."
    },
    {
      id: "cejm_th2_8",
      themeId: "th2",
      question: "Le plan national 'France 2030' finançant la filière française des semi-conducteurs et du Cloud souverain relève de :",
      options: [ "La politique budgétaire conjoncturelle", "La politique industrielle structurelle", "La politique monétaire de la BCE", "La politique de rigueur salariale" ],
      correctAnswer: 1,
      explanation: "Investir massivement sur le long terme dans des filières technologiques stratégiques d'avenir est l'archétype de la politique industrielle structurelle."
    },
    {
      id: "cejm_th2_9",
      themeId: "th2",
      question: "En vertu de l'article 101 du TFUE, qu'est-ce qu'une 'entente illicite' (cartel) ?",
      options: [ "Une fusion officielle entre deux entreprises cotées", "Un accord secret entre concurrents visant à fixer les prix ou à se répartir des marchés", "Un contrat de travail d'administrateur système", "Une alliance technologique pour créer une norme ouverte" ],
      correctAnswer: 1,
      explanation: "Une entente illicite est une entente secrète ou concertée entre concurrents visant à fausser le jeu de la libre concurrence au détriment des clients."
    },
    {
      id: "cejm_th2_10",
      themeId: "th2",
      question: "Détenir une position dominante sur un marché est-il illégal dans l'Union européenne ?",
      options: [ "Oui, dépasser 30% de part de marché est interdit", "Non, la position dominante est légale ; c'est son exploitation abusive qui est interdite et sanctionnée (Art. 102 TFUE)", "Oui, toute entreprise dominante doit être nationalisée", "Non, les monopoles sont libres de fixer leurs tarifs" ],
      correctAnswer: 1,
      explanation: "La position dominante n'est pas répréhensible (résultat du succès commercial) ; ce qui est prohibé, c'est d'en abuser (prix prédateurs, ventes liées) pour éliminer les rivaux."
    },
    {
      id: "cejm_th2_11",
      themeId: "th2",
      question: "Quelle autorité administrative indépendante française contrôle les opérations de fusion-acquisition et sanctionne les ententes de prix ?",
      options: [ "La Cour des comptes", "L'Autorité de la Concurrence", "Le Conseil constitutionnel", "L'INSEE" ],
      correctAnswer: 1,
      explanation: "L'Autorité de la Concurrence est l'autorité indépendante qui régule le jeu concurrentiel et sanctionne les pratiques anticoncurrentielles."
    },
    {
      id: "cejm_th2_12",
      themeId: "th2",
      question: "Quelle protection juridique offre un brevet d'invention délivré par l'INPI et pour quelle durée maximale ?",
      options: [ "Un monopole d'exploitation exclusif pendant 20 ans", "Une protection du logo pendant 10 ans renouvelable", "Le droit de ne jamais payer d'impôts", "Une protection de 5 ans sur le code source" ],
      correctAnswer: 0,
      explanation: "Le brevet confère à son titulaire un monopole exclusif d'exploitation sur une innovation technique pendant 20 ans au maximum à compter du dépôt."
    },
    {
      id: "cejm_th2_13",
      themeId: "th2",
      question: "Quelle action en justice le titulaire d'une marque commerciale déposée à l'INPI peut-il engager contre un rival qui copie son logo ?",
      options: [ "L'action en diffamation", "L'action en contrefaçon", "L'action en résiliation de bail", "L'action en nullité absolue" ],
      correctAnswer: 1,
      explanation: "La contrefaçon sanctionne civilement (dommages et intérêts) et pénalement (prison, amendes) la reproduction ou l'usage non autorisé d'une marque ou d'un brevet."
    },
    {
      id: "cejm_th2_14",
      themeId: "th2",
      question: "Quel organisme français est le régulateur officiel des communications électroniques et garantit la neutralité du net ?",
      options: [ "La CNIL", "L'ARCEP", "L'ANSSI", "L'AFNOR" ],
      correctAnswer: 1,
      explanation: "L'ARCEP régule le secteur des télécoms, attribue les bandes de fréquences 5G et contrôle le respect de la neutralité du Net."
    },
    {
      id: "cejm_th2_15",
      themeId: "th2",
      question: "Quelle autorité nationale française pilote la cyberdéfense et délivre le visa de sécurité 'SecNumCloud' pour les hébergeurs Cloud ?",
      options: [ "La CNIL", "L'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information)", "L'ARCEP", "La Banque de France" ],
      correctAnswer: 1,
      explanation: "L'ANSSI est l'autorité nationale de cyberdéfense et délivre les qualifications de sécurité les plus rigoureuses de l'État."
    },
    {
      id: "cejm_th2_16",
      themeId: "th2",
      question: "Quel montant maximal de sanction pécuniaire la CNIL peut-elle infliger à une entreprise en cas de manquement grave et persistant au RGPD ?",
      options: [ "10 000 € au maximum", "Jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial total", "La fermeture immédiate de tous les serveurs", "1 an de prison avec sursis" ],
      correctAnswer: 1,
      explanation: "L'article 83 du RGPD prévoit des sanctions administratives pouvant atteindre 20 millions d'euros ou 4% du chiffre d'affaires mondial consolidé."
    },
    {
      id: "cejm_th2_17",
      themeId: "th2",
      question: "Que garantit le principe fondamental de 'neutralité du Net' supervisé par l'ARCEP ?",
      options: [ "L'accès gratuit à tous les films en streaming", "Le traitement égal et sans discrimination de tous les flux de données sur Internet par les fournisseurs d'accès", "L'interdiction des serveurs privés", "L'obligation d'héberger les sites en France" ],
      correctAnswer: 1,
      explanation: "La neutralité du Net interdit aux FAI de bloquer, brider ou surtaxer certains contenus ou protocoles au profit d'autres."
    },
    {
      id: "cejm_th2_18",
      themeId: "th2",
      question: "Quelles entreprises entrent dans le champ d'application de la directive européenne de cybersécurité NIS 2 ?",
      options: [ "Uniquement les fabricants de jouets", "Les Entités Essentielles (EE) et Entités Importantes (EI) de secteurs critiques (santé, énergie, Cloud, télécoms, infogérance)", "Exclusivement les ministères de la Défense", "Uniquement les personnes physiques" ],
      correctAnswer: 1,
      explanation: "NIS 2 élargit les obligations de gouvernance de la sécurité et de notification des incidents majeurs aux entreprises de services critiques et à leurs sous-traitants IT."
    },
    {
      id: "cejm_th2_19",
      themeId: "th2",
      question: "Comment qualifie-t-on la pratique d'une entreprise vendant temporairement ses services à perte pour asphyxier ses concurrents avant de remonter ses tarifs ?",
      options: [ "Un mécénat légal", "Une pratique de prix prédateurs (abus de position dominante)", "Une économie de réseau", "Une politique structurelle" ],
      correctAnswer: 1,
      explanation: "La pratique de prix d'éviction ou prédateurs consiste à pratiquer des prix inférieurs aux coûts de revient pour éliminer les rivaux, constituant un abus de position dominante."
    },
    {
      id: "cejm_th2_20",
      themeId: "th2",
      question: "Dans le cadre de la gestion écologique de l'infrastructure informatique, que réglemente la directive DEEE ?",
      options: [ "L'interdiction des écrans incurvés", "La collecte, le recyclage et la valorisation des Déchets d'Équipements Électriques et Électroniques", "Le taux d'impôt des ESN", "La vitesse des ventilateurs de serveurs" ],
      correctAnswer: 1,
      explanation: "La directive DEEE oblige les constructeurs et entreprises à traiter de façon écologique et à recycler les matériels électroniques en fin de vie."
    },

    /* ========================================================================
       THÈME 3 : L'ORGANISATION DE L'ACTIVITÉ DE L'ENTREPRISE (20 Q)
       ======================================================================== */
    {
      id: "cejm_th3_1",
      themeId: "th3",
      question: "Quel principe d'organisation fondamental Henri Fayol a-t-il érigé pour la structure hiérarchique pyramidale ?",
      options: [ "La double subordination obligatoire", "L'unité de commandement (un agent ne doit recevoir d'ordres que d'un seul chef)", "Le travail sans aucun supérieur", "La rémunération au nombre de clics" ],
      correctAnswer: 1,
      explanation: "Fayol a formalisé l'unité de commandement : un employé ne doit répondre qu'à un seul supérieur direct pour éviter les directives contradictoires."
    },
    {
      id: "cejm_th3_2",
      themeId: "th3",
      question: "Quel est le défaut majeur d'une structure hiérarchique pyramidale traditionnelle dans un environnement technologique en rapide évolution ?",
      options: [ "Elle coûte trop peu cher", "La lenteur des communications et le cloisonnement bureaucratique entre services", "L'absence totale de discipline", "La prise de décision confiée aux stagiaires" ],
      correctAnswer: 1,
      explanation: "L'organisation hiérarchique souffre d'une communication descendante très lente, d'un manque d'agilité et d'un isolement en 'silos' des différents départements."
    },
    {
      id: "cejm_th3_3",
      themeId: "th3",
      question: "Dans une entreprise organisée en structure divisionnelle, sur quels critères les divisions sont-elles découpées ?",
      options: [ "Par famille de diplômes", "Par produits/services, par type de clientèle ou par zone géographique", "Par marque de PC portable utilisé", "Selon l'âge des collaborateurs" ],
      correctAnswer: 1,
      explanation: "La structure divisionnelle accorde de l'autonomie à des unités découpées par produit (ex: division Cloud, division Cybersécurité), par marché ou par région."
    },
    {
      id: "cejm_th3_4",
      themeId: "th3",
      question: "Quelle est la caractéristique distinctive d'une structure matricielle ?",
      options: [ "Elle n'a aucun manager", "Elle fait coexister une double hiérarchie (par fonction technique et par projet/division)", "Elle interdit l'usage d'Internet", "Elle repose sur le bénévolat" ],
      correctAnswer: 1,
      explanation: "La structure matricielle croise une autorité métier (ex: direction des réseaux) et une autorité de projet (ex: chef de projet client), favorisant la polyvalence."
    },
    {
      id: "cejm_th3_5",
      themeId: "th3",
      question: "Quel risque managérial majeur caractérise fréquemment les structures matricielles ?",
      options: [ "Une exécution trop rapide des tâches", "Les conflits d'autorité et le stress des collaborateurs soumis à des ordres contradictoires de deux chefs distincts", "Le manque de compétences techniques", "Une rentabilité excessive" ],
      correctAnswer: 1,
      explanation: "La double dépendance hiérarchique peut engendrer des tensions entre responsables fonctionnels et chefs de projets, désorientant le salarié."
    },
    {
      id: "cejm_th3_6",
      themeId: "th3",
      question: "Selon Henry Mintzberg, quelle composante regroupe les salariés qui réalisent directement le travail de production du service ?",
      options: [ "Le sommet stratégique", "La technostructure", "Le centre opérationnel", "Le support logistique" ],
      correctAnswer: 2,
      explanation: "Le centre opérationnel réunit les exécutants de base (développeurs, techniciens de support, administrateurs) qui produisent l'offre de l'entreprise."
    },
    {
      id: "cejm_th3_7",
      themeId: "th3",
      question: "Où se situe l'architecte système chargé de concevoir les méthodes et procédures sans intervenir directement sur le terrain dans le modèle de Mintzberg ?",
      options: [ "Dans la technostructure", "Dans le centre opérationnel", "Dans la ligne hiérarchique", "Au conseil d'administration" ],
      correctAnswer: 0,
      explanation: "La technostructure regroupe les experts et analystes qui conçoivent, planifient et standardisent le travail des autres sans autorité hiérarchique directe."
    },
    {
      id: "cejm_th3_8",
      themeId: "th3",
      question: "Quel mécanisme de coordination de Mintzberg repose sur la communication directe et informelle entre collègues pour réaliser leur travail ?",
      options: [ "La supervision directe", "L'ajustement mutuel", "La standardisation des résultats", "Le commandement autoritaire" ],
      correctAnswer: 1,
      explanation: "L'ajustement mutuel permet une coordination souple et directe par dialogue horizontal entre personnes effectuant le travail (très présent en start-up)."
    },
    {
      id: "cejm_th3_9",
      themeId: "th3",
      question: "Un chef de projet assignant un objectif de 'taux de disponibilité de 99,99%' à son équipe utilise quel mécanisme de Mintzberg ?",
      options: [ "L'ajustement mutuel", "La standardisation des résultats", "La supervision directe", "La standardisation des normes" ],
      correctAnswer: 1,
      explanation: "La standardisation des résultats coordonne les efforts en fixant des objectifs chiffrés précis, laissant l'équipe libre des moyens pour les atteindre."
    },
    {
      id: "cejm_th3_10",
      themeId: "th3",
      question: "L'exigence d'embaucher uniquement des techniciens détenant un BTS SIO ou une certification Cisco relève de quel mécanisme de Mintzberg ?",
      options: [ "La standardisation des qualifications", "L'ajustement mutuel", "La technostructure", "La ligne hiérarchique" ],
      correctAnswer: 0,
      explanation: "La standardisation des qualifications assure la coordination grâce aux compétences et savoir-faire acquis lors des formations professionnelles initiales."
    },
    {
      id: "cejm_th3_11",
      themeId: "th3",
      question: "Quel style de direction de Likert est caractérisé par un management unilatéral, l'usage de la crainte et des sanctions ?",
      options: [ "Le style paternaliste", "Le style autoritaire exploiteur", "Le style consultatif", "Le style participatif" ],
      correctAnswer: 1,
      explanation: "Le style autoritaire exploiteur ne laisse aucune autonomie aux salariés, centralise toutes les décisions et manage par la contrainte."
    },
    {
      id: "cejm_th3_12",
      themeId: "th3",
      question: "Comment qualifie-t-on le style de Likert où le dirigeant entretient une autorité bienveillante, motive par des primes mais garde le monopole des décisions ?",
      options: [ "Le style paternaliste", "Le style participatif", "Le style anarchique", "Le style bureaucratique" ],
      correctAnswer: 0,
      explanation: "Le style paternaliste associe une attitude protectrice et des gratifications individuelles à une centralisation stricte du pouvoir décisionnel."
    },
    {
      id: "cejm_th3_13",
      themeId: "th3",
      question: "Quelle méthode contemporaine de gestion de projet IT repose sur des itérations courtes (sprints) et l'auto-organisation de l'équipe ?",
      options: [ "Le modèle en cascade", "Les méthodes Agiles (ex: framework Scrum)", "Le taylorisme d'usine", "Le fordisme à la chaîne" ],
      correctAnswer: 1,
      explanation: "Les méthodes Agiles privilégient des livraisons fréquentes, l'adaptation continue au changement et la collaboration quotidienne plutôt que la documentation figée."
    },
    {
      id: "cejm_th3_14",
      themeId: "th3",
      question: "Quelle décision suivante relève expressément du 'Management Stratégique' ?",
      options: [ "Planifier les astreintes du week-end pour l'équipe réseau", "Acheter un paquet de câbles RJ45 de secours", "Décider de fermer tous les datacenters internes pour basculer vers un Cloud public européen", "Remplacer la souris cassée d'un comptable" ],
      correctAnswer: 2,
      explanation: "Basculer toute l'infrastructure sur le Cloud est une décision à long terme engageant des capitaux lourds et l'avenir de la firme : c'est du management stratégique."
    },
    {
      id: "cejm_th3_15",
      themeId: "th3",
      question: "Parmi les formes sociétaires suivantes, laquelle offre la plus grande liberté aux fondateurs pour rédiger leurs statuts sur-mesure ?",
      options: [ "L'Entreprise Individuelle (EI)", "La Société par Actions Simplifiée (SAS)", "La SARL classique", "L'association loi 1901" ],
      correctAnswer: 1,
      explanation: "La SAS offre une grande souplesse contractuelle : les associés fixent librement dans les statuts les règles de fonctionnement et de gouvernance (très prisée des start-ups)."
    },
    {
      id: "cejm_th3_16",
      themeId: "th3",
      question: "Dans une SARL ou une SAS, quelle est la responsabilité financière des associés en cas de faillite de l'entreprise ?",
      options: [ "Totale et solidaire sur tous leurs biens personnels", "Limitée strictement au montant de leurs apports au capital social", "Prise en charge à 100% par l'État", "Inexistante" ],
      correctAnswer: 1,
      explanation: "Dans les sociétés à responsabilité limitée (SARL, SAS, SA), le patrimoine personnel des associés est protégé : ils ne peuvent perdre que ce qu'ils ont investi au capital."
    },
    {
      id: "cejm_th3_17",
      themeId: "th3",
      question: "Que distingue le 'Financement Interne' (autofinancement) du 'Financement Externe' pour une entreprise ?",
      options: [ "L'autofinancement utilise les bénéfices non distribués et les amortissements générés par l'activité propre de l'entreprise sans recourir à des tiers", "L'autofinancement est un prêt bancaire à taux zéro", "L'autofinancement est réservé à l'État", "Il n'y a aucune différence" ],
      correctAnswer: 0,
      explanation: "L'autofinancement mobilise les ressources financières propres générées par l'entreprise (réserves, amortissements) préservant son indépendance financière."
    },
    {
      id: "cejm_th3_18",
      themeId: "th3",
      question: "Comment nomme-t-on le contrat par lequel une entreprise loue des serveurs informatiques avec une option d'achat en fin de période ?",
      options: [ "Un découvert bancaire", "Un contrat de crédit-bail (leasing)", "Une augmentation de capital", "Une émission d'obligations" ],
      correctAnswer: 1,
      explanation: "Le crédit-bail (leasing) est une opération de location assortie d'une promesse unilatérale de vente permettant d'acquérir le bien pour une valeur résiduelle."
    },
    {
      id: "cejm_th3_19",
      themeId: "th3",
      question: "Quelle différence oppose la 'Gouvernance Actionnariale' de la 'Gouvernance Partenariale' ?",
      options: [ "L'actionnariale privilégie la rentabilité financière pour les actionnaires, tandis que la partenariale cherche à équilibrer les intérêts de toutes les parties prenantes", "L'actionnariale est interdite en France", "La partenariale supprime tous les salaires", "Ce sont des synonymes stricts" ],
      correctAnswer: 0,
      explanation: "La gouvernance actionnariale (shareholder) vise à maximiser la valeur pour les actionnaires, tandis que la gouvernance partenariale (stakeholder) intègre les salariés, clients et la société."
    },
    {
      id: "cejm_th3_20",
      themeId: "th3",
      question: "Dans une équipe d'ingénieurs cybersécurité SOC, quel est l'intérêt de la standardisation des procédés (playbooks) ?",
      options: [ "Interdire aux techniciens de parler", "Garantir un traitement rigoureux et homogène de chaque incident de sécurité quelle que soit la personne de garde", "Supprimer les sauvegardes", "Augmenter les impôts de la société" ],
      correctAnswer: 1,
      explanation: "Standardiser les procédés (modes opératoires écrits) assure la constance de la qualité de service et la fiabilité des interventions face aux cyberattaques."
    },

    /* ========================================================================
       THÈME 4 : L'IMPACT DU NUMÉRIQUE SUR LA VIE DE L'ENTREPRISE (20 Q)
       ======================================================================== */
    {
      id: "cejm_th4_1",
      themeId: "th4",
      question: "Quelles sont les 4 fonctions fondamentales assurées par tout Système d'Information (SI) en entreprise ?",
      options: [ "Acheter, Vendre, Négocier, Payer", "Collecter, Stocker, Traiter et Diffuser l'information", "Câbler, Éteindre, Réparer, Jeter", "Recruter, Évaluer, Sanctionner, Promouvoir" ],
      correctAnswer: 1,
      explanation: "Le cycle de l'information dans un SI comprend : la collecte (saisie), le stockage (bases de données), le traitement (calculs) et la diffusion (écrans/rapports)."
    },
    {
      id: "cejm_th4_2",
      themeId: "th4",
      question: "Qu'est-ce qu'un ERP / PGI (Progiciel de Gestion Intégré) ?",
      options: [ "Un simple traitement de texte", "Un progiciel modulaire unifiant tous les processus métier autour d'une base de données unique et partagée", "Un équipement pare-feu physique", "Un protocole de routage réseau" ],
      correctAnswer: 1,
      explanation: "L'ERP (ex: SAP, Odoo) interconnecte l'ensemble des modules (comptabilité, RH, logistique, ventes) autour d'une unique base relationnelle sans ressaisie."
    },
    {
      id: "cejm_th4_3",
      themeId: "th4",
      question: "Qu'appelle-t-on un 'effet de réseau direct' dans l'économie des plateformes numériques ?",
      options: [ "L'usure des câbles réseau", "Le fait que l'utilité du service augmente pour chaque utilisateur à mesure que le nombre total d'utilisateurs grandit", "La saturation de la bande passante", "L'interdiction du Wi-Fi" ],
      correctAnswer: 1,
      explanation: "L'effet de réseau fait qu'une plateforme devient d'autant plus précieuse qu'elle compte d'utilisateurs (ex: réseaux sociaux, messageries instantanées)."
    },
    {
      id: "cejm_th4_4",
      themeId: "th4",
      question: "Comment définit-on le modèle SaaS (Software as a Service) ?",
      options: [ "L'achat définitif d'un logiciel sur support physique", "L'accès à un logiciel hébergé sur le Cloud, facturé sous forme d'abonnement récurrent", "Un logiciel open-source sans assistance", "La maintenance d'une baie de brassage" ],
      correctAnswer: 1,
      explanation: "En SaaS, l'application est hébergée chez le fournisseur, accessible via navigateur web et payée selon un forfait périodique régulier."
    },
    {
      id: "cejm_th4_5",
      themeId: "th4",
      question: "Qu'est-ce que le modèle économique 'Freemium' ?",
      options: [ "Un service payant remboursé si mécontent", "Une offre où les fonctionnalités de base sont gratuites et les options avancées payantes", "Un troc entre entreprises", "L'obligation d'acheter pour tester" ],
      correctAnswer: 1,
      explanation: "Freemium attire une large communauté avec un service de base gratuit et monétise des fonctionnalités Premium à forte valeur ajoutée."
    },
    {
      id: "cejm_th4_6",
      themeId: "th4",
      question: "Selon l'article 4 du RGPD, qu'est-ce qu'une 'donnée à caractère personnel' ?",
      options: [ "Uniquement le numéro de carte bancaire", "Toute information se rapportant à une personne physique identifiée ou identifiable directement ou indirectement", "Le nom de l'entreprise uniquement", "Le code source d'un script Bash" ],
      correctAnswer: 1,
      explanation: "Toute donnée permettant d'identifier un individu (nom, email, IP, plaque minéralogique, localisation, identifiant cookie) constitue une donnée personnelle."
    },
    {
      id: "cejm_th4_7",
      themeId: "th4",
      question: "Que stipule le principe de 'minimisation des données' du RGPD ?",
      options: [ "Compresser tous les fichiers en ZIP", "Ne collecter que les données strictement adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités", "Effacer les bases de données chaque semaine", "Limiter les connexions Internet des salariés" ],
      correctAnswer: 1,
      explanation: "Le responsable de traitement n'a pas le droit de demander des données superflues ou inutiles par rapport au service fourni."
    },
    {
      id: "cejm_th4_8",
      themeId: "th4",
      question: "Quel rôle officiel le RGPD confie-t-il au DPO (Délégué à la Protection des Données) ?",
      options: [ "Programmer le site de vente en ligne", "Informer, conseiller l'entreprise, contrôler le respect du RGPD et coopérer avec la CNIL", "Payer les amendes de sécurité", "Vendre les données à des annonceurs" ],
      correctAnswer: 1,
      explanation: "Le DPO est le garant indépendant de la conformité au sein de l'organisation : il pilote la protection des données et dialogue avec la CNIL."
    },
    {
      id: "cejm_th4_9",
      themeId: "th4",
      question: "En vertu de l'article 33 du RGPD, quel est le délai maximal pour notifier une violation de données personnelles à la CNIL ?",
      options: [ "24 heures", "72 heures", "15 jours", "1 mois" ],
      correctAnswer: 1,
      explanation: "La notification d'une fuite ou violation de données doit être transmise à la CNIL au plus tard dans les 72 heures après en avoir pris connaissance."
    },
    {
      id: "cejm_th4_10",
      themeId: "th4",
      question: "Qu'est-ce que le 'droit à l'effacement' (droit à l'oubli) consacré par l'article 17 du RGPD ?",
      options: [ "Le droit de supprimer le disque dur de l'entreprise", "Le droit pour un citoyen d'obtenir du responsable de traitement l'effacement définitif de ses données personnelles dans les meilleurs délais", "L'effacement automatique des emails le vendredi", "L'interdiction des logs réseau" ],
      correctAnswer: 1,
      explanation: "Ce droit permet à tout citoyen d'exiger la suppression de ses données lorsqu'elles ne sont plus nécessaires ou qu'il retire son consentement."
    },
    {
      id: "cejm_th4_11",
      themeId: "th4",
      question: "Qu'impose le principe de 'Privacy by Design' (protection dès la conception) sous le RGPD ?",
      options: [ "Embaucher des graphistes pour le logo", "Intégrer les exigences de sécurité et de confidentialité dès la conception technique initiale de tout nouveau projet ou service", "Imposer le mode sombre aux usagers", "Signer une charte papier après coup" ],
      correctAnswer: 1,
      explanation: "La sécurité et la protection des données doivent être intégrées dans le cahier des charges et l'architecture dès le début, non rajoutées a posteriori."
    },
    {
      id: "cejm_th4_12",
      themeId: "th4",
      question: "Quand une organisation doit-elle obligatoirement réaliser une AIPD (Analyse d'Impact relative à la Protection des Données) ?",
      options: [ "Avant d'acheter un câble réseau", "Lorsqu'un traitement de données présente un risque élevé pour les droits et libertés des personnes physiques (ex: biométrie, santé, vidéosurveillance massive)", "Uniquement en cas de bénéfices", "Tous les ans obligatoirement" ],
      correctAnswer: 1,
      explanation: "L'AIPD permet d'évaluer la gravité des risques pour la vie privée et de documenter les mesures de protection techniques mises en place."
    },
    {
      id: "cejm_th4_13",
      themeId: "th4",
      question: "En droit français de la propriété intellectuelle, par quel mécanisme juridique un logiciel informatique est-il protégé ?",
      options: [ "Par le brevet mécanique pur", "Par le droit d'auteur (Code de la propriété intellectuelle)", "Par le droit maritime", "Par la loi de la presse" ],
      correctAnswer: 1,
      explanation: "Le logiciel (code source et binaire) est une œuvre de l'esprit protégée par le droit d'auteur dès sa création originale sans dépôt obligatoire."
    },
    {
      id: "cejm_th4_14",
      themeId: "th4",
      question: "Un technicien informatique salarié développe un script de sauvegarde sur ses heures de travail. À qui appartiennent les droits d'exploitation commerciale ?",
      options: [ "Au technicien seul en vertu du droit moral", "À l'employeur automatiquement selon l'article L. 113-9 du CPI", "À l'État français", "Au constructeur du PC" ],
      correctAnswer: 1,
      explanation: "L'article L. 113-9 du CPI prévoit la dévolution légale automatique des droits patrimoniaux sur les logiciels créés par un salarié à son employeur."
    },
    {
      id: "cejm_th4_15",
      themeId: "th4",
      question: "Selon l'article 323-1 du Code pénal, que risque une personne qui accède ou se maintient frauduleusement dans un STAD ?",
      options: [ "Un simple avertissement oral", "Des peines pouvant atteindre 3 ans de prison et 100 000 € d'amende", "L'obligation de donner des cours", "Rien si aucun fichier n'a été volé" ],
      correctAnswer: 1,
      explanation: "Pénétrer ou se maintenir sans autorisation dans un système informatique (même sans rien détruire) constitue une infraction pénale passible de prison et d'amende."
    },
    {
      id: "cejm_th4_16",
      themeId: "th4",
      question: "Comment le Code pénal qualifie-t-il le fait de paralyser délibérément les serveurs d'une entreprise par une attaque DDoS ?",
      options: [ "Un vice de consentement", "Une entrave au fonctionnement d'un STAD (Article 323-2 du Code pénal)", "Un abus de majorité", "Une faute civile simple" ],
      correctAnswer: 1,
      explanation: "L'entrave au fonctionnement d'un STAD (par déni de service distribué DDoS) est un délit réprimé de peines pouvant atteindre 5 ans de prison et 150 000 € d'amende."
    },
    {
      id: "cejm_th4_17",
      themeId: "th4",
      question: "Dans le commerce électronique, que garantit la règle du 'Double-clic' (Art. 1127-2 du Code civil) ?",
      options: [ "L'ouverture instantanée de deux fenêtres publicitaires", "Le fait que le consommateur puisse vérifier le détail de sa commande (1er clic) puis confirmer définitivement son engagement d'achat (2e clic)", "La réduction de 50% du prix", "L'interdiction des achats par carte bancaire" ],
      correctAnswer: 1,
      explanation: "Le double-clic protège le cyberconsommateur en lui permettant de vérifier son panier et son montant total avant de valider définitivement la commande."
    },
    {
      id: "cejm_th4_18",
      themeId: "th4",
      question: "Qu'est-ce que le 'droit à la portabilité' des données (Art. 20 du RGPD) ?",
      options: [ "Le droit de transporter son PC portable chez soi", "Le droit pour une personne de recevoir les données qu'elle a fournies dans un format lisible par machine pour les transmettre à un concurrent", "L'obligation de brancher un câble réseau", "Le transfert forcé des données vers les USA" ],
      correctAnswer: 1,
      explanation: "La portabilité garantit la liberté du consommateur de récupérer ses playlists, données médicales ou historiques sans être captif d'un fournisseur."
    },
    {
      id: "cejm_th4_19",
      themeId: "th4",
      question: "Quelle inquiétude majeure le 'Cloud Act' américain suscite-t-il chez les entreprises européennes ?",
      options: [ "Il interdit d'acheter des ordinateurs portables", "Il permet à la justice américaine d'exiger les données stockées par les hébergeurs américains, même si leurs serveurs sont physiquement situés en Europe", "Il rend Linux obligatoire", "Il supprime la facturation par abonnement" ],
      correctAnswer: 1,
      explanation: "Cette portée extraterritoriale américaine fait peser un risque d'accès judiciaire ou d'espionnage économique sur les données européennes hébergées sur le Cloud des GAFAM."
    },
    {
      id: "cejm_th4_20",
      themeId: "th4",
      question: "Pour être juridiquement valable sous le RGPD, le recueil du consentement d'un internaute pour les cookies traceurs doit être :",
      options: [ "Tacite et pré-coché par défaut", "Libre, spécifique, éclairé et univoque (sans case pré-cochée, par un acte positif clair)", "Envoyé par lettre recommandée avec accusé de réception", "Demandé uniquement une fois par an" ],
      correctAnswer: 1,
      explanation: "Les cases pré-cochées et la poursuite de la navigation ne valent pas consentement : l'internaute doit accomplir une action positive explicite d'acceptation."
    },

    /* ========================================================================
       THÈME 5 : LES MUTATIONS DU TRAVAIL (20 Q)
       ======================================================================== */
    {
      id: "cejm_th5_1",
      themeId: "th5",
      question: "Quels sont les trois éléments cumulatifs constituant obligatoirement un contrat de travail ?",
      options: [ "Un bureau, un badge et un téléphone", "Une prestation de travail, une rémunération et un lien de subordination juridique", "Un diplôme, une promesse d'embauche et une période d'essai", "Un CV, une lettre et un entretien" ],
      correctAnswer: 1,
      explanation: "Le contrat de travail se définit par l'accomplissement d'un travail pour autrui contre une rémunération sous la subordination d'un employeur."
    },
    {
      id: "cejm_th5_2",
      themeId: "th5",
      question: "Selon la jurisprudence constante (Arrêt Société Générale 1996), que comprend le 'lien de subordination juridique' ?",
      options: [ "Le port obligatoire d'un uniforme", "Le pouvoir pour l'employeur de donner des ordres, d'en contrôler l'exécution et de sanctionner les manquements du travailleur", "Le fait de gagner le salaire minimum", "Le travail exclusif le week-end" ],
      correctAnswer: 1,
      explanation: "La subordination juridique repose sur les trois pouvoirs patronaux : ordonner (directives), contrôler (surveillance) et sanctionner (disciplinaire)."
    },
    {
      id: "cejm_th5_3",
      themeId: "th5",
      question: "Quelle est la forme normale et générale du contrat de travail en France selon l'article L. 1221-2 du Code du travail ?",
      options: [ "Le CDD", "Le contrat d'intérim", "Le Contrat à Durée Indéterminée (CDI)", "Le statut d'auto-entrepreneur" ],
      correctAnswer: 2,
      explanation: "Le législateur pose le principe que le CDI est la forme normale et de droit commun de l'emploi en France."
    },
    {
      id: "cejm_th5_4",
      themeId: "th5",
      question: "Un employeur peut-il conclure un CDD pour pourvoir durablement un emploi lié à l'activité normale de son entreprise ?",
      options: [ "Oui, l'employeur choisit librement la forme de contrat", "Non, le CDD est strictement interdit pour pourvoir un emploi permanent sous peine de requalification judiciaire en CDI", "Oui, avec l'accord écrit du salarié", "Oui, s'il accorde une prime de 30%" ],
      correctAnswer: 1,
      explanation: "Le recours au CDD est limité à des cas précis (remplacement, surcroît exceptionnel) : son utilisation pour un emploi durable entraîne sa requalification automatique en CDI."
    },
    {
      id: "cejm_th5_5",
      themeId: "th5",
      question: "À partir de quel effectif un employeur est-il légalement tenu d'établir un Règlement Intérieur dans son établissement ?",
      options: [ "Dès 10 salariés", "Dès 50 salariés", "Dès 250 salariés", "Dès 1 000 salariés" ],
      correctAnswer: 1,
      explanation: "Le règlement intérieur, fixant les règles d'hygiène, de sécurité et la discipline (dont la charte informatique), est obligatoire dès 50 salariés."
    },
    {
      id: "cejm_th5_6",
      themeId: "th5",
      question: "En vertu de l'article L. 1331-2 du Code du travail, quelle sanction disciplinaire est expressément interdite par la loi ?",
      options: [ "Le blâme", "L'avertissement écrit", "Les amendes et retenues pécuniaires sur salaire", "La mise à pied disciplinaire sans solde" ],
      correctAnswer: 2,
      explanation: "Les sanctions financières (retenues sur salaire pour punir une faute) sont strictement prohibées par le droit du travail et punies pénalement."
    },
    {
      id: "cejm_th5_7",
      themeId: "th5",
      question: "Quelle procédure permet à un employeur et à un salarié en CDI de mettre fin à leur contrat d'un commun accord avec indemnité et chômage ?",
      options: [ "La démission forcée", "La rupture conventionnelle homologuée (DREETS)", "La prise d'acte unilatérale", "Le licenciement pour faute grave" ],
      correctAnswer: 1,
      explanation: "La rupture conventionnelle est un accord amiable bilatéral homologué par l'administration du travail (DREETS) ouvrant droit à l'assurance chômage."
    },
    {
      id: "cejm_th5_8",
      themeId: "th5",
      question: "Quelle condition absolue tout licenciement prononcé par un employeur doit-il obligatoirement remplir ?",
      options: [ "Être validé par vote des délégués syndicaux", "Reposer sur une Cause Réelle et Sérieuse", "Donner lieu à 1 an de salaire", "Avoir lieu en fin de mois" ],
      correctAnswer: 1,
      explanation: "Tout licenciement exige une cause réelle (faits objectifs, réels et vérifiables) et sérieuse (suffisamment grave pour rendre la rupture inévitable)."
    },
    {
      id: "cejm_th5_9",
      themeId: "th5",
      question: "Quelle est la conséquence directe d'un licenciement prononcé pour 'faute grave' ?",
      options: [ "Le salarié part en prison immédiatement", "Le départ du salarié est immédiat, privatif de l'indemnité de préavis et de l'indemnité de licenciement", "Le salarié conserve son PC d'entreprise", "L'employeur doit lui verser le double de ses congés" ],
      correctAnswer: 1,
      explanation: "La faute grave rend intolérable le maintien du salarié même pendant le préavis, le privant des indemnités de rupture (il conserve ses congés payés)."
    },
    {
      id: "cejm_th5_10",
      themeId: "th5",
      question: "Qu'est-ce qu'un licenciement pour motif économique (Art. L. 1233-3 du Code du travail) ?",
      options: [ "Un licenciement punissant un salarié qui a fait perdre de l'argent", "Un licenciement non inhérent à la personne du salarié, motivé par des difficultés économiques, mutations technologiques ou réorganisation nécessaire à la compétitivité", "Le refus d'une prime", "La baisse du SMIC" ],
      correctAnswer: 1,
      explanation: "Le motif économique découle de causes économiques extérieures à la personne du salarié nécessitant la suppression ou transformation de son emploi."
    },
    {
      id: "cejm_th5_11",
      themeId: "th5",
      question: "Que garantit le principe d'égalité de traitement aux salariés en télétravail (Art. L. 1222-9 C. trav.) ?",
      options: [ "Qu'ils touchent le même salaire que la direction", "Qu'ils bénéficient des mêmes droits individuels et collectifs que les salariés sur site (tickets restaurant, accès à la formation)", "L'interdiction d'allumer leur webcam", "Le droit de travailler uniquement 2 heures par jour" ],
      correctAnswer: 1,
      explanation: "Le télétravailleur bénéficie de la stricte égalité de traitement avec ses collègues travaillant dans les locaux de l'entreprise."
    },
    {
      id: "cejm_th5_12",
      themeId: "th5",
      question: "Qu'est-ce que le 'droit à la déconnexion' consacré dans le Code du travail ?",
      options: [ "L'interdiction de brancher son chargeur de PC au bureau", "Le droit pour le travailleur de ne pas être sollicité ni de répondre à des sollicitations professionnelles en dehors de ses heures de travail", "L'obligation d'éteindre les serveurs la nuit", "Le blocage des réseaux sociaux" ],
      correctAnswer: 1,
      explanation: "Ce droit protège les temps de repos, la santé physique/mentale et la vie privée du salarié face à l'envahissement des smartphones et emails pros."
    },
    {
      id: "cejm_th5_13",
      themeId: "th5",
      question: "Que signifie le sigle GEPP en gestion des ressources humaines ?",
      options: [ "Garantie Exceptionnelle de Pouvoir d'Achat", "Gestion des Emplois et des Parcours Professionnels", "Grille Économique des Primes Patronales", "Groupement Européen de Protection du Personnel" ],
      correctAnswer: 1,
      explanation: "La GEPP anticipe les compétences futures indispensables face aux mutations technologiques (Cloud, IA) et accompagne l'évolution des carrières."
    },
    {
      id: "cejm_th5_14",
      themeId: "th5",
      question: "Selon l'arrêt de principe Nikon (Cour de cassation 2001), l'employeur peut-il ouvrir les fichiers personnels d'un salarié sur son PC de travail ?",
      options: [ "Oui, tout appartient à l'employeur sans restriction", "Non, l'employeur ne peut pas ouvrir les courriels identifiés comme 'Personnel' sans la présence du salarié ou une décision de justice", "Oui, si le salarié est en vacances", "Non, l'employeur ne peut jamais allumer le PC d'un subordonné" ],
      correctAnswer: 1,
      explanation: "Le droit au respect de la vie privée au travail interdit à l'employeur de lire les correspondances identifiées expressément comme personnelles."
    },
    {
      id: "cejm_th5_15",
      themeId: "th5",
      question: "Un employeur peut-il installer un enregistreur de frappes (keylogger) sur l'ordinateur de ses techniciens réseau ?",
      options: [ "Oui, librement", "Non, la CNIL juge la surveillance constante et permanente comme disproportionnée et formellement illicite", "Oui, si averti par email", "Oui, s'il s'agit d'alternants" ],
      correctAnswer: 1,
      explanation: "La cybersurveillance permanente est illégale car elle porte une atteinte disproportionnée aux libertés fondamentales des salariés."
    },
    {
      id: "cejm_th5_16",
      themeId: "th5",
      question: "Quelle instance unique de représentation du personnel est obligatoire dans toutes les entreprises d'au moins 11 salariés depuis 2017 ?",
      options: [ "Le Comité Social et Économique (CSE)", "Le tribunal de commerce", "Le conseil constitutionnel", "La commission d'arbitrage de l'OCDE" ],
      correctAnswer: 0,
      explanation: "Le CSE fusionne les anciens délégués du personnel, comité d'entreprise et CHSCT pour dialoguer et représenter les salariés."
    },
    {
      id: "cejm_th5_17",
      themeId: "th5",
      question: "Quelle obligation pèse sur l'employeur concernant la santé et la sécurité de ses salariés (Art. L. 4121-1 C. trav.) ?",
      options: [ "Une simple obligation morale", "Une obligation de sécurité renforcée (prévention effective des risques physiques et psychosociaux)", "Aucune responsabilité hors de l'atelier", "Une responsabilité facultative" ],
      correctAnswer: 1,
      explanation: "L'employeur a l'obligation de prendre toutes les mesures de prévention nécessaires pour protéger la santé physique et mentale de ses salariés (prévention du burn-out)."
    },
    {
      id: "cejm_th5_18",
      themeId: "th5",
      question: "Que désignent les RPS en santé au travail ?",
      options: [ "Réseau Privé Sécurisé", "Risques Psychosociaux (stress, épuisement professionnel, burn-out, harcèlement)", "Réglementation des Postes de Saisie", "Régime Professionnel des Salaires" ],
      correctAnswer: 1,
      explanation: "Les RPS sont les risques professionnels portant atteinte à la santé mentale et physique des travailleurs engendrés par les conditions d'organisation du travail."
    },
    {
      id: "cejm_th5_19",
      themeId: "th5",
      question: "Un technicien informatique peut-il exercer son 'droit de retrait' face à une situation de travail ?",
      options: [ "Non, c'est réservé aux policiers", "Oui, s'il a un motif raisonnable de penser que la situation présente un danger grave et imminent pour sa vie ou sa santé", "Oui, dès qu'il n'a pas envie d'exécuter un ticket", "Non, sous peine de renvoi immédiat" ],
      correctAnswer: 1,
      explanation: "L'article L. 4131-1 autorise tout salarié à interrompre son activité face à un danger grave et imminent sans retenue sur salaire ni sanction."
    },
    {
      id: "cejm_th5_20",
      themeId: "th5",
      question: "Pour être juridiquement valide, quelle condition essentielle une clause de non-concurrence doit-elle obligatoirement comporter ?",
      options: [ "Une interdiction sur toute la France pendant 10 ans", "Une contrepartie financière obligatoire (indemnité compensatrice versée après la rupture)", "La signature de tous les collègues", "Une promesse d'embauche" ],
      correctAnswer: 1,
      explanation: "Une clause de non-concurrence non assortie d'une contrepartie financière dérisoire ou nulle est frappée de nullité absolue."
    },

    /* ========================================================================
       THÈME 6 : LES CHOIX STRATÉGIQUES DE L'ENTREPRISE (20 Q)
       ======================================================================== */
    {
      id: "cejm_th6_1",
      themeId: "th6",
      question: "Dans le diagnostic stratégique interne, que représentent les critères du modèle VRIN de Jay Barney ?",
      options: [ "Vitesse, Rendement, Intérêt, Nouveauté", "Valeureuse, Rare, Inimitable, Non-substituable (pour procurer un avantage concurrentiel durable)", "Vente, Réduction, Importation, Normalisation", "Vérification, Réseau, Informatique, Numérique" ],
      correctAnswer: 1,
      explanation: "Le modèle VRIN évalue si les ressources et compétences de l'entreprise lui confèrent un avantage compétitif durable que les concurrents ne peuvent égaler."
    },
    {
      id: "cejm_th6_2",
      themeId: "th6",
      question: "Selon Gary Hamel et C.K. Prahalad, que sont les 'compétences fondamentales' (Core Competencies) ?",
      options: [ "Les diplômes des secrétaires", "Un ensemble collectif d'apprentissages et de savoir-faire distinctifs difficilement imitables qui confèrent un avantage compétitif", "Le montant d'argent liquide sur le compte bancaire", "La vitesse de la connexion fibre" ],
      correctAnswer: 1,
      explanation: "Les compétences clés sont les savoir-faire techniques et organisationnels collectifs (ex: miniaturisation chez Sony, cryptographie avancée) créant une valeur unique."
    },
    {
      id: "cejm_th6_3",
      themeId: "th6",
      question: "Dans la Chaîne de Valeur de Michael Porter, parmi les activités suivantes, laquelle est classée comme 'activité principale' ?",
      options: [ "La gestion des ressources humaines", "Les services après-vente (support technique, assistance aux clients, SLA)", "La recherche et développement (R&D)", "L'infrastructure de la firme (direction, juridique)" ],
      correctAnswer: 1,
      explanation: "Les activités principales concourent directement à la production matérielle et à la commercialisation : logistique, production, vente et services après-vente."
    },
    {
      id: "cejm_th6_4",
      themeId: "th6",
      question: "Dans la matrice PESTEL analysant le macro-environnement d'une ESN, où classe-t-on 'La directive européenne NIS 2 imposant de nouvelles obligations de cybersécurité' ?",
      options: [ "Dans la composante Économique", "Dans la composante Légale (L)", "Dans la composante Socioculturelle", "Dans la composante Écologique" ],
      correctAnswer: 1,
      explanation: "Les lois, directives européennes et réglementations contraignantes font partie de la dimension Légale (L) du modèle PESTEL."
    },
    {
      id: "cejm_th6_5",
      themeId: "th6",
      question: "Dans le modèle des 5 forces de Porter, comment qualifie-t-on le risque que les solutions Cloud remplacent définitivement les serveurs sur site ?",
      options: [ "Le pouvoir de négociation des salariés", "La menace des produits (ou services) de substitution", "Une entente illicite", "Une barrière à la sortie" ],
      correctAnswer: 1,
      explanation: "Un produit de substitution répond au même besoin fonctionnel (stocker et traiter des données) par une technologie ou un modèle économique différent."
    },
    {
      id: "cejm_th6_6",
      themeId: "th6",
      question: "Dans un diagnostic SWOT réalisé pour un hébergeur web, où classe-t-on 'La certification Cisco et ISO 27001 obtenue par l'équipe d'ingénieurs' ?",
      options: [ "Une Menace (Threat)", "Une Opportunité (Opportunity)", "Une Force (Strength)", "Une Faiblesse (Weakness)" ],
      correctAnswer: 2,
      explanation: "Les compétences et certifications internes des équipes sont des atouts maîtrisés en interne : ce sont des Forces (Strengths)."
    },
    {
      id: "cejm_th6_7",
      themeId: "th6",
      question: "Quelle est la caractéristique fondamentale d'une stratégie globale de 'Spécialisation' ?",
      options: [ "Vendre dans tous les secteurs industriels possibles", "Concentrer l'ensemble des compétences et ressources sur un seul métier ou domaine d'activité", "Fermer l'entreprise tous les étés", "N'embaucher que des alternants" ],
      correctAnswer: 1,
      explanation: "La spécialisation permet de devenir le spécialiste reconnu d'un créneau unique en y développant des économies d'échelle et l'effet d'expérience."
    },
    {
      id: "cejm_th6_8",
      themeId: "th6",
      question: "Quel est le risque stratégique majeur encouru par une entreprise qui applique une stratégie de spécialisation pure ?",
      options: [ "Gagner trop de parts de marché", "Être vulnérable en cas de crise ou d'obsolescence technologique de son unique marché", "Perdre le soutien des banques", "Avoir trop de filiales à gérer" ],
      correctAnswer: 1,
      explanation: "L'absence de diversification expose l'entreprise au risque de disparaître brutalement si son marché unique s'effondre face à une rupture technologique."
    },
    {
      id: "cejm_th6_9",
      themeId: "th6",
      question: "En quoi consiste une stratégie globale de 'Diversification liée' (ou concentrique) ?",
      options: [ "Ouvrir des magasins au hasard", "Se développer sur de nouvelles activités présentant des complémentarités techniques, technologiques ou commerciales avec le métier de départ", "Acheter des actions en bourse sans lien", "Vendre son entreprise" ],
      correctAnswer: 1,
      explanation: "La diversification liée exploite des synergies avec les compétences actuelles (ex: un constructeur de switches réseau qui se diversifie dans les pare-feux logiciels)."
    },
    {
      id: "cejm_th6_10",
      themeId: "th6",
      question: "Dans la théorie des coûts de transaction (Coase & Williamson), comment l'entreprise choisit-elle entre 'Faire' (intégration) et 'Faire-faire' (externalisation) ?",
      options: [ "Elle compare les coûts d'organisation interne avec les coûts de transaction sur le marché (recherche, négociation, contrôle des prestataires)", "Elle choisit toujours l'option la plus chère", "Elle tire au sort", "Elle applique le choix du ministère" ],
      correctAnswer: 0,
      explanation: "Si recourir au marché engendre trop de coûts de transaction et d'incertitudes (spécificité des actifs, risque d'opportunisme), l'entreprise a intérêt à internaliser l'activité."
    },
    {
      id: "cejm_th6_11",
      themeId: "th6",
      question: "Qu'est-ce que l'externalisation (infogérance / outsourcing) pour une direction informatique bancaire ?",
      options: [ "Implanter une agence à l'étranger", "Confier la gestion de ses serveurs et du support utilisateur à un prestataire spécialisé externe (ESN) sous contrat de service (SLA)", "Créer un nouveau compte bancaire", "Embaucher 500 informaticiens en interne" ],
      correctAnswer: 1,
      explanation: "L'externalisation permet à l'entreprise de déléguer une fonction non stratégique à un tiers expert pour variabiliser ses coûts et se recentrer sur son cœur de métier."
    },
    {
      id: "cejm_th6_12",
      themeId: "th6",
      question: "Selon Michael Porter, quelle stratégie générique consiste à réduire au maximum ses coûts de revient pour proposer les tarifs les plus bas du marché ?",
      options: [ "La différenciation par le haut", "La domination par les coûts", "La focalisation sur une niche de luxe", "La diversification conglomérale" ],
      correctAnswer: 1,
      explanation: "La domination par les coûts vise à obtenir le coût unitaire le plus bas du secteur grâce aux économies d'échelle pour pratiquer des prix très agressifs (ex: Free, Dacia)."
    },
    {
      id: "cejm_th6_13",
      themeId: "th6",
      question: "Quelle stratégie de Porter est illustrée par Apple vendant ses appareils plus cher en s'appuyant sur un design épuré, un écosystème fermé et une réputation de sécurité ?",
      options: [ "La domination par les coûts", "La différenciation par le haut (sophistication)", "La sous-traitance intégrale", "La nationalisation" ],
      correctAnswer: 1,
      explanation: "La différenciation par le haut offre des caractéristiques uniques et valorisées par les clients permettant de pratiquer un surprix."
    },
    {
      id: "cejm_th6_14",
      themeId: "th6",
      question: "Comment nomme-t-on la stratégie de Porter qui consiste à cibler exclusivement un segment de marché minuscule avec une offre sur-mesure ?",
      options: [ "La stratégie de focalisation (ou stratégie de niche)", "La guerre des prix mondiale", "La domination par le volume", "L'alignement concurrentiel" ],
      correctAnswer: 0,
      explanation: "La focalisation (ou niche) évite l'affrontement frontal avec les leaders généralistes en se spécialisant sur une cible très étroite (ex: logiciels pour hôpitaux militaires)."
    },
    {
      id: "cejm_th6_15",
      themeId: "th6",
      question: "Que risque selon Michael Porter une entreprise qui ne choisit clairement aucune des 3 stratégies génériques ?",
      options: [ "De devenir un monopole mondial", "D'être 'coincée au milieu' (stuck in the middle), avec des coûts trop élevés pour rivaliser en prix et une offre pas assez distinctive pour être premium", "De payer trop d'impôts", "D'être rachetée par l'État" ],
      correctAnswer: 1,
      explanation: "L'enlisement dans la voie médiane condamne l'entreprise à une rentabilité médiocre, n'ayant ni l'avantage du coût ni l'attrait de la différenciation."
    },
    {
      id: "cejm_th6_16",
      themeId: "th6",
      question: "Quelle modalité de croissance caractérise une ESN qui se développe en achetant ses propres serveurs et en embauchant 20 techniciens par an ?",
      options: [ "La croissance externe", "La croissance interne (croissance organique)", "La fusion par absorption", "L'alliance capitalistique" ],
      correctAnswer: 1,
      explanation: "La croissance interne repose sur la création autonome de nouvelles capacités de production par l'entreprise elle-même (embauches, R&D, autofinancement)."
    },
    {
      id: "cejm_th6_17",
      themeId: "th6",
      question: "Quel avantage stratégique majeur la croissance externe (rachat d'un concurrent) procure-t-elle par rapport à la croissance interne ?",
      options: [ "Elle ne coûte jamais rien", "Elle procure un gain de temps immédiat, des parts de marché acquises instantanément et l'accès direct aux technologies et clients de la cible", "Elle élimine tout impôt", "Elle simplifie les relations humaines" ],
      correctAnswer: 1,
      explanation: "Racheter un concurrent permet de franchir instantanément les barrières à l'entrée et d'acquérir immédiatement des clients, des brevets et des experts qualifiés."
    },
    {
      id: "cejm_th6_18",
      themeId: "th6",
      question: "Quel risque managérial majeur menace fréquemment la réussite des fusions-acquisitions (croissance externe) ?",
      options: [ "Le choc culturel entre les équipes et les difficultés techniques d'intégration des systèmes d'information", "L'obligation de baisser les salaires de moitié", "Le manque de clients", "L'absence totale de concurrence" ],
      correctAnswer: 0,
      explanation: "Plus de 50% des fusions échouent à cause du choc des cultures managériales et de la complexité technique de fusionner deux SI incompatibles."
    },
    {
      id: "cejm_th6_19",
      themeId: "th6",
      question: "Comment nomme-t-on le partenariat entre Cisco et Microsoft certifiant des solutions communes sans rachat de l'un par l'autre ?",
      options: [ "Une fusion-absorption", "Une croissance conjointe (ou alliance stratégique partenariale)", "Une scission d'entreprise", "Un contrat de travail" ],
      correctAnswer: 1,
      explanation: "La croissance conjointe permet à deux entreprises indépendantes d'unir leurs forces et leurs compétences pour mener un projet commun."
    },
    {
      id: "cejm_th6_20",
      themeId: "th6",
      question: "Selon la théorie de l'effet d'expérience, que se passe-t-il pour le coût unitaire d'un équipement réseau chaque fois que la production cumulée totale double ?",
      options: [ "Le coût unitaire augmente de 50%", "Le coût unitaire diminue d'un pourcentage régulier et prévisible grâce à l'apprentissage et aux gains de productivité", "Le coût reste strictement identique", "La qualité du matériel se dégrade" ],
      correctAnswer: 1,
      explanation: "L'effet d'expérience (BCG) montre que les coûts unitaires baissent régulièrement à mesure que l'expérience s'accumule (meilleure maîtrise des gestes, optimisation)."
    }
  ]
};
