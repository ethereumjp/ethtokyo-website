import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { globalStyles } from "@/themes/global";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
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
        url: "https://ethtokyo.org/assets/ETHTokyoLogo.png",
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
    images: ["https://ethtokyo.org/assets/ETHTokyoLogo.png"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#B8FAF6" },
    { media: "(prefers-color-scheme: dark)", color: "#C9B3F5" },
  ],
  icons: {
    icon: "/assets/ETHTokyoLogo.png",
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
  const baseLayoutStyle = css`
    background-color: ${themeLight.Background};
    color: ${neutral.Text};
    display: flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    
    a {
      color: ${themeLight.Link};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${themeLight.LinkHover};
      }
    }
  `;

  const mainLayoutStyle = css`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
  `;

  return (
    <>
      <Global styles={globalStyles} />

      {/* HTML header */}
      <Head>
        <title>{pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle}</title>
      </Head>

      {/* main body */}
      <div className={fontInter.className} css={baseLayoutStyle}>
        <Header />
        <main css={mainLayoutStyle}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
