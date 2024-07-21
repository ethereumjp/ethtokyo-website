import { mq } from "@/themes/settings/breakpoints";
import { brand, info } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { type StaticImageData } from "next/image";
import AbhimanyuPic from "public/images/speakers/abhimanyunag.jpg";
import AggrePic from "public/images/speakers/aggre.jpg";
import AllenPic from "public/images/speakers/allenjoseph.jpg";
import AudreyPic from "public/images/speakers/audrey.png";
import AyaPic from "public/images/speakers/ayamiyaguchi.png";
import ChuazhengPic from "public/images/speakers/chuazhenglong.jpeg";
import DangerPic from "public/images/speakers/dangerz.png";
import DanielPic from "public/images/speakers/danielhwang.png";
import DaodudePic from "public/images/speakers/daodude.jpg";
import DavidPic from "public/images/speakers/davidcao.jpeg";
import DeliPic from "public/images/speakers/deligong.png";
import EdmundPic from "public/images/speakers/edmundedgar.jpg";
import FrancescoPic from "public/images/speakers/francescoandreoli.jpg";
import FriscoPic from "public/images/speakers/friscodanconia.jpeg";
import GuruPic from "public/images/speakers/guru.jpg";
import JamesPic from "public/images/speakers/jameshe.jpeg";
import JehyukPic from "public/images/speakers/jehyukjang.jpg";
import JosephPic from "public/images/speakers/josephschiarizzi.jpg";
import JoshPic from "public/images/speakers/joshguha.png";
import KolbyPic from "public/images/speakers/kolbymorozliebl.jpg";
import MeinaPic from "public/images/speakers/meinazhou.jpg";
import MelisaPic from "public/images/speakers/melisakurtcan.jpg";
import MoazzamPic from "public/images/speakers/moazzamarif.png";
import NaimPic from "public/images/speakers/naimashhab.jpeg";
import OzgurPic from "public/images/speakers/ozgurarmancyigit.jpg";
import PeterPic from "public/images/speakers/peterszilagyi.png";
import PhilipPic from "public/images/speakers/phillippieper.jpg";
import PiyushPic from "public/images/speakers/piyushgururani.jpeg";
import QiangPic from "public/images/speakers/qiangju.png";
import QiPic from "public/images/speakers/qizhou.png";
import RohitPic from "public/images/speakers/rohitramesh.jpg";
import RyoheiPic from "public/images/speakers/ryokomiyama.jpg";
import SamuelPic from "public/images/speakers/samuelchong.png";
import ShogoPic from "public/images/speakers/shogoochiai.jpg";
import SujithPic from "public/images/speakers/sujithsomraaj.jpeg";
import TomaszPic from "public/images/speakers/tomaszstanczak.png";
import TomoPic from "public/images/speakers/tomosaito.jpg";
import UttamPic from "public/images/speakers/uttamsingh.png";
import VarunPic from "public/images/speakers/varundoshi.jpg";
import VitalikPic from "public/images/speakers/vitalik.jpg";
import VladPic from "public/images/speakers/vladsvitanko.jpg";
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
          org="EF, Executive Director"
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
          source={TomoPic}
          name="Tomo Saito"
          link="https://twitter.com/tomosaito"
          org="EF, Designer"
          orgUrl="https://ethereum.foundation/"
        />
        <SpeakerIcon
          source={OzgurPic}
          name="Özgür Armanc Yiğit"
          link="https://www.linkedin.com/in/oay/"
          org="EF, PSE"
          orgUrl="https://pse.dev/"
        />
        <SpeakerIcon
          source={KolbyPic}
          name="Kolby Moroz Liebl"
          link="https://x.com/Kolby_ML"
          org="EF, Portal"
          orgUrl="https://www.ethportal.net/"
        />
        <SpeakerIcon
          source={YuroitakiPic}
          name="yuroitaki"
          link="https://github.com/yuroitaki"
          org="PSE, TLSNotary"
          orgUrl="https://tlsnotary.org/"
        />
        <SpeakerIcon
          source={TomaszPic}
          name="Tomasz Stańczak"
          link="https://twitter.com/tkstanczak"
          org="Nethermind"
          orgUrl="https://www.nethermind.io/"
        />
        <SpeakerIcon
          source={JosephPic}
          name="Joseph Schiarizzi"
          link="http://twitter.com/cupojoseph"
          org="Open Dollar"
          orgUrl="https://www.opendollar.com/"
        />
        <SpeakerIcon
          source={FrancescoPic}
          name="Francesco Andreoli"
          link="https://www.francesco-andreoli.com/"
          org="MetaMask"
          orgUrl="https://metamask.io/"
        />
        <SpeakerIcon
          source={MoazzamPic}
          name="Moazzam Arif"
          link="https://www.linkedin.com/in/moazzam-arif/"
          org="BlockApex"
          orgUrl="https://blockapex.io/"
        />
        <SpeakerIcon
          source={NaimPic}
          name="Naim Ashhab"
          link="https://twitter.com/ashhanai"
          org="PWN DAO"
          orgUrl="https://pwn.xyz"
        />
        <SpeakerIcon
          source={GuruPic}
          name="Guru"
          link="https://x.com/hackyguru"
          org="Status.im"
          orgUrl="https://status.im/"
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
          source={JehyukPic}
          name="Jehyuk Jang"
          link="http://linkedin.com/in/jehyuk-jang-a882062ba"
          org="Tokamak Network"
          orgUrl="https://www.tokamak.network/"
        />
        <SpeakerIcon
          source={SujithPic}
          name="Sujith Somraaj"
          link="https://www.sujithsomraaj.xyz/"
          org="Superform"
          orgUrl="https://www.superform.xyz/"
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
          source={AggrePic}
          name="Aggre"
          link="https://twitter.com/aggre_"
          org="Dev Protocol"
          orgUrl="https://www.devprotocol.xyz/"
        />
        <SpeakerIcon
          source={PiyushPic}
          name="Piyush Gururani"
          link="https://www.linkedin.com/in/gururani/"
          org="TECHFUND"
          orgUrl="https://techfund.jp/"
        />
        <SpeakerIcon
          source={AbhimanyuPic}
          name="Abhimanyu Nag"
          link="https://www.linkedin.com/in/abhimanyu-nag-682747201"
          org="Chainrisk Labs"
          orgUrl="https://chainlinklabs.com/"
        />
        <SpeakerIcon
          source={QiangPic}
          name="Qiang Zhu"
          link="https://www.linkedin.com/in/qiang-zhu-3a716731/"
          org="Quarkchain"
          orgUrl="https://quarkchain.io/"
        />
        <SpeakerIcon
          source={UttamPic}
          name="Uttam Singh"
          link="https://x.com/uttam_singhk"
          org="Flare Network"
          orgUrl="https://flare.network/"
        />
        <SpeakerIcon
          source={DavidPic}
          name="David Cao"
          link="https://twitter.com/davidfucius"
          org="Layer N"
          orgUrl="https://www.layern.com/"
        />
        <SpeakerIcon
          source={PhilipPic}
          name="Philip Pieper"
          link="https://twitter.com/PhilippPieper"
          org="Swarm"
          orgUrl="https://www.swarm.com"
        />
        <SpeakerIcon
          source={VladPic}
          name="Vlad Svitanko"
          link="https://www.linkedin.com/in/vlad-svitanko/"
          org="Cryptorsy"
          orgUrl="https://cryptorsy.io/"
        />
        <SpeakerIcon
          source={FriscoPic}
          name="Frisco d'Anconia"
          link="https://x.com/CryptoTraveler1"
          org="Timbuktu DAO"
          orgUrl="https://timbuktudao.xyz/"
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
          source={JamesPic}
          name="James He"
          link="https://x.com/jameshe_eth"
          org="Offchain Labs"
          orgUrl="https://www.offchainlabs.com/"
        />
        <SpeakerIcon
          source={VarunPic}
          name="Varun Doshi"
          link="https://x.com/Varunx10"
          org="Chainrisk"
          orgUrl="https://www.chainrisk.cloud/"
        />
        <SpeakerIcon
          source={DangerPic}
          name="Danger Zhang"
          link="http://todayindefi.com/"
          org="Today in DeFi"
          orgUrl="http://todayindefi.com/"
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
          source={DaodudePic}
          name="Kazuma Tamura"
          link="https://www.linkedin.com/in/kazuma-tamura-0a38b916a/"
          org="Bankless Japan"
          orgUrl="https://x.com/BanklessJP"
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
