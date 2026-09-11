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
    }
  ],

  cheatSheet: [
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
