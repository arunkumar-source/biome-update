import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("arun@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("arun@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "after-login.png" });
  await page.getByRole("button", { name: "Add Work" }).click();
  await page.getByRole("textbox", { name: "Title" }).fill("add");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("test the code");
  await page
    .getByRole("textbox", { name: "End Date (Optional)" })
    .fill("2026-02-27");
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').fill("16:00");
  await page.getByRole("button", { name: "Add Work" }).click();
  await page.getByRole("button", { name: "✏️", exact: true }).click();
  await page.getByRole("combobox").selectOption("in-progress");
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "❌", exact: true }).click();
  await page.getByRole("button", { name: "🗑️", exact: true }).click();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Add Work" }).click();
  await page.getByRole("button", { name: "Logout" }).click();
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("kuma");
  await page.getByRole("textbox", { name: "Name" }).press("ArrowDown");
  await page.getByRole("textbox", { name: "Name" }).press("Tab");
  await page.getByRole("textbox", { name: "Email" }).fill("kumar@gmail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Password" }).fill("kumar@123");
  await page.getByRole("button", { name: "Register" }).click();
});
