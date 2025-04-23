import { speakersData } from "@/data/eventData";
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

const FeaturedSpeakersSection: FC = () => {
  return (
    <section css={sectionStyle} id="featured-speakers">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Featured Speakers</h2>
        <div css={multiGridStyle}>
          {speakersData.map((speaker) => (
            <div key={speaker.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{speaker.name}</h3>
              <p css={cardParagraphStyle}>{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakersSection;
