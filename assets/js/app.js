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

  const SPECIALIZATIONS = window.WOW_SPECS || {};

  // Estado y utilidades
  // La primera profesión del arreglo es la predeterminada.
  const state = { profession: PROFESSIONS[0].id, objective: PROFESSIONS[0].objectives[0].id };
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
      return `<a class="stat-chip" href="#stat-${key}" style="--stat:${s.color}" title="Ver qué hace ${s.name}">${s.icon} ${s.short || s.name} <b>+${value}</b></a>`;
    }).join("");
  }
  function statText(stats) {
    return Object.entries(stats).map(([key, value]) => `+${value} ${STATS[key].short || STATS[key].name}`).join(", ");
  }
  function addStats(target, stats) {
    for (const [key, value] of Object.entries(stats)) target[key] = (target[key] || 0) + value;
  }
  function getSpec(prof) {
    return SPECIALIZATIONS[prof.id] || null;
  }
  function getSpecBuildId(prof, obj) {
    const spec = getSpec(prof);
    if (!spec || !spec.builds || !spec.builds.length || !obj) return null;
    return (spec.objectiveMap && spec.objectiveMap[obj.id]) || spec.builds[0].id;
  }
  function statTags(keys) {
    return (keys || []).map(key => {
      const s = STATS[key];
      if (!s) return "";
      return `<a class="stat-chip" href="#stat-${key}" style="--stat:${s.color}" title="Ver qué hace ${s.name}">${s.icon} ${s.name}</a>`;
    }).join("");
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
  function wowheadUrl(id) {
    return `https://www.wowhead.com/mx/item=${id}`;
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
        <button class="quick-card" type="button" data-quick="${prof.id}" data-cat="${prof.category}">
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
      <article class="stat-card" id="stat-${key}" style="--stat:${s.color}">
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
          <td data-label="Objetivo">${row.goal}</td>
          <td data-label="Misiva de herramienta"><a class="stat-chip" href="#stat-${row.missive}" style="--stat:${s.color}" title="Ver qué hace ${s.name}">${s.icon} ${s.name}</a></td>
          <td data-label="Encantamiento sugerido">${row.enchant}</td>
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
      ? `<a class="stat-chip" href="#stat-${obj.toolStat}" style="--stat:${STATS[obj.toolStat].color}" title="Ver qué hace ${STATS[obj.toolStat].name}">${STATS[obj.toolStat].icon} ${STATS[obj.toolStat].name} <b>+${prof.tool.random}</b></a>`
      : statChips(prof.tool.stats);
    const toolBadge = prof.tool.random
      ? `<span class="badge badge-gold">Personalizable</span>`
      : `<span class="badge">Stats fijos</span>`;

    const cards = [
      `<article class="gear-card tool">
        <a class="gear-card-link" href="${wowheadUrl(prof.tool.id)}" target="_blank" rel="noopener" aria-label="Ver ${prof.tool.es} en Wowhead esMX"></a>
        ${itemIconHtml(prof.tool, prof.toolIcon)}
        <div class="gear-main">
          <div class="gear-slot">Herramienta ${toolBadge}</div>
          <div class="gear-name">${prof.tool.es}</div>
          <div class="gear-en">${prof.tool.en}</div>
          <div class="gear-stats">${toolStats}</div>
        </div>
        <span class="gear-link" aria-hidden="true">🔗</span>
      </article>`
    ];

    prof.accessories.forEach((acc, index) => {
      cards.push(`
        <article class="gear-card">
          <a class="gear-card-link" href="${wowheadUrl(acc.id)}" target="_blank" rel="noopener" aria-label="Ver ${acc.es} en Wowhead esMX"></a>
          ${itemIconHtml(acc, slotIcon(acc.slot))}
          <div class="gear-main">
            <div class="gear-slot">Accesorio ${index + 1} · ${acc.slot} <span class="badge">Stats fijos</span></div>
            <div class="gear-name">${acc.es}</div>
            <div class="gear-en">${acc.en}</div>
            <div class="gear-stats">${statChips(acc.stats)}</div>
          </div>
          <span class="gear-link" aria-hidden="true">🔗</span>
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

  function specSheetLink(spec) {
    if (!spec || !spec.gid) return "";
    return `<a href="${SPECIALIZATIONS.sheetUrl}#gid=${spec.gid}" target="_blank" rel="noopener">📊 Capturas en la hoja ↗</a>`;
  }

  function renderSpecBuildContent(spec, build) {
    const steps = build.steps.map(step => `
      <li class="spec-step">
        <span class="spec-points">${step.pts ? `${step.pts} pts` : "Prioriza"}</span>
        <div class="spec-step-body">
          <span class="spec-node-icon" aria-hidden="true">
            ${step.icon ? `<img src="assets/img/spec-icons/${step.icon}.jpg" alt="" loading="lazy" decoding="async" onerror="this.remove()">` : ""}
            <span class="fallback">✦</span>
          </span>
          <div class="spec-step-text">
            <strong>${step.node}</strong>
            ${step.note ? `<small>${step.note}</small>` : ""}
          </div>
        </div>
      </li>`).join("");
    const stats = statTags(build.stats);
    const notes = spec.notes && spec.notes.length
      ? `<ul class="spec-notes">${spec.notes.map(note => `<li>${note}</li>`).join("")}</ul>`
      : "";
    const links = [
      build.source ? `<a href="${build.source}" target="_blank" rel="noopener">Wow-Professions ↗</a>` : "",
      spec.guide ? `<a href="${spec.guide}" target="_blank" rel="noopener">Wowhead ↗</a>` : "",
      specSheetLink(spec)
    ].filter(Boolean).join("");
    return `
      <div class="spec-build-head">
        <div>
          <span class="spec-tag">${build.tag}</span>
          <h3>${build.label}</h3>
          <p>${build.summary}</p>
        </div>
        ${stats ? `<div class="spec-stats">${stats}</div>` : ""}
      </div>
      <ol class="spec-steps">${steps}</ol>
      ${build.after ? `<p class="spec-after">${build.after}</p>` : ""}
      ${notes}
      <div class="spec-links">${links}</div>`;
  }

  function renderSpecialization() {
    const prof = getProfession();
    const spec = getSpec(prof);
    const select = $("#specProfessionSelect");
    if (select && !select.options.length) {
      select.innerHTML = PROFESSIONS.map(p => `<option value="${p.id}">${p.name}</option>`).join("");
    }
    if (select) select.value = prof.id;
    $("#specProfName").textContent = prof.name;
    const treeWrap = $("#specTreeList");
    const tabs = $("#specBuildTabs");
    const content = $("#specBuildContent");
    const sheet = $("#specSheetLink");
    if (!spec || !spec.builds || !spec.builds.length) {
      treeWrap.innerHTML = `<p class="spec-empty">${spec?.emptyNote || "Esta profesión no tiene árbol de especialización."}</p>`;
      tabs.innerHTML = "";
      content.innerHTML = `<p class="spec-empty">Esta profesión no usa puntos de especialización.</p>`;
      sheet.innerHTML = specSheetLink(spec);
      return;
    }
    const valid = spec.builds.some(build => build.id === state.specBuild);
    const buildId = valid ? state.specBuild : getSpecBuildId(prof, getObjective());
    state.specBuild = buildId;
    const build = spec.builds.find(build => build.id === buildId) || spec.builds[0];
    treeWrap.innerHTML = spec.trees.map(tree => `
      <article class="spec-tree">
        <span class="spec-tree-focus">${tree.focus}</span>
        <h3>${tree.name}</h3>
        <p>${tree.desc}</p>
      </article>`).join("");
    tabs.innerHTML = spec.builds.map(build => `
      <button class="spec-build-tab" type="button" data-spec-build="${build.id}" aria-pressed="${build.id === state.specBuild}">
        <strong>${build.label}</strong>
        <small>${build.tag}</small>
      </button>`).join("");
    content.innerHTML = renderSpecBuildContent(spec, build);
    sheet.innerHTML = specSheetLink(spec);
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
      ? `<a class="stat-chip" href="#stat-${obj.priority}" style="--stat:${priority.color}" title="Ver qué hace ${priority.name}">${priority.icon} Misiva: ${priority.name}</a><span class="badge">+${prof.tool.random} base</span>`
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

    const spec = SPECIALIZATIONS[prof.id];
    const specBuildId = getSpecBuildId(prof, obj);
    const specBuild = spec?.builds?.find(build => build.id === specBuildId);
    const specTeaser = specBuild ? `
      <div class="spec-teaser">
        <div>
          <span class="section-kicker">Especialización</span>
          <strong>${specBuild.label}</strong>
          <small>${specBuild.tag}</small>
        </div>
        <a class="spec-jump" href="#especializacion" data-spec-build="${specBuild.id}">Ver cómo gastar los puntos →</a>
      </div>` : "";

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
          <a class="stat-chip big" href="#stat-${obj.priority}" style="--stat:${priority.color}" title="Ver qué hace ${priority.name}">${priority.icon} ${priority.name}</a>
          ${obj.priorityNote ? `<small class="priority-note">${obj.priorityNote}</small>` : ""}
        </div>
      </div>
      <div class="quick-answer"><span aria-hidden="true">⚡</span><p><strong>En una frase:</strong> ${quickAnswer}</p></div>
      ${specTeaser}
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
        <button class="btn btn-primary btn-small" type="button" id="copyBuild">📋 Copiar resumen</button>
        <button class="btn btn-ghost btn-small" type="button" id="copyLink">🔗 Copiar enlace</button>
        <span id="copyFeedback" class="copy-feedback" aria-live="polite"></span>
      </div>`;

    $("#copyBuild").addEventListener("click", copyBuild);
    $("#copyLink").addEventListener("click", copyLink);
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

  function updateUrl() {
    try {
      const url = new URL(window.location.href);
      url.search = "";
      url.searchParams.set("p", state.profession);
      url.searchParams.set("o", state.objective);
      window.history.replaceState(null, "", url.toString());
    } catch (error) { /* file:// o navegador sin history */ }
  }

  function announceSelection() {
    const status = $("#selectionStatus");
    if (!status) return;
    const prof = getProfession();
    const obj = getObjective();
    const spec = getSpec(prof);
    const build = spec?.builds?.find(b => b.id === state.specBuild);
    status.textContent = `${prof.name}: ${obj.label}${build ? `. Especialización: ${build.label}` : ""}.`;
  }

  function readStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const prof = PROFESSIONS.find(p => p.id === params.get("p"));
    if (!prof) return null;
    const obj = prof.objectives.find(o => o.id === params.get("o"));
    return { profession: prof.id, objective: obj ? obj.id : prof.objectives[0].id };
  }

  // Interacción
  function selectProfession(id, scroll = false, objectiveId = null) {
    const prof = PROFESSIONS.find(p => p.id === id);
    if (!prof) return;
    const objective = prof.objectives.find(o => o.id === objectiveId) || prof.objectives[0];
    state.profession = prof.id;
    state.objective = objective.id;
    state.specBuild = getSpecBuildId(prof, objective);
    updateProfessionTabs();
    renderGear();
    renderObjectives();
    renderBuild();
    renderSpecialization();
    updateUrl();
    announceSelection();
    if (scroll) {
      const advisor = $("#advisor");
      if (advisor) advisor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function selectObjective(id) {
    const prof = getProfession();
    const obj = prof.objectives.find(objective => objective.id === id) || prof.objectives[0];
    state.objective = obj.id;
    state.specBuild = getSpecBuildId(prof, obj);
    updateObjectiveButtons();
    renderGear();
    renderBuild();
    renderSpecialization();
    updateUrl();
    announceSelection();
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
    const spec = SPECIALIZATIONS[prof.id];
    const specBuild = spec?.builds?.find(build => build.id === getSpecBuildId(prof, obj));
    const lines = [
      `🌙 ${prof.name} — ${obj.label} (Midnight 12.1.5)`,
      `Prioridad: ${priority.name} (${priority.en})${obj.priorityNote ? ` — ${obj.priorityNote}` : ""}`,
      prof.tool.random
        ? `Herramienta: ${prof.tool.es} — Misiva: ${priority.name} (+${prof.tool.random})`
        : `Herramienta: ${prof.tool.es} — Stats fijos: ${statText(prof.tool.stats)}`,
      `Encantamiento: ${obj.enchants.map(e => `${e.when}: ${e.name}`).join(" | ")}`,
      `Accesorios: ${prof.accessories.map(a => `${a.es} (${statText(a.stats)})`).join(" | ")}`,
      specBuild ? `Especialización: ${specBuild.label} (${specBuild.tag})` : "",
      `Tip: ${obj.tip.replace(/<[^>]+>/g, "")}`
    ].filter(Boolean);
    copyText(lines.join("\n")).then(ok => {
      const feedback = $("#copyFeedback");
      if (feedback) {
        feedback.textContent = ok ? "¡Resumen copiado!" : "No se pudo copiar.";
        window.setTimeout(() => { feedback.textContent = ""; }, 2400);
      }
    });
  }

  function copyLink() {
    updateUrl();
    const url = new URL(window.location.href);
    url.hash = "";
    copyText(url.toString()).then(ok => {
      const feedback = $("#copyFeedback");
      if (feedback) {
        feedback.textContent = ok ? "¡Enlace copiado!" : "No se pudo copiar.";
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
    const initial = readStateFromUrl();
    selectProfession(initial?.profession || state.profession, false, initial?.objective || null);

    $("#objectiveGrid").addEventListener("click", event => {
      const btn = event.target.closest("[data-obj]");
      if (btn) selectObjective(btn.dataset.obj);
    });

    $("#specProfessionSelect").addEventListener("change", event => {
      selectProfession(event.target.value);
    });

    $("#specBuildTabs").addEventListener("click", event => {
      const btn = event.target.closest("[data-spec-build]");
      if (!btn) return;
      state.specBuild = btn.dataset.specBuild;
      renderSpecialization();
      announceSelection();
    });

    $("#buildContent").addEventListener("click", event => {
      const jump = event.target.closest(".spec-jump");
      if (!jump) return;
      state.specBuild = jump.dataset.specBuild;
      renderSpecialization();
      announceSelection();
    });
  }

  init();
})();
