import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { type SerializedStyles, css } from "@emotion/react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "disabled";
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
    align-items: center;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    display: inline-flex;
    font-weight: 600;
    gap: 0.5rem;
    justify-content: center;
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
      cursor: not-allowed;
    `,
    outline: css`
      background-color: transparent;
      outline: 2px solid ${brand.Primary};
      color: ${brand.Primary};
      &:hover {
        background-color: ${themeLight.PrimaryLowContrast};
      }
    `,
    disabled: css`
      background-color: ${neutral.Grey3};
      color: ${neutral.White};
      cursor: not-allowed;
    `,
  };

  const sizeStyles = {
    small: css`
      font-size: 0.875rem;
      padding: 0.5rem 1.25rem;
    `,
    medium: css`
      font-size: 1rem;
      padding: 0.75rem 1.75rem;
      ${mq.tablet} {
        padding: 0.875rem 2rem;
      }
    `,
    large: css`
      font-size: 1.125rem;
      padding: 1rem 2.25rem;
      ${mq.tablet} {
        font-size: 1.25rem;
        padding: 1.125rem 2.5rem;
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
      disabled={["secondary", "disabled"].includes(variant)}
    >
      {content}
    </button>
  );
};

export default Button;
