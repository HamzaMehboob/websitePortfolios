#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
flutter pub get
flutter build web --release \
  --base-href "${HABIT_BASE_HREF:-/}" \
  --dart-define=HUB_URL="${HUB_URL:-http://localhost:3000}"
