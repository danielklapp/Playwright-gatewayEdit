import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";
import { AccountSettingsPage } from "../../page-objects/AccountSettingsPage";

test.describe.parallel("Login / Logout Flow", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let accountSettingsPage: AccountSettingsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    accountSettingsPage = new AccountSettingsPage(page);

    await homePage.visit();
  });

  test("Login for gatewayEdit", async ({ page }) => {
    await loginPage.login();
  });

  test("Checking to make sure you have logged in", async ({ page }) => {
    await loginPage.login();
    await accountSettingsPage.translationSettings();
    await loginPage.verifyLoggedin();
  });

  test("Logout for gatewayEdit", async ({ page }) => {
    // Must login before logout - due to test isolation
    await loginPage.login();
    await accountSettingsPage.translationSettings();
    await loginPage.logout();
  });

  test("Checking to make sure you have logged Out", async ({ page }) => {
    await loginPage.login();
    await accountSettingsPage.translationSettings();
    await loginPage.logout();
    await loginPage.verifyLoggedout();
  });

  test("Trying to login with wrong username and password", async ({ page }) => {
    await loginPage.wrongLogin();
    await loginPage.assertErrorMessage();
  });
});
