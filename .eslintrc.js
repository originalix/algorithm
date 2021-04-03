const jestVariable = ['describe', 'it', 'test', 'expect', 'beforeEach']
const jestSetupAPI = ['beforeEach', 'beforeAll', 'afterEach', 'afterAll']
const jestMap = [...jestVariable, ...jestSetupAPI].reduce((pre, api) => ({ ...pre, [api]: 'readonly' }), {})

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  globals: { ...jestMap },
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
