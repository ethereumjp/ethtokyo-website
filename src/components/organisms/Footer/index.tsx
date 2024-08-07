import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import type { FC } from "react";

const Footer: FC<ComponentProps> = ({ children }) => {
  const footerStyle = css`
    background-color: ${brand.Shuiro};
    padding: 1rem 0;
    text-align: center;
    width: 100%;
  `;

  return (
    <footer css={footerStyle}>
      <span
        css={css`
          font-size: 0.75rem;
          letter-spacing: 0.07rem;

          ${mq.laptop} {
            font-size: 1rem;
          }
        `}
      >
        © 2024 ETHTokyo - Ethereum Japan. Domain (ethtokyo.com) provided by
        Yusuke Obinata.
      </span>
    </footer>
  );
};

export default Footer;
