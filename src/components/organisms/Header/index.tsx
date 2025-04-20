import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import type { ComponentProps } from "@/types";
import { css } from "@emotion/react";
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

  const hamburgerStyle = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
      width: 25px;
      height: 3px;
      background-color: ${brand.Primary};
      transition: 0.3s;
    }

    ${mq.tablet} {
      display: none;
    }
  `;

  const drawerOverlayStyle = css`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 40;
    opacity: ${isMenuOpen ? 1 : 0};
    pointer-events: ${isMenuOpen ? "auto" : "none"};
    transition: opacity 0.3s ease;
  `;

  const drawerMenuStyle = css`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: ${neutral.White};
    padding: 2rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 50;
    transform: ${isMenuOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
    outline: none;
    overflow-y: auto;
  `;

  const closeButtonStyle = css`
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${brand.Primary};

    &:hover {
      color: ${brand.Secondary};
    }
  `;

  return (
    <header css={headerStyle}>
      <div css={containerStyle}>
        <div css={navContentStyle}>
          <div css={logoStyle}>
            <span>ETHTokyo2025</span>
          </div>
          {/* Registerボタン（モバイルでも表示） */}
          <div css={css`${mq.tablet} { display: none; }`}>
            <button type="button" css={navButtonStyle}>
              Register Now
            </button>
          </div>
          {/* ハンバーガーアイコン */}
          <div
            css={hamburgerStyle}
            role="button"
            tabIndex={0}
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
      {/* ドロワー背景 */}
      <div
        css={drawerOverlayStyle}
        role="button"
        tabIndex={0}
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
        role="dialog"
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
          Tracks
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
      </div>
    </header>
  );
};

export default Header;
