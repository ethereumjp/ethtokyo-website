import ContentCard from "@/components/molecules/ContentCard";
import type { ScheduleCardProps } from "@/types/schedule";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { HiCalendarDays, HiClock, HiOutlineMapPin } from "react-icons/hi2";

const ScheduleCard = ({
  title,
  date,
  location,
  address,
  mapUrl = null,
  events = [],
  hasDetailedSchedule = false,
  isExpanded = false,
  onToggle,
  isLoading = false,
}: ScheduleCardProps) => {
  const cardTitle = <h3 css={cardTitleStyle}>{title}</h3>;

  return (
    <ContentCard title={cardTitle} headerBgColor={brand.Secondary}>
      <div css={infoRowStyle}>
        <HiCalendarDays size={24} />
        <span>{date}</span>
      </div>
      <div css={infoRowStyle}>
        <HiOutlineMapPin size={24} />
        <div css={locationContainerStyle}>
          <span css={locationNameStyle}>{location}</span>
          {mapUrl ? (
            <a
              css={addressLinkStyle}
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          ) : (
            <span css={addressStyle}>{address}</span>
          )}
        </div>
      </div>

      {!hasDetailedSchedule && !isLoading && (
        <div css={comingSoonContainerStyle}>
          <div css={comingSoonContentStyle}>
            <div>
              <h4 css={comingSoonTitleStyle}>Schedule Coming Soon</h4>
              <p css={comingSoonTextStyle}>
                Stay tuned for detailed event information
              </p>
            </div>
          </div>
        </div>
      )}

      {isLoading && (
        <div css={comingSoonContainerStyle}>
          <div css={comingSoonContentStyle}>
            <div>
              <h4 css={comingSoonTitleStyle}>Loading Schedule...</h4>
              <p css={comingSoonTextStyle}>
                Fetching conference schedule from ICS file
              </p>
            </div>
          </div>
        </div>
      )}

      {hasDetailedSchedule && (
        <>
          {isExpanded && events.length > 0 && (
            <div css={timelineContainerStyle}>
              {events.map((event) => (
                <div
                  key={`${event.time}-${event.title}`}
                  css={timelineItemStyle}
                >
                  <div css={timelineDotStyle} />
                  <div css={timelineContentStyle}>
                    <div css={timelineTimeStyle}>
                      <HiClock size={16} />
                      <span>{event.time}</span>
                      <span css={durationStyle}> {event.duration}</span>
                    </div>
                    <h4 css={eventTitleStyle}>{event.title}</h4>
                    {event.speakers && (
                      <p css={speakersStyle}>{event.speakers}</p>
                    )}
                    {event.url && (
                      <div css={detailButtonContainerStyle}>
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          css={detailButtonStyle}
                        >
                          Detail
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button type="button" css={readMoreButtonStyle} onClick={onToggle}>
            {isExpanded ? "Read Less" : "View Schedule"}
          </button>
        </>
      )}
    </ContentCard>
  );
};

const cardTitleStyle = css`
  color: ${neutral.White};
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const infoRowStyle = css`
  align-items: flex-start;
  color: ${neutral.Grey5};
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  svg {
    color: ${brand.Primary};
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const locationContainerStyle = css`
  flex: 1;
  hyphens: auto;
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

const locationNameStyle = css`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  
  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const addressStyle = css`
  color: ${neutral.Grey4};
  font-size: 0.9rem;
  word-break: break-word;
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`;

const addressLinkStyle = css`
  color: ${neutral.Grey4};
  display: block;
  font-size: 0.9rem;
  text-decoration: none;
  word-break: break-word;
  
  &:hover {
    color: ${brand.Primary};
    text-decoration: underline;
  }
  
  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`;

const comingSoonContainerStyle = css`
  background: linear-gradient(135deg, ${neutral.Grey1} 0%, ${neutral.Grey2} 100%);
  border: 1px dashed ${neutral.Grey3};
  border-radius: 12px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
  margin-top: 1.5rem;
  overflow: hidden;
  padding: 2rem;
  position: relative;
  text-align: center;
  
  &::before {
    background: ${brand.Primary}20;
    border-radius: 50%;
    content: '';
    height: 120px;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 120px;
    z-index: 0;
  }
`;

const comingSoonContentStyle = css`
  position: relative;
  z-index: 1;
`;

const comingSoonTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

const comingSoonTextStyle = css`
  color: ${neutral.Grey4};
  font-size: 0.95rem;
  margin: 0;
`;

const timelineContainerStyle = css`
  animation: fadeIn 0.3s ease;
  margin-top: 2rem;
  position: relative;
  width: 100%;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  &::before {
    background-color: ${themeLight.PrimaryLowContrast};
    bottom: 0;
    content: '';
    left: 12px;
    position: absolute;
    top: 0;
    width: 2px;
  }
`;

const timelineItemStyle = css`
  margin-bottom: 1.5rem;
  padding-left: 40px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const timelineDotStyle = css`
  background-color: ${brand.Primary};
  border-radius: 50%;
  height: 14px;
  left: 6px;
  position: absolute;
  top: 6px;
  width: 14px;
  z-index: 1;
`;

const timelineTimeStyle = css`
  align-items: center;
  color: ${brand.Secondary};
  display: flex;
  font-size: 0.9rem;
  font-weight: 600;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  
  svg {
    color: ${brand.Primary};
  }
`;

const durationStyle = css`
  color: ${neutral.Grey4};
  font-size: 0.8rem;
  font-weight: 500;
`;

const detailButtonContainerStyle = css`
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-start;
`;

const detailButtonStyle = css`
  background-color: ${brand.Primary};
  color: ${neutral.White} !important;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${brand.Secondary};
    color: ${neutral.White} !important;
  }
`;

const timelineContentStyle = css`
  background-color: ${themeLight.BackgroundHighlight};
  border-radius: 8px;
  padding: 1rem;
  min-width: 0;
`;

const eventTitleStyle = css`
  color: ${neutral.Grey5};
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  line-height: 1.4;
`;

const speakersStyle = css`
  color: ${neutral.Grey4};
  font-size: 0.95rem;
  margin: 0;
  font-style: italic;
`;

const readMoreButtonStyle = css`
  background: none;
  border: none;
  color: ${brand.Primary};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  padding: 0.5rem 0;
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
  width: 100%;
  
  &:hover {
    color: ${brand.Secondary};
  }
`;

export default ScheduleCard;
