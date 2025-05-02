import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";

const SponsorsSection: FC = () => {
  const sponsorsStyle = css`
    background: white;
    text-align: center;
  `;

  const sponsorsLogosStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
  `;

  const sponsorLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  return (
    <section css={[sectionStyle, sponsorsStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Our Sponsors</h2>
        <div css={sponsorsLogosStyle}>
          <img src="/sponsor1.png" alt="Sponsor 1" css={sponsorLogoStyle} />
          <img src="/sponsor2.png" alt="Sponsor 2" css={sponsorLogoStyle} />
          <img src="/sponsor3.png" alt="Sponsor 3" css={sponsorLogoStyle} />
          <img src="/sponsor4.png" alt="Sponsor 4" css={sponsorLogoStyle} />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
