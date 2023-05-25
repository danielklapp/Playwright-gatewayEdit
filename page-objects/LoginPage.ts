import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly keepmeloggedinBox: Locator;
  readonly submitButton: Locator;
  readonly menuIconButton: Locator;
  readonly signOutButton: Locator;
  readonly errorMessage: Locator;
  readonly loginForm: Locator;

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
    this.menuIconButton = page.getByRole("button", { name: "menu" });
    this.signOutButton = page.getByRole("button", { name: "Logout" });
    this.errorMessage = page.locator("P[data-test$='login-error-text']");
    this.loginForm = page.locator(".jss7");
  }

  async login() {
    await this.usernameInput.fill(`${process.env.USERNAME}`);
    await this.passwordInput.fill(`${process.env.PASSWORD}`);
    await this.keepmeloggedinBox.check();
    expect(this.keepmeloggedinBox).toBeChecked();
    await this.submitButton.click();
  }

  async wrongLogin() {
    await this.usernameInput.fill(`${process.env.USERNAME}abc`);
    await this.passwordInput.fill(`${process.env.PASSWORD}123`);
    await this.keepmeloggedinBox.check();
    await this.submitButton.click();
  }

  async logout() {
    await this.menuIconButton.click();
    await this.signOutButton.click();
  }

  async reallyLoggedout() {
    await this.menuIconButton.click();
    expect(this.signOutButton).not.toBeVisible();
  }

  async reallyLoggedin() {
    await this.menuIconButton.click();
    expect(this.signOutButton).toBeVisible();
  }

  async snapshotLoginForm() {
    expect(await this.loginForm.screenshot()).toMatchSnapshot("login-Form.png");
  }

  async assertErrorMessage() {
    await expect(this.errorMessage).toContainText("Username does not exist.");
  }
}
