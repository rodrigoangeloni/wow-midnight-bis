"use strict";

(() => {
  const {
    STATS,
    CATEGORIES,
    PROFESSION_ICONS,
    ITEM_ICONS,
    PROFESSIONS,
    MASTER,
    SLOT_ICONS
  } = window.WOW_DATA;

  // Estado y utilidades
  const state = { profession: "desuello", objective: "general" };
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function getProfession() {
    return PROFESSIONS.find(p => p.id === state.profession) || PROFESSIONS[0];
  }
  function getObjective() {
    const prof = getProfession();
    return prof.objectives.find(o => o.id === state.objective) || prof.objectives[0];
  }
  function categoryLabel(id) { return CATEGORIES[id] ? CATEGORIES[id].label : id; }
  function statChips(stats) {
    return Object.entries(stats).map(([key, value]) => {
      const s = STATS[key];
      return `<span class="stat-chip" style="--stat:${s.color}">${s.icon} ${s.short || s.name} <b>+${value}</b></span>`;
    }).join("");
  }
  function statText(stats) {
    return Object.entries(stats).map(([key, value]) => `+${value} ${STATS[key].short || STATS[key].name}`).join(", ");
  }
  function addStats(target, stats) {
    for (const [key, value] of Object.entries(stats)) target[key] = (target[key] || 0) + value;
  }
  function computeProfile(prof, obj) {
    const profile = {};
    prof.accessories.forEach(acc => addStats(profile, acc.stats));
    if (prof.tool.random) {
      const key = obj.toolStat || prof.quickStat;
      if (key) profile[key] = (profile[key] || 0) + prof.tool.random;
    } else if (prof.tool.stats) {
      addStats(profile, prof.tool.stats);
    }
    return profile;
  }
  function slotIcon(slot) { return SLOT_ICONS[slot] || "🎒"; }
  function iconUrl(icon) { return `https://wow.zamimg.com/images/wow/icons/large/${icon}.jpg`; }
  function profIconHtml(prof, size = "md") {
    const icon = PROFESSION_ICONS[prof.id];
    return `<span class="prof-icon ${size}" aria-hidden="true">
      ${icon ? `<img src="${iconUrl(icon)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
      <span class="fallback">${prof.emoji}</span>
    </span>`;
  }
  function itemIconHtml(item, fallback) {
    const icon = ITEM_ICONS[item.id];
    return `<span class="gear-icon" aria-hidden="true">
      ${icon ? `<img src="${iconUrl(icon)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
      <span class="fallback">${fallback}</span>
    </span>`;
  }
  function wowheadLink(id, name) {
    return `<a class="gear-link" href="https://www.wowhead.com/mx/item=${id}" target="_blank" rel="noopener" aria-label="Ver ${name} en Wowhead esMX">🔗</a>`;
  }

  // Render
  function renderProfessionPicker() {
    const wrap = $("#professionPicker");
    wrap.innerHTML = Object.entries(CATEGORIES).map(([catId, cat]) => {
      const items = PROFESSIONS.filter(p => p.category === catId);
      return `
        <div class="tab-group">
          <span class="tab-label">${cat.emoji} ${cat.label}</span>
          <div class="tabs">
            ${items.map(p => `
              <button class="prof-tab" type="button" data-prof="${p.id}" aria-pressed="${p.id === state.profession}">
                ${profIconHtml(p, "sm")}${p.name}
              </button>`).join("")}
          </div>
        </div>`;
    }).join("");
    wrap.addEventListener("click", event => {
      const btn = event.target.closest("[data-prof]");
      if (btn) selectProfession(btn.dataset.prof);
    });
  }

  function renderQuickCards() {
    const wrap = $("#quickGrid");
    wrap.innerHTML = PROFESSIONS.map(prof => {
      const toolLine = prof.tool.random
        ? `Herramienta: <strong>${STATS[prof.quickStat].name}</strong>`
        : `Herramienta: <strong>${statText(prof.tool.stats)}</strong>`;
      const accStats = {};
      prof.accessories.forEach(acc => addStats(accStats, acc.stats));
      return `
        <button class="quick-card" type="button" data-quick="${prof.id}">
          <span class="quick-top">
            ${profIconHtml(prof, "md")}
            <span class="quick-name">${prof.name}</span>
            <span class="quick-cat">${categoryLabel(prof.category)}</span>
          </span>
          <span class="quick-line">${toolLine}</span>
          <span class="quick-line">Accesorios: <strong>${statText(accStats)}</strong></span>
          <span class="quick-go">Ver build →</span>
        </button>`;
    }).join("");
    wrap.addEventListener("click", event => {
      const btn = event.target.closest("[data-quick]");
      if (btn) selectProfession(btn.dataset.quick, true);
    });
  }

  function renderStatCards() {
    $("#statGrid").innerHTML = Object.entries(STATS).map(([key, s]) => `
      <article class="stat-card" style="--stat:${s.color}">
        <span class="stat-icon" aria-hidden="true">${s.icon}</span>
        <h3>${s.name}</h3>
        <p class="stat-en">${s.en}</p>
        <p>${s.desc}</p>
      </article>`).join("");
  }

  function renderMasterTable() {
    $("#masterBody").innerHTML = MASTER.map(row => {
      const s = STATS[row.missive];
      return `
        <tr>
          <td>${row.goal}</td>
          <td><span class="stat-chip" style="--stat:${s.color}">${s.icon} ${s.name}</span></td>
          <td>${row.enchant}</td>
        </tr>`;
    }).join("");
  }

  function renderGear() {
    const prof = getProfession();
    const obj = getObjective();
    const profIcon = PROFESSION_ICONS[prof.id];
    $("#profEmoji").innerHTML = `
      ${profIcon ? `<img src="${iconUrl(profIcon)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
      <span class="fallback">${prof.emoji}</span>`;
    $("#profName").textContent = prof.name;
    $("#profCategory").textContent = categoryLabel(prof.category);

    const toolStats = prof.tool.random
      ? `<span class="stat-chip" style="--stat:${STATS[obj.toolStat].color}">${STATS[obj.toolStat].icon} ${STATS[obj.toolStat].name} <b>+${prof.tool.random}</b></span>`
      : statChips(prof.tool.stats);
    const toolBadge = prof.tool.random
      ? `<span class="badge badge-gold">Personalizable</span>`
      : `<span class="badge">Stats fijos</span>`;

    const cards = [
      `<article class="gear-card tool">
        ${itemIconHtml(prof.tool, prof.toolIcon)}
        <div class="gear-main">
          <div class="gear-slot">Herramienta ${toolBadge}</div>
          <div class="gear-name">${prof.tool.es}</div>
          <div class="gear-en">${prof.tool.en}</div>
          <div class="gear-stats">${toolStats}</div>
        </div>
        ${wowheadLink(prof.tool.id, prof.tool.es)}
      </article>`
    ];

    prof.accessories.forEach((acc, index) => {
      cards.push(`
        <article class="gear-card">
          ${itemIconHtml(acc, slotIcon(acc.slot))}
          <div class="gear-main">
            <div class="gear-slot">Accesorio ${index + 1} · ${acc.slot} <span class="badge">Stats fijos</span></div>
            <div class="gear-name">${acc.es}</div>
            <div class="gear-en">${acc.en}</div>
            <div class="gear-stats">${statChips(acc.stats)}</div>
          </div>
          ${wowheadLink(acc.id, acc.es)}
        </article>`);
    });

    $("#gearList").innerHTML = cards.join("");

    const accTotals = {};
    prof.accessories.forEach(acc => addStats(accTotals, acc.stats));
    $("#gearSummaryStats").innerHTML = statChips(accTotals);
  }

  function renderObjectives() {
    const prof = getProfession();
    $("#objectiveGrid").innerHTML = prof.objectives.map(obj => `
      <button class="objective-btn" type="button" data-obj="${obj.id}" aria-pressed="${obj.id === state.objective}">
        <strong>${obj.label}</strong>
        <small>${obj.sub}</small>
      </button>`).join("");
  }

  function renderBuild() {
    const prof = getProfession();
    const obj = getObjective();
    const priority = STATS[obj.priority];
    const profile = computeProfile(prof, obj);
    const values = Object.values(profile);
    const max = Math.max(100, ...values);
    const bars = Object.entries(profile)
      .filter(([, value]) => value > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => {
        const s = STATS[key];
        return `
          <div class="bar-row">
            <span class="bar-name">${s.icon} ${s.short || s.name}</span>
            <div class="bar-track"><div class="bar-fill" style="--stat:${s.color};width:${Math.round((value / max) * 100)}%"></div></div>
            <span class="bar-value" style="--stat:${s.color}">+${value}</span>
          </div>`;
      }).join("");

    const toolRow = prof.tool.random
      ? `<span class="stat-chip" style="--stat:${priority.color}">${priority.icon} Misiva: ${priority.name}</span><span class="badge">+${prof.tool.random} base</span>`
      : `<span class="badge">Stats fijos</span>${statChips(prof.tool.stats)}<span class="muted-chip">No usa misiva</span>`;

    const enchants = obj.enchants.map(enchant => `
      <span class="enchant-option">
        <small>${enchant.when}</small>
        <strong>${enchant.name}</strong>
      </span>`).join("");

    const accRows = prof.accessories.map(acc => `
      <div class="acc-line">
        <span class="acc-name">${acc.es}</span>
        <span>${statChips(acc.stats)}</span>
      </div>`).join("");

    const quickAnswer = prof.tool.random
      ? `Pon <strong>${priority.name}</strong> en la herramienta y usa <strong>${obj.enchants[0].name}</strong>${obj.enchants.length > 1 ? `; con Concentración, <strong>${obj.enchants[1].name}</strong>` : ""}.`
      : obj.id === "speed"
        ? `La herramienta y el sombrero ya suman <strong>+72 de Velocidad</strong>. Si quieres unidades extra, usa <strong>${obj.enchants[0].name}</strong>.`
        : obj.priorityNote === "vía encantamiento"
          ? `La herramienta ya trae <strong>${statText(prof.tool.stats)}</strong>. Usa <strong>${obj.enchants[0].name}</strong> para priorizar <strong>${priority.name}</strong>.`
          : `La herramienta ya trae <strong>${statText(prof.tool.stats)}</strong>. Tu prioridad es <strong>${priority.name}</strong>; el encantamiento recomendado es <strong>${obj.enchants[0].name}</strong>.`;

    $("#buildContent").innerHTML = `
      <div class="build-hero">
        <div>
          <p class="section-kicker">Build recomendada</p>
          <h3>${obj.label}</h3>
          <p>${obj.sub}</p>
        </div>
        <div class="priority">
          <small>Prioridad</small>
          <span class="stat-chip big" style="--stat:${priority.color}">${priority.icon} ${priority.name}</span>
          ${obj.priorityNote ? `<small class="priority-note">${obj.priorityNote}</small>` : ""}
        </div>
      </div>
      <div class="quick-answer"><span aria-hidden="true">⚡</span><p><strong>En una frase:</strong> ${quickAnswer}</p></div>
      <div class="build-rows">
        <div class="build-row">
          <span class="row-label">Herramienta</span>
          <div class="row-content">${toolRow}</div>
        </div>
        <div class="build-row">
          <span class="row-label">Encantamiento</span>
          <div class="row-content">${enchants}</div>
        </div>
        <div class="build-row">
          <span class="row-label">Accesorios</span>
          <div class="row-content acc-list">${accRows}</div>
        </div>
      </div>
      <div class="profile">
        <div class="profile-head">
          <span>Perfil base del equipo</span>
          <small>Sin encantamiento</small>
        </div>
        <div class="bars">${bars || `<p class="profile-empty">Sin stats base.</p>`}</div>
      </div>
      <div class="tip">💡 ${obj.tip}</div>
      <div class="build-actions">
        <button class="btn btn-gold btn-small" type="button" id="copyBuild">📋 Copiar resumen</button>
        <span id="copyFeedback" class="copy-feedback" aria-live="polite"></span>
      </div>`;

    $("#copyBuild").addEventListener("click", copyBuild);
  }

  function updateProfessionTabs() {
    $$(".prof-tab").forEach(btn => {
      const active = btn.dataset.prof === state.profession;
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function updateObjectiveButtons() {
    $$(".objective-btn").forEach(btn => {
      const active = btn.dataset.obj === state.objective;
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  // Interacción
  function selectProfession(id, scroll = false) {
    const prof = PROFESSIONS.find(p => p.id === id);
    if (!prof) return;
    state.profession = id;
    state.objective = prof.objectives[0].id;
    updateProfessionTabs();
    renderGear();
    renderObjectives();
    renderBuild();
    if (scroll) {
      const advisor = $("#advisor");
      if (advisor) advisor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function selectObjective(id) {
    state.objective = id;
    updateObjectiveButtons();
    renderGear();
    renderBuild();
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (error) { /* fallback abajo */ }
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (error) { ok = false; }
    area.remove();
    return ok;
  }

  function copyBuild() {
    const prof = getProfession();
    const obj = getObjective();
    const priority = STATS[obj.priority];
    const lines = [
      `⚔️ ${prof.name} — ${obj.label} (Midnight 12.1.5)`,
      `Prioridad: ${priority.name} (${priority.en})${obj.priorityNote ? ` — ${obj.priorityNote}` : ""}`,
      prof.tool.random
        ? `Herramienta: ${prof.tool.es} — Misiva: ${priority.name} (+${prof.tool.random})`
        : `Herramienta: ${prof.tool.es} — Stats fijos: ${statText(prof.tool.stats)}`,
      `Encantamiento: ${obj.enchants.map(e => `${e.when}: ${e.name}`).join(" | ")}`,
      `Accesorios: ${prof.accessories.map(a => `${a.es} (${statText(a.stats)})`).join(" | ")}`,
      `Tip: ${obj.tip.replace(/<[^>]+>/g, "")}`
    ];
    copyText(lines.join("\n")).then(ok => {
      const feedback = $("#copyFeedback");
      if (feedback) {
        feedback.textContent = ok ? "¡Resumen copiado!" : "No se pudo copiar.";
        window.setTimeout(() => { feedback.textContent = ""; }, 2400);
      }
    });
  }

  // Inicio
  function init() {
    renderProfessionPicker();
    renderQuickCards();
    renderStatCards();
    renderMasterTable();
    selectProfession("desuello");

    $("#objectiveGrid").addEventListener("click", event => {
      const btn = event.target.closest("[data-obj]");
      if (btn) selectObjective(btn.dataset.obj);
    });
  }

  init();
})();
