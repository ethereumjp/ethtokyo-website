import { mentorsData } from "@/data/eventData";
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

const MentorSessionsSection: FC = () => {
  return (
    <section css={sectionStyle} id="Mentor-sessions">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Mentor Sessions</h2>
        <div css={multiGridStyle}>
          {mentorsData.map((mentor) => (
            <div key={mentor.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{mentor.name}</h3>
              <p css={cardParagraphStyle}>{mentor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSessionsSection;
