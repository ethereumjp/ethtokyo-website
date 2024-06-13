const path = require("node:path");

const buildLintCommand = (filenames) =>
  `npx yarn run biome lint --no-errors-on-unmatched ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildFormatCommand = (filenames) =>
  `npx yarn run biome format --no-errors-on-unmatched ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")} `;

module.exports = {
  "**/*.{js,jsx,ts,tsx}": [buildLintCommand],
  "**/*.{js,jsx,ts,tsx,json}": [buildFormatCommand],
};
