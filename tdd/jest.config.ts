import type { Config } from "jest";

const config: Config = {
  collectCoverage: false,
  preset: "@shelf/jest-mongodb",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  transform: { ".+\\.ts$": "ts-jest" },
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/tests/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
