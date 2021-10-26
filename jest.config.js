module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: ["./src/**/*.{ts,tsx}"],
  transformIgnorePatterns: ["./node_modules/", "./dist/"],
  passWithNoTests: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  verbose: true,
}
