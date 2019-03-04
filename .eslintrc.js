module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:react/recommended",
    "jsx-a11y",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["react", "prettier"]
};
