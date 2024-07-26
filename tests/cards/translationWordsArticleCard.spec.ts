import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);

  await homePage.visit();
  await loginPage.login();
});

test.describe("translationWords Article Card", () => {
  test("Minimize and restore twa card by button", async ({ page }) => {
    await homePage.minimize("#resource_card_twa");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_resource_card_twa");
  });

  test("Minimize and restore twa card by title", async ({ page }) => {
    await homePage.minimize("#resource_card_twa");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_resource_card_twa div");
  });

  test("Verifying twa markdown/preview button has title Markdown/preview", async ({
    page,
  }) => {
    await homePage.verifyMarkdown("#markdown_button_resource_card_twa");
    await homePage.verifyPreview("#markdown_button_resource_card_twa");
  });

  test("Checking twa previous and next buttons for translationWord Articles", async ({
    page,
  }) => {
    await Promise.all([
      homePage.prev("#resource_card_twa_prev"),
      homePage.next("#resource_card_twa_next"),
    ]);
    await page.waitForLoadState();
  });

  test("Making font size smaller", async ({ page }) => {
    await homePage.cardMenu("#resource_card_twa_card_menu");

    const startingFontSize = page
      .locator("span")
      .filter({ hasText: "100" })
      .nth(1);
    let changedFontSize = page.locator("span").filter({ hasText: "0" }).nth(1);
    const box = await startingFontSize.boundingBox();
    const x = box!.x + box!.width / 2;
    const y = box!.y + box!.height / 2;

    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x - 100, y);
    await page.mouse.up();
    expect(changedFontSize).toContainText("50");
    await page.locator("#settings_card_close").click();
  });

  test("Making font size bigger", async ({ page }) => {
    await homePage.cardMenu("#resource_card_twa_card_menu");

    const startingFontSize = page
      .locator("span")
      .filter({ hasText: "100" })
      .nth(1);
    let changedFontSize = page
      .locator("span")
      .filter({ hasText: "150" })
      .nth(1);
    const box = await startingFontSize.boundingBox();
    const x = box!.x + box!.width / 2;
    const y = box!.y + box!.height / 2;

    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + 100, y);
    await page.mouse.up();
    await expect(changedFontSize).toContainText("150");
    await page.locator("#settings_card_close").click();
  });

  test("Buttons are visible", async ({ page }) => {
    await expect(
      page.locator("#minimize_button_resource_card_twa")
    ).toBeVisible();
    await expect(
      page.locator("#markdown_button_resource_card_twa")
    ).toBeVisible();
    await expect(page.locator("#save_button_resource_card_twa")).toBeVisible();
    await expect(
      page.locator("#resource_card_twa").getByLabel("Update my content")
    ).toBeVisible();
    await expect(page.locator("#resource_card_twa_card_menu")).toBeVisible();
  });
});
