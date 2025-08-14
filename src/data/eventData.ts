// スケジュールデータ
export const scheduleData = [
  {
    id: "workshops",
    day: "Day 1-2",
    title: "Workshops & Training",
    description:
      "Intensive workshops on Ethereum development, security, and scaling solutions.",
  },
  {
    id: "conference",
    day: "Day 3-5",
    title: "Main Conference",
    description:
      "Keynotes, panel discussions, and networking events with industry leaders.",
  },
  {
    id: "hackathon",
    day: "Day 6-7",
    title: "Hackathon",
    description:
      "48-hour hackathon with mentorship from top developers and investors.",
  },
];

// スピーカーデータ
export const speakersData = [
  {
    name: "Vitalik Buterin",
    image: "2025/images/speakers/Vitalik Buterin_Founder_Ethereum.jpg",
    title: "Founder",
    project: "Ethereum Foundation",
    talkTitle: "",
    socialLink: "https://x.com/VitalikButerin",
  },
  {
    name: "Aya Miyaguchi",
    image:
      "2025/images/speakers/Aya Miyaguchi_President_Ethereum Foundation.jpg",
    title: "President",
    project: "Ethereum Foundation",
    talkTitle: "",
    socialLink: "https://x.com/AyaMiyagotchi",
  },
  {
    name: "Charles Lu",
    image: "2025/images/speakers/Charles Lu_Espresso.png",
    title: "",
    project: "Espresso",
    talkTitle: "",
    socialLink: "https://x.com/charleslu1",
  },
  {
    name: "Maika Isogawa",
    image: "2025/images/speakers/maikaisogawa.png",
    title: "",
    project: "Webacy",
    talkTitle: "",
    socialLink: "https://www.linkedin.com/in/maikaisogawa/",
  },
  {
    name: "Jeff Wentworth",
    image: "2025/images/speakers/jeffwentworth.png",
    title: "Co-founder",
    project: "Curvegrid",
    talkTitle: "",
    socialLink: "https://x.com/JeffInTokyo",
  },
  {
    name: "Alan Scott",
    image: "2025/images/speakers/alanscott.jpg",
    title: "Contributor",
    project: "Railgun",
    talkTitle: "",
    socialLink: "https://x.com/tsu_kareta",
  },
  {
    name: "Gwénolé Martin",
    image: "2025/images/speakers/gwenolemartin.png",
    title: "Devrel",
    project: "Consensys",
    talkTitle: "",
    socialLink: "https://x.com/Gwenole_M",
  },
  {
    name: "Mykola Siusko",
    image: "2025/images/speakers/mykolasiusko.jpg",
    title: "Co-founder",
    project: "Web3Privacy now",
    talkTitle: "",
    socialLink: "https://x.com/nicksvyaznoy",
  },
  {
    name: "Jack Baldwin",
    image: "2025/images/speakers/jackbaldwin.png",
    title: "Co-founder",
    project: "Shinsei Galverse",
    talkTitle: "",
    socialLink: "https://x.com/OnlyWailoaloa",
  },
  {
    name: "Suji Yan",
    image: "2025/images/speakers/sujiyan.jpeg",
    title: "Founder",
    project: "Mask Network",
    talkTitle: "",
    socialLink: "https://x.com/suji_yan",
  },
  {
    name: "David Casey",
    image: "2025/images/speakers/davidcasey.jpeg",
    title: "CEO",
    project: "Funding the Commons",
    talkTitle: "",
    socialLink: "https://x.com/david1casey",
  },
  {
    name: "Stefan Piech",
    image: "2025/images/speakers/stefanpiech.jpeg",
    title: "",
    project: "Amagi Digital",
    talkTitle: "",
    socialLink: "https://www.linkedin.com/in/stefan-piech?",
  },
  // {
  //   name: "Sora Suegami",
  //   image: "2025/images/speakers/sorasuegami.png",
  //   title: "",
  //   project: "",
  //   talkTitle: "",
  // },
  {
    name: "Noah Jelich",
    image: "2025/images/speakers/noahjelich.png",
    title: "Security Researcher",
    project: "Independent",
    talkTitle: "",
    socialLink: "https://x.com/NoahJelich",
  },
  {
    name: "Jack Saracco",
    image: "2025/images/speakers/jacksaracco.jpg",
    title: "Founder",
    project: "Plasma Free",
    talkTitle: "",
    socialLink: "https://x.com/jacksaracco",
  },
  // {
  //   name: "Leona Hioki",
  //   image: "2025/images/speakers/leonahioki.png",
  //   title: "",
  //   project: "INTMAX",
  //   talkTitle: "",
  // },
];

// メンターデータ
export const mentorsData = [
  {
    id: "vitalik",
    name: "Vitalik Buterin",
    role: "Ethereum Co-founder",
  },
  {
    id: "aya",
    name: "Aya Miyaguchi",
    role: "Executive Director, EF",
  },
  {
    id: "hudson",
    name: "Hudson Jameson",
    role: "Ethereum Community",
  },
];

// セッションデータ
export const workshopsData = [
  {
    id: "zkp",
    title: "ZKPs in Practice",
    description: "Deep dive into Zero-Knowledge Proofs",
  },
  {
    id: "rollups",
    title: "Rollups vs L2s",
    description: "Scalability wars continue",
  },
  {
    id: "regulation",
    title: "Eth & Regulation",
    description: "Policy shaping the ecosystem",
  },
];

// トラックデータ
export const tracksData = [
  {
    id: "cypherpunks",
    title: "🥷 Cypherpunks Anonymous",
    subtitle: "Privacy & Security",
    description:
      "In a world where surveillance and data exploitation have become the norm, privacy is not just a right — it's a necessity. The Cypherpunk movement emerged to challenge this status quo, using cryptography as a tool to empower individuals to reclaim control over their digital lives.",
    longDescription:
      "Today, Ethereum provides the perfect platform to extend this vision through programmable cryptography — enabling privacy-preserving applications, secure computations, and anonymous transactions. Cypherpunks Anonymous is a track for builders who share this vision and are ready to push the boundaries of privacy, security, and censorship resistance with cutting-edge technologies like ZKPs, MPC, and FHE. Join us and help shape the future where cryptography safeguards freedom for all.",
    requirements: [
      "Core Use of Cryptography: Project must incorporate applied cryptography (ZKPs, MPC, FHE, etc.) as a fundamental component.",
      "Privacy-Preserving Design: Prioritize protecting user data and ensuring confidentiality.",
      "On-Chain or Off-Chain Feasibility: Solutions should be implementable on Ethereum or compatible networks.",
      "Real-World Applicability: Address practical privacy, security, or censorship resistance challenges.",
      "Open Source Ethos: Preference for projects that align with cypherpunk values of transparency and decentralization.",
    ],
    prize: "$3000",
  },
  {
    id: "human-protocols",
    title: "💚 Human Protocols",
    subtitle: "Social Impact",
    description:
      "In today's SaaS market, users are increasingly locked in by marginal improvements and price competition, relying on superficial convenience. The fact that technologies considered outdated—like fax machines—remain entrenched in everyday operations clearly demonstrates that mere tweaks in functionality cannot bring about true innovation.",
    longDescription:
      "Human Protocols is a track that directly confronts these daily discontents. We believe that instead of forcing people to adapt to cutting-edge technologies and services, technology should be aligned with humanity and human society. Beyond the pursuit of financial returns or an obsession with state-of-the-art technology, this track leverages the flexibility and programmability of Ethereum's decentralized system to explore innovative solutions grounded in the real world, human experience, social dynamics, and lifestyle. Here, we challenge existing paradigms and aim to return to the core values that users truly need.",
    additionalInfo:
      "We believe that the challenge of redefining things from the ground up—rather than settling for superficial improvements—is the key to enhancing our future quality of life. Human Protocols is a space for builders with a critical perspective on the status quo, who approach everyday challenges with fresh ideas. We invite you to join us in challenging conventional wisdom and, together, building a truly enriched society.",
    requirements: [
      "Real-World Impact Focus: Projects must tackle tangible everyday challenges—especially those arising from the superficial improvements and lock-in strategies of current SaaS—and offer transformative solutions that enhance real-life quality.",
      "User-Centric and Inclusive Design: Solutions should be designed from the ground up with genuine user needs in mind, ensuring intuitive, accessible experiences that address overlooked pain points in daily operations.",
      "Decentralized Innovation: Leverage Ethereum's decentralized infrastructure and smart contract capabilities to build systems that promote transparency, community governance, and flexible, open innovation.",
      "Feasibility on Decentralized Networks: Proposals must be implementable on Ethereum or other compatible networks, with clear technical pathways from concept to real-world application.",
      "Social and Ethical Impact: Beyond technical prowess, projects should aim to drive positive social change—challenging entrenched market paradigms, improving fairness, and upholding ethical standards in data privacy and user autonomy.",
      "Scalability and Sustainability: Solutions should demonstrate a clear vision for long-term viability and scalability, ensuring that the impact can grow from addressing individual pain points to broader societal benefits.",
      "Innovative and Open-Minded Approach: Embrace radical rethinking of existing systems and encourage an open source ethos, fostering collaborative improvement and creative breakthroughs that redefine what's possible in everyday life.",
    ],
    prize: "$3000",
  },
  {
    id: "counterculture",
    title: "✊ Counterculture Capital",
    subtitle: "Financial Innovation",
    description:
      "Five years after DeFi Summer, we've witnessed the evolution from simple token swaps to sophisticated financial instruments rivaling traditional markets in complexity and capability. From lending protocols to prediction markets that democratize forecasting and information discovery, DeFi continues to drive the ongoing financial revolution.",
    longDescription:
      "At ETHTokyo, we recognize that DeFi innovation represents the most profound challenge to established power structures in the global economy. DeFi remains the beating heart of Ethereum's revolutionary potential; behind the composable legos and liquidity pools lies a radical vision: financial services that operate without gatekeepers, accessible to anyone with an internet connection, transparent in their mechanics, and governed by their communities rather than centralized authorities.",
    additionalInfo:
      "This track welcomes builders who share this vision of democratizing access to sophisticated financial tools, who work to reimagine capital efficiency, create robust risk management systems, thoughtfully bridge institutional capital with DeFi principles, bring real-world assets on-chain, extend financial services to the unbanked, or develop governance models that truly embody decentralized ideals—united by a shared vision of transforming finance for greater accessibility and equity.",
    requirements: [
      "Inclusive Architecture: Demonstrate your solution removes barriers to participation for typically marginalized populations, not just optimizing for the already-privileged.",
      "Security as Freedom: Approach security not merely as technical robustness but as protection of user autonomy and economic sovereignty.",
      "True Interoperability: Design for genuine ecosystem collaboration rather than siloed value capture, rejecting the extractive patterns of traditional finance.",
      "Cooperative Scaling: Address scaling in ways that distribute benefits across all users rather than concentrating advantages to large capital holders.",
      "Radical Transparency: Go beyond open source to create systems where operations, governance, and economics are comprehensible to average users, not just technical experts.",
      "Regulation Reimagined: Rather than simply complying with existing frameworks which were established far before DeFi existed, articulate how your project might inform a more equitable regulatory future.",
    ],
    prize: "$3000",
  },
];

// ブログデータ
export const blogData = [
  {
    id: "expectations",
    title: "What to Expect at ETH Tokyo",
    date: "Jan 2025",
  },
  {
    id: "speakers",
    title: "Speaker Lineup Announced",
    date: "Feb 2025",
  },
  {
    id: "preparation",
    title: "Preparing for Your Visit",
    date: "Mar 2025",
  },
];

// アーカイブデータ
export const archiveData = [
  {
    id: "2024",
    title: "ETH Tokyo 2024",
    description: "Recap & Highlights",
  },
  {
    id: "2023",
    title: "ETH Tokyo 2023",
    description: "Photos, Videos & Talks",
  },
];

// 会場データ
export const venueData = {
  name: "Tokyo International Forum",
  description:
    "Located in the heart of Tokyo, the International Forum provides a perfect blend of modern facilities and traditional Japanese architecture.",
  address: "3-5-1 Marunouchi, Chiyoda-ku, Tokyo",
  hours: "9:00 AM - 6:00 PM",
  facilities: "Free Wi-Fi, Cafes, Co-working Spaces",
};

// イベントパートナーデータ
export const eventPartnersData = [
  {
    partnerName: "Toban",
    website: "https://github.com/hackdays-io/toban/",
    logoFile: "toban-logo-text.svg",
  },
  {
    partnerName: "KON",
    website: "https://kon.xyz/",
    logoFile: "kon.png",
  },
  {
    partnerName: "TAIKAI",
    website: "https://taikai.network/",
    logoFile: "taikai.svg",
  },
  {
    partnerName: "Kismet Casa",
    website: "https://kismetcasa.xyz/",
    logoFile: "kismet_logo.png",
  },
  {
    partnerName: "ZK Tokyo",
    website: "https://x.com/zk_tokyo",
    logoFile: "zktokyo.png",
  },
  {
    partnerName: "AKINDO",
    website: "https://akindo.io/",
    logoFile: "akindo.svg",
  },
];

// メディアパートナーデータ
export const mediaPartnersData = [
  {
    partnerName: "neweconomy",
    website: "https://www.neweconomy.jp/",
    logoFile: "neweconomy_bk.png",
  },
  {
    partnerName: "CoinRank",
    website: "https://www.coinrank.io/",
    logoFile: "coinrank.svg",
  },
  {
    partnerName: "Crypto Times",
    website: "https://www.cryptotimes.io/",
    logoFile: "cryptotimes.png",
  },
  {
    partnerName: "CoinPost",
    website: "https://coinpost.jp/",
    logoFile: "coinpost_logo.png",
  },
  {
    partnerName: "CoinDesk",
    website: "https://www.coindesk.com/",
    logoFile: "coindesk_jp.png",
  },
];

// スポンサーデータ
export const platinumSponsorsData = [
  {
    partnerName: "Japan Smart Chain",
    website: "https://japansmartchain.com/",
    logoFile: "JSC-Logo.png",
  },
];

export const goldSponsorsData = [
  {
    partnerName: "ens",
    website: "https://ens.domains/",
    logoFile: "ens-logo-Blue.svg",
  },
];

export const silverSponsorsData = [
  {
    partnerName: "Myna Wallet",
    website: "https://www.mynawallet.jp/",
    logoFile: "Myna-logo.png",
  },
  {
    partnerName: "Stormbit",
    website: "https://stormbit.finance/",
    logoFile: "Stormbit-logo.svg",
  },
];

export const communitySponsorsData = [
  {
    partnerName: "Base Japan",
    website: "https://basejapan.notion.site/",
    logoFile: "basejapan_blue_transparent.png",
  },
  {
    partnerName: "UNCHAIN",
    website: "https://unchain.tech",
    logoFile: "UNCHAIN_logo.png",
  },
  {
    partnerName: "mind palace",
    website: "https://mindpalace.jp/",
    logoFile: "mindpalace.svg",
  },
  {
    partnerName: "ETHJKT",
    website: "https://ethjkt.com/",
    logoFile: "tulisan.png",
  },
  {
    partnerName: "Curvegrid Inc.",
    website: "http://www.curvegrid.com",
    logoFile: "curvegrid-logo-horizontal-transparent (2).svg",
  },
  {
    partnerName: "Shinsei Galverse",
    website: "https://www.galverse.art/",
    logoFile: "large.png",
  },
  {
    partnerName: "HAKFLOW",
    website: "https://hakflow.com",
    logoFile: "hakflow.jpg",
  },
  {
    partnerName: "Amagi",
    website: "https://amagi.digital/",
    logoFile: "amagidigital.jpg",
  },
  {
    partnerName: "vinyl",
    website: "https://x.com/vvinyll",
    logoFile: "PudgyPenguins.png",
  },
];
