import { test, expect } from "@playwright/test";

test("Markdown buttons are visible", async ({ page }) => {
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
  const locator_tn = page.locator("#markdown_button_resource_card_tn");
  await expect(locator_tn).toBeVisible();
  const locator_ta = page.locator("#markdown_button_resource_card_ta");
  await expect(locator_ta).toBeVisible();
  const locator_twa = page.locator("#markdown_button_resource_card_twa");
  await expect(locator_twa).toBeVisible();
  const locator_tq = page.locator("#markdown_button_resource_card_tq");
  await expect(locator_tq).toBeVisible();
});

test("Title of markdown / preview button on cards", async ({ page }) => {
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
  // await page.pause();
  const markdownTitle_tn = page.locator("#markdown_button_resource_card_tn");
  await expect(markdownTitle_tn).toHaveAttribute("title", "Markdown");
  const markdownTitle_ta = page.locator("#markdown_button_resource_card_ta");
  await expect(markdownTitle_ta).toHaveAttribute("title", "Markdown");
  const markdownTitle_twa = page.locator("#markdown_button_resource_card_twa");
  await expect(markdownTitle_twa).toHaveAttribute("title", "Markdown");
  const markdownTitle_tq = page.locator("#markdown_button_resource_card_tq");
  await expect(markdownTitle_tq).toHaveAttribute("title", "Markdown");
  await page.locator("#markdown_button_resource_card_tn").click();
  await page.locator("#markdown_button_resource_card_ta").click();
  await page.locator("#markdown_button_resource_card_twa").click();
  await page.locator("#markdown_button_resource_card_tq").click();
  const previewTitle_tn = page.locator("#markdown_button_resource_card_tn");
  await expect(previewTitle_tn).toHaveAttribute("title", "Preview");
  const previewTitle_ta = page.locator("#markdown_button_resource_card_ta");
  await expect(previewTitle_ta).toHaveAttribute("title", "Preview");
  const previewTitle_twa = page.locator("#markdown_button_resource_card_twa");
  await expect(previewTitle_twa).toHaveAttribute("title", "Preview");
  const previewTitle_tq = page.locator("#markdown_button_resource_card_tq");
  await expect(previewTitle_tq).toHaveAttribute("title", "Preview");
});
