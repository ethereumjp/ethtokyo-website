import Button from "@/components/common/Button";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import {
  cardHeadingStyle,
  cardParagraphStyle,
  cardStyle,
  containerStyle,
  headingStyle,
  multiGridStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineSchedule } from "react-icons/md";

const ConferenceSection: FC = () => {
  // deform url
  const speakerFormUrl = "https://ethtokyo.deform.cc/25-speaker-application";

  const descriptionStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0 auto 2rem;
    max-width: 800px;
    text-align: center;
  `;

  const formSectionStyle = css`
    background-color: ${neutral.White};
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin: 2rem auto;
    max-width: 800px;
    padding: 2rem;
  `;

  const formHeadingStyle = css`
    align-items: center;
    color: ${brand.Secondary};
    display: flex;
    font-size: 1.5rem;
    gap: 0.75rem;
    margin-bottom: 1rem;
  `;

  const formDescriptionStyle = css`
    color: ${neutral.Grey4};
    margin-bottom: 1.5rem;
  `;

  const featureListStyle = css`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    margin: 2rem 0;
    
    ${mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const featureItemStyle = css`
    align-items: flex-start;
    display: flex;
    gap: 1rem;
  `;

  const featureIconStyle = css`
    align-items: center;
    background-color: ${themeLight.PrimaryLowContrast};
    border-radius: 50%;
    color: ${brand.Primary};
    display: flex;
    flex-shrink: 0;
    height: 3rem;
    justify-content: center;
    width: 3rem;
  `;

  const featureTitleStyle = css`
    color: ${brand.Secondary};
    font-weight: 600;
    margin: 0 0 0.5rem;
  `;

  return (
    <section id="conference" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Conference</h2>

        <p css={descriptionStyle}>
          The ETHTokyo 2025 Conference brings together the latest in Ethereum
          technology and industry trends. Join top developers, leaders, and
          visionaries for knowledge sharing, networking, and collaboration
          opportunities.
        </p>

        <div css={featureListStyle}>
          <div css={featureItemStyle}>
            <div css={featureIconStyle}>
              <MdOutlineSchedule size={24} />
            </div>
            <div>
              <h3 css={featureTitleStyle}>Comprehensive Program</h3>
              <p>
                Featuring keynote speeches, panel discussions, workshops, and
                diverse sessions for all experience levels.
              </p>
            </div>
          </div>

          <div css={featureItemStyle}>
            <div css={featureIconStyle}>
              <BiMicrophone size={24} />
            </div>
            <div>
              <h3 css={featureTitleStyle}>Industry-Leading Speakers</h3>
              <p>
                Hear from top experts and builders in the Ethereum Community,
                major projects, and research institutions.
              </p>
            </div>
          </div>
        </div>

        <div css={formSectionStyle}>
          <h3 css={formHeadingStyle}>
            <BiMicrophone size={28} />
            Call for Speakers & Mentors
          </h3>
          <p css={formDescriptionStyle}>
            ETHTokyo'25 is currently accepting conference speakers and hackathon
            mentors. Share your knowledge and experience with the ETHTokyo
            community.
          </p>
          <Button
            href={speakerFormUrl}
            external
            size="medium"
            icon={<BiMicrophone />}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
