import {
  containerStyle,
  headingStyle,
  partnersSectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";

const MediaPartnersSection: FC = () => {
  const mediaPartnersStyle = css`
    background: white;
    text-align: center;
  `;

  const mediaPartnersLogosGridStyle = css`
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

  const mediaPartnersLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  const mediaPartnersLogoStyleWide = css`
    height: 150px;
    max-width: 100%;
    padding-bottom: 0rem;
    object-fit: contain;
  `;

  return (
    <section css={[partnersSectionStyle, mediaPartnersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Media Partners</h2>
        <div css={mediaPartnersLogosGridStyle}>
          <img
            src="2025/images/mediaPartners/neweconomy_bk.png"
            alt="Media Partners neweconomy"
            css={mediaPartnersLogoStyle}
          />
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
          <img
            src="2025/images/mediaPartners/coinpost_logo.png"
            alt="Media Partners CoinPost"
            css={mediaPartnersLogoStyleWide}
          />
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;
