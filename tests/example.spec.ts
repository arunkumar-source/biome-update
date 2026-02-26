import { test } from "@playwright/test";
const regx = /^$/;

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("arunkumar");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("arunkumar@123");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("arunkumar@gmail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("arun@123");
  await page
    .locator("form")
    .getByRole("button")
    .filter({ hasText: regx })
    .click();
  await page
    .locator("form")
    .getByRole("button")
    .filter({ hasText: regx })
    .click();
  await page.getByRole("button", { name: "Register" }).click();
  await page.getByRole("textbox", { name: "Email" }).click();
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("arunkumar@gmail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("arun@123");
  await page
    .locator("form")
    .getByRole("button")
    .filter({ hasText: regx })
    .click();
  await page.getByRole("button", { name: "Login" }).click();
});
