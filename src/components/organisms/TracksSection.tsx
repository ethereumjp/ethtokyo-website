import ContentCard from "@/components/molecules/ContentCard";
import SectionTitle from "@/components/molecules/SectionTitle";
import { tracksData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { useState } from "react";
import type { FC } from "react";
import OptimizedImage from "../atoms/OptimizedImage";

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

        <div css={imageGalleryStyle}>
          <div css={imageCardStyle}>
            <div css={imageWrapperStyle}>
              <OptimizedImage
                src="/2025/images/gallery/hackathon-1.jpg"
                alt="ETHTokyo Hackathon Participants"
                css={imageStyle}
                width={100}
                height={100}
              />
              <div css={imageOverlayStyle}>
                <h3 css={overlayTitleStyle}>Build the Future</h3>
                <p css={overlayDescriptionStyle}>
                  Join hundreds of developers building innovative solutions
                </p>
              </div>
            </div>
          </div>

          <div css={imageCardStyle}>
            <div css={imageWrapperStyle}>
              <OptimizedImage
                src="/2025/images/gallery/hackathon-2.jpg"
                alt="ETHTokyo Hackathon Mentoring"
                css={imageStyle}
                width={100}
                height={100}
              />
              <div css={imageOverlayStyle}>
                <h3 css={overlayTitleStyle}>Expert Mentorship</h3>
                <p css={overlayDescriptionStyle}>
                  Get guidance from industry leaders and Ethereum experts
                </p>
              </div>
            </div>
          </div>

          <div css={imageCardStyle}>
            <div css={imageWrapperStyle}>
              <OptimizedImage
                src="/2025/images/gallery/hackathon-3.jpg"
                alt="ETHTokyo Hackathon Presentations"
                css={imageStyle}
                width={100}
                height={100}
              />
              <div css={imageOverlayStyle}>
                <h3 css={overlayTitleStyle}>Demo Day</h3>
                <p css={overlayDescriptionStyle}>
                  Present your project to judges and the community
                </p>
              </div>
            </div>
          </div>
        </div>
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
  background-color: ${neutral.Grey1};
  padding: 5rem 0;
  width: 100%;
`;

const containerStyle = css`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;
  width: 95%;
`;

const tracksContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
`;

const trackTitleStyle = css`
  align-items: center;
  color: ${neutral.White};
  display: flex;
  font-size: 1.75rem;
  gap: 0.5rem;
  margin: 0;
  
  ${mq.mobileSmall} {
    align-items: flex-start;
    flex-direction: column;
    font-size: 1.5rem;
  }
`;

const trackIconStyle = css`
  font-size: 2rem;
  line-height: 1;
`;

const trackSubtitleStyle = css`
  color: ${neutral.Grey1};
  font-size: 1.1rem;
  font-weight: 500;
`;

const trackPrizeStyle = css`
  background-color: ${brand.Primary};
  border-radius: 20px;
  color: ${neutral.White};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
`;

const trackContentContainerStyle = css`
  display: flex;
  flex-direction: column;
`;

const trackDescriptionStyle = css`
  color: ${neutral.Grey5};
  font-size: 1.05rem;
  line-height: 1.6;
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
  color: ${neutral.Grey5};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const trackAdditionalInfoStyle = css`
  color: ${neutral.Grey5};
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const requirementsContainerStyle = css`
  background-color: ${neutral.Grey1};
  border-radius: 8px;
  margin: 1.5rem 0;
  padding: 1.5rem;
`;

const requirementsTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem;
`;

const requirementsListStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 1.25rem;
`;

const requirementItemStyle = css`
  color: ${neutral.Grey5};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    color: ${brand.Primary};
    content: "•";
    font-size: 1.2rem;
    font-weight: bold;
    left: 0;
  }
`;

const readMoreButtonStyle = css`
  background: none;
  border: none;
  color: ${brand.Primary};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  padding: 0.5rem 0;
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

const imageGalleryStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  
  ${mq.mobileSmall} {
    gap: 1.5rem;
  }
`;

const imageCardStyle = css`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${neutral.White};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  width: 42vw;
  max-width: 360px;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  }
  
  &::after {
    background: linear-gradient(
      135deg,
      ${brand.Primary}20 0%,
      transparent 50%,
      ${brand.Secondary}20 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const imageWrapperStyle = css`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${imageCardStyle}:hover & {
    transform: scale(1.1);
  }
`;

const imageOverlayStyle = css`
  padding: 1.5rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    transparent 100%
  );
  transform: translateY(100%);
  transition: transform 0.3s ease;
  
  ${imageCardStyle}:hover & {
    transform: translateY(0);
  }
`;

const overlayTitleStyle = css`
  color: ${neutral.White};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const overlayDescriptionStyle = css`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
`;

export default TracksSection;
