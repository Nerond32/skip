module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/react",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      1,
      {
        printWidth: 100,
        tabWidth: 4,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: "all"
      }
    ]
  }
};
