module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    quotes: ['off', 'single'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react[/a-z]*/', '/^react-native[/a-z]*/'],
          'module',
          ['/^[/a-zA-Z]/', 'absolute'],
          ['parent'],
          ['sibling', 'index'],
          ['/^./styles/'],
        ],
        // "alphabetize": { "order": "asc", "ignoreCase": true }
      },
    ],
  },
};
