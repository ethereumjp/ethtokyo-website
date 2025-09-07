import type { FC } from "react";
import SpeakerCard from "./SpeakerCard";
import type { Speaker } from "@/utils/speakerUtils";
import {
  speakersGridStyle,
  otherSpeakersGridStyle,
  viewMoreButtonStyle,
  toggleButtonStyle,
} from "@/themes/styles/ConferenceSection.styles";

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
