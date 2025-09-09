import Button from "@/components/atoms/Button";
import SectionTitle from "@/components/molecules/SectionTitle";
import AccommodationInfo from "@/components/molecules/venue/AccommodationInfo";
import AirportInfo from "@/components/molecules/venue/AirportInfo";
import ExpandableCard from "@/components/molecules/venue/ExpandableCard";
import TransportOptions from "@/components/molecules/venue/TransportOptions";
import VenueCard from "@/components/molecules/venue/VenueCard";
import VenueTabs from "@/components/molecules/venue/VenueTabs";
import {
  AIRPORTS,
  HOTEL_CATEGORIES,
  TRANSPORT_OPTIONS,
} from "@/constants/venue";
import eventInfo from "@/data/eventInfo.json";
import { useVenueSection } from "@/hooks/useVenueSection";
import { neutral } from "@/themes/settings/color";
import {
  containerStyle,
  contentContainerStyle,
  sectionStyle,
  tabContentStyle,
  venuesContainerStyle,
} from "@/themes/styles/venue";
import type { VenueInfo } from "@/types/venue";
import { css } from "@emotion/react";
import type { FC } from "react";
import { BiIdCard } from "react-icons/bi";
import {
  MdOutlineAirplanemodeActive,
  MdOutlineDirectionsSubway,
} from "react-icons/md";

const VenueSection: FC = () => {
  const { state, setActiveTab, toggleItem, toggleImageDescription } =
    useVenueSection();
  const { activeTab, expandedItems, isImageDescriptionVisible } = state;
  const hasAccommodationInfo = false;

  // Venue data
  const conferenceVenue: VenueInfo = {
    title: "Conference Venue",
    description:
      "Join us for a day of insightful talks and exchanging ideas at the United Nations University, a prestigious venue in the heart of Tokyo's vibrant Shibuya district.",
    address: eventInfo.location.conference.address,
    date: eventInfo.dates.conference,
    nearbyStations: ["Shibuya (渋谷) Station", "Omote-Sando (表参道) Station"],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5964902582496!2d139.7082801!3d35.662312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b5f64c267bd%3A0x34ff084390b090a0!2sUnited%20Nations%20University!5e0!3m2!1sen!2sjp!4v1753695224651!5m2!1sen!2sjp",
    imageUrl: "/2025/images/venue/UNU.webp",
    imageAlt: "United Nations University Conference Venue",
    hasImageDescription: true,
    imageDescription: {
      title: "About United Nations University",
      content: [
        "The United Nations University (UNU) is a global think tank headquartered in Tokyo. Established in 1973, UNU serves as a bridge between the international academic community and the United Nations system.",
        "The UNU Tokyo campus in Shibuya provides an ideal setting for international conferences with state-of-the-art facilities.",
      ],
    },
  };

  const hackathonVenue: VenueInfo = {
    title: "Hackathon Venue",
    description:
      "Join us for an exciting three-day hackathon at Digital Garage in the heart of Tokyo's vibrant Shibuya district.",
    address: eventInfo.location.hackathon.address,
    date: eventInfo.dates.hackathon,
    nearbyStations: ["Shibuya (渋谷) Station", "Shinsen (神泉) Station"],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6042338798015!2d139.69406808784115!3d35.662121260370164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca8e24a397f%3A0xd219046cb159ffdb!2zRGlnaXRhbCBHYXJhZ2Ug4oCcUGFuZ2FlYeKAnQ!5e0!3m2!1sen!2sjp!4v1756411401507!5m2!1sen!2sjp",
    imageUrl: "/2025/images/venue/DG.webp",
    imageAlt: "Digital Garage Hackathon Venue",
    hasImageDescription: true,
    imageDescription: {
      title: "About Digital Garage",
      content: [
        "Digital Garage is a leading technology company founded in 1995, specializing in payment platforms, fintech services, and startup investment.",
        "Located in Shibuya, their state-of-the-art facilities provide the perfect environment for innovation and collaboration, making it an ideal venue for ETHTokyo's hackathon.",
      ],
    },
  };

  return (
    <>
      <section id="venue" css={sectionStyle}>
        <div css={containerStyle}>
          <SectionTitle
            title="Venue & Travel Info"
            description="Everything you need to know about the venue and getting around Tokyo"
            lightMode={true}
          />

          <VenueTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div css={contentContainerStyle}>
            {/* Venue Information Tab */}
            {activeTab === "venue" && (
              <div css={tabContentStyle}>
                <div css={venuesContainerStyle}>
                  <VenueCard
                    venue={conferenceVenue}
                    isImageDescriptionVisible={isImageDescriptionVisible}
                    onToggleImageDescription={toggleImageDescription}
                  />
                  <VenueCard
                    venue={hackathonVenue}
                    isImageDescriptionVisible={isImageDescriptionVisible}
                    onToggleImageDescription={toggleImageDescription}
                  />
                </div>
              </div>
            )}

            {/* Travel Information Tab */}
            {activeTab === "travel" && (
              <div css={tabContentStyle}>
                <ExpandableCard
                  title="Traveling to Tokyo"
                  icon={MdOutlineAirplanemodeActive}
                  isExpanded={expandedItems.airports}
                  onToggle={() => toggleItem("airports")}
                >
                  <AirportInfo airports={AIRPORTS} />
                </ExpandableCard>

                <ExpandableCard
                  title="Urban Transportation"
                  icon={MdOutlineDirectionsSubway}
                  isExpanded={expandedItems.transport}
                  onToggle={() => toggleItem("transport")}
                >
                  <TransportOptions options={TRANSPORT_OPTIONS} />
                </ExpandableCard>
              </div>
            )}

            {/* Accommodation Tab */}
            {activeTab === "accommodation" && (
              <div css={tabContentStyle}>
                <AccommodationInfo
                  hasAccommodationInfo={hasAccommodationInfo}
                  hotelCategories={HOTEL_CATEGORIES}
                />
              </div>
            )}
            <div
              css={css`display:flex; justify-content: center; padding-bottom: 1rem;`}
            >
              <Button
                href="https://app.moongate.id/e/ethtokyo2025"
                external
                variant="primary"
                icon={<BiIdCard />}
              >
                <span css={css`color: ${neutral.White};`}>Get Tickets</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenueSection;
