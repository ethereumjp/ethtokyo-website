import Button from "@/components/common/Button";
import { neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import Airtable from "airtable";
import AirtableError from "airtable/lib/airtable_error";
import { type FC, useState } from "react";

const Newsletter: FC<ComponentProps> = ({ children }) => {
  const footerHeadingStyle = css`
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
  `;

  const footerTextStyle = css`
    color: ${neutral.Grey3};
    line-height: 1.6;
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

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [sendStatus, setSendStatus] = useState<number>(0); // 0: 未送信, 1: 送信中, 2: 送信成功, 3: 送信失敗

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendStatus(1);

    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value as string;

    // Airtable configurations to store newsletter subscribers
    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_PAT,
    }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE as string);
    const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE as string);

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

  return (
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
            pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
            title="Please enter a valid email address"
            onChange={(e) => setIsValidEmail(e.target.validity.valid)}
            disabled={[1, 2].includes(sendStatus)}
          />
          <Button
            size="small"
            variant={
              !isValidEmail && sendStatus === 0
                ? "disabled"
                : sendStatus === 2
                  ? "secondary"
                  : "primary"
            }
            type="submit"
            css={footerButtonStyle}
          >
            {sendStatus === 2 ? "Subscribed" : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
