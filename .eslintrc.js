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
    'standard',
    'eslint:recommended',
    'plugin:node/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off'
  }
}
