module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'html', 'text-summary'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: ['TS151001']
      }
    }
  }
}
