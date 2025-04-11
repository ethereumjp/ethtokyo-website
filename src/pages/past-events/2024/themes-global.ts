import { css } from "@emotion/react";

export const mq = {
  mobile: "@media (min-width: 480px)",
  tablet: "@media (min-width: 768px)",
  laptop: "@media (min-width: 1024px)",
  desktop: "@media (min-width: 1440px)",
  monitor: "@media (min-width: 2560px)",
};

const spacing = {
  0: "0px",
  0.25: "0.25rem",
  0.5: "0.5rem",
  0.75: "0.75rem",
  1: "1rem",
  1.25: "1.25rem",
  1.5: "1.5rem",
  1.75: "1.75rem",
  2: "2rem",
  2.25: "2.25rem",
  2.5: "2.5rem",
  2.75: "2.75rem",
  3: "3rem",
  3.25: "3.25rem",
  3.5: "3.5rem",
  3.75: "3.75rem",
  4: "4rem",
  4.25: "4.25rem",
  4.5: "4.5rem",
  4.75: "4.75rem",
  5: "5rem",
  5.25: "5.25rem",
  5.5: "5.5rem",
  5.75: "5.75rem",
  6: "6rem",
  6.25: "6.25rem",
  6.5: "6.5rem",
  6.75: "6.75rem",
  7: "7rem",
  7.25: "7.25rem",
  7.5: "7.5rem",
  7.75: "7.75rem",
  8: "8rem",
  8.25: "8.25rem",
  8.5: "8.5rem",
  8.75: "8.75rem",
  9: "9rem",
  9.25: "9.25rem",
  9.5: "9.5rem",
  9.75: "9.75rem",
  10: "10rem",
  10.25: "10.25rem",
  10.5: "10.5rem",
  10.75: "10.75rem",
  11: "11rem",
  11.25: "11.25rem",
  11.5: "11.5rem",
  11.75: "11.75rem",
  12: "12rem",
  12.25: "12.25rem",
  12.5: "12.5rem",
  12.75: "12.75rem",
  13: "13rem",
  13.25: "13.25rem",
  13.5: "13.5rem",
  13.75: "13.75rem",
  14: "14rem",
  14.25: "14.25rem",
  14.5: "14.5rem",
  14.75: "14.75rem",
  15: "15rem",
  15.25: "15.25rem",
  15.5: "15.5rem",
  15.75: "15.75rem",
  16: "16rem",
  16.25: "16.25rem",
  16.5: "16.5rem",
  16.75: "16.75rem",
  17: "17rem",
  17.25: "17.25rem",
  17.5: "17.5rem",
  17.75: "17.75rem",
  18: "18rem",
  18.25: "18.25rem",
  18.5: "18.5rem",
  18.75: "18.75rem",
  19: "19rem",
  19.25: "19.25rem",
  19.5: "19.5rem",
  19.75: "19.75rem",
  20: "20rem",
  20.25: "20.25rem",
  20.5: "20.5rem",
  20.75: "20.75rem",
  21: "21rem",
  21.25: "21.25rem",
  21.5: "21.5rem",
  21.75: "21.75rem",
  22: "22rem",
  22.25: "22.25rem",
  22.5: "22.5rem",
  22.75: "22.75rem",
  23: "23rem",
  23.25: "23.25rem",
  23.5: "23.5rem",
  23.75: "23.75rem",
  24: "24rem",
};

export const neutral = {
  White: "#FFFFFF",
  Grey1: "#F7F7F7", // body background
  Grey2: "#D4D4D4", // lines, mouse over, lists or tables
  Grey3: "#B0B0B0", // disable (light theme)
  Grey4: "#646464", // supporting text, disable (dark theme)
  Grey5: "#222222", // dark theme background
  Grey6: "#141414", // default text color
  Black: "#000000",
};

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
};

export const info = {
  Success: "#0A7146", // success message, success border
  SuccessLight: "#DDF4E4", // success background
  Error: "#B80000", // error message, error border
  ErrorLight: "#F7C8C8", // error background
  Attention: "#00e7e7", // notifications, announcement border
  AttentionLight: "#FFF8DF", // notifications background,  announcement background
};

// do not use for UI elements
export const brand = {
  BabyPink: "#F0CDC2",
  CelesteGreen: "#B8FAF6",
  JordyBlue: "#88AAF1",
  BluePantone: "#1616B4",
  Miyabi: "#552266",
  Shuiro: "#FF5544",
};

export const globalStyles = css({
  "html, body": {
    color: neutral.White,
    margin: "0",
    padding: "0",
  },

  h1: {
    fontWeight: 500,
    letterSpacing: "0.07rem",
  },

  h2: {
    fontWeight: 800,
    letterSpacing: "0.1rem",

    [mq.laptop]: {
      fontSize: "2rem",
    },
  },

  h3: {},

  p: {
    fontWeight: 300,
    lineHeight: 2,
    letterSpacing: "0.07rem",
  },

  a: { color: neutral.White, "&:hover": { color: info.Attention } },

  li: { margin: "12px 0;" },
});
