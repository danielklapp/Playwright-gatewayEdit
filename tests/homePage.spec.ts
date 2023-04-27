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

test("Minimize and restore cards", async ({ page }) => {
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
  await page
    .locator("#scripture_card_0")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page
    .locator("#scripture_card_1")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page
    .locator("#scripture_card_2")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page
    .locator("#resource_card_tn")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page
    .locator("#resource_card_ta")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page
    .locator("#resource_card_twl")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page
    .locator("#resource_card_twa")
    .getByRole("button", { name: "Minimize" })
    .click();
  await page.getByRole("button", { name: "Minimize", exact: true }).click();

  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore Literal Translation card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore Original Source card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore Simplified Translation card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationNotes card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationAcademy card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationWords List card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationWords Article card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationQuestions card." })
    .click();
});

test("Minimize button and Restore buttons for cards", async ({ page }) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  // await page.pause();
  await page.locator("#minimize_button_resource_card_tn").click();
  await page.locator("#minimize_button_resource_card_ta").click();
  await page.locator("#minimize_button_resource_card_twl").click();
  await page.locator("#minimize_button_resource_card_twa").click();
  await page.locator("#minimize_button_resource_card_tq").click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationNotes card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationAcademy card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationWords List card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationWords Article card." })
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .getByRole("button", { name: "Restore translationQuestions card." })
    .click();
});

test("Minimize button and Restore Title buttons for cards", async ({
  page,
}) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  await page.locator("#minimize_button_scripture_card_0").click();
  await page.locator("#minimize_button_scripture_card_1").click();
  await page.locator("#minimize_button_scripture_card_2").click();
  await page.locator("#minimize_button_resource_card_tn").click();
  await page.locator("#minimize_button_resource_card_ta").click();
  await page.locator("#minimize_button_resource_card_twl").click();
  await page.locator("#minimize_button_resource_card_twa").click();
  await page.getByRole("button", { name: "Minimize", exact: true }).click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .locator("#restore_title_scripture_card_Literal_Translation div")
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .locator("#restore_title_scripture_card_Original_Source div")
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page
    .locator("#restore_title_scripture_card_Simplified_Translation div")
    .click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page.locator("#restore_title_resource_card_tn div").click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page.locator("#restore_title_resource_card_ta div").click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page.locator("#restore_title_resource_card_twl div").click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page.locator("#restore_title_resource_card_twa div").click();
  await page.getByRole("button", { name: "minimized cards" }).click();
  await page.locator("#restore_title_resource_card_tq div").click();
});

test.fixme("Align button for Scripture cards", async ({ page }) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  await page.waitForSelector("#scripture_card_0");
  await page.locator("#alignment_icon_TARGET_LITERAL").click();
  page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "Cancel" }).click();
  await page.waitForSelector("#scripture_card_2");
  await page.locator("#alignment_icon_TARGET_SIMPLIFIED").click();
  await page.getByRole("button", { name: "Cancel" }).click();
});

test("Checking previous and next buttons for translationNotes", async ({
  page,
}) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  await page.locator("#resource_card_tn_prev").click();
  await page.locator("#resource_card_tn_prev").click();
  await page.locator("#resource_card_tn_prev").click();
  await page.locator("#resource_card_tn_prev").click();
  await page.locator("#resource_card_tn_prev").click();
  await page.locator("#resource_card_tn_next").click();
  await page.locator("#resource_card_tn_next").click();
  await page.locator("#resource_card_tn_next").click();
  await page.locator("#resource_card_tn_next").click();
  await page.locator("#resource_card_tn_next").click();
});

test("Checking previous and next buttons for translationWords Articles", async ({
  page,
}) => {
  await page.goto(
    "https://release-v2-0-0--gateway-edit.netlify.app/?server=QA"
  );
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
  // await page.pause();
  await page.locator("#resource_card_twa_prev").click();
  await page.locator("#resource_card_twa_prev").click();
  await page.locator("#resource_card_twa_prev").click();
  await page.locator("#resource_card_twa_prev").click();
  await page.locator("#resource_card_twa_next").click();
  await page.locator("#resource_card_twa_next").click();
  await page.locator("#resource_card_twa_next").click();
  await page.locator("#resource_card_twa_next").click();
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
