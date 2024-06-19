import { mq } from "@/themes/settings/breakpoints";
import { brand, info } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { type StaticImageData } from "next/image";
import AggrePic from "public/images/speakers/aggre.jpg";
import AllenPic from "public/images/speakers/allenjoseph.jpg";
import AudreyPic from "public/images/speakers/audrey.png";
import AyaPic from "public/images/speakers/ayamiyaguchi.png";
import ChuazhengPic from "public/images/speakers/chuazhenglong.jpeg";
import DanielPic from "public/images/speakers/danielhwang.png";
import DavidPic from "public/images/speakers/davidcao.jpeg";
import DeliPic from "public/images/speakers/deligong.png";
import EdmundPic from "public/images/speakers/edmundedgar.jpg";
import FrancescoPic from "public/images/speakers/francescoandreoli.jpg";
import JoshPic from "public/images/speakers/joshguha.png";
import JuliePic from "public/images/speakers/juliebettens.jpg";
import MeinaPic from "public/images/speakers/meinazhou.jpg";
import MelisaPic from "public/images/speakers/melisakurtcan.jpg";
import NiklasPic from "public/images/speakers/nikolaskunkel.jpg";
import OzgurPic from "public/images/speakers/ozgurarmancyigit.jpg";
import PeterPic from "public/images/speakers/peterszilagyi.png";
import PiyushPic from "public/images/speakers/piyushgururani.jpeg";
import QinenPic from "public/images/speakers/qinenlooi.jpg";
import QiPic from "public/images/speakers/qizhou.png";
import RanPic from "public/images/speakers/ranyi.jpeg";
import RohitPic from "public/images/speakers/rohitramesh.jpg";
import RyoheiPic from "public/images/speakers/ryokomiyama.jpg";
import SamuelPic from "public/images/speakers/samuelchong.png";
import ShogoPic from "public/images/speakers/shogoochiai.jpg";
import JackPic from "public/images/speakers/siyujia.jpeg";
import TomaszPic from "public/images/speakers/tomaszstanczak.png";
import VarunPic from "public/images/speakers/varundoshi.jpg";
import VitalikPic from "public/images/speakers/vitalik.jpg";
import YukiPic from "public/images/speakers/yukiyuminaga.jpeg";
import YuroitakiPic from "public/images/speakers/yuroitaki.jpeg";
import type { ReactNode } from "react";

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
              communities. Other ideas you could hack on are quadratic funding,
              sybil resistance, and decentralized social reputation.
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
        <div>
          <p css={css`font-size: 1.2rem;`}>
            ✋
            <a
              href="https://forms.gle/nv1DFjb9GBXKZmAf9"
              target="_blank"
              rel="noreferrer"
            >
              Hacking mentors welcome!
            </a>
          </p>
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
          name="Vitalik (online)"
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
        <SpeakerIcon
          source={FrancescoPic}
          name="Francesco Andreoli"
          link="https://www.francesco-andreoli.com/"
          org="MetaMask"
          orgUrl="https://metamask.io/"
        />
        <SpeakerIcon
          source={JuliePic}
          name="Julie Bettens"
          link="https://blog.bbjubjub.fr/about-me/"
          org="EPFL, DEDIS Lab"
          orgUrl="https://www.epfl.ch/labs/dedis/"
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
          source={MelisaPic}
          name="Melisa Kurtcan"
          link="https://www.linkedin.com/in/melissa-kurtcan-81b20115a"
          org="Satoshi Twenty One"
          orgUrl="https://satoshitwenty.one/"
        />
        <SpeakerIcon
          source={QiPic}
          name="Qi Zhou"
          link="https://www.linkedin.com/in/qi-zhou-9a668715/"
          org="EthStorage"
          orgUrl="https://ethstorage.io/"
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
          source={RanPic}
          name="Ran Yi"
          link="https://www.linkedin.com/in/ran-yi-b722696/"
          org="Orderly Network"
          orgUrl="https://orderly.network/"
        />
        <SpeakerIcon
          source={AggrePic}
          name="Aggre"
          link="https://twitter.com/aggre_"
          org="Dev Protocol"
          orgUrl="https://www.devprotocol.xyz/"
        />
        <SpeakerIcon
          source={YuroitakiPic}
          name="yuroitaki"
          link="https://github.com/yuroitaki"
          org="PSE, TLSNotary"
          orgUrl="https://tlsnotary.org/"
        />
        <SpeakerIcon
          source={DavidPic}
          name="David cao"
          link="https://twitter.com/davidfucius"
          org="Layer N"
          orgUrl="https://www.layern.com/"
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
          source={VarunPic}
          name="Varun Doshi"
          link="https://x.com/Varunx10"
          org="Chainrisk"
          orgUrl="https://www.chainrisk.cloud/"
        />
        <SpeakerIcon
          source={NiklasPic}
          name="Niklas Kunkel"
          link="https://twitter.com/nomos_paradox"
          org="Chronicle Labs"
          orgUrl="https://chroniclelabs.org/"
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
          source={MeinaPic}
          name="Meina Zhou"
          link="https://x.com/CryptoMeina"
          org="Native"
          orgUrl="https://native.org/"
        />
        <SpeakerIcon
          source={RohitPic}
          name="Rohit Ramesh"
          link="https://x.com/Rohit7101"
          org="Crossmint"
          orgUrl="https://www.crossmint.com/"
        />
        <SpeakerIcon
          source={SamuelPic}
          name="Samuel Chong"
          link="https://linktr.ee/stakesaurus/"
          org="Stakesaurus"
          orgUrl="https://stakesaurus.com/"
        />
        <SpeakerIcon
          source={RyoheiPic}
          name="Ryo Komiyama"
          link="https://x.com/ryoheikomy"
          org="Kyuzan"
          orgUrl="https://kyuzan.com/"
        />
        <SpeakerIcon
          source={PiyushPic}
          name="Piyush Gururani"
          link="https://www.linkedin.com/in/gururani/"
          org="TECHFUND Inc"
          orgUrl="https://techfund.jp/"
        />
        <SpeakerIcon
          source={QinenPic}
          name="Qin En Looi"
          link="https://x.com/webthreedad"
          org="Saison Capital"
          orgUrl="https://www.saisoncapital.com/"
        />
        <SpeakerIcon
          source={JackPic}
          name="Jack Jia"
          link="https://x.com/JackJia2021"
          org="BayCurrent Consulting"
          orgUrl="https://www.baycurrent.co.jp/"
        />
      </div>
      <div>
        <p>
          ❗
          <a
            css={css`:hover {color: ${info.Attention}};`}
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
