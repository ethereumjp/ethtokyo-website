import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import AudreyPic from "public/images/speakers/audrey.png";
import AyaPic from "public/images/speakers/ayamiyaguchi.png";
import DanielPic from "public/images/speakers/danielhwang.png";
import EdmundPic from "public/images/speakers/edmundedgar.jpg";
import JuliePic from "public/images/speakers/juliebettens.jpg";
import NiklasPic from "public/images/speakers/nikolaskunkel.jpg";
import PeterPic from "public/images/speakers/peterszilagyi.png";
import PiyushPic from "public/images/speakers/piyushgururani.jpeg";
import SamuelPic from "public/images/speakers/samuelchong.png";
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
            outline: 2px solid white;
            outline-offset: -2px;
            width: 96px;

            ${mq.laptop}{
              outline: 4px solid white;
              outline-offset: -4px;
              width: 192px;
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
        padding: 2rem 2rem;
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
          source={VitalikPic}
          name="Vitalik Buterin"
          link="https://vitalik.eth.limo/"
          org="Ethereum"
          orgUrl="https://ethereum.org/"
        />
        <SpeakerIcon
          source={AyaPic}
          name="Aya Miyaguchi"
          link="https://twitter.com/AyaMiyagotchi/"
          org="Ethereum Foundation"
          orgUrl="https://ethereum.foundation/"
        />
        <SpeakerIcon
          source={PeterPic}
          name="Péter Szilágyi"
          link="https://twitter.com/peter_szilagyi/"
          org="EF, Geth lead"
          orgUrl="https://geth.ethereum.org/"
        />
        {/* <SpeakerIcon
          source={AudreyPic}
          name="Audrey Tang"
          link="https://twitter.com/audreyt"
          org="Digital Minister of Taiwan"
          orgUrl="https://moda.gov.tw/"
        /> */}
        <SpeakerIcon
          source={TomaszPic}
          name="Tomasz Stańczak"
          link="https://twitter.com/tkstanczak"
          org="Nethermind"
          orgUrl="https://www.nethermind.io/"
        />
        {/* <SpeakerIcon
          source={JuliePic}
          name="Julie Bettens"
          link="https://linktr.ee/stakesaurus/"
          org="EPFL, DEDIS Laboratory"
          orgUrl="https://www.epfl.ch/labs/dedis/"
        /> */}
        <SpeakerIcon
          source={ShogoPic}
          name="Shogo Ochiai"
          link="https://twitter.com/_sgtn/"
          org="Solidity House"
          orgUrl="https://www.solidityhouse.com/"
        />
        <SpeakerIcon
          source={NiklasPic}
          name="Niklas Kunkel"
          link="https://clever-salsa-671.notion.site/Niklas-Kunkel-f7647e0e067f4712a85a5750ab479d64"
          org="Chronicle Labs"
          orgUrl="https://chroniclelabs.org/"
        />
        <SpeakerIcon
          source={DanielPic}
          name="Daniel Hwang"
          link="https://twitter.com/danhwang88"
          org="Kintsugi"
          orgUrl="https://kintsugi.tech/"
        />
        <SpeakerIcon
          source={EdmundPic}
          name="Edmund Edgar"
          link="https://twitter.com/edmundedgar/"
          org="Reality.eth"
          orgUrl="https://reality.eth.link/"
        />
        <SpeakerIcon
          source={PiyushPic}
          name="Piyush Gururani"
          link="https://www.linkedin.com/in/gururani/"
          org="TECHFUND Inc"
          orgUrl="https://techfund.jp/"
        />
        <SpeakerIcon
          source={SamuelPic}
          name="Samuel Chong"
          link="https://linktr.ee/stakesaurus/"
          org="Stakesaurus"
          orgUrl="https://stakesaurus.com/"
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
