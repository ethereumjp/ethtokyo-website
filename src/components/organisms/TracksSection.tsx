import ContentCard from "@/components/common/ContentCard";
import SectionTitle from "@/components/common/SectionTitle";
import { tracksData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { useState } from "react";
import type { FC } from "react";

interface TrackCardProps {
  track: (typeof tracksData)[0];
  isExpanded: boolean;
  onToggle: () => void;
}

const TrackCard: FC<TrackCardProps> = ({ track, isExpanded, onToggle }) => {
  const trackTitle = (
    <h3 css={trackTitleStyle}>
      <span css={trackIconStyle}>{track.title.split(" ")[0]}</span>
      <span>{track.title.split(" ").slice(1).join(" ")}</span>
    </h3>
  );

  const trackSubtitle = (
    <>
      <span css={trackSubtitleStyle}>{track.subtitle}</span>
      <span css={trackPrizeStyle}>Prize: {track.prize}</span>
    </>
  );

  return (
    <ContentCard
      title={trackTitle}
      subtitle={trackSubtitle}
      headerBgColor={brand.Secondary}
    >
      <div css={trackContentContainerStyle}>
        <p css={trackDescriptionStyle}>{track.description}</p>

        {isExpanded && (
          <div css={expandedContentStyle}>
            {track.longDescription && (
              <p css={trackLongDescriptionStyle}>{track.longDescription}</p>
            )}
            {track.additionalInfo && (
              <p css={trackAdditionalInfoStyle}>{track.additionalInfo}</p>
            )}

            <div css={requirementsContainerStyle}>
              <h4 css={requirementsTitleStyle}>Requirements</h4>
              <ul css={requirementsListStyle}>
                {track.requirements.map((requirement, index) => (
                  <li
                    key={`requirement-${track.title}-${index}`}
                    css={requirementItemStyle}
                  >
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <button
          type="button"
          css={[readMoreButtonStyle, isExpanded && readLessButtonStyle]}
          onClick={onToggle}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </ContentCard>
  );
};

const TracksSection: FC = () => {
  const [expandedTracks, setExpandedTracks] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleTrack = (trackId: string) => {
    setExpandedTracks((prev) => ({
      ...prev,
      [trackId]: !prev[trackId],
    }));
  };

  return (
    <section css={sectionStyle} id="tracks">
      <div css={containerStyle}>
        <SectionTitle
          title="Hackathon Official Tracks"
          description="Join one of our official tracks and compete for prizes while building the future of Ethereum."
        />

        <div css={tracksContainerStyle}>
          {tracksData.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isExpanded={!!expandedTracks[track.id]}
              onToggle={() => toggleTrack(track.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyle = css`
  padding: 5rem 0;
  background-color: ${neutral.Grey1};
  width: 100%;
`;

const containerStyle = css`
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

const tracksContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
`;

const trackTitleStyle = css`
  font-size: 1.75rem;
  color: ${neutral.White};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  ${mq.mobileSmall} {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const trackIconStyle = css`
  font-size: 2rem;
  line-height: 1;
`;

const trackSubtitleStyle = css`
  font-size: 1.1rem;
  color: ${neutral.Grey1};
  font-weight: 500;
`;

const trackPrizeStyle = css`
  background-color: ${brand.Primary};
  color: ${neutral.White};
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const trackContentContainerStyle = css`
  display: flex;
  flex-direction: column;
`;

const trackDescriptionStyle = css`
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${neutral.Grey5};
  margin: 0 0 1.5rem;
`;

const expandedContentStyle = css`
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const trackLongDescriptionStyle = css`
  font-size: 1rem;
  line-height: 1.6;
  color: ${neutral.Grey5};
  margin-bottom: 1.5rem;
`;

const trackAdditionalInfoStyle = css`
  font-size: 1rem;
  line-height: 1.6;
  color: ${neutral.Grey5};
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const requirementsContainerStyle = css`
  background-color: ${neutral.Grey1};
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
`;

const requirementsTitleStyle = css`
  font-size: 1.2rem;
  color: ${brand.Secondary};
  margin: 0 0 1rem;
  font-weight: 600;
`;

const requirementsListStyle = css`
  margin: 0;
  padding: 0 0 0 1.25rem;
  list-style-type: none;
`;

const requirementItemStyle = css`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${neutral.Grey5};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${brand.Primary};
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const readMoreButtonStyle = css`
  background: none;
  border: none;
  color: ${brand.Primary};
  font-weight: 600;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${brand.Secondary};
  }
`;

const readLessButtonStyle = css`
  margin-top: 1.5rem;
`;

export default TracksSection;
