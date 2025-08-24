import Newsletter from "@/components/organisms/Footer/Newsletter";
import eventInfo from "@/data/eventInfo.json";
import { mq } from "@/themes/settings/breakpoints";
import { neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import type { FC } from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { SiMatrix } from "react-icons/si";

const Footer: FC<ComponentProps> = ({ children }) => {
  const footerStyle = css`
    background-color: ${neutral.Grey6};
    color: ${neutral.White};
    padding: 3rem 1rem;
  `;

  const containerStyle = css`
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    max-width: 1280px;

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
    line-height: 1.6;
  `;

  const footerLinksStyle = css`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    a {
      align-items: center;
      color: ${neutral.Grey3};
      display: flex;
      gap: 0.5rem;
      transition: color 0.2s ease;

      &:hover {
        color: ${neutral.White};
      }

      svg {
        font-size: 1.25rem;
      }
    }
  `;

  const copyrightStyle = css`
    border-top: 1px solid ${neutral.Grey5};
    color: ${neutral.Grey3};
    font-size: 0.875rem;
    grid-column: 1 / -1;
    margin-top: 2rem;
    padding-top: 1.5rem;
    text-align: center;
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
            {/* <Link href="#about">About</Link>
            <Link href="#schedule">Schedule</Link>
            <Link href="#tracks">Hackathon</Link>
            <Link href="#venue">Venue</Link> */}
            <a
              href="https://speak.ethtokyo.org/conference-2025/submit"
              target="_blank"
              rel="noreferrer"
            >
              Speaker application
            </a>
            <a
              href="https://ethtokyo.deform.cc/25-sponsor-application"
              target="_blank"
              rel="noreferrer"
            >
              Enterprise Sponsorship
            </a>
            <a
              href="https://app.moongate.id/e/ethtokyo2025"
              target="_blank"
              rel="noreferrer"
            >
              Community Sponsorship
            </a>
          </div>
        </div>
        <div>
          <h4 css={footerHeadingStyle}>Connect</h4>
          <div css={footerLinksStyle}>
            <a href="https://twitter.com/Ethereum_JP">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="https://t.me/ethtokyo">
              <FaTelegramPlane />
              <span>Telegram</span>
            </a>
            <a href="https://matrix.to/#/#ethtokyo:matrix.org">
              <SiMatrix />
              <span>Matrix</span>
            </a>
          </div>
        </div>
        <Newsletter />
        <div css={copyrightStyle}>© {new Date().getFullYear()} ETHTokyo.</div>
      </div>
    </footer>
  );
};

export default Footer;
