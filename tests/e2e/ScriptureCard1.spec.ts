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

test.describe("Scripture Card 1", () => {
  test("Minimize and restore Scripture Card 1 by button", async ({ page }) => {
    await homePage.minimize("#scripture_card_1");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_scripture_card_1");
  });

  test("Minimize and restore Scripture Card 1 by title", async ({ page }) => {
    await homePage.minimize("#scripture_card_1");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_scripture_card_1");
  });
});
