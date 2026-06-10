# WebsitePortfolios

Six portfolio frontends + a central hub showcasing UI/UX engineering across multiple stacks.

**Strategy:** [Docs/cto_plan.md](./Docs/cto_plan.md)  
**Tasks:** [Docs/task_todo.md](./Docs/task_todo.md)

## Tech summary

| Site | Folder | Stack | Port (local) |
|------|--------|-------|--------------|
| Portfolio Hub | `apps/hub` | Next.js 15, Tailwind, Framer Motion | 3000 |
| Pulse SaaS | `apps/saas-dashboard` | React 19, Vite, TanStack Query, Recharts | 5173 |
| Atelier North | `apps/agency` | Next.js 15, GSAP, Tailwind | 3001 |
| Forma Shop | `apps/ecommerce` | Next.js 15, Zustand, Tailwind | 3002 |
| Habit App | `apps/flutter-habit` | Flutter 3, Riverpod, go_router | 8080 (web) |
| Surface Mag | `apps/editorial` | Astro 6, MDX, React islands | 4321 |

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io) 9+
- Flutter SDK 3.x (for `apps/flutter-habit` only)

## Quick start

```bash
pnpm install
cp apps/hub/.env.local.example apps/hub/.env.local
pnpm --filter hub dev
```

With `.env.local` in place, the hub lists all five demos as **live** with local URLs.

## Commands

```bash
pnpm dev          # all JS apps via Turborepo
pnpm build
pnpm lint
pnpm typecheck

pnpm --filter hub dev
pnpm --filter saas-dashboard dev
pnpm --filter agency dev
pnpm --filter ecommerce dev
pnpm --filter editorial dev
```

**Flutter (separate toolchain):**

```bash
cd apps/flutter-habit
flutter pub get
flutter run -d chrome --dart-define=HUB_URL=http://localhost:3000
```

## Local demo URLs

| Demo | URL |
|------|-----|
| Hub | http://localhost:3000 |
| Pulse | http://localhost:5173 |
| Atelier North | http://localhost:3001 |
| Forma | http://localhost:3002 |
| Habit | http://localhost:8080 |
| Surface | http://localhost:4321 |

## Deploy to production

**GitHub Pages (default):** Push to `main` deploys a portfolio hub at `https://YOUR_USER.github.io/REPO_NAME/` with all five demos at subpaths (`/pulse/`, `/agency/`, `/forma/`, `/habit/`, `/surface/`). Enable **Settings → Pages → GitHub Actions**.

**Vercel (optional):** For the full Next.js hub with case studies, set up five Vercel projects — see [docs/github-deploy-setup.md](./docs/github-deploy-setup.md).

## Navigation architecture

- Hub `/` lists all 5 portfolio demos (portfolio launcher).
- `/demos` repeats the same registry; `/work` lists all case studies.
- Every spoke app includes **← Portfolio Home** back to the hub.

## Docs

- [Cross-link audit](./docs/cross-link-audit.md)
- [Accessibility checklist](./docs/a11y-checklist.md)
- [Lighthouse report](./docs/lighthouse-report.md)
- [GitHub deploy setup](./docs/github-deploy-setup.md)
- [Deployment matrix](./docs/deployment.md)
- [OG image plan](./Docs/og-images-plan.md)
