/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ["en", "ja"], defaultLocale: "en", localeDetection: false },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
