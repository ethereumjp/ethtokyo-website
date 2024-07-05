import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { type StaticImageData } from "next/image";
import API3Logo from "public/logo/API3Logo.svg";
import AkindoLogo from "public/logo/AkindoLogo.svg";
import AvailLogo from "public/logo/AvailLogo.svg";
import BitflyerLogo from "public/logo/BitflyerLogo.svg";
import BunzzLogo from "public/logo/BunzzLogo.svg";
import CabinetLogo from "public/logo/CabinetLogo.png";
import CentrumLogo from "public/logo/CentrumLogo.svg";
import CircleLogo from "public/logo/CircleLogo.svg";
import CoinpostLogo from "public/logo/CoinpostLogo.png";
import CryptonomadsLogo from "public/logo/CryptonomadsLogo.svg";
import DeFormLogo from "public/logo/DeFormLogo.png";
import DevconLogo from "public/logo/DevconLogo.svg";
import EJLogoFace from "public/logo/EJLogoFace_dark.png";
import ENSLogo from "public/logo/ENSLogo.svg";
import ESPLogo from "public/logo/ESPLogo.svg";
import ETHRiyadhLogo from "public/logo/ETHRiyadhLogo.svg";
import ETHTaipeiLogo from "public/logo/ETHTaipeiLogo.png";
import FractonLogo from "public/logo/FractonLogo.png";
import GMOLogo from "public/logo/GMOLogo.png";
import IntmaxLogo from "public/logo/IntmaxLogo.svg";
import MercoinLogo from "public/logo/MercoinLogo.png";
import MetamaskLogo from "public/logo/MetamaskLogo.svg";
import MoongateLogo from "public/logo/MoongateLogo.svg";
import NeroLogo from "public/logo/NeroLogo.svg";
import RedbullLogo from "public/logo/RedbullLogo.svg";
import ScrollLogo from "public/logo/ScrollLogo.svg";
import ShibuyaLogo from "public/logo/Shibuya.svg";
import SolidityScanLogo from "public/logo/SolidityScanLogo.svg";
import TechfundLogo from "public/logo/TechfundLogo.png";
import TelosLogo from "public/logo/TelosLogo.png";
import ZeloLogo from "public/logo/ZeloLogo.png";

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
      desktop: {
        platinum: "2rem",
        gold: "2rem",
        silver: "2rem",
        bronze: "2rem",
        partner: "2rem",
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

          ${mq.desktop} {
            max-width: ${sizes.laptop[tier]}%;
            padding: ${padding.desktop[tier]};
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
          <SupporterLogo
            source={TelosLogo}
            text="Telos"
            link="https://www.telos.net/"
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
          {/* <SupporterLogo
            source={CircleLogo}
            text="Circle"
            link="https://www.circle.com/"
            tier="gold"
          /> */}
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
            source={NeroLogo}
            text="NEROchain"
            link="https://nerochain.io/"
            tier="silver"
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
            source={CryptonomadsLogo}
            text="Crypto Nomads Club"
            link="https://cryptonomads.org/"
            tier="partner"
          />
          <SupporterLogo
            source={DeFormLogo}
            text="DeForm"
            link="https://www.deform.cc/"
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
          {/* <SupporterLogo
            source={RedbullLogo}
            text="Red Bull"
            link="https://www.redbull.com"
            tier="partner"
          /> */}
          <SupporterLogo
            source={SolidityScanLogo}
            text="SolidityScan"
            link="https://solidityscan.com/"
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
