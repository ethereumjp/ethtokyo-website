import { mq } from "@/themes/settings/breakpoints";
import { brand, info, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { type FC, useCallback, useEffect, useRef, useState } from "react";

const Header: FC<ComponentProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESCで閉じる
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  // フォーカスをドロワーに移す（簡易版）
  useEffect(() => {
    if (isMenuOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isMenuOpen]);

  const headerStyle = css`
    backdrop-filter: ${isScrolled ? "blur(8px)" : "none"};
    background-color: ${isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent"};
    box-shadow: ${isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none"};
    position: fixed;
    transition: all 0.3s ease;
    width: 100%;
    z-index: 50;
  `;

  const containerStyle = css`
    padding: 0 1rem;

    ${mq.tablet} {
      padding: 0 1.5rem;
    }

    ${mq.laptop} {
      padding: 0 2rem;
    }
  `;

  const navContentStyle = css`
    align-items: center;
    height: 4rem;
    display: flex;
    justify-content: space-between;
  `;

  const logoStyle = css`
    align-items: center;
    color: ${brand.Primary};
    display: flex;
    font-size: 1.5rem;
    font-weight: 700;
  `;

  const navLinksStyle = css`
    display: none;

    ${mq.tablet} {
      align-items: center;
      display: flex;
      gap: 2rem;
    }
  `;

  const navLinkStyle = css`
    all: unset;
    cursor: pointer;
    display: block;
    font-weight: bold;
    padding: 0.75rem 1rem;
    text-align: center;
    border-radius: 12px;

    &:hover {
      background-color: #eee;
    }
  `;

  const hamburgerStyle = css`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      background-color: ${brand.Primary};
      height: 3px;
      transition: 0.3s;
      width: 25px;
    }

    ${mq.tablet} {
      display: none;
    }
  `;

  const drawerOverlayStyle = css`
    background-color: rgba(0, 0, 0, 0.4);
    inset: 0;
    opacity: ${isMenuOpen ? 1 : 0};
    pointer-events: ${isMenuOpen ? "auto" : "none"};
    position: fixed;
    transition: opacity 0.3s ease;
    height: 100vh;
    z-index: 98;
  `;

  const drawerMenuStyle = css`
    background-color: ${neutral.White};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100vh;
    width: 40vw;
    overflow-y: auto;
    padding: 2rem 1.5rem 1.5rem;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${isMenuOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
    z-index: 99;
  `;

  const closeButtonStyle = css`
    align-self: flex-end;
    background: none;
    border: none;
    color: ${brand.Primary};
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
      color: ${brand.Secondary};
    }
  `;

  return (
    <header css={headerStyle}>
      <div css={containerStyle}>
        <div css={navContentStyle}>
          <Link href="/">
            <div css={logoStyle}>
              <span>ETHTokyo</span>
            </div>
          </Link>
          <div css={css`${mq.tablet} {display: none;}`}>
            <Hamburger
              color={brand.Primary}
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
            />
          </div>
          <nav css={navLinksStyle}>
            <Link
              href="/#about"
              css={navLinkStyle}
              style={{ color: brand.Secondary }}
            >
              About
            </Link>
            <Link
              href="/#conference"
              css={navLinkStyle}
              style={{ color: brand.Secondary }}
            >
              Conference
            </Link>
            <Link
              href="/#tracks"
              css={navLinkStyle}
              style={{ color: brand.Secondary }}
            >
              Hackathon
            </Link>
            <Link
              href="/#gallery"
              css={navLinkStyle}
              style={{ color: brand.Secondary }}
            >
              Gallery
            </Link>
            <Link
              href="/#schedule"
              css={navLinkStyle}
              style={{ color: brand.Secondary }}
            >
              Schedule
            </Link>
            <Link
              href="/#venue"
              css={navLinkStyle}
              style={{ color: brand.Secondary }}
            >
              Venue
            </Link>
          </nav>
        </div>
      </div>
      {/* ドロワー背景 */}
      <div
        css={drawerOverlayStyle}
        aria-label="Close menu"
        onClick={() => setIsMenuOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsMenuOpen(false);
        }}
      />
      {/* ドロワーメニュー */}
      <div
        css={drawerMenuStyle}
        ref={drawerRef}
        aria-modal="true"
        aria-label="Navigation menu"
        tabIndex={-1}
      >
        <div css={css`margin-left: auto; margin-right: 0;`}>
          <Hamburger
            color={brand.Primary}
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
          />
        </div>
        <Link
          href="/#about"
          css={navLinkStyle}
          style={{ color: brand.Secondary }}
        >
          About
        </Link>
        <Link
          href="/#conference"
          css={navLinkStyle}
          style={{ color: brand.Secondary }}
        >
          Conference
        </Link>
        <Link
          href="/#tracks"
          css={navLinkStyle}
          style={{ color: brand.Secondary }}
        >
          Hackathon
        </Link>
        <Link
          href="/#gallery"
          css={navLinkStyle}
          style={{ color: brand.Secondary }}
        >
          Gallery
        </Link>
        <Link
          href="/#schedule"
          css={navLinkStyle}
          style={{ color: brand.Secondary }}
        >
          Schedule
        </Link>
        <Link
          href="/#venue"
          css={navLinkStyle}
          style={{ color: brand.Secondary }}
        >
          Venue
        </Link>
      </div>
    </header>
  );
};

export default Header;
