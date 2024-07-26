import { expect, Locator, Page } from "@playwright/test";

export class AccountSettingsPage {
  readonly page: Page;
  readonly application: Locator;
  readonly organizationBox: Locator;
  readonly primaryTranslationLanguageBox: Locator;
  readonly unfoldingWordOrganization: Locator;
  readonly idiomasPuentesOrganization: Locator;
  readonly unfoldingWordLanguage: Locator;
  readonly idiomasPuentesLanguage: Locator;
  readonly saveAndContinue: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.application = page.getByText(
      "Translation SettingsOrganizationOrganizationThe application can not continue. Th"
    );
    this.organizationBox = page.locator("#organization-select-outlined");
    this.primaryTranslationLanguageBox = page.locator(
      "#primary-language-select-outlined"
    );
    this.unfoldingWordOrganization = page.getByRole("option", {
      name: "unfoldingWord",
    });
    this.idiomasPuentesOrganization = page.getByRole("option", {
      name: "es-419_gl",
    });
    this.unfoldingWordLanguage = page.getByRole("option", {
      name: "en - English - English",
    });
    this.idiomasPuentesLanguage = page.getByRole("option", {
      name: "es-419 - Latin American",
    });
    this.saveAndContinue = page.locator(
      ".MuiButton-startIcon.MuiButton-iconSizeLarge"
    );
    this.errorMessage = page.locator("#organization-select-message");
  }

  async unfoldingWordTranslationSettings() {
    await this.organizationBox.click();
    await this.unfoldingWordOrganization.click();
    await this.primaryTranslationLanguageBox.click();
    await this.unfoldingWordLanguage.click();
    await this.saveAndContinue.click();
  }

  async idiomasPuentesTranslationSettings() {
    await this.organizationBox.click();
    await this.idiomasPuentesOrganization.click();
    await this.primaryTranslationLanguageBox.click();
    await this.idiomasPuentesLanguage.click();
    await this.saveAndContinue.click();
  }

  async assertErrorMessage() {
    this.application;
    await expect(this.errorMessage).toContainText(
      "The application can not continue. The current username is not part of a DCS organization. Please contact your administrator."
    );
  }
}
