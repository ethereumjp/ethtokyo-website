import {
  detailItemStyle,
  detailTitleStyle,
  detailValueStyle,
  mapContainerStyle,
  mapIframeStyle,
  venueCardStyle,
  venueContentGridStyle,
  venueDescriptionStyle,
  venueDescriptionTextStyle,
  venueDescriptionTitleStyle,
  venueDescriptionVisibleStyle,
  venueDetailsGridStyle,
  venueEmptyPlaceholderStyle,
  venueHeaderStyle,
  venueHoverDescriptionStyle,
  venueImageContainerStyle,
  venueImageWrapperStyle,
  venuePlaceholderContentStyle,
  venuePlaceholderTextStyle,
  venuePlaceholderTitleStyle,
  venueTextColumnStyle,
  venueTitleStyle,
} from "@/themes/styles/venue";
import type { VenueInfo } from "@/types/venue";
import Image from "next/image";
import type { FC } from "react";
import { HiCalendarDays, HiOutlineMapPin } from "react-icons/hi2";
import { PiTrain } from "react-icons/pi";

interface VenueCardProps {
  venue: VenueInfo;
  isImageDescriptionVisible: boolean;
  onToggleImageDescription: () => void;
}

const VenueCard: FC<VenueCardProps> = ({
  venue,
  isImageDescriptionVisible,
  onToggleImageDescription,
}) => {
  return (
    <div css={venueCardStyle}>
      <div css={venueHeaderStyle}>
        <h3 css={venueTitleStyle}>{venue.title}</h3>
        <p css={venueDescriptionStyle}>{venue.description}</p>
      </div>

      <div css={venueContentGridStyle}>
        {/* Left - Text and Details */}
        <div css={venueTextColumnStyle}>
          <div css={venueDetailsGridStyle}>
            <div css={detailItemStyle}>
              <HiOutlineMapPin size={24} />
              <div>
                <div css={detailTitleStyle}>Address</div>
                <div css={detailValueStyle}>{venue.address}</div>
              </div>
            </div>

            <div css={detailItemStyle}>
              <HiCalendarDays size={24} />
              <div>
                <div css={detailTitleStyle}>Date</div>
                <div css={detailValueStyle}>{venue.date}</div>
              </div>
            </div>

            <div css={detailItemStyle}>
              <PiTrain size={24} />
              <div>
                <div css={detailTitleStyle}>Nearby Stations</div>
                <div css={detailValueStyle}>
                  {venue.nearbyStations.map((station, index) => (
                    <span key={`${venue.title}-station-${station}`}>
                      {station}
                      {index < venue.nearbyStations.length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Map */}
        <div css={mapContainerStyle}>
          <iframe
            title={`${venue.title} Location`}
            src={venue.mapEmbedUrl}
            css={mapIframeStyle}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right - Image or Placeholder */}
        {venue.imageUrl ? (
          <div css={venueImageContainerStyle}>
            <button
              css={venueImageWrapperStyle}
              onClick={onToggleImageDescription}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onToggleImageDescription();
                }
              }}
              type="button"
            >
              <Image
                src={venue.imageUrl}
                alt={venue.imageAlt || `${venue.title} Image`}
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
              {venue.hasImageDescription && venue.imageDescription && (
                <div
                  css={[
                    venueHoverDescriptionStyle,
                    isImageDescriptionVisible && venueDescriptionVisibleStyle,
                  ]}
                  className="venue-hover-description"
                >
                  <h4 css={venueDescriptionTitleStyle}>
                    {venue.imageDescription.title}
                  </h4>
                  {venue.imageDescription.content.map((paragraph, index) => (
                    <p
                      key={`${venue.title}-description-${index}`}
                      css={venueDescriptionTextStyle}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </button>
          </div>
        ) : (
          <div css={venueEmptyPlaceholderStyle}>
            <div css={venuePlaceholderContentStyle}>
              <h4 css={venuePlaceholderTitleStyle}>{venue.title}</h4>
              <p css={venuePlaceholderTextStyle}>Photo coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueCard;
