import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
const { devices } = require("@playwright/test");
import { defineConfig } from "@playwright/test";

dotenv.config({
  path: "./.env",
});

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "./tests",
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    // launchOptions: {
    //   slowMo: 500,
    // },
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },

  reporter: "html",

  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium", ignoreHTTPSErrors: true },
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

// export default config;
export default defineConfig({
  expect: {
    toHaveScreenshot: { maxDiffPixels: 100 },
  },
});
