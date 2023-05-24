import { test, expect } from "@playwright/test";

test.describe.parallel("All my assertion tests together", () => {
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
    await page.locator("#organization-select-outlined").click();
    await page.getByRole("option", { name: "unfoldingWord" }).click();
    await page.getByRole("button", { name: "​", exact: true }).click();
    await page.getByRole("option", { name: "en - English - English" }).click();
    await page.getByRole("button", { name: "Save and Continue" }).click();
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });
  test("Markdown buttons are visible", async ({ page }) => {
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
    const markdownTitle_tn = page.locator("#markdown_button_resource_card_tn");
    await expect(markdownTitle_tn).toHaveAttribute("title", "Markdown");
    const markdownTitle_ta = page.locator("#markdown_button_resource_card_ta");
    await expect(markdownTitle_ta).toHaveAttribute("title", "Markdown");
    const markdownTitle_twa = page.locator(
      "#markdown_button_resource_card_twa"
    );
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

  test.fixme(
    "Save button is disabled when there's no edit to card",
    async ({ page }) => {
      const saveButton_0 = page.locator("#save_button_scripture_card_0");
      await expect(saveButton_0).toBeDisabled();
      const saveButton_2 = page.locator("#save_button_scripture_card_2");
      await expect(saveButton_2).toBeDisabled();
      const saveButton_tn = page.locator("#save_button_resource_card_tn");
      await expect(saveButton_tn).toBeDisabled();
      const saveButton_ta = page.locator("#save_button_resource_card_ta");
      await expect(saveButton_ta).toBeDisabled();
      const saveButton_twl = page.locator("#save_button_resource_card_twl");
      await expect(saveButton_twl).toBeDisabled();
      const saveButton_twa = page.locator("#save_button_resource_card_twa");
      await expect(saveButton_twa).toBeDisabled();
      const saveButton_tq = page.locator("#save_button_resource_card_tq");
      await expect(saveButton_tq).toBeDisabled();
    }
  );
});
