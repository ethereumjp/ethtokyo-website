import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { type StaticImageData } from "next/image";
import AkindoLogo from "public/logo/AkindoLogo.svg";
import BunzzLogo from "public/logo/BunzzLogo.svg";
import CabinetLogo from "public/logo/CabinetLogo.png";
import CentrumLogo from "public/logo/CentrumLogo.svg";
import CoinpostLogo from "public/logo/CoinpostLogo.png";
import DeFormLogo from "public/logo/DeFormLogo.png";
import EJLogoFace from "public/logo/EJLogoFace_dark.png";
import ESPLogo from "public/logo/ESPLogo.svg";
import ETHRiyadhLogo from "public/logo/ETHRiyadhLogo.svg";
import ETHTaipeiLogo from "public/logo/ETHTaipeiLogo.png";
import FractonLogo from "public/logo/FractonLogo.png";
import GMOLogo from "public/logo/GMOLogo.png";
import IntmaxLogo from "public/logo/IntmaxLogo.svg";
import MercoinLogo from "public/logo/MercoinLogo.png";
import MoongateLogo from "public/logo/MoongateLogo.svg";
import RedbullLogo from "public/logo/RedbullLogo.svg";
import ScrollLogo from "public/logo/ScrollLogo.svg";
import ShibuyaLogo from "public/logo/Shibuya.svg";
import TechfundLogo from "public/logo/TechfundLogo.png";
import TelosLogo from "public/logo/TelosLogo.png";
import ZeloLogo from "public/logo/ZeloLogo.png";

const SupportersSection = () => {
  const SupporterLogo: React.FC<{
    source: StaticImageData;
    link: string;
    text: string;
    tier: "platinum" | "gold" | "silver" | "bronze" | "partner" | "techfund";
  }> = ({ source, text, link, tier }) => {
    const sizes = {
      mobile: {
        platinum: 66.666666,
        gold: 35,
        silver: 25,
        bronze: 20,
        partner: 20,
        techfund: 15,
      },
      tablet: {
        platinum: 30,
        gold: 25,
        silver: 20,
        bronze: 16.666666,
        partner: 16.666666,
        techfund: 10,
      },
      laptop: {
        platinum: 20,
        gold: 16.666666,
        silver: 12.5,
        bronze: 12.5,
        partner: 12.5,
        techfund: 8,
      },
    };

    const padding = {
      platinum: "2rem",
      gold: "1.5rem",
      silver: "1rem",
      bronze: "1rem",
      partner: "1rem",
      techfund: "1rem",
    };

    return (
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;

          padding: ${padding[tier]};
          width: ${sizes.mobile[tier]}%;

          ${mq.tablet} {
            width: ${sizes.tablet[tier]}%;
          }

          ${mq.laptop} {
            width: ${sizes.laptop[tier]}%;
          }
        `}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            src={source}
            alt={text}
            layout="responsive"
            css={css`object-fit: contain;`}
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
            padding: 2rem 0;

            ${mq.laptop} {
              font-size: 3rem;
            }
          `}
        >
          Our supporters
        </h2>
        <h3
          css={css`color: black; font-size: 2rem; font-weight: 400; margin:0;`}
        >
          Platinum Sponsors
        </h3>
        <SponsorTier>
          <SupporterLogo
            source={GMOLogo}
            text="GMO Internet Group, Inc."
            link="https://www.gmo.jp/"
            tier="platinum"
          />
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
          {/* <SupporterLogo
            source={TelosLogo}
            text="Telos"
            link="https://www.telos.net/"
            tier="platinum"
          /> */}
        </SponsorTier>
        <h3
          css={css`color: black; font-size: 2rem; font-weight: 400; margin:0;`}
        >
          Gold Sponsors
        </h3>
        <SponsorTier>
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
            tier="techfund"
          />
          <SupporterLogo
            source={IntmaxLogo}
            text="Intmax"
            link="https://www.intmax.io/"
            tier="gold"
          />
        </SponsorTier>
      </section>
      <section id="partners">
        <PartnerCategory category="Event Partners">
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
            source={AkindoLogo}
            text="Akindo"
            link="https://akindo.io/"
            tier="partner"
          />
          <SupporterLogo
            source={BunzzLogo}
            text="Bunzz"
            link="https://www.bunzz.dev/"
            tier="partner"
          />
          <SupporterLogo
            source={DeFormLogo}
            text="DeForm"
            link="https://www.deform.cc/"
            tier="partner"
          />
          <SupporterLogo
            source={MoongateLogo}
            text="Moongate"
            link="https://www.moongate.id/"
            tier="partner"
          />
          {/* <SupporterLogo
            source={RedbullLogo}
            text="Red Bull"
            link="https://www.redbull.com"
            tier="partner"
          /> */}
        </PartnerCategory>
      </section>
      <section id="supporters">
        <PartnerCategory category="Supporters">
          <SupporterLogo
            source={ESPLogo}
            text="ESP"
            link="https://esp.ethereum.foundation/"
            tier="partner"
          />
          <SupporterLogo
            source={FractonLogo}
            text="Fracton Ventures"
            link="https://fracton.ventures/"
            tier="partner"
          />
          <SupporterLogo
            source={CoinpostLogo}
            text="Coinpost"
            link="https://coinpost.jp/"
            tier="partner"
          />
          <SupporterLogo
            source={CentrumLogo}
            text="Centrum"
            link="https://centrum.studio/"
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

        <p>
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
        </p>
        <PartnerCategory category="">
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

export default SupportersSection;
