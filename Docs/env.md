# Environment Variables

No secrets in the repo. Use `.env.local` per app (gitignored).

## Hub (`apps/hub`)

| Variable | Example | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_HUB_URL` | `http://localhost:3000` | Canonical hub URL |
| `NEXT_PUBLIC_DEMO_PULSE_URL` | `http://localhost:5173` | Pulse SaaS demo |
| `NEXT_PUBLIC_DEMO_AGENCY_URL` | `http://localhost:3001` | Atelier North |
| `NEXT_PUBLIC_DEMO_FORMA_URL` | `http://localhost:3002` | Forma Shop |
| `NEXT_PUBLIC_DEMO_HABIT_URL` | `http://localhost:8080` | Habit Flutter web |
| `NEXT_PUBLIC_DEMO_SURFACE_URL` | `http://localhost:4321` | Surface editorial |

## Spoke apps (return to hub)

| App | Variable | Example |
|-----|----------|---------|
| SaaS (`apps/saas-dashboard`) | `VITE_HUB_URL` | `http://localhost:3000` |
| Agency (`apps/agency`) | `NEXT_PUBLIC_HUB_URL` | `http://localhost:3000` |
| E-commerce (`apps/ecommerce`) | `NEXT_PUBLIC_HUB_URL` | `http://localhost:3000` |
| Editorial (`apps/editorial`) | `PUBLIC_HUB_URL` | `http://localhost:3000` |
| Flutter (`apps/flutter-habit`) | `--dart-define=HUB_URL=...` | `http://localhost:3000` |
