import { test, expect } from "@playwright/test";

test.fixme("Align button for Scripture cards", async ({ page }) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  await page.locator("#organization-select-outlined").click();
  await page.getByRole("option", { name: "unfoldingWord" }).click();
  await page.getByRole("button", { name: "​", exact: true }).click();
  await page.getByRole("option", { name: "en - English - English" }).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  await page.waitForSelector("#scripture_card_0");
  await page.locator("#alignment_icon_TARGET_LITERAL").click();
  page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.waitForSelector("#scripture_card_2");
  await page.locator("#alignment_icon_TARGET_SIMPLIFIED").click();
  await page.getByRole("button", { name: "Cancel" }).click();
});

test("Checking previous and next buttons for translationNotes", async ({
  page,
}) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  await page.locator("#organization-select-outlined").click();
  await page.getByRole("option", { name: "unfoldingWord" }).click();
  await page.getByRole("button", { name: "​", exact: true }).click();
  await page.getByRole("option", { name: "en - English - English" }).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  for (let i = 0; i < 5; i++) {
    await page.locator("#resource_card_tn_prev").click();
  }
  for (let i = 0; i < 5; i++) {
    await page.locator("#resource_card_tn_next").click();
  }
});

test("Checking previous and next buttons for translationWords Articles", async ({
  page,
}) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  await page.locator("#organization-select-outlined").click();
  await page.getByRole("option", { name: "unfoldingWord" }).click();
  await page.getByRole("button", { name: "​", exact: true }).click();
  await page.getByRole("option", { name: "en - English - English" }).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();
  for (let i = 0; i < 5; i++) {
    await page.locator("#resource_card_twa_prev").click();
  }
  for (let i = 0; i < 5; i++) {
    await page.locator("#resource_card_twa_next").click();
  }
});
