import { mq } from "@/themes/settings/breakpoints";
import { brand, neutral, themeLight } from "@/themes/settings/color";
import { css } from "@emotion/react";

// セクション共通スタイル
export const sectionStyle = css`
  padding: 4rem 2rem;
  background: ${themeLight.Background};
`;

export const containerStyle = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const headingStyle = css`
  text-align: center;
  color: ${brand.Secondary};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const multiGridStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const cardStyle = css`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  flex: 1 1 220px;
  max-width: 280px;
  text-align: center;
`;

export const cardHeadingStyle = css`
  margin: 0;
  font-size: 1.5rem;
  color: ${brand.Secondary};
`;

export const cardParagraphStyle = css`
  margin: 0.5rem 0 0;
  color: #777;
`;

// ボタンスタイル
export const buttonStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${brand.Primary};
  color: ${neutral.White};
  padding: 8px 2rem;
  border-radius: 9999px;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  @media (min-width: 480px) {
    padding: 1rem 2rem;
    font-size: 1.25rem;
  }

  &:hover {
    background-color: #FF7766;
  }
`;

// イベント情報スタイル
export const eventInfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  ${mq.tablet} {
    flex-direction: row;
  }
`;

export const infoItemStyle = css`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${neutral.White};
`;
