module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  ignorePatterns: ['apps/landing/*', 'apps/landing-onco/*'],
  rules: {
    'react/display-name': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-await-in-loop': 'error',
    'no-multi-spaces': 'error',
    'no-var': 'error',
    'max-nested-callbacks': ['error', 3],
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'prefer-const': 'error',
    'require-await': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
