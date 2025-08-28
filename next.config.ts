import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
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
