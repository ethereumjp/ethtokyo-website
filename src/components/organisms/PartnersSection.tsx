import { eventPartnersData, mediaPartnersData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import {
  containerStyle,
  headingStyle,
  partnersSectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import Image from "next/image";
import type { FC } from "react";

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

  const partnersLogoStyleLarge = css`
    height: 90px;
    max-width: 100%;
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
  }) => {
    const logoStyle = partnersLogoStyle;

    return (
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/2025/images/${props.partnerType}Partners/${props.logoFile}`}
          alt={`${props.partnerName} logo`}
          css={logoStyle}
          width={180}
          height={180}
        />
      </a>
    );
  };

  return (
    <>
      <section css={[partnersSectionStyle, partnersStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Event Partners</h2>
          <div css={partnersLogosGridStyle}>
            {eventPartnersData.map((partner) => (
              <PartnerLogo
                key={partner.partnerName}
                partnerType="event"
                partnerName={partner.partnerName}
                website={partner.website}
                logoFile={partner.logoFile}
              />
            ))}
          </div>
        </div>
      </section>

      <section css={[partnersSectionStyle, partnersStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Media Partners</h2>
          <div css={partnersLogosGridStyle}>
            {mediaPartnersData.map((partner) => (
              <PartnerLogo
                key={partner.partnerName}
                partnerType="media"
                partnerName={partner.partnerName}
                website={partner.website}
                logoFile={partner.logoFile}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersSection;
