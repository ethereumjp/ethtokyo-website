import {
  containerStyle,
  headingStyle,
  sectionStyle,
  partnersSectionStyle,
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

  const eventPartnersLogosStyle2 = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 160px;
    gap: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;

  const eventPartnersLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  const eventPartnersLogoStyleMiddle = css`
    height: 90px;
    max-width: 100%;
    object-fit: contain;
  `;

  const eventPartnersLogoStyleWide = css`
    height: 150px;
    max-width: 100%;
    padding-bottom: 2rem;
    object-fit: contain;
  `;

  return (
    <section css={[partnersSectionStyle, eventPartnersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Event Partners</h2>
        <div css={eventPartnersLogosStyle}>
          <img
            src="2025/images/eventPartners/Devfolio_logo.svg"
            alt="Event Partners Devfolio"
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
        <div css={eventPartnersLogosStyle2}>
          <img
            src="2025/images/eventPartners/kon.png"
            alt="Event Partners Kon"
            css={eventPartnersLogoStyleMiddle}
          />
          <img
            src="2025/images/eventPartners/kismet_logo.png"
            alt="Event Partners Kismet"
            css={eventPartnersLogoStyleMiddle}
          />
          <img
            src="2025/images/eventPartners/zktokyo.png"
            alt="Event Partners ZKTokyo"
            css={eventPartnersLogoStyleWide}
          />
        </div>
      </div>
    </section>
  );
};

export default EventPartnersSection;
