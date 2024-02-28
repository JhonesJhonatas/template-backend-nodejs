/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  setupFiles: ['./src/shared/tests/_setup/setup.ts'],
  collectCoverageFrom: ['./src/modules/**/useCases/**/*UseCase.ts'],
}
