import { css } from "@emotion/react";
import type { FC } from "react";
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
import { Temp_formSection } from "./AboutSection";

const SponsorsSection: FC = () => {
  const sponsorsStyle = css`
    background: white;
    text-align: center;
    padding-bottom: 2rem;
  `;

  const sponsorsLogosGridStyle = css`
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

  const platinumLogosGridStyle = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    justify-items: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    ${mq.mobileSmall} {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  `;

  const goldLogosGridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    justify-items: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    ${mq.mobileSmall} {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  `;

  const silverLogosGridStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    justify-items: center;
    align-items: center;
    margin-top: 2.5rem;
    width: 100%;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;

    ${mq.mobileSmall} {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  `;

  const communityLogosGridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
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

  const cs = css`
    padding-top: 2.5rem;
  `;

  const sponsorLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  const platinumLogoStyle = css`
    height: 120px;
    max-width: 100%;
    object-fit: contain;
  `;

  const goldLogoStyle = css`
    height: 100px;
    max-width: 100%;
    object-fit: contain;
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

    return (
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <img
          src={`2025/images/${props.sponsorType}Sponsors/${props.logoFile}`}
          alt={`${props.sponsorName} logo`}
          css={
            props.sponsorType === "platinum"
              ? platinumLogoStyle
              : props.sponsorType === "gold"
                ? goldLogoStyle
                : props.sponsorType === "silver"
                  ? silverLogoStyle
                  : isLargeLogo
                    ? largeCommunityLogoStyle
                    : communityLogoStyle
          }
        />
      </a>
    );
  };

  return (
    <>
      {/* <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={containerStyle}>
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
      </section> */}

      <section css={[partnersSectionStyle, sponsorsStyle]}>
        <div css={[containerStyle, cs]}>
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
