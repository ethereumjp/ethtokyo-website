import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import Button from "@/components/common/Button";
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
import { BiMicrophone } from "react-icons/bi";
import { MdOutlineSchedule } from "react-icons/md";
import type { FC } from "react";

const ConferenceSection: FC = () => {
  // クリプトパッドフォームへのURL
  const speakerFormUrl =
    "https://cryptpad.fr/form/#/2/form/view/MKKokxNBwiZDxLIy-sXhGE324W95geXRewWIXJT3bIA/";

  const descriptionStyle = css`
    max-width: 800px;
    margin: 0 auto 2rem;
    text-align: center;
    color: ${neutral.Grey4};
    font-size: 1.125rem;
    line-height: 1.6;
  `;

  const formSectionStyle = css`
    background-color: ${neutral.White};
    border-radius: 1rem;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 800px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  `;

  const formHeadingStyle = css`
    color: ${brand.Secondary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `;

  const formDescriptionStyle = css`
    color: ${neutral.Grey4};
    margin-bottom: 1.5rem;
  `;

  const featureListStyle = css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 2rem 0;
    
    ${mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const featureItemStyle = css`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  `;

  const featureIconStyle = css`
    background-color: ${themeLight.PrimaryLowContrast};
    color: ${brand.Primary};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
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
                Hear from top speakers from the Ethereum Foundation, major
                projects, and research institutions.
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
            ETHTokyo 2025 is looking for speakers and mentors. Share your
            knowledge and experience to contribute to the Web3 community.
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
