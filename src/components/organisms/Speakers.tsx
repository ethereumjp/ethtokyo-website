import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import { css } from "@emotion/react";
import Image, { type StaticImageData } from "next/image";
import AbhimanyuPic from "public/images/contributors/abhimanyunag.jpg";
import AggrePic from "public/images/contributors/aggre.jpg";
import AllenPic from "public/images/contributors/allenjoseph.jpg";
import AnjaliPic from "public/images/contributors/anjaliyoung.png";
import AudreyPic from "public/images/contributors/audrey.png";
import AyaPic from "public/images/contributors/ayamiyaguchi.png";
import ChuazhengPic from "public/images/contributors/chuazhenglong.jpeg";
import DangerPic from "public/images/contributors/dangerz.png";
import DanielPic from "public/images/contributors/danielhwang.png";
import DaodudePic from "public/images/contributors/daodude.jpg";
import DeliPic from "public/images/contributors/deligong.png";
import EdmundPic from "public/images/contributors/edmundedgar.jpg";
import FrancescoPic from "public/images/contributors/francescoandreoli.jpg";
import FriscoPic from "public/images/contributors/friscodanconia.jpeg";
import GuruPic from "public/images/contributors/guru.jpg";
import JamesPic from "public/images/contributors/jameshe.jpeg";
import JehyukPic from "public/images/contributors/jehyukjang.jpg";
import JongwonPic from "public/images/contributors/jongwonpark.jpg";
import JosephPic from "public/images/contributors/josephschiarizzi.jpg";
import JoshPic from "public/images/contributors/joshguha.png";
import KolbyPic from "public/images/contributors/kolbymorozliebl.jpg";
import LeonaPic from "public/images/contributors/leohio.jpeg";
import LouiePic from "public/images/contributors/louieoconnor.jpg";
import MattPic from "public/images/contributors/matthewliu.jpeg";
import MelisaPic from "public/images/contributors/melisakurtcan.jpg";
import MoazzamPic from "public/images/contributors/moazzamarif.png";
import NabihaPic from "public/images/contributors/nabihasheikh.png";
import NaimPic from "public/images/contributors/naimashhab.jpeg";
import NikhilPic from "public/images/contributors/nikhilmahana.jpg";
import Nilspic from "public/images/contributors/nilspihl.png";
import OzgurPic from "public/images/contributors/ozgurarmancyigit.jpg";
import PeterPic from "public/images/contributors/peterszilagyi.png";
import PhilipPic from "public/images/contributors/phillippieper.jpg";
import PiyushPic from "public/images/contributors/piyushgururani.jpeg";
import QiangPic from "public/images/contributors/qiangju.png";
import QiPic from "public/images/contributors/qizhou.png";
import RenaPic from "public/images/contributors/renaobrien.png";
import RohitPic from "public/images/contributors/rohitramesh.jpg";
import RyoheiPic from "public/images/contributors/ryokomiyama.jpg";
import SammiPic from "public/images/contributors/sammishu.jpg";
import SamuelPic from "public/images/contributors/samuelchong.png";
import ShogoPic from "public/images/contributors/shogoochiai.jpg";
import SuhyeonPic from "public/images/contributors/suhyeonlee.png";
import SujithPic from "public/images/contributors/sujithsomraaj.jpeg";
import TakaPic from "public/images/contributors/takaphaver.jpg";
import TomaszPic from "public/images/contributors/tomaszstanczak.png";
import TomoPic from "public/images/contributors/tomosaito.jpg";
import VarunPic from "public/images/contributors/varundoshi.jpg";
import VitalikPic from "public/images/contributors/vitalik.jpg";
import VladPic from "public/images/contributors/vladsvitanko.jpg";
import YosuiPic from "public/images/contributors/yosuiharasawa.jpg";
import YukiPic from "public/images/contributors/yukiyuminaga.jpeg";
import YuroitakiPic from "public/images/contributors/yuroitaki.jpeg";
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
              width: 120px;
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
          name="Vitalik (online)"
          link="https://vitalik.eth.limo/"
          org="Ethereum, co-founder"
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
          source={KolbyPic}
          name="Kolby Moroz Liebl"
          link="https://x.com/Kolby_ML"
          org="EF, Portal"
          orgUrl="https://www.ethportal.net/"
        />
        <SpeakerIcon
          source={YuroitakiPic}
          name="yuroitaki"
          link="https://x.com/yuroitaki"
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
          source={RenaPic}
          name="Rena OBrien"
          link="https://www.linkedin.com/in/renaobrien/"
          org="Gitcoin"
          orgUrl="https://gitcoin.co/"
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
          source={MelisaPic}
          name="Melisa Kurtcan"
          link="https://www.linkedin.com/in/melissa-kurtcan-81b20115a"
          org="Satoshi Twenty One"
          orgUrl="https://satoshitwenty.one/"
        />
        <SpeakerIcon
          source={NaimPic}
          name="Naim Ashhab"
          link="https://twitter.com/ashhanai"
          org="PWN DAO"
          orgUrl="https://pwn.xyz"
        />
        <SpeakerIcon
          source={LeonaPic}
          name="Leona Hioki"
          link="https://twitter.com/HiokiLeona"
          org="Intmax"
          orgUrl="https://www.intmax.io/"
        />
        <SpeakerIcon
          source={YosuiPic}
          name="Yosui Harasawa"
          link="https://twitter.com/y0su1"
          org="Mycel"
          orgUrl="https://mycel.land/"
        />
        <SpeakerIcon
          source={GuruPic}
          name="Guru"
          link="https://x.com/hackyguru"
          org="Status.im"
          orgUrl="https://status.im/"
        />
        <SpeakerIcon
          source={MoazzamPic}
          name="Moazzam Arif"
          link="https://www.linkedin.com/in/moazzam-arif/"
          org="BlockApex"
          orgUrl="https://blockapex.io/"
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
          source={QiPic}
          name="Qi Zhou"
          link="https://www.linkedin.com/in/qi-zhou-9a668715/"
          org="EthStorage"
          orgUrl="https://ethstorage.io/"
        />
        <SpeakerIcon
          source={AnjaliPic}
          name="Anjali Young"
          link="https://x.com/damaderoca"
          org="Collab.Land"
          orgUrl="https://www.collab.land/"
        />
        <SpeakerIcon
          source={LouiePic}
          name="Louie Oconnor"
          link="https://x.com/lou3ee"
          org="LUKSO"
          orgUrl="https://lukso.network/"
        />
        <SpeakerIcon
          source={JehyukPic}
          name="Jehyuk Jang"
          link="http://linkedin.com/in/jehyuk-jang-a882062ba"
          org="Tokamak Network"
          orgUrl="https://www.tokamak.network/"
        />
        <SpeakerIcon
          source={SuhyeonPic}
          name="Suhyeon Lee"
          link="https://suhyeonlee.xyz"
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
          source={JongwonPic}
          name="Jongwon Park"
          link="https://twitter.com/jwpark02"
          org="Story Protocol"
          orgUrl="https://storyprotocol.xyz/"
        />
        <SpeakerIcon
          source={QiangPic}
          name="Qiang Zhu"
          link="https://www.linkedin.com/in/qiang-zhu-3a716731/"
          org="Quarkchain"
          orgUrl="https://quarkchain.io/"
        />
        <SpeakerIcon
          source={PhilipPic}
          name="Philip Pieper"
          link="https://twitter.com/PhilippPieper"
          org="Swarm"
          orgUrl="https://www.swarm.com"
        />
        <SpeakerIcon
          source={NikhilPic}
          name="Nikhil Mahana"
          link="https://x.com/nikhil_mahana/"
          org="Independent"
          orgUrl="/#"
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
          source={SammiPic}
          name="Sammi Shu"
          link="https://www.linkedin.com/in/sammi-shu-aab68084/"
          org="Hemera"
          orgUrl="https://thehemera.com/"
        />
        <SpeakerIcon
          source={Nilspic}
          name="Nils Pihl"
          link="https://x.com/broodsugar"
          org="Auki Labs"
          orgUrl="https://www.aukilabs.com/"
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
          source={MattPic}
          name="Matthew Liu"
          link="https://www.linkedin.com/in/matthew-liu-profile"
          org="SynFutures"
          orgUrl="https://www.synfutures.com/"
        />
        <SpeakerIcon
          source={SamuelPic}
          name="Samuel Chong"
          link="https://linktr.ee/stakesaurus/"
          org="Stakesaurus"
          orgUrl="https://stakesaurus.com/"
        />
        <SpeakerIcon
          source={NabihaPic}
          name="Nabiha Sheikh"
          link="https://twitter.com/Nabihas4/"
          org="A51 Finance"
          orgUrl="https://a51.finance/"
        />
        <SpeakerIcon
          source={RohitPic}
          name="Rohit Ramesh"
          link="https://x.com/Rohit7101"
          org="Crossmint"
          orgUrl="https://www.crossmint.com/"
        />
        <SpeakerIcon
          source={RyoheiPic}
          name="Ryo Komiyama"
          link="https://x.com/ryoheikomy"
          org="Kyuzan"
          orgUrl="https://kyuzan.com/"
        />
        <SpeakerIcon
          source={TakaPic}
          name="Taka"
          link="https://x.com/Web3domcome"
          org="Phaver"
          orgUrl="https://www.phaver.com/"
        />
        <SpeakerIcon
          source={DaodudePic}
          name="Kazuma Tamura"
          link="https://www.linkedin.com/in/kazuma-tamura-0a38b916a/"
          org="Bankless Japan"
          orgUrl="https://x.com/BanklessJP"
        />
      </div>
    </section>
  );
};

export default SpeakersSection;
