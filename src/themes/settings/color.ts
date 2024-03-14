/* Color Pallet */

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
  Attention: "#B8FAF6", // notifications, announcement border
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
