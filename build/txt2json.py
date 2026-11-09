# Converts src/i18n/xx.txt ("index|translation" per line, indexes into _strings.json) to src/i18n/xx.json
import json, sys, pathlib
root = pathlib.Path(__file__).resolve().parent.parent / "src/i18n"
strings = json.loads((root / "_strings.json").read_text())
for lang in sys.argv[1:]:
    out, seen = {}, set()
    for line in (root / f"{lang}.txt").read_text().splitlines():
        if not line.strip(): continue
        i, txt = line.split("|", 1); i = int(i)
        assert i not in seen, f"{lang}: duplicate index {i}"; seen.add(i)
        out[strings[i]] = txt.strip()
    missing = [i for i in range(len(strings)) if i not in seen]
    (root / f"{lang}.json").write_text(json.dumps(out, ensure_ascii=False, indent=1))
    print(lang, len(out), "entries", "missing idx:", missing[:10])
