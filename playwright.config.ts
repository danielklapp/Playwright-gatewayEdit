import { PlaywrightTestConfig } from "@playwright/test";
import * as dotenv from "dotenv";
import { devices } from "@playwright/test";

export const STORAGE_STATE_PATH = "./loginAuth.json";

dotenv.config({
  path: "./.env",
});

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  testDir: "./tests",
  fullyParallel: false,
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
      name: "setup",
      testDir: "./",
      testMatch: "global-setup.ts",
    },
    {
      name: "Chromium",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: STORAGE_STATE_PATH,
      },
    },
    {
      name: "Firefox",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Firefox"],
        storageState: STORAGE_STATE_PATH,
      },
    },
    {
      name: "Webkit",
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Webkit"],
        storageState: STORAGE_STATE_PATH,
      },
    },
  ],
};

export default config;
