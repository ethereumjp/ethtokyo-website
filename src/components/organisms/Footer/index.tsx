import Button from "@/components/atoms/Button";
import eventInfo from "@/data/eventInfo.json";
import { mq } from "@/themes/settings/breakpoints";
import { neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import Airtable from "airtable";
import AirtableError from "airtable/lib/airtable_error";
import { type FC, useState } from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { SiMatrix } from "react-icons/si";

// Airtable configurations to store newsletter subscribers
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE as string);
const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE as string);

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

  const inputContainerStyle = css`
    display: flex;
    gap: 0.5rem;
  `;

  const formStyle = css`
    align-items: center;
    display: flex;
    width: 100%;
  `;

  const inputStyle = css`
    background-color: ${neutral.Grey5};
    border: none;
    border-radius: 0.5rem;
    color: ${neutral.White};
    flex: 1;
    padding: 0.5rem 1rem;
  `;

  const footerButtonStyle = css`
    border-radius: 0.5rem !important;
    margin-left: 0.5rem;
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

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [sendStatus, setSendStatus] = useState<number>(0); // 0: 未送信, 1: 送信中, 2: 送信成功, 3: 送信失敗

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendStatus(1);

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value as string;

    table.create(
      {
        Email: email as string,
      },
      (err, record) => {
        if (err) {
          setSendStatus(3);
          throw new Error(
            `Failed${err instanceof AirtableError ? `: ${err.message}` : ""} 😕`,
          );
        }
        setSendStatus(2);
        return JSON.stringify({
          message: "SUCCESS",
          address: email as string,
          record: record?.getId(),
        });
      },
    );
  };

  // Helper to get button label based on sendStatus
  const getNewsletterButtonLabel = () => {
    switch (sendStatus) {
      case 1:
        return "Sending...";
      case 2:
        return "Subscribed";
      default:
        return "Subscribe";
    }
  };

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
        <div>
          <h4 css={footerHeadingStyle}>Newsletter</h4>
          <p css={footerTextStyle}>
            Stay updated with the latest news and announcements
          </p>
          <div css={inputContainerStyle}>
            <form onSubmit={handleSubmit} css={formStyle}>
              <input
                type="email"
                placeholder="Enter your email"
                css={inputStyle}
                id="email"
                required
                pattern='^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                title="Please enter a valid email address"
                onChange={(e) => setIsValidEmail(e.target.validity.valid)}
                disabled={[1, 2, 3].includes(sendStatus)}
              />
              <Button
                size="small"
                variant={
                  sendStatus === 0
                    ? "primary"
                    : sendStatus === 1
                      ? "secondary"
                      : sendStatus === 2
                        ? "disabled"
                        : sendStatus === 3
                          ? "disabled"
                          : "disabled"
                }
                type="submit"
                css={footerButtonStyle}
              >
                {getNewsletterButtonLabel()}
              </Button>
            </form>
          </div>
        </div>
        <div css={copyrightStyle}>© {new Date().getFullYear()} ETHTokyo.</div>
      </div>
    </footer>
  );
};

export default Footer;
