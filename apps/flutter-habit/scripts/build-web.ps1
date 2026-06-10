# Build Flutter web for deployment (TASK-088)
Set-Location $PSScriptRoot\..
flutter pub get
$hubUrl = if ($env:HUB_URL) { $env:HUB_URL } else { "http://localhost:3000" }
$baseHref = if ($env:HABIT_BASE_HREF) { $env:HABIT_BASE_HREF } else { "/" }
flutter build web --release --no-tree-shake-icons --no-wasm-dry-run --base-href $baseHref --dart-define=HUB_URL=$hubUrl
Write-Host "Build output: build/web"
