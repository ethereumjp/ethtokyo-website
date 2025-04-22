import Button from "@/components/common/Button";
import eventInfo from "@/data/eventInfo.json";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
// import Airtable from "airtable";
// import AirtableError from "airtable/lib/airtable_error";
import type { FC } from "react";
import { useState } from "react";

// Airtable configurations to store newsletter subscribers.
// const base = new Airtable({
//   apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
// }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE as string);

// const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE as string);

const Footer: FC<ComponentProps> = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

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

  const formStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
  `;

  const inputStyle = css`
    background-color: ${neutral.Grey5};
    color: ${neutral.White};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    flex: 1;
    border: none;
  `;

  const footerButtonStyle = css`
    border-radius: 0.5rem !important;
    margin-left: 0.5rem;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value as string;

    // table.create(
    //   {
    //     Email: email as string,
    //   },
    //   (err, record) => {
    //     if (err) {
    //       throw new Error(
    //         `Failed${err instanceof AirtableError ? `: ${err.message}` : ""} 😕`,
    //       );
    //     }
    //     setIsSubscribed(true);
    //     return JSON.stringify({
    //       message: "SUCCESS",
    //       address: email as string,
    //       record: record?.getId(),
    //     });
    //   },
    // );
  };

  return (
    <footer css={footerStyle}>
      <div css={containerStyle}>
        <div>
          <h3 css={footerHeadingStyle}>{eventInfo.title}</h3>
          <p css={footerTextStyle}>{eventInfo.subtitle}</p>
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
            <a href="https://discord.gg/Tm5jU3DSCE">Discord</a>
            <a href="https://t.me/ethtokyo">Telegram</a>
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
              />
              <Button
                size="small"
                variant={isSubscribed ? "secondary" : "primary"}
                onClick={() => {}}
                type="submit"
                css={footerButtonStyle}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
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
