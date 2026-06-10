# Accessibility Audit Checklist (Phase 5)

**Target:** WCAG 2.1 AA  
**Audited:** 2026-06-10 (code review + local keyboard pass)

| Check | Hub | SaaS | Agency | Forma | Habit | Surface |
|-------|-----|------|--------|-------|-------|---------|
| Logical tab order | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Visible focus rings | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Skip to content link | ✓ | — | ✓ | ✓ | — | ✓ |
| `prefers-reduced-motion` | ✓ | partial | ✓ | partial | ✓ | ✓ |
| Color contrast AA | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Images have alt text | ✓ | ✓ | ✓ | ✓ | decorative | decorative |
| Form labels / errors | ✓ | N/A | ✓ | ✓ | N/A | N/A |
| Return to hub link focusable | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Keyboard operable menus | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ARIA on modals/dialogs | — | — | ✓ | ✓ | — | — |

### Notes

- **Hub:** `SkipLink`, Framer Motion respects `useReducedMotion`, theme toggle has `aria-label`.
- **SaaS:** Sidebar drawer keyboard-accessible; charts use text labels. Add skip link in future polish.
- **Agency:** GSAP scroll narrative disabled when `prefers-reduced-motion`; project modals trap focus.
- **Forma:** Cart drawer and checkout validation focus first error field.
- **Habit:** 48dp targets; snackbar on complete; reduced-motion skips animation-heavy feedback.
- **Surface:** Reading progress hidden when reduced motion; skip link in `BaseLayout`.

**P0/P1 issues:** None blocking launch for portfolio demo scope. SaaS skip link is P2 enhancement.
