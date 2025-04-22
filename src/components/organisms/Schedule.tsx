import eventInfo from "@/data/eventInfo.json";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import SectionTitle from "@/components/common/SectionTitle";
import { css } from "@emotion/react";
import { HiCalendarDays, HiOutlineMapPin, HiClock } from "react-icons/hi2";
import { IoTicketOutline } from "react-icons/io5";

// Type definitions
interface EventItem {
  time: string;
  title: string;
  description?: string;
  id?: string;
}

interface ScheduleCardProps {
  title: string;
  date: string;
  location: string;
  address: string;
  mapUrl?: string | null;
  events: EventItem[];
  showDetailedSchedule?: boolean;
}

const ScheduleCard = ({
  title,
  date,
  location,
  address,
  mapUrl = null,
  events = [],
  showDetailedSchedule = false,
}: ScheduleCardProps) => {
  return (
    <div css={cardStyle}>
      <div css={cardHeaderStyle}>
        <h3 css={cardTitleStyle}>{title}</h3>
      </div>
      <div css={cardContentStyle}>
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
        {showDetailedSchedule && events.length > 0 && (
          <div css={timelineContainerStyle}>
            {events.map((event) => (
              <div key={`${event.time}-${event.title}`} css={timelineItemStyle}>
                <div css={timelineDotStyle} />
                <div css={timelineTimeStyle}>
                  <HiClock size={16} />
                  <span>{event.time}</span>
                </div>
                <div css={timelineContentStyle}>
                  <h4 css={eventTitleStyle}>{event.title}</h4>
                  {event.description && (
                    <p css={eventDescriptionStyle}>{event.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ScheduleSection = () => {
  // Conference schedule (hidden for now, but ready to be shown later)
  const conferenceEvents: EventItem[] = [
    { time: "9:00 - 10:00", title: "Registration Open" },
    { time: "10:00 - 10:30", title: "Opening Ceremony" },
    {
      time: "10:30 - 12:00",
      title: "Keynote Presentation",
      description: "The Future of Ethereum",
    },
    { time: "12:00 - 13:30", title: "Lunch Break" },
    {
      time: "13:30 - 15:00",
      title: "Technical Sessions",
      description: "Latest Development Trends",
    },
    { time: "15:00 - 16:30", title: "Panel Discussion" },
    { time: "16:30 - 18:00", title: "Networking Event" },
  ];

  // Hackathon schedule (hidden for now, but ready to be shown later)
  const hackathonEvents: EventItem[] = [
    { time: "Day 1 - 10:00", title: "Hackathon Starts & Team Formation" },
    { time: "Day 1 - 12:00", title: "Lunch" },
    { time: "Day 1 - 20:00", title: "Midway Check-in" },
    { time: "Day 2", title: "Development Continues" },
    { time: "Day 3 - 15:00", title: "Coding Ends" },
    { time: "Day 3 - 16:00", title: "Presentations" },
    { time: "Day 3 - 18:00", title: "Awards & Closing" },
  ];

  // Set to false to hide detailed schedule
  const showDetailedSchedule = false;

  return (
    <section id="schedule" css={sectionStyle}>
      <div css={containerStyle}>
        <SectionTitle
          title="Event Schedule"
          description="ETHTokyo 2025 features a one-day conference and a three-day hackathon.
          Join us for sessions with industry-leading speakers and hands-on development experiences."
        />

        <div css={cardsContainerStyle}>
          <ScheduleCard
            title="Conference"
            date={eventInfo.dates.conference}
            location={eventInfo.location.conference.name}
            address={eventInfo.location.conference.address}
            events={conferenceEvents}
            showDetailedSchedule={showDetailedSchedule}
          />

          <ScheduleCard
            title="Hackathon"
            date={eventInfo.dates.hackathon}
            location={eventInfo.location.hackathon.name}
            address={eventInfo.location.hackathon.address}
            mapUrl="https://maps.app.goo.gl/Pn5yszwApgEvhux6A"
            events={hackathonEvents}
            showDetailedSchedule={showDetailedSchedule}
          />
        </div>
      </div>
    </section>
  );
};

// Style definitions
const sectionStyle = css`
  padding: 5rem 0;
  background-color: ${neutral.Grey1};
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const containerStyle = css`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

const cardsContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;

  ${mq.laptop} {
    flex-direction: row;
    gap: 2rem;
  }
`;

const cardStyle = css`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  background-color: ${neutral.White};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const cardHeaderStyle = css`
  background-color: ${brand.Secondary};
  padding: 1.25rem 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    background: linear-gradient(135deg, transparent 33.33%, ${brand.Secondary} 33.33%, ${brand.Secondary} 66.66%, transparent 66.66%);
    background-size: 30px 15px;
  }
  
  ${mq.tablet} {
    padding: 1.5rem;
  }
`;

const cardTitleStyle = css`
  font-size: 1.25rem;
  color: ${neutral.White};
  margin: 0;
  text-align: center;
  
  ${mq.tablet} {
    font-size: 1.5rem;
  }
`;

const cardContentStyle = css`
  padding: 1.5rem 1rem;
  
  ${mq.tablet} {
    padding: 2rem;
  }
`;

const infoRowStyle = css`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  color: ${neutral.Grey5};
  
  svg {
    color: ${brand.Primary};
    flex-shrink: 0;
    margin-top: 0.2rem;
  }
  
  ${mq.tablet} {
    gap: 1rem;
  }
`;

const locationContainerStyle = css`
  flex: 1;
  min-width: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
`;

const locationNameStyle = css`
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  
  ${mq.tablet} {
    font-size: 1.1rem;
  }
`;

const addressStyle = css`
  font-size: 0.9rem;
  color: ${neutral.Grey4};
  word-break: break-word;
  
  ${mq.tablet} {
    font-size: 0.95rem;
  }
`;

const addressLinkStyle = css`
  font-size: 0.9rem;
  color: ${neutral.Grey4};
  text-decoration: none;
  display: block;
  word-break: break-word;
  
  &:hover {
    color: ${brand.Primary};
    text-decoration: underline;
  }
  
  ${mq.tablet} {
    font-size: 0.95rem;
  }
`;

const timelineContainerStyle = css`
  margin-top: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 12px;
    width: 2px;
    background-color: ${themeLight.PrimaryLowContrast};
  }
`;

const timelineItemStyle = css`
  position: relative;
  padding-left: 40px;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const timelineDotStyle = css`
  position: absolute;
  left: 6px;
  top: 6px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${brand.Primary};
  z-index: 1;
`;

const timelineTimeStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${brand.Secondary};
  margin-bottom: 0.5rem;
  
  svg {
    color: ${brand.Primary};
  }
`;

const timelineContentStyle = css`
  background-color: ${themeLight.BackgroundHighlight};
  padding: 1rem;
  border-radius: 8px;
`;

const eventTitleStyle = css`
  margin: 0 0 0.25rem;
  font-size: 1.1rem;
  color: ${neutral.Grey5};
`;

const eventDescriptionStyle = css`
  margin: 0;
  font-size: 0.95rem;
  color: ${neutral.Grey4};
`;

export default ScheduleSection;
