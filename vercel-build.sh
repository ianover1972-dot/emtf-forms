#!/bin/sh
# Vercel build: the live site is the dist-web/ folder of this repo.
# (Deployments are triggered with this script; it fetches the latest main branch from GitHub.)
set -e
rm -rf public src-repo
mkdir -p src-repo
curl -sSL https://codeload.github.com/ianover1972-dot/emtf-forms/tar.gz/refs/heads/main | tar xz -C src-repo --strip-components=1
cp -r src-repo/dist-web public
echo "Built from $(ls public | wc -l) files"
