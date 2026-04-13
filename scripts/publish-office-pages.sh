#!/usr/bin/env bash
# 将 dist 推送到 Office-Security-Profile 的 gh-pages，触发 GitHub Actions 部署 Pages。
# 需已配置 git 凭据（ssh 或 gh auth / credential helper）。
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
npm run build
cd dist
rm -rf .git
git init
git config user.email "41898282+github-actions[bot]@users.noreply.github.com" 2>/dev/null || true
git config user.name "github-actions[bot]" 2>/dev/null || true
git add -A
git commit -m "deploy: GitHub Pages $(date -u +%Y-%m-%dT%H:%MZ)"
git branch -M gh-pages
if git -C "$ROOT" remote get-url office-profile &>/dev/null; then
  REMOTE_URL="$(git -C "$ROOT" remote get-url office-profile)"
else
  REMOTE_URL="${OFFICE_PROFILE_REMOTE:-https://github.com/Shhhh704/Office-Security-Profile.git}"
fi
git remote add target "$REMOTE_URL"
git push -f target gh-pages
cd "$ROOT"
rm -rf dist/.git
echo "Done. Open repo Settings → Pages → Source: GitHub Actions if not already."
