module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.(js|ts)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?![axios|axios]).+\\.js$',
    '/node_modules/(?![axios|axios]).+\\.ts$',
    '/node_modules/(?![axios|axios]).+\\.tsx$',
  ],
};
