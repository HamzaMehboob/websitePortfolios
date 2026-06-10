# @website-portfolios/tsconfig

Shared TypeScript configurations for the monorepo.

## Usage

**Next.js apps** (`apps/hub`, `apps/agency`, `apps/ecommerce`):

```json
{
  "extends": "@website-portfolios/tsconfig/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

**React + Vite apps** (`apps/saas-dashboard`):

```json
{
  "extends": "@website-portfolios/tsconfig/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

**Library packages** (`packages/*`):

```json
{
  "extends": "@website-portfolios/tsconfig/base.json",
  "include": ["src"]
}
```
