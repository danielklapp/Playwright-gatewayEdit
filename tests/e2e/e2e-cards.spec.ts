import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";
import { AccountSettingsPage } from "../../page-objects/AccountSettingsPage";

test.describe.parallel("Pane Card", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  let accountSettingsPage: AccountSettingsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    accountSettingsPage = new AccountSettingsPage(page);

    await homePage.visit();
  });

  test.only("Minimize and restore cards by button", async ({ page }) => {
    await loginPage.login();
    await accountSettingsPage.translationSettings();
    await homePage.minimize("#scripture_card_0");
    await homePage.minimize("#scripture_card_1");
    await homePage.minimize("#scripture_card_2");
    await homePage.minimize("#resource_card_twl");
    await homePage.minimize("#resource_card_twa");
    await homePage.minimize("#resource_card_tn");
    await homePage.minimize("#resource_card_ta");
    await homePage.minimize("#resource_card_tq");
    await homePage.restore(
      "#restore_button_scripture_card_Literal_Translation"
    );
    await homePage.restore("#restore_button_scripture_card_Original_Source");
    await homePage.restore(
      "#restore_button_scripture_card_Simplified_Translation"
    );
    await homePage.restore("#restore_button_resource_card_tn");
    await homePage.restore("#restore_button_resource_card_ta");
    await homePage.restore("#restore_button_resource_card_twl");
    await homePage.restore("#restore_button_resource_card_twa");
    await homePage.restore("#restore_button_resource_card_tq");
  });
});
