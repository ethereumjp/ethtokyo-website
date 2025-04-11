import { CountdownPanel } from "@/components/organisms/Countdown";
import { Socials } from "@/components/organisms/Socials";
import {
  brand,
  globalStyles,
  mq,
  neutral,
  themeLight,
} from "@/themes/2024-styles";
import type { ComponentProps, Judge, Mentor, PageProps } from "@/types";
import { Global, css } from "@emotion/react";
import type { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import AbhimanyuPic from "public/2024/images/contributors/abhimanyunag.jpg";
import AggrePic from "public/2024/images/contributors/aggre.jpg";
import AllenPic from "public/2024/images/contributors/allenjoseph.jpg";
import AnjaliPic from "public/2024/images/contributors/anjaliyoung.png";
import AudreyPic from "public/2024/images/contributors/audrey.png";
import AyaPic from "public/2024/images/contributors/ayamiyaguchi.png";
import ChuazhengPic from "public/2024/images/contributors/chuazhenglong.jpeg";
import DangerPic from "public/2024/images/contributors/dangerz.png";
import DanielPic from "public/2024/images/contributors/danielhwang.png";
import DaodudePic from "public/2024/images/contributors/daodude.jpg";
import DeliPic from "public/2024/images/contributors/deligong.png";
import EdmundPic from "public/2024/images/contributors/edmundedgar.jpg";
import FrancescoPic from "public/2024/images/contributors/francescoandreoli.jpg";
import FriscoPic from "public/2024/images/contributors/friscodanconia.jpeg";
import GuruPic from "public/2024/images/contributors/guru.jpg";
import JamesPic from "public/2024/images/contributors/jameshe.jpeg";
import JehyukPic from "public/2024/images/contributors/jehyukjang.jpg";
import JongwonPic from "public/2024/images/contributors/jongwonpark.jpg";
import JosephPic from "public/2024/images/contributors/josephschiarizzi.jpg";
import JoshPic from "public/2024/images/contributors/joshguha.png";
import KolbyPic from "public/2024/images/contributors/kolbymorozliebl.jpg";
import LeonaPic from "public/2024/images/contributors/leohio.jpeg";
import LouiePic from "public/2024/images/contributors/louieoconnor.jpg";
import MattPic from "public/2024/images/contributors/matthewliu.jpeg";
import MelisaPic from "public/2024/images/contributors/melisakurtcan.jpg";
import MoazzamPic from "public/2024/images/contributors/moazzamarif.png";
import NabihaPic from "public/2024/images/contributors/nabihasheikh.png";
import NaimPic from "public/2024/images/contributors/naimashhab.jpeg";
import NikhilPic from "public/2024/images/contributors/nikhilmahana.jpg";
import Nilspic from "public/2024/images/contributors/nilspihl.png";
import OzgurPic from "public/2024/images/contributors/ozgurarmancyigit.jpg";
import PeterPic from "public/2024/images/contributors/peterszilagyi.png";
import PhilipPic from "public/2024/images/contributors/phillippieper.jpg";
import PiyushPic from "public/2024/images/contributors/piyushgururani.jpeg";
import QiangPic from "public/2024/images/contributors/qiangju.png";
import QiPic from "public/2024/images/contributors/qizhou.png";
import RenaPic from "public/2024/images/contributors/renaobrien.png";
import RohitPic from "public/2024/images/contributors/rohitramesh.jpg";
import RyoheiPic from "public/2024/images/contributors/ryokomiyama.jpg";
import SammiPic from "public/2024/images/contributors/sammishu.jpg";
import SamuelPic from "public/2024/images/contributors/samuelchong.png";
import ShogoPic from "public/2024/images/contributors/shogoochiai.jpg";
import SuhyeonPic from "public/2024/images/contributors/suhyeonlee.png";
import SujithPic from "public/2024/images/contributors/sujithsomraaj.jpeg";
import TakaPic from "public/2024/images/contributors/takaphaver.jpg";
import TomaszPic from "public/2024/images/contributors/tomaszstanczak.png";
import TomoPic from "public/2024/images/contributors/tomosaito.jpg";
import VarunPic from "public/2024/images/contributors/varundoshi.jpg";
import VitalikPic from "public/2024/images/contributors/vitalik.jpg";
import VladPic from "public/2024/images/contributors/vladsvitanko.jpg";
import YosuiPic from "public/2024/images/contributors/yosuiharasawa.jpg";
import YukiPic from "public/2024/images/contributors/yukiyuminaga.jpeg";
import YuroitakiPic from "public/2024/images/contributors/yuroitaki.jpeg";
import topHero from "public/2024/images/hero_top.jpg";
import seikaiha from "public/2024/images/seikaiha.png";
import API3Logo from "public/2024/logo/API3Logo.svg";
import AkindoLogo from "public/2024/logo/AkindoLogo.svg";
import AvailLogo from "public/2024/logo/AvailLogo.svg";
import BNBLogo from "public/2024/logo/BNBLogo.svg";
import BitflyerLogo from "public/2024/logo/BitflyerLogo.svg";
import BunzzLogo from "public/2024/logo/BunzzLogo.svg";
import CabinetLogo from "public/2024/logo/CabinetLogo.png";
import CentrumLogo from "public/2024/logo/CentrumLogo.svg";
import CoinpostLogo from "public/2024/logo/CoinpostLogo.png";
import CryptonomadsLogo from "public/2024/logo/CryptonomadsLogo.svg";
import CryptopolitanLogo from "public/2024/logo/CryptopolitanLogo.svg";
import DeFormLogo from "public/2024/logo/DeFormLogo.png";
import DesciJapanLogo from "public/2024/logo/DesciJapanLogo.png";
import DevconLogo from "public/2024/logo/DevconLogo.svg";
import EJLogoFace from "public/2024/logo/EJLogoFace_dark.png";
import ENSLogo from "public/2024/logo/ENSLogo.svg";
import ESPLogo from "public/2024/logo/ESPLogo.svg";
import ETHDiamondLogo from "public/2024/logo/ETHDiamondLogo.png";
import ETHRiyadhLogo from "public/2024/logo/ETHRiyadhLogo.svg";
import ETHTaipeiLogo from "public/2024/logo/ETHTaipeiLogo.png";
import FractonLogo from "public/2024/logo/FractonLogo.png";
import GMOLogo from "public/2024/logo/GMOLogo.png";
import IntmaxLogo from "public/2024/logo/IntmaxLogo.svg";
import LxDaoLogo from "public/2024/logo/LxDaoLogo.png";
import MercoinLogo from "public/2024/logo/MercoinLogo.png";
import MetamaskLogo from "public/2024/logo/MetamaskLogo.svg";
import MoongateLogo from "public/2024/logo/MoongateLogo.svg";
import NEOLogo from "public/2024/logo/NEO-X.svg";
import NeroLogo from "public/2024/logo/NeroLogo.svg";
import NewEconomyLogo from "public/2024/logo/NewEconomyLogo.svg";
import RedbullLogo from "public/2024/logo/RedbullLogo.svg";
import ScrollLogo from "public/2024/logo/ScrollLogo.svg";
import ShibuyaLogo from "public/2024/logo/Shibuya.svg";
import SolidityScanLogo from "public/2024/logo/SolidityScanLogo.svg";
import StreamEthLogo from "public/2024/logo/StreamEthLogo.png";
import TechfundLogo from "public/2024/logo/TechfundLogo.png";
import UnchainLogo from "public/2024/logo/UnchainLogo.png";
import ZeloLogo from "public/2024/logo/ZeloLogo.png";
import FiveDollarVcLogo from "public/2024/logo/fivedollarvc.png";
import ETHTokyoLogo from "public/assets/ETHTokyoLogo.png";
import { useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import { GoInfo } from "react-icons/go";
import { HiCalendarDays, HiOutlineMapPin } from "react-icons/hi2";
import judges from "./judges-2024.json";
import mentors from "./mentors-2024.json";

export const metadata = {
  title: {
    template: "%s | ETHTokyo'24",
    default: "ETHTokyo'24",
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
    title: "ETHTokyo 2024",
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
    title: "ETHTokyo 2024",
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

const Header: FC<ComponentProps> = ({ children }) => {
  const headerStyle = css`
    background-color: ${brand.Miyabi};
    padding: 1rem 0;
    position: absolute;
    text-align: right;
    width: 100%;
    z-index: 5;
  `;

  const MenuLink = (props: { page: string; text: string }) => {
    return (
      <Link
        href={props.page}
        css={css` font-size: 2rem; padding: 0 1rem; text-decoration: none;`}
      >
        {props.text}
      </Link>
    );
  };

  return (
    <div css={headerStyle}>
      <MenuLink page="#registration" text="Get Tickets" />
      <MenuLink page="/guidelines" text="Hacker Guide" />
    </div>
  );
};

const Footer: FC<ComponentProps> = ({ children }) => {
  const footerStyle = css`
    background-color: ${brand.Shuiro};
    padding: 1rem 0;
    text-align: center;
    width: 100%;
  `;

  return (
    <footer css={footerStyle}>
      <span
        css={css`
          font-size: 0.75rem;
          letter-spacing: 0.07rem;

          ${mq.laptop} {
            font-size: 1rem;
          }
        `}
      >
        © 2024 ETHTokyo - Ethereum Japan.
      </span>
    </footer>
  );
};

export const Layout: FC<PageProps> = ({ pageTitle, children }) => {
  const siteTitle = "ETHTokyo'25";
  const baseLayoutStyle = css``;
  const mainLayoutStyle = css``;

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

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  const TriangleJpWaveBackground = ({ children }: ComponentProps) => {
    const jpWaveBackgroundStyle = css`
      background: linear-gradient(
        to right,
        #773E6B 50%,
        #773E6B 50%,
        ${brand.Miyabi} 50%,
        ${brand.Miyabi} 100%
      );
      clip-path: polygon(calc(50% - 380px) 0, calc(50% + 380px) 0, 50% 500px);
      height: 500px;
      text-align: center;
    `;

    return (
      <div css={jpWaveBackgroundStyle}>
        <div
          css={css`
            background: url(${seikaiha.src}), repeat;
            height: 100%;
          `}
        >
          {children}
        </div>
      </div>
    );
  };

  const EventLogo = () => {
    return (
      <Image
        src={ETHTokyoLogo}
        alt="ETHTokyo logo"
        css={css`
          height: auto;
          max-width: 256px;
          padding-left: 11px;
          padding-top: 1rem;
        `}
      />
    );
  };

  const TopSection = () => {
    const topBackgroundStyle = css`
      background-image: url(${topHero.src});
      background-position: top 4rem center;
      background-size: cover;
      height: 100vh;
      width: 100%;
    `;

    return (
      <section id="top" css={topBackgroundStyle}>
        <TriangleJpWaveBackground>
          <p css={css`line-height: 0; margin: 0; padding: 1.5rem 0;`}>
            Ethereum Community Hackathon
          </p>

          <EventLogo />
          <div css={css`padding: 1rem 0;`}>
            <h1>Aug 23-26, 2024</h1>
            <h1>Tokyo, Japan</h1>
          </div>
        </TriangleJpWaveBackground>
        <CountdownPanel />
      </section>
    );
  };

  const StatementSection = () => {
    return (
      //background: linear-gradient(45deg, , );
      <section
        id="statement"
        css={css`
        background: linear-gradient(0deg, #FF5544, #FF6F9D);
        border-radius: 0 0 0 0 / 0 0 100% 100%;
        clip-path:  ellipse(120% 100% at 50% 100%);
        margin-top: -4rem;
        z-index: 10;
      `}
      >
        <div
          css={css`
        padding: 4rem 1rem;
        text-align: center;

        ${mq.laptop}{
          margin: 0 auto;
          width:50%;
        }
      `}
        >
          <Image src={ETHDiamondLogo} alt="Ethereum diamond" />
          <h2 css={css`color: ${brand.Miyabi}; font-weight: 300;`}>
            Welcome and join us!
          </h2>
          <p css={css`text-align: justify; ${mq.laptop}{font-size: 1.25rem;}`}>
            ETHTokyo is a engaging hackathon for the global Ethereum community
            where people with all sorts of backgrounds, ideas, and skills come
            together to share their love for Ethereum and its world. Whether
            you're a seasoned expert or just curious, you'll find friends and
            inspiration here. Our goal is simple: to connect diverse minds and
            foster the creation of amazing new innovations for the future. Join
            us and be a part of shaping what's next in the Ethereum universe!
          </p>
        </div>
      </section>
    );
  };

  const MentorsSection = () => {
    const [currentMentors, setMentors] = useState<Mentor[]>([]);

    useEffect(() => {
      setMentors(mentors);
    }, []);
    const MentorIcon: React.FC<{
      name: string;
      linkToOnlinePresence: string;
      role: string;
      org: string;
      orgUrl: string;
      imagePath: string;
    }> = ({ imagePath, linkToOnlinePresence, name, org, orgUrl, role }) => (
      <div>
        <a
          href={linkToOnlinePresence}
          target="_blank"
          rel="noreferrer"
          css={css`text-decoration: none; :hover{color: ${brand.Shuiro};};`}
        >
          <img
            src={imagePath}
            alt={name}
            width={96}
            height={96}
            css={css`
              border-radius: 50%;
              height: auto;
              width: 96px;
  
              ${mq.laptop}{
                width: 120px;
              }
            `}
          />
          <p
            css={css`
              font-size: 0.8rem;
              margin-bottom:0;
              ${mq.laptop}{
                font-size: 1rem;
              };
            `}
          >
            {name}
          </p>
        </a>
        <a
          href={orgUrl}
          target="_blank"
          rel="noreferrer"
          css={css`text-decoration: none; :hover{color: ${brand.JordyBlue}};`}
        >
          <p
            css={css`
              font-size: 0.8rem;
              margin-bottom:0;
              margin-top:0;
              ${mq.laptop}{
                font-size: 1rem;
              };
            `}
          >
            {role}, {org}
          </p>
        </a>
      </div>
    );

    return (
      <section
        id="mentors"
        css={css`
          background-color: ${brand.Miyabi};
          padding: 1rem;
          text-align: center;
  
          ${mq.laptop}{
            padding: 1rem 2rem;
          }
        `}
      >
        <h2
          css={css`
            font-size: 2rem;
            font-weight: 400;
            margin: 4rem 0 2rem;
            ${mq.laptop} {
              font-size: 3rem;
            }`}
        >
          Mentors
        </h2>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            margin: 0 auto;
            max-width: 1600px;
  
            ${mq.tablet} {
              gap: 2.5rem;
            }
  
            ${mq.laptop} {
              gap: 3rem;
            }
          `}
        >
          {currentMentors.map((mentor) => (
            <div
              key={mentor.name}
              css={css`
                flex: 0 0 150px;
                ${mq.tablet} {
                  flex: 0 0 160px;
                }
              `}
            >
              <MentorIcon {...mentor} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  const JudgesSection = () => {
    const [currentJudges, setJudges] = useState<Judge[]>([]);

    useEffect(() => {
      setJudges(judges);
    }, []);

    const JudgeIcon: React.FC<{
      imagePath: string;
      name: string;
      linkToOnlinePresence: string;
      org: string;
      orgUrl: string;
      role: string;
    }> = ({ imagePath, name, linkToOnlinePresence, org, orgUrl, role }) => (
      <div>
        <a
          href={linkToOnlinePresence}
          target="_blank"
          rel="noreferrer"
          css={css`text-decoration: none; :hover{color: ${brand.Shuiro};};`}
        >
          <Image
            src={imagePath}
            alt={name}
            width={96}
            height={96}
            css={css`
            border-radius: 50%;
              height: auto;
              width: 96px;
  
              ${mq.laptop}{
                width: 144px;
              }
            `}
          />
          <p
            css={css`
              font-size: 0.8rem;
              margin-bottom:0;
              ${mq.laptop}{
                font-size: 1rem;
              };
            `}
          >
            {name}
          </p>
        </a>
        <p
          css={css` font-size: 0.8rem; line-height:1; margin-bottom:0;margin-top:0;
              ${mq.laptop}{
                font-size: 1rem;
              };
            `}
        >
          <a
            css={css`text-decoration: none; :hover{color: ${brand.JordyBlue};};`}
            href={orgUrl}
            target="_blank"
            rel="noreferrer"
          >
            {role}, {org}
          </a>
        </p>
      </div>
    );

    return (
      <section
        id="speakers"
        css={css`
          background-color: ${brand.Miyabi};
          padding: 1rem;
          text-align: center;
  
          ${mq.laptop}{
            padding: 1rem 2rem;
          }
        `}
      >
        <h2
          css={css`
            font-size: 2rem;
            font-weight: 400;
            margin: 4rem 0 2rem;
            ${mq.laptop} {
              font-size: 3rem;
            }`}
        >
          Judges
        </h2>
        <div
          css={css`
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            justify-items: center;
            margin: 0 auto;
            max-width: 1200px;
  
            ${mq.tablet} {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            }
  
            ${mq.laptop} {
              gap: 4rem;
            }
          `}
        >
          {currentJudges.map((judge) => (
            <JudgeIcon key={judge.name} {...judge} />
          ))}
        </div>
      </section>
    );
  };

  const SupportersSection = () => {
    const SupporterLogo: React.FC<{
      source: StaticImageData;
      link: string;
      text: string;
      tier: "platinum" | "gold" | "silver" | "bronze" | "partner";
    }> = ({ source, text, link, tier }) => {
      const sizes = {
        mobile: {
          platinum: 66.666666,
          gold: 35,
          silver: 25,
          bronze: 20,
          partner: 20,
        },
        tablet: {
          platinum: 30,
          gold: 25,
          silver: 20,
          bronze: 16.666666,
          partner: 16.666666,
        },
        laptop: {
          platinum: 22,
          gold: 15,
          silver: 12.5,
          bronze: 12.5,
          partner: 12.5,
        },
      };

      const padding = {
        mobile: {
          platinum: "1.5rem",
          gold: "1rem",
          silver: "1rem",
          bronze: "1rem",
          partner: "0.75rem",
        },
        tablet: {
          platinum: "2rem",
          gold: "1.5rem",
          silver: "1.5rem",
          bronze: "1.5rem",
          partner: "1.5rem",
        },
        laptop: {
          platinum: "2rem",
          gold: "2.5rem",
          silver: "2rem",
          bronze: "2rem",
          partner: "1.5rem",
        },
      };

      return (
        <div
          css={css`
            align-items: center;
            display: flex;
            justify-content: center;
  
  
            max-width: ${sizes.mobile[tier]}%;
            padding: ${padding.mobile[tier]};
  
            ${mq.tablet} {
              max-width: ${sizes.tablet[tier]}%;
              padding: ${padding.tablet[tier]};
            }
  
            ${mq.laptop} {
              max-width: ${sizes.laptop[tier]}%;
              padding: ${padding.laptop[tier]};
            }
          `}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <Image
              src={source}
              alt={text}
              layout="responsive"
              css={css`max-height: ${sizes.laptop[tier] / 2}rem; object-fit: contain;`}
            />
          </a>
        </div>
      );
    };

    const SponsorTier: React.FC<{
      children?: React.ReactNode;
    }> = ({ children }) => {
      return (
        <div
          css={css`
            padding: 1rem 0.5rem;
  
            ${mq.laptop}{
              margin: 0 auto;
              padding: 2rem 1rem;
              width: 75%;
            }
          `}
        >
          <div
            css={css`
              align-items: center;
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
            `}
          >
            {children}
          </div>
        </div>
      );
    };

    const PartnerCategory: React.FC<{
      category: string;
      children: React.ReactNode;
    }> = ({ category, children }) => (
      <div>
        <div
          css={css`
            padding: 1rem 0.5rem;
  
            ${mq.laptop}{
              margin: 0 auto;
              padding: 2rem 1rem;
              width: 75%;
            }
          `}
        >
          <h2 css={css`color: black; font-weight:400;`}>{category}</h2>
          <div
            css={css`
            align-items: center;
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
          `}
          >
            {children}
          </div>
        </div>
      </div>
    );

    return (
      <section
        id="Supporters"
        css={css`
          background-color: ${neutral.Grey1};
          text-align: center;
        `}
      >
        <section id="sponsors">
          <h2
            css={css`
              color: black;
              font-size: 2rem;
              font-weight: 500;
              margin: 0;
              padding: 4rem 0 0;
  
              ${mq.laptop} {
                font-size: 3rem;
              }
            `}
          >
            Platinum Sponsors
          </h2>
          <div css={css` display:flex; justify-content: center;`}>
            <SupporterLogo
              source={GMOLogo}
              text="GMO Internet Group, Inc."
              link="https://www.gmo.jp/"
              tier="platinum"
            />
          </div>
          <SponsorTier>
            <SupporterLogo
              source={CabinetLogo}
              text="Cabinet, Inc."
              link="https://cbnt.co.jp/"
              tier="platinum"
            />
            <SupporterLogo
              source={ScrollLogo}
              text="Scroll"
              link="https://scroll.io/"
              tier="platinum"
            />
            <SupporterLogo
              source={ESPLogo}
              text="ESP"
              link="https://esp.ethereum.foundation/"
              tier="platinum"
            />
          </SponsorTier>
          <h2
            css={css`
              color: black;
              font-size: 2rem;
              font-weight: 400;
              margin: 0;
  
              ${mq.laptop} {
                font-size: 3rem;
              }
            `}
          >
            Gold Sponsors
          </h2>
          <SponsorTier>
            <SupporterLogo
              source={API3Logo}
              text="API3"
              link="https://api3.org/"
              tier="gold"
            />
            <SupporterLogo
              source={AvailLogo}
              text="Avail"
              link="https://www.availproject.org/"
              tier="gold"
            />
            <SupporterLogo
              source={BNBLogo}
              text="BNB Chain"
              link="https://www.bnbchain.org/"
              tier="gold"
            />
            <SupporterLogo
              source={ENSLogo}
              text="ENS"
              link="https://ens.domains/"
              tier="gold"
            />
            <SupporterLogo
              source={IntmaxLogo}
              text="Intmax"
              link="https://www.intmax.io/"
              tier="gold"
            />
            <SupporterLogo
              source={MercoinLogo}
              text="Mercoin"
              link="https://about.mercoin.com/"
              tier="gold"
            />
            <SupporterLogo
              source={TechfundLogo}
              text="TechFund"
              link="https://techfund.jp/"
              tier="gold"
            />
          </SponsorTier>
          <h3
            css={css`
              color: black;
              font-size: 2rem;
              font-weight: 400;
              margin: 0;
  
              ${mq.laptop} {
                font-size: 2.5rem;
              }
            `}
          >
            Silver Sponsors
          </h3>
          <SponsorTier>
            <SupporterLogo
              source={BitflyerLogo}
              text="Bitflyer"
              link="https://bitflyer.com/"
              tier="silver"
            />
            <SupporterLogo
              source={NEOLogo}
              text="NEO X"
              link="https://x.neo.org/"
              tier="silver"
            />
            <SupporterLogo
              source={NeroLogo}
              text="NEROchain"
              link="https://nerochain.io/"
              tier="silver"
            />
          </SponsorTier>
          <h3
            css={css`
              color: black;
              font-size: 2rem;
              font-weight: 400;
              margin: 0;
  
              ${mq.laptop} {
                font-size: 2.5rem;
              }
            `}
          >
            Media Partners
          </h3>
          <SponsorTier>
            <SupporterLogo
              source={CoinpostLogo}
              text="Coinpost"
              link="https://coinpost.jp/"
              tier="partner"
            />
            <SupporterLogo
              source={NewEconomyLogo}
              text="あたらしい経済"
              link="https://www.neweconomy.jp/"
              tier="partner"
            />
            <SupporterLogo
              source={FiveDollarVcLogo}
              text="$5.VC"
              link="https://5dollarvc.com/"
              tier="partner"
            />
            <SupporterLogo
              source={CryptopolitanLogo}
              text="Cryptopolitan"
              link="https://www.cryptopolitan.com/"
              tier="partner"
            />
          </SponsorTier>
        </section>
        <section id="supporters">
          <PartnerCategory category="Event Supporters">
            <SupporterLogo
              source={DevconLogo}
              text="Devcon"
              link="https://devcon.org/"
              tier="partner"
            />
            <SupporterLogo
              source={FractonLogo}
              text="Fracton Ventures"
              link="https://fracton.ventures/"
              tier="partner"
            />
            <SupporterLogo
              source={CentrumLogo}
              text="Centrum"
              link="https://centrum.studio/"
              tier="partner"
            />
            <SupporterLogo
              source={AkindoLogo}
              text="Akindo"
              link="https://akindo.io/"
              tier="partner"
            />
            <SupporterLogo
              source={StreamEthLogo}
              text="StreamETH"
              link="https://streameth.org/"
              tier="partner"
            />
            <SupporterLogo
              source={BunzzLogo}
              text="Bunzz"
              link="https://www.bunzz.dev/"
              tier="partner"
            />
            <SupporterLogo
              source={SolidityScanLogo}
              text="SolidityScan"
              link="https://solidityscan.com/"
              tier="partner"
            />
            <SupporterLogo
              source={DeFormLogo}
              text="DeForm"
              link="https://www.deform.cc/"
              tier="partner"
            />
            <SupporterLogo
              source={MetamaskLogo}
              text="Metamask"
              link="https://metamask.io/"
              tier="partner"
            />
            <SupporterLogo
              source={MoongateLogo}
              text="Moongate"
              link="https://www.moongate.id/"
              tier="partner"
            />
            <SupporterLogo
              source={RedbullLogo}
              text="Red Bull"
              link="https://www.redbull.com"
              tier="partner"
            />
            <SupporterLogo
              source={CryptonomadsLogo}
              text="Crypto Nomads Club"
              link="https://cryptonomads.org/"
              tier="partner"
            />
            <SupporterLogo
              source={DesciJapanLogo}
              text="DeSci Japan"
              link="https://descijapan.org/"
              tier="partner"
            />
            <SupporterLogo
              source={ETHTaipeiLogo}
              text="ETH Taipei"
              link="https://ethtaipei.org/"
              tier="partner"
            />
            <SupporterLogo
              source={ETHRiyadhLogo}
              text="ETH Riyadh"
              link="https://ethriyadh.com/"
              tier="partner"
            />
            <SupporterLogo
              source={LxDaoLogo}
              text="LXDAO"
              link="https://lxdao.io/"
              tier="partner"
            />
            <SupporterLogo
              source={UnchainLogo}
              text="UNCHAIN"
              link="https://www.unchain.tech/"
              tier="partner"
            />
            <SupporterLogo
              source={ZeloLogo}
              text="Zelo"
              link="https://zelojapan.com/"
              tier="partner"
            />
            <SupporterLogo
              source={ShibuyaLogo}
              text="Shibuya City"
              link="https://www.city.shibuya.tokyo.jp/"
              tier="partner"
            />
          </PartnerCategory>

          {/* <p>
            <a
              css={css`
              color: blue;
              :hover {
                color: ${brand.Shuiro}
              }
            `}
              href="https://forms.gle/9wLvkR1Fw2VyKVM66"
              target="_blank"
              rel="noreferrer"
            >
              Looking to sponsor or support us?
            </a>
          </p> */}
          <PartnerCategory category="Hosted by">
            <Image
              src={EJLogoFace}
              alt="Ethereum Japan"
              css={css`
                height: auto;
                max-width: 128px;
  
                ${mq.laptop} {
                  max-width: 160px;
                }
              `}
            />
          </PartnerCategory>
        </section>
      </section>
    );
  };

  const SpeakersSection = () => {
    const HackathonTrackCard = (props: {
      children: ReactNode;
    }) => (
      <div
        css={css`
              background: white;
              border-radius: 8px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              color: black;
              padding: 2rem;
              text-align: center;
            `}
      >
        {props.children}
      </div>
    );

    const SpeakerIcon: React.FC<{
      source: StaticImageData;
      name: string;
      link: string;
      org: string;
      orgUrl: string;
    }> = ({ source, name, link, org, orgUrl }) => (
      <div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          css={css`text-decoration: none; :hover{color: ${brand.Shuiro};};`}
        >
          <Image
            src={source}
            alt={name}
            css={css`
              border-radius: 50%;
              height: auto;
              width: 96px;
  
              ${mq.laptop}{
                width: 120px;
              }
            `}
          />
          <p
            css={css`
              font-size: 0.8rem;
              margin-bottom:0;
              ${mq.laptop}{
                font-size: 1rem;
              };
            `}
          >
            {name}
          </p>
        </a>
        <a
          href={orgUrl}
          target="_blank"
          rel="noreferrer"
          css={css`text-decoration: none; :hover{color: ${brand.JordyBlue};};`}
        >
          <p
            css={css`
              font-size: 0.8rem;
              line-height:1;
              margin-top:0;
              ${mq.laptop}{
                font-size: 1rem;
              };
            `}
          >
            {org}
          </p>
        </a>
      </div>
    );

    return (
      <section
        id="speakers"
        css={css`
          background-color: ${brand.Miyabi};
          padding: 1rem;
          text-align: center;
  
          ${mq.laptop}{
            padding: 1rem 2rem;
          }
        `}
      >
        <h2
          css={css`
            font-size: 2rem;
            font-weight: 400;
            ${mq.laptop} {
              font-size: 3rem;
            }`}
        >
          Hackathon tracks
        </h2>
        <div>
          <div
            css={css`
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin: 0 auto;
            width: 80%;
  
            ${mq.tablet}{
              width: 66%;
            }
  
            ${mq.laptop} {
              align-items: stretch;
              flex-direction: row;
              justify-content: space-around;
              width: 100%;
            }
          `}
          >
            <HackathonTrackCard>
              <h2 css={css`color: ${brand.Miyabi};`}>Freedom of transacting</h2>
              <p css={css`text-align: left;`}>
                This track is for hackers who want to ensure that anyone,
                anywhere, anytime can facilitate unrestricted transactions. We
                look for projects that promote financial inclusion and enable
                people to access and send tokens across borders without
                restrictions. If you want to hack on p2p solutions, build
                censorship-resistant applications, and ensure that transactions
                can be private and secure, this track is for you.
              </p>
            </HackathonTrackCard>
            <HackathonTrackCard>
              <h2 css={css`color: ${brand.Miyabi};`}>Robust democracy</h2>
              <p css={css`text-align: left;`}>
                This track is about building platforms and tools that counter
                disproportionate influence of centralized powers to enable
                informed and collective decision-making, credibly neutral and
                transparent governance, and collaboration and coordination among
                communities. Other ideas you could hack on are quadratic
                funding, sybil resistance, and decentralized social reputation.
              </p>
            </HackathonTrackCard>
            <HackathonTrackCard>
              <h2 css={css`color: ${brand.Miyabi};`}>
                Infrastructure and tooling
              </h2>
              <p css={css`text-align: left;`}>
                This track is for the architects working on the underlying
                infrastructures on which distributed public applications can run
                efficiently and reliably. Possible ideas include protocol
                specification and implementations, networking, developer tools,
                and hardware. Contributions to developer experience, such as
                debugging tools, testing frameworks, and comprehensive
                documentation, are highly valued.
              </p>
            </HackathonTrackCard>
          </div>
          {/* <br />
          <div>
            <Link
              href="https://www.notion.so/ETHTokyo-Hacker-Guide-0b6683568f4b4b00a1f02a2da7b4a4c9?pvs=4"
              css={css`
                border: solid 1px;
                border-radius: 8px;
                cursor: pointer;
                padding: 1rem;
                text-decoration: none;
                &:hover {
                  background-color: ${brand.Shuiro};
                  color: white;
                }
  
                ${mq.laptop} {
                  font-size: 1.5rem;
                }
              `}
            >
              💡 Learn more about the hackathon
            </Link>
          </div> */}
        </div>
        <h2
          css={css`
            font-size: 2rem;
            font-weight: 400;
            margin: 4rem 0 2rem;
            ${mq.laptop} {
              font-size: 3rem;
            }`}
        >
          Speakers
        </h2>
        <div
          css={css`
            align-items: center;
            display: flex;
            flex-flow: row wrap;
            gap: 2rem;
            justify-content: center;
  
            ${mq.laptop} {
              gap: 4rem;
            }
          `}
        >
          <SpeakerIcon
            source={VitalikPic}
            name="Vitalik (online)"
            link="https://vitalik.eth.limo/"
            org="Ethereum, co-founder"
            orgUrl="https://ethereum.org/"
          />
          <SpeakerIcon
            source={AudreyPic}
            name="Audrey Tang"
            link="https://twitter.com/audreyt"
            org="數位 Plurality"
            orgUrl="https://www.plurality.net/"
          />
          <SpeakerIcon
            source={AyaPic}
            name="Aya Miyaguchi"
            link="https://twitter.com/AyaMiyagotchi/"
            org="EF, Executive Director"
            orgUrl="https://ethereum.foundation/"
          />
          <SpeakerIcon
            source={PeterPic}
            name="Péter Szilágyi"
            link="https://twitter.com/peter_szilagyi/"
            org="EF, Geth lead"
            orgUrl="https://geth.ethereum.org/"
          />
          <SpeakerIcon
            source={TomoPic}
            name="Tomo Saito"
            link="https://twitter.com/tomosaito"
            org="EF, Designer"
            orgUrl="https://ethereum.foundation/"
          />
          <SpeakerIcon
            source={KolbyPic}
            name="Kolby Moroz Liebl"
            link="https://x.com/Kolby_ML"
            org="EF, Portal"
            orgUrl="https://www.ethportal.net/"
          />
          <SpeakerIcon
            source={YuroitakiPic}
            name="yuroitaki"
            link="https://x.com/yuroitaki"
            org="PSE, TLSNotary"
            orgUrl="https://tlsnotary.org/"
          />
          <SpeakerIcon
            source={TomaszPic}
            name="Tomasz Stańczak"
            link="https://twitter.com/tkstanczak"
            org="Nethermind"
            orgUrl="https://www.nethermind.io/"
          />
          <SpeakerIcon
            source={RenaPic}
            name="Rena OBrien"
            link="https://www.linkedin.com/in/renaobrien/"
            org="Gitcoin"
            orgUrl="https://gitcoin.co/"
          />
          <SpeakerIcon
            source={JosephPic}
            name="Joseph Schiarizzi"
            link="http://twitter.com/cupojoseph"
            org="Open Dollar"
            orgUrl="https://www.opendollar.com/"
          />
          <SpeakerIcon
            source={FrancescoPic}
            name="Francesco Andreoli"
            link="https://www.francesco-andreoli.com/"
            org="MetaMask"
            orgUrl="https://metamask.io/"
          />
          <SpeakerIcon
            source={MelisaPic}
            name="Melisa Kurtcan"
            link="https://www.linkedin.com/in/melissa-kurtcan-81b20115a"
            org="Satoshi Twenty One"
            orgUrl="https://satoshitwenty.one/"
          />
          <SpeakerIcon
            source={NaimPic}
            name="Naim Ashhab"
            link="https://twitter.com/ashhanai"
            org="PWN DAO"
            orgUrl="https://pwn.xyz"
          />
          <SpeakerIcon
            source={LeonaPic}
            name="Leona Hioki"
            link="https://twitter.com/HiokiLeona"
            org="Intmax"
            orgUrl="https://www.intmax.io/"
          />
          <SpeakerIcon
            source={YosuiPic}
            name="Yosui Harasawa"
            link="https://twitter.com/y0su1"
            org="Mycel"
            orgUrl="https://mycel.land/"
          />
          <SpeakerIcon
            source={GuruPic}
            name="Guru"
            link="https://x.com/hackyguru"
            org="Status.im"
            orgUrl="https://status.im/"
          />
          <SpeakerIcon
            source={MoazzamPic}
            name="Moazzam Arif"
            link="https://www.linkedin.com/in/moazzam-arif/"
            org="BlockApex"
            orgUrl="https://blockapex.io/"
          />
          <SpeakerIcon
            source={DeliPic}
            name="Deli Gong"
            link="https://x.com/deligong"
            org="Automata Network"
            orgUrl="https://www.ata.network/"
          />
          <SpeakerIcon
            source={ChuazhengPic}
            name="Chua Zheng Long"
            link="https://x.com/melynx"
            org="Automata Network"
            orgUrl="https://www.ata.network/"
          />
          <SpeakerIcon
            source={QiPic}
            name="Qi Zhou"
            link="https://www.linkedin.com/in/qi-zhou-9a668715/"
            org="EthStorage"
            orgUrl="https://ethstorage.io/"
          />
          <SpeakerIcon
            source={AnjaliPic}
            name="Anjali Young"
            link="https://x.com/damaderoca"
            org="Collab.Land"
            orgUrl="https://www.collab.land/"
          />
          <SpeakerIcon
            source={LouiePic}
            name="Louie Oconnor"
            link="https://x.com/lou3ee"
            org="LUKSO"
            orgUrl="https://lukso.network/"
          />
          <SpeakerIcon
            source={JehyukPic}
            name="Jehyuk Jang"
            link="http://linkedin.com/in/jehyuk-jang-a882062ba"
            org="Tokamak Network"
            orgUrl="https://www.tokamak.network/"
          />
          <SpeakerIcon
            source={SuhyeonPic}
            name="Suhyeon Lee"
            link="https://suhyeonlee.xyz"
            org="Tokamak Network"
            orgUrl="https://www.tokamak.network/"
          />
          <SpeakerIcon
            source={SujithPic}
            name="Sujith Somraaj"
            link="https://www.sujithsomraaj.xyz/"
            org="Superform"
            orgUrl="https://www.superform.xyz/"
          />
          <SpeakerIcon
            source={EdmundPic}
            name="Edmund Edgar"
            link="https://twitter.com/edmundedgar/"
            org="Reality.eth"
            orgUrl="https://reality.eth.link/"
          />
          <SpeakerIcon
            source={ShogoPic}
            name="Shogo Ochiai"
            link="https://twitter.com/_sgtn/"
            org="Solidity House"
            orgUrl="https://www.solidityhouse.com/"
          />
          <SpeakerIcon
            source={AggrePic}
            name="Aggre"
            link="https://twitter.com/aggre_"
            org="Dev Protocol"
            orgUrl="https://www.devprotocol.xyz/"
          />
          <SpeakerIcon
            source={PiyushPic}
            name="Piyush Gururani"
            link="https://www.linkedin.com/in/gururani/"
            org="TECHFUND"
            orgUrl="https://techfund.jp/"
          />
          <SpeakerIcon
            source={AbhimanyuPic}
            name="Abhimanyu Nag"
            link="https://www.linkedin.com/in/abhimanyu-nag-682747201"
            org="Chainrisk Labs"
            orgUrl="https://chainlinklabs.com/"
          />
          <SpeakerIcon
            source={JongwonPic}
            name="Jongwon Park"
            link="https://twitter.com/jwpark02"
            org="Story Protocol"
            orgUrl="https://storyprotocol.xyz/"
          />
          <SpeakerIcon
            source={QiangPic}
            name="Qiang Zhu"
            link="https://www.linkedin.com/in/qiang-zhu-3a716731/"
            org="Quarkchain"
            orgUrl="https://quarkchain.io/"
          />
          <SpeakerIcon
            source={PhilipPic}
            name="Philip Pieper"
            link="https://twitter.com/PhilippPieper"
            org="Swarm"
            orgUrl="https://www.swarm.com"
          />
          <SpeakerIcon
            source={NikhilPic}
            name="Nikhil Mahana"
            link="https://x.com/nikhil_mahana/"
            org="Independent"
            orgUrl="/#"
          />
          <SpeakerIcon
            source={VladPic}
            name="Vlad Svitanko"
            link="https://www.linkedin.com/in/vlad-svitanko/"
            org="Cryptorsy"
            orgUrl="https://cryptorsy.io/"
          />
          <SpeakerIcon
            source={FriscoPic}
            name="Frisco d'Anconia"
            link="https://x.com/CryptoTraveler1"
            org="Timbuktu DAO"
            orgUrl="https://timbuktudao.xyz/"
          />
          <SpeakerIcon
            source={AllenPic}
            name="Allen Joseph"
            link="https://x.com/allenjosephaj"
            org="Bitlayer"
            orgUrl="https://www.bitlayer.org/"
          />
          <SpeakerIcon
            source={JoshPic}
            name="Josh Guha"
            link="https://joshguha.xyz/"
            org="Gyroscope"
            orgUrl="https://gyro.finance/"
          />
          <SpeakerIcon
            source={JamesPic}
            name="James He"
            link="https://x.com/jameshe_eth"
            org="Offchain Labs"
            orgUrl="https://www.offchainlabs.com/"
          />
          <SpeakerIcon
            source={VarunPic}
            name="Varun Doshi"
            link="https://x.com/Varunx10"
            org="Chainrisk"
            orgUrl="https://www.chainrisk.cloud/"
          />
          <SpeakerIcon
            source={SammiPic}
            name="Sammi Shu"
            link="https://www.linkedin.com/in/sammi-shu-aab68084/"
            org="Hemera"
            orgUrl="https://thehemera.com/"
          />
          <SpeakerIcon
            source={Nilspic}
            name="Nils Pihl"
            link="https://x.com/broodsugar"
            org="Auki Labs"
            orgUrl="https://www.aukilabs.com/"
          />
          <SpeakerIcon
            source={DangerPic}
            name="Danger Zhang"
            link="http://todayindefi.com/"
            org="Today in DeFi"
            orgUrl="http://todayindefi.com/"
          />
          <SpeakerIcon
            source={YukiPic}
            name="Yuki Yuminaga"
            link="https://twitter.com/ballsyalchemist"
            org="Sorella Labs"
            orgUrl="https://github.com/SorellaLabs"
          />
          <SpeakerIcon
            source={DanielPic}
            name="Daniel Hwang"
            link="https://twitter.com/danhwang88"
            org="Kintsugi"
            orgUrl="https://kintsugi.tech/"
          />
          <SpeakerIcon
            source={MattPic}
            name="Matthew Liu"
            link="https://www.linkedin.com/in/matthew-liu-profile"
            org="SynFutures"
            orgUrl="https://www.synfutures.com/"
          />
          <SpeakerIcon
            source={SamuelPic}
            name="Samuel Chong"
            link="https://linktr.ee/stakesaurus/"
            org="Stakesaurus"
            orgUrl="https://stakesaurus.com/"
          />
          <SpeakerIcon
            source={NabihaPic}
            name="Nabiha Sheikh"
            link="https://twitter.com/Nabihas4/"
            org="A51 Finance"
            orgUrl="https://a51.finance/"
          />
          <SpeakerIcon
            source={RohitPic}
            name="Rohit Ramesh"
            link="https://x.com/Rohit7101"
            org="Crossmint"
            orgUrl="https://www.crossmint.com/"
          />
          <SpeakerIcon
            source={RyoheiPic}
            name="Ryo Komiyama"
            link="https://x.com/ryoheikomy"
            org="Kyuzan"
            orgUrl="https://kyuzan.com/"
          />
          <SpeakerIcon
            source={TakaPic}
            name="Taka"
            link="https://x.com/Web3domcome"
            org="Phaver"
            orgUrl="https://www.phaver.com/"
          />
          <SpeakerIcon
            source={DaodudePic}
            name="Kazuma Tamura"
            link="https://www.linkedin.com/in/kazuma-tamura-0a38b916a/"
            org="Bankless Japan"
            orgUrl="https://x.com/BanklessJP"
          />
        </div>
      </section>
    );
  };

  const LinkedButton = (props: {
    href: string;
    text: string;
    color: string;
    disabled?: boolean;
  }) => (
    <Link
      href={props.disabled ? "#" : props.href}
      css={css`text-decoration: none;`}
    >
      <button
        type="button"
        css={css`
          align-items: center;
          background-color: ${props.disabled ? neutral.Grey4 : props.color};
          border: none;
          border-radius: 12px;
          color: ${neutral.White};
          cursor: pointer;
          display: flex;
          flex-direction: column;
          font-size: 1.5rem;
          height: 100%;
          justify-content: center;
          margin: 0;
          padding: 0.5rem 1rem;
          transition: background-color 0.3s ease;
          width: 100%;

          ${mq.tablet}{
            font-size: 2rem;
            padding: 1rem 2rem;
          }

          &:hover {
            background-color: ${props.disabled ? neutral.Grey3 : themeLight.PrimaryHover};
          }
        `}
        disabled={props.disabled}
      >
        <span>{props.text}</span>
        {props.disabled && <span css={css`font-size: 1rem;`}>[SOLD OUT]</span>}
      </button>
    </Link>
  );

  const GetTicketsSection = () => (
    <div
      css={css`background-color:black; background-image: url(${seikaiha.src}); padding: 4rem; text-align: center;`}
    >
      <h2
        css={css` font-size: 3rem; font-weight:600; line-height: 1.2; margin: 0 0 2rem;`}
        id="schedule"
      >
        Event Schedule
      </h2>
      <div
        css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-bottom: 4rem;

        ${mq.laptop} {
          flex-direction: row;
          justify-content: center;
        }
      `}
      >
        <a
          href="/timetable/DAY1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 1 (Hackathon)
        </a>
        <a
          href="/timetable/DAY2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 2 (Hackathon)
        </a>
        <a
          href="/timetable/DAY3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 3 (Hackathon)
        </a>
        <a
          href="/timetable/DAY4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          css={css`
          color: ${brand.JordyBlue};
          font-size: 2rem;
          padding: 0 1rem;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        `}
        >
          Day 4 (Conference)
        </a>
      </div>
      <h2
        css={css` font-size: 3rem; font-weight:600; line-height: 1.2; margin: 0 0 2rem;`}
        id="registration"
      >
        Participate
      </h2>
      <br />
      <div
        css={css`
          align-items: stretch;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          width: fit-content;

          ${mq.laptop} {
            flex-direction: row;
          }

          & > *:not(:last-child) {
            margin-bottom: 1.5rem;
            ${mq.laptop} {
              margin-bottom: 0;
              margin-right: 2rem;
            }
          }
        `}
      >
        <LinkedButton
          href="https://app.moongate.id/e/eth-tokyo-2024"
          text="Volunteer pass"
          color="green"
          disabled
        />
        <LinkedButton
          href="/apply"
          text="Hackathon registration"
          color={brand.BluePantone}
          disabled
        />
        <LinkedButton
          href="https://app.moongate.id/e/eth-tokyo-2024"
          text="Conference tickets"
          color="brown"
        />
      </div>
    </div>
  );

  const Info = () => {
    return (
      <div>
        <div
          css={css`
          display:flex;
          flex-direction:column;
          justify-content: center;
          padding: 4rem;
          text-align: center;
  
          ${mq.laptop} {
            flex-direction:row;
            text-align: start;
          }
        `}
        >
          <div css={css`align-self:start;`}>
            <HiCalendarDays size={60} />
          </div>

          <div
            css={css`
            display: flex;
            flex-direction: column;
            padding: 0 1rem;
          `}
          >
            <div>
              <h2 css={css`margin:0;`}>Hackathon</h2>
              <p css={css`font-size: 1rem; margin:0;`}>Aug 23-25, 2024</p>
            </div>
            <div css={css`margin-top: 1rem;`}>
              <h2 css={css`margin:0;`}>Conference</h2>
              <p css={css`font-size: 1rem; margin:0;`}>Aug 26, 2024</p>
            </div>
          </div>

          <div css={css`height:2rem; ${mq.laptop}{width: 2rem;}`} />
          <div css={css`align-self:start;`}>
            <HiOutlineMapPin size={60} />
          </div>

          <div>
            <h2 css={css`margin:0;`}>Digital Garage</h2>
            <a
              css={css`text-decoration: none; :hover {text-decoration: underline;} ;`}
              href="https://maps.app.goo.gl/aCRdR2pX4qRaUz6MA"
              target="_blank"
              rel="noreferrer"
            >
              <p css={css`font-size: 1rem; margin:0;`}>
                15-1 Udagawacho, Shibuya, Tokyo
              </p>
            </a>
          </div>

          <div css={css`height:2rem; ${mq.laptop}{width: 2rem;}`} />
          <div css={css`align-self:start;`}>
            <GoInfo size={60} />
          </div>
          <div css={css`padding: 0 1rem;`}>
            <h2 css={css`margin:0;`}>Nearby Events</h2>

            <p css={css`font-size: 1rem; margin:0;`}>
              <a
                css={css`text-decoration: none; :hover {text-decoration: underline;} ;`}
                href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQROWEw0KAnb5Npxv6Qvsn1crcDlPagVQgBLcFBCigYG99dEaFtEoE4FmVmmi0P5sQtaq5BGFn4d1Yz/pubhtml"
                target="_blank"
                rel="noreferrer"
              >
                Click to see all events
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ScheduleSection = () => {
    return (
      <section
        id="schedule"
        css={css`
          text-align: center;
          width: 100%;
        `}
      >
        <Info />
        <Socials />
      </section>
    );
  };

  return (
    <Layout pageTitle="">
      <Header />
      <div>
        <TopSection />
        <StatementSection />
        <GetTicketsSection />
        <SpeakersSection />
        <MentorsSection />
        <JudgesSection />
        <SupportersSection />
        <ScheduleSection />
      </div>
    </Layout>
  );
};

export default Page;
