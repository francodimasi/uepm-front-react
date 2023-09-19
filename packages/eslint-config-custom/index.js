module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "react/display-name": 'off',
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
