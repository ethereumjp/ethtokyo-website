import { css } from "@emotion/react";
import { mq } from "./settings/breakpoints";
import { info, neutral } from "./settings/color";
import {} from "./settings/spaces";

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
