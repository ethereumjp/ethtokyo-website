import {
  containerStyle,
  headingStyle,
  sectionStyle,
  partnersSectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";

const MediaPartnersSection: FC = () => {
  const mediaPartnersStyle = css`
    background: white;
    text-align: center;
    padding-bottom: 4rem;
  `;

  const mediaPartnersLogosStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
    margin-top: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  `;

  const mediaPartnersLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  return (
    <section css={[partnersSectionStyle, mediaPartnersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Media Partners</h2>
        <div css={mediaPartnersLogosStyle}>
          <img
            src="2025/images/mediaPartners/coindesk_jp.png"
            alt="Media Partners coindesk"
            css={mediaPartnersLogoStyle}
          />
          <img
            src="2025/images/mediaPartners/cryptotimes.png"
            alt="Media Partners cryptotimes"
            css={mediaPartnersLogoStyle}
          />
          <img
            src="2025/images/mediaPartners/coinrank.svg"
            alt="Media Partners coinrank"
            css={mediaPartnersLogoStyle}
          />
          {/* <img
            src="2025/images/eventPartners/kon.png"
            alt="Media Partners "
            css={mediaPartnersLogoStyle}
          />
          <img
            src="2025/images/eventPartners/toban-logo-text.svg"
            alt="Media Partners "
            css={mediaPartnersLogoStyle}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;
