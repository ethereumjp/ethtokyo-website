/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
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

module.exports = nextConfig;
