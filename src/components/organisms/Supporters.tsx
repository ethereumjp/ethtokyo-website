import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import AkindoLogo from "public/logo/AkindoLogo.svg";
import BunzzLogo from "public/logo/BunzzLogo.svg";
import CabinetLogo from "public/logo/CabinetLogo.png";
import CentrumLogo from "public/logo/CentrumLogo.svg";
import CoinpostLogo from "public/logo/CoinpostLogo.png";
import EFLogo from "public/logo/EFLogo.png";
import EJLogoFace from "public/logo/EJLogoFace_dark.png";
import ESPLogo from "public/logo/ESPLogo.svg";
import ETHRiyadhLogo from "public/logo/ETHRiyadhLogo.svg";
import ETHTaipeiLogo from "public/logo/ETHTaipeiLogo.png";
import FractonLogo from "public/logo/FractonLogo.png";
import GMOLogo from "public/logo/GMOLogo.svg";
import ShibuyaLogo from "public/logo/Shibuya.svg";
import TangemLogo from "public/logo/TangemLogo.svg";
import ZeloLogo from "public/logo/ZeloLogo.png";

const SupportersSection = () => {
  const SupporterLogo: React.FC<{
    source: StaticImageData;
    link: string;
    text: string;
    tier: "platinum" | "gold" | "silver" | "bronze" | "partner";
  }> = ({ source, text, link, tier }) => {
    const sizes = {
      platinum: 172,
      gold: 156,
      silver: 144,
      bronze: 132,
      partner: 120,
    };
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          src={source}
          alt={text}
          css={css`
            height: auto;
            width: ${sizes[tier]}px;

            ${mq.laptop}{
              max-height: ${sizes[tier]}px;
              width: ${sizes[tier] * 2}px;
            }
          `}
        />
      </a>
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
            padding: 2rem 1rem;
          }
        `}
      >
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
      <h2 css={css`color: black; font-weight:400;`}>{category}</h2>
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
        {children}
      </div>
    </div>
  );

  return (
    <section
      id="Supporters"
      css={css`
        background-color: ${neutral.Grey1};
        padding: 2rem;
        text-align: center;
      `}
    >
      <section id="sponsors">
        <h2
          css={css`
          color: black;
          font-size: 2rem;
          font-weight: 500;
          ${mq.laptop} {
            font-size: 3rem;
          }`}
        >
          Sponsored by
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
        </SponsorTier>
        <SponsorTier>
          <SupporterLogo
            source={ESPLogo}
            text="ESP"
            link="https://esp.ethereum.foundation/"
            tier="gold"
          />
        </SponsorTier>
      </section>
      <div css={css`padding: 2rem 0;`} />
      <section id="partners">
        <PartnerCategory category="Supporters">
          <SupporterLogo
            source={ShibuyaLogo}
            text="Shibuya City"
            link="https://www.city.shibuya.tokyo.jp/"
            tier="partner"
          />
          <SupporterLogo
            source={EFLogo}
            text="Ethereum Foundation"
            link="https://ethereum.foundation/"
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
            source={AkindoLogo}
            text="Akindo"
            link="https://akindo.io/"
            tier="partner"
          />
          <SupporterLogo
            source={CentrumLogo}
            text="Centrum"
            link="https://centrum.studio/"
            tier="partner"
          />
          <SupporterLogo
            source={BunzzLogo}
            text="Bunzz"
            link="https://www.bunzz.dev/"
            tier="partner"
          />
          <SupporterLogo
            source={TangemLogo}
            text="Tangem"
            link="https://tangem.com/"
            tier="partner"
          />
          <SupporterLogo
            source={ZeloLogo}
            text="Zelo"
            link="https://zelojapan.com/"
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
        <div css={css`padding: 1rem 0;`} />
        <PartnerCategory category="">
          <Image
            src={EJLogoFace}
            alt="Ethereum Japan"
            css={css`
              height: auto;
              max-width: 128px;

              ${mq.laptop} {
                max-width: 256px;
              }
            `}
          />
        </PartnerCategory>
        <div css={css`padding: 1rem 0;`} />
      </section>
    </section>
  );
};

export default SupportersSection;
