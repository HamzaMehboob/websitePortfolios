# GitHub → Production Deploy Setup

Push to `main` triggers:

| Workflow | What deploys |
|----------|----------------|
| [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) | Verifies all builds on PR + push |
| [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) | Production deploy (Vercel + GitHub Pages) |

Each app has a [`vercel.json`](../apps/hub/vercel.json) so **Vercel Git integration** also works if you connect the repo in the Vercel dashboard (alternative to GitHub Actions).

---

## One-time setup (≈15 min)

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio monorepo"
git branch -M main
git remote add origin https://github.com/YOUR_USER/WebsitePortfolios.git
git push -u origin main
```

### 2. Vercel — five projects, one repo

1. Go to [vercel.com/new](https://vercel.com/new) and import **WebsitePortfolios**.
2. Create **five** Vercel projects from the same repo (one per app):

| Vercel project name | Root Directory | Framework |
|---------------------|----------------|-----------|
| `portfolio-hub` | `apps/hub` | Next.js |
| `pulse-saas` | `apps/saas-dashboard` | Vite |
| `atelier-north` | `apps/agency` | Next.js |
| `forma-shop` | `apps/ecommerce` | Next.js |
| `surface-editorial` | `apps/editorial` | Astro |

3. For each project, leave **Build Command** empty — `vercel.json` in each app folder sets install/build via Turborepo.
4. (Optional) Add custom domains per [deployment.md](./deployment.md).

### 3. GitHub Actions secrets

In GitHub → **Settings → Secrets and variables → Actions**:

**Secrets** (from Vercel → Settings → Tokens / General):

| Secret | Where to find |
|--------|----------------|
| `VERCEL_TOKEN` | Vercel → Account → Tokens |
| `VERCEL_ORG_ID` | Vercel → Team Settings → General |
| `VERCEL_PROJECT_ID_HUB` | Hub project → Settings → General |
| `VERCEL_PROJECT_ID_PULSE` | Pulse project → Settings → General |
| `VERCEL_PROJECT_ID_AGENCY` | Agency project → Settings → General |
| `VERCEL_PROJECT_ID_ECOMMERCE` | Forma project → Settings → General |
| `VERCEL_PROJECT_ID_SURFACE` | Surface project → Settings → General |

**Variables** (repository variables, not secrets):

| Variable | Example | Used by |
|----------|---------|---------|
| `VERCEL_DEPLOY_ENABLED` | `true` | Set to `true` only after all `VERCEL_*` secrets exist; otherwise Vercel jobs are skipped |
| `HUB_URL` | `https://your-hub.vercel.app` | Habit Flutter build |
| `HABIT_BASE_HREF` | `/` or `/websitePortfolios/` | Flutter web base path (defaults to `/<repo-name>/` in Actions) |

### 4. Hub environment variables (Vercel)

In the **hub** Vercel project → **Settings → Environment Variables** (Production):

```
NEXT_PUBLIC_HUB_URL=https://your-hub-domain.vercel.app
NEXT_PUBLIC_DEMO_PULSE_URL=https://pulse-saas.vercel.app
NEXT_PUBLIC_DEMO_AGENCY_URL=https://atelier-north.vercel.app
NEXT_PUBLIC_DEMO_FORMA_URL=https://forma-shop.vercel.app
NEXT_PUBLIC_DEMO_HABIT_URL=https://YOUR_USER.github.io/WebsitePortfolios
NEXT_PUBLIC_DEMO_SURFACE_URL=https://surface-editorial.vercel.app
```

Use your real Vercel URLs after the first deploy, then **Redeploy** the hub.

### 5. Spoke “return to hub” URLs (each Vercel spoke project)

| App | Variable | Value |
|-----|----------|-------|
| Pulse | `VITE_HUB_URL` | Hub production URL |
| Agency | `NEXT_PUBLIC_HUB_URL` | Hub production URL |
| Forma | `NEXT_PUBLIC_HUB_URL` | Hub production URL |
| Surface | `PUBLIC_HUB_URL` | Hub production URL |

Redeploy each spoke after setting env vars.

### 6. GitHub Pages for Habit

1. GitHub repo → **Settings → Pages**
2. **Build and deployment** → Source: **GitHub Actions** (not “Deploy from a branch” — branch mode runs Jekyll on the monorepo and fails)
3. After first push to `main`, `build-habit` + `deploy-habit` publish `apps/flutter-habit/build/web`.
4. Repo root includes `.nojekyll` so GitHub does not try to Jekyll-process the monorepo.

For a custom domain (`habit.yourname.dev`), add it under Pages settings and set `HABIT_BASE_HREF=/`.

---

## After setup

Every push to `main`:

1. **CI** builds all apps (including Flutter).
2. **Deploy** pushes all five JS apps to Vercel and Habit to GitHub Pages.

Vercel will **also** auto-deploy on push if the GitHub app is installed — you can use Vercel-only or Actions-only; both use the same `vercel.json` build config.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Deploy workflow shows **instant failure**, 0 jobs | Invalid workflow YAML — do not use `secrets` in job `if:` conditions |
| CI fails on `editorial#build` | Editorial uses **Astro 5** + `@astrojs/tailwind@5` + Tailwind 3 (Astro 6 + lightningcss breaks Linux CI) |
| Deploy workflow fails on Vercel steps (instant) | Add all `VERCEL_*` secrets, then set variable `VERCEL_DEPLOY_ENABLED=true` |
| Vercel jobs skipped | Expected until `VERCEL_DEPLOY_ENABLED=true` and secrets are configured |
| CI/deploy fails on Flutter build | Use `snackBarTheme` (not `snackBarBehavior` on `ThemeData`); build with `--no-wasm-dry-run --no-tree-shake-icons` |
| Flutter `snackBarBehavior` compile error | Set `snackBarTheme: SnackBarThemeData(behavior: SnackBarBehavior.floating)` in `theme.dart` |
| Hub demos show “Coming soon” | Set `NEXT_PUBLIC_DEMO_*_URL` on hub Vercel project and redeploy |
| Pulse 404 on refresh | `vercel.json` includes SPA rewrites — redeploy pulse project |
| Habit blank page on GitHub Pages | Default base href is `/websitePortfolios/`; override with `HABIT_BASE_HREF` var if needed |
| Monorepo install fails | Ensure Root Directory is `apps/<app>`, not repo root |
| GitHub Pages deploy fails | Enable **Settings → Pages → Source: GitHub Actions** |
| `pages build and deployment` / Jekyll `build` fails | Switch Pages source from **branch** to **GitHub Actions**; keep root `.nojekyll` in the repo |
