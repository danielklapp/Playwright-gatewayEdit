import { expect, Locator, Page } from "@playwright/test";

export class AccountSettingsPage {
  readonly page: Page;
  readonly application: Locator;
  readonly organizationBox: Locator;
  readonly organization: Locator;
  readonly primaryTranslationLanguageBox: Locator;
  readonly language: Locator;
  readonly saveAndContinue: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.application = page.getByText(
      "Translation SettingsOrganizationOrganizationThe application can not continue. Th"
    );
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
    this.errorMessage = page.locator("#organization-select-message");
  }

  async translationSettings() {
    await this.organizationBox.click();
    await this.organization.click();
    await this.primaryTranslationLanguageBox.click();
    await this.language.click();
    await this.saveAndContinue.click();
  }

  async assertErrorMessage() {
    this.application;
    await expect(this.errorMessage).toContainText(
      "The application can not continue. The current username is not part of a DCS organization. Please contact your administrator."
    );
  }
}
