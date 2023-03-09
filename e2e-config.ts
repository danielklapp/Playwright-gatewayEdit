import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
const { devices } = require("@playwright/test");

dotenv.config({
  path: "./.env",
});

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "./tests/e2e",
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    // launchOptions: {
    //   slowMo: 500,
    // },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "Webkit",
      use: { browserName: "webkit" },
    },
  ],
};

export default config;
