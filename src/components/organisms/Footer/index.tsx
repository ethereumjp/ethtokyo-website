import eventInfo from "@/data/eventInfo.json";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import type { FC } from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC<ComponentProps> = ({ children }) => {
  const footerStyle = css`
    background-color: ${neutral.Grey6};
    color: ${neutral.White};
    padding: 3rem 1rem;
  `;

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    
    ${mq.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  `;

  const footerHeadingStyle = css`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const footerTextStyle = css`
    color: ${neutral.Grey3};
    line-height: 1.6;
  `;

  const footerLinksStyle = css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    a {
      color: ${neutral.Grey3};
      transition: color 0.2s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      &:hover {
        color: ${neutral.White};
      }
      
      svg {
        font-size: 1.25rem;
      }
    }
  `;

  const copyrightStyle = css`
    margin-top: 2rem;
    text-align: center;
    font-size: 0.875rem;
    color: ${neutral.Grey3};
    grid-column: 1 / -1;
    padding-top: 1.5rem;
    border-top: 1px solid ${neutral.Grey5};
  `;

  return (
    <footer css={footerStyle}>
      <div css={containerStyle}>
        <div>
          <h3 css={footerHeadingStyle}>{eventInfo.title}</h3>
          <p css={footerTextStyle}>
            Building technology, community, and culture in Tokyo. Connecting
            diverse minds to foster innovations for humanity.
          </p>
        </div>
        <div>
          <h4 css={footerHeadingStyle}>Quick Links</h4>
          <div css={footerLinksStyle}>
            <a href="#about">About</a>
            <a href="#schedule">Schedule</a>
            <a href="#venue">Venue</a>
          </div>
        </div>
        <div>
          <h4 css={footerHeadingStyle}>Connect</h4>
          <div css={footerLinksStyle}>
            <a href="https://x.com/Ethereum_JP">
              <FaXTwitter />
              <span>X</span>
            </a>
            <a href="https://discord.gg/Tm5jU3DSCE">
              <FaDiscord />
              <span>Discord</span>
            </a>
            <a href="https://t.me/ethtokyo">
              <FaTelegram />
              <span>Telegram</span>
            </a>
          </div>
        </div>
        <div css={copyrightStyle}>© {new Date().getFullYear()} ETHTokyo.</div>
      </div>
    </footer>
  );
};

export default Footer;
