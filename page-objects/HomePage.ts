import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('[data-test="submit-button"]');
  }

  async visit() {
    // await this.page.goto(`${process.env.BASE_URL}?server=QA`);

    await this.page.goto(
      `https://release-v2-0-0--gateway-edit.netlify.app/?server=qa`
    );
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
    const recentCards = this.page.locator("#show_minimized_cards");
    const button = this.page.locator(cardLocator);

    await recentCards.click();
    await button.click();
  }

  async prev(cardLocator: string) {
    const button = this.page.locator(cardLocator);

    for (let i = 0; i < 5; i++) {
      await button.click();
    }
  }

  async next(cardLocator: string) {
    const button = this.page.locator(cardLocator);

    for (let i = 0; i < 5; i++) {
      await button.click();
    }
  }
}
