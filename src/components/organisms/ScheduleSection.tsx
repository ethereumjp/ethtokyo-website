import { scheduleData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";

const ScheduleSection: FC = () => {
  const sectionStyle = css`
    padding: 5rem 1rem;
    background-color: ${themeLight.Background};
    position: relative;
    overflow: hidden;
  `;

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
  `;

  const headingStyle = css`
    font-size: 2.25rem;
    font-weight: 700;
    color: ${brand.Secondary};
    margin-bottom: 3rem;
    text-align: center;
  `;

  const scheduleGridStyle = css`
    display: grid;
    gap: 2rem;
    
    ${mq.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const scheduleCardStyle = css`
    background-color: ${neutral.White};
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  `;

  const dayLabelStyle = css`
    color: ${brand.Primary};
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const eventTitleStyle = css`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${brand.Secondary};
    margin-bottom: 0.5rem;
  `;

  const eventDescriptionStyle = css`
    color: ${neutral.Grey4};
  `;

  return (
    <section id="schedule" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Event Schedule</h2>
        <div css={scheduleGridStyle}>
          {scheduleData.map((item) => (
            <div key={item.id} css={scheduleCardStyle}>
              <div css={dayLabelStyle}>{item.day}</div>
              <h3 css={eventTitleStyle}>{item.title}</h3>
              <p css={eventDescriptionStyle}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
