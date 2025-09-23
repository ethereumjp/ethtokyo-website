import OptimizedImage from "@/components/atoms/OptimizedImage";
import ContentCard from "@/components/molecules/ContentCard";
import SectionTitle from "@/components/molecules/SectionTitle";
import { tracksData, finalistsData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { useState } from "react";
import type { FC } from "react";

interface FinalistCardProps {
  finalist: {
    name: string;
    image: string;
    description: string;
    link: string;
    prize: string;
  };
}

interface TrackCardProps {
  track: (typeof tracksData)[0];
  isExpanded: boolean;
  onToggle: () => void;
}

const FinalistCard: FC<FinalistCardProps> = ({ finalist }) => {
  const hasImage = finalist.image && finalist.image.trim() !== "";

  return (
    <div css={finalistCardStyle}>
      <div css={finalistImageWrapperStyle}>
        {hasImage ? (
          <OptimizedImage
            src={finalist.image}
            alt={finalist.name}
            css={finalistImageStyle}
            width={80}
            height={80}
          />
        ) : (
          <div css={finalistPlaceholderStyle}>🍕</div>
        )}
        <div css={finalistPrizeBadgeStyle}>{finalist.prize}</div>
      </div>
      <div css={finalistInfoStyle}>
        <h4 css={finalistNameStyle}>{finalist.name}</h4>
        <p css={finalistDescriptionStyle}>{finalist.description}</p>
        {finalist.link && finalist.link.trim() !== "" && (
          <a
            href={finalist.link}
            target="_blank"
            rel="noopener noreferrer"
            css={finalistLinkStyle}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

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
            <div key={track.id} css={trackWithFinalistsStyle}>
              <TrackCard
                track={track}
                isExpanded={!!expandedTracks[track.id]}
                onToggle={() => toggleTrack(track.id)}
              />

              {finalistsData[track.id as keyof typeof finalistsData] &&
                finalistsData[track.id as keyof typeof finalistsData].length >
                  0 && (
                  <div css={finalistsContainerStyle}>
                    <h4 css={finalistsTitleStyle}>Finalists</h4>
                    <div css={finalistsGridStyle}>
                      {finalistsData[
                        track.id as keyof typeof finalistsData
                      ].map((finalist) => (
                        <FinalistCard
                          key={`finalist-${track.id}-${finalist.name}`}
                          finalist={finalist}
                        />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}

          {/* Sponsor Track Finalists */}
          <div css={sponsorTracksContainerStyle}>
            <h3 css={sponsorTracksTitleStyle}>Sponsor Track Finalists</h3>

            {/* PizzaDAO Track */}
            {finalistsData["PizzaDAO" as keyof typeof finalistsData] &&
              finalistsData["PizzaDAO" as keyof typeof finalistsData].length >
                0 && (
                <div css={sponsorTrackStyle}>
                  <h4 css={sponsorTrackTitleStyle}>🍕 PizzaDAO Track</h4>
                  <div css={finalistsGridStyle}>
                    {finalistsData[
                      "PizzaDAO" as keyof typeof finalistsData
                    ].map((finalist) => (
                      <FinalistCard
                        key={`pizzadao-finalist-${finalist.name}`}
                        finalist={finalist}
                      />
                    ))}
                  </div>
                </div>
              )}

            {/* ENS Track */}
            {finalistsData["ens" as keyof typeof finalistsData] &&
              finalistsData["ens" as keyof typeof finalistsData].length > 0 && (
                <div css={sponsorTrackStyle}>
                  <h4 css={sponsorTrackTitleStyle}>🌐 ENS Track</h4>
                  <div css={finalistsGridStyle}>
                    {finalistsData["ens" as keyof typeof finalistsData].map(
                      (finalist) => (
                        <FinalistCard
                          key={`ens-finalist-${finalist.name}`}
                          finalist={finalist}
                        />
                      ),
                    )}
                  </div>
                </div>
              )}

            {/* JAPAN SMART CHAIN Track */}
            {finalistsData["JAPAN SMART CHAIN" as keyof typeof finalistsData] &&
              finalistsData["JAPAN SMART CHAIN" as keyof typeof finalistsData]
                .length > 0 && (
                <div css={sponsorTrackStyle}>
                  <h4 css={sponsorTrackTitleStyle}>
                    🏗️ JAPAN SMART CHAIN Track
                  </h4>
                  <div css={finalistsGridStyle}>
                    {finalistsData[
                      "JAPAN SMART CHAIN" as keyof typeof finalistsData
                    ].map((finalist) => (
                      <FinalistCard
                        key={`jsc-finalist-${finalist.name}`}
                        finalist={finalist}
                      />
                    ))}
                  </div>
                </div>
              )}
          </div>
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

const trackWithFinalistsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

// Finalists styles
const finalistsContainerStyle = css`
  background-color: ${neutral.White};
  border-radius: 12px;
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 2px solid ${brand.Primary}20;
`;

const finalistsTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1.25rem;
  text-align: center;
`;

const finalistsGridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  
  ${mq.mobileSmall} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const finalistCardStyle = css`
  background: linear-gradient(135deg, ${neutral.White} 0%, ${neutral.Grey1} 100%);
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid ${brand.Primary}20;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${brand.Primary}40;
  }
`;

const finalistImageWrapperStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const finalistImageStyle = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${brand.Primary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const finalistPlaceholderStyle = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${neutral.Grey2};
  border: 3px solid ${neutral.Grey4};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`;

const finalistPrizeBadgeStyle = css`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${brand.Primary} 0%, ${brand.Secondary} 100%);
  color: ${neutral.White};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 1;
`;

const finalistInfoStyle = css`
  text-align: center;
`;

const finalistNameStyle = css`
  color: ${neutral.Grey6};
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`;

const finalistDescriptionStyle = css`
  color: ${neutral.Grey5};
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0 0 1rem;
`;

const finalistLinkStyle = css`
  color: ${brand.Primary};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${brand.Secondary};
    text-decoration: underline;
  }
`;

// Sponsor Track styles
const sponsorTracksContainerStyle = css`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid ${brand.Primary}20;
`;

const sponsorTracksTitleStyle = css`
  color: ${neutral.Grey6};
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 2rem;
  
  ${mq.mobileSmall} {
    font-size: 1.5rem;
  }
`;

const sponsorTrackStyle = css`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const sponsorTrackTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  text-align: center;
  
  ${mq.mobileSmall} {
    font-size: 1.2rem;
  }
`;

export default TracksSection;
