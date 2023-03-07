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
    'space-in-parens': ['error', 'never'],
    semi: ['error', 'always'],
    'no-extra-semi': 'error',
    'space-before-blocks': ['error', { functions: 'always', keywords: 'always', classes: 'always' }],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'no-multiple-empty-lines': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'block-spacing': 'error',
  },
};
