const jestVariable =
['describe', 'it', 'test', 'expect', 'beforeEach']
  .reduce((pre, api) => ({ ...pre, [api]: 'readonly' }), {})

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  globals: { ...jestVariable },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }]
  }
}
