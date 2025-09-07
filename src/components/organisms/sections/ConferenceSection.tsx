import Button from "@/components/atoms/Button";
import FeatureCard from "@/components/molecules/speaker/FeatureCard";
import SpeakerGrid from "@/components/molecules/speaker/SpeakerGrid";
import { speakersData } from "@/data/eventData";
import { neutral } from "@/themes/settings/color";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";
import { useState } from "react";
import { BiIdCard, BiMicrophone } from "react-icons/bi";
import { MdOutlineSchedule } from "react-icons/md";
import { splitSpeakers } from "@/utils/speakerUtils";
import {
  descriptionStyle,
  buttonContainerStyle,
  galleryContainerStyle,
} from "../../../themes/styles/ConferenceSection.styles";

const ConferenceSection: FC = () => {
  // スピーカー表示状態の管理
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);

  // スピーカーデータを分割
  const { featured: featuredSpeakers, others: otherSpeakers } =
    splitSpeakers(speakersData);

  const handleToggleSpeakers = () => {
    setShowAllSpeakers(!showAllSpeakers);
  };

  return (
    <section id="conference" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Conference</h2>

        <p css={descriptionStyle}>
          The ETHTokyo 2025 Conference brings together the latest in Ethereum
          technology and industry trends. Join top developers, leaders, and
          visionaries for knowledge sharing, networking, and collaboration
          opportunities.
        </p>

        <div css={galleryContainerStyle}>
          <FeatureCard
            imageSrc="/2025/images/gallery/event-image-20.jpg"
            imageAlt="ETHTokyo Conference Audience"
            title="Panel Discussions showcase"
            description="Featuring keynote speeches, panel discussions, workshops, and diverse sessions for all experience levels."
            icon={<MdOutlineSchedule size={24} />}
            videoLink="https://streameth.org/66c5c689e5d57ae57abf844a/watch?session=66ee4cce5378de9b4a6a4f67"
            videoLinkText="video link"
          />

          <FeatureCard
            imageSrc="/2025/images/gallery/event-image-1.jpg"
            imageAlt="ETHTokyo Conference Speaker"
            title="Audrey Tang at ETHTokyo'24"
            description="Hear from top experts and builders in the Ethereum Community, major projects, and research institutions."
            icon={<BiMicrophone size={24} />}
            videoLink="https://streameth.org/66c5c689e5d57ae57abf844a/watch?session=672458ec24af22d0caf9b37b"
            videoLinkText="video link"
          />
        </div>

        <h2 css={headingStyle}>Featured Speakers</h2>
        <SpeakerGrid
          speakers={featuredSpeakers}
          showAllSpeakers={showAllSpeakers}
          onToggleSpeakers={handleToggleSpeakers}
          hasOtherSpeakers={otherSpeakers.length > 0}
        />

        {showAllSpeakers && otherSpeakers.length > 0 && (
          <SpeakerGrid
            speakers={otherSpeakers}
            showAllSpeakers={showAllSpeakers}
            onToggleSpeakers={() => setShowAllSpeakers(false)}
            hasOtherSpeakers={otherSpeakers.length > 0}
            isOtherSpeakers={true}
          />
        )}

        {/* <div css={formSectionStyle}>
          <h3 css={formHeadingStyle}>
            <BiMicrophone size={28} />
            Call for Speakers & Mentors
          </h3>
          <p css={formDescriptionStyle}>
            ETHTokyo'25 is currently accepting conference speakers and hackathon
            mentors. Share your knowledge and experience with the ETHTokyo
            community.
          </p>
          <Button
            href={speakerFormUrl}
            external
            size="medium"
            variant="outline"
            icon={<BiMicrophone />}
          >
            Apply Now
          </Button>
        </div> */}
        <div css={buttonContainerStyle}>
          <Button
            href="https://app.moongate.id/e/ethtokyo2025"
            external
            size="large"
            icon={<BiIdCard />}
          >
            <span
              css={css`
                  color: ${neutral.White};
                `}
            >
              Get Ticket
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
