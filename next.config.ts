import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  experimental: {
    optimizePackageImports: ["@emotion/react", "@emotion/styled"],
  },
  images: {
    unoptimized: true, // static exportのため
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // i18n: { locales: ["en", "ja"], defaultLocale: "en", localeDetection: false },
  compiler: {
    emotion: true,
  },
  env: {
    NEXT_PUBLIC_AIRTABLE_PAT: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
    NEXT_PUBLIC_AIRTABLE_BASE: process.env.NEXT_PUBLIC_AIRTABLE_BASE,
    NEXT_PUBLIC_AIRTABLE_TABLE: process.env.NEXT_PUBLIC_AIRTABLE_TABLE,
  },
};

export default nextConfig;
