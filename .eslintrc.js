module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
