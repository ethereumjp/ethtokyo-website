import {
  communitySponsorsData,
  goldSponsorsData,
  platinumSponsorsData,
  silverSponsorsData,
  venueSupportData,
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
      justify-content: center;
    }
  `;

  const venueLogosGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
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
    justify-content: space-around;
    justify-items: center;
    align-items: center;
    width: 100%;

    ${mq.mobileSmall} {
      justify-content: center;
    }
  `;

  const silverLogosGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    ${mq.mobileSmall} {
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
  `;

  const communityLogosGridStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;

    ${mq.mobileSmall} {
      gap: 0.75rem;
    }
  `;

  const cs = css`
    padding-top: 2.5rem;
  `;

  const platinumLogoStyle = css`
    height: 120px;
    max-width: 100%;
    object-fit: contain;
  `;

  const venueLogoStyle = css`
    height: 120px;
    max-width: 100%;
    object-fit: contain;
  `;

  const goldLogoStyle = css`
    max-width: 100%;
    object-fit: contain;
  `;

  const largeGoldLogoStyle = css`
    max-width: 100% !important;
    object-fit: contain !important;
    transform: scale(1.2) !important;
    z-index: 10 !important;

    ${mq.mobileSmall} {
      transform: scale(1.0) !important;
      max-width: 90% !important;
    }
  `;

  const ensLogoStyle = css`
    height: 100px;
    max-width: 100%;
    object-fit: contain;

    ${mq.mobileSmall} {
      height: 70px !important;
      max-width: 80% !important;
    }
  `;

  const silverLogoStyle = css`
    height: 90px;
    max-width: 100%;
    object-fit: contain;

    ${mq.mobileSmall} {
      height: 70px;
    }
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
    sponsorType: "venue" | "platinum" | "gold" | "silver" | "community";
    sponsorName: string[];
    website: string[];
    logoFile: string[];
  }) => {
    // Ethereum JakartaとCurvegrid Inc.のロゴを大きく表示
    const isLargeLogo =
      props.sponsorName[0] === "Ethereum Jakarta (ethjkt)" ||
      props.sponsorName[0] === "Curvegrid Inc.";

    // Geodeworkのロゴを大きく表示
    const isLargeGoldLogo = props.sponsorName[0] === "Geodework";

    // ensのロゴも特別に処理
    const isEnsLogo = props.sponsorName[0] === "ens";

    return (
      <div
        css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: ${
              props.sponsorType === "venue"
                ? 360
                : props.sponsorType === "platinum"
                  ? 360
                  : props.sponsorType === "gold"
                    ? 320
                    : props.sponsorType === "silver"
                      ? 240
                      : 160
            }px;
            ${mq.mobileSmall} {
              width: ${
                props.sponsorType === "venue"
                  ? 360
                  : props.sponsorType === "platinum"
                    ? 360
                    : props.sponsorType === "gold"
                      ? 320
                      : props.sponsorType === "silver"
                        ? 240
                        : 140
              }px;
              height: ${
                props.sponsorType === "venue"
                  ? "120"
                  : props.sponsorType === "community"
                    ? "100"
                    : "120"
              }px;
            }
          `}
      >
        {props.logoFile.map((logo, idx) => (
          <a
            key={props.sponsorName[idx]}
            href={props.website[idx]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              key={props.sponsorName[idx]}
              src={
                logo.startsWith("/")
                  ? logo
                  : `/2025/images/orglogos/${props.sponsorType}Sponsors/${logo}`
              }
              alt={`${props.sponsorName} logo${props.logoFile.length > 1 ? ` ${idx + 1}` : ""}`}
              css={
                props.sponsorType === "venue"
                  ? venueLogoStyle
                  : props.sponsorType === "platinum"
                    ? platinumLogoStyle
                    : props.sponsorType === "gold"
                      ? isLargeGoldLogo
                        ? largeGoldLogoStyle
                        : isEnsLogo
                          ? ensLogoStyle
                          : goldLogoStyle
                      : props.sponsorType === "silver"
                        ? silverLogoStyle
                        : isLargeLogo
                          ? largeCommunityLogoStyle
                          : communityLogoStyle
              }
              width={
                props.sponsorType === "venue"
                  ? 360
                  : props.sponsorType === "platinum"
                    ? 360
                    : props.sponsorType === "gold"
                      ? 320
                      : props.sponsorType === "silver"
                        ? 240
                        : 160
              }
              height={
                props.sponsorType === "venue"
                  ? 120
                  : props.sponsorType === "platinum"
                    ? 120
                    : props.sponsorType === "gold"
                      ? 100
                      : props.sponsorType === "silver"
                        ? 80
                        : 60
              }
            />
          </a>
        ))}
      </div>
    );
  };

  return (
    <>
      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={[containerStyle, cs]}>
          <h2 css={headingStyle}>Venue Support</h2>
          <div css={venueLogosGridStyle}>
            {venueSupportData.map((sponsor, idx) => (
              <SponsorLogo
                key={`${sponsor.partnerName[0]}-${idx}`}
                sponsorType="venue"
                sponsorName={sponsor.partnerName}
                website={sponsor.website}
                logoFile={sponsor.logoFile}
              />
            ))}
          </div>
        </div>
      </section>

      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={[containerStyle, cs]}>
          <h2 css={headingStyle}>Platinum Sponsors</h2>
          <div css={platinumLogosGridStyle}>
            {platinumSponsorsData.map((sponsor, idx) => (
              <SponsorLogo
                key={`${sponsor.partnerName[0]}-${idx}`}
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
            {goldSponsorsData.map((sponsor, idx) => (
              <SponsorLogo
                key={`${sponsor.partnerName[0]}-${idx}`}
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
            {silverSponsorsData.map((sponsor, idx) => (
              <SponsorLogo
                key={`${sponsor.partnerName[0]}-${idx}`}
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
            {communitySponsorsData.map((sponsor, idx) => (
              <SponsorLogo
                key={`${sponsor.partnerName[0]}-${idx}`}
                sponsorType="community"
                sponsorName={sponsor.partnerName}
                website={sponsor.website}
                logoFile={sponsor.logoFile}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsorsSection;
