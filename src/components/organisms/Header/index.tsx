import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import { type FC, useEffect, useState } from "react";

const Header: FC<ComponentProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerStyle = css`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    transition: all 0.3s ease;
    background-color: ${isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent"};
    backdrop-filter: ${isScrolled ? "blur(8px)" : "none"};
    box-shadow: ${
      isScrolled
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        : "none"
    };
  `;

  const containerStyle = css`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;

    ${mq.tablet} {
      padding: 0 1.5rem;
    }

    ${mq.laptop} {
      padding: 0 2rem;
    }
  `;

  const navContentStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  `;

  const logoStyle = css`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${brand.Primary};
  `;

  const navLinksStyle = css`
    display: none;

    ${mq.tablet} {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
  `;

  const navLinkStyle = css`
    color: ${brand.Secondary};
    transition: color 0.2s ease;

    &:hover {
      color: ${brand.Primary};
    }
  `;

  const navButtonStyle = css`
    background-color: ${brand.Primary};
    color: ${neutral.White};
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #FF7766;
    }
  `;

  return (
    <header css={headerStyle}>
      <div css={containerStyle}>
        <div css={navContentStyle}>
          <div css={logoStyle}>
            <span>ETHTokyo2025</span>
          </div>
          <nav css={navLinksStyle}>
            <a href="#about" css={navLinkStyle}>
              About
            </a>
            <a href="#schedule" css={navLinkStyle}>
              Schedule
            </a>
            <a href="#tracks" css={navLinkStyle}>
              Tracks
            </a>
            <a href="#venue" css={navLinkStyle}>
              Venue
            </a>
            <button type="button" css={navButtonStyle}>
              Register Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
