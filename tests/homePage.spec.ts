import { test, expect } from "@playwright/test";

test("Align button for Scripture card", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}?server=QA`);
  await expect(page).toHaveURL(`${process.env.BASE_URL}?server=QA`);
  await page
    .locator('[data-test="username-input"]')
    .getByRole("textbox")
    .click();
  await page
    .locator('[data-test="username-input"]')
    .getByRole("textbox")
    .fill(`${process.env.USERNAME}`);
  await page
    .locator('[data-test="password-input"]')
    .getByRole("textbox")
    .click();
  await page
    .locator('[data-test="password-input"]')
    .getByRole("textbox")
    .fill(`${process.env.PASSWORD}`);
  await page.getByLabel("Keep me logged in").check();
  await page.locator('[data-test="submit-button"]').click();
  await page.locator("#organization-select-outlined").click();
  await page.getByRole("option", { name: "unfoldingWord" }).click();
  await page.getByRole("button", { name: "​", exact: true }).click();
  await page.getByRole("option", { name: "en - English - English" }).click();
  await page.getByRole("button", { name: "Save and Continue" }).click();

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
