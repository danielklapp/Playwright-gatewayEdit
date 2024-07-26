import { test as teardown } from "@playwright/test";
import { LoginPage } from "./page-objects/LoginPage";
import { HomePage } from "./page-objects/HomePage";

teardown("First logout for gatewayEdit", async ({ page }) => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  loginPage = new LoginPage(page);
  homePage = new HomePage(page);

  await homePage.visit();
  await loginPage.login();
  await page.waitForSelector("#__next");
  await loginPage.logout();
  await page.waitForTimeout(3000);
  await loginPage.verifyLoggedout();
});
