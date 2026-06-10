import { duration, easing, neutral, spacing } from "@website-portfolios/ui-tokens";

/** Verifies ui-tokens is importable from a workspace consumer (TASK-016). */
export const tokenSnapshot = {
  spacingUnit: spacing[2],
  neutralMid: neutral[500],
  motion: `${duration.normal} ${easing.default}`,
};
