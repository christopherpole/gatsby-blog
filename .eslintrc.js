module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-typescript', 'prettier/@typescript-eslint'],
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
  },
};
