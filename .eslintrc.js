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
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-constant-condition': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off'
  }
}
