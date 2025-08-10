import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { mq } from "@/themes/settings/breakpoints";
import { brand, info, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";
import { BiDoorOpen, BiIdCard, BiMicrophone, BiMoney } from "react-icons/bi";
import TaikaiLogoMark from "/public/2025/images/eventPartners/taikai_logomark.svg";

const AboutSection: FC = () => {
  const sectionStyle = css`
    background-color: ${neutral.White};
    padding: 5rem 1rem;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 1280px;
  `;

  const contentContainerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 3rem;
  `;

  const aboutCardStyle = css`
    background-color: ${neutral.Grey1};
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 2.5rem;
  `;

  const aboutContentStyle = css`
    display: grid;
    gap: 2rem;
    
    ${mq.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const paragraphStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.125rem;
    line-height: 1.8;
    margin: 0;
  `;

  const highlightTextStyle = css`
    color: ${brand.Primary};
    font-weight: 600;
  `;

  const themeCardStyle = css`
    background-color: ${brand.Secondary};
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: ${neutral.White};
    padding: 2.5rem;
  `;

  const themeHeadingStyle = css`
    align-items: center;
    display: flex;
    font-size: 1.5rem;
    gap: 0.5rem;
    margin: 0 0 1.5rem;
  `;

  const themeContentStyle = css`
    font-size: 1.125rem;
    line-height: 1.8;
  `;

  const overviewContainerStyle = css`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    
    ${mq.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  `;

  const overviewCardStyle = css`
    background-color: ${neutral.Grey1};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem;
  `;

  const overviewTitleStyle = css`
    align-items: center;
    color: ${brand.Secondary};
    display: flex;
    font-size: 1.5rem;
    gap: 0.5rem;
    margin: 0;
  `;

  const overviewTextStyle = css`
    color: ${neutral.Grey4};
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
  `;

  const tagStyle = css`
    background-color: ${brand.Miyabi};
    border-radius: 2rem;
    color: ${neutral.White};
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  `;

  return (
    <section id="about" css={sectionStyle}>
      <div css={containerStyle}>
        <SectionTitle
          title="What is ETHTokyo?"
          description="We are a community of Tokyo-based developers and professionals, driven by a shared sense of cypherpunk ethos and optimism for the future, dedicated to advance the development and adoption of Ethereum."
        />
        <div css={contentContainerStyle}>
          {/* What's ETHTokyo */}
          <div css={aboutCardStyle}>
            <div css={aboutContentStyle}>
              <div>
                <span css={tagStyle}>Community</span>
                <p css={paragraphStyle}>
                  ETHTokyo is an{" "}
                  <span css={highlightTextStyle}>
                    engaging conference and hackathon
                  </span>{" "}
                  for the global Ethereum community where people with all sorts
                  of backgrounds, ideas, and skills come together to share their
                  love for Ethereum and its world.
                </p>
              </div>
              <div>
                <span css={tagStyle}>Innovation</span>
                <p css={paragraphStyle}>
                  Whether you're a seasoned expert or just curious, you'll find
                  friends and inspiration here. Our goal is simple: to connect
                  diverse minds and foster the creation of amazing new
                  innovations for the future. Join us and be a part of shaping
                  what's next in the Ethereum universe!
                </p>
              </div>
            </div>
          </div>

          {/* Event Theme */}
          <div css={themeCardStyle}>
            <h3 css={themeHeadingStyle}>
              2025 theme: Emancipatory Tech for Future of Humanity
            </h3>
            <div css={themeContentStyle}>
              <p>
                Emancipation begins in the mind; let us radically reimagine how
                we can harness technology to empower people, preserve culture,
                and build a sustainable future in ways not possible today.
              </p>
              <p>
                The goal is to innovate not for its own sake, but to envision
                new ways and better approaches to do things through reshaping
                and redefining the constraints of our own constructed reality.
              </p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 css={overviewTitleStyle}>Overview</h3>
            <div css={overviewContainerStyle}>
              <div css={overviewCardStyle}>
                <h4 css={overviewTitleStyle}>Conference</h4>
                <p css={overviewTextStyle}>
                  Join industry leaders, developers, and enthusiasts for a day
                  of inspiring talks, panel discussions, and networking
                  opportunities. Learn about the latest developments in Ethereum
                  and blockchain technology.
                </p>
                <div css={css`display:flex; justify-content: space-between;`}>
                  <Button
                    css={css`max-width: 312px; max-height: 44px;`}
                    href="https://app.moongate.id/e/ethtokyo2025"
                    external
                    variant="primary"
                    icon={<BiIdCard />}
                  >
                    <span css={css`color: ${neutral.White};`}>Get Tickets</span>
                  </Button>
                  <Button
                    css={css`max-width: 312px; max-height: 44px;`}
                    href="https://speak.ethtokyo.org/conference-2025/submit"
                    external
                    variant="outline"
                    icon={<BiMicrophone />}
                  >
                    <span css={css``}>Apply as speaker</span>
                  </Button>
                </div>
              </div>
              <div css={overviewCardStyle}>
                <h4 css={overviewTitleStyle}>Hackathon</h4>
                <p css={overviewTextStyle}>
                  Put your skills to the test in our multi-day hackathon.
                  Collaborate with talented individuals, build innovative
                  solutions, and compete for exciting prizes. Open to all skill
                  levels.
                </p>
                <div css={css`display:flex; justify-content: space-between;`}>
                  <Button
                    css={css`max-width: 312px; max-height: 44px;`}
                    href="https://app.moongate.id/e/ethtokyo2025"
                    external
                    variant="primary"
                    icon={<BiIdCard />}
                  >
                    <span css={css`color: ${neutral.White};`}>Get Tickets</span>
                  </Button>
                  {/* <div //devfolio
                    className="apply-button"
                    data-hackathon-slug="ethtokyo"
                    data-button-theme="dark-inverted"
                    style={{ height: "44px", width: "312px" }}
                    css={css`
                      width: auto;
                      height: auto;
                      max-width: 100%;
                    `}
                  /> */}
                  <Button
                    css={css`max-width: 312px; max-height: 44px;`}
                    href="https://taikai.network/en/ethtokyo/hackathons/hackathon-2025/overview"
                    external
                    variant="outline"
                    icon={
                      <img
                        src="/2025/images/eventPartners/taikai_logomark.svg"
                        alt="Hacker Registration"
                        style={{ width: 16, height: 16 }}
                      />
                    }
                  >
                    <span css={css``}>Hacker Registration</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Temp_formSection />
        </div>
      </div>
    </section>
  );
};

//////////Conference Section から移植　Conferenceページを公開したら削除//////////////
export const Temp_formSection = () => {
  return (
    <div
      id="apply"
      css={css`
      display: flex;
      flex-direction: column;
      gap: 2rem;
      
      ${mq.laptop} {
        flex-direction: row;
        justify-content: center;
      }
    `}
    >
      {/* <div css={temp_formSectionStyle}>
        <h3 css={temp_formHeadingStyle}>
          <BiIdCard size={28} />
          Event Ticket
        </h3>
        <p css={temp_formDescriptionStyle}>
          When you purchase your ticket, it will be sent to your wallet as
          an NFT. This NFT will be recorded on the blockchain, serving as
          permanent proof of your participation in this event.
        </p>
        <Button
          href="https://app.moongate.id/e/ethtokyo2025"
          external
          size="medium"
          icon={<BiIdCard />}
        >
          <span css={css`color: ${neutral.White};`}>Get Ticket</span>
        </Button>
      </div> */}

      <div css={temp_formSectionStyle}>
        <h3 css={temp_formHeadingStyle}>
          <BiMoney size={28} />
          Call for Sponsors
        </h3>
        <p css={temp_formDescriptionStyle}>
          ETHTokyo'25 is currently accepting sponsors. Please contact us if you
          are interested in sponsoring the event.
        </p>
        <Button
          href="https://ethtokyo.deform.cc/25-sponsor-application"
          external
          size="medium"
          variant="primary"
          icon={<BiMoney />}
        >
          <span css={css`color: ${neutral.White};`}>Sponsor event</span>
        </Button>
      </div>
    </div>
  );
};

const temp_formSectionStyle = css`
    background-color: ${info.Attention};
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin: 2rem auto;
    max-width: 500px;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  `;

const temp_formHeadingStyle = css`
    align-items: center;
    color: ${brand.Secondary};
    display: flex;
    font-size: 1.5rem;
    gap: 0.75rem;
    margin-bottom: 1rem;
  `;

const temp_formDescriptionStyle = css`
    color: ${neutral.Grey4};
    margin-bottom: 1.5rem;
  `;

////////////////////// END ////////////////////////////////

export default AboutSection;
