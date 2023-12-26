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
});
