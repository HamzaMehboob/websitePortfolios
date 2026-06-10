import type { NextConfig } from "next";
import path from "path";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_PAGES_REPO ?? "";
const basePath = isGitHubPages ? `/${repo}/forma` : "";

const nextConfig: NextConfig = {
  transpilePackages: ["@website-portfolios/ui-tokens"],
  outputFileTracingRoot: path.join(process.cwd(), "../.."),
  ...(isGitHubPages && {
    output: "export",
    basePath,
    assetPrefix: basePath,
    trailingSlash: true,
    images: { unoptimized: true },
    eslint: { ignoreDuringBuilds: true },
  }),
};

export default nextConfig;
