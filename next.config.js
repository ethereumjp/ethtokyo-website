/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 開発環境では静的エクスポートを無効にする
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    images: { unoptimized: true },
  }),
  // 開発環境では通常の画像最適化を使用
  ...(process.env.NODE_ENV === "development" && {
    images: { unoptimized: false },
  }),
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
