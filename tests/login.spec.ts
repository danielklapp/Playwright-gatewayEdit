import { test, expect } from "@playwright/test";

test("Login for gatewayEdit", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}`);
  await page
    .locator('[data-test="username-input"]')
    .getByRole("textbox")
    .click();
  await page
    .locator('[data-test="username-input"]')
    .getByRole("textbox")
    .fill(`${process.env.USERNAME}`);
  await page
    .locator('[data-test="password-input"]')
    .getByRole("textbox")
    .click();
  await page
    .locator('[data-test="password-input"]')
    .getByRole("textbox")
    .fill(`${process.env.PASSWORD}`);
  await page.getByLabel("Keep me logged in").check();
  await page.locator('[data-test="submit-button"]').click();
  await page.close();
});
