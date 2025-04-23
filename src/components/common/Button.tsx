import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { type SerializedStyles, css } from "@emotion/react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  css?: SerializedStyles;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  href,
  external = false,
  onClick,
  className,
  type = "button",
  css: cssProp,
}: ButtonProps) => {
  const baseStyle = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 9999px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s ease;
  `;

  const variantStyles = {
    primary: css`
      background-color: ${brand.Primary};
      color: ${neutral.White};
      &:hover {
        background-color: ${themeLight.PrimaryHover};
      }
    `,
    secondary: css`
      background-color: ${brand.Secondary};
      color: ${neutral.White};
      &:hover {
        background-color: ${themeLight.SecondaryHighContrast};
      }
    `,
    outline: css`
      background-color: transparent;
      color: ${brand.Primary};
      border: 2px solid ${brand.Primary};
      &:hover {
        background-color: ${themeLight.PrimaryLowContrast};
      }
    `,
  };

  const sizeStyles = {
    small: css`
      padding: 0.5rem 1.25rem;
      font-size: 0.875rem;
    `,
    medium: css`
      padding: 0.75rem 1.75rem;
      font-size: 1rem;
      ${mq.tablet} {
        padding: 0.875rem 2rem;
      }
    `,
    large: css`
      padding: 1rem 2.25rem;
      font-size: 1.125rem;
      ${mq.tablet} {
        padding: 1.125rem 2.5rem;
        font-size: 1.25rem;
      }
    `,
  };

  const buttonStyle = css`
    ${baseStyle}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${cssProp}
  `;

  const content = (
    <>
      {children}
      {icon && <span className="button-icon">{icon}</span>}
    </>
  );

  if (href && external) {
    return (
      <a
        href={href}
        css={buttonStyle}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        css={buttonStyle}
        className={className}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  // 通常ボタン
  return (
    <button
      type={type}
      css={buttonStyle}
      className={className}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
