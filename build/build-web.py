# Builds dist-web/: the deployed version (separate files, Google Fonts) from src/.
import re, shutil, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
out = root / "dist-web"; (out / "templates").mkdir(parents=True, exist_ok=True)
for f in ["registry.js", "app.js", "form.css"]: shutil.copy(root / "src" / f, out / f)
tpls = sorted(p.name for p in (root / "src/templates").glob("*.js"))
for t in tpls: shutil.copy(root / "src/templates" / t, out / "templates" / t)
s = (root / "src/index.html").read_text()
s = s.replace('<style>/*@FONTS*/</style>', '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">')
s = s.replace('<style>/*@FORMCSS*/</style>', '<link rel="stylesheet" href="form.css">')
s = s.replace('<script>/*@CREST*/</script>', '<script>window.EMTF_CREST="crest.png";</script>')
s = s.replace('<script>/*@REGISTRY*/</script>', '<script src="registry.js"></script>')
s = s.replace('<script>/*@TEMPLATES*/</script>', "\n".join(f'<script src="templates/{t}"></script>' for t in tpls))
import subprocess
subprocess.run(["node", str(root / "build/i18n.mjs"), "web", str(out / "i18n")], check=True)
langs = sorted(p.stem for p in (root / "src/i18n").glob("??.json"))
s = s.replace('<script>/*@I18N*/</script>\n', '')  # languages load on demand from i18n/
s = s.replace('<script>/*@APP*/</script>', '<script src="app.js"></script>')
(out / "index.html").write_text(s)
print("dist-web built:", len(tpls), "templates")
