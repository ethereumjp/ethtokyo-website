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
            <div
              key={speaker.id}
              css={cardStyle}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
                textAlign: "left",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <h3
                  css={cardHeadingStyle}
                  style={{ margin: 0, whiteSpace: "nowrap" }}
                >
                  {speaker.name}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <div style={{ color: "#777", whiteSpace: "nowrap" }}>
                  {speaker.role}
                </div>
                <div
                  style={{
                    color: "#999",
                    fontSize: "0.95em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {speaker.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakersSection;
