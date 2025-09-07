import {
  otherSpeakersGridStyle,
  speakersGridStyle,
  toggleButtonStyle,
  viewMoreButtonStyle,
} from "@/themes/styles/ConferenceSection.styles";
import type { Speaker } from "@/utils/speakerUtils";
import type { FC } from "react";
import SpeakerCard from "./SpeakerCard";

interface SpeakerGridProps {
  speakers: Speaker[];
  showAllSpeakers: boolean;
  onToggleSpeakers: () => void;
  hasOtherSpeakers: boolean;
  isOtherSpeakers?: boolean;
}

const SpeakerGrid: FC<SpeakerGridProps> = ({
  speakers,
  showAllSpeakers,
  onToggleSpeakers,
  hasOtherSpeakers,
  isOtherSpeakers = false,
}) => {
  const gridStyle = isOtherSpeakers
    ? otherSpeakersGridStyle
    : speakersGridStyle;

  return (
    <>
      <div css={gridStyle}>
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.name} speaker={speaker} />
        ))}
      </div>

      {/* ボタン表示ロジック */}
      {isOtherSpeakers && hasOtherSpeakers && (
        <div css={viewMoreButtonStyle}>
          <button
            type="button"
            css={toggleButtonStyle}
            onClick={onToggleSpeakers}
          >
            Hide other speakers
          </button>
        </div>
      )}

      {!isOtherSpeakers && hasOtherSpeakers && !showAllSpeakers && (
        <div css={viewMoreButtonStyle}>
          <button
            type="button"
            css={toggleButtonStyle}
            onClick={onToggleSpeakers}
          >
            View other speakers
          </button>
        </div>
      )}
    </>
  );
};

export default SpeakerGrid;
