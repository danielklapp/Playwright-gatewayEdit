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

test.describe("translationNotes Card", () => {
  test("Minimize and restore tn card by button", async ({ page }) => {
    await homePage.minimize("#resource_card_tn");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_resource_card_tn");
  });

  test("Minimize and restore tn card by title", async ({ page }) => {
    await homePage.minimize("#resource_card_tn");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_resource_card_tn div");
  });

  test("Verifying tn markdown/preview button has title Markdown/preview", async ({
    page,
  }) => {
    await homePage.verifyMarkdown("#markdown_button_resource_card_tn");
    await homePage.verifyPreview("#markdown_button_resource_card_tn");
  });

  test("Checking tn previous and next buttons for translationNotes", async ({
    page,
  }) => {
    await Promise.all([
      homePage.prev("#resource_card_tn_prev"),
      homePage.next("#resource_card_tn_next"),
    ]);
    await page.waitForLoadState();
  });
});
