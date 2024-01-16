const styleLintConfig = {
  extends: ["stylelint-config-recommended"],
  customSyntax: "postcss-styled-syntax",
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["src/**/*.{jsx,tsx}"],
    },
  ],
  rules: {
    "block-no-empty": null,
    "declaration-property-value-no-unknown": true,
    "function-no-unknown": null,
    "order/properties-alphabetical-order": true,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
  },
};

module.exports = styleLintConfig;
