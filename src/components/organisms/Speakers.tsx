import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import AyaPic from "public/images/speakers/ayamiyaguchi.png";
import EdmundPic from "public/images/speakers/edmundedgar.jpg";
import ShogoPic from "public/images/speakers/shogoochiai.jpg";
import TomaszPic from "public/images/speakers/tomaszstanczak.png";
import VitalikPic from "public/images/speakers/vitalik.jpg";

const SpeakersSection = () => {
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
        css={css`text-decoration: none; :hover{text-decoration: underline;};`}
      >
        <Image
          src={source}
          alt={name}
          css={css`
            border-radius: 50%;
            height: auto;
            outline: 4px solid white;
            outline-offset: -4px;
            width:64px;

            ${mq.laptop}{
              width: 128px;
            }
          `}
        />
        <p css={css`margin-bottom:0;`}>{name}</p>
      </a>
      <a
        href={orgUrl}
        target="_blank"
        rel="noreferrer"
        css={css`text-decoration: none; :hover{color: ${brand.JordyBlue};};`}
      >
        <p css={css`font-size: 1rem; line-height:1; margin-top:0;`}>{org}</p>
      </a>
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
          link="https://twitter.com/AyaMiyagotchi/"
          org="Ethereum Foundation"
          orgUrl="https://ethereum.foundation/"
        />
        <SpeakerIcon
          source={EdmundPic}
          name="Edmund Edgar"
          link="https://twitter.com/edmundedgar/"
          org="Reality.eth"
          orgUrl="https://reality.eth.link/"
        />
        <SpeakerIcon
          source={VitalikPic}
          name="Vitalik Buterin"
          link="https://vitalik.eth.limo/"
          org="Ethereum"
          orgUrl="https://ethereum.org/"
        />
        <SpeakerIcon
          source={TomaszPic}
          name="Tomasz Stańczak"
          link="https://twitter.com/tkstanczak"
          org="Nethermind"
          orgUrl="https://www.nethermind.io/"
        />
        <SpeakerIcon
          source={ShogoPic}
          name="Shogo Ochiai"
          link="https://twitter.com/_sgtn/"
          org="Solidity House"
          orgUrl="https://www.solidityhouse.com/"
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
