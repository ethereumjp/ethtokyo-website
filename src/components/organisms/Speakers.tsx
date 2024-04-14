import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import AyaPic from "public/images/ayamiyaguchi.png";
import EdmundPic from "public/images/edmundedgar.jpg";
import ShogoPic from "public/images/shogoochiai.jpg";
import TomaszPic from "public/images/tomaszstanczak.png";
import VitalikPic from "public/images/vitalik.jpg";

const SpeakersSection = () => {
  const SpeakerIcon: React.FC<{
    source: StaticImageData;
    name: string;
    org: string;
    link: string;
  }> = ({ source, name, org, link }) => (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          src={source}
          alt={name}
          css={css`
            border-radius: 50%;
            height: auto;
            outline: 4px solid white;
            outline-offset: -4px;
            width:128px;

            ${mq.laptop}{
              width: 256px;
            }
          `}
        />
      </a>
      <p css={css`margin-bottom:0;`}>{name}</p>
      <p css={css`font-size: 1rem; line-height:1; margin-top:0;`}>{org}</p>
    </div>
  );

  return (
    <section
      id="speakers"
      css={css`
        background-color: ${brand.Miyabi};
        padding: 2rem;
        text-align: center;
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
          source={AyaPic}
          name="Aya Miyaguchi"
          org="Ethereum Foundation"
          link="https://twitter.com/AyaMiyagotchi/"
        />
        <SpeakerIcon
          source={EdmundPic}
          name="Edmund Edgar"
          org="Reality.eth"
          link="https://twitter.com/edmundedgar/media"
        />
        <SpeakerIcon
          source={VitalikPic}
          name="Vitalik Buterin"
          org="Ethereum"
          link="https://vitalik.eth.limo/"
        />
        <SpeakerIcon
          source={TomaszPic}
          name="Tomasz Stańczak"
          org="Nethermind"
          link="https://twitter.com/tkstanczak"
        />
        <SpeakerIcon
          source={ShogoPic}
          name="Shogo Ochiai"
          org="Solidity House"
          link="https://twitter.com/_sgtn/"
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
