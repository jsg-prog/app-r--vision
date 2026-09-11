/* ==========================================================================
   SISR TOOLS MODULE
   1. Real-time IPv4 Subnet / CIDR / Wildcard Calculator
   2. Interactive CLI Cheat Sheet with Search & One-Click Copy
   ========================================================================== */

const SisrTools = {
  // ------------------------------------------------------------------------
  // IP / Subnet Calculator
  // ------------------------------------------------------------------------
  initCalculator(containerEl) {
    containerEl.innerHTML = `
      <div class="calc-card">
        <h3 style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🧮</span> Calculateur Réseau IPv4 & Wildcard Mask (Cisco / VLSM)
        </h3>
        <p style="margin-bottom: 1.5rem; font-size: 0.88rem;">
          Calcule instantanément le réseau, broadcast, premier/dernier hôte et le masque générique (wildcard) indispensable pour les ACLs et OSPF Cisco.
        </p>

        <div class="calc-inputs-grid">
          <div class="form-group">
            <label for="calc-ip-input">Adresse IPv4 de test</label>
            <input type="text" id="calc-ip-input" class="form-control" value="192.168.10.45" placeholder="ex: 172.16.5.10">
          </div>

          <div class="form-group">
            <label for="calc-cidr-select">Préfixe CIDR / Masque</label>
            <select id="calc-cidr-select" class="form-control">
              ${Array.from({ length: 31 }, (_, i) => i + 1).map(cidr => `
                <option value="${cidr}" ${cidr === 24 ? "selected" : ""}>/${cidr} (${this.cidrToMask(cidr)})</option>
              `).join("")}
            </select>
          </div>

          <button class="header-btn primary" onclick="SisrTools.calculateIP()" style="height: 42px;">
            Calculer ⚡
          </button>
        </div>

        <div id="calc-results-output"></div>
      </div>
    `;

    // Bind live events
    document.getElementById("calc-ip-input").addEventListener("input", () => this.calculateIP());
    document.getElementById("calc-cidr-select").addEventListener("change", () => this.calculateIP());

    this.calculateIP();
  },

  calculateIP() {
    const ipStr = document.getElementById("calc-ip-input").value.trim();
    const cidr = parseInt(document.getElementById("calc-cidr-select").value, 10);
    const outputEl = document.getElementById("calc-results-output");

    const parts = ipStr.split(".").map(Number);
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
      outputEl.innerHTML = `
        <div style="color: var(--rose-primary); font-size: 0.9rem; padding: 1rem; background: rgba(244, 63, 94, 0.1); border-radius: var(--radius-sm);">
          ⚠️ Veuillez entrer une adresse IPv4 valide (ex: 192.168.1.50).
        </div>
      `;
      return;
    }

    const ipNum = ((parts[0] << 24) >>> 0) + ((parts[1] << 16) >>> 0) + ((parts[2] << 8) >>> 0) + (parts[3] >>> 0);
    const maskNum = cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
    const wildcardNum = (~maskNum) >>> 0;

    const netNum = (ipNum & maskNum) >>> 0;
    const broadNum = (netNum | wildcardNum) >>> 0;

    const totalHosts = Math.pow(2, 32 - cidr);
    const usableHosts = cidr >= 31 ? 0 : totalHosts - 2;

    const firstHostNum = cidr >= 31 ? netNum : netNum + 1;
    const lastHostNum = cidr >= 31 ? broadNum : broadNum - 1;

    const netStr = this.numToIp(netNum);
    const broadStr = this.numToIp(broadNum);
    const maskStr = this.numToIp(maskNum);
    const wildcardStr = this.numToIp(wildcardNum);
    const firstHostStr = this.numToIp(firstHostNum);
    const lastHostStr = this.numToIp(lastHostNum);

    outputEl.innerHTML = `
      <div class="calc-results-grid">
        <div class="calc-result-box">
          <div class="calc-res-label">Adresse Réseau</div>
          <div class="calc-res-val">${netStr} /${cidr}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Adresse de Diffusion (Broadcast)</div>
          <div class="calc-res-val" style="color: #f59e0b;">${broadStr}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Premier Hôte Utilisable</div>
          <div class="calc-res-val" style="color: #10b981;">${firstHostStr}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Dernier Hôte Utilisable</div>
          <div class="calc-res-val" style="color: #10b981;">${lastHostStr}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Masque de Sous-Réseau</div>
          <div class="calc-res-val">${maskStr}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Masque Générique (Wildcard Cisco)</div>
          <div class="calc-res-val" style="color: #a855f7;">${wildcardStr}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Nombre d'Hôtes Utilisables</div>
          <div class="calc-res-val">${usableHosts.toLocaleString()}</div>
        </div>
        <div class="calc-result-box">
          <div class="calc-res-label">Classe d'adresse par défaut</div>
          <div class="calc-res-val">${this.getIpClass(parts[0])}</div>
        </div>
      </div>

      <div style="margin-top: 1.5rem; background: rgba(7, 10, 18, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
        <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; margin-bottom: 0.5rem;">Décomposition Binaire (Bits Réseau vs Hôte) :</div>
        <div style="font-family: var(--font-mono); font-size: 0.85rem; word-break: break-all;">
          <span style="color: var(--cyan-primary);">${this.numToBin(ipNum).slice(0, cidr)}</span><span style="color: #ec4899;">${this.numToBin(ipNum).slice(cidr)}</span>
        </div>
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.4rem;">
          <span style="color: var(--cyan-primary);">■ ${cidr} bits réseau</span> | 
          <span style="color: #ec4899;">■ ${32 - cidr} bits hôtes</span>
        </div>
      </div>
    `;
  },

  numToIp(num) {
    return [
      (num >>> 24) & 255,
      (num >>> 16) & 255,
      (num >>> 8) & 255,
      num & 255
    ].join(".");
  },

  numToBin(num) {
    return (num >>> 0).toString(2).padStart(32, "0");
  },

  cidrToMask(cidr) {
    const maskNum = cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
    return this.numToIp(maskNum);
  },

  getIpClass(firstOctet) {
    if (firstOctet >= 1 && firstOctet <= 126) return "Classe A (Privé: 10.0.0.0/8)";
    if (firstOctet === 127) return "Bouclage Local (Loopback 127.0.0.1)";
    if (firstOctet >= 128 && firstOctet <= 191) return "Classe B (Privé: 172.16.0.0/12)";
    if (firstOctet >= 192 && firstOctet <= 223) return "Classe C (Privé: 192.168.0.0/16)";
    if (firstOctet >= 224 && firstOctet <= 239) return "Classe D (Multicast)";
    return "Classe E (Expérimental)";
  },

  // ------------------------------------------------------------------------
  // Cheat Sheet Module
  // ------------------------------------------------------------------------
  initCheatSheet(containerEl) {
    const items = SISR_DATABASE.cheatSheet;
    this.renderCheatSheet(containerEl, items);
  },

  renderCheatSheet(containerEl, items) {
    containerEl.innerHTML = `
      <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <input type="text" id="cheat-search-input" class="form-control" placeholder="🔍 Rechercher une commande (ex: vlan, trunk, ospf, chmod)..." style="flex: 1; min-width: 250px;">
        <div style="display: flex; gap: 0.5rem;">
          <button class="filter-tab active" onclick="SisrTools.filterCheat('all', this)">Tous</button>
          <button class="filter-tab" onclick="SisrTools.filterCheat('cisco', this)">Cisco IOS</button>
          <button class="filter-tab" onclick="SisrTools.filterCheat('linux', this)">Linux Sysadmin</button>
          <button class="filter-tab" onclick="SisrTools.filterCheat('powershell', this)">PowerShell / AD</button>
        </div>
      </div>

      <div class="cheatsheet-grid" id="cheatsheet-items-target">
        ${this.buildCardsHTML(items)}
      </div>
    `;

    document.getElementById("cheat-search-input").addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = SISR_DATABASE.cheatSheet.filter(item => 
        item.title.toLowerCase().includes(term) || item.code.toLowerCase().includes(term)
      );
      document.getElementById("cheatsheet-items-target").innerHTML = this.buildCardsHTML(filtered);
    });
  },

  buildCardsHTML(items) {
    if (items.length === 0) {
      return `<p style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 2rem;">Aucune commande trouvée.</p>`;
    }
    return items.map((item, idx) => `
      <div class="command-card">
        <div class="cmd-header">
          <h4 style="font-size: 0.95rem;">${item.title}</h4>
          <span class="cmd-tag">${item.category.toUpperCase()}</span>
        </div>
        <div class="cmd-code-block">
          <code>${item.code.replace(/\n/g, "<br>")}</code>
          <button class="copy-btn" title="Copier la commande" onclick="SisrTools.copyCommand(this, \`${item.code.replace(/`/g, "\\`").replace(/\\/g, "\\\\")}\`)">
            📋
          </button>
        </div>
      </div>
    `).join("");
  },

  filterCheat(cat, btnEl) {
    document.querySelectorAll(".filter-tab").forEach(b => b.classList.remove("active"));
    btnEl.classList.add("active");

    const items = cat === "all" 
      ? SISR_DATABASE.cheatSheet 
      : SISR_DATABASE.cheatSheet.filter(i => i.category === cat);

    document.getElementById("cheatsheet-items-target").innerHTML = this.buildCardsHTML(items);
  },

  copyCommand(btnEl, text) {
    navigator.clipboard.writeText(text).then(() => {
      const original = btnEl.innerHTML;
      btnEl.innerHTML = "✅";
      App.playSound("correct");
      setTimeout(() => {
        btnEl.innerHTML = original;
      }, 1500);
    });
  }
};
