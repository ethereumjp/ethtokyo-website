import SectionTitle from "@/components/common/SectionTitle";
import { venueData } from "@/data/eventData";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";
import { useState } from "react";
import {
  HiCalendarDays,
  HiChevronDown,
  HiChevronUp,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineMapPin,
} from "react-icons/hi2";
import {
  MdDirectionsBike,
  MdLocalTaxi,
  MdOutlineAirplanemodeActive,
  MdOutlineDirectionsSubway,
  MdOutlineHotel,
} from "react-icons/md";

type TabType = "venue" | "travel" | "accommodation";

const VenueSection: FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("venue");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    airports: false,
    transport: false,
  });
  const hasAccommodationInfo = false;

  const toggleItem = (item: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <section id="venue" css={sectionStyle}>
      <div css={containerStyle}>
        <SectionTitle
          title="Venue & Travel Info"
          description="Everything you need to know about the venue and getting around Tokyo"
          lightMode={true}
        />

        <div css={tabsContainerStyle}>
          <button
            type="button"
            css={[tabStyle, activeTab === "venue" && activeTabStyle]}
            onClick={() => setActiveTab("venue")}
          >
            <HiOutlineMapPin size={20} />
            Venue
          </button>
          <button
            type="button"
            css={[tabStyle, activeTab === "travel" && activeTabStyle]}
            onClick={() => setActiveTab("travel")}
          >
            <MdOutlineDirectionsSubway size={20} />
            Travel
          </button>
          <button
            type="button"
            css={[tabStyle, activeTab === "accommodation" && activeTabStyle]}
            onClick={() => setActiveTab("accommodation")}
          >
            <MdOutlineHotel size={20} />
            Accommodation
          </button>
        </div>

        <div css={contentContainerStyle}>
          {/* Venue Information Tab */}
          {activeTab === "venue" && (
            <div css={tabContentStyle}>
              <div css={venuesContainerStyle}>
                <div css={venueCardStyle}>
                  <h3 css={venueTitleStyle}>Conference Venue</h3>
                  <div css={tbaContainerStyle}>
                    <p css={tbaTextStyle}>To Be Announced</p>
                    <p css={venueDescriptionStyle}>
                      The conference venue will be announced soon. Stay tuned
                      for updates!
                    </p>
                    <div css={venueDetailStyle}>
                      <div css={detailWithIconStyle}>
                        <HiCalendarDays size={20} css={calendarIconStyle} />
                        <span css={detailTitleStyle}>Date</span>
                      </div>
                      <div css={dateValueStyle}>September 12, 2025</div>
                    </div>
                  </div>
                </div>

                <div css={venueCardStyle}>
                  <h3 css={venueTitleStyle}>Hackathon Venue</h3>
                  <p css={venueDescriptionStyle}>
                    Join us for an exciting three-day hackathon at Digital
                    Garage in the heart of Tokyo's vibrant Shibuya district.
                  </p>

                  <div css={venueDetailsGridStyle}>
                    <div css={detailItemStyle}>
                      <HiOutlineMapPin size={24} />
                      <div>
                        <div css={detailTitleStyle}>Address</div>
                        <div css={detailValueStyle}>
                          15-1 Udagawacho, Shibuya, Tokyo
                        </div>
                      </div>
                    </div>

                    <div css={detailItemStyle}>
                      <HiCalendarDays size={24} />
                      <div>
                        <div css={detailTitleStyle}>Date</div>
                        <div css={detailValueStyle}>September 13-15, 2025</div>
                      </div>
                    </div>

                    <div css={detailItemStyle}>
                      <HiOutlineHome size={24} />
                      <div>
                        <div css={detailTitleStyle}>Facilities</div>
                        <div css={detailValueStyle}>
                          WiFi, Power Outlets, Meeting Rooms, Catering
                        </div>
                      </div>
                    </div>
                  </div>

                  <div css={mapContainerStyle}>
                    <iframe
                      title="Hackathon Venue Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7172133535074!2d139.69777457670718!3d35.66247108162841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca9c5d23113%3A0xf3a233d2f218acaa!2s15-1%20Udagawacho%2C%20Shibuya%20City%2C%20Tokyo%20150-0042!5e0!3m2!1sen!2sjp!4v1684554239963!5m2!1sen!2sjp"
                      css={mapIframeStyle}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Travel Information Tab */}
          {activeTab === "travel" && (
            <div css={tabContentStyle}>
              <div css={infoCardStyle}>
                <div
                  css={infoCardHeaderStyle}
                  onClick={() => toggleItem("airports")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleItem("airports");
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={expandedItems.airports}
                >
                  <div css={infoCardHeaderContentStyle}>
                    <MdOutlineAirplanemodeActive size={24} />
                    <h3 css={infoCardTitleStyle}>Traveling to Tokyo</h3>
                  </div>
                  {expandedItems.airports ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </div>

                {expandedItems.airports && (
                  <div css={infoCardBodyStyle}>
                    <p>
                      Tokyo has two airports:{" "}
                      <a
                        href="https://maps.app.goo.gl/pEzYqQj1HuTY3ctD7"
                        target="_blank"
                        rel="noreferrer"
                        css={linkStyle}
                      >
                        Narita International Airport (NRT)
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://maps.app.goo.gl/C1rgT7mBmtXzULy68"
                        target="_blank"
                        rel="noreferrer"
                        css={linkStyle}
                      >
                        Haneda International Airport (HND)
                      </a>
                      . They are both well connected with the railway system.
                    </p>

                    <div css={airportInfoStyle}>
                      <div css={airportCardStyle}>
                        <h4>Narita International Airport (NRT)</h4>
                        <ul css={transportListStyle}>
                          <li>60-90 minutes to central Tokyo</li>
                          <li>JR Narita Express: ~60 min, ¥3,070</li>
                          <li>Keisei Skyliner: ~40 min, ¥2,520</li>
                          <li>Limousine Bus: ~80-120 min, ¥3,200</li>
                        </ul>
                      </div>

                      <div css={airportCardStyle}>
                        <h4>Haneda International Airport (HND)</h4>
                        <ul css={transportListStyle}>
                          <li>30-45 minutes to central Tokyo</li>
                          <li>Tokyo Monorail: ~30 min, ¥500</li>
                          <li>Keikyu Line: ~30 min, ¥450</li>
                          <li>Limousine Bus: ~30-60 min, ¥1,200</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div css={infoCardStyle}>
                <div
                  css={infoCardHeaderStyle}
                  onClick={() => toggleItem("transport")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleItem("transport");
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={expandedItems.transport}
                >
                  <div css={infoCardHeaderContentStyle}>
                    <MdOutlineDirectionsSubway size={24} />
                    <h3 css={infoCardTitleStyle}>Urban Transportation</h3>
                  </div>
                  {expandedItems.transport ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </div>

                {expandedItems.transport && (
                  <div css={infoCardBodyStyle}>
                    <p>
                      Tokyo is a city optimized for public transportation. Most
                      of the times, the quickest and easiest way to getting from
                      A to B is by trains and buses. If you are staying longer
                      than just a few days, you might want to consider
                      purchasing a{" "}
                      <a
                        href="https://www.jreast.co.jp/multi/en/pass/suica.html"
                        target="_blank"
                        rel="noreferrer"
                        css={linkStyle}
                      >
                        SUICA
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://www.pasmo.co.jp/visitors/en/"
                        target="_blank"
                        rel="noreferrer"
                        css={linkStyle}
                      >
                        PASMO
                      </a>{" "}
                      card at for the best experience, which can be obtained at
                      pretty much any train station. You can use these cards to
                      ride the buses also.
                    </p>

                    <div css={transportOptionsStyle}>
                      <div css={transportOptionStyle}>
                        <MdDirectionsBike size={24} css={transportIconStyle} />
                        <div>
                          <h4 css={transportTitleStyle}>Scooters & Bikes</h4>
                          <p>
                            Depending on the area, you will also find scooters
                            and bikes that you can grab around the city, using
                            apps like{" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=sc.luup.luup"
                              target="_blank"
                              rel="noreferrer"
                              css={linkStyle}
                            >
                              LUUP
                            </a>{" "}
                            and{" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=com.limebike"
                              target="_blank"
                              rel="noreferrer"
                              css={linkStyle}
                            >
                              LIME
                            </a>
                            . You should take precaution to stay safe since the
                            streets in Tokyo are generally narrow and crowded.
                          </p>
                        </div>
                      </div>

                      <div css={transportOptionStyle}>
                        <MdLocalTaxi size={24} css={transportIconStyle} />
                        <div>
                          <h4 css={transportTitleStyle}>Taxis</h4>
                          <p>
                            Taxis are available through apps like{" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=com.dena.automotive.taxibell"
                              target="_blank"
                              rel="noreferrer"
                              css={linkStyle}
                            >
                              GO
                            </a>{" "}
                            and{" "}
                            <a
                              href="https://play.google.com/store/apps/details?id=com.ubercab"
                              target="_blank"
                              rel="noreferrer"
                              css={linkStyle}
                            >
                              Uber
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Accommodation Tab */}
          {activeTab === "accommodation" && (
            <div css={tabContentStyle}>
              {hasAccommodationInfo ? (
                <div css={infoCardStyle}>
                  <div css={infoCardHeaderContentStyle}>
                    <MdOutlineHotel size={24} />
                    <h3 css={infoCardTitleStyle}>Accommodation</h3>
                  </div>

                  <div css={hotelInfoStyle}>
                    <p css={accommodationDescStyle}>
                      There are various hotels around the ETHTokyo 2025 venue.
                      We recommend booking early.
                    </p>

                    <div css={hotelCategoriesStyle}>
                      <div css={hotelCategoryStyle}>
                        <h4>Recommended Hotels Near Venue</h4>
                        <ul css={hotelListStyle}>
                          <li>
                            <button
                              type="button"
                              css={hotelButtonStyle}
                              onClick={() => console.log("Hotel A selected")}
                            >
                              Hotel A (5-min walk from venue)
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              css={hotelButtonStyle}
                              onClick={() => console.log("Hotel B selected")}
                            >
                              Hotel B (10-min walk from venue)
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              css={hotelButtonStyle}
                              onClick={() => console.log("Hotel C selected")}
                            >
                              Hotel C (1 station from nearest station)
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div css={hotelCategoryStyle}>
                        <h4>Budget-Friendly Options</h4>
                        <ul css={hotelListStyle}>
                          <li>
                            <button
                              type="button"
                              css={hotelButtonStyle}
                              onClick={() => console.log("Hostel X selected")}
                            >
                              Hostel X (about ¥5,000 per night)
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              css={hotelButtonStyle}
                              onClick={() =>
                                console.log("Capsule Hotel Y selected")
                              }
                            >
                              Capsule Hotel Y (about ¥3,000 per night)
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              css={hotelButtonStyle}
                              onClick={() =>
                                console.log("Guesthouse Z selected")
                              }
                            >
                              Guesthouse Z (about ¥4,000 per night)
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div css={bookingTipStyle}>
                      <h4>Booking Tips</h4>
                      <p>
                        We recommend booking as early as possible. Hotels in
                        Tokyo tend to fill up during event periods. Look for
                        options with free cancellation on sites like{" "}
                        <a
                          href="https://www.booking.com"
                          target="_blank"
                          rel="noreferrer"
                          css={linkStyle}
                        >
                          Booking.com
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://www.agoda.com"
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
              ) : (
                <div css={comingSoonCardStyle}>
                  <div css={comingSoonContentStyle}>
                    <h3 css={comingSoonTitleStyle}>
                      Accommodation Information Coming Soon
                    </h3>
                    <p css={comingSoonTextStyle}>
                      Information about accommodation options near the ETHTokyo
                      2025 venue will be provided at a later date. Check back
                      for recommended places to stay in Tokyo.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyle = css`
  padding: 5rem 1rem;
  background-color: ${brand.Secondary};
  color: ${neutral.White};
  position: relative;
  overflow: hidden;
`;

const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
`;

const tabsContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 0;
  
  ${mq.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`;

const tabStyle = css`
  padding: 0.75rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 8px;
  color: ${neutral.White};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  
  ${mq.tablet} {
    padding: 1rem 2rem;
  }
`;

const activeTabStyle = css`
  background-color: ${brand.Primary};
  
  &:hover {
    background-color: ${brand.Primary};
  }
`;

const contentContainerStyle = css`
  background-color: ${neutral.White};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  color: ${neutral.Grey5};
`;

const tabContentStyle = css`
  padding: 2rem;
  
  ${mq.tablet} {
    padding: 3rem;
  }
`;

const venuesContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const venueCardStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const venueTitleStyle = css`
  font-size: 1.75rem;
  margin: 0;
  color: ${brand.Secondary};
  text-align: center;
`;

const venueDescriptionStyle = css`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const venueDetailsGridStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
  
  ${mq.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const detailItemStyle = css`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background-color: ${neutral.Grey1};
  border-radius: 8px;
  
  svg {
    color: ${brand.Primary};
    flex-shrink: 0;
  }
`;

const detailWithIconStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
`;

const detailTitleStyle = css`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${brand.Secondary};
  font-size: 1rem;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
`;

const detailValueStyle = css`
  color: ${neutral.Grey5};
`;

const mapContainerStyle = css`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const mapIframeStyle = css`
  width: 100%;
  height: 100%;
  border: none;
`;

const infoCardStyle = css`
  margin-bottom: 2rem;
  background-color: ${neutral.White};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const infoCardHeaderStyle = css`
  padding: 1.25rem;
  background-color: ${neutral.Grey1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${neutral.Grey2};
  }
`;

const infoCardHeaderContentStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: ${brand.Primary};
  }
`;

const infoCardTitleStyle = css`
  margin: 0;
  font-size: 1.25rem;
  color: ${brand.Secondary};
`;

const infoCardBodyStyle = css`
  padding: 1.5rem;
  
  p {
    margin-top: 0;
    line-height: 1.6;
  }
`;

const airportInfoStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  ${mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const airportCardStyle = css`
  background-color: ${neutral.Grey1};
  padding: 1.5rem;
  border-radius: 8px;
  
  h4 {
    margin: 0 0 1rem;
    color: ${brand.Secondary};
    font-size: 1.1rem;
  }
`;

const transportListStyle = css`
  margin: 0;
  padding: 0 0 0 1.25rem;
  
  li {
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const transportOptionsStyle = css`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const transportOptionStyle = css`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const transportIconStyle = css`
  color: ${brand.Primary};
  margin-top: 0.25rem;
  flex-shrink: 0;
`;

const transportTitleStyle = css`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: ${brand.Secondary};
`;

const linkStyle = css`
  color: ${brand.Primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${brand.Secondary};
    text-decoration: underline;
  }
`;

const hotelInfoStyle = css`
  padding: 1.5rem;
`;

const accommodationDescStyle = css`
  margin-top: 0;
  line-height: 1.6;
`;

const hotelCategoriesStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  ${mq.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const hotelCategoryStyle = css`
  background-color: ${neutral.Grey1};
  padding: 1.5rem;
  border-radius: 8px;
  
  h4 {
    margin: 0 0 1rem;
    color: ${brand.Secondary};
    font-size: 1.1rem;
  }
`;

const hotelListStyle = css`
  margin: 0;
  padding: 0 0 0 1.25rem;
  
  li {
    margin-bottom: 0.75rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const bookingTipStyle = css`
  margin-top: 1.5rem;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid ${brand.Primary};
  
  h4 {
    margin: 0 0 0.5rem;
    color: ${brand.Secondary};
    font-size: 1.1rem;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const comingSoonCardStyle = css`
  background-color: ${neutral.White};
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
`;

const comingSoonContentStyle = css`
  max-width: 600px;
`;

const comingSoonTitleStyle = css`
  color: ${brand.Secondary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const comingSoonTextStyle = css`
  color: ${neutral.Grey4};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const tbaContainerStyle = css`
  background-color: ${neutral.Grey1};
  border: 2px dashed ${neutral.Grey3};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const tbaTextStyle = css`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${brand.Secondary};
  margin: 0 0 1rem;
`;

const venueDetailStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 0.25rem;
`;

const calendarIconStyle = css`
  flex-shrink: 0;
  color: ${brand.Primary};
`;

const dateValueStyle = css`
  color: ${neutral.Grey5};
  font-size: 1rem;
`;

const hotelButtonStyle = css`
  color: ${brand.Primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  
  &:hover {
    color: ${brand.Secondary};
    text-decoration: underline;
  }
`;

export default VenueSection;
