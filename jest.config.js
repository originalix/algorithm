module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^utils$': '<rootDir>/src/utils',
    '^mock$': '<rootDir>/src/mock'
  },
  verbose: true
}
