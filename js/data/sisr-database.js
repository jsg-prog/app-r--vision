/* ==========================================================================
   BTS SIO SISR - COMPREHENSIVE REVISION DATABASE
   Modules: Réseaux, Systèmes & Virtualisation, Services Réseau, Cybersécurité
   ========================================================================== */

const SISR_DATABASE = {
  categories: [
    { id: "all", name: "Tous les sujets", icon: "🌐" },
    { id: "reseau", name: "Réseaux & Commutation", icon: "🔌" },
    { id: "systeme", name: "Systèmes & AD DS", icon: "🖥️" },
    { id: "services", name: "Services Réseau (DNS, DHCP)", icon: "⚙️" },
    { id: "securite", name: "Cybersécurité & Supervision", icon: "🛡️" }
  ],

  flashcards: [
    {
      id: "sisr_fc_1",
      category: "reseau",
      title: "Différence entre VLAN par port et VLAN par tag 802.1Q",
      front: "Quelle est la différence fondamentale entre un port Access et un port Trunk (802.1Q) sur un commutateur Cisco ?",
      back: "• Port Access : Appartient à un SEUL VLAN. Le trafic sortant est 'untagged' (non étiqueté). Utilisé pour les machines terminales (PC, imprimantes, serveurs).\n• Port Trunk (802.1Q) : Transporte le trafic de PLUSIEURS VLANs simultanément entre switches ou vers un routeur. Il ajoute une étiquette (tag) de 4 octets à l'en-tête Ethernet (incluant le VLAN ID sur 12 bits)."
    },
    {
      id: "sisr_fc_2",
      category: "services",
      title: "Processus DORA en DHCP",
      front: "Que signifie l'acronyme DORA pour l'attribution d'une adresse IP par un serveur DHCP ?",
      back: "1. Discover : Le client diffuse un broadcast (255.255.255.255) UDP 67 pour trouver un serveur.\n2. Offer : Le serveur répond en unicast/broadcast avec une proposition d'IP (UDP 68).\n3. Request : Le client confirme son choix en diffusant sa requête à tous les serveurs.\n4. Acknowledge (ACK) : Le serveur valide définitivement le bail IP et les options (passerelle, DNS)."
    },
    {
      id: "sisr_fc_3",
      category: "systeme",
      title: "Active Directory : Rôles FSMO",
      front: "Combien y a-t-il de rôles FSMO dans Active Directory et quels sont-ils ?",
      back: "Il y a 5 rôles FSMO (Flexible Single Master Operation) :\nAu niveau de la Forêt (uniques par forêt) :\n1. Schéma Master\n2. Domain Naming Master\nAu niveau du Domaine (uniques par domaine) :\n3. PDC Emulator (synchronisation temps, mots de passe)\n4. RID Master (pool d'identifiants de sécurité)\n5. Infrastructure Master (références inter-domaines)."
    },
    {
      id: "sisr_fc_4",
      category: "reseau",
      title: "Protocole OSPF (Open Shortest Path First)",
      front: "Quel algorithme utilise OSPF, quelle est sa métrique par défaut et quel est le rôle de la zone 0 ?",
      back: "• Algorithme : Dijkstra (Shortest Path First - SPF), protocole à état de liens (Link-State).\n• Métrique : Coût (Cost) = 10^8 / Bande passante (bps).\n• Zone 0 (Backbone Area) : La zone dorsale centrale à laquelle toutes les autres zones (non-backbone) doivent obligatoirement être raccordées pour échanger du routage."
    },
    {
      id: "sisr_fc_5",
      category: "securite",
      title: "Règle de Sauvegarde 3-2-1",
      front: "En quoi consiste la règle de sauvegarde universelle 3-2-1 préconisée par l'ANSSI ?",
      back: "• 3 copies des données (1 originale + 2 sauvegardes).\n• 2 supports différents (ex: disque dur NAS + bande magnétique LTO ou baie SAN différente) pour éviter la défaillance matérielle d'une même technologie.\n• 1 copie hors site (offsite) ou immuable (cloud distant, coffre-fort) pour parer aux sinistres physiques (incendie, vol) et aux ransomwares."
    },
    {
      id: "sisr_fc_6",
      category: "systeme",
      title: "Ordre d'application des GPO (Stratégies de groupe)",
      front: "Dans quel ordre précis sont appliquées les GPO sous Windows Server (acronyme LSDOU) ?",
      back: "L-S-D-OU :\n1. Local (Stratégie locale de la machine)\n2. Site (Niveau site Active Directory)\n3. Domaine (Niveau domaine)\n4. Unité d'Organisation (OU) (de l'OU parente vers l'OU la plus imbriquée).\nLa dernière GPO appliquée a toujours le dernier mot en cas de conflit (sauf si 'Appliquer/Enforced' est coché)."
    },
    {
      id: "sisr_fc_7",
      category: "reseau",
      title: "NAT Statique vs Dynamique vs PAT",
      front: "Quelle est la différence entre NAT Statique, NAT Dynamique et PAT (Port Address Translation) ?",
      back: "• NAT Statique : 1 IP privée <--> 1 IP publique fixe (pour héberger un serveur Web/Mail accessible de l'extérieur).\n• NAT Dynamique : Pool d'adresses privées vers un pool d'adresses publiques (1 pour 1 temporaire).\n• PAT (NAT Overload) : Plusieurs IP privées partagent UNE SEULE IP publique en différenciant les flux par le numéro de port source (ex: 192.168.1.10:45000 -> 80.12.3.4:45000)."
    },
    {
      id: "sisr_fc_8",
      category: "securite",
      title: "SNMP (Simple Network Management Protocol)",
      front: "Quelles sont les différences entre SNMP v1/v2c et SNMP v3 pour la supervision d'équipements ?",
      back: "• SNMP v1 / v2c : Authentification par simple chaîne de 'communauté' (community string) transmise EN CLAIR sur le réseau (ex: 'public', 'private'). Très vulnérable à l'écoute.\n• SNMP v3 : Apporte la sécurité professionnelle avec authentification forte (SHA/MD5) ET chiffrement des données (AES/DES), prévenant l'usurpation et le reniflage."
    },
    {
      id: "sisr_fc_9",
      category: "reseau",
      title: "Table de Routage : Anatomie d'une entrée Cisco (show ip route)",
      front: "Comment se décompose une ligne de routage dynamique Cisco comme : 'O 10.1.1.0/24 [110/20] via 192.168.1.1, 00:05:12, GigabitEthernet0/1' ?",
      back: "• O : Protocole source (O = OSPF).\n• 10.1.1.0/24 : Réseau de destination avec son masque.\n• [110/20] : [Distance Administrative = 110 / Métrique de coût = 20].\n• via 192.168.1.1 : Prochain saut (adresse IP du routeur voisin).\n• 00:05:12 : Âge de la route (temps depuis sa dernière mise à jour).\n• GigabitEthernet0/1 : Interface physique locale de sortie."
    },
    {
      id: "sisr_fc_10",
      category: "reseau",
      title: "Distance Administrative (AD) : Hiérarchie de confiance",
      front: "Qu'est-ce que la Distance Administrative (AD) et quelles sont les valeurs indispensables à connaître par cœur en BTS SIO ?",
      back: "L'AD mesure la fiabilité de la source de routage (plus le chiffre est PETIT, plus la route est prioritaire) :\n• 0 : Directement connecté (C)\n• 1 : Route statique (S)\n• 90 : EIGRP interne (D)\n• 110 : OSPF (O)\n• 120 : RIP (R)\n• 255 : Route inconnue / non fiable (rejetée)."
    },
    {
      id: "sisr_fc_11",
      category: "reseau",
      title: "Règle de décision : Longest Prefix Match (Plus long préfixe)",
      front: "Quelle est la règle numéro 1 absolue utilisée par un routeur pour choisir la meilleure route vers une IP de destination ?",
      back: "La règle du Longest Prefix Match (le masque le plus long et le plus précis) gagne TOUJOURS en premier !\nExemple pour l'IP 192.168.1.50 :\n1. Une route en /28 (28 bits réseau) sera choisie AVANT une route en /24 (24 bits), qui sera choisie avant /16.\n2. La Distance Administrative (AD) n'est comparée qu'en cas d'égalité stricte de longueur de masque !"
    },
    {
      id: "sisr_fc_12",
      category: "reseau",
      title: "Protocole STP (Spanning Tree Protocol) : Utilité vitale",
      front: "Pourquoi le protocole STP (IEEE 802.1D) est-il obligatoire dans une architecture réseau commutée avec liens redondants ?",
      back: "• Les trames Ethernet n'ont pas de champ TTL (Time-To-Live). Sans STP, les trames de broadcast tournent en boucle à l'infini entre les switches redondants.\n• Conséquences : Tempête de broadcast (saturation 100%), duplication de trames et écroulement des switches.\n• Rôle de STP : Bloquer logiquement les ports redondants pour former un arbre sans boucle, et les réactiver automatiquement en cas de panne."
    },
    {
      id: "sisr_fc_13",
      category: "reseau",
      title: "STP : Comment est élu le Root Bridge (Pont Racine) ?",
      front: "Quelle est la règle précise pour élire le Root Bridge (Switch Maître) dans une topologie STP ?",
      back: "Le switch ayant le Bridge ID (BID) le plus FAIBLE est élu Root Bridge :\n• Étape 1 : Comparer la Priorité STP (valeur par défaut = 32768). Le switch avec la priorité la plus petite gagne (ex: 4096 bat 32768).\n• Étape 2 : Si égalité de priorité, on compare l'adresse MAC. Le switch avec la plus petite adresse MAC gagne."
    },
    {
      id: "sisr_fc_14",
      category: "reseau",
      title: "STP : Les 3 rôles de ports (Root Port, Designated Port, Alternate)",
      front: "Quels sont les rôles des ports STP et comment fonctionnent-ils ?",
      back: "• Root Port (RP) : 1 seul par switch non-racine. C'est le port qui a le coût de chemin le plus faible vers le Root Bridge.\n• Designated Port (DP) : Port en transmission. TOUS les ports du Root Bridge sont Designated. 1 seul port DP par segment réseau.\n• Alternate / Blocked Port : Port bloqué pour couper la boucle logique. Il reste en veille et écoute les BPDU."
    },
    {
      id: "sisr_fc_15",
      category: "reseau",
      title: "Sécurité STP : PortFast et BPDU Guard",
      front: "À quoi servent les technologies de sécurisation 'PortFast' et 'BPDU Guard' sur un switch Cisco ?",
      back: "• PortFast : Fait passer le port immédiatement en état Forwarding (évite l'attente de 30s). À activer UNIQUEMENT sur les ports reliés à des PC, serveurs ou imprimantes.\n• BPDU Guard : Si un commutateur non autorisé est branché sur un port PortFast et émet un BPDU, BPDU Guard coupe immédiatement le port (état 'err-disable') pour sécuriser la topologie."
    }
  ],

  quizzes: [
    {
      id: "sisr_q1",
      category: "reseau",
      question: "Sur un routeur Cisco, quelle commande active le routage entre VLANs sur une sous-interface pour le VLAN 10 ?",
      options: [
        "switchport access vlan 10",
        "encapsulation dot1Q 10",
        "vlan routing enable 10",
        "ip route vlan 10 255.255.255.0"
      ],
      correctAnswer: 1,
      explanation: "La commande 'encapsulation dot1Q 10' configurée sous une sous-interface physique (ex: GigabitEthernet0/0.10) active l'encapsulation de trame 802.1Q pour le VLAN 10 dans une architecture 'Router-on-a-Stick'."
    },
    {
      id: "sisr_q2",
      category: "services",
      question: "Lorsque les clients d'un VLAN différent du serveur DHCP ne reçoivent pas d'adresses IP, quelle commande devez-vous configurer sur la passerelle (routeur/switch L3) ?",
      options: [
        "ip dhcp snooping",
        "ip helper-address <IP_Serveur_DHCP>",
        "dhcp relay enable",
        "ip route 0.0.0.0 0.0.0.0 dhcp"
      ],
      correctAnswer: 1,
      explanation: "Les requêtes DHCP sont des broadcasts (qui ne traversent pas les routeurs). La commande 'ip helper-address <IP>' transforme les requêtes de broadcast DHCP (UDP 67/68) en paquets unicast routables vers le serveur DHCP."
    },
    {
      id: "sisr_q3",
      category: "systeme",
      question: "Quel rôle FSMO est chargé en priorité de synchroniser l'heure sur tous les postes du domaine et de traiter les verrouillages de compte ?",
      options: [
        "Schéma Master",
        "RID Master",
        "PDC Emulator",
        "Infrastructure Master"
      ],
      correctAnswer: 2,
      explanation: "L'émulateur PDC (Primary Domain Controller) est la référence temporelle (serveur NTP) du domaine et a la priorité pour la gestion des mots de passe et le déverrouillage immédiat des comptes utilisateurs."
    },
    {
      id: "sisr_q4",
      category: "reseau",
      question: "Quelle est la distance administrative par défaut du protocole de routage OSPF sur les équipements Cisco ?",
      options: [
        "90",
        "110",
        "120",
        "1"
      ],
      correctAnswer: 1,
      explanation: "La distance administrative d'OSPF est de 110. (Connecté = 0, Statique = 1, EIGRP interne = 90, RIP = 120)."
    },
    {
      id: "sisr_q5",
      category: "securite",
      question: "Quelle est la plage de numérotation standard des listes de contrôle d'accès (ACL) standard IPv4 sous Cisco IOS ?",
      options: [
        "1 à 99 et 1300 à 1999",
        "100 à 199 et 2000 à 2699",
        "200 à 299",
        "1 à 50 uniquement"
      ],
      correctAnswer: 0,
      explanation: "Les ACL standard (qui filtrent uniquement sur l'adresse IP source) utilisent les numéros 1 à 99 et la plage étendue 1300 à 1999. Les ACL étendues (source, destination, port, protocole) utilisent 100 à 199 et 2000 à 2699."
    },
    {
      id: "sisr_q6",
      category: "systeme",
      question: "Sous Linux, quelle commande permet de changer le propriétaire et le groupe d'un dossier '/var/www' de façon récursive ?",
      options: [
        "chmod -R www-data:www-data /var/www",
        "chown -R www-data:www-data /var/www",
        "usermod -aG www-data /var/www",
        "chgrp -r 755 /var/www"
      ],
      correctAnswer: 1,
      explanation: "La commande 'chown -R utilisateur:groupe dossier' modifie de manière récursive le propriétaire et le groupe d'un répertoire. 'chmod' quant à elle gère les permissions (rwx)."
    },
    {
      id: "sisr_q7",
      category: "reseau",
      question: "Sur un routeur Cisco, vous lisez la ligne : 'D 192.168.50.0/24 [90/30720] via 10.0.0.2'. Que signifie la lettre 'D' et le nombre '90' ?",
      options: [
        "D = Route Directe, 90 = Port de communication",
        "D = Protocole EIGRP, 90 = Distance Administrative",
        "D = Route par Défaut, 90 = Nombre de sauts maximum",
        "D = Routage Dynamique OSPF, 90 = Coût de liaison"
      ],
      correctAnswer: 1,
      explanation: "La lettre 'D' désigne le protocole EIGRP (pour l'algorithme DUAL). Entre crochets [90/30720], le premier nombre est la Distance Administrative (90 pour EIGRP) et le second est la métrique de coût (30720)."
    },
    {
      id: "sisr_q8",
      category: "reseau",
      question: "Un routeur possède ces 4 routes dans sa table :\n1. 10.0.0.0/8 via R1\n2. 10.1.0.0/16 via R2\n3. 10.1.1.0/24 via R3\n4. 0.0.0.0/0 via R4\nUn paquet arrive pour l'adresse 10.1.1.55. Quel chemin le routeur choisira-t-il ?",
      options: [
        "Via R1 (masque /8 car plus court)",
        "Via R4 (la route par défaut est prioritaire)",
        "Via R3 (règle du Longest Prefix Match : /24 est le masque le plus précis)",
        "Le paquet est rejeté car l'adresse exacte 10.1.1.55 n'apparaît pas"
      ],
      correctAnswer: 2,
      explanation: "Règle du Longest Prefix Match : le routeur compare la longueur du masque de toutes les routes qui englobent la destination. Ici /24 (24 bits réseau) est plus long et plus précis que /16, /8 et /0. Le routeur choisit donc R3."
    },
    {
      id: "sisr_q9",
      category: "reseau",
      question: "Dans une topologie STP, Switch A (Priorité 32768, MAC 00:11:22:33:44:55), Switch B (Priorité 4096, MAC 00:AA:BB:CC:DD:EE) et Switch C (Priorité 32768, MAC 00:01:02:03:04:05) sont reliés. Quel switch est élu Root Bridge ?",
      options: [
        "Switch C car il possède la plus petite adresse MAC",
        "Switch B car il possède la priorité STP la plus petite (4096 < 32768)",
        "Switch A car sa priorité est standard",
        "Aucun, il y a un conflit d'élection"
      ],
      correctAnswer: 1,
      explanation: "L'élection du Root Bridge commence TOUJOURS par comparer la priorité STP (la plus basse gagne). Switch B a une priorité de 4096, inférieure à 32768. Il gagne immédiatement l'élection sans même avoir besoin de comparer les adresses MAC."
    },
    {
      id: "sisr_q10",
      category: "reseau",
      question: "Quelle est la durée totale standard de transition d'un port en STP classique (802.1D) depuis l'état bloqué jusqu'à l'état de transmission (Forwarding) ?",
      options: [
        "Moins d'une seconde (immédiat)",
        "10 secondes (Hello Time)",
        "30 à 50 secondes (Listening 15s + Learning 15s + Max Age)",
        "5 minutes"
      ],
      correctAnswer: 2,
      explanation: "En 802.1D classique, le port passe par Blocking -> Listening (15s) -> Learning (15s) -> Forwarding, soit 30 à 50 secondes au total. C'est pourquoi le protocole 802.1w (RSTP) a été développé pour converger en moins d'une seconde."
    },
    {
      id: "sisr_q11",
      category: "reseau",
      question: "Sur un port d'accès connecté au PC d'un utilisateur, quelle commande Cisco active immédiatement l'état Forwarding sans attendre les 30 secondes de STP ?",
      options: [
        "switchport mode trunk",
        "spanning-tree portfast",
        "spanning-tree bpduguard disable",
        "no spanning-tree vlan 1"
      ],
      correctAnswer: 1,
      explanation: "La commande 'spanning-tree portfast' permet au port de passer immédiatement en état Forwarding en sautant les étapes Listening et Learning. Elle ne doit être activée QUE sur les ports reliés à des terminaux (PC, imprimantes, serveurs)."
    },
    {
      id: "sisr_q12",
      category: "reseau",
      question: "Que se passe-t-il si un port configuré avec 'spanning-tree bpduguard enable' reçoit une trame BPDU (ex: switch pirate branché) ?",
      options: [
        "Le port ignore la trame BPDU et continue de fonctionner",
        "Le port est immédiatement désactivé et placé en état 'err-disable'",
        "Le switch devient automatiquement Root Bridge secondaire",
        "Le switch redémarre pour se protéger"
      ],
      correctAnswer: 1,
      explanation: "BPDU Guard est un mécanisme de protection vitale : s'il reçoit un BPDU sur un port d'accès censé être relié à un PC, il éteint immédiatement le port et le place en état 'err-disable' pour empêcher une attaque ou une boucle."
    }
  ],

  cheatSheet: [
    { category: "cisco", title: "Inspection de la Table de Routage", code: "Router# show ip route\nRouter# show ip route ospf\nRouter# show ip route static" },
    { category: "cisco", title: "Route Statique & Route par Défaut (Quad Zero)", code: "Router(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.254\nRouter(config)# ip route 10.20.0.0 255.255.0.0 192.168.1.2" },
    { category: "cisco", title: "Inspection du Protocole STP", code: "Switch# show spanning-tree\nSwitch# show spanning-tree brief\nSwitch# show spanning-tree vlan 10" },
    { category: "cisco", title: "Élection Root Bridge (Changer la Priorité)", code: "Switch(config)# spanning-tree vlan 1 priority 4096\n! Ou commande simplifiée :\nSwitch(config)# spanning-tree vlan 1 root primary" },
    { category: "cisco", title: "Sécurisation STP : PortFast & BPDU Guard", code: "Switch(config-if)# spanning-tree portfast\nSwitch(config-if)# spanning-tree bpduguard enable\n! Ou activation globale sur tous les ports d'accès :\nSwitch(config)# spanning-tree portfast default\nSwitch(config)# spanning-tree portfast bpduguard default" },
    { category: "cisco", title: "Création de VLAN", code: "Switch(config)# vlan 20\nSwitch(config-vlan)# name COMPTA" },
    { category: "cisco", title: "Configuration Port Trunk", code: "Switch(config-if)# switchport mode trunk\nSwitch(config-if)# switchport trunk allowed vlan 10,20,30" },
    { category: "cisco", title: "Router-on-a-Stick (Sous-interface)", code: "Router(config)# interface g0/0.10\nRouter(config-subif)# encapsulation dot1Q 10\nRouter(config-subif)# ip address 192.168.10.254 255.255.255.0" },
    { category: "cisco", title: "Configuration DHCP Helper", code: "Router(config-if)# ip helper-address 192.168.1.100" },
    { category: "cisco", title: "Configuration OSPF v2", code: "Router(config)# router ospf 1\nRouter(config-router)# network 192.168.10.0 0.0.0.255 area 0" },
    { category: "cisco", title: "ACL Étendue (Bloquer HTTP vers un serveur)", code: "Router(config)# access-list 101 deny tcp any host 192.168.1.50 eq 80\nRouter(config)# access-list 101 permit ip any any\nRouter(config-if)# ip access-group 101 in" },
    { category: "linux", title: "Gestion des Services Systemd", code: "systemctl status apache2\nsystemctl restart isc-dhcp-server\nsystemctl enable bind9" },
    { category: "linux", title: "Recherche en direct dans les logs", code: "tail -f /var/log/syslog | grep -i error" },
    { category: "linux", title: "Permissions de fichiers (Droits octaux)", code: "chmod 750 /home/partage\nchown -R root:administrateurs /home/partage" },
    { category: "powershell", title: "Création Utilisateur Active Directory", code: "New-ADUser -Name 'Jean Dupont' -SamAccountName 'jdupont' -UserPrincipalName 'jdupont@domaine.lan' -Enabled $true -AccountPassword(ConvertTo-SecureString 'P@ssw0rd123!' -AsPlainText -Force) -Path 'OU=Informatique,DC=domaine,DC=lan'" },
    { category: "powershell", title: "Tester la connectivité d'un port distant", code: "Test-NetConnection -ComputerName 192.168.1.10 -Port 3389" }
  ]
};
