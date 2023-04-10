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

  card(cardLocator: string) {
    const card = this.page.locator(cardLocator);
    return card;
  }

  async minimize(cardLocator: string) {
    const card = this.card(cardLocator);
    const button = card.getByRole("button", {
      name: "Minimize",
    });

    await button.click();
  }

  async restore(cardLocator: string) {
    const card = this.card(cardLocator);
    const button = card.getByRole("button", {
      name: "Restore",
    });

    await button.click();
  }
}
