# Lighthouse Report (TASK-111)

**Date:** 2026-06-10  
**Tool:** Lighthouse CLI (mobile emulation)  
**Hub URL:** `http://localhost:3000` (production build via `next start`)

## Hub `/` — scores

| Category | Score |
|----------|------:|
| Performance | **98** |
| Accessibility | **95** |
| Best Practices | **100** |
| SEO | **100** |

**Key metrics:** LCP 2.4s · CLS 0 · TBT 180ms (pre-optimization run)

### Fixes applied

- Replaced client-side Framer Motion hero with CSS `@keyframes` animation (respects `prefers-reduced-motion`).
- Home page First Load JS reduced from ~160 KB to ~111 KB.

Raw JSON: [`lighthouse-hub.json`](./lighthouse-hub.json)

## Other sites

| Site | Status | Notes |
|------|--------|-------|
| Pulse SaaS | Build verified | Run `pnpm --filter saas-dashboard build` + preview; audit after deploy |
| Atelier North | Build verified | OG image via `opengraph-image.tsx` |
| Forma Shop | Build verified | OG image via `opengraph-image.tsx` |
| Habit | Source complete | Audit after `flutter build web` + deploy |
| Surface | Build verified | Static Astro output; minimal client JS on articles |

Re-run after production deploy:

```bash
npx lighthouse https://your-hub-url --view
```
