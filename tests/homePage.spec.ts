import { test, expect } from "@playwright/test";

test("Home page for gatewayEdit", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}?server=QA`);
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
});
/*
test("Slider test one", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}?server=QA`);
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
  await page.pause();
  await page.locator("#resource_card_ta_card_menu").click();

  page.mouse.down();
  await page.locator("span").filter({ hasText: "100" }).nth(1).click();
  await page.mouse.move(130, 0);
  page.mouse.up();
  await page.getByTestId("CloseIcon").locator("path").click();
});

test("Slider test two", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}?server=QA`);
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
  await page.pause();
  await page.locator("#resource_card_ta_card_menu").click();

  await page.locator("span").filter({ hasText: "100" }).nth(1).click();

  await test.step("handle slider", async () => {
    await page.waitForSelector("//span[@class='MuiSlider-rail css-b04pc9']");
    const slider = await page.$("//span[@class='MuiSlider-rail css-b04pc9']");
    let el = page.locator(
      "//span[@class='MuiSlider-valueLabelOpen MuiSlider-valueLabel FontSizeSlider-valueLabel css-3besu']"
    );
    let text = await el.inputValue();
    console.log("Initial text: " + text);
    let targetAmount = "130";
    let isCompleted = false;
    if (slider) {
      while (!isCompleted) {
        let srcBound = await slider.boundingBox();
        if (srcBound) {
          await page.mouse.move(
            srcBound.x + srcBound.width / 2,
            srcBound.y + srcBound.height / 2
          );
          await page.mouse.down();
          await page.mouse.move(
            srcBound.x + 15,
            srcBound.y + srcBound.height / 2
          );
          await page.mouse.up();
          let text = await el.inputValue();
          if (text == targetAmount) {
            isCompleted = true;
          }
        }
      }
    }
  });
});

test("Resizing cards", async ({ page }) => {
  await page.goto(`${process.env.BASE_URL}?server=QA`);
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
  await page.pause();
  await page
    .locator("div:nth-child(4) > .sc-egiyK > .react-resizable-handle")
    .click();
  await page.mouse.down();
  await page.mouse.move(0, 0);
});
*/
