/* ==========================================================================
   CEJM (Culture Économique, Juridique et Managériale) DATABASE
   Conforme au Référentiel National BTS & Manuel Foucher Tome Unique (1re & 2e années)
   Adapté pour Julia (BTS SIO SISR) : Définitions courtes, bullet points, exemples Tech/IT
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
        explanation: "• Forces (Interne) : Atouts maîtrisés (ex: brevets logiciels, techniciens certifiés Cisco/Linux).\n• Faiblesses (Interne) : Lacunes internes (ex: manque de trésorerie, dette technique, SI obsolète).\n• Opportunités (Externe) : Facteurs favorables du marché (ex: hausse de la demande en cybersécurité, aide de l'État France 2030).\n• Menaces (Externe) : Risques extérieurs (ex: nouvelle réglementation contraignante, cyberattaques massives, pénurie de semi-conducteurs)."
      },
      {
        name: "Les 5 Forces (+ 1) de Michael Porter",
        author: "Michael Porter (Harvard)",
        purpose: "Évaluer l'intensité concurrentielle et l'attractivité d'un secteur",
        explanation: "1. Rivalité entre concurrents du secteur (guerre des prix, parts de marché).\n2. Pouvoir de négociation des clients (capacité à faire baisser les prix s'ils sont peu nombreux ou gros acheteurs).\n3. Pouvoir de négociation des fournisseurs (ex: monopole de Nvidia sur les processeurs IA).\n4. Menace des nouveaux entrants (barrières à l'entrée : capitaux, brevets, normes).\n5. Menace des produits de substitution (ex: le Cloud public remplaçant les serveurs locaux sur site).\n6. Rôle des pouvoirs publics / Régulateur (normes imposées par l'État ou l'UE)."
      },
      {
        name: "Modèle PESTEL",
        author: "Analyse macro-environnementale",
        purpose: "Identifier les 6 influences globales externes qui pèsent sur l'entreprise",
        explanation: "• P - Politique : Stabilité du gouvernement, régimes fiscaux, tensions géopolitiques.\n• E - Économique : Inflation, taux d'intérêt de la BCE, croissance du PIB.\n• S - Socioculturel : Habitudes de consommation, mode de vie, attrait pour le télétravail.\n• T - Technologique : Avancées de l'IA, déploiement 5G/fibre, essor du quantique.\n• E - Écologique : Sobriété énergétique, normes Green IT, recyclage des DEEE (déchets électroniques).\n• L - Légal : RGPD, droit du travail, directives de cybersécurité NIS 2."
      },
      {
        name: "La Chaîne de Valeur de Porter",
        author: "Michael Porter",
        purpose: "Identifier les activités créatrices de valeur et les sources d'avantage concurrentiel",
        explanation: "• Activités principales : Logistique entrante, Production/Développement, Logistique sortante, Commercialisation & Vente, Services après-vente (support client/SLA).\n• Activités de soutien : Infrastructure de la firme (direction, SI), Gestion des RH, Recherche & Développement (R&D technologique), Approvisionnements."
      }
    ]
  },

  /* ==========================================================================
     GLOSSAIRE DES NOTIONS OFFICIELLES (LIVRE FOUCHER TOME UNIQUE)
     ========================================================================== */
  notions: [
    /* --- THÈME 1 : ENVIRONNEMENT & INTÉGRATION --- */
    {
      id: "notion_th1_1",
      themeId: "th1",
      term: "Valeur Ajoutée (VA)",
      source: "Comptabilité nationale & Économie d'entreprise",
      definition: "Richesse réelle créée par l'entreprise lors de son processus de production.\n• **Formule :** `Valeur Ajoutée = Chiffre d'Affaires (CA) - Consommations Intermédiaires (CI)`.\n• Les CI représentent les biens et services détruits ou transformés pendant la production (ex: électricité, licences logicielles, matières premières).\n• La VA est ensuite répartie entre : Salariés (salaires), État (impôts), Banques (intérêts des emprunts), Associés (dividendes) et l'Entreprise elle-même (autofinancement/investissements).",
      example: "Une ESN facture 150 000 € de prestations (CA) et consomme 50 000 € de serveurs Cloud loués et fournitures (CI). Sa Valeur Ajoutée est de 100 000 €."
    },
    {
      id: "notion_th1_2",
      themeId: "th1",
      term: "Conditions de Validité du Contrat",
      source: "Article 1128 du Code civil (Réforme du droit des contrats)",
      definition: "Pour être juridiquement valable, un contrat doit satisfaire **3 conditions cumulatives** :\n1. **Le consentement libre et éclairé** des parties (sans vice : erreur, dol ou violence).\n2. **La capacité juridique** de contracter (personne majeure capable ou représentant légal).\n3. **Un contenu licite et certain** (l'objet doit exister, être déterminé ou déterminable, et ne pas violer l'ordre public).\n• Sanction si l'une des conditions manque : la **nullité** du contrat (relative pour protéger une partie, absolue pour protéger l'ordre public).",
      example: "Un contrat de maintenance réseau signé suite à des mensonges délibérés sur les performances de la fibre (dol) peut être annulé devant le tribunal."
    },
    {
      id: "notion_th1_3",
      themeId: "th1",
      term: "Inexécution Contractuelle & Sanctions",
      source: "Article 1217 du Code civil",
      definition: "Lorsqu'une partie n'exécute pas son obligation ou l'exécute mal, le créancier dispose de plusieurs remèdes :\n• **L'exception d'inexécution :** refuser d'exécuter sa propre prestation tant que l'autre n'agit pas.\n• **L'exécution forcée en nature :** contraindre l'autre à exécuter ce qui était promis.\n• **La réduction du prix :** en cas d'exécution imparfaite.\n• **La résolution ou résiliation :** anéantissement du contrat (avec effet rétroactif pour la résolution, ou pour l'avenir pour la résiliation d'un contrat à exécution successive).\n• **Dommages et intérêts :** réparation du préjudice subi.\n• **Clause exonératoire :** la Force majeure (événement imprévisible, irrésistible et extérieur).",
      example: "Un hébergeur dont le datacenter brûle suite à un événement imprévisible et extérieur peut invoquer la force majeure s'il n'a commis aucune négligence."
    },
    {
      id: "notion_th1_4",
      themeId: "th1",
      term: "Asymétrie d'Information & Aléa Moral",
      source: "Théorie économique (George Akerlof & Joseph Stiglitz)",
      definition: "Situation où, lors d'une transaction, l'une des parties possède plus d'informations pertinentes que l'autre.\n• **Sélection adverse (avant la signature / ex-ante) :** l'acheteur ignore les vices cachés du produit, ce qui peut conduire les mauvais produits à éliminer les bons sur le marché (théorie des 'lemons' d'Akerlof).\n• **Aléa moral (après la signature / ex-post) :** une partie modifie son comportement et prend plus de risques car elle se sait assurée ou protégée contre les conséquences négatives (Stiglitz).",
      example: "Un employé qui clique sur des pièces jointes suspectes sans faire attention parce qu'il sait que l'équipe d'administration réseau restaure tout en cas de ransomware."
    },

    /* --- THÈME 2 : RÉGULATION ÉCONOMIQUE --- */
    {
      id: "notion_th2_1",
      themeId: "th2",
      term: "Finalités de l'Entreprise & RSE",
      source: "Peter Drucker, Milton Friedman & R. Edward Freeman (Loi PACTE 2019)",
      definition: "L'entreprise poursuit plusieurs finalités :\n• **Finalité économique (lucrative) :** assurer sa pérennité et générer du profit.\n• **Finalité sociale :** créer des emplois et offrir de bonnes conditions de travail.\n• **RSE (Responsabilité Sociétale des Entreprises) :** intégration volontaire des enjeux sociaux, éthiques et environnementaux dans ses activités et ses interactions avec les **parties prenantes** (salariés, clients, actionnaires, fournisseurs, société civile).\n• **Loi PACTE (2019) :** permet à l'entreprise d'inscrire une « raison d'être » dans ses statuts ou de devenir « société à mission ».",
      example: "Une entreprise informatique qui met en place une charte Green IT pour allonger la durée de vie des postes de travail et réduire son empreinte carbone."
    },
    {
      id: "notion_th2_2",
      themeId: "th2",
      term: "Politiques Économiques : Conjoncturelle vs Structurelle",
      source: "Macroéconomie & Nicolas Kaldor",
      definition: "Actions menées par l'État pour réguler l'activité économique :\n• **Politique conjoncturelle (court terme) :** vise à stabiliser l'économie face aux crises autour du « Carré magique » de Kaldor (croissance, plein-emploi, stabilité des prix, équilibre extérieur). Elle utilise l'arme **budgétaire** (dépenses publiques, impôts) et l'arme **monétaire** (taux directeurs fixés par la BCE).\n• **Politique structurelle (long terme) :** vise à modifier durablement le fonctionnement des structures économiques (investissements dans la recherche, souveraineté numérique, formation, transition écologique).",
      example: "Le plan d'investissement 'France 2030' finançant la filière française des semi-conducteurs et de l'IA est une politique structurelle."
    },
    {
      id: "notion_th2_3",
      themeId: "th2",
      term: "Régulation de la Concurrence",
      source: "Autorité de la Concurrence (France) & Commission Européenne (Art. 101 et 102 TFUE)",
      definition: "Ensemble des règles destinées à garantir un fonctionnement loyal du marché et à protéger les consommateurs contre 3 pratiques illicites :\n1. **L'entente illicite (cartel) :** accord secret entre entreprises concurrentes pour fixer les prix ou se partager les marchés.\n2. **L'abus de position dominante :** comportement anticoncurrentiel d'une entreprise puissante visant à éliminer ses rivaux (ventes liées, prix d'éviction).\n3. **Le contrôle des concentrations :** surveillance des fusions-acquisitions pour empêcher la constitution de quasi-monopoles néfastes.",
      example: "Une sanction financière infligée par l'UE à un géant du numérique pour avoir imposé son navigateur web par défaut avec son système d'exploitation."
    },
    {
      id: "notion_th2_4",
      themeId: "th2",
      term: "Les Autorités de Régulation (AAI)",
      source: "Droit public & Droit du numérique",
      definition: "Autorités Administratives Indépendantes dotées d'un pouvoir d'investigation et de sanction pour superviser des secteurs stratégiques :\n• **CNIL (Commission Nationale de l'Informatique et des Libertés) :** veille à la protection des données personnelles et de la vie privée.\n• **ARCEP :** régulateur des communications électroniques (réseaux télécoms, neutralité du net, attribution des fréquences 5G).\n• **ANSSI :** autorité nationale en matière de sécurité et de cyberdéfense des systèmes d'information (application de la directive NIS 2).",
      example: "La CNIL prononce une mise en demeure contre une entreprise pour défaut de sécurisation des mots de passe des utilisateurs (stockage en clair)."
    },

    /* --- THÈME 3 : ORGANISATION DE L'ACTIVITÉ --- */
    {
      id: "notion_th3_1",
      themeId: "th3",
      term: "Les Structures Organisationnelles",
      source: "Théorie des organisations (Henri Fayol)",
      definition: "Façon dont le travail et les responsabilités sont répartis au sein de l'entreprise :\n• **Structure hiérarchique (Fayol) :** principe d'unité de commandement (chaque salarié ne dépend que d'un seul chef direct). Simple et claire, mais rigide et lente.\n• **Structure divisionnelle :** découpage par produits, clients ou zones géographiques. Chaque division fonctionne de façon autonome.\n• **Structure matricielle :** double hiérarchie croisant fonctions (technique, finance) et projets/divisions. Très flexible et transverse, mais risque de conflits d'autorité.",
      example: "Dans une société de services IT, un technicien réseau dépend à la fois de son Responsable d'infrastructure et du Chef de projet client (structure matricielle)."
    },
    {
      id: "notion_th3_2",
      themeId: "th3",
      term: "Mécanismes de Coordination & Composantes de Mintzberg",
      source: "Henry Mintzberg (Structure et dynamique des organisations)",
      definition: "Mintzberg identifie **5 composantes de base** (Sommet stratégique, Ligne hiérarchique, Centre opérationnel, Technostructure, Support logistique) et **6 mécanismes pour coordonner le travail** :\n1. **Ajustement mutuel :** échange informel direct entre collègues.\n2. **Supervision directe :** ordres d'un supérieur hiérarchique.\n3. **Standardisation des procédés :** procédures et modes opératoires stricts.\n4. **Standardisation des résultats :** fixation d'objectifs de performance chiffrés.\n5. **Standardisation des qualifications :** compétences acquises par les diplômes et certifications.\n6. **Standardisation des normes :** valeurs communes et culture partagée.",
      example: "L'obligation pour un administrateur réseau de posséder la certification Cisco CCNA correspond à la standardisation des qualifications."
    },
    {
      id: "notion_th3_3",
      themeId: "th3",
      term: "Styles de Direction de Likert",
      source: "Rensis Likert (Psychologie du management)",
      definition: "Likert classe le comportement managérial en **4 styles distincts** :\n1. **Autoritaire exploiteur :** décisions unilatérales, management par la crainte et les sanctions, communication descendante.\n2. **Paternaliste :** autorité bienveillante, motivation par les récompenses, mais centralisation forte du pouvoir.\n3. **Consultatif :** les collaborateurs sont consultés avant la prise de décision finale par le manager.\n4. **Participatif :** prise de décision collective, forte autonomie accordée aux équipes, confiance totale (modèle privilégié des équipes Agiles/DevOps).",
      example: "Une équipe de développeurs et d'ingénieurs réseaux fonctionnant en méthode Scrum avec des Daily Meetings participatifs."
    },
    {
      id: "notion_th3_4",
      themeId: "th3",
      term: "Management Stratégique vs Management Opérationnel",
      source: "Igor Ansoff & Théorie managériale",
      definition: "Deux niveaux d'action managériale indispensables et complémentaires :\n• **Management Stratégique :** exercé par la Direction Générale sur le **long terme (3 à 5 ans)**. Il définit les orientations générales, engage des investissements financiers lourds et ses décisions sont difficilement réversibles.\n• **Management Opérationnel :** exercé par les managers intermédiaires et de proximité sur le **court et moyen terme**. Il optimise l'utilisation courante des ressources et ses décisions sont facilement réversibles au quotidien.",
      example: "Décision stratégique : migrer l'ensemble des serveurs internes vers le Cloud AWS. Décision opérationnelle : organiser les astreintes du week-end pour l'équipe support."
    },

    /* --- THÈME 4 : IMPACT DU NUMÉRIQUE & RGPD --- */
    {
      id: "notion_th4_1",
      themeId: "th4",
      term: "Système d'Information (SI) & ERP/PGI",
      source: "Management des Systèmes d'Information",
      definition: "• **Système d'Information (SI) :** ensemble organisé de ressources (matériels, logiciels, données, réseaux, procédures et personnel) permettant de **collecter, stocker, traiter et diffuser l'information** utile aux prises de décision.\n• **PGI / ERP (Progiciel de Gestion Intégré) :** logiciel d'entreprise modulaire s'appuyant sur une **base de données unique et partagée** pour synchroniser l'ensemble des processus métier (comptabilité, RH, logistique, relation client, production).",
      example: "Lorsqu'un client passe commande, l'ERP met à jour simultanément le stock, génère l'écriture comptable et prévient le service logistique."
    },
    {
      id: "notion_th4_2",
      themeId: "th4",
      term: "Économie de Plateforme & Nouveaux Modèles d'Affaires",
      source: "Économie numérique & Théorie des marchés bifaces",
      definition: "• **Économie de plateforme :** modèle économique dans lequel une plateforme numérique sert d'intermédiaire pour connecter directement plusieurs groupes d'utilisateurs (offreurs et demandeurs), générant des **effets de réseau** (la valeur augmente avec le nombre d'utilisateurs).\n• **Modèles de monétisation numérique :**\n  - *SaaS (Software as a Service) :* vente d'abonnements récurrents à un service hébergé.\n  - *Freemium :* version de base gratuite et fonctionnalités avancées payantes.\n  - *Monétisation des données :* ciblage publicitaire personnalisé.",
      example: "GitHub ou Microsoft 365 fonctionnent sur le modèle SaaS sur abonnement avec des options Freemium pour les étudiants."
    },
    {
      id: "notion_th4_3",
      themeId: "th4",
      term: "Principes Fondamentaux du RGPD",
      source: "Règlement Général sur la Protection des Données (Règlement UE 2016/679)",
      definition: "Cadre européen obligatoire protégeant les données personnelles des personnes physiques :\n• **Licéité, loyauté et transparence :** recueil d'un consentement explicite ou justification d'un intérêt légitime.\n• **Minimisation des données :** ne collecter STRICTEMENT que les données adéquates et nécessaires à la finalité prévue.\n• **Sécurité et intégrité :** chiffrement, authentification forte, sauvegardes.\n• **Obligations majeures de l'entreprise :** tenue du registre des activités de traitement, désignation d'un DPO (Délégué à la Protection des Données), notification obligatoire à la CNIL sous **72 heures** en cas de violation de données.\n• **Droits des personnes :** droit d'accès, rectification, effacement (« droit à l'oubli »), portabilité.",
      example: "Une faille de sécurité provoquant la fuite de 10 000 mots de passe doit être notifiée à la CNIL dans les 72h avec indication des mesures correctives prises."
    },
    {
      id: "notion_th4_4",
      themeId: "th4",
      term: "Droit du Numérique & Infractions STAD",
      source: "Code de la propriété intellectuelle & Articles 323-1 et suivants du Code pénal",
      definition: "Réglementation juridique des créations logicielles et des délits informatiques :\n• **Propriété intellectuelle sur les logiciels :** le logiciel est protégé par le **droit d'auteur** (dès sa création s'il est original). Pour un salarié créateur, les droits patrimoniaux appartiennent automatiquement à **l'employeur** (art. L. 113-9 CPI).\n• **Atteinte aux STAD (Système de Traitement Automatisé de Données) :** sanctions pénales pour l'accès ou le maintien frauduleux dans un système informatique, l'entrave au fonctionnement (DDoS), la suppression ou modification frauduleuse de données.",
      example: "Pénétrer dans un serveur sans autorisation, même sans rien voler ni casser, constitue un accès frauduleux à un STAD puni de 2 ans de prison et 60 000 € d'amende."
    },

    /* --- THÈME 5 : MUTATIONS DU TRAVAIL & DROIT SOCIAL --- */
    {
      id: "notion_th5_1",
      themeId: "th5",
      term: "Contrat de Travail & Lien de Subordination",
      source: "Cour de cassation (Arrêt Société générale 1996) & Code du travail",
      definition: "Le contrat de travail est caractérisé par **3 éléments constitutifs obligatoires** :\n1. Une **prestation de travail** effectuée par le salarié.\n2. Une **rémunération** (salaire) versée par l'employeur.\n3. Un **lien de subordination juridique** (critère déterminant) : l'employeur détient le pouvoir de donner des ordres, d'en contrôler l'exécution et de sanctionner les manquements du subordonné.\n• Types de contrats : le **CDI** (Contrat à Durée Indéterminée) est la forme normale et générale de la relation d'emploi ; le **CDD** est strictement encadré (remplacement temporaire, surcroît exceptionnel d'activité).",
      example: "Un chauffeur utilisant une application de livraison qui se voit imposer ses horaires, ses itinéraires et subit des pénalités peut être requalifié en salarié sous CDI."
    },
    {
      id: "notion_th5_2",
      themeId: "th5",
      term: "Les 3 Pouvoirs de l'Employeur",
      source: "Code du travail & Jurisprudence sociale",
      definition: "L'employeur dispose de prérogatives managériales et juridiques :\n• **Le pouvoir de direction :** organiser l'activité, fixer les objectifs et répartir les tâches.\n• **Le pouvoir réglementaire :** élaborer le **Règlement Intérieur** (obligatoire à partir de 50 salariés), fixant les règles d'hygiène, de sécurité et la discipline générale (dont la charte informatique).\n• **Le pouvoir disciplinaire :** sanctionner un comportement fautif du salarié (échelle des peines : avertissement, blâme, mise à pied disciplinaire, mutation, rétrogradation, licenciement). Les sanctions pécuniaires (amendes sur salaire) sont STRICTEMENT INTERDITES.",
      example: "Un administrateur système qui désactive volontairement le pare-feu peut recevoir un blâme ou une mise à pied disciplinaire pour faute."
    },
    {
      id: "notion_th5_3",
      themeId: "th5",
      term: "Modes de Rupture du Contrat de Travail",
      source: "Articles L. 1231-1 et suivants du Code du travail",
      definition: "Modalités juridiques de fin du contrat de travail :\n• **Démission :** décision unilatérale, libre, claire et non équivoque du salarié.\n• **Rupture conventionnelle :** accord amiable conclu entre le salarié et l'employeur, ouvrant droit à une indemnité spécifique et aux allocations chômage après homologation par la DREETS.\n• **Licenciement pour motif personnel :** repose sur le comportement ou les aptitudes du salarié. Nécessite obligatoirement une **Cause Réelle et Sérieuse** (faute simple, grave ou lourde, inaptitude médicale, insuffisance professionnelle).\n• **Licenciement pour motif économique :** non inhérent à la personne du salarié, motivé par des difficultés économiques, mutations technologiques ou réorganisation nécessaire à la compétitivité.",
      example: "La suppression de postes de techniciens de saisie de données suite à l'automatisation par un logiciel d'IA constitue un licenciement pour motif économique."
    },
    {
      id: "notion_th5_4",
      themeId: "th5",
      term: "GEPP, Télétravail & Droit à la Déconnexion",
      source: "Code du travail (Ordonnances Macron) & Accord National Interprofessionnel",
      definition: "Dispositifs d'adaptation du travail moderne :\n• **GEPP (Gestion des Emplois et des Parcours Professionnels) :** méthode prospective de gestion RH visant à anticiper les évolutions des métiers, des compétences et des qualifications nécessaires face aux transformations technologiques.\n• **Télétravail :** forme d'organisation du travail utilisant les technologies de l'information hors des locaux de l'employeur (obligation d'égalité de traitement avec les salariés sur site et prise en charge des outils).\n• **Droit à la déconnexion :** droit garanti pour chaque salarié de ne pas être sollicité par courriel ou téléphone en dehors de son temps de travail pour préserver sa vie personnelle et sa santé mentale.",
      example: "Une entreprise installe un serveur de messagerie qui bloque l'envoi d'emails internes entre 20h et 7h du matin pour respecter le droit à la déconnexion."
    },

    /* --- THÈME 6 : CHOIX STRATÉGIQUES --- */
    {
      id: "notion_th6_1",
      themeId: "th6",
      term: "Diagnostic Stratégique Interne & Modèle VRIN",
      source: "Edith Penrose (Resource-Based View) & Jay Barney",
      definition: "Analyse des forces et faiblesses internes de l'organisation pour dégager un avantage concurrentiel durable :\n• **Ressources :** actifs tangibles (matériels, serveurs, trésorerie) ou intangibles (brevets, réputation de la marque, logiciels propriétaires).\n• **Compétences fondamentales (Hamel & Prahalad) :** savoir-faire organisationnel et technique distinctif difficile à imiter par les concurrents.\n• **Critères du modèle VRIN (Barney) :** pour procurer un avantage durable, une ressource doit être **Valeureuse**, **Rare**, **Inimitable** et **Non-substituable**.",
      example: "Une équipe d'ingénieurs experts en cybersécurité offensive détenant des compétences rares et des outils de détection propriétaires crée un avantage concurrentiel VRIN."
    },
    {
      id: "notion_th6_2",
      themeId: "th6",
      term: "Options Stratégiques Globales : Spécialisation, Diversification, Externalisation",
      source: "Stratégie d'entreprise & Ronald Coase (Coûts de transaction)",
      definition: "Orientations fondamentales prises au niveau global de l'entreprise (Corporate Strategy) :\n• **Spécialisation :** concentrer ses efforts sur un seul domaine d'activité pour y acquérir une expertise maximale et des économies d'échelle.\n• **Diversification :** s'implanter sur de nouvelles activités ou de nouveaux marchés pour répartir les risques et exploiter des synergies (diversification liée ou conglomérale).\n• **Intégration (« Faire ») :** réaliser les activités en interne pour maîtriser la chaîne de valeur.\n• **Externalisation (« Faire-faire ») :** confier une activité non essentielle à un sous-traitant pour réduire les coûts fixes et se recentrer sur son cœur de métier.",
      example: "Une banque externalise la gestion de son parc informatique et de son Helpdesk auprès d'une ESN spécialisée."
    },
    {
      id: "notion_th6_3",
      themeId: "th6",
      term: "Les 3 Stratégies Génériques de Michael Porter",
      source: "Michael Porter (Competitive Strategy)",
      definition: "Porter démontre qu'une entreprise doit choisir une stratégie claire au niveau d'un DAS (Domaine d'Activité Stratégique) sous peine d'être « coincée au milieu » :\n1. **Domination par les coûts :** proposer des prix inférieurs aux concurrents en réduisant ses coûts de revient grâce aux économies d'échelle et à l'effet d'expérience.\n2. **Différenciation :** proposer une offre unique avec des caractéristiques valorisées par le client (qualité premium, sécurité avancée, marque forte) justifiant un prix plus élevé.\n3. **Focalisation (stratégie de niche) :** cibler un segment de marché très étroit et spécifique en adaptant son offre aux besoins particuliers de ce groupe de clients.",
      example: "OVHcloud propose des serveurs standards à bas coût (coûts), Apple vend des appareils chers et sécurisés (différenciation), et un éditeur vend un logiciel réservé aux hôpitaux militaires (focalisation)."
    },
    {
      id: "notion_th6_4",
      themeId: "th6",
      term: "Modalités de Croissance : Interne, Externe, Conjointe",
      source: "Développement de l'entreprise",
      definition: "Moyens mobilisés par l'entreprise pour accroître sa taille et son pouvoir de marché :\n• **Croissance interne (organique) :** l'entreprise grandit par ses propres moyens en achetant de nouveaux équipements, en embauchant et en développant ses propres produits. Processus sûr mais lent.\n• **Croissance externe :** rachat, fusion ou absorption d'entreprises concurrentes ou complémentaires. Permet un gain de temps immédiat et l'acquisition instantanée de parts de marché, mais coûte cher et présente un risque de rejet culturel.\n• **Croissance conjointe (partenariale) :** alliance stratégique, franchise ou joint-venture entre entreprises indépendantes qui mettent en commun des compétences ou des capitaux pour un projet précis.",
      example: "Cisco s'alliant avec Microsoft pour certifier des salles de réunion hybrides Teams et Webex (croissance conjointe)."
    }
  ],

  /* ==========================================================================
     FLASHCARDS (3 PAR THÈME = 18 FLASHCARDS RECOMMANDÉES)
     ========================================================================== */
  flashcards: [
    // Thème 1
    {
      id: "cejm_fc_1",
      themeId: "th1",
      title: "Valeur Ajoutée (Formule & Répartition)",
      front: "Quelle est la formule de calcul de la Valeur Ajoutée (VA) et entre qui est-elle répartie ?",
      back: "• Formule : VA = Chiffre d'Affaires (CA) - Consommations Intermédiaires (CI).\n• Répartition de la VA entre 5 bénéficiaires :\n1. Les salariés (salaires et cotisations sociales).\n2. L'État (impôts et taxes sur la production).\n3. Les banques/prêteurs (intérêts des emprunts).\n4. Les associés/actionnaires (dividendes).\n5. L'entreprise elle-même (autofinancement et amortissements)."
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
      back: "• Sélection adverse (Akerlof) : Se produit AVANT la signature du contrat (ex-ante). L'une des parties cache des informations importantes sur la qualité du produit (ex: voiture d'occasion défaillante).\n• Aléa moral (Stiglitz) : Se produit APRÈS la signature du contrat (ex-post). Une partie prend des risques démesurés car elle n'en supporte pas les conséquences financières (ex: négligence sécuritaire car couverte par une assurance)."
    },

    // Thème 2
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
      back: "• Conjoncturelle : Action à COURT TERME pour réguler les déséquilibres immédiats (chômage, inflation) via les budgets publics et les taux de la BCE.\n• Structurelle : Action à LONG TERME pour transformer les fondements de l'économie (investissements R&D, infrastructures numériques, transition écologique, éducation)."
    },
    {
      id: "cejm_fc_6",
      themeId: "th2",
      title: "Régulation : Abus de Position Dominante",
      front: "Avoir une position dominante sur un marché est-il illégal ? Qu'est-ce qui est sanctionné ?",
      back: "• Être en position dominante n'est PAS illégal en soi (résultat d'un succès commercial).\n• Ce qui est STRICTEMENT INTERDIT et sanctionné par l'Autorité de la Concurrence, c'est l'ABUS de cette position (ex: ventes liées forcées, prix prédateurs pour asphyxier les concurrents, refus de vente injustifié)."
    },

    // Thème 3
    {
      id: "cejm_fc_7",
      themeId: "th3",
      title: "Structure Hiérarchique vs Matricielle",
      front: "Quels sont les avantages et inconvénients comparés des structures hiérarchique et matricielle ?",
      back: "• Structure Hiérarchique (Fayol) : Unité de commandement (1 seul chef). Clair et discipliné, mais rigide et lent à communiquer.\n• Structure Matricielle : Double hiérarchie (par fonction technique + par projet client). Très flexible et transversale, mais risque de tensions et d'ordres contradictoires entre responsables."
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

    // Thème 4
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
      term: "Droit d'Auteur sur les Logiciels",
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

    // Thème 5
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

    // Thème 6
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
     QUIZZES (2 PAR THÈME = 12 QUESTIONS EXAMEN CEJM)
     ========================================================================== */
  quizzes: [
    // Thème 1
    {
      id: "cejm_q1",
      themeId: "th1",
      question: "Une entreprise informatique réalise un Chiffre d'Affaires de 200 000 €. Elle a acheté pour 80 000 € de serveurs et licences consommées. À combien s'élève sa Valeur Ajoutée ?",
      options: [
        "280 000 €",
        "120 000 €",
        "80 000 €",
        "200 000 €"
      ],
      correctAnswer: 1,
      explanation: "La Valeur Ajoutée (VA) est calculée par la formule : VA = Chiffre d'Affaires (200 000 €) - Consommations Intermédiaires (80 000 €) = 120 000 €."
    },
    {
      id: "cejm_q2",
      themeId: "th1",
      question: "Dans le cadre d'un contrat de vente de matériel réseau, un vendeur dissimule volontairement une panne de carte mère pour inciter le client à signer. Quel vice du consentement est caractérisé ?",
      options: [
        "L'erreur simple",
        "Le dol",
        "La violence physique",
        "La lésion"
      ],
      correctAnswer: 1,
      explanation: "Le dol (article 1137 du Code civil) est le fait pour un contractant d'obtenir le consentement de l'autre par des manœuvres frauduleuses ou le mensonge délibéré. Il entraîne la nullité relative du contrat."
    },

    // Thème 2
    {
      id: "cejm_q3",
      themeId: "th2",
      question: "La Banque Centrale Européenne (BCE) décide de relever ses taux directeurs pour freiner l'inflation. De quel type de politique économique s'agit-il ?",
      options: [
        "Une politique budgétaire conjoncturelle",
        "Une politique monétaire conjoncturelle",
        "Une politique industrielle structurelle",
        "Une politique de nationalisation"
      ],
      correctAnswer: 1,
      explanation: "L'action sur les taux d'intérêt par la banque centrale pour réguler à court terme l'inflation et la masse monétaire relève typiquement de la politique monétaire conjoncturelle."
    },
    {
      id: "cejm_q4",
      themeId: "th2",
      question: "Quelle autorité administrative indépendante (AAI) est chargée en France de veiller à la conformité des traitements de données personnelles et peut infliger de lourdes sanctions financières ?",
      options: [
        "L'ARCEP",
        "L'ANSSI",
        "La CNIL",
        "L'Autorité de la Concurrence"
      ],
      correctAnswer: 2,
      explanation: "La CNIL (Commission Nationale de l'Informatique et des Libertés) est l'autorité régulatrice française garante du respect du RGPD et des libertés numériques."
    },

    // Thème 3
    {
      id: "cejm_q5",
      themeId: "th3",
      question: "Dans la typologie des 4 styles de direction de Rensis Likert, quel style se caractérise par une prise de décision en équipe et une forte autonomie laissée aux collaborateurs ?",
      options: [
        "Le style autoritaire exploiteur",
        "Le style paternaliste",
        "Le style consultatif",
        "Le style participatif"
      ],
      correctAnswer: 3,
      explanation: "Le style participatif de Likert repose sur la coopération, la confiance mutuelle et la participation active des salariés aux décisions, comme dans les méthodes Agiles."
    },
    {
      id: "cejm_q6",
      themeId: "th3",
      question: "Selon Henry Mintzberg, quel mécanisme de coordination intervient lorsque des techniciens résolvent un incident réseau par une communication directe et informelle entre eux ?",
      options: [
        "La supervision directe",
        "L'ajustement mutuel",
        "La standardisation des résultats",
        "La standardisation des procédés"
      ],
      correctAnswer: 1,
      explanation: "L'ajustement mutuel est la coordination informelle par simple communication horizontale entre salariés effectuant le travail."
    },

    // Thème 4
    {
      id: "cejm_q7",
      themeId: "th4",
      question: "En vertu de l'article 33 du RGPD, en cas de violation de données personnelles présentant un risque, quel est le délai maximal pour notifier l'incident à la CNIL ?",
      options: [
        "24 heures",
        "72 heures",
        "7 jours",
        "30 jours"
      ],
      correctAnswer: 1,
      explanation: "Le responsable de traitement doit notifier toute violation de données à caractère personnel à la CNIL dans un délai maximal de 72 heures après en avoir pris connaissance."
    },
    {
      id: "cejm_q8",
      themeId: "th4",
      question: "Un technicien informatique salarié développe un script d'automatisation de sauvegarde pendant ses heures de travail avec le matériel de son entreprise. À qui appartiennent les droits d'exploitation commerciale (droits patrimoniaux) ?",
      options: [
        "Au technicien exclusivement en vertu du droit moral",
        "À l'employeur automatiquement (Art. L. 113-9 du CPI)",
        "À l'État français",
        "Au créateur du langage de programmation utilisé"
      ],
      correctAnswer: 1,
      explanation: "L'article L. 113-9 du Code de la propriété intellectuelle attribue automatiquement à l'employeur les droits patrimoniaux sur les logiciels créés par un salarié dans l'exercice de ses fonctions."
    },

    // Thème 5
    {
      id: "cejm_q9",
      themeId: "th5",
      question: "Quel est le critère juridique déterminant qui permet aux tribunaux de requalifier un travailleur indépendant (micro-entrepreneur) en salarié sous contrat de travail ?",
      options: [
        "Le montant élevé de sa rémunération",
        "Le lien de subordination juridique",
        "L'obligation de posséder un diplôme supérieur",
        "Le port d'un badge professionnel"
      ],
      correctAnswer: 1,
      explanation: "Le lien de subordination juridique (pouvoir de donner des ordres, d'en contrôler l'exécution et de sanctionner) est le critère discriminant du contrat de travail (Jurisprudence Société générale 1996)."
    },
    {
      id: "cejm_q10",
      themeId: "th5",
      question: "Dans le cadre du pouvoir disciplinaire de l'employeur, quelle sanction est expressément interdite par l'article L. 1331-2 du Code du travail ?",
      options: [
        "Le blâme inscrit au dossier",
        "La mise à pied disciplinaire sans solde",
        "L'amende financière ou retenue pécuniaire sur salaire",
        "La rétrogradation de poste"
      ],
      correctAnswer: 2,
      explanation: "Les sanctions pécuniaires (amendes, retenues sur salaire pour punir une faute) sont strictement interdites et nulles de plein droit en droit du travail français."
    },

    // Thème 6
    {
      id: "cejm_q11",
      themeId: "th6",
      question: "Selon la grille d'analyse stratégique de Michael Porter, quelle stratégie générique consiste à cibler un segment de marché très étroit avec une offre hyperspécialisée ?",
      options: [
        "La domination par les coûts",
        "La différenciation par le haut",
        "La focalisation (ou stratégie de niche)",
        "La diversification conglomérale"
      ],
      correctAnswer: 2,
      explanation: "La focalisation (ou stratégie de niche) consiste à rejeter la compétition globale pour s'adresser de façon sur-mesure à une cible restreinte et spécifique."
    },
    {
      id: "cejm_q12",
      themeId: "th6",
      question: "Une entreprise française d'hébergement web rachète son concurrent direct pour acquérir immédiatement ses datacenters et ses 5 000 clients. Quel type de croissance illustre cette opération ?",
      options: [
        "La croissance interne (organique)",
        "La croissance externe",
        "La croissance partenariale conjointe",
        "L'externalisation sous contrat"
      ],
      correctAnswer: 1,
      explanation: "Le rachat ou l'absorption d'une autre entreprise pour gagner rapidement des parts de marché et des actifs constitue une croissance externe."
    }
  ]
};
