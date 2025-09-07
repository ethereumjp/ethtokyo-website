import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";

export const descriptionStyle = css`
  color: ${neutral.Grey4};
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 auto 2rem;
  max-width: 800px;
  text-align: center;
`;

export const formSectionStyle = css`
  background-color: ${neutral.White};
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  margin: 2rem auto;
  max-width: 800px;
  padding: 2rem;
`;

export const formHeadingStyle = css`
  align-items: center;
  color: ${brand.Secondary};
  display: flex;
  font-size: 1.5rem;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const formDescriptionStyle = css`
  color: ${neutral.Grey4};
  margin-bottom: 1.5rem;
`;

export const featureIconStyle = css`
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

export const featureTitleStyle = css`
  color: ${brand.Secondary};
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

export const speakerCardStyle = css`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 300px;
  flex-shrink: 0;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem;
  }
`;

export const speakerPhotoStyle = css`
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

export const speakerBioStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  gap: 8px;
`;

export const speakerNameStyle = css`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
`;

export const speakerPositionStyle = css`
  font-size: 0.95rem;
  color: #666;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const speakerProjectStyle = css`
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

export const speakerSocialStyle = css`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const socialLinkStyle = css`
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

export const socialIconStyle = css`
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

export const speakersGridStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const otherSpeakersGridStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding-top: 1rem;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const viewMoreButtonStyle = css`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const toggleButtonStyle = css`
  background: ${brand.Primary};
  color: ${neutral.White};
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${brand.Secondary};
    transform: translateY(-1px);
  }
`;

export const galleryContainerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-items: center;
  gap: 2rem;
  margin: 3rem 0;
`;

export const featureCardStyle = css`
  background: ${neutral.White};
  border-radius: 20px;
  max-width: 540px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const featureContentStyle = css`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
`;

export const featureDescriptionStyle = css`
  color: ${neutral.Grey4};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

export const galleryImageWrapperStyle = css`
  position: relative;
  overflow: hidden;
`;

export const galleryImageInnerStyle = css`
  aspect-ratio: 16 / 10;
  position: relative;
  overflow: hidden;
`;

export const galleryTitleStyle = css`
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
