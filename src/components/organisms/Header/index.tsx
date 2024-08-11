import { mq } from "@/themes/settings/breakpoints";
import { brand } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import Link from "next/link";
import type { FC } from "react";

const Header: FC<ComponentProps> = ({ children }) => {
  const headerStyle = css`
    background-color: ${brand.Miyabi};
    padding: 1rem 0;
    position: absolute;
    text-align: right;
    width: 100%;
    z-index: 5;
  `;

  const MenuLink = (props: { page: string; text: string }) => {
    return (
      <Link
        href={props.page}
        css={css` font-size: 2rem; padding: 0 1rem; text-decoration: none;`}
      >
        {props.text}
      </Link>
    );
  };

  return (
    <div css={headerStyle}>
      <MenuLink page="#registration" text="Get Tickets" />
      <MenuLink page="/guidelines" text="Hacker Guide" />
    </div>
  );
};

export default Header;
