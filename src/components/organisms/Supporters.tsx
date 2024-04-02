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
import ETHTaipeiLogo from "public/logo/ETHTaipeiLogo.png";
import FractonLogo from "public/logo/FractonLogo.png";
import GMOLogo from "public/logo/GMOLogo.svg";
import TangemLogo from "public/logo/TangemLogo.svg";

const SupportersSection = () => {
  const SupporterLogo = (props: {
    source: StaticImageData;
    text: string;
    link: string;
  }) => {
    return (
      <a href={props.link} target="_blank" rel="noreferrer">
        <Image
          src={props.source}
          alt={props.text}
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
  };

  return (
    <section
      id="Supporters"
      css={css`
        background-color: ${neutral.White};
        background-image: url(${seikaiha.src});
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        padding: 2rem;
        text-align: center;
      `}
    >
      <h2 css={css`color: black; font-weight: 600;`}>Sponsors</h2>
      <div
        css={css`
          align-items:center;
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fill, 128px);
          justify-content: center;

          ${mq.laptop} {
            gap: 6rem;
            grid-template-columns: repeat(auto-fill, 256px);
          }
        `}
      >
        <SupporterLogo
          source={GMOLogo}
          text="GMO Internet Group, Inc."
          link="https://www.gmo.jp/"
        />
      </div>
      <h2 css={css`color: black; font-weight: 600;`}>Our Partners</h2>
      <div
        css={css`
          align-items:center;
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fill, 128px);
          justify-content: center;

          ${mq.laptop} {
            gap: 6rem;
            grid-template-columns: repeat(auto-fill, 256px);
          }
        `}
      >
        <SupporterLogo
          source={AkindoLogo}
          text="Akindo"
          link="https://akindo.io/"
        />
        <SupporterLogo
          source={BunzzLogo}
          text="Bunzz"
          link="https://www.bunzz.dev/"
        />

        <SupporterLogo
          source={CentrumLogo}
          text="Centrum"
          link="https://centrum.studio/"
        />
        <SupporterLogo
          source={CoinpostLogo}
          text="Coinpost"
          link="https://coinpost.jp/"
        />
        <SupporterLogo
          source={EFLogo}
          text="Ethereum Foundation"
          link="https://ethereum.foundation/"
        />
        <SupporterLogo
          source={ETHTaipeiLogo}
          text="ETH Taipei"
          link="https://ethtaipei.org/"
        />
        <SupporterLogo
          source={FractonLogo}
          text="Fracton Ventures"
          link="https://fracton.ventures/"
        />
        <SupporterLogo
          source={TangemLogo}
          text="Tangem"
          link="https://tangem.com/"
        />
      </div>
      <div css={css``}>
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
      </div>
    </section>
  );
};

export default SupportersSection;
