module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'max-len': [ 1, { 'code': 120, 'ignoreComments': true } ],
    'react/jsx-indent': [ 2, 2, { 'indentLogicalExpressions': true } ],
    'react/jsx-props-no-spreading': 1,
    'react/jsx-curly-spacing': [ 1, { 'when': 'always', 'children': true } ],
    'indent': [ 2, 2 ],
    'linebreak-style': [ 2, 'unix' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'never' ],
    'eol-last': [ 1, 'always' ],
    'object-curly-spacing': [ 1, 'always' ],
    'array-bracket-spacing': [ 1, 'always' ],
    'no-undef': 2,
  },
  globals: {
    '$_IS_DEV': true,
  }
}
