/** Prefix public folder paths when deployed under a Next.js basePath (e.g. GitHub Pages). */
export function publicAsset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
