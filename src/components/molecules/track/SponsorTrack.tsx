import FinalistCard from "@/components/molecules/track/FinalistCard";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";
import type { Finalist, SponsorTrackId } from "@/types/finalists";

interface SponsorTrackProps {
  trackId: SponsorTrackId;
  title: string;
  emoji: string;
  finalists: Finalist[];
}

const SponsorTrack: FC<SponsorTrackProps> = ({
  trackId,
  title,
  emoji,
  finalists,
}) => {
  if (finalists.length === 0) {
    return null;
  }

  return (
    <div css={sponsorTrackStyle}>
      <h4 css={sponsorTrackTitleStyle}>
        {emoji} {title} Track
      </h4>
      <div css={finalistsGridStyle}>
        {finalists.map((finalist) => (
          <FinalistCard
            key={`${trackId.toLowerCase()}-finalist-${finalist.name}`}
            finalist={finalist}
          />
        ))}
      </div>
    </div>
  );
};

// Styles
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
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const finalistsGridStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export default SponsorTrack;
