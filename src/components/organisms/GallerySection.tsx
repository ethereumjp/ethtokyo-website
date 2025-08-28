import Button from "@/components/atoms/Button";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import {
  containerStyle,
  headingStyle,
  sectionStyle,
} from "@/themes/styles/common";
import { css } from "@emotion/react";
import Image from "next/image";
import type { FC } from "react";
import { IoImages } from "react-icons/io5";

const GallerySection: FC = () => {
  const descriptionStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0 auto 2rem;
    max-width: 800px;
    text-align: center;
  `;

  const galleryPreviewStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    
    ${mq.mobileSmall} {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    ${mq.mobile} {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    
    ${mq.tablet} {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    
    ${mq.laptop} {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    ${mq.desktop} {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  `;

  const previewImageStyle = css`
    aspect-ratio: 16 / 10;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    min-height: 120px;
    max-width: 100%;
    
    &:hover {
      transform: scale(1.05);
    }
    
    ${mq.laptop} {
      min-height: 140px;
    }
    
    ${mq.desktop} {
      min-height: 160px;
    }
  `;

  const imageStyle = css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const overlayStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    ${previewImageStyle}:hover & {
      opacity: 1;
    }
  `;

  const imageTitleStyle = css`
    color: ${neutral.White};
    font-size: 0.9rem;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  `;

  const buttonContainerStyle = css`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  `;

  const statsContainerStyle = css`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  `;

  const statItemStyle = css`
    text-align: center;
  `;

  const statNumberStyle = css`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${brand.Primary};
    margin-bottom: 0.5rem;
  `;

  const statLabelStyle = css`
    color: ${neutral.Grey4};
    font-size: 1rem;
    font-weight: 500;
  `;

  return (
    <section id="gallery" css={sectionStyle}>
      <div css={containerStyle}>
        <h2 css={headingStyle}>Gallery 2024</h2>

        <p css={descriptionStyle}>
          Relive the memories of ETHTokyo 2024 through photos.
          <br />
          Take a look at the conference and hackathon scenes from last year.
        </p>

        <div css={statsContainerStyle}>
          <div css={statItemStyle}>
            <div css={statNumberStyle}>81</div>
            <div css={statLabelStyle}>Photos</div>
          </div>
          <div css={statItemStyle}>
            <div css={statNumberStyle}>2</div>
            <div css={statLabelStyle}>Categories</div>
          </div>
          <div css={statItemStyle}>
            <div css={statNumberStyle}>1000+</div>
            <div css={statLabelStyle}>Participants</div>
          </div>
        </div>

        <div css={galleryPreviewStyle}>
          <div css={previewImageStyle}>
            <Image
              src="/2025/images/gallery/event-image-1.jpg"
              alt="Conference Keynote Sessions"
              css={imageStyle}
              fill
            />
            <div css={overlayStyle}>
              <div css={imageTitleStyle}>Keynote</div>
            </div>
          </div>

          <div css={previewImageStyle}>
            <Image
              src="/2025/images/gallery/hackathon-1.jpg"
              alt="Hackathon Team Collaboration"
              css={imageStyle}
              fill
            />
            <div css={overlayStyle}>
              <div css={imageTitleStyle}>Hackathon</div>
            </div>
          </div>

          <div css={previewImageStyle}>
            <Image
              src="/2025/images/gallery/event-image-2.jpg"
              alt="Ethereum Community Gathering"
              css={imageStyle}
              fill
            />
            <div css={overlayStyle}>
              <div css={imageTitleStyle}>Community</div>
            </div>
          </div>
        </div>

        <div css={buttonContainerStyle}>
          <Button href="/gallery" size="large" icon={<IoImages />}>
            <span css={css`color: ${neutral.White};`}>View Gallery</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
