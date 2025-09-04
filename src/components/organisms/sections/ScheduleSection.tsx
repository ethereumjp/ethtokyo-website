import Button from "@/components/atoms/Button";
import ScheduleCard from "@/components/molecules/ScheduleCard";
import SectionTitle from "@/components/molecules/SectionTitle";
import {
  HACKATHON_EVENTS,
  HAS_CONFERENCE_SCHEDULE,
  HAS_HACKATHON_SCHEDULE,
  SIDE_EVENTS_CALENDAR_URL,
  TICKET_URL,
} from "@/constants/schedule";
import eventInfo from "@/data/eventInfo.json";
import { useSchedule } from "@/hooks/useSchedule";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ExpandedSchedules, ScheduleType } from "@/types/schedule";
import { css } from "@emotion/react";
import { useState } from "react";
import { BiIdCard } from "react-icons/bi";

const ScheduleSection = () => {
  const [expandedSchedules, setExpandedSchedules] = useState<ExpandedSchedules>(
    {
      conference: false,
      hackathon: false,
    },
  );

  const { conferenceEvents, isLoadingConference, hasDetailedSchedule, error } =
    useSchedule();

  const toggleSchedule = (scheduleType: ScheduleType) => {
    setExpandedSchedules((prev) => ({
      ...prev,
      [scheduleType]: !prev[scheduleType],
    }));
  };

  return (
    <section id="schedule" css={sectionStyle}>
      <div css={containerStyle}>
        <SectionTitle
          title="Event Schedule"
          description="ETHTokyo 2025 features a one-day conference and a three-day hackathon.
          Join us for sessions with industry-leading speakers and hands-on development experiences."
        />

        {error && (
          <div css={errorContainerStyle}>
            <p css={errorTextStyle}>Failed to load schedule: {error}</p>
          </div>
        )}

        <div css={cardsContainerStyle}>
          <ScheduleCard
            title="Conference"
            date={eventInfo.dates.conference}
            location={eventInfo.location.conference.name}
            address={eventInfo.location.conference.address}
            mapUrl={eventInfo.location.conference.map}
            events={conferenceEvents}
            hasDetailedSchedule={HAS_CONFERENCE_SCHEDULE}
            isExpanded={expandedSchedules.conference}
            onToggle={() => toggleSchedule("conference")}
            isLoading={isLoadingConference}
          />

          <ScheduleCard
            title="Hackathon"
            date={eventInfo.dates.hackathon}
            location={eventInfo.location.hackathon.name}
            address={eventInfo.location.hackathon.address}
            mapUrl={eventInfo.location.hackathon.map}
            events={HACKATHON_EVENTS}
            hasDetailedSchedule={HAS_HACKATHON_SCHEDULE}
            isExpanded={expandedSchedules.hackathon}
            onToggle={() => toggleSchedule("hackathon")}
          />
        </div>

        <div css={buttonContainerStyle}>
          <Button href={TICKET_URL} external size="large" icon={<BiIdCard />}>
            <span
              css={css`
                color: ${neutral.White};
              `}
            >
              Get Ticket
            </span>
          </Button>
        </div>

        {/* Side Events Calendar Section */}
        <div css={sideEventsContainerStyle}>
          <SectionTitle
            title="Side Events"
            description="Join our community events and meetups happening around ETHTokyo 2025. Discover workshops, networking events, and more!"
          />
          <div css={calendarContainerStyle}>
            <iframe
              src={SIDE_EVENTS_CALENDAR_URL}
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              title="ETHTokyo Side Events Calendar"
              aria-label="ETHTokyo Side Events Calendar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = css`
  background-color: ${neutral.Grey1};
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 5rem 0;
  width: 100%;
`;

const containerStyle = css`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;
  width: 95%;
`;

const cardsContainerStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%;

  ${mq.laptop} {
    flex-direction: row;
    gap: 2rem;
  }
`;

const errorContainerStyle = css`
  background-color: ${brand.Secondary}20;
  border: 1px solid ${brand.Secondary};
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
`;

const errorTextStyle = css`
  color: ${brand.Secondary};
  font-size: 0.95rem;
  margin: 0;
`;

const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const sideEventsContainerStyle = css`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid ${neutral.Grey3};
`;

const calendarContainerStyle = css`
  background-color: ${neutral.White};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  overflow: hidden;
  
  iframe {
    display: block;
    color-scheme: light;
    width: 100%;
    min-height: 600px;
  }
`;

export default ScheduleSection;
