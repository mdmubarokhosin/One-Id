import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → produces ./out directory (for Cloudflare Pages).
  output: "export",
  // Embed images into CSS/JS for fully self-contained static output.
  images: {
    unoptimized: true,
  },
  // Enforce type safety in production builds.
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;
