import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";
let loginPage: LoginPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);

  await homePage.visit();
  await loginPage.login();
});

test.describe("Scripture Card 0", () => {
  test("Minimize and restore Scripture Card 0 by button", async ({
    browser,
  }) => {
    await homePage.minimize("#scripture_card_0");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_button_scripture_card_0");
  });

  test("Minimize and restore Scripture Card 0 by title", async ({ page }) => {
    await homePage.minimize("#scripture_card_0");
    await homePage.verifyRecentCards();
    await homePage.restore("#restore_title_scripture_card_0");
  });

  test("Align button for Scripture card", async ({ page }) => {
    await page.locator("#scripture_card_0").click();
    await page.getByText("The book of the genealogy of").click();
    await page
      .getByText("The book of the genealogy of")
      .fill(
        "The book of the genealogy of Jesus Christ, son of David, son of Abraham: \ntest edit"
      );

    await page.locator("#alignment_icon_TARGET_LITERAL").click();

    await expect(page.getByLabel("Save", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Alignment is Invalid")).toBeVisible();

    const invalidAlignment = page.locator(
      "#invalid_alignment_icon_TARGET_LITERAL"
    );
    await expect(invalidAlignment).toBeEnabled();
    ("#valid_icon_TARGET_LITERAL");
    await page.locator("#alignment_icon_TARGET_LITERAL").click();

    const test = page.locator("//span[contains(text(),'test')]");
    const βίβλος = page.locator("(//div)[217]");

    await test.dragTo(βίβλος);

    const edit = page.locator("//span[contains(text(),'edit')]");
    const γενέσεως = page.locator("(//div)[234]");

    await edit.dragTo(γενέσεως);

    await page.getByRole("button", { name: "Accept" }).click();
    const validAlignment = page.locator("#valid_icon_TARGET_LITERAL");
    await expect(validAlignment).toBeEnabled();
  });

  // Until the issue with switching the resource version in a scripture card is resolved, you can log out and log back in to switch the resource version for the scripture card to make test to pass.

  test("Correct title for Restore_title_scripture_card_0", async ({ page }) => {
    await page.waitForTimeout(6000);
    await expect(page.locator("#scripture_card_0_title")).toContainText(
      "unfoldingWord® Literal Text v83"
    );
    await page.locator("#minimize_button_scripture_card_0").click();
    await page.getByLabel("minimized cards").click();
    await expect(page.locator("b")).toContainText(
      "unfoldingWord® Literal Text v83"
    );
    await page.locator("#restore_title_scripture_card_0 div").click();
    await page.locator("#scripture_card_0_card_menu path").click();
    await page
      .locator("div")
      .filter({ hasText: /^Choose version or enter Door43 URL$/ })
      .click();
    await page
      .getByRole("option", { name: "unfoldingWord® Simplified" })
      .click();
    await page
      .locator("div")
      .filter({
        hasText:
          "unfoldingWord® Literal Text v83 SettingsChoose version or enter Door43",
      })
      .nth(1)
      .click();
    await page.getByTestId("CloseIcon").locator("path").click();
    await loginPage.logout();

    await loginPage.login();
    await page.waitForTimeout(6000);
    await expect(page.locator("#scripture_card_0_title")).toContainText(
      "unfoldingWord® Simplified Text v83"
    );
    await page.locator("#minimize_button_scripture_card_0").click();
    await page.getByLabel("minimized cards").click();
    await expect(page.locator("b")).toContainText(
      "unfoldingWord® Simplified Text v83"
    );
    await page.locator("#restore_title_scripture_card_0 div").click();
    await page.locator("#scripture_card_0_card_menu").click();
    await page.getByLabel("Choose version or enter").click();
    await page
      .getByRole("option", { name: "unfoldingWord® Literal Text" })
      .click();
    await page.getByTestId("CloseIcon").locator("path").click();
    await loginPage.logout();

    await loginPage.login();
    await page.waitForTimeout(6000);
    await expect(page.locator("#scripture_card_0_title")).toContainText(
      "unfoldingWord® Literal Text v83"
    );
  });

  test("Making font size smaller", async ({ page }) => {
    await homePage.cardMenu("#scripture_card_0_card_menu");

    const startingFontSize = page
      .locator("span")
      .filter({ hasText: "100" })
      .nth(1);
    let changedFontSize = page.locator("span").filter({ hasText: "0" }).nth(1);
    const box = await startingFontSize.boundingBox();
    const x = box!.x + box!.width / 2;
    const y = box!.y + box!.height / 2;

    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x - 195, y);
    await page.mouse.up();
    expect(changedFontSize).toContainText("50");
    await page.locator("#settings_card_close").click();
  });

  test("Making font size bigger", async ({ page }) => {
    await homePage.cardMenu("#scripture_card_0_card_menu");

    const startingFontSize = page
      .locator("span")
      .filter({ hasText: "100" })
      .nth(1);
    let changedFontSize = page
      .locator("span")
      .filter({ hasText: "150" })
      .nth(1);
    const box = await startingFontSize.boundingBox();
    const x = box!.x + box!.width / 2;
    const y = box!.y + box!.height / 2;

    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + 195, y);
    await page.mouse.up();
    await expect(changedFontSize).toContainText("150");
    await page.locator("#settings_card_close").click();
  });

  test("Buttons are visible", async ({ page }) => {
    await expect(
      page.locator("#minimize_button_scripture_card_0")
    ).toBeVisible();
    await expect(page.locator("#save_button_scripture_card_0")).toBeVisible();
    await expect(page.locator("#alignment_icon_TARGET_LITERAL")).toBeVisible();
    await expect(
      page.locator("#scripture_card_0").getByLabel("Update my content")
    ).toBeVisible();
    await expect(page.locator("#scripture_card_0_card_menu")).toBeVisible();
  });

  test("Align button for Scripture card in es-419_gl organization", async ({
    page,
  }) => {
    await page.getByLabel("menu").click();
    await page.getByRole("button", { name: "Account Settings" }).click();
    await page.getByLabel("unfoldingWord").click();
    await page.getByRole("option", { name: "es-419_gl" }).click();
    await page.getByLabel("en - English - English").click();
    await page.getByRole("option", { name: "es-419 - Latin American" }).click();
    await page.getByRole("button", { name: "Save and Continue" }).click();

    await page.waitForTimeout(5000);
    await page.getByLabel("Open").first().click();
    await page.getByRole("option", { name: "jon" }).click();
    await page.getByLabel("Open").nth(2).click();
    await page.getByRole("option", { name: "9" }).click();

    await page.getByText('Entonces les dijo a ellos: "').click();
    await page.getByText('Entonces les dijo a ellos: "').press("ArrowUp");
    await page.getByText('Entonces les dijo a ellos: "').press("ArrowUp");
    await page
      .getByText('Entonces les dijo a ellos: "')
      .fill(
        'Entonces les dijo a ellosZZ: "Yo soy hebreo y a Jehová, el Dios de los cielos, yo temo, que ha hecho el mar y la tierra seca." \n'
      );
    await page.getByText('Entonces les dijo a ellos: "').click();
    await page
      .getByText('Entonces les dijo a ellos: "')
      .fill(
        'Entonces les dijo a ellosZZ: "Yo soy hebreo y a Jehová, el Dios de los cielos, yo temo, que ha hecho el mar y la tierra de seca." \n'
      );
    await page.locator("#alignment_icon_TARGET_LITERAL").click();

    await expect(page.getByLabel("Save", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Alignment is Invalid")).toBeVisible();

    const invalidAlignment = page.locator(
      "#invalid_alignment_icon_TARGET_LITERAL"
    );
    await expect(invalidAlignment).toBeEnabled();
    ("#valid_icon_TARGET_LITERAL");
    await page.locator("#alignment_icon_TARGET_LITERAL").click();

    const ellosZZ = page.locator("//span[contains(text(),'ellosZZ')]");
    const hebrewWord1 = page.locator("(//div)[277]");

    await ellosZZ.dragTo(hebrewWord1);

    const de = page.locator("(//span[contains(text(),'de')])[5]");
    const hebrewWord2 = page.locator("(//div)[483]");

    await de.dragTo(hebrewWord2);

    await page.getByRole("button", { name: "Accept" }).click();
    const validAlignment = page.locator("#valid_icon_TARGET_LITERAL");
    await expect(validAlignment).toBeEnabled();
  });
});
