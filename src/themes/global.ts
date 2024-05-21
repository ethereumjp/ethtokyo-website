import { css } from "@emotion/react";
import { mq } from "./settings/breakpoints";
import { brand, neutral } from "./settings/color";
import {} from "./settings/spaces";

export const globalStyles = css({
  "html, body": {
    margin: "0",
    color: neutral.White,
  },

  h1: {
    fontWeight: 500,
    letterSpacing: "0.07rem",

    [mq.laptop]: {
      fontSize: "1.5rem",
    },
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

    [mq.laptop]: {
      fontSize: "1.25rem",
    },
  },

  a: { color: neutral.White },

  "*": {},
});
