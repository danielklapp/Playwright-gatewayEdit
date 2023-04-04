import { test, expect } from "@playwright/test";

test.describe.parallel("All my test together", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}?server=QA`);
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
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test("Home page for gatewayEdit", async ({ page }) => {
    await page.locator("#organization-select-outlined").click();
    await page.getByRole("option", { name: "unfoldingWord" }).click();
    await page.getByRole("button", { name: "​", exact: true }).click();
    await page.getByRole("option", { name: "en - English - English" }).click();
    await page.getByRole("button", { name: "Save and Continue" }).click();
  });

  test("Logout for gatewayEdit", async ({ page }) => {
    await page.getByRole("button", { name: "menu" }).click();
    await page.getByRole("button", { name: "Logout" }).click();
  });
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test("Error message when user doesn't belong to an organization", async ({
  page,
}) => {
  await page.goto(`${process.env.BASE_URL}?server=QA`);
  await page
    .locator('[data-test="username-input"]')
    .getByRole("textbox")
    .click();
  await page
    .locator('[data-test="username-input"]')
    .getByRole("textbox")
    .fill(`${process.env.USERNAME2}`);
  await page
    .locator('[data-test="password-input"]')
    .getByRole("textbox")
    .click();
  await page
    .locator('[data-test="password-input"]')
    .getByRole("textbox")
    .fill(`${process.env.PASSWORD2}`);
  await page.getByLabel("Keep me logged in").check();
  await page.locator('[data-test="submit-button"]').click();
  const errorMessage = page.locator("#organization-select-message");
  await expect(errorMessage).toContainText(
    "The application can not continue. The current username is not part of a DCS organization. Please contact your administrator."
  );
});
