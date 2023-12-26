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

test.describe("translationAcademy Card", () => {
  test("Minimize and restore ta card by button", async ({ page }) => {
    await homePage.minimize("#resource_card_ta");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_resource_card_ta");
  });

  test("Minimize and restore ta card by title", async ({ page }) => {
    await homePage.minimize("#resource_card_ta");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_resource_card_ta div");
  });

  test("Verifying ta markdown/preview button has title Markdown/preview", async ({
    page,
  }) => {
    await homePage.verifyMarkdown("#markdown_button_resource_card_ta");
    await homePage.verifyPreview("#markdown_button_resource_card_ta");
  });
});
