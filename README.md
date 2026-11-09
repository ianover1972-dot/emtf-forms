# EMTF Form Builder

Self-serve tool for EMTF affiliated clubs to produce Club Series forms as print-ready A4 PDFs,
branded with the EMTF crest plus the club's own name, logo and details.

- `src/templates/*.js` — one file per form (content in EN + ES). Block types are listed at the top of `src/app.js`.
- `src/app.js` — builder logic (club profile, section toggles, custom questions, rendering).
- `src/form.css` — the printed form design (blue #123B8C / yellow #F4C21B).
- `assets/emtf-crest.png` — EMTF crest.

Build: `npm install` then `node build/build.mjs` → `dist/index.html` (single self-contained file you can open offline).
`python3 build/build-web.py` → `dist-web/` (the deployed version: separate files, Google Fonts). Replace `dist-web/crest.png` with the web-sized crest.

Club details are stored in the browser (localStorage) only; nothing is sent to a server.
PDFs come from the browser's print dialog ("Save as PDF"); page footers with page numbers need Chrome/Edge 131+.

## Languages
English and Spanish live in the templates. Other languages live in `src/i18n/xx.json` (`"English text": "translation"`),
written from `src/i18n/xx.txt` (`index|translation`, indexes into `src/i18n/_strings.json`):
- `node build/i18n.mjs strings` – refresh the list of English texts after editing a template
- `python3 build/txt2json.py de fr …` – convert .txt translations to .json
- `node build/i18n.mjs check` – coverage and placeholder check for every language
Placeholders `{club}`, `{authority}` and `<b>` tags must be kept in translations.
Translations were drafted by AI: have a native speaker check each language before wide use.

## Live
https://emtf-forms.vercel.app (Vercel project `emtf-forms`, team iano2projects).
Publishing: push to `main` on GitHub, then redeploy on Vercel (the build runs `vercel-build.sh`, which pulls `dist-web/` from GitHub).

