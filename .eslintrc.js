module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    'max-len': [ 1, { 'code': 120, 'ignoreComments': true } ],
    'react/display-name': 1,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': [ 2, 2, { 'indentLogicalExpressions': true } ],
    'react/jsx-props-no-spreading': 1,
    'react/jsx-curly-spacing': [ 1, { 'when': 'always', 'children': true } ],
    '@typescript-eslint/no-var-requires': 1,
    'indent': [ 2, 2 ],
    'linebreak-style': [ 2, 'unix' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'never' ],
    'eol-last': [ 1, 'always' ],
    'object-curly-spacing': [ 1, 'always' ],
    'array-bracket-spacing': [ 1, 'always' ],
    'no-undef': 2,
    'no-trailing-spaces': 1,
    'i18next/no-literal-string': [ 2, { markupOnly: true, ignoreAttribute: [ 'data-testid' ] } ]
  },
  globals: {
    '$_IS_DEV': true,
  },
  overrides: [
    {
      files: [ '**/src/**/*.test.{ts,tsx}' ],
      rules: {
        'i18next/no-literal-string': 'off'
      }
    }
  ]
}
