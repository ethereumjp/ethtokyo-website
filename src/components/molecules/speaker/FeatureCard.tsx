import OptimizedImage from "@/components/atoms/OptimizedImage";
import type { FC, ReactNode } from "react";
import {
  featureCardStyle,
  featureContentStyle,
  featureDescriptionStyle,
  featureIconStyle,
  featureTitleStyle,
  galleryImageWrapperStyle,
  galleryImageInnerStyle,
  galleryTitleStyle,
} from "@/themes/styles/ConferenceSection.styles";

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  icon: ReactNode;
  videoLink?: string;
  videoLinkText?: string;
}

const FeatureCard: FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  icon,
  videoLink,
  videoLinkText,
}) => {
  return (
    <div css={featureCardStyle}>
      <div css={galleryImageWrapperStyle}>
        <div css={galleryImageInnerStyle}>
          <OptimizedImage src={imageSrc} alt={imageAlt} fill />
          <div css={galleryTitleStyle}>
            {title}
            {videoLink && videoLinkText && (
              <>
                {" "}
                <a href={videoLink} target="_blank" rel="noreferrer">
                  ({videoLinkText})
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <div css={featureContentStyle}>
        <div css={featureIconStyle}>{icon}</div>
        <div>
          <h3 css={featureTitleStyle}>{title}</h3>
          <p css={featureDescriptionStyle}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
