import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import AudreyPic from "public/images/speakers/audrey.png";
import AyaPic from "public/images/speakers/ayamiyaguchi.png";
import DanielPic from "public/images/speakers/danielhwang.png";
import EdmundPic from "public/images/speakers/edmundedgar.jpg";
import JuliePic from "public/images/speakers/juliebettens.jpg";
import NiklasPic from "public/images/speakers/nikolaskunkel.jpg";
import OzgurPic from "public/images/speakers/ozgurarmancyigit.jpg";
import PeterPic from "public/images/speakers/peterszilagyi.png";
import PiyushPic from "public/images/speakers/piyushgururani.jpeg";
import SamuelPic from "public/images/speakers/samuelchong.png";
import ShogoPic from "public/images/speakers/shogoochiai.jpg";
import TomaszPic from "public/images/speakers/tomaszstanczak.png";
import VitalikPic from "public/images/speakers/vitalik.jpg";
import { ReactNode } from "react";

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
        css={css`text-decoration: none; :hover{text-decoration: underline;};`}
      >
        <Image
          src={source}
          alt={name}
          css={css`
            border-radius: 50%;
            height: auto;
            width: 96px;

            ${mq.laptop}{
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
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 2rem;

          ${mq.laptop} {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-around;
          }
        `}
      >
        <HackathonTrackCard>
          <h2 css={css`color: ${brand.Miyabi};`}>Freedom of transacting</h2>
          <p css={css`text-align: left;`}>
            This track is for hackers who want to ensure that anyone, anywhere,
            anytime can facilitate unrestricted transactions. We look for
            projects that promote financial inclusion and enable people to
            access and send tokens across borders without restrictions. If you
            want to hack on p2p solutions, build censorship-resistant
            applications, and ensure that transactions can be private and
            secure, this track is for you.
          </p>
        </HackathonTrackCard>
        <HackathonTrackCard>
          <h2 css={css`color: ${brand.Miyabi};`}>Robust democracy</h2>
          <p css={css`text-align: left;`}>
            This track is about building platforms and tools that counter
            disproportionate influence of centralized powers to enable informed
            and collective decision-making, credibly neutral and transparent
            governance, and collaboration and coordination among communities.
            Other ideas you could hack on are quadratic funding, sybil
            resistance, and decentralized social reputation.
          </p>
        </HackathonTrackCard>
        <HackathonTrackCard>
          <h2 css={css`color: ${brand.Miyabi};`}>Infrastructure and tooling</h2>
          <p css={css`text-align: left;`}>
            This track is for the architects working on the underlying
            infrastructures on which distributed public applications can run
            efficiently and reliably. Possible ideas include protocol
            specification and implementations, networking, developer tools, and
            hardware. Contributions to developer experience, such as debugging
            tools, testing frameworks, and comprehensive documentation, are
            highly valued.
          </p>
        </HackathonTrackCard>
      </div>
      {/* <p>
        ℹ️{" "}
        <Link href="/hacker-guide" css={css`:hover {color: ${brand.Shuiro};}`}>
          Learn more about the hackathon
        </Link>
      </p> */}

      <h2
        css={css`
          font-size: 2rem;
          font-weight: 400;
          ${mq.laptop} {
            font-size: 3rem;
          }`}
      >
        Event Speakers
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
          org="EF, Director"
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
          source={OzgurPic}
          name="Özgür Armanc Yiğit"
          link="https://www.linkedin.com/in/oay/"
          org="EF, PSE"
          orgUrl="https://pse.dev/"
        />
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
      <div>
        <p>
          ❗
          <a
            css={css`:hover {color: ${brand.Shuiro}};`}
            href="https://forms.gle/1wtFYnTRfi4mFnRQ9"
            target="_blank"
            rel="noreferrer"
          >
            We are currently accepting speaker applications
          </a>
          ❗
        </p>
      </div>
    </section>
  );
};

export default SpeakersSection;
