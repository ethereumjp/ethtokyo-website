import Button from "@/components/atoms/Button";
import { speakersData } from "@/data/eventData";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import Image from "next/image";
import type { FC } from "react";
import { BiIdCard, BiMicrophone } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import OptimizedImage from "../atoms/OptimizedImage";

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
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    width: 300px;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    @media (max-width: 768px) {
      align-items: flex-start;
      padding: 1rem;
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

  const speakerBioStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-items: start;
    gap: 1rem;
  `;

  const buttonContainerStyle = css`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  `;

  const galleryContainerStyle = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    justify-items: center;
    gap: 2rem;
    margin: 3rem 0;
  `;

  const featureCardStyle = css`
    background: ${neutral.White};
    border-radius: 20px;
    max-width: 540px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  `;

  const featureContentStyle = css`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
  `;

  const featureDescriptionStyle = css`
    color: ${neutral.Grey4};
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  `;

  const galleryImageWrapperStyle = css`
    position: relative;
    overflow: hidden;
  `;

  const galleryImageInnerStyle = css`
    aspect-ratio: 16 / 10;
    position: relative;
    overflow: hidden;
  `;

  const galleryTitleStyle = css`
    padding: 0.5rem 1rem;
    color: ${neutral.White};
    font-size: 1.1rem;
    font-weight: 600;
    opacity: 100;
    transition: opacity 0.3s ease;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    
    ${galleryImageWrapperStyle}:hover & {
      opacity: 1;
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

        <div css={galleryContainerStyle}>
          <div css={featureCardStyle}>
            <div css={galleryImageWrapperStyle}>
              <div css={galleryImageInnerStyle}>
                <Image
                  src="/2025/images/gallery/event-image-20.jpg"
                  alt="ETHTokyo Conference Audience"
                  fill
                />
                <div css={galleryTitleStyle}>
                  Panel Discussions showcase{" "}
                  <a
                    href="https://streameth.org/66c5c689e5d57ae57abf844a/watch?session=66ee4cce5378de9b4a6a4f67"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (video link)
                  </a>
                </div>
              </div>
            </div>
            <div css={featureContentStyle}>
              <div css={featureIconStyle}>
                <MdOutlineSchedule size={24} />
              </div>
              <div>
                <h3 css={featureTitleStyle}>Comprehensive Program</h3>
                <p css={featureDescriptionStyle}>
                  Featuring keynote speeches, panel discussions, workshops, and
                  diverse sessions for all experience levels.
                </p>
              </div>
            </div>
          </div>

          <div css={featureCardStyle}>
            <div css={galleryImageWrapperStyle}>
              <div css={galleryImageInnerStyle}>
                <Image
                  src="/2025/images/gallery/event-image-1.jpg"
                  alt="ETHTokyo Conference Speaker"
                  fill
                />
                <div css={galleryTitleStyle}>
                  Audrey Tang at ETHTokyo'24{" "}
                  <a
                    href="https://streameth.org/66c5c689e5d57ae57abf844a/watch?session=672458ec24af22d0caf9b37b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (video link)
                  </a>
                </div>
              </div>
            </div>
            <div css={featureContentStyle}>
              <div css={featureIconStyle}>
                <BiMicrophone size={24} />
              </div>
              <div>
                <h3 css={featureTitleStyle}>Industry-Leading Speakers</h3>
                <p css={featureDescriptionStyle}>
                  Hear from top experts and builders in the Ethereum Community,
                  major projects, and research institutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 css={headingStyle}>Featured Speakers</h2>
        <div css={speakersGridStyle}>
          {speakersData.map((speaker) => (
            <div key={speaker.name} css={speakerCardStyle}>
              <Image
                src={speaker.image}
                alt={speaker.name}
                css={speakerPhotoStyle}
                width={100}
                height={100}
              />
              <div css={speakerBioStyle}>
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
