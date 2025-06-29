import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";

const EventPartnersSection: FC = () => {
  const eventPartnersStyle = css`
    background: white;
    text-align: center;
  `;

  const eventPartnersLogosStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    margin-top: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;

  const eventPartnersLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  return (
    <section css={[sectionStyle, eventPartnersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Event Partners</h2>
        <div css={eventPartnersLogosStyle}>
          <img
            src="2025/images/eventPartners/Devfolio_logo.svg"
            alt="Event Partners Devfolio"
            css={eventPartnersLogoStyle}
          />
          <img
            src="2025/images/eventPartners/kismet_logo.png"
            alt="Event Partners Kismet"
            css={eventPartnersLogoStyle}
          />
          <img
            src="2025/images/eventPartners/zktokyo.png"
            alt="Event Partners ZKTokyo"
            css={eventPartnersLogoStyle}
          />
          <img
            src="2025/images/eventPartners/kon.png"
            alt="Event Partners Kon"
            css={eventPartnersLogoStyle}
          />
          <img
            src="2025/images/eventPartners/toban-logo-text.svg"
            alt="Event Partners Toban"
            css={eventPartnersLogoStyle}
          />
          <img
            src="2025/images/eventPartners/akindo.svg"
            alt="Event Partners AKINDO"
            css={eventPartnersLogoStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default EventPartnersSection;
