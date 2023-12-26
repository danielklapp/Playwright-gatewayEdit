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
  test("Minimize and restore Scripture Card 0 by button", async ({ page }) => {
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
    await page
      .locator("div[id='scripture_card_0'] div[class='sc-brSaZW kHSFvm']")
      .click();
    await page.waitForLoadState("networkidle");
    await page
      .getByText(
        "The book of the genealogy of Jesus Christ, son of David, son of Abraham:"
      )
      .click();
    await page
      .locator("div[id='scripture_card_0'] span[class='sc-hABAzo cdHyFD']")
      .press("Meta+ArrowDown");
    await page
      .getByText(
        "The book of the genealogy of Jesus Christ, son of David, son of Abraham:"
      )
      .fill(
        "The book of the genealogy of Jesus Christ, son of David, son of Abraham:\ntest edit"
      );
    await expect(page.getByLabel("Save", { exact: true })).toBeVisible();
    await expect(page.getByLabel("Alignment is Invalid")).toBeVisible();

    const invalidAlignment = page.locator(
      "#invalid_alignment_icon_TARGET_LITERAL"
    );
    await expect(invalidAlignment).toBeEnabled();
    ("#valid_icon_TARGET_LITERAL");
    await page.locator("#alignment_icon_TARGET_LITERAL").click();

    await page.locator("#wordList").hover();
    await page.mouse.wheel(0, 1000);

    const test = page
      .locator("div")
      .filter({ hasText: /^test$/ })
      .nth(3);
    const βίβλος = page
      .locator("div")
      .filter({ hasText: /^βίβλοςThebook$/ })
      .nth(1);

    await test.dragTo(βίβλος);

    const edit = page
      .locator("div")
      .filter({ hasText: /^edit$/ })
      .nth(3);
    const γενέσεως = page
      .locator("div")
      .filter({ hasText: /^γενέσεωςof1thegenealogy$/ })
      .nth(1);

    await edit.dragTo(γενέσεως);

    await page.waitForTimeout(1000);

    await page.getByRole("button", { name: "Accept" }).click();
    const validAlignment = page.locator("#valid_icon_TARGET_LITERAL");
    await expect(validAlignment).toBeEnabled();
  });

  test.skip("Correct title for Restore_title_scripture_card_0", async ({ page }) => {
    const scriptureCard0 = page.locator(
      "div[id='scripture_card_0'] div[class='sc-brSaZW kHSFvm']"
    );
    const minimizedCards = page.getByLabel("minimized cards");

    await page.waitForLoadState("networkidle");
    const text = await scriptureCard0.allTextContents();

    expect(text).toContain("unfoldingWord® Literal Text v77");
    await page.locator("#minimize_button_scripture_card_0").click();
    await page.getByLabel("minimized cards").click();
    await expect(minimizedCards).toHaveText("unfoldingWord® Literal Text v77", {
      timeout: 20000,
    });
    await page.locator("#restore_title_scripture_card_0 div").click();
    await page.locator("#scripture_card_0_card_menu path").click();
    await page
      .locator("div")
      .filter({ hasText: /^Choose version or enter Door43 URL$/ })
      .click();
    await page
      .getByRole("option", { name: "unfoldingWord® Simplified" })
      .click();
    await page.getByTestId("CloseIcon").click();
    await page.locator("#minimize_button_scripture_card_0").click();
    await page.getByLabel("minimized cards").click();
    await page.locator("#restore_title_scripture_card_0 div").click();
    await expect(page.locator("#scripture_card_0_title")).toContainText(
      "unfoldingWord® Simplified Text v77"
    );
    await page.locator("#minimize_button_scripture_card_0").click();
    await page.getByLabel("minimized cards").click();
    await expect(page.locator("b")).toContainText(
      "unfoldingWord® Simplified Text v77"
    );
    await page.locator("#restore_title_scripture_card_0 div").click();
    await page.locator("#scripture_card_0_card_menu").click();
    await page
      .locator("div")
      .filter({ hasText: /^Choose version or enter Door43 URL$/ })
      .click();
    await page
      .getByRole("option", { name: "unfoldingWord® Literal Text" })
      .click();
    await page.getByTestId("CloseIcon").locator("path").click();
    await page.locator("#minimize_button_scripture_card_0").click();
    await page.getByLabel("minimized cards").click();
    await page.locator("#restore_title_scripture_card_0 div").click();
  });
});
