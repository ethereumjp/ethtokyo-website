import { mq } from "@/themes/settings/breakpoints";
import { brand, info, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import seikaiha from "public/images/seikaiha.png";
import AkindoLogo from "public/logo/AkindoLogo.svg";
import BunzzLogo from "public/logo/BunzzLogo.svg";
import CentrumLogo from "public/logo/CentrumLogo.svg";
import CoinpostLogo from "public/logo/CoinpostLogo.png";
import EFLogo from "public/logo/EFLogo.png";
import ETHRiyadhLogo from "public/logo/ETHRiyadhLogo.svg";
import ETHTaipeiLogo from "public/logo/ETHTaipeiLogo.png";
import FractonLogo from "public/logo/FractonLogo.png";
import GMOLogo from "public/logo/GMOLogo.svg";
import TangemLogo from "public/logo/TangemLogo.svg";

const SupportersSection = () => {
  const SupporterLogo: React.FC<{
    source: StaticImageData;
    text: string;
    link: string;
  }> = ({ source, text, link }) => (
    <a href={link} target="_blank" rel="noreferrer">
      <Image
        src={source}
        alt={text}
        css={css`
            height: auto;
            width:128px;

            ${mq.laptop}{
              max-height: 128px;
              width: 256px;
            }
          `}
      />
    </a>
  );

  const SponsorTier: React.FC<{
    tier: "platinum" | "gold" | "silver" | "bronze";
    children?: React.ReactNode;
  }> = ({ tier, children }) => {
    const tierColor = {
      platinum: "#e5e4e255",
      gold: "#FFD70055",
      silver: "#c0c0c055",
      bronze: "#cd7f3255",
    };

    return (
      <div
        css={css`
          background-color: ${tierColor[tier]};
          background-image: url(${seikaiha.src});
          background-position: center;
          background-repeat: repeat;
          background-size: cover;
          border-radius: 0.75rem;
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
    bgColor: string;
    children?: React.ReactNode;
  }> = ({ category, bgColor, children }) => (
    <div
      css={css`
          border: 4px double ${bgColor};
          border-radius: 0.75rem;`}
    >
      <h2
        css={css`
          color: black;
          font-size: 1.2rem;
          font-weight: 500;
          ${mq.laptop} {
            font-size: 1.6rem;
          }
        `}
      >
        {category} partners
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
        <SponsorTier tier="platinum">
          <SupporterLogo
            source={GMOLogo}
            text="GMO Internet Group, Inc."
            link="https://www.gmo.jp/"
          />
        </SponsorTier>
      </section>
      <div css={css`padding: 2rem 0;`} />
      <section id="partners">
        <PartnerCategory category="Operation" bgColor="#FF554455">
          <SupporterLogo
            source={FractonLogo}
            text="Fracton Ventures"
            link="https://fracton.ventures/"
          />
          <SupporterLogo
            source={CoinpostLogo}
            text="Coinpost"
            link="https://coinpost.jp/"
          />
          <SupporterLogo
            source={CentrumLogo}
            text="Centrum"
            link="https://centrum.studio/"
          />
          <SupporterLogo
            source={AkindoLogo}
            text="Akindo"
            link="https://akindo.io/"
          />
        </PartnerCategory>
        <div css={css`padding: 1rem 0;`} />
        <PartnerCategory category="Community" bgColor="#ffea00">
          <SupporterLogo
            source={ETHTaipeiLogo}
            text="ETH Taipei"
            link="https://ethtaipei.org/"
          />
          <SupporterLogo
            source={ETHRiyadhLogo}
            text="ETH Riyadh"
            link="https://ethriyadh.com/"
          />
          <SupporterLogo
            source={EFLogo}
            text="Ethereum Foundation"
            link="https://ethereum.foundation/"
          />
        </PartnerCategory>
        <div css={css`padding: 1rem 0;`} />
        <PartnerCategory category="Technology" bgColor="#1C1CFF55">
          <SupporterLogo
            source={TangemLogo}
            text="Tangem"
            link="https://tangem.com/"
          />
          <SupporterLogo
            source={BunzzLogo}
            text="Bunzz"
            link="https://www.bunzz.dev/"
          />
        </PartnerCategory>
      </section>
      <p
        css={css`
          font-size: 0.75rem;
          margin-top: 2rem;
          ${mq.laptop} {
            font-size: 1rem;
          }
        `}
      >
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
          Looking to sponsor or partner with us?
        </a>
      </p>
    </section>
  );
};

export default SupportersSection;
