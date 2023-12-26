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

test.describe("translationQuestions Card", () => {
  test("Minimize and restore tq card by button", async ({ page }) => {
    await homePage.minimize("#resource_card_tq");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_resource_card_tq");
  });

  test("Minimize and restore tq card by title", async ({ page }) => {
    await homePage.minimize("#resource_card_tq");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_resource_card_tq div");
  });

  test("Verifying tq markdown/preview button has title Markdown/preview", async ({
    page,
  }) => {
    await homePage.verifyMarkdown("#markdown_button_resource_card_tq");
    await homePage.verifyPreview("#markdown_button_resource_card_tq");
  });
});
