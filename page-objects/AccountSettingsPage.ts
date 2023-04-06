import { expect, Locator, Page } from "@playwright/test";

export class AccountSettingsPage {
  readonly page: Page;
  readonly organizationBox: Locator;
  readonly organization: Locator;
  readonly primaryTranslationLanguageBox: Locator;
  readonly language: Locator;
  readonly saveAndContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.organizationBox = page.locator("#organization-select-outlined");
    this.organization = page.getByRole("option", { name: "unfoldingWord" });
    this.primaryTranslationLanguageBox = page.locator(
      "#primary-language-select-outlined"
    );
    this.language = page.getByRole("option", {
      name: "en - English - English",
    });
    this.saveAndContinue = page.locator(
      ".MuiButton-startIcon.MuiButton-iconSizeLarge"
    );
  }

  async translationSettings() {
    await this.organizationBox.click();
    await this.organization.click();
    await this.primaryTranslationLanguageBox.click();
    await this.language.click();
    await this.saveAndContinue.click();
  }
}
