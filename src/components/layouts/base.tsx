import Footer from "@/components/organisms/Footer";
import { globalStyles } from "@/themes/global";
import { brand } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import { Global, css } from "@emotion/react";
import { Inter } from "next/font/google";
import Head from "next/head";
import type { FC } from "react";

export const metadata = {
  title: {
    template: "%s | ETHTokyo'25",
    default: "ETHTokyo'25",
  },
  description: "The Japanese Ethereum Community Hackathon & Conference",
  keywords: ["Ethereum", "Japan", "Tokyo", "Blockchain", "Hackathon"],
  category: "technology",
  authors: [{ name: "Ethereum Japan", url: "https://github.com/ethereumjp" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ETHTokyo 2025",
    description: "The Japanese Ethereum Community Hackathon & Conference",
    url: "https://ethtokyo.org/",
    siteName: "ethtokyo.org",
    images: [
      {
        url: "https://ethtokyo.org/logo/ETHTokyoLogo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETHTokyo 2025",
    description: "The Japanese Ethereum Community Hackathon & Conference",
    siteId: "1511737631948034048",
    creator: "@Ethereum_JP",
    creatorId: "1511737631948034048",
    images: ["https://ethtokyo.org/logo/ETHTokyoLogo.png"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B8FAF6" },
    { media: "(prefers-color-scheme: dark)", color: "#C9B3F5" },
  ],
  icons: {
    icon: "/logo/ETHTokyoLogo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

const fontInter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// const styleCache = createCache({ key: 'next' });

const Layout: FC<PageProps> = ({ pageTitle, children }) => {
  const siteTitle = "ETHTokyo'25";
  const baseLayoutStyle = css``;
  const mainLayoutStyle = css``;

  return (
    <>
      <Global styles={globalStyles} />

      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
      </Head>

      <div className={fontInter.className} css={baseLayoutStyle}>
        <main css={mainLayoutStyle}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
