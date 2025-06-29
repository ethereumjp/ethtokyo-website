import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";

const OrganizersSection: FC = () => {
  const organizersStyle = css`
    background: white;
    text-align: center;
  `;

  const organizersLogosStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
  `;

  const organizersLogoStyle = css`
    height: 60px;
    max-width: 100%;
    object-fit: contain;
  `;

  return (
    <section css={[sectionStyle, organizersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Organizers</h2>
        <div css={organizersLogosStyle}>
          <img
            src="2025/organizers/fracton-rec-black.png"
            alt="Organizer fracton"
            css={organizersLogoStyle}
          />
          <img
            src="2025/organizers/logo_white_blackbg.png"
            alt="Organizer Centrum"
            css={organizersLogoStyle}
          />
          <img
            src="2025/organizers/intmax.png"
            alt="Organizer intmax"
            css={organizersLogoStyle}
          />
          {/* <img src="/sponsor4.png" alt="Organizer 4" css={organizersLogoStyle} /> */}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
