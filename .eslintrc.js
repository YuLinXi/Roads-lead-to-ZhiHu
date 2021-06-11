module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  globals: {},
  rules: {
    indent: ['error', 2],
  },
};
