import { css } from "@emotion/react";
import { SocialIcon } from "react-social-icons";

export const Socials = () => {
  const container = css`
    display: flex;
    gap: 16px;
    justify-content: center;
  `;

  return (
    <div css={container}>
      <SocialIcon
        url="https://x.com/Ethereum_JP"
        bgColor="transparent"
        fgColor="white"
        label="Twitter/X"
        target="_blank"
        rel="noreferrer"
      />
      <SocialIcon
        url="https://discord.gg/Tm5jU3DSCE"
        bgColor="transparent"
        fgColor="white"
        label="Discord"
        target="_blank"
        rel="noreferrer"
      />
      <SocialIcon
        url="https://github.com/ethereumjp"
        bgColor="transparent"
        fgColor="white"
        label="Github"
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
};
