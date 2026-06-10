import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  transpilePackages: ["@website-portfolios/ui-tokens"],
  outputFileTracingRoot: path.join(process.cwd(), "../.."),
};

export default nextConfig;
