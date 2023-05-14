import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe.parallel("Login / Logout Flow", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await homePage.visit();
  });

  test("Login for gatewayEdit", async ({ page }) => {
    await loginPage.login();
  });

  test("Logout for gatewayEdit", async ({ page }) => {
    // Must login before logout - due to test isolation
    await loginPage.login();

    await loginPage.logout();
  });

  test("Trying to login with wrong username and password", async ({ page }) => {
    await loginPage.wrongLogin();
    await loginPage.assertErrorMessage();
  });
});
