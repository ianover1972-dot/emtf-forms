/* EMTF Form Builder — renders Club Series templates as print-ready A4 forms.
   Templates register themselves with EMTF.addTemplate(...) (see src/templates/).
   Every text is an object {en, es}. Other languages come from translation files
   (src/i18n/xx.json → window.EMTF_I18N.xx), keyed by a hash of the English text.

   Block types:
     fields     {cols, items:[{id,en,es,tall?,prefill?}]}  blank write-in lines (or prefilled club values)
     note       {en,es}                                     yellow-edged guidance note
     checks     {cols?, items:[{id,en,es}]}                 tick-box statements
     clauses    {items:[{en,es}]}                           terms, side by side with a second language
     lists      {groups:[{h:{en,es}, items:[{en,es}]}]}     headed bullet lists
     yesno      {head:{en,es}, rows:[{id,en,es}]}           Yes / No consent table
     programmes {}                                          programme + fee table from the club profile
     decl       {en,es}                                     declaration panel
     signatures {boxes:[{label, pledge?, fields}]}          signature boxes
     iban       {}                                          24 IBAN character boxes
   Placeholders in text: {club} = club name, {authority} = club's data protection authority.
   Section flags: locked (cannot be switched off), keep (never split across pages),
                  office (club-use-only panel), custom (where the club's own questions go). */
(function () {
  "use strict";
  const TEMPLATES = (window.EMTF && window.EMTF._t) || [];
  const LANGS = { en: "English", es: "Español", de: "Deutsch", fr: "Français", nl: "Nederlands",
    da: "Dansk", pl: "Polski", el: "Ελληνικά", tr: "Türkçe" };
  // Display order for the form picker (templates not listed go last)
  const ORDER = ["trial-waiver", "parent-student-agreement", "adult-registration", "health-declaration",
    "photo-consent", "sepa-mandate", "membership-change", "grading-application", "incident-report",
    "safeguarding-concern"];
  const rank = id => (ORDER.indexOf(id) + 1) || 99;
  TEMPLATES.sort((a, b) => rank(a.id) - rank(b.id));
  // Fixed wording printed by the app itself (translated like template text)
  const UI = {
    series: { en: "Club Series", es: "Serie para Clubes" },
    clubLogo: { en: "Club logo", es: "Logo del club" },
    clubName: { en: "Club name", es: "Nombre del club" },
    clubAddress: { en: "Club address", es: "Dirección del club" },
    programme: { en: "Programme", es: "Programa" },
    monthlyFee: { en: "Monthly fee", es: "Cuota mensual" },
    select: { en: "Select", es: "Elegir" },
    yes: { en: "Yes", es: "Sí" },
    no: { en: "No", es: "No" },
    iban: { en: "IBAN (account number)", es: "IBAN (número de cuenta)" },
    clubQuestions: { en: "Club questions", es: "Preguntas del club" },
    clubNamed: { en: "the club named above", es: "el club indicado arriba" },
    authority: { en: "the data protection authority in your country", es: "la autoridad de protección de datos de su país" }
  };
  window.EMTF.UI = UI;
  const DEFAULT_CLUB = {
    name: "", address: "", phone: "", email: "", website: "", logo: "",
    safeguardingLead: "", safeguardingContact: "", authority: "",
    minTerm: "", notice: "", gradingFees: "", sepaCreditorId: "",
    programmes: [
      { name: "Discovery", fee: "" },
      { name: "Foundation", fee: "" },
      { name: "Black Belt · Cinturón Negro", fee: "" }
    ]
  };

  /* ---------- storage (per browser, best-effort) ---------- */
  const KEY = "emtf-forms-v1";
  function load() {
    try { const s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s) return s; } catch (e) {}
    return null;
  }
  const saved = load() || {};
  // older saves stored lang as "bi" | "en" | "es"
  const legacy = { bi: ["en", "es"], en: ["en", ""], es: ["es", ""] }[saved.lang] || ["en", "es"];
  const state = {
    club: Object.assign({}, DEFAULT_CLUB, saved.club || {}),
    lang1: LANGS[saved.lang1] ? saved.lang1 : legacy[0],
    lang2: saved.lang2 !== undefined && (saved.lang2 === "" || LANGS[saved.lang2]) ? saved.lang2 : legacy[1],
    current: saved.current || (TEMPLATES[0] && TEMPLATES[0].id),
    forms: saved.forms || {}            // per template: {off:[sectionIds], custom:[{id,en,es,kind}]}
  };
  if (state.lang2 === state.lang1) state.lang2 = "";
  if (!Array.isArray(state.club.programmes)) state.club.programmes = DEFAULT_CLUB.programmes.slice();
  let saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        const out = Object.assign({}, state); delete out.lang;
        localStorage.setItem(KEY, JSON.stringify(out)); flash("Saved on this device");
      } catch (e) { flash("Couldn't save on this device — your browser blocked storage", true); }
    }, 300);
  }

  /* ---------- text & language helpers ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const tpl = () => TEMPLATES.find(t => t.id === state.current) || TEMPLATES[0];
  const formState = id => (state.forms[id] = state.forms[id] || { off: [], custom: [] });
  // FNV-1a hash of the English text: the key used in translation files
  function hash(s) {
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
    return h.toString(36);
  }
  // text of o in language lang (falls back to English)
  function tr(o, lang) {
    if (!o) return "";
    if (o[lang]) return o[lang];
    if (lang !== "en" && o.en) { const d = (window.EMTF_I18N || {})[lang]; const v = d && d[hash(o.en)]; if (v) return v; }
    return o.en || "";
  }
  const L1 = () => state.lang1, L2 = () => state.lang2;
  // load i18n/xx.js on demand (the offline bundle already has every language inlined)
  function ensureLang(lang) {
    return new Promise(done => {
      if (!lang || lang === "en" || lang === "es" || (window.EMTF_I18N || {})[lang]) return done();
      const el = document.createElement("script");
      el.src = `i18n/${lang}.js`; el.onload = done;
      el.onerror = () => { flash(`Couldn't load ${LANGS[lang]} — showing English`, true); done(); };
      document.head.appendChild(el);
    });
  }
  const langsReady = () => Promise.all([ensureLang(L1()), ensureLang(L2())]);
  const fill = (s, lang) => s
    .replace(/\{club\}/g, state.club.name.trim() ? esc(state.club.name.trim()) : tr(UI.clubNamed, lang))
    .replace(/\{authority\}/g, state.club.authority.trim() ? esc(state.club.authority.trim()) : tr(UI.authority, lang));
  const T1 = o => fill(tr(o, L1()), L1());
  const T2 = o => (L2() ? fill(tr(o, L2()), L2()) : "");
  // inline label: "Main · second"
  function lab(o) {
    if (!o) return "";
    const a = T1(o), b = T2(o);
    return b && b !== a ? `${a}<i> · ${b}</i>` : a;
  }
  // block text: main language, then second language on its own line
  function para(o) {
    const a = T1(o), b = T2(o);
    return b && b !== a ? `${a}<i class="es-line">${b}</i>` : a;
  }

  /* ---------- form rendering ---------- */
  function field(f) {
    const v = f.prefill ? String(state.club[f.prefill] || "").trim() : "";
    const line = f.tall ? `<div class="bx"></div>`
      : v ? `<div class="ln filled">${esc(v)}</div>` : `<div class="ln"></div>`;
    return `<div class="fld"><label>${lab(f)}</label>${line}</div>`;
  }
  function renderBlock(b) {
    switch (b.type) {
      case "fields":
        return `<div class="grid" style="grid-template-columns:repeat(${b.cols || b.items.length},1fr)">${b.items.map(field).join("")}</div>`;
      case "note":
        return `<p class="note">${para(b)}</p>`;
      case "checks":
        return `<div class="cbs${b.cols ? " c" + b.cols : ""}">${b.items.map(c =>
          `<div class="cb"><span class="tick"></span><span>${para(c)}</span></div>`).join("")}</div>`;
      case "clauses":
        if (L2()) return `<div class="bi">${b.items.map(c =>
          `<div class="c en">${T1(c)}</div><div class="c es">${T2(c)}</div>`).join("")}</div>`;
        return `<div class="bi one">${b.items.map(c => `<div class="c">${T1(c)}</div>`).join("")}</div>`;
      case "lists": {
        const col = (T, cls) => `<div class="c ${cls}">${b.groups.map(g =>
          `<h3>${T(g.h)}</h3><ul>${g.items.map(i => `<li>${T(i)}</li>`).join("")}</ul>`).join("")}</div>`;
        return L2() ? `<div class="bi lists">${col(T1, "en")}${col(T2, "es")}</div>` : `<div class="bi one lists">${col(T1, "en")}</div>`;
      }
      case "yesno":
        return `<table><tr><th>${lab(b.head)}</th><th class="t">${lab(UI.yes)}</th><th class="t">${lab(UI.no)}</th></tr>${
          b.rows.map(r => `<tr><td>${para(r)}</td><td class="t"><span class="tick"></span></td><td class="t"><span class="tick"></span></td></tr>`).join("")}</table>`;
      case "programmes": {
        const rows = state.club.programmes.filter(p => p.name.trim());
        return `<table><tr><th>${lab(UI.programme)}</th><th>${lab(UI.monthlyFee)}</th><th class="t">${lab(UI.select)}</th></tr>${
          rows.map(p => `<tr><td>${esc(p.name)}</td><td>${p.fee.trim() ? "€ " + esc(p.fee.replace(/^€\s*/, "")) : `€ <span class="ln"></span>`}</td><td class="t"><span class="tick"></span></td></tr>`).join("")}</table>`;
      }
      case "iban": {
        const groups = Array.from({ length: 6 }, () => `<span class="ig">${"<span></span>".repeat(4)}</span>`).join("");
        return `<div class="fld iban"><label>${lab(UI.iban)}</label><div class="boxes">${groups}</div></div>`;
      }
      case "decl":
        return `<p class="decl">${para(b)}</p>`;
      case "signatures":
        return `<div class="sig" style="grid-template-columns:repeat(${b.boxes.length},1fr)">${b.boxes.map(x =>
          `<div><div class="sl">${lab(x.label)}</div><div class="sbox"></div>${x.pledge ? `<p class="tiny">${para(x.pledge)}</p>` : ""}<div class="grid" style="grid-template-columns:repeat(${x.fields.length},1fr)">${x.fields.map(field).join("")}</div></div>`).join("")}</div>`;
      default:
        return "";
    }
  }
  // the club's own questions: q.en = text in the main language, q.es = text in the second language
  function customBlocks(list) {
    const out = [];
    list.forEach(q => {
      const a = esc(q.en), b = esc(q.es);
      if (!a && !b) return;
      const o = { [L1()]: a || b, en: a || b };
      if (L2()) o[L2()] = b;
      if (q.kind === "check") out.push(renderBlock({ type: "checks", items: [o] }));
      else if (q.kind === "yesno") out.push(renderBlock({ type: "yesno", head: {}, rows: [o] }).replace(/<tr><th>.*?<\/tr>/, ""));
      else out.push(`<div class="grid" style="grid-template-columns:1fr">${field(Object.assign({ tall: q.kind === "box" }, o))}</div>`);
    });
    return out.join("");
  }
  const heading = (n, o) => `<h2><b>${String(n).padStart(2, "0")}</b>${T1(o)}${L2() ? `<i>${T2(o)}</i>` : ""}</h2>`;
  function renderForm() {
    const t = tpl(); if (!t) return "";
    const fs = formState(t.id);
    const c = state.club;
    let n = 0, body = "";
    t.sections.forEach(s => {
      if (s.custom) {
        if (!fs.custom.length) return;
        body += `<section class="keep">${heading(++n, UI.clubQuestions)}${customBlocks(fs.custom)}</section>`;
        return;
      }
      if (!s.locked && fs.off.includes(s.id)) return;
      const inner = s.blocks.map(renderBlock).join("");
      if (s.office) { body += `<div class="office"><div class="oh">${lab(s.title)}</div>${inner}</div>`; return; }
      body += `<section${s.keep ? ' class="keep"' : ""}>${heading(++n, s.title)}${inner}</section>`;
    });
    const known = [
      c.name && `<span><b>${esc(c.name)}</b></span>`,
      c.address && `<span>${esc(c.address)}</span>`,
      c.phone && `<span>${esc(c.phone)}</span>`,
      c.email && `<span>${esc(c.email)}</span>`,
      c.website && `<span>${esc(c.website)}</span>`
    ].filter(Boolean).join("");
    const clubline = c.name.trim()
      ? `<div class="known">${known}</div>`
      : `<div class="grid" style="grid-template-columns:1fr 1fr">${field(UI.clubName)}${field(UI.clubAddress)}</div>`;
    const logo = c.logo
      ? `<div class="club-logo"><img src="${c.logo}" alt=""></div>`
      : `<div class="club-logo empty">${T1(UI.clubLogo)}${L2() ? `<br><i>${T2(UI.clubLogo)}</i>` : ""}</div>`;
    const kick = "EMTF · " + T1(UI.series) + (L2() && T2(UI.series) !== T1(UI.series) ? " · " + T2(UI.series) : "");
    return `<header class="top"><img class="crest" src="${window.EMTF_CREST}" alt="EMTF crest">
      <div class="tt"><div class="kick">${kick}</div>
      <h1>${T1(t.title)}</h1>${L2() ? `<div class="sub">${T2(t.title)}</div>` : ""}</div>${logo}</header>
      <div class="clubline">${clubline}</div>
      <p class="intro">${para(t.intro)}</p>${body}
      <p class="endnote">EMTF Club Series · ${esc(t.id)} · v${esc(t.version)} · ${L1()}${L2() ? "/" + L2() : ""}</p>`;
  }

  /* ---------- page footer (Chrome/Edge 131+ print margin boxes) ---------- */
  function pageStyle() {
    const t = tpl(); if (!t) return;
    const cssStr = s => '"' + String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ") + '"';
    const title = tr(t.title, L1()) + (L2() ? " / " + tr(t.title, L2()) : "");
    const left = (state.club.name.trim() ? state.club.name.trim() + " · " : "") + title;
    $("#pagecss").textContent = `@page{size:A4;margin:13mm 13mm 15mm;
      @bottom-left{content:${cssStr(left)};font:7pt Poppins,"Noto Sans",Arial,sans-serif;color:#667}
      @bottom-right{content:counter(page) " / " counter(pages);font:600 7pt Poppins,Arial,sans-serif;color:#123B8C}}`;
    const safe = s => s.replace(/[\\/:*?"<>|]+/g, "").trim();
    document.title = ["EMTF", safe(state.club.name), safe(tr(t.title, L1()))].filter(Boolean).join(" - ");
    document.documentElement.lang = L1();
  }

  /* ---------- builder UI ---------- */
  function renderPicker() {
    $("#picker").innerHTML = TEMPLATES.map(t => {
      const sub = [L1(), L2()].filter(l => l && l !== "en").map(l => tr(t.title, l)).join(" · ");
      return `<button class="pick${t.id === state.current ? " on" : ""}" data-id="${t.id}"><b>${t.title.en}</b><span>${sub || "&nbsp;"}</span></button>`;
    }).join("");
  }
  function renderLangs() {
    const opts = (sel, none) => (none ? `<option value="">— none —</option>` : "") +
      Object.entries(LANGS).map(([k, v]) => `<option value="${k}"${k === sel ? " selected" : ""}>${v}</option>`).join("");
    $("#lang1").innerHTML = opts(L1(), false);
    $("#lang2").innerHTML = opts(L2(), true);
  }
  function renderSections() {
    const t = tpl(); if (!t) return;
    const fs = formState(t.id);
    $("#sections").innerHTML = t.sections.filter(s => !s.custom).map(s => {
      const on = s.locked || !fs.off.includes(s.id);
      return `<label class="tog${s.locked ? " locked" : ""}"><input type="checkbox" data-sec="${s.id}"${on ? " checked" : ""}${s.locked ? " disabled" : ""}>
        <span>${s.title.en}${s.locked ? ' <em>always included</em>' : ""}</span></label>`;
    }).join("");
    $("#custom").innerHTML = fs.custom.map((q, i) => `
      <div class="cq" data-i="${i}">
        <input class="in" data-k="en" placeholder="Question (${LANGS[L1()]})" value="${esc(q.en)}">
        ${L2() ? `<input class="in" data-k="es" placeholder="Question (${LANGS[L2()]})" value="${esc(q.es)}">` : ""}
        <div class="cqrow"><select class="in" data-k="kind">
          ${[["line", "Short answer line"], ["box", "Larger answer box"], ["yesno", "Yes / No"], ["check", "Tick-box statement"]]
            .map(([v, l]) => `<option value="${v}"${q.kind === v ? " selected" : ""}>${l}</option>`).join("")}
        </select><button class="ghost del" title="Remove question">Remove</button></div>
      </div>`).join("") || `<p class="hint">No extra questions yet. They print in their own section before the signatures.</p>`;
  }
  function renderProgrammes() {
    $("#progs").innerHTML = state.club.programmes.map((p, i) => `
      <div class="prow" data-i="${i}"><input class="in" data-k="name" placeholder="Programme name" value="${esc(p.name)}">
      <input class="in fee" data-k="fee" placeholder="€ / month" value="${esc(p.fee)}"><button class="ghost del" title="Remove">✕</button></div>`).join("");
  }
  function fillClub() {
    document.querySelectorAll("[data-club]").forEach(el => { el.value = state.club[el.dataset.club] || ""; });
    $("#logoPrev").innerHTML = state.club.logo ? `<img src="${state.club.logo}" alt="">` : "No logo yet";
    $("#logoClear").hidden = !state.club.logo;
  }
  function refresh() {
    $("#sheet").innerHTML = renderForm();
    pageStyle();
    fit();
  }
  function fit() {
    const wrap = $("#preview"), sheet = $("#sheetwrap");
    const avail = wrap.clientWidth - 24;
    const px = 794; // 210mm at 96dpi
    sheet.style.zoom = avail < px ? (avail / px).toFixed(3) : 1;
  }
  let toastT;
  function flash(msg, bad) {
    const el = $("#toast"); el.textContent = msg; el.className = "toast show" + (bad ? " bad" : "");
    clearTimeout(toastT); toastT = setTimeout(() => (el.className = "toast"), 1600);
  }
  function resizeLogo(file) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => {
        const img = new Image();
        img.onload = () => {
          const max = 600, k = Math.min(1, max / Math.max(img.width, img.height));
          const cv = document.createElement("canvas");
          cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
          cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
          res(cv.toDataURL("image/png"));
        };
        img.onerror = rej; img.src = r.result;
      };
      r.onerror = rej; r.readAsDataURL(file);
    });
  }

  /* ---------- events ---------- */
  function bind() {
    $("#picker").addEventListener("click", e => {
      const b = e.target.closest(".pick[data-id]"); if (!b) return;
      state.current = b.dataset.id; save(); renderPicker(); renderSections(); refresh();
    });
    document.querySelectorAll("[data-club]").forEach(el => el.addEventListener("input", () => {
      state.club[el.dataset.club] = el.value; save(); refresh();
    }));
    $("#lang1").addEventListener("change", e => {
      state.lang1 = e.target.value; if (state.lang2 === state.lang1) state.lang2 = "";
      save(); renderLangs(); langsReady().then(() => { renderPicker(); renderSections(); refresh(); });
    });
    $("#lang2").addEventListener("change", e => {
      state.lang2 = e.target.value === state.lang1 ? "" : e.target.value;
      save(); renderLangs(); langsReady().then(() => { renderPicker(); renderSections(); refresh(); });
    });
    $("#sections").addEventListener("change", e => {
      const id = e.target.dataset.sec; if (!id) return;
      const fs = formState(tpl().id);
      fs.off = e.target.checked ? fs.off.filter(x => x !== id) : fs.off.concat(id);
      save(); refresh();
    });
    $("#addq").addEventListener("click", () => {
      formState(tpl().id).custom.push({ id: "q" + Date.now(), en: "", es: "", kind: "line" });
      save(); renderSections(); refresh();
      const all = document.querySelectorAll("#custom .cq input[data-k=en]"); all[all.length - 1].focus();
    });
    const cqEdit = e => {
      const row = e.target.closest(".cq"); if (!row) return;
      const q = formState(tpl().id).custom[+row.dataset.i];
      if (e.target.classList.contains("del")) { formState(tpl().id).custom.splice(+row.dataset.i, 1); renderSections(); }
      else if (e.target.dataset.k) q[e.target.dataset.k] = e.target.value; else return;
      save(); refresh();
    };
    $("#custom").addEventListener("input", cqEdit);
    $("#custom").addEventListener("change", cqEdit);
    $("#custom").addEventListener("click", e => { if (e.target.classList.contains("del")) cqEdit(e); });
    $("#progs").addEventListener("input", e => {
      const row = e.target.closest(".prow"); if (!row || !e.target.dataset.k) return;
      state.club.programmes[+row.dataset.i][e.target.dataset.k] = e.target.value; save(); refresh();
    });
    $("#progs").addEventListener("click", e => {
      if (!e.target.classList.contains("del")) return;
      state.club.programmes.splice(+e.target.closest(".prow").dataset.i, 1); save(); renderProgrammes(); refresh();
    });
    $("#addp").addEventListener("click", () => { state.club.programmes.push({ name: "", fee: "" }); save(); renderProgrammes(); refresh(); });
    $("#logo").addEventListener("change", async e => {
      const f = e.target.files[0]; if (!f) return;
      try { state.club.logo = await resizeLogo(f); save(); fillClub(); refresh(); }
      catch (err) { flash("That image couldn't be read — try a PNG or JPG", true); }
      e.target.value = "";
    });
    $("#logoClear").addEventListener("click", () => { state.club.logo = ""; save(); fillClub(); refresh(); });
    document.querySelectorAll(".print").forEach(b => b.addEventListener("click", () => { pageStyle(); window.print(); }));
    $("#reset").addEventListener("click", () => {
      if (!confirm("Clear your club details and all form changes on this device?")) return;
      try { localStorage.removeItem(KEY); } catch (e) {}
      location.reload();
    });
    document.querySelectorAll(".panel > h4").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("shut")));
    window.addEventListener("resize", fit);
    window.addEventListener("beforeprint", () => { $("#sheetwrap").style.zoom = 1; });
    window.addEventListener("afterprint", fit);
  }

  function init() {
    if (!TEMPLATES.length) { document.body.textContent = "No templates loaded."; return; }
    fillClub(); renderLangs(); renderProgrammes(); bind();
    langsReady().then(() => { renderPicker(); renderSections(); refresh(); });
  }
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
