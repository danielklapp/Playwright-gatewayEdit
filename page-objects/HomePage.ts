import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('[data-test="submit-button"]');
  }

  async visit() {
    await this.page.goto(`${process.env.BASE_URL}?server=QA`);
  }

  async clickOnSignIn() {
    await this.signInButton.click();
  }
}
