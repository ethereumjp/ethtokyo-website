import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { ReactNode } from "react";

export interface ContentCardProps {
  headerBgColor?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  cardStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  className?: string;
}

const ContentCard = ({
  headerBgColor = brand.Secondary,
  title,
  subtitle,
  children,
  cardStyle,
  headerStyle,
  className,
}: ContentCardProps) => {
  return (
    <div css={cardContainerStyle} style={cardStyle} className={className}>
      <div
        css={cardHeaderStyle}
        style={{
          backgroundColor: headerBgColor,
          ...headerStyle,
        }}
      >
        <div css={headerContentStyle}>
          {typeof title === "string" ? (
            <h3 css={titleStyle}>{title}</h3>
          ) : (
            title
          )}

          {subtitle && <div css={subtitleContainerStyle}>{subtitle}</div>}
        </div>
      </div>

      <div css={contentStyle}>{children}</div>
    </div>
  );
};

export const cardContainerStyle = css`
  flex: 1;
  min-width: 0;
  max-width: 100%;
  background-color: ${neutral.White};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

export const cardHeaderStyle = css`
  position: relative;
  padding: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    background: linear-gradient(135deg, transparent 33.33%, var(--header-bg-color, ${brand.Secondary}) 33.33%, var(--header-bg-color, ${brand.Secondary}) 66.66%, transparent 66.66%);
    background-size: 30px 15px;
  }
`;

const headerContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const titleStyle = css`
  font-size: 1.5rem;
  color: ${neutral.White};
  margin: 0;
  font-weight: 600;
  
  ${mq.tablet} {
    font-size: 1.5rem;
  }
`;

export const subtitleContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const contentStyle = css`
  padding: 2rem;
  
  ${mq.tablet} {
    padding: 2rem;
  }
`;

export default ContentCard;
