import { css } from "@emotion/react";
import { GoGlobe } from "react-icons/go";
import { SocialIcon } from "react-social-icons";

export const Socials = () => {
  const container = css`
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: center;
  `;

  return (
    <div css={container}>
      <a
        href="https://ethereumjapan.org/"
        target="_blank"
        rel="noreferrer"
        css={css`line-height: 0;`}
      >
        <GoGlobe size={25} css={css`margin: 12.5px;`} />
      </a>
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
