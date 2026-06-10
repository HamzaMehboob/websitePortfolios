/** Motion duration and easing — shared across all portfolio sites */
export const duration = {
  instant: "0ms",
  fast: "150ms",
  normal: "250ms",
  slow: "400ms",
  slower: "600ms",
} as const;

export const easing = {
  default: "cubic-bezier(0.4, 0, 0.2, 1)",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export type DurationToken = keyof typeof duration;
export type EasingToken = keyof typeof easing;
