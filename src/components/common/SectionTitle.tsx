import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC, ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div css={containerStyle} className={className}>
      <h2 css={titleStyle}>
        {title}
        <span css={underlineStyle} />
      </h2>
      {description && <p css={descriptionStyle}>{description}</p>}
    </div>
  );
};

const containerStyle = css`
  text-align: center;
  margin-bottom: 3rem;
`;

const titleStyle = css`
  font-size: 2.5rem;
  text-align: center;
  color: ${brand.Secondary};
  margin-bottom: 0.5rem;
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const underlineStyle = css`
  display: block;
  width: 100px;
  height: 4px;
  background-color: ${brand.Primary};
  margin: 0.5rem auto 2rem;
  border-radius: 2px;
`;

const descriptionStyle = css`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${neutral.Grey4};
`;

export default SectionTitle;
