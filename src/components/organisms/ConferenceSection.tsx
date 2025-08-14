import Button from "@/components/common/Button";
import { speakersData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import {
  cardHeadingStyle,
  cardParagraphStyle,
  cardStyle,
  containerStyle,
  headingStyle,
  multiGridStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import type { FC } from "react";
import { BiMicrophone } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";

const ConferenceSection: FC = () => {
  // deform url
  const speakerFormUrl = "https://speak.ethtokyo.org/conference-2025/submit";

  // URLからアカウント名を抽出する関数
  const extractAccountName = (url: string): string => {
    try {
      const urlObj = new URL(url);
      const pathname = urlObj.pathname;

      // Twitter/Xの場合
      if (url.includes("x.com") || url.includes("twitter.com")) {
        const match = pathname.match(/^\/([^\/]+)/);
        return match ? `@${match[1]}` : "";
      }

      // LinkedInの場合
      if (url.includes("linkedin.com")) {
        const match = pathname.match(/\/in\/([^\/]+)/);
        return match ? match[1] : "";
      }

      return "";
    } catch {
      return "";
    }
  };

  const descriptionStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0 auto 2rem;
    max-width: 800px;
    text-align: center;
  `;

  const formSectionStyle = css`
    background-color: ${neutral.White};
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin: 2rem auto;
    max-width: 800px;
    padding: 2rem;
  `;

  const formHeadingStyle = css`
    align-items: center;
    color: ${brand.Secondary};
    display: flex;
    font-size: 1.5rem;
    gap: 0.75rem;
    margin-bottom: 1rem;
  `;

  const formDescriptionStyle = css`
    color: ${neutral.Grey4};
    margin-bottom: 1.5rem;
  `;

  const featureListStyle = css`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    margin: 2rem 0;
    
    ${mq.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  `;

  const featureItemStyle = css`
    align-items: flex-start;
    display: flex;
    gap: 1rem;
  `;

  const featureIconStyle = css`
    align-items: center;
    background-color: ${themeLight.PrimaryLowContrast};
    border-radius: 50%;
    color: ${brand.Primary};
    display: flex;
    flex-shrink: 0;
    height: 3rem;
    justify-content: center;
    width: 3rem;
  `;

  const featureTitleStyle = css`
    color: ${brand.Secondary};
    font-weight: 600;
    margin: 0 0 0.5rem;
  `;

  const speakerCardStyle = css`
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    @media (max-width: 768px) {
      padding: 20px;
      margin-bottom: 12px;
    }
  `;

  const speakerContentStyle = css`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      align-items: flex-start;
    }
  `;

  const speakerPhotoStyle = css`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    border: 3px solid #e9ecef;
    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
      margin-right: 16px;
      flex-shrink: 0;
    }
  `;

  const speakerLeftStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    flex: 1;
    gap: 8px;
  `;

  const speakerNameStyle = css`
    font-size: 1.25rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 4px;
    @media (max-width: 768px) {
      font-size: 1.1rem;
      margin-bottom: 0;
    }
  `;

  const speakerPositionStyle = css`
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 0;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  `;

  const speakerProjectStyle = css`
    font-size: 0.9rem;
    color: #007bff;
    font-weight: 500;
    background: #e7f3ff;
    padding: 4px 12px;
    border-radius: 16px;
    display: inline-block;
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  `;

  const speakerSocialStyle = css`
    display: flex;
    gap: 8px;
    margin-top: 8px;
  `;

  const socialLinkStyle = css`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 20px;
    background: #f8f9fa;
    color: #6c757d;
    text-decoration: none;
    transition: all 0.2s ease;
    font-size: 0.85rem;
    
    &:hover {
      background: ${brand.Primary} !important;
      color: ${neutral.White} !important;
      transform: translateY(-1px);
    }
    
    &:hover span {
      color: ${neutral.White} !important;
    }
    
    &:hover div {
      color: ${neutral.White} !important;
    }
    
    @media (max-width: 768px) {
      padding: 4px 8px;
      font-size: 0.8rem;
      gap: 6px;
    }
  `;

  const socialIconStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    @media (max-width: 768px) {
      width: 18px;
      height: 18px;
    }
  `;

  const speakersGridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin: 2rem 0;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  `;

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

        <div css={featureListStyle}>
          <div css={featureItemStyle}>
            <div css={featureIconStyle}>
              <MdOutlineSchedule size={24} />
            </div>
            <div>
              <h3 css={featureTitleStyle}>Comprehensive Program</h3>
              <p>
                Featuring keynote speeches, panel discussions, workshops, and
                diverse sessions for all experience levels.
              </p>
            </div>
          </div>

          <div css={featureItemStyle}>
            <div css={featureIconStyle}>
              <BiMicrophone size={24} />
            </div>
            <div>
              <h3 css={featureTitleStyle}>Industry-Leading Speakers</h3>
              <p>
                Hear from top experts and builders in the Ethereum Community,
                major projects, and research institutions.
              </p>
            </div>
          </div>
        </div>

        <h2 css={headingStyle}>Featured Speakers</h2>
        <div css={speakersGridStyle}>
          {speakersData.map((speaker) => (
            <div key={speaker.name} css={speakerCardStyle}>
              <div css={speakerContentStyle}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  css={speakerPhotoStyle}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face";
                  }}
                />
                <div css={speakerLeftStyle}>
                  <div css={speakerNameStyle}>{speaker.name}</div>
                  {speaker.title && (
                    <div css={speakerPositionStyle}>{speaker.title}</div>
                  )}
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
                          {speaker.socialLink.includes("x.com") ||
                          speaker.socialLink.includes("twitter.com") ? (
                            <FaXTwitter size={16} />
                          ) : speaker.socialLink.includes("linkedin.com") ? (
                            <FaLinkedin size={16} />
                          ) : (
                            <FaXTwitter size={16} />
                          )}
                        </div>
                        <span>{extractAccountName(speaker.socialLink)}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div css={formSectionStyle}>
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
        </div>
      </div>
    </section>
  );
};

export default ConferenceSection;
