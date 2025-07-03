import { mq } from "@/themes/settings/breakpoints";
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
    padding-bottom: 2.5rem;
  `;

  const mediaPartnersLogosGridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 2rem 2.5rem;
    justify-items: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    ${mq.mobileSmall} {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
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
    ${mq.mobileSmall} {
      height: 60px;
      padding-bottom: 2rem;
    }
  `;

  return (
    <section css={[partnersSectionStyle, mediaPartnersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Media Partners</h2>
        <div css={mediaPartnersLogosGridStyle}>
          <a
            href="https://www.neweconomy.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/mediaPartners/neweconomy_bk.png"
              alt="Media Partners neweconomy"
              css={mediaPartnersLogoStyle}
            />
          </a>
          <a
            href="https://www.coinrank.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/mediaPartners/coinrank.svg"
              alt="Media Partners CoinRank"
              css={mediaPartnersLogoStyle}
            />
          </a>
          <a
            href="https://www.cryptotimes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/mediaPartners/cryptotimes.png"
              alt="Media Partners The Crypto Times"
              css={mediaPartnersLogoStyle}
            />
          </a>
          <a
            href="https://coinpost.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/mediaPartners/coinpost_logo.png"
              alt="Media Partners CoinPost"
              css={mediaPartnersLogoStyle}
            />
          </a>
          <a
            href="https://www.coindesk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/mediaPartners/coindesk_jp.png"
              alt="Media Partners CoinDesk"
              css={mediaPartnersLogoStyle}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;
