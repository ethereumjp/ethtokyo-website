import type { FC } from "react";
import type { HotelCategory } from "@/types/venue";
import {
  cardStyle,
  cardHeaderContentStyle,
  cardTitleStyle,
  hotelInfoStyle,
  accommodationDescStyle,
  hotelCategoriesStyle,
  hotelCategoryStyle,
  hotelListStyle,
  hotelButtonStyle,
  bookingTipStyle,
  linkStyle,
  comingSoonCardStyle,
  comingSoonContentStyle,
  comingSoonTitleStyle,
  comingSoonTextStyle,
} from "@/themes/styles/venue";
import { MdOutlineHotel } from "react-icons/md";
import { EXTERNAL_LINKS } from "@/constants/venue";

interface AccommodationInfoProps {
  hasAccommodationInfo: boolean;
  hotelCategories: HotelCategory[];
}

const AccommodationInfo: FC<AccommodationInfoProps> = ({
  hasAccommodationInfo,
  hotelCategories,
}) => {
  if (!hasAccommodationInfo) {
    return (
      <div css={comingSoonCardStyle}>
        <div css={comingSoonContentStyle}>
          <h3 css={comingSoonTitleStyle}>
            Accommodation Information Coming Soon
          </h3>
          <p css={comingSoonTextStyle}>
            Information about accommodation options near the ETHTokyo 2025 venue
            will be provided at a later date. Check back for recommended places
            to stay in Tokyo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div css={cardStyle}>
      <div css={cardHeaderContentStyle}>
        <MdOutlineHotel size={24} />
        <h3 css={cardTitleStyle}>Accommodation</h3>
      </div>

      <div css={hotelInfoStyle}>
        <p css={accommodationDescStyle}>
          There are various hotels around the ETHTokyo 2025 venue. We recommend
          booking early.
        </p>

        <div css={hotelCategoriesStyle}>
          {hotelCategories.map((category) => (
            <div key={category.title} css={hotelCategoryStyle}>
              <h4>{category.title}</h4>
              <ul css={hotelListStyle}>
                {category.hotels.map((hotel) => (
                  <li key={`${category.title}-${hotel.name}`}>
                    <button
                      type="button"
                      css={hotelButtonStyle}
                      onClick={hotel.onClick}
                    >
                      {hotel.name} ({hotel.distance})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div css={bookingTipStyle}>
          <h4>Booking Tips</h4>
          <p>
            We recommend booking as early as possible. Hotels in Tokyo tend to
            fill up during event periods. Look for options with free
            cancellation on sites like{" "}
            <a
              href={EXTERNAL_LINKS.BOOKING_COM}
              target="_blank"
              rel="noreferrer"
              css={linkStyle}
            >
              Booking.com
            </a>{" "}
            and{" "}
            <a
              href={EXTERNAL_LINKS.AGODA}
              target="_blank"
              rel="noreferrer"
              css={linkStyle}
            >
              Agoda
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccommodationInfo;
