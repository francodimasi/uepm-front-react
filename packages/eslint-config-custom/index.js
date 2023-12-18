module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  ignorePatterns: ['apps/landing/*', 'apps/landing-onco/*'],
  rules: {
    'react/display-name': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'no-unused-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
