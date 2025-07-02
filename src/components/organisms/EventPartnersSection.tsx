import {
  containerStyle,
  headingStyle,
  partnersSectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";

const EventPartnersSection: FC = () => {
  const eventPartnersStyle = css`
    background: white;
    text-align: center;
  `;

  const eventPartnersLogosGridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 0rem 2.5rem;
    justify-items: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
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
        <div css={eventPartnersLogosGridStyle}>
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
          <img
            src="2025/images/eventPartners/kon.png"
            alt="Event Partners KON"
            css={eventPartnersLogoStyleMiddle}
          />
          <img
            src="2025/images/eventPartners/kismet_logo.png"
            alt="Event Partners Kismet Casa"
            css={eventPartnersLogoStyleMiddle}
          />
          <img
            src="2025/images/eventPartners/zktokyo.png"
            alt="Event Partners ZK Tokyo"
            css={eventPartnersLogoStyleWide}
          />
        </div>
      </div>
    </section>
  );
};

export default EventPartnersSection;
