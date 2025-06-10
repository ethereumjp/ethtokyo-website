import Button from "@/components/common/Button";
import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ESCで閉じる
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu]);

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
    left: 0;
    position: fixed;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
    z-index: 50;
  `;

  const containerStyle = css`
    margin: 0 auto;
    max-width: 1280px;
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
    display: flex;
    height: 4rem;
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
    color: ${brand.Secondary};
    cursor: pointer;
    display: block;
    font-weight: bold;
    padding: 0.75rem 1rem;
    text-align: center;

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
    z-index: 40;
  `;

  const drawerMenuStyle = css`
    background-color: ${neutral.White};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100vh;
    outline: none;
    overflow-y: auto;
    padding: 2rem 1.5rem 1.5rem;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${isMenuOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
    width: 280px;
    z-index: 50;
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
          {/* ハンバーガーアイコン */}
          <div
            css={hamburgerStyle}
            aria-label="Toggle menu"
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleMenu();
            }}
          >
            <span />
            <span />
            <span />
          </div>
          <nav css={navLinksStyle}>
            <Link href="#about" css={navLinkStyle}>
              About
            </Link>
            {/* <Link href="#conference" css={navLinkStyle}>
              Conference
            </Link> */}
            <Link href="#schedule" css={navLinkStyle}>
              Schedule
            </Link>
            <Link href="#tracks" css={navLinkStyle}>
              Hackathon
            </Link>
            <Link href="#venue" css={navLinkStyle}>
              Venue
            </Link>
            <Link href="#apply" css={navLinkStyle}>
              Apply / Partcipate
            </Link>
          </nav>
        </div>
      </div>
      {/* ドロワー背景 */}
      <div
        css={drawerOverlayStyle}
        aria-label="Close menu"
        onClick={closeMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") closeMenu();
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
        <button
          type="button"
          onClick={closeMenu}
          css={closeButtonStyle}
          aria-label="Close menu"
        >
          ×
        </button>
        <button
          type="button"
          css={navLinkStyle}
          onClick={() => {
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
            closeMenu();
          }}
        >
          About
        </button>
        {/* <button
          type="button"
          css={navLinkStyle}
          onClick={() => {
            document
              .querySelector("#conference")
              ?.scrollIntoView({ behavior: "smooth" });
            closeMenu();
          }}
        >
          Conference
        </button> */}
        <button
          type="button"
          css={navLinkStyle}
          onClick={() => {
            document
              .querySelector("#schedule")
              ?.scrollIntoView({ behavior: "smooth" });
            closeMenu();
          }}
        >
          Schedule
        </button>
        <button
          type="button"
          css={navLinkStyle}
          onClick={() => {
            document
              .querySelector("#tracks")
              ?.scrollIntoView({ behavior: "smooth" });
            closeMenu();
          }}
        >
          Hackathon
        </button>
        <button
          type="button"
          css={navLinkStyle}
          onClick={() => {
            document
              .querySelector("#venue")
              ?.scrollIntoView({ behavior: "smooth" });
            closeMenu();
          }}
        >
          Venue
        </button>
        <button
          type="button"
          css={navLinkStyle}
          onClick={() => {
            window.open(
              "https://ethtokyo.deform.cc/25-speaker-application",
              "_blank",
            );
            closeMenu();
          }}
        >
          Apply as a Speaker
        </button>
      </div>
    </header>
  );
};

export default Header;
