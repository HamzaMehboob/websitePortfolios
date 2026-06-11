#!/usr/bin/env bash
set -euo pipefail

REPO="${GITHUB_PAGES_REPO:?GITHUB_PAGES_REPO is required}"
ORIGIN="${GITHUB_PAGES_ORIGIN:?GITHUB_PAGES_ORIGIN is required}"
HUB_URL="${HUB_URL:-${ORIGIN}/${REPO}/}"
BASE="/${REPO}"
OUT="github-pages-dist"

echo "Building GitHub Pages site for ${ORIGIN}${BASE}/"

rm -rf "$OUT"
mkdir -p "$OUT/hub" "$OUT/pulse" "$OUT/agency" "$OUT/forma" "$OUT/habit" "$OUT/surface"

cp github-pages/index.html "$OUT/"
cp github-pages/styles.css "$OUT/"
cp github-pages/stars.js "$OUT/"
mkdir -p "$OUT/demos"
cp apps/hub/public/demos/*.svg "$OUT/demos/"
touch "$OUT/.nojekyll"

corepack enable
pnpm install --frozen-lockfile

disable_og_image() {
  local app=$1
  local og="apps/${app}/src/app/opengraph-image.tsx"
  if [[ -f "$og" ]]; then
    mv "$og" "${og}.bak"
  fi
}

restore_og_image() {
  local app=$1
  local og="apps/${app}/src/app/opengraph-image.tsx.bak"
  if [[ -f "$og" ]]; then
    mv "$og" "apps/${app}/src/app/opengraph-image.tsx"
  fi
}

cleanup_og_images() {
  restore_og_image hub
  restore_og_image agency
  restore_og_image ecommerce
}
trap cleanup_og_images EXIT

export GITHUB_PAGES=true
export GITHUB_PAGES_REPO="$REPO"
export GITHUB_PAGES_ORIGIN="$ORIGIN"
export NEXT_PUBLIC_HUB_URL="$HUB_URL"
export VITE_HUB_URL="$HUB_URL"
export PUBLIC_HUB_URL="$HUB_URL"
export NEXT_PUBLIC_DEMO_PULSE_URL="${ORIGIN}${BASE}/pulse/"
export NEXT_PUBLIC_DEMO_AGENCY_URL="${ORIGIN}${BASE}/agency/"
export NEXT_PUBLIC_DEMO_FORMA_URL="${ORIGIN}${BASE}/forma/shop/"
export NEXT_PUBLIC_DEMO_HABIT_URL="${ORIGIN}${BASE}/habit/"
export NEXT_PUBLIC_DEMO_SURFACE_URL="${ORIGIN}${BASE}/surface/"

echo "→ Building Portfolio Hub (Next.js static export)…"
disable_og_image hub
pnpm --filter hub build
restore_og_image hub
cp -r apps/hub/out/. "$OUT/hub/"

echo "→ Building Pulse (Vite)…"
pnpm --filter saas-dashboard build
cp -r apps/saas-dashboard/dist/. "$OUT/pulse/"
cp "$OUT/pulse/index.html" "$OUT/pulse/404.html"

echo "→ Building Atelier North (Next.js static export)…"
disable_og_image agency
pnpm --filter agency build
restore_og_image agency
cp -r apps/agency/out/. "$OUT/agency/"

echo "→ Building Forma Shop (Next.js static export)…"
disable_og_image ecommerce
pnpm --filter ecommerce build
restore_og_image ecommerce
cp -r apps/ecommerce/out/. "$OUT/forma/"

echo "→ Building Surface (Astro)…"
pnpm --filter editorial exec astro build
cp -r apps/editorial/dist/. "$OUT/surface/"

echo "→ Building Habit (Flutter web)…"
(
  cd apps/flutter-habit
  flutter create . --platforms=web --project-name habit
  flutter pub get
  flutter build web --release --no-tree-shake-icons --no-wasm-dry-run \
    --base-href "${BASE}/habit/" \
    --dart-define=HUB_URL="${HUB_URL}"
)
cp -r apps/flutter-habit/build/web/. "$OUT/habit/"

echo "✓ GitHub Pages artifact ready at ${OUT}/"
ls -la "$OUT"
