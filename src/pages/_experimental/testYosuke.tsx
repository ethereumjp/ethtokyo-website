import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import type { FC } from "react";

// ヒーローセクション
const HeroSection: FC = () => {
  const sectionStyle = css`
    background: linear-gradient(to bottom right, #e0e0ff, #fff);
    padding: 6rem 2rem;
    text-align: center;
  `;

  const headingStyle = css`
    font-size: 3rem;
    color: ${brand.Secondary};
    margin-bottom: 1rem;
  `;

  const subtitleStyle = css`
    font-size: 1.25rem;
    margin: 1rem 0;
    color: #555;
  `;

  const eventInfoStyle = css`
    margin: 1.5rem 0;
  `;

  const eventInfoSpanStyle = css`
    margin: 0 1rem;
    display: inline-block;
    font-size: 0.95rem;
    color: #666;
    
    ${mq.mobile} {
      display: inline-block;
    }
    
    @media (max-width: 600px) {
      display: block;
      margin: 0.5rem 0;
    }
  `;

  const buttonStyle = css`
    display: inline-block;
    margin-top: 2rem;
    background: ${brand.Primary};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: background 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
      background: #e34c4c;
    }
  `;

  return (
    <section css={sectionStyle}>
      <h1 css={headingStyle}>ETH Tokyo 2025</h1>
      <p css={subtitleStyle}>
        The premier Ethereum event in Asia, coming to Tokyo in Spring 2025
      </p>
      <div css={eventInfoStyle}>
        <span css={eventInfoSpanStyle}>April 18–20, 2025</span>
        <span css={eventInfoSpanStyle}>Tokyo International Forum</span>
      </div>
      <a href="/register" css={buttonStyle}>
        Register Now
      </a>
    </section>
  );
};

// セクション共通スタイル
const sectionStyle = css`
  padding: 4rem 2rem;
  background: ${themeLight.Background};
`;

const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const headingStyle = css`
  text-align: center;
  color: ${brand.Secondary};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const multiGridStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const cardStyle = css`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  flex: 1 1 220px;
  max-width: 280px;
  text-align: center;
`;

const cardHeadingStyle = css`
  margin: 0;
  font-size: 1.5rem;
  color: ${brand.Secondary};
`;

const cardParagraphStyle = css`
  margin: 0.5rem 0 0;
  color: #777;
`;

// スピーカーセクション
const FeaturedSpeakersSection: FC = () => {
  return (
    <section css={sectionStyle} id="featured-speakers">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Featured Speakers</h2>
        <div css={multiGridStyle}>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Vitalik Buterin</h3>
            <p css={cardParagraphStyle}>Ethereum Co-founder</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Aya Miyaguchi</h3>
            <p css={cardParagraphStyle}>Executive Director, EF</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Hudson Jameson</h3>
            <p css={cardParagraphStyle}>Ethereum Community</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// セッションセクション
const FeaturedSessionsSection: FC = () => {
  return (
    <section css={sectionStyle} id="featured-sessions">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Featured Sessions</h2>
        <div css={multiGridStyle}>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>ZKPs in Practice</h3>
            <p css={cardParagraphStyle}>Deep dive into Zero-Knowledge Proofs</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Rollups vs L2s</h3>
            <p css={cardParagraphStyle}>Scalability wars continue</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Eth & Regulation</h3>
            <p css={cardParagraphStyle}>Policy shaping the ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// アーカイブセクション
const ArchiveSection: FC = () => {
  return (
    <section css={sectionStyle} id="archive">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Archive</h2>
        <div css={multiGridStyle}>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>ETH Tokyo 2024</h3>
            <p css={cardParagraphStyle}>Recap & Highlights</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>ETH Tokyo 2023</h3>
            <p css={cardParagraphStyle}>Photos, Videos & Talks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// トラックセクション
const TracksSection: FC = () => {
  return (
    <section css={sectionStyle} id="tracks">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Tracks</h2>
        <div css={multiGridStyle}>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>DeFi</h3>
            <p css={cardParagraphStyle}>Finance reinvented</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>DAOs</h3>
            <p css={cardParagraphStyle}>Decentralized Governance</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Security</h3>
            <p css={cardParagraphStyle}>Smart Contract Safety</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Scalability</h3>
            <p css={cardParagraphStyle}>Layer 2 and beyond</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ブログセクション
const BlogSection: FC = () => {
  return (
    <section css={sectionStyle} id="blog">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Blog</h2>
        <div css={multiGridStyle}>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>What to Expect at ETH Tokyo</h3>
            <p css={cardParagraphStyle}>Jan 2025</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Speaker Lineup Announced</h3>
            <p css={cardParagraphStyle}>Feb 2025</p>
          </div>
          <div css={cardStyle}>
            <h3 css={cardHeadingStyle}>Preparing for Your Visit</h3>
            <p css={cardParagraphStyle}>Mar 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// スポンサーセクション
const SponsorsSection: FC = () => {
  const sponsorsStyle = css`
    background: white;
    text-align: center;
  `;

  const sponsorsLogosStyle = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  `;

  const sponsorLogoStyle = css`
    height: 60px;
    object-fit: contain;
    max-width: 100%;
  `;

  return (
    <section css={[sectionStyle, sponsorsStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Our Sponsors</h2>
        <div css={sponsorsLogosStyle}>
          <img src="/sponsor1.png" alt="Sponsor 1" css={sponsorLogoStyle} />
          <img src="/sponsor2.png" alt="Sponsor 2" css={sponsorLogoStyle} />
          <img src="/sponsor3.png" alt="Sponsor 3" css={sponsorLogoStyle} />
          <img src="/sponsor4.png" alt="Sponsor 4" css={sponsorLogoStyle} />
        </div>
      </div>
    </section>
  );
};

// 会場セクション
const VenueSection: FC = () => {
  const venueStyle = css`
    background: white;
    padding: 4rem 2rem;
    text-align: center;
  `;

  const venueParagraphStyle = css`
    font-size: 1.125rem;
    color: ${neutral.Grey4};
    max-width: 800px;
    margin: 0 auto;
  `;

  return (
    <section css={venueStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Venue</h2>
        <p css={venueParagraphStyle}>
          Tokyo International Forum, located in the heart of Marunouchi, will
          host ETH Tokyo 2025. It's easily accessible and fully equipped for a
          world-class experience.
        </p>
      </div>
    </section>
  );
};

// フッターセクション
const FooterSection: FC = () => {
  const footerStyle = css`
    background: #1a1a1a;
    color: white;
    padding: 3rem 2rem;
  `;

  const footerGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  `;

  const footerColumnStyle = css`
    flex: 1;
    min-width: 200px;
  `;

  const footerHeadingStyle = css`
    margin-bottom: 1rem;
    font-size: 1.25rem;
  `;

  const footerLinkStyle = css`
    color: #ccc;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
    
    &:hover {
      color: white;
    }
  `;

  return (
    <footer css={footerStyle}>
      <div css={containerStyle}>
        <div css={footerGridStyle}>
          <div css={footerColumnStyle}>
            <h4 css={footerHeadingStyle}>ETH Tokyo</h4>
            <p>&copy; 2025 ETH Global</p>
          </div>
          <div css={footerColumnStyle}>
            <h4 css={footerHeadingStyle}>Quick Links</h4>
            <a href="/" css={footerLinkStyle}>
              Home
            </a>
            <a href="/schedule" css={footerLinkStyle}>
              Schedule
            </a>
            <a href="/speakers" css={footerLinkStyle}>
              Speakers
            </a>
          </div>
          <div css={footerColumnStyle}>
            <h4 css={footerHeadingStyle}>Follow Us</h4>
            <a href="https://twitter.com/ethtokyo" css={footerLinkStyle}>
              Twitter
            </a>
            <a href="https://github.com/ethtokyo" css={footerLinkStyle}>
              GitHub
            </a>
            <a href="https://discord.gg/ethtokyo" css={footerLinkStyle}>
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="ETHTokyo 2025">
      <HeroSection />
      <FeaturedSpeakersSection />
      <FeaturedSessionsSection />
      <ArchiveSection />
      <TracksSection />
      <BlogSection />
      <SponsorsSection />
      <VenueSection />
      <FooterSection />
    </Layout>
  );
};

export default Page;
