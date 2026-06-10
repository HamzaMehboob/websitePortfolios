# Vercel Setup (TASK-008, TASK-009)

> **Start here:** [github-deploy-setup.md](./github-deploy-setup.md) — one-time GitHub + Vercel + secrets checklist.

## Hub (`apps/hub`)

1. Import `WebsitePortfolios` repo on [vercel.com](https://vercel.com).
2. Set **Root Directory** → `apps/hub`.
3. Build/install: use `apps/hub/vercel.json` (Turborepo from repo root).
4. Add domain: `yourname.dev`.
5. Environment variables from `apps/hub/.env.example`.

## Spoke apps (subdomains)

| App | Root Directory | `vercel.json` | Domain |
|-----|----------------|---------------|--------|
| saas-dashboard | `apps/saas-dashboard` | Vite + SPA rewrites | `saas.yourname.dev` |
| agency | `apps/agency` | Next.js | `agency.yourname.dev` |
| ecommerce | `apps/ecommerce` | Next.js | `shop.yourname.dev` |
| editorial | `apps/editorial` | Astro | `surface.yourname.dev` |

After deploy, set `NEXT_PUBLIC_DEMO_*_URL` in hub Vercel env to each live URL, then redeploy hub.
