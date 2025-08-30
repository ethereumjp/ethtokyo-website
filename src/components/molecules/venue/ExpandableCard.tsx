import type { FC, ReactNode } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import {
  cardStyle,
  cardHeaderStyle,
  cardHeaderContentStyle,
  cardTitleStyle,
  cardBodyStyle,
} from "@/themes/styles/venue";

interface ExpandableCardProps {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

const ExpandableCard: FC<ExpandableCardProps> = ({
  title,
  icon: Icon,
  isExpanded,
  onToggle,
  children,
}) => {
  return (
    <div css={cardStyle}>
      <button
        css={cardHeaderStyle}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onToggle();
          }
        }}
        aria-expanded={isExpanded}
        type="button"
      >
        <div css={cardHeaderContentStyle}>
          <Icon size={24} />
          <h3 css={cardTitleStyle}>{title}</h3>
        </div>
        {isExpanded ? <HiChevronUp size={20} /> : <HiChevronDown size={20} />}
      </button>

      {isExpanded && <div css={cardBodyStyle}>{children}</div>}
    </div>
  );
};

export default ExpandableCard;
