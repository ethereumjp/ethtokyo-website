import { tracksData } from "@/data/eventData";
import {
  cardHeadingStyle,
  cardParagraphStyle,
  cardStyle,
  containerStyle,
  headingStyle,
  multiGridStyle,
  sectionStyle,
} from "@/themes/styles/common";
import type { FC } from "react";

const TracksSection: FC = () => {
  return (
    <section css={sectionStyle} id="tracks">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Tracks</h2>
        <div css={multiGridStyle}>
          {tracksData.map((track) => (
            <div key={track.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{track.title}</h3>
              <p css={cardParagraphStyle}>{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
