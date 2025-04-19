import { venueData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";

const VenueSection: FC = () => {
  const sectionStyle = css`
    padding: 5rem 1rem;
    background-color: ${brand.Secondary};
    color: ${neutral.White};
    position: relative;
    overflow: hidden;
  `;

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
  `;

  const headingStyle = css`
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 3rem;
  `;

  const venueInfoStyle = css`
    margin-bottom: 2rem;
  `;

  const venueTitleStyle = css`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const venueDescriptionStyle = css`
    font-size: 1.125rem;
    opacity: 0.8;
    max-width: 800px;
    margin: 0 auto;
  `;

  const venueDetailsStyle = css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: 3rem auto 0;
    
    ${mq.tablet} {
      flex-direction: row;
      justify-content: center;
    }
  `;

  const detailItemStyle = css`
    text-align: center;
    
    svg {
      margin-bottom: 0.5rem;
    }
  `;

  const detailTitleStyle = css`
    font-weight: 600;
    margin-bottom: 0.25rem;
  `;

  return (
    <section id="venue" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Venue</h2>
        <div css={venueInfoStyle}>
          <h3 css={venueTitleStyle}>{venueData.name}</h3>
          <p css={venueDescriptionStyle}>{venueData.description}</p>
        </div>

        <div css={venueDetailsStyle}>
          <div css={detailItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Address</title>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <div css={detailTitleStyle}>Address</div>
            <div>{venueData.address}</div>
          </div>

          <div css={detailItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Event Hours</title>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div css={detailTitleStyle}>Event Hours</div>
            <div>{venueData.hours}</div>
          </div>

          <div css={detailItemStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Facilities</title>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <div css={detailTitleStyle}>Facilities</div>
            <div>{venueData.facilities}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
