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

test.describe("translationWords List Card", () => {
  test("Minimize and restore twl card by button", async ({ page }) => {
    await homePage.minimize("#resource_card_twl");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_resource_card_twl");
  });

  test("Minimize and restore twl card by title", async ({ page }) => {
    await homePage.minimize("#resource_card_twl");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_resource_card_twl div");
  });
});
