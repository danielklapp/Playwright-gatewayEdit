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

test.describe("Scripture Card 2", () => {
  test("Minimize and restore Scripture Card 2 by button", async ({ page }) => {
    await homePage.minimize("#scripture_card_2");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_scripture_card_2");
  });

  test("Minimize and restore Scripture Card 2 by title", async ({ page }) => {
    await homePage.minimize("#scripture_card_2");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_scripture_card_2");
  });

  test("Making font size smaller", async ({ page }) => {
    await homePage.cardMenu("#scripture_card_2_card_menu");

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
    await page.mouse.move(x - 195, y);
    await page.mouse.up();
    expect(changedFontSize).toContainText("50");
    await page.locator("#settings_card_close").click();
  });

  test("Making font size bigger", async ({ page }) => {
    await homePage.cardMenu("#scripture_card_2_card_menu");

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
    await page.mouse.move(x + 195, y);
    await page.mouse.up();
    await expect(changedFontSize).toContainText("150");
    await page.locator("#settings_card_close").click();
  });

  test("Buttons are visible", async ({ page }) => {
    await expect(
      page.locator("#minimize_button_scripture_card_2")
    ).toBeVisible();
    await expect(page.locator("#save_button_scripture_card_2")).toBeVisible();
    await expect(
      page.locator("#alignment_icon_TARGET_SIMPLIFIED")
    ).toBeVisible();
    await expect(
      page.locator("#scripture_card_2").getByLabel("Update my content")
    ).toBeVisible();
    await expect(
      page.locator("#scripture_card_2_card_menu path")
    ).toBeVisible();
  });
});
