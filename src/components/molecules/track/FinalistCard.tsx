import OptimizedImage from "@/components/atoms/OptimizedImage";
import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC } from "react";
import type { Finalist } from "@/types/finalists";

interface FinalistCardProps {
  finalist: Finalist;
}

const FinalistCard: FC<FinalistCardProps> = ({ finalist }) => {
  const hasImage = finalist.image && finalist.image.trim() !== "";

  return (
    <div css={finalistCardStyle}>
      <div css={finalistImageWrapperStyle}>
        {hasImage ? (
          <OptimizedImage
            src={finalist.image}
            alt={finalist.name}
            css={finalistImageStyle}
            width={80}
            height={80}
          />
        ) : (
          <div css={finalistPlaceholderStyle}>🍕</div>
        )}
        <div css={finalistPrizeBadgeStyle}>{finalist.prize}</div>
      </div>
      <div css={finalistInfoStyle}>
        <h4 css={finalistNameStyle}>{finalist.name}</h4>
        <p css={finalistDescriptionStyle}>{finalist.description}</p>
        {finalist.link && finalist.link.trim() !== "" && (
          <a
            href={finalist.link}
            target="_blank"
            rel="noopener noreferrer"
            css={finalistLinkStyle}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
};

// Styles
const finalistCardStyle = css`
  background: linear-gradient(135deg, ${neutral.White} 0%, ${neutral.Grey1} 100%);
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid ${brand.Primary}20;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${brand.Primary}40;
  }
`;

const finalistImageWrapperStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const finalistImageStyle = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${brand.Primary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const finalistPlaceholderStyle = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${neutral.Grey2};
  border: 3px solid ${neutral.Grey4};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`;

const finalistPrizeBadgeStyle = css`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${brand.Primary} 0%, ${brand.Secondary} 100%);
  color: ${neutral.White};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  z-index: 1;
`;

const finalistInfoStyle = css`
  text-align: center;
`;

const finalistNameStyle = css`
  color: ${neutral.Grey6};
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`;

const finalistDescriptionStyle = css`
  color: ${neutral.Grey5};
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0 0 1rem;
`;

const finalistLinkStyle = css`
  color: ${brand.Primary};
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${brand.Secondary};
    text-decoration: underline;
  }
`;

export default FinalistCard;
