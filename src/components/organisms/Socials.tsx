import { info } from "@/themes/settings/color";
import { css } from "@emotion/react";
import { GoGlobe, GoMail } from "react-icons/go";
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
      <a href="mailto:info@ethtokyo.org">
        <GoMail size={36} css={css`margin: 12.5px;`} color="black" />
      </a>
      <SocialIcon
        css={css`:hover {fill: ${info.Attention};}`}
        url="https://x.com/Ethereum_JP"
        bgColor="transparent"
        fgColor="black"
        label="Twitter/X"
        target="_blank"
        rel="noreferrer"
        style={{ height: 72, width: 72 }}
      />
      <SocialIcon
        css={css`:hover {fill: ${info.Attention};}`}
        url="https://github.com/ethereumjp"
        bgColor="transparent"
        fgColor="black"
        label="Github"
        target="_blank"
        rel="noreferrer"
        style={{ height: 72, width: 72 }}
      />
      <SocialIcon
        css={css`:hover {fill: ${info.Attention};}`}
        url="https://discord.gg/Tm5jU3DSCE"
        bgColor="transparent"
        fgColor="black"
        label="Discord"
        target="_blank"
        rel="noreferrer"
        style={{ height: 72, width: 72 }}
      />
    </div>
  );
};
