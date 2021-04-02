module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^utils$': '<rootDir>/utils/$1',
    '^mock$': '<rootDir>/mock/$1'
  },
  verbose: true
}
