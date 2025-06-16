import Button from "@/components/common/Button";
import { brand, info, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";
import { BiIdCard } from "react-icons/bi";

const TicketSection: FC = () => {
  const sectionStyle = css`
    background-color: ${neutral.White};
    padding: 1rem 1rem;
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

  const ticketSectionStyle = css`
    background-color: ${info.Attention};
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    margin: 2rem auto;
    max-width: 100%;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
  `;

  const ticketHeadingStyle = css`
    align-items: center;
    color: ${brand.Secondary};
    display: flex;
    font-size: 1.5rem;
    gap: 0.75rem;
    margin-bottom: 1rem;
  `;

  const ticketDescriptionStyle = css`
    color: ${neutral.Grey4};
    margin-bottom: 1.5rem;
  `;

  return (
    <section id="ticket" css={sectionStyle}>
      <div css={containerStyle}>
        <div css={contentContainerStyle}>
          <div css={ticketSectionStyle}>
            <h3 css={ticketHeadingStyle}>
              <BiIdCard size={28} />
              Event Ticket
            </h3>
            <p css={ticketDescriptionStyle}>
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
              <span
                css={css`
                  color: ${neutral.White};
                `}
              >
                Moongate
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;
