import { archiveData } from "@/data/eventData";
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

const ArchiveSection: FC = () => {
  return (
    <section css={sectionStyle} id="archive">
      <div css={containerStyle}>
        <h2 css={headingStyle}>Archive</h2>
        <div css={multiGridStyle}>
          {archiveData.map((item) => (
            <div key={item.id} css={cardStyle}>
              <h3 css={cardHeadingStyle}>{item.title}</h3>
              <p css={cardParagraphStyle}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveSection;
