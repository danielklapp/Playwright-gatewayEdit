import { test } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";
import { AccountSettingsPage } from "../../page-objects/AccountSettingsPage";

test.describe("Login / Logout Flow", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let accountSettingsPage: AccountSettingsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    accountSettingsPage = new AccountSettingsPage(page);

    await homePage.visit();
  });

  test("Login to gatewayEdit when not affilited with any organizations", async ({
    page,
  }) => {
    await loginPage.login2();
    await accountSettingsPage.assertErrorMessage();
    await loginPage.verifyLoggedin();
  });

  test("Login with wrong credentials", async ({ page }) => {
    await loginPage.wrongLogin();
    await loginPage.assertErrorMessage();
  });
});
