# Cross-Link Audit (TASK-110)

**Date:** 2026-06-10  
**Status:** Structure verified. Auto-deploy configured via [github-deploy-setup.md](./github-deploy-setup.md). Set hub `NEXT_PUBLIC_DEMO_*_URL` env vars on Vercel after first deploy.

## Hub → Spokes

| Demo | Hub `/` card | `/demos` | Case study | Env var |
|------|--------------|----------|------------|---------|
| Pulse SaaS | ✓ | ✓ | `/work/pulse` | `NEXT_PUBLIC_DEMO_PULSE_URL` |
| Atelier North | ✓ | ✓ | `/work/atelier-north` | `NEXT_PUBLIC_DEMO_AGENCY_URL` |
| Forma Shop | ✓ | ✓ | `/work/forma` | `NEXT_PUBLIC_DEMO_FORMA_URL` |
| Habit App | ✓ | ✓ | `/work/habit` | `NEXT_PUBLIC_DEMO_HABIT_URL` |
| Surface Mag | ✓ | ✓ | `/work/surface` | `NEXT_PUBLIC_DEMO_SURFACE_URL` |

**Registry:** `apps/hub/src/lib/demos.ts` (single source for `/` and `/demos`).

**Local URLs:** Copy `apps/hub/.env.local.example` → `.env.local` to mark all demos **live**.

## Spokes → Hub

| App | Component | Env var | Default |
|-----|-----------|---------|---------|
| Pulse SaaS | `HubBackLink.tsx` | `VITE_HUB_URL` | `http://localhost:3000` |
| Atelier North | `HubBackLink.tsx` | `NEXT_PUBLIC_HUB_URL` | `http://localhost:3000` |
| Forma Shop | `HubBackLink.tsx` | `NEXT_PUBLIC_HUB_URL` | `http://localhost:3000` |
| Habit | `hub_back_link.dart` | `HUB_URL` (dart-define) | `http://localhost:3000` |
| Surface | `HubBackLink.astro` | `PUBLIC_HUB_URL` | `http://localhost:3000` |

## Case study → Live demo

Case studies with `demoId` show **View live demo →** when the matching env URL is set (`apps/hub/src/app/work/[slug]/page.tsx`).

## Checklist

- [x] All 5 demos in hub registry
- [x] All 6 case studies on `/work` (includes hub meta case study)
- [x] Every spoke has Portfolio Home link
- [ ] All production subdomain URLs live (deploy phase)
