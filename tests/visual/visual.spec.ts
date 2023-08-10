import { test, expect } from "@playwright/test";

test.describe.skip("Visual Regression Testing GWE", () => {
  test("Full Page Snapshot", async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}?server=QA`);
    expect(await page.screenshot()).toMatchSnapshot("homepage.png");
  });

  test("Single Element Snapshop", async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}?server=QA`);
    const pageElement = await page.$("h1");
    expect(await pageElement?.screenshot()).toMatchSnapshot("page-title.png");
  });
});
