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
    display: grid;
    gap: 3rem;
    
    ${mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const textContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `;

  const paragraphStyle = css`
    font-size: 1.125rem;
    color: ${neutral.Grey4};
  `;

  const statsContainerStyle = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  `;

  const statBoxStyle = css`
    background-color: ${neutral.Grey1};
    padding: 1.5rem;
    border-radius: 0.75rem;
  `;

  const statNumberStyle = css`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${brand.Primary};
    margin-bottom: 0.5rem;
  `;

  const statLabelStyle = css`
    color: ${neutral.Grey4};
  `;

  return (
    <section id="about" css={sectionStyle}>
      <div css={containerStyle}>
        <SectionTitle
          title="About ETHTokyo2025"
          description="The premier Ethereum event in Asia - bringing together developers, entrepreneurs, and crypto enthusiasts for 4 days of innovation."
        />
        <div css={contentContainerStyle}>
          <div css={textContainerStyle}>
            <p css={paragraphStyle}>
              ETHTokyo2025 brings together developers, entrepreneurs, and crypto
              enthusiasts from across Asia and beyond for 4 days of learning,
              building, and connecting.
            </p>
            <p css={paragraphStyle}>
              Join us for workshops, hackathons, and keynotes from industry
              leaders as we shape the future of Web3 together.
            </p>
          </div>
          <div css={statsContainerStyle}>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>1000+</h3>
              <p css={statLabelStyle}>Developers</p>
            </div>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>100+</h3>
              <p css={statLabelStyle}>Speakers</p>
            </div>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>50+</h3>
              <p css={statLabelStyle}>Workshops</p>
            </div>
            <div css={statBoxStyle}>
              <h3 css={statNumberStyle}>$500K</h3>
              <p css={statLabelStyle}>In Prizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
