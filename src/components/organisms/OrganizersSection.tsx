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

  const intMaxLogoStyle = css`
    height: 100px;
    max-width: 100%;
    object-fit: contain;
  `;

  return (
    <section css={[sectionStyle, organizersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Organizers</h2>
        <div css={organizersLogosStyle}>
          <img
            src="2025/images/organizers/EJLogoFace_dark_horizontal.png"
            alt="Organizer Ethereum Japan"
            css={organizersLogoStyle}
          />
          <img
            src="2025/images/organizers/fracton-rec-white-clear.png"
            alt="Organizer fracton"
            css={organizersLogoStyle}
          />
          <img
            src="2025/images/organizers/logo_black_transparent.png"
            alt="Organizer Centrum"
            css={organizersLogoStyle}
          />
        </div>
        <div css={organizersLogosStyle}>
          <img
            src="2025/images/organizers/intmax.png"
            alt="Organizer intmax"
            css={intMaxLogoStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
