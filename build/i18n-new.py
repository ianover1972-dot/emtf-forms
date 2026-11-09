# Translation workflow for new English texts (keeps every xx.json keyed by English):
#   python3 build/i18n-new.py list            -> src/i18n/_new.json  (texts missing from the languages)
#   python3 build/i18n-new.py merge de fr ...  -> merges src/i18n/xx.new.txt ("index|translation", index into _new.json)
#                                                 into xx.json, then rewrites xx.txt against the current _strings.json
import json, sys, pathlib, subprocess
root = pathlib.Path(__file__).resolve().parent.parent
i18n = root / "src/i18n"
subprocess.run(["node", str(root / "build/i18n.mjs"), "strings"], check=True, capture_output=True)
strings = json.loads((i18n / "_strings.json").read_text())
langs = sorted(p.stem for p in i18n.glob("??.json"))
cmd = sys.argv[1]
if cmd == "list":
    have = set(json.loads((i18n / f"{langs[0]}.json").read_text()))
    new = [s for s in strings if s not in have]
    (i18n / "_new.json").write_text(json.dumps(new, ensure_ascii=False, indent=1))
    for i, s in enumerate(new): print(f"{i}|{s}")
elif cmd == "merge":
    new = json.loads((i18n / "_new.json").read_text())
    for lang in sys.argv[2:]:
        d = json.loads((i18n / f"{lang}.json").read_text())
        n = 0
        for line in (i18n / f"{lang}.new.txt").read_text().splitlines():
            if not line.strip(): continue
            i, txt = line.split("|", 1); d[new[int(i)]] = txt.strip(); n += 1
        d = {s: d[s] for s in strings if s in d}          # drop texts no longer used, keep template order
        (i18n / f"{lang}.json").write_text(json.dumps(d, ensure_ascii=False, indent=1))
        (i18n / f"{lang}.txt").write_text("".join(f"{i}|{d[s]}\n" for i, s in enumerate(strings) if s in d))
        (i18n / f"{lang}.new.txt").unlink()
        print(lang, "merged", n, "->", len(d), "of", len(strings))
