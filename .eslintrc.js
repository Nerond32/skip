module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/react',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  plugins: ['babel', 'react', 'react-hooks', 'prettier', 'jsx-a11y'],
  rules: {
    'babel/semi': 0,
    'react/prop-types': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
