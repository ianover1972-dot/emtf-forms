// Bundles src/ into one self-contained dist/index.html (fonts, crest, templates inlined).
// Usage: node build/build.mjs
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { languages, compiled } from "./i18n.mjs";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const r = p => readFileSync(join(root, p));
const fontDir = "node_modules/@fontsource/poppins/files";
const faces = [[300, "normal"], [400, "normal"], [400, "italic"], [500, "normal"], [600, "normal"], [700, "normal"]];
const ranges = {
  latin: "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
  "latin-ext": "U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"
};
// Greek has no Poppins glyphs: the browser falls back to the system sans-serif.
const fonts = Object.entries(ranges).flatMap(([sub, range]) => faces.map(([w, s]) =>
  `@font-face{font-family:Poppins;font-style:${s};font-weight:${w};font-display:swap;unicode-range:${range};src:url(data:font/woff2;base64,${r(`${fontDir}/poppins-${sub}-${w}-${s}.woff2`).toString("base64")}) format("woff2")}`)).join("\n");
const templates = readdirSync(join(root, "src/templates")).filter(f => f.endsWith(".js")).sort()
  .map(f => `/* ${f} */\n` + r(`src/templates/${f}`).toString()).join("\n");
const parts = {
  "/*@FONTS*/": fonts,
  "/*@FORMCSS*/": r("src/form.css").toString(),
  "/*@CREST*/": `window.EMTF_CREST="data:image/png;base64,${r("assets/emtf-crest.png").toString("base64")}";`,
  "/*@REGISTRY*/": r("src/registry.js").toString(),
  "/*@TEMPLATES*/": templates,
  "/*@I18N*/": languages().map(compiled).join(""),
  "/*@APP*/": r("src/app.js").toString(),
};
let html = r("src/index.html").toString();
for (const [k, v] of Object.entries(parts)) {
  if (!html.includes(k)) throw new Error("Missing placeholder " + k);
  html = html.split(k).join(v.replace(/<\/script/gi, "<\\/script"));
}
mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/index.html"), html);
console.log(`dist/index.html  ${(html.length / 1024).toFixed(0)} KB  ·  ${readdirSync(join(root, "src/templates")).length} template(s)`);
