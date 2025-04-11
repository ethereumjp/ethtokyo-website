/* Color Pallet */

export const neutral = {
  White: "#FFFFFF",
  Grey1: "#FFF8F6",
  Grey2: "#E5DBDF",
  Grey3: "#BFB2C0",
  Grey4: "#775566",
  Grey5: "#332233",
  Grey6: "#221122",
  Black: "#000000",
  Text: "#111111",
} as const;

export const brand = {
  Primary: "#FF5544",
  Secondary: "#552266",
  Accent1: "#FF9977",
  Accent2: "#9988FF",

  // 互換性のために残しておく従来の色名（新しい色で置き換え）
  Shuiro: "#FF5544", // brand.Primary と同じ
  Miyabi: "#552266", // brand.Secondary と同じ
  JordyBlue: "#9988FF", // brand.Accent2 と同じ
  BluePantone: "#4455FF", // themeLight.Link と同じ
  BabyPink: "#FF9977", // brand.Accent1 と同じ
  CelesteGreen: "#FFEECC", // themeLight.Background と同じ
} as const;

export const themeLight = {
  Primary: brand.Primary,
  PrimaryHighContrast: "#CC3322",
  PrimaryLowContrast: "#FFDDDD",
  PrimaryHover: "#FF7766",
  PrimaryVisited: "#CC4433",

  Secondary: brand.Secondary,
  SecondaryHighContrast: "#331144",
  SecondaryLowContrast: "#EEDDFF",

  Link: "#4455FF",
  LinkHover: "#DD66FF",

  Body: neutral.Text,
  BodyLight: neutral.Grey4,
  Disable: neutral.Grey3,
  Background: "#FFEECC",
  BackgroundHighlight: neutral.Grey1,
} as const;

export const info = {
  Success: "#668844",
  SuccessLight: "#EEFFDD",
  Error: brand.Primary,
  ErrorLight: "#FFEEEE",
  Attention: "#FFAA44",
  AttentionLight: "#FFF8DD",
} as const;

/* 
========== 元のカラー定義（参照用） ==========

export const neutral = {
  White: "#FFFFFF",
  Grey1: "#F7F7F7", // body background
  Grey2: "#D4D4D4", // lines, mouse over, lists or tables
  Grey3: "#B0B0B0", // disable (light theme)
  Grey4: "#646464", // supporting text, disable (dark theme)
  Grey5: "#222222", // dark theme background
  Grey6: "#141414", // default text color
  Black: "#000000",
} as const;

export const themeLight = {
  Primary: "#1C1CFF",
  PrimaryHighContrast: "#0B0B66",
  PrimaryLowContrast: "#DEDEFF",
  PrimaryHover: "#ABABFE",
  PrimaryVisited: "#090990",
  Body: neutral.Grey5,
  BodyLight: neutral.Grey4,
  Disable: neutral.Grey2,
  Background: neutral.White,
  BackgroundHighlight: neutral.Grey1,
} as const;

export const info = {
  Success: "#0A7146", // success message, success border
  SuccessLight: "#DDF4E4", // success background
  Error: "#B80000", // error message, error border
  ErrorLight: "#F7C8C8", // error background
  Attention: "#00e7e7", // notifications, announcement border
  AttentionLight: "#FFF8DF", // notifications background,  announcement background
} as const;

// do not use for UI elements
export const brand = {
  BabyPink: "#F0CDC2",
  CelesteGreen: "#B8FAF6",
  JordyBlue: "#88AAF1",
  BluePantone: "#1616B4",
  Miyabi: "#552266",
  Shuiro: "#FF5544",
} as const;
*/
