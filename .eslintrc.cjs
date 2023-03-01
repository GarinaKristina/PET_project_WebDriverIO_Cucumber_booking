module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true,
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    eqeqeq: 'warn',
    quotes: ['warn', 'single'],
  },
};

