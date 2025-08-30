import { css } from "@emotion/react";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { VENUE_CONSTANTS } from "@/constants/venue";

// Common styles
export const cardStyle = css`
  background-color: ${neutral.White};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  overflow: hidden;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const cardHeaderStyle = css`
  align-items: center;
  background-color: ${neutral.Grey1};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${neutral.Grey2};
  }
`;

export const cardHeaderContentStyle = css`
  align-items: center;
  display: flex;
  gap: 1rem;
  
  svg {
    color: ${brand.Primary};
  }
`;

export const cardTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.25rem;
  margin: 0;
`;

export const cardBodyStyle = css`
  padding: 1.5rem;
  
  p {
    line-height: 1.6;
    margin-top: 0;
  }
`;

export const linkStyle = css`
  color: ${brand.Primary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${brand.Secondary};
    text-decoration: underline;
  }
`;

// Section styles
export const sectionStyle = css`
  background-color: ${brand.Secondary};
  color: ${neutral.White};
  overflow: hidden;
  padding: 2.5rem 1rem;
  position: relative;
`;

export const containerStyle = css`
  margin: 0 auto;
  max-width: 1200px;
`;

export const tabsContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 0;
  
  ${mq.tablet} {
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
`;

export const tabStyle = css`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 8px;
  color: ${neutral.White};
  cursor: pointer;
  display: flex;
  font-weight: 600;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  
  ${mq.tablet} {
    padding: 1rem 2rem;
  }
`;

export const activeTabStyle = css`
  background-color: ${brand.Primary};
  
  &:hover {
    background-color: ${brand.Primary};
  }
`;

export const contentContainerStyle = css`
  background-color: ${neutral.White};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  color: ${neutral.Grey5};
  overflow: hidden;
`;

export const tabContentStyle = css`
  padding: 2rem;
  
  ${mq.tablet} {
    padding: 3rem;
  }
`;

// Venue styles
export const venuesContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const venueCardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const venueHeaderStyle = css`
  text-align: center;
`;

export const venueTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.75rem;
  margin: 0;
`;

export const venueDescriptionStyle = css`
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 auto 1.5rem;
  max-width: 800px;
  text-align: center;
`;

export const venueContentGridStyle = css`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 1fr;
  
  ${mq.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const venueTextColumnStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: ${VENUE_CONSTANTS.IMAGE_HEIGHT}px;
`;

export const venueDetailsGridStyle = css`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  
  ${mq.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const detailItemStyle = css`
  align-items: flex-start;
  background-color: ${neutral.Grey1};
  border-radius: 8px;
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  
  svg {
    color: ${brand.Primary};
    flex-shrink: 0;
  }
`;

export const detailTitleStyle = css`
  color: ${brand.Secondary};
  display: inline-block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.5rem;
  vertical-align: middle;
`;

export const detailValueStyle = css`
  color: ${neutral.Grey5};
`;

// Map styles
export const mapContainerStyle = css`
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: ${VENUE_CONSTANTS.MAP_HEIGHT}px;
  overflow: hidden;
  width: 100%;
`;

export const mapIframeStyle = css`
  border: none;
  height: 100%;
  width: 100%;
`;

// Image styles
export const venueImageContainerStyle = css`
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: ${VENUE_CONSTANTS.IMAGE_HEIGHT}px;
`;

export const venueImageWrapperStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  
  ${mq.tablet} {
    &:hover .venue-hover-description {
      opacity: 1;
    }
  }
`;

export const venueDescriptionVisibleStyle = css`
  opacity: 1 !important;
`;

export const venueHoverDescriptionStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${neutral.White};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const venueDescriptionTitleStyle = css`
  color: ${neutral.White};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const venueDescriptionTextStyle = css`
  color: ${neutral.White};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
`;

// Placeholder styles
export const venueEmptyPlaceholderStyle = css`
  background-color: ${neutral.Grey1};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${VENUE_CONSTANTS.IMAGE_HEIGHT}px;
  width: 100%;
`;

export const venuePlaceholderContentStyle = css`
  text-align: center;
  color: ${neutral.Grey4};
`;

export const venuePlaceholderTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
`;

export const venuePlaceholderTextStyle = css`
  color: ${neutral.Grey4};
  font-size: 1rem;
  font-style: italic;
  margin: 0;
`;

// Travel styles
export const airportInfoStyle = css`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-top: 1.5rem;
  
  ${mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const airportCardStyle = css`
  background-color: ${neutral.Grey1};
  border-radius: 8px;
  padding: 1.5rem;
  
  h4 {
    color: ${brand.Secondary};
    font-size: 1.1rem;
    margin: 0 0 1rem;
  }
`;

export const transportListStyle = css`
  margin: 0;
  padding: 0 0 0 1.25rem;
  
  li {
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const transportOptionsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const transportOptionStyle = css`
  align-items: flex-start;
  display: flex;
  gap: 1rem;
`;

export const transportIconStyle = css`
  color: ${brand.Primary};
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

export const transportTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.1rem;
  margin: 0 0 0.5rem;
`;

// Accommodation styles
export const hotelInfoStyle = css`
  padding: 1.5rem;
`;

export const accommodationDescStyle = css`
  line-height: 1.6;
  margin-top: 0;
`;

export const hotelCategoriesStyle = css`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  margin-top: 1.5rem;
  
  ${mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const hotelCategoryStyle = css`
  background-color: ${neutral.Grey1};
  border-radius: 8px;
  padding: 1.5rem;
  
  h4 {
    color: ${brand.Secondary};
    font-size: 1.1rem;
    margin: 0 0 1rem;
  }
`;

export const hotelListStyle = css`
  margin: 0;
  padding: 0 0 0 1.25rem;
  
  li {
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const hotelButtonStyle = css`
  background: none;
  border: none;
  color: ${brand.Primary};
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${brand.Secondary};
    text-decoration: underline;
  }
`;

export const bookingTipStyle = css`
  background-color: rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${brand.Primary};
  border-radius: 8px;
  margin-top: 1.5rem;
  padding: 1.5rem;
  
  h4 {
    color: ${brand.Secondary};
    font-size: 1.1rem;
    margin: 0 0 0.5rem;
  }
  
  p {
    line-height: 1.6;
    margin: 0;
  }
`;

// Coming soon styles
export const comingSoonCardStyle = css`
  align-items: center;
  background-color: ${neutral.White};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${VENUE_CONSTANTS.MIN_CARD_HEIGHT}px;
  padding: 3rem 2rem;
  text-align: center;
`;

export const comingSoonContentStyle = css`
  max-width: 600px;
`;

export const comingSoonTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const comingSoonTextStyle = css`
  color: ${neutral.Grey4};
  font-size: 1.1rem;
  line-height: 1.6;
`;
