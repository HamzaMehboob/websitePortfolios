# Habit App (Flutter Web)

Wellness habit tracker — **not** part of the Turborepo JS pipeline.

## Prerequisites

- [Flutter SDK](https://docs.flutter.dev/get-started/install) 3.22+ with web enabled

## Dependencies

Pinned in `pubspec.yaml` for CI stability: `flutter_riverpod`, `go_router`, `url_launcher`. Run `flutter pub get` after cloning; commit `pubspec.lock` once generated locally for reproducible builds.

## Commands

```bash
cd apps/flutter-habit
flutter pub get
flutter run -d chrome
flutter build web
```

## Deploy

Output: `build/web/`. **Auto-deploy:** push to `main` deploys via GitHub Actions → GitHub Pages (see [docs/github-deploy-setup.md](../../docs/github-deploy-setup.md)).

```bash
HUB_URL=https://your-hub.vercel.app ./scripts/build-web.sh   # Linux/macOS
.\scripts\build-web.ps1                                       # Windows
```

## Hub link

```bash
flutter run -d chrome --dart-define=HUB_URL=http://localhost:3000
```
