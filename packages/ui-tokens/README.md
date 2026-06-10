# @website-portfolios/ui-tokens

Shared design tokens for the WebsitePortfolios monorepo.

## Shared (all sites)

| Token | Export |
|-------|--------|
| Spacing scale (4/8px) | `spacing` |
| Neutral grays | `neutral` |
| Motion duration | `duration` |
| Motion easing | `easing` |

## Per-site (NOT in this package)

Each demo app defines its own:

- **Brand primary / accent** colors
- **Typography** families (e.g. Inter for SaaS, Fraunces for agency)

Document per-site choices in `docs/design-tokens.md`.

## Usage

```ts
import { spacing, neutral, duration, easing } from "@website-portfolios/ui-tokens";
```

```css
@import "@website-portfolios/ui-tokens/css";
```
