import { sessionsData } from "@/data/eventData";
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

const FeaturedSessionsSection: FC = () => {
  return (
    <section css={sectionStyle} id="featured-sessions">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Featured Sessions</h2>
        <div css={multiGridStyle}>
          {sessionsData.map((session) => (
            <div key={session.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{session.title}</h3>
              <p css={cardParagraphStyle}>{session.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSessionsSection;
