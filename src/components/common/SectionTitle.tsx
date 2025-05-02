import { brand, neutral } from "@/themes/settings/color";
import { css } from "@emotion/react";
import type { FC, ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
  lightMode?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  description,
  className = "",
  lightMode = false,
}) => {
  return (
    <div css={containerStyle} className={className}>
      <h2 css={[titleStyle, lightMode && lightTitleStyle]}>
        {title}
        <span css={underlineStyle} />
      </h2>
      {description && (
        <p css={[descriptionStyle, lightMode && lightDescriptionStyle]}>
          {description}
        </p>
      )}
    </div>
  );
};

const containerStyle = css`
  margin-bottom: 3rem;
  text-align: center;
`;

const titleStyle = css`
  color: ${brand.Secondary};
  display: inline-block;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  width: 100%;
`;

const lightTitleStyle = css`
  color: ${neutral.White};
`;

const underlineStyle = css`
  background-color: ${brand.Primary};
  border-radius: 2px;
  display: block;
  height: 4px;
  margin: 0.5rem auto 2rem;
  width: 100px;
`;

const descriptionStyle = css`
  color: ${neutral.Grey4};
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
`;

const lightDescriptionStyle = css`
  color: rgba(255, 255, 255, 0.9);
`;

export default SectionTitle;
