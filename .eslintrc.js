module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    test: 'readonly'
  },
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
