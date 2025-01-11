import { mq } from "@/themes/settings/breakpoints";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";

import type { FC } from "react";
const Footer: FC<ComponentProps> = ({ children }) => {
  const footerStyle = css`
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
        © {new Date().getFullYear()} ETHTokyo - Ethereum Japan.
      </span>
    </footer>
  );
};

export default Footer;
