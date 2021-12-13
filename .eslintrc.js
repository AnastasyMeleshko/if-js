module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  globals: {
    angular: false,
    module: false,
    inject: false,
    document: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-base",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
