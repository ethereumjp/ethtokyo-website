import { workshopsData } from "@/data/eventData";
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

const WorkshopSection: FC = () => {
  return (
    <section css={sectionStyle} id="Mentor-sessions">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Workshops</h2>
        <div css={multiGridStyle}>
          {workshopsData.map((workshop) => (
            <div key={workshop.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{workshop.title}</h3>
              <p css={cardParagraphStyle}>{workshop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
