import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import type { FC } from "react";

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
      grid-template-columns: repeat(4, 1fr);
    }
  `;

  const footerHeadingStyle = css`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const footerTextStyle = css`
    color: ${neutral.Grey3};
  `;

  const footerLinksStyle = css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    a {
      color: ${neutral.Grey3};
      transition: color 0.2s ease;
      
      &:hover {
        color: ${neutral.White};
      }
    }
  `;

  const inputContainerStyle = css`
    display: flex;
    gap: 0.5rem;
  `;

  const inputStyle = css`
    background-color: ${neutral.Grey5};
    color: ${neutral.White};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    flex: 1;
    border: none;
  `;

  const buttonStyle = css`
    background-color: ${brand.Primary};
    color: ${neutral.White};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: #FF7766;
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
          <h3 css={footerHeadingStyle}>ETHTokyo2025</h3>
          <p css={footerTextStyle}>Building the future of Ethereum in Asia</p>
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
            <a href="https://twitter.com/Ethereum_JP">Twitter</a>
            <a href="https://discord.gg/ethereum-jp">Discord</a>
            <a href="https://t.me/ethtokyo">Telegram</a>
          </div>
        </div>
        <div>
          <h4 css={footerHeadingStyle}>Newsletter</h4>
          <p css={footerTextStyle}>
            Stay updated with the latest news and announcements
          </p>
          <div css={inputContainerStyle}>
            <input
              type="email"
              placeholder="Enter your email"
              css={inputStyle}
            />
            <button type="button" css={buttonStyle}>
              Subscribe
            </button>
          </div>
        </div>
        <div css={copyrightStyle}>
          © {new Date().getFullYear()} ETHTokyo - Ethereum Japan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
