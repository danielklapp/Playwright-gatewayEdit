import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly keepmeloggedinBox: Locator;
  readonly submitButton: Locator;
  readonly organizationButton: Locator;
  readonly menuIconButton: Locator;
  readonly signOutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page
      .locator('[data-test="username-input"]')
      .getByRole("textbox");
    this.passwordInput = page
      .locator('[data-test="password-input"]')
      .getByRole("textbox");
    this.keepmeloggedinBox = page.getByLabel("Keep me logged in");
    this.submitButton = page.locator('[data-test="submit-button"]');
    this.organizationButton = page.locator("#organization-select-outlined");
    this.menuIconButton = page.getByRole("button", { name: "menu" });
    this.signOutButton = page.getByRole("button", { name: "Logout" });
  }

  async login() {
    await this.usernameInput.fill(`${process.env.USERNAME}`);
    await this.passwordInput.fill(`${process.env.PASSWORD}`);
    await this.keepmeloggedinBox.check();
    await this.submitButton.click();
  }

  async logout() {
    await this.menuIconButton.click();
    await this.signOutButton.click();
  }
}
