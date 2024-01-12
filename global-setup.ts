import { test as setup } from "@playwright/test";
import { LoginPage } from "./page-objects/LoginPage";
import { HomePage } from "./page-objects/HomePage";
import { AccountSettingsPage } from "./page-objects/AccountSettingsPage";
import { STORAGE_STATE_PATH } from "./playwright.config";

setup("First login/logout for gatewayEdit", async ({ page }) => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let accountSettingsPage: AccountSettingsPage;

  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  accountSettingsPage = new AccountSettingsPage(page);

  await homePage.visit();

  await loginPage.login();
  await accountSettingsPage.translationSettings();
  await page.waitForSelector("#__next");
  await loginPage.verifyLoggedin();
  await loginPage.logout();
  await loginPage.verifyLoggedout();

  //   Save the state of webpage - meaning we are logged in
  await page.context().storageState({ path: STORAGE_STATE_PATH });
});
