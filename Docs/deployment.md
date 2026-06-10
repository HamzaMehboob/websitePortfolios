# Deployment Matrix

| Site | App | Host | Domain |
|------|-----|------|--------|
| Hub | `apps/hub` | Vercel | `yourname.dev` |
| Pulse SaaS | `apps/saas-dashboard` | Vercel | `saas.yourname.dev` |
| Atelier North | `apps/agency` | Vercel | `agency.yourname.dev` |
| Forma Shop | `apps/ecommerce` | Vercel | `shop.yourname.dev` |
| **Portfolio hub + all demos** | `github-pages/` + all apps | GitHub Pages (CI) | `yourname.github.io/REPO_NAME/` |
| Habit (subpath) | `apps/flutter-habit` | GitHub Pages → `/habit/` | `…/REPO_NAME/habit/` |
| Surface | `apps/editorial` | Vercel | `surface.yourname.dev` |

## Automatic deploy on `git push`

See **[github-deploy-setup.md](./github-deploy-setup.md)** for the full checklist.

- `.github/workflows/ci.yml` — build verification
- `.github/workflows/deploy.yml` — production deploy on `main`
- `apps/*/vercel.json` — monorepo install/build per Vercel project

## Vercel (hub + JS apps)

1. Import monorepo; set **Root Directory** per app (e.g. `apps/hub`).
2. Framework preset: Next.js, Vite, or Astro (auto-detected from `vercel.json`).
3. Preview deployments on PRs via Vercel GitHub app or Actions.

## Flutter web

```bash
cd apps/flutter-habit
flutter build web
# Deploy build/web/ to Firebase Hosting or gh-pages branch
```

Build output path: `apps/flutter-habit/build/web`

## Editorial (Astro)

Build command: `pnpm build` (from `apps/editorial`)  
Output: `dist/`
