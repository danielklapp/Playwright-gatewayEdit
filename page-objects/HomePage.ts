import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly signInButton: Locator;
  readonly recentCards: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('[data-test="submit-button"]');
    this.recentCards = page.locator("#show_minimized_cards");
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

  async verifyRecentCards() {
    await expect(this.recentCards).toBeVisible();
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
      expect(button).toBeEnabled();
    }
  }

  async next(cardLocator: string) {
    const button = this.page.locator(cardLocator);

    for (let i = 0; i < 5; i++) {
      await button.click();
      expect(button).toBeEnabled();
    }
  }

  async verifyMarkdown(cardLocator: string) {
    const card = this.card(cardLocator);
    const markdownButton = card.getByRole("button", {
      name: "Markdown",
    });
    const button = this.page.locator(cardLocator);

    if (markdownButton == markdownButton) {
      expect(markdownButton.getByTitle("Markdown"));
      await button.click();
      expect(markdownButton.getByTitle("Preview"));
    } else markdownButton != markdownButton;
    expect(markdownButton.getByTitle("Preview"));
  }

  async verifyPreview(cardLocator: string) {
    const card = this.card(cardLocator);
    const previewButton = card.getByRole("button", {
      name: "Preview",
    });
    const button = this.page.locator(cardLocator);

    if (previewButton == previewButton) {
      expect(previewButton.getByTitle("Preview"));
      await button.click();
      expect(previewButton.getByTitle("Markdown"));
    } else previewButton != previewButton;
    expect(previewButton.getByTitle("Markdown"));
  }
}
