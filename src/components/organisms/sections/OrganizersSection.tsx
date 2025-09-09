import { css } from "@emotion/react";
import type { FC } from "react";

import { organizersData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import Image from "next/image";

const OrganizersSection: FC = () => {
  const organizersStyle = css`
    background: white;
    text-align: center;
    padding: 0rem 2rem 2rem 2rem;
  `;

  const organizersLogosStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
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
    height: 100px;
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
          {organizersData.map((organizer) => (
            <a
              key={organizer.name}
              href={organizer.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={organizer.logoFile}
                alt={`Organizer ${organizer.name}`}
                css={
                  organizer.logoStyle === "large"
                    ? intMaxLogoStyle
                    : organizersLogoStyle
                }
                width={240}
                height={240}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
