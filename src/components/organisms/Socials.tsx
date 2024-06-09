import { info } from "@/themes/settings/color";
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
        <GoGlobe size={36} css={css`margin: 12.5px;`} />
      </a>
      <SocialIcon
        css={css`:hover {fill: ${info.Attention};}`}
        url="https://x.com/Ethereum_JP"
        bgColor="transparent"
        fgColor="currentColor"
        label="Twitter/X"
        target="_blank"
        rel="noreferrer"
        style={{ height: 72, width: 72 }}
      />
      <SocialIcon
        css={css`:hover {fill: ${info.Attention};}`}
        url="https://discord.gg/Tm5jU3DSCE"
        bgColor="transparent"
        fgColor="currentColor"
        label="Discord"
        target="_blank"
        rel="noreferrer"
        style={{ height: 72, width: 72 }}
      />
      <SocialIcon
        css={css`:hover {fill: ${info.Attention};}`}
        url="https://github.com/ethereumjp"
        bgColor="transparent"
        fgColor="currentColor"
        label="Github"
        target="_blank"
        rel="noreferrer"
        style={{ height: 72, width: 72 }}
      />
    </div>
  );
};
