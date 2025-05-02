import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Image from "next/image";
import ThemeImage from "public/2025/images/keyvisual.png";
import ETHTokyoLogo from "public/assets/ETHTokyoLogo.png";
import type { FC } from "react";

// テクニカルグラフィック
const TechGraphic: FC = () => {
  // コンポーネントの実装がないようですが、残しておきます
  return null;
};

// ヒーローセクション
const HeroSection: FC = () => {
  const sectionStyle = css`
    align-items: center;
    background-color: ${themeLight.Background};
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%;

    @supports (height: 100dvh) {
      height: 100dvh;
    }
  `;

  const backgroundStyle = css`
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  `;

  const overlayStyle = css`
    background: linear-gradient(
      135deg, 
      rgba(255, 238, 204, 0.7) 0%, 
      rgba(85, 34, 102, 0.7) 100%
    );
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  `;

  const techGraphicStyle = css`
    position: absolute;
    z-index: 1;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 2rem;
    position: relative;
    text-align: center;
    z-index: 2;
  `;

  const logoStyle = css`
    height: auto;
    margin-bottom: 2rem;
    max-width: 250px;
    
    ${mq.tablet} {
      max-width: 300px;
    }
  `;

  const headingStyle = css`
    color: ${brand.Secondary};
    font-size: 3.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    ${mq.tablet} {
      font-size: 6rem;
    }
  `;

  const titleAccentStyle = css`
    color: ${brand.Primary};
  `;

  const subheadingStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.5rem;
    margin-bottom: 2rem;
    
    ${mq.tablet} {
      font-size: 1.875rem;
    }
  `;

  const eventInfoStyle = css`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    margin-bottom: 3rem;
    
    ${mq.tablet} {
      flex-direction: row;
    }
  `;

  const infoItemStyle = css`
    align-items: center;
    color: ${brand.Secondary};
    display: flex;
    gap: 0.5rem;
  `;

  const buttonStyle = css`
    align-items: center;
    background-color: ${brand.Primary};
    border-radius: 9999px;
    color: ${neutral.White};
    display: inline-flex;
    font-size: 1.25rem;
    gap: 0.5rem;
    padding: 1rem 2rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #FF7766;
    }
  `;

  return (
    <section css={sectionStyle}>
      <div css={backgroundStyle}>
        <div
          css={css`
          height: 100%;
          position: relative;
          width: 100%;
        `}
        >
          <Image
            src={ThemeImage}
            alt="ETHTokyo Background"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div css={overlayStyle} />
      </div>
      <div css={techGraphicStyle}>
        <TechGraphic />
      </div>
      <div css={containerStyle}>
        <div
          css={css`
          height: 150px;
          margin: 0 auto 2rem;
          max-width: 250px;
          position: relative;
          
          ${mq.tablet} {
            max-width: 300px;
          }
        `}
        >
          <Image
            src={ETHTokyoLogo}
            alt="ETHTokyo Logo"
            width={300}
            height={150}
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1 css={headingStyle}>
          ETHTokyo
          <span css={titleAccentStyle}>2025</span>
        </h1>
        <p css={subheadingStyle}>The Premier Ethereum Event in Asia</p>
        <div css={eventInfoStyle}>
          <div css={infoItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Calendar</title>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>April 15-21, 2025</span>
          </div>
          <div css={infoItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Location</title>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Tokyo, Japan</span>
          </div>
          <div css={infoItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Attendees</title>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>3000+ Attendees</span>
          </div>
        </div>
        <button type="button" css={buttonStyle}>
          Join the Revolution
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Arrow Right</title>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

// アバウトセクション
const AboutSection: FC = () => {
  const sectionStyle = css`
    background-color: ${neutral.White};
    padding: 5rem 1rem;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 1280px;
  `;

  const headingStyle = css`
    color: ${brand.Secondary};
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
  `;

  const contentContainerStyle = css`
    display: grid;
    gap: 3rem;
    
    ${mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const textContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `;

  const paragraphStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.125rem;
  `;

  const statsContainerStyle = css`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  `;

  const statBoxStyle = css`
    background-color: ${neutral.Grey1};
    border-radius: 0.75rem;
    padding: 1.5rem;
  `;

  const statNumberStyle = css`
    color: ${brand.Primary};
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  `;

  const statLabelStyle = css`
    color: ${neutral.Grey4};
  `;

  return (
    <section id="about" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>About ETHTokyo2025</h2>
        <div css={contentContainerStyle}>
          <div css={textContainerStyle}>
            <p css={paragraphStyle}>
              ETHTokyo2025 brings together developers, entrepreneurs, and crypto
              enthusiasts from across Asia and beyond for a week of learning,
              building, and connecting.
            </p>
            <p css={paragraphStyle}>
              Join us for workshops, hackathons, and keynotes from industry
              leaders as we shape the future of Web3 together.
            </p>
          </div>
          <div css={statsContainerStyle}>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>1000+</h3>
              <p css={statLabelStyle}>Developers</p>
            </div>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>100+</h3>
              <p css={statLabelStyle}>Speakers</p>
            </div>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>50+</h3>
              <p css={statLabelStyle}>Workshops</p>
            </div>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>$500K</h3>
              <p css={statLabelStyle}>In Prizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// スケジュールセクション
const ScheduleSection: FC = () => {
  const sectionStyle = css`
    background-color: ${themeLight.Background};
    overflow: hidden;
    padding: 5rem 1rem;
    position: relative;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 1280px;
  `;

  const headingStyle = css`
    color: ${brand.Secondary};
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
  `;

  const scheduleGridStyle = css`
    display: grid;
    gap: 2rem;
    
    ${mq.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const scheduleCardStyle = css`
    background-color: ${neutral.White};
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 2rem;
  `;

  const dayLabelStyle = css`
    color: ${brand.Primary};
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const eventTitleStyle = css`
    color: ${brand.Secondary};
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  `;

  const eventDescriptionStyle = css`
    color: ${neutral.Grey4};
  `;

  const scheduleData = [
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

  return (
    <section id="schedule" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Event Schedule</h2>
        <div css={scheduleGridStyle}>
          {scheduleData.map((item) => (
            <div key={item.id} css={scheduleCardStyle}>
              <div css={dayLabelStyle}>{item.day}</div>
              <h3 css={eventTitleStyle}>{item.title}</h3>
              <p css={eventDescriptionStyle}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 会場セクション
const VenueSection: FC = () => {
  const sectionStyle = css`
    background-color: ${brand.Secondary};
    color: ${neutral.White};
    overflow: hidden;
    padding: 5rem 1rem;
    position: relative;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 1280px;
    text-align: center;
  `;

  const headingStyle = css`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 3rem;
  `;

  const venueInfoStyle = css`
    margin-bottom: 2rem;
  `;

  const venueTitleStyle = css`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const venueDescriptionStyle = css`
    font-size: 1.125rem;
    margin: 0 auto;
    max-width: 800px;
    opacity: 0.8;
  `;

  const venueDetailsStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 3rem auto 0;
    max-width: 600px;
    
    ${mq.tablet} {
      flex-direction: row;
      justify-content: center;
    }
  `;

  const detailItemStyle = css`
    text-align: center;
    
    svg {
      margin-bottom: 0.5rem;
    }
  `;

  const detailTitleStyle = css`
    font-weight: 600;
    margin-bottom: 0.25rem;
  `;

  return (
    <section id="venue" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Venue</h2>
        <div css={venueInfoStyle}>
          <h3 css={venueTitleStyle}>Tokyo International Forum</h3>
          <p css={venueDescriptionStyle}>
            Located in the heart of Tokyo, the International Forum provides a
            perfect blend of modern facilities and traditional Japanese
            architecture.
          </p>
        </div>

        <div css={venueDetailsStyle}>
          <div css={detailItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Address</title>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div css={detailTitleStyle}>Address</div>
            <div>3-5-1 Marunouchi, Chiyoda-ku, Tokyo</div>
          </div>

          <div css={detailItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Event Hours</title>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div css={detailTitleStyle}>Event Hours</div>
            <div>9:00 AM - 6:00 PM</div>
          </div>

          <div css={detailItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Facilities</title>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <div css={detailTitleStyle}>Facilities</div>
            <div>Free Wi-Fi, Cafes, Co-working Spaces</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Page: NextPage<PageProps> = ({ params, searchParams }) => {
  return (
    <Layout pageTitle="ETHTokyo 2025">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <VenueSection />
    </Layout>
  );
};

export default Page;
