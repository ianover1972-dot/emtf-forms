// Translation tooling.
//   node build/i18n.mjs strings          → src/i18n/_strings.json (every English text to translate)
//   node build/i18n.mjs check            → coverage report per language
//   node build/i18n.mjs web <outDir>     → <outDir>/xx.js files for the deployed site
// src/i18n/xx.json is { "English text": "translation" }. The app looks texts up by FNV-1a hash of the English.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

export function hash(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36);
}
export function englishStrings() {
  const ctx = { window: {}, EMTF: { _t: [], addTemplate(t) { this._t.push(t); } } };
  vm.createContext(ctx);
  for (const f of readdirSync(join(root, "src/templates")).filter(f => f.endsWith(".js")).sort())
    vm.runInContext(readFileSync(join(root, "src/templates", f), "utf8"), ctx);
  const app = readFileSync(join(root, "src/app.js"), "utf8");
  const ui = vm.runInNewContext("(" + app.slice(app.indexOf("const UI = {") + 11, app.indexOf("};", app.indexOf("const UI = {")) + 1) + ")");
  const out = [];
  const seen = new Set();
  const add = s => { if (!seen.has(s)) { seen.add(s); out.push(s); } };
  const walk = o => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === "object") {
      if (typeof o.en === "string" && typeof o.es === "string") add(o.en);
      for (const k in o) if (k !== "en" && k !== "es" && k !== "summary") walk(o[k]);
    }
  };
  ctx.EMTF._t.forEach(walk); walk(Object.values(ui));
  return out;
}
export function languages() {
  return readdirSync(join(root, "src/i18n")).filter(f => /^[a-z]{2}\.json$/.test(f)).map(f => f.slice(0, 2)).sort();
}
export function compiled(lang) {
  const src = JSON.parse(readFileSync(join(root, "src/i18n", lang + ".json"), "utf8"));
  const want = new Set(englishStrings());
  const map = {};
  for (const [en, txt] of Object.entries(src)) if (want.has(en) && txt) map[hash(en)] = txt;
  return `window.EMTF_I18N=window.EMTF_I18N||{};window.EMTF_I18N.${lang}=${JSON.stringify(map)};\n`;
}
function check() {
  const all = englishStrings();
  for (const l of languages()) {
    const src = JSON.parse(readFileSync(join(root, "src/i18n", l + ".json"), "utf8"));
    const missing = all.filter(s => !src[s]);
    const extra = Object.keys(src).filter(s => !all.includes(s));
    const ph = all.filter(s => src[s] && ["{club}", "{authority}", "<b>"].some(p => s.split(p).length !== src[s].split(p).length));
    console.log(`${l}: ${all.length - missing.length}/${all.length} translated` +
      (missing.length ? `, MISSING ${missing.length}: ${missing.slice(0, 5).map(s => JSON.stringify(s.slice(0, 50))).join(", ")}` : "") +
      (extra.length ? `, unused ${extra.length}` : "") + (ph.length ? `, PLACEHOLDER MISMATCH ${ph.length}: ${ph.slice(0, 3).join(" | ")}` : ""));
  }
}
if (process.argv[1] && process.argv[1].endsWith("i18n.mjs")) {
  const [cmd, arg] = process.argv.slice(2);
  if (cmd === "strings") { const s = englishStrings(); writeFileSync(join(root, "src/i18n/_strings.json"), JSON.stringify(s, null, 1)); console.log(s.length, "strings"); }
  else if (cmd === "check") check();
  else if (cmd === "web") { mkdirSync(arg, { recursive: true }); for (const l of languages()) writeFileSync(join(arg, l + ".js"), compiled(l)); console.log("wrote", languages().join(", ")); }
}
