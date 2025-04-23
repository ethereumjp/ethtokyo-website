import SectionTitle from "@/components/common/SectionTitle";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";

const AboutSection: FC = () => {
  const sectionStyle = css`
    padding: 5rem 1rem;
    background-color: ${neutral.White};
  `;

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
  `;

  const contentContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `;

  const aboutCardStyle = css`
    background-color: ${neutral.Grey1};
    border-radius: 1rem;
    padding: 2.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  `;

  const aboutContentStyle = css`
    display: grid;
    gap: 2rem;
    
    ${mq.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const paragraphStyle = css`
    font-size: 1.125rem;
    line-height: 1.8;
    color: ${neutral.Grey4};
    margin: 0;
  `;

  const highlightTextStyle = css`
    color: ${brand.Primary};
    font-weight: 600;
  `;

  const themeCardStyle = css`
    background-color: ${brand.Primary};
    border-radius: 1rem;
    padding: 2.5rem;
    color: ${neutral.White};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `;

  const themeHeadingStyle = css`
    font-size: 1.5rem;
    margin: 0 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `;

  const themeContentStyle = css`
    font-size: 1.125rem;
    line-height: 1.8;
  `;

  const overviewContainerStyle = css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    ${mq.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const overviewCardStyle = css`
    background-color: ${neutral.Grey1};
    border-radius: 1rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
  `;

  const overviewTitleStyle = css`
    font-size: 1.5rem;
    margin: 0;
    color: ${brand.Secondary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `;

  const overviewTextStyle = css`
    font-size: 1.125rem;
    line-height: 1.6;
    color: ${neutral.Grey4};
    margin: 0;
  `;

  const tagStyle = css`
    display: inline-block;
    background-color: ${brand.Miyabi};
    color: ${neutral.White};
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
  `;

  return (
    <section id="about" css={sectionStyle}>
      <div css={containerStyle}>
        <SectionTitle
          title="What's ETHTokyo"
          description="A vibrant gathering for the global Ethereum community"
        />
        <div css={contentContainerStyle}>
          {/* What's ETHTokyo */}
          <div css={aboutCardStyle}>
            <div css={aboutContentStyle}>
              <div>
                <span css={tagStyle}>Community</span>
                <p css={paragraphStyle}>
                  ETHTokyo is an{" "}
                  <span css={highlightTextStyle}>engaging hackathon</span> for
                  the global Ethereum community where people with all sorts of
                  backgrounds, ideas, and skills come together to share their
                  love for Ethereum and its world.
                </p>
              </div>
              <div>
                <span css={tagStyle}>Innovation</span>
                <p css={paragraphStyle}>
                  Whether you're a seasoned expert or just curious, you'll find
                  friends and inspiration here. Our goal is simple: to connect
                  diverse minds and foster the creation of amazing new
                  innovations for the future. Join us and be a part of shaping
                  what's next in the Ethereum universe!
                </p>
              </div>
            </div>
          </div>

          {/* Event Theme */}
          <div css={themeCardStyle}>
            <h3 css={themeHeadingStyle}>Event Theme</h3>
            <div css={themeContentStyle}>
              <h4>Technology for Humanity</h4>
              <p>
                Reimagining technology to empower people, preserve culture, and
                build a sustainable future. Let's innovate for humanity.
              </p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 css={overviewTitleStyle}>Overview</h3>
            <div css={overviewContainerStyle}>
              <div css={overviewCardStyle}>
                <h4 css={overviewTitleStyle}>Conference</h4>
                <p css={overviewTextStyle}>
                  Join industry leaders, developers, and enthusiasts for a day
                  of inspiring talks, panel discussions, and networking
                  opportunities. Learn about the latest developments in Ethereum
                  and blockchain technology.
                </p>
              </div>
              <div css={overviewCardStyle}>
                <h4 css={overviewTitleStyle}>Hackathon</h4>
                <p css={overviewTextStyle}>
                  Put your skills to the test in our multi-day hackathon.
                  Collaborate with talented individuals, build innovative
                  solutions, and compete for exciting prizes. Open to all skill
                  levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
