import { css } from "@emotion/react";
import type { FC } from "react";

import { endorsementsData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import Image from "next/image";

const EndorsementsSection: FC = () => {
  const endorsementsStyle = css`
    background: white;
    text-align: center;
    padding: 0rem 2rem 2rem 2rem;
  `;

  const endorsementsContainerStyle = css`
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    justify-content: center;
    align-items: center;

    ${mq.mobileSmall} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  `;

  const endorsementLogoStyle = css`
    height: 100px;
    max-width: 100%;
    object-fit: contain;
  `;

  return (
    <section css={[sectionStyle, endorsementsStyle]}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Endorsements</h2>
        <div css={endorsementsContainerStyle}>
          {endorsementsData.map((endorsement) => (
            <a
              key={endorsement.name}
              href={endorsement.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={endorsement.logoFile}
                alt={`Endorsement ${endorsement.name}`}
                css={endorsementLogoStyle}
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

export default EndorsementsSection;
