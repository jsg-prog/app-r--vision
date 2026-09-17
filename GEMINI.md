# MEMOIRE DE PROJET ANTIGRAVITY • CYBER-SISR & CYBEROPS HUB

Ce fichier sert de mémoire permanente pour l'assistant Antigravity sur n'importe quel ordinateur (lycée ou maison).

## Étudiant & Profil
- **Nom/Prénom** : Julia (jsg-prog)
- **Formation** : BTS SIO option SISR (Services Informatiques aux Organisations - Solutions d'Infrastructure, Systèmes et Réseaux)
- **Profil cognitif** : Dyslexique, dyscalculique, TDAH, Autisme de type 1. L'agent et J.A.R.V.I.S doivent TOUJOURS adapter leurs réponses :
  - **TDAH/Dyslexie** : Phrases très courtes, listes à puces, mise en évidence en gras, pas de gros blocs de texte.
  - **Dyscalculie** : Décomposer *chaque* étape mathématique (ex: calculs IP) sans rien sauter.
  - **Autisme Type 1** : Communication explicite, structurée, prévisible et littérale (pas de second degré).
- **Objectifs clés** :
  1. Réussite des épreuves professionnelles du BTS SIO SISR (E4, E5).
  2. Obtention de la certification officielle **Cisco CyberOps Associate (200-201 CBROPS)**.
  3. Réussite de la **CEJM (Culture Économique, Juridique et Managériale)** : matière difficile pour l'étudiante, axée sur des explications simples, concrètes et la méthode du **syllogisme juridique** (Majeure, Mineure, Conclusion).
  4. Préparation au **TOEIC** (Objectif 750+ / 850+) : Part 5 (Incomplete Sentences), règles de grammaire et vocabulaire IT.

## Architecture du Projet
L'application est une Single-Page Application (SPA) et **Progressive Web App (PWA)** ultra-rapide, moderne, sans dépendances, installable sur mobile/tablette et hébergée sur **GitHub Pages** (`https://jsg-prog.github.io/app-r--vision/`).

### Structure des Fichiers
- `index.html` : Interface principale avec design dark glassmorphic/cyberpunk, navigation responsive (tiroir mobile + barre inférieure au pouce).
- `manifest.json` : Configuration PWA (icônes, plein écran, installation sur écran d'accueil iPhone/Android).
- `sw.js` : Service Worker pour le cache hors-ligne et la vitesse instantanée.
- `.github/workflows/deploy-pages.yml` : Déploiement automatique GitHub Actions vers GitHub Pages.
- `Lancer-App.bat` : Lanceur 1-clic pour ouvrir l'application dans le navigateur par défaut sur PC.
- `css/`
  - `style.css` : Thème global Cyberpunk, grille futuriste, navigation responsive mobile/tablette.
  - `components.css` : Styles des composants (Quiz, Flashcards, HUD holographique J.A.R.V.I.S., Calculateur IP).
- `js/data/`
  - `sisr-database.js` : Questions, flashcards et cheat-sheet BTS SIO SISR (VLAN 802.1Q, Trunk, OSPF, NAT, DHCP DORA, AD DS, GPO, Sauvegarde 3-2-1, Tables de Routage, Longest Prefix Match, Distance Administrative, STP 802.1D / RSTP 802.1w, PortFast, BPDU Guard).
  - `cyberops-database.js` : Arborescence officielle complète NetAcad & ITExamAnswers (9 groupes de Checkpoint Modules 1 à 28 + Certification 200-201 CBROPS).
  - `cejm-database.js` : Manuel de référence officiel **CEJM Tome Unique 1re et 2e années - Éditions Foucher** (les 6 thèmes complets, 36 définitions officielles exhaustives avec sources juridiques et cas Tech, 18 flashcards, banque de 120 questions de quiz d'examen soit 20 par thème, atelier du syllogisme juridique, matrices SWOT/PESTEL/Porter/Chaîne de valeur).
  - `toeic-database.js` : Drills Part 5, vocabulaire Corporate IT, pièges de grammaire et faux-amis.
- `js/modules/`
  - `jarvis-core.js` : Moteur **J.A.R.V.I.S. Vocal & Holographique** (Synthèse vocale Web Speech API, reconnaissance micro, HUD réacteur arc animé, mode hors-ligne immédiat + mode connecté API, déclencheurs locaux SISR, CyberOps et CEJM Foucher).
  - `sisr-training.js` : **Cours & Ateliers Visuels Adaptés** (Anatomie interactive show ip route, simulateur Longest Prefix Match décomposé, élection Root Bridge et rôles de ports STP).
  - `quiz-engine.js` : Moteur de quiz interactif avec chronomètre, score, feedback audio/visuel et explications contextuelles.
  - `flashcards.js` : Système de cartes mémoires avec retournement 3D et auto-évaluation.
  - `sisr-tools.js` : Calculateur IPv4 & Wildcard Mask temps réel + Cheat-sheet commandes Cisco/Linux/PowerShell.
  - `cyberops-hub.js` : Hub Cisco CyberOps avec liens directs vers ITExamAnswers et importateur de questions d'évaluations.
  - `cejm-hub.js` : Hub CEJM, rubrique Définitions officielle par thème (36 notions avec filtres), lanceurs de quiz 20 questions par thème et atelier syllogisme juridique.
  - `toeic-hub.js` : Speed drills et flashcards TOEIC.
- `js/storage.js` : Gestionnaire de persistance LocalStorage avec export/import JSON.

## Instructions pour l'Agent Antigravity
Lorsque Julia te demande d'ajouter de nouveaux cours, des évaluations Cisco ou des questions :
1. Intègre les nouvelles données directement dans le fichier approprié sous `js/data/`.
2. Maintiens le style pédagogique bienveillant, clair et technique.
3. Conserve la compatibilité avec le système vocal de J.A.R.V.I.S.
