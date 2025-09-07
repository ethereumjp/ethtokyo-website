import { css } from "@emotion/react";
import Image from "next/image";
import type { FC } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { extractAccountName, type Speaker } from "@/utils/speakerUtils";
import {
  speakerCardStyle,
  speakerPhotoStyle,
  speakerBioStyle,
  speakerNameStyle,
  speakerPositionStyle,
  speakerProjectStyle,
  speakerSocialStyle,
  socialLinkStyle,
  socialIconStyle,
} from "@/themes/styles/ConferenceSection.styles";

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: FC<SpeakerCardProps> = ({ speaker }) => {
  const getSocialIcon = (socialLink: string) => {
    if (socialLink.includes("x.com") || socialLink.includes("twitter.com")) {
      return <FaXTwitter size={16} />;
    }
    if (socialLink.includes("linkedin.com")) {
      return <FaLinkedin size={16} />;
    }
    return <FaXTwitter size={16} />;
  };

  return (
    <div css={speakerCardStyle}>
      <Image
        src={speaker.image}
        alt={speaker.name}
        css={speakerPhotoStyle}
        width={100}
        height={100}
      />
      <div css={speakerBioStyle}>
        <div css={speakerNameStyle}>{speaker.name}</div>
        {speaker.title && <div css={speakerPositionStyle}>{speaker.title}</div>}
        {speaker.project && (
          <div css={speakerProjectStyle}>{speaker.project}</div>
        )}
        {speaker.socialLink && (
          <div css={speakerSocialStyle}>
            <a
              href={speaker.socialLink}
              target="_blank"
              rel="noreferrer"
              css={socialLinkStyle}
              aria-label={`${speaker.name}'s social link`}
            >
              <div css={socialIconStyle}>
                {getSocialIcon(speaker.socialLink)}
              </div>
              <span>{extractAccountName(speaker.socialLink)}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeakerCard;
