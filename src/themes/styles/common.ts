import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";

// セクション共通スタイル
export const sectionStyle = css`
  background: ${themeLight.Background};
  padding: 4rem 2rem;
`;

export const partnersSectionStyle = css`
  background: ${themeLight.Background};
  padding: 0rem 2rem;
`;

export const containerStyle = css`
  margin: 0 auto;
  max-width: 1200px;
`;

export const headingStyle = css`
  color: ${brand.Secondary};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

export const multiGridStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const cardStyle = css`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
`;

export const cardHeadingStyle = css`
  color: ${brand.Secondary};
  font-size: 1.5rem;
  margin: 0;
`;

export const cardParagraphStyle = css`
  color: #777;
  margin: 0.5rem 0 0;
`;

// ボタンスタイル
export const buttonStyle = css`
  align-items: center;
  background-color: ${brand.Primary};
  border-radius: 9999px;
  color: ${neutral.White};
  display: inline-flex;
  font-size: 1rem;
  gap: 0.5rem;
  padding: 8px 2rem;
  transition: background-color 0.2s ease;

  @media (min-width: 480px) {
    font-size: 1.25rem;
    padding: 1rem 2rem;
  }

  &:hover {
    background-color: #FF7766;
  }
`;

// イベント情報スタイル
export const eventInfoStyle = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;
  
  ${mq.tablet} {
    flex-direction: row;
  }
`;

export const infoItemStyle = css`
  align-items: center;
  color: ${neutral.White};
  display: flex;
  gap: 0.5rem;
`;
