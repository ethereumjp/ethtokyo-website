import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import Button from "@/components/common/Button";
import { eventInfoStyle, infoItemStyle } from "@/themes/styles/common";
import { css } from "@emotion/react";
import Image from "next/image";
import ThemeImage from "public/2025/images/keyvisual.png";
import ETHTokyoLogo from "public/assets/ETHTokyoLogo.png";
import type { FC } from "react";

const HeroSection: FC = () => {
  const sectionStyle = css`
    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${themeLight.Background};

    @supports (height: 100dvh) {
      height: 100dvh;
    }
  `;

  const backgroundStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  `;

  const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg, 
      rgba(255, 238, 204, 0.7) 0%, 
      rgba(85, 34, 102, 0.7) 100%
    );
    z-index: 1;
  `;

  const techGraphicStyle = css`
    position: absolute;
    z-index: 1;
  `;

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 0 1rem;
    padding-top: 8rem;
    
    ${mq.mobile} {
      padding: 0 1.5rem;
      padding-top: 9rem;
    }
    
    ${mq.tablet} {
      padding: 0 2rem;
      padding-top: 10rem;
    }
    
    ${mq.laptop} {
      padding-top: 11rem;
    }
  `;

  const logoContainerStyle = css`
    position: relative;
    max-width: 200px;
    height: 120px;
    margin: 0 auto 1.5rem;
    display: flex;
    justify-content: center;
    
    ${mq.mobile} {
      max-width: 220px;
      height: 130px;
      margin: 0 auto 1.75rem;
    }
    
    ${mq.tablet} {
      max-width: 250px;
      height: 150px;
      margin: 0 auto 2rem;
    }
    
    ${mq.laptop} {
      max-width: 300px;
    }
  `;

  const headingStyle = css`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${brand.Secondary};
    margin-bottom: 1rem;
    
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

  const titleAccentStyle = css`
    color: ${brand.Primary};
  `;

  const subheadingStyle = css`
    font-size: 1.25rem;
    color: ${neutral.Grey4};
    margin-bottom: 1.5rem;
    
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

  const buttonContainerStyle = css`
    margin-top: 1.5rem;
    margin-bottom: 6rem;
    
    ${mq.mobile} {
      margin-top: 1.75rem;
      margin-bottom: 7rem;
    }
    
    ${mq.tablet} {
      margin-top: 2rem;
      margin-bottom: 8rem;
    }
    
    ${mq.laptop} {
      margin-bottom: 9rem;
    }
  `;

  return (
    <section css={sectionStyle}>
      <div css={backgroundStyle}>
        <div
          css={css`
          position: relative;
          width: 100%;
          height: 100%;
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
        <h1 css={headingStyle}>
          ETHTokyo
          <span css={titleAccentStyle}> ’25</span>
        </h1>
        <p css={subheadingStyle}>Technology for Humanity</p>
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
        <div css={buttonContainerStyle}>
          <Button
            size="large"
            icon={
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
                <title>Register</title>
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            }
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
