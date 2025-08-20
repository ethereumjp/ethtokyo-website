import Button from "@/components/common/Button";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { eventInfoStyle, infoItemStyle } from "@/themes/styles/common";
import { css } from "@emotion/react";
import Image from "next/image";
import type { FC } from "react";
import { BiIdCard } from "react-icons/bi";
import ThemeImage from "/public/2025/images/keyvisual.png";
import ETHTokyoLogo from "/public/assets/ETHTokyoLogo.png";

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
    background-color: rgba(0, 0, 0, 0.4);
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
    padding: 0 1rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
    position: relative;
    text-align: center;
    z-index: 2;
    
    ${mq.mobile} {
      padding: 0 1.5rem;
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
    
    ${mq.tablet} {
      padding: 0 2rem;
      padding-top: 6rem;
      padding-bottom: 3rem;
    }
    
    ${mq.laptop} {
      padding-top: 7rem;
      padding-bottom: 4rem;
    }
  `;

  const logoContainerStyle = css`
    display: flex;
    height: 120px;
    justify-content: center;
    margin: 0 auto 1.5rem;
    max-width: 200px;
    position: relative;
    
    ${mq.mobile} {
      height: 130px;
      margin: 0 auto 1.75rem;
      max-width: 220px;
    }
    
    ${mq.tablet} {
      height: 150px;
      margin: 0 auto 2rem;
      max-width: 250px;
    }
    
    ${mq.laptop} {
      max-width: 300px;
    }
  `;

  const textShadowStyle = css`
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  `;

  const headingStyle = css`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${neutral.White};
    margin-bottom: 1rem;
    ${textShadowStyle}
    
    ${mq.mobile} {
      font-size: 3rem;
      margin-bottom: 1.25rem;
    }
    
    ${mq.tablet} {
      font-size: 3.75rem;
      margin-bottom: 1.5rem;
    }
    
    ${mq.laptop} {
      font-size: 6rem;
      margin-top: 1rem;
    }
  `;

  const subheadingStyle = css`
    font-size: 1.25rem;
    color: ${neutral.White};
    margin-bottom: 1.5rem;
    ${textShadowStyle}
    
    ${mq.mobileSmall} {
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    
    ${mq.mobile} {
      font-size: 1.125rem;
      margin-bottom: 1.75rem;
    }
    
    ${mq.tablet} {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    
    ${mq.laptop} {
      font-size: 1.875rem;
    }
  `;

  const eventInfoContainerStyle = css`
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: ${neutral.White};
    ${textShadowStyle}
    
    ${mq.mobile} {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }
    
    ${mq.tablet} {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
    
    ${mq.laptop} {
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
  `;

  const buttonContainerStyle = css`
    margin-top: 1.5rem;
    
    ${mq.mobile} {
      margin-top: 2rem;
    }
    
    ${mq.tablet} {
      margin-top: 0.5rem;
    }
    
    ${mq.laptop} {
      margin-top: 0.5rem;
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
              filter: "blur(2px)",
            }}
          />
        </div>
        <div css={overlayStyle} />
      </div>
      <div css={techGraphicStyle}>
        {/* TechGraphic component will be implemented later */}
      </div>
      <div css={containerStyle}>
        <div css={logoContainerStyle}>
          <Image
            src={ETHTokyoLogo}
            alt="ETHTokyo Logo"
            width={300}
            height={150}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h1 css={headingStyle}>ETHTokyo '25</h1>
        <p css={subheadingStyle}>
          Emancipatory Tech for the Future of Humanity
        </p>
        <div css={[eventInfoStyle, eventInfoContainerStyle]}>
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
            <span>September 12-15, 2025</span>
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
          {/* <div css={infoItemStyle}>
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
          </div> */}
        </div>
        <div css={buttonContainerStyle}>
          <Button
            href="https://app.moongate.id/e/ethtokyo2025"
            external
            size="large"
            icon={<BiIdCard />}
          >
            <span
              css={css`
                  color: ${neutral.White};
                `}
            >
              Get Ticket
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
