import { mq } from "@/themes/settings/breakpoints";
import {
  containerStyle,
  headingStyle,
  partnersSectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";
import { Temp_formSection } from "./AboutSection";

const PartnersSection: FC = () => {
  const partnersStyle = css`
    background: white;
    text-align: center;
    padding-bottom: 2rem;
  `;

  const partnersLogosGridStyle = css`
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

  const partnersLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  const partnersLogoStyleMiddle = css`
    height: 90px;
    max-width: 100%;
    object-fit: contain;
  `;

  const partnersLogoStyleWide = css`
    height: 80px;
    max-width: 100%;
    padding-bottom: 1rem;
    object-fit: contain;
  `;

  const PartnerLogo = (props: {
    partnerType:
      | "event"
      | "media"
      | "platinum"
      | "gold"
      | "silver"
      | "community";
    partnerName: string;
    website: string;
    logoFile: string;
  }) => (
    <a href={props.website} target="_blank" rel="noopener noreferrer">
      <img
        src={`2025/images/${props.partnerType}Partners/${props.logoFile}`}
        alt={`${props.partnerName} logo`}
        css={partnersLogoStyle}
      />
    </a>
  );

  return (
    <>
      <section css={[partnersSectionStyle, partnersStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Event Partners</h2>
          <div css={partnersLogosGridStyle}>
            <PartnerLogo
              partnerType="event"
              partnerName="Toban"
              website="https://github.com/hackdays-io/toban/"
              logoFile="toban-logo-text.svg"
            />
            <PartnerLogo
              partnerType="event"
              partnerName="KON"
              website="https://kon.xyz/"
              logoFile="kon.png"
            />
            <PartnerLogo
              partnerType="event"
              partnerName="TAIKAI"
              website="https://taikai.network/"
              logoFile="taikai.svg"
            />
            <PartnerLogo
              partnerType="event"
              partnerName="Kismet Casa"
              website="https://kismetcasa.xyz/"
              logoFile="kismet_logo.png"
            />
            <PartnerLogo
              partnerType="event"
              partnerName="ZK Tokyo"
              website="https://x.com/zk_tokyo"
              logoFile="zktokyo.png"
            />
            <PartnerLogo
              partnerType="event"
              partnerName="AKINDO"
              website="https://akindo.io/"
              logoFile="akindo.svg"
            />
          </div>
        </div>
      </section>

      <section css={[partnersSectionStyle, partnersStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Media Partners</h2>
          <div css={partnersLogosGridStyle}>
            <PartnerLogo
              partnerType="media"
              partnerName="neweconomy"
              website="https://www.neweconomy.jp/"
              logoFile="neweconomy_bk.png"
            />
            <PartnerLogo
              partnerType="media"
              partnerName="CoinRank"
              website="https://www.coinrank.io/"
              logoFile="coinrank.svg"
            />
            <PartnerLogo
              partnerType="media"
              partnerName="Crypto Times"
              website="https://www.cryptotimes.io/"
              logoFile="cryptotimes.png"
            />
            <PartnerLogo
              partnerType="media"
              partnerName="CoinPost"
              website="https://coinpost.jp/"
              logoFile="coinpost_logo.png"
            />
            <PartnerLogo
              partnerType="media"
              partnerName="CoinDesk"
              website="https://www.coindesk.com/"
              logoFile="coindesk_jp.png"
            />
          </div>
        </div>
      </section>

      <div css={css`background: white;`}>
        <Temp_formSection />
      </div>
    </>
  );
};

export default PartnersSection;
