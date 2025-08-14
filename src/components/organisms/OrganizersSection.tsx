import { mq } from "@/themes/settings/breakpoints";
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
    padding: 0rem 2rem 2rem 2rem;
  `;

  const organizersLogosStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    ${mq.mobileSmall} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
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
    ${mq.mobileSmall} {
        height: 75px;
    }
  `;

  return (
    <section css={[sectionStyle, organizersStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Organizers</h2>
        <div css={organizersLogosStyle}>
          <a
            href="https://ethereumjp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/organizers/EJLogoFace_dark_horizontal.png"
              alt="Organizer Ethereum Japan"
              css={organizersLogoStyle}
            />
          </a>
          <a
            href="https://fracton.ventures/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/organizers/fracton-rec-white-clear.png"
              alt="Organizer Fracton Ventures"
              css={organizersLogoStyle}
            />
          </a>
          <a
            href="https://centrum.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/organizers/logo_black_transparent.png"
              alt="Organizer Centrum"
              css={organizersLogoStyle}
            />
          </a>
          <a
            href="https://intmax.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="2025/images/organizers/intmax.png"
              alt="Organizer INTMAX"
              css={intMaxLogoStyle}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
