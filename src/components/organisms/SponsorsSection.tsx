import {
  communitySponsorsData,
  goldSponsorsData,
  platinumSponsorsData,
  silverSponsorsData,
} from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import {
  containerStyle,
  headingStyle,
  partnersSectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import Image from "next/image";
import type { FC } from "react";
import { Temp_formSection } from "./AboutSection";

const SponsorsSection: FC = () => {
  const sponsorsStyle = css`
    background: white;
    text-align: center;
    padding-bottom: 2rem;
  `;

  const platinumLogosGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    padding-top: 1rem;
    width: 100%;

    ${mq.mobileSmall} {
      gap: 2rem;
    }
  `;

  const goldLogosGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;

    ${mq.mobileSmall} {
      gap: 2rem;
    }
  `;

  const silverLogosGridStyle = css`
    display: wrap;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;

    ${mq.mobileSmall} {
      gap: 1.5rem;
    }
  `;

  const communityLogosGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;

    ${mq.mobileSmall} {
      gap: 1.5rem;
    }
  `;

  const cs = css`
    padding-top: 2.5rem;
  `;

  const platinumLogoStyle = css`
    height: 120px;
    max-width: 100%;
    object-fit: contain;
    padding: 0 40px;
  `;

  const goldLogoStyle = css`
    height: 100px;
    max-width: 100%;
    object-fit: contain;
    padding: 0 20px;

    ${mq.mobileSmall} {
      height: 120px;
      max-width: 90%;
    }
  `;

  const largeGoldLogoStyle = css`
    height: 140px !important;
    max-width: 100% !important;
    object-fit: contain !important;
    transform: scale(1.2) !important;
    margin: 20px !important;
    z-index: 10 !important;

    ${mq.mobileSmall} {
      height: 120px !important;
      transform: scale(1.0) !important;
      margin: 10px !important;
      max-width: 90% !important;
    }
  `;

  const ensLogoStyle = css`
    height: 100px;
    max-width: 100%;
    object-fit: contain;

    ${mq.mobileSmall} {
      height: 80px !important;
      max-width: 80% !important;
    }
  `;

  const silverLogoStyle = css`
    height: 90px;
    max-width: 100%;
    object-fit: contain;
  `;

  const communityLogoStyle = css`
    height: 80px;
    max-width: 100%;
    object-fit: contain;
  `;

  const largeCommunityLogoStyle = css`
    height: 120px;
    max-width: 100%;
    object-fit: contain;
  `;

  const SponsorLogo = (props: {
    sponsorType: "platinum" | "gold" | "silver" | "community";
    sponsorName: string;
    website: string;
    logoFile: string;
  }) => {
    // Ethereum JakartaとCurvegrid Inc.のロゴを大きく表示
    const isLargeLogo =
      props.sponsorName === "Ethereum Jakarta (ethjkt)" ||
      props.sponsorName === "Curvegrid Inc.";

    // Geodeworkのロゴを大きく表示
    const isLargeGoldLogo = props.sponsorName === "Geodework";

    // ensのロゴも特別に処理
    const isEnsLogo = props.sponsorName === "ens";

    return (
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <Image
          src={`/2025/images/${props.sponsorType}Sponsors/${props.logoFile}`}
          alt={`${props.sponsorName} logo`}
          css={
            props.sponsorType === "platinum"
              ? platinumLogoStyle
              : props.sponsorType === "gold"
                ? isLargeGoldLogo
                  ? largeGoldLogoStyle // Geodework専用の大きなサイズを使用
                  : isEnsLogo
                    ? ensLogoStyle // ens専用のスタイルを使用
                    : goldLogoStyle
                : props.sponsorType === "silver"
                  ? silverLogoStyle
                  : isLargeLogo
                    ? largeCommunityLogoStyle
                    : communityLogoStyle
          }
          width={
            props.sponsorType === "platinum"
              ? 300
              : props.sponsorType === "gold"
                ? 240
                : props.sponsorType === "silver"
                  ? 200
                  : 160
          }
          height={
            props.sponsorType === "platinum"
              ? 300
              : props.sponsorType === "gold"
                ? 240
                : props.sponsorType === "silver"
                  ? 200
                  : 160
          }
        />
      </a>
    );
  };

  return (
    <>
      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={[containerStyle, cs]}>
          <h2 css={headingStyle}>Platinum Sponsors</h2>
          <div css={platinumLogosGridStyle}>
            {platinumSponsorsData.map((sponsor) => (
              <SponsorLogo
                key={sponsor.partnerName}
                sponsorType="platinum"
                sponsorName={sponsor.partnerName}
                website={sponsor.website}
                logoFile={sponsor.logoFile}
              />
            ))}
          </div>
        </div>
      </section>

      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Gold Sponsors</h2>
          <div css={goldLogosGridStyle}>
            {goldSponsorsData.map((sponsor) => (
              <SponsorLogo
                key={sponsor.partnerName}
                sponsorType="gold"
                sponsorName={sponsor.partnerName}
                website={sponsor.website}
                logoFile={sponsor.logoFile}
              />
            ))}
          </div>
        </div>
      </section>

      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Silver Sponsors</h2>
          <div css={silverLogosGridStyle}>
            {silverSponsorsData.map((sponsor) => (
              <SponsorLogo
                key={sponsor.partnerName}
                sponsorType="silver"
                sponsorName={sponsor.partnerName}
                website={sponsor.website}
                logoFile={sponsor.logoFile}
              />
            ))}
          </div>
        </div>
      </section>

      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={containerStyle}>
          <h2 css={headingStyle}>Community Sponsors</h2>
          <div css={communityLogosGridStyle}>
            {communitySponsorsData.map((sponsor) => (
              <SponsorLogo
                key={sponsor.partnerName}
                sponsorType="community"
                sponsorName={sponsor.partnerName}
                website={sponsor.website}
                logoFile={sponsor.logoFile}
              />
            ))}
          </div>
        </div>
      </section>
      <div css={css`background: white;`}>
        <Temp_formSection />
      </div>
    </>
  );
};

export default SponsorsSection;
