import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator("div").nth(1).click();
  await page.getByRole("button", { name: "Open Next.js Dev Tools" }).click();
  await page.getByRole("button", { name: "Open issues overlay" }).click();
  await page.getByRole("button", { name: "Open issues overlay" }).click();
  await page.getByRole("button", { name: "Open issues overlay" }).click();
  await page.locator("nextjs-portal > div > div").first().click();
  await page.getByRole("button", { name: "Open issues overlay" }).click();
  await page.getByText("- A server/client branch `if").click();
  await page.getByRole("dialog", { name: "Console Error" }).press("Escape");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("arun@gmail.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("arun@123");
  await page
    .locator("form")
    .getByRole("button")
    .filter({ hasText: "/^$/" })
    .click();
  await page
    .locator("form")
    .getByRole("button")
    .filter({ hasText: "/^$/" })
    .click();
  await page.getByRole("link", { name: "Register" }).click();
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("arun@123");
  await page.getByRole("textbox", { name: "Password" }).press("Enter");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Add Work" }).click();
  await page.getByRole("textbox", { name: "Title" }).click();
  await page.getByRole("textbox", { name: "Title" }).fill("add");
  await page.getByRole("textbox", { name: "Description" }).click();
  await page
    .getByRole("textbox", { name: "Description" })
    .fill("test the code");
  await page
    .getByRole("textbox", { name: "End Date (Optional)" })
    .fill("2026-02-26");
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator(".data-closed\\:fade-out-0").first().click();
  await page.locator('input[name="endTime"]').fill("05:00");
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').click();
  await page.locator('input[name="endTime"]').press("ArrowRight");
  await page.locator('input[name="endTime"]').press("ArrowRight");
  await page.locator('input[name="endTime"]').press("ArrowRight");
  await page.locator('input[name="endTime"]').fill("17:00");
  await page.getByRole("combobox").selectOption("in-progress");
  await page.getByRole("button", { name: "Add Work" }).click();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Add Work" }).click();
  await page.locator("div").nth(1).click();
  await page.getByRole("button", { name: "Collapse issues badge" }).click();
  await page.getByRole("button", { name: "Open Next.js Dev Tools" }).click();
  await page.getByRole("menuitem", { name: "Issues" }).click();
  await page.getByRole("dialog", { name: "Console Error" }).press("Escape");
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Add Work" }).click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .locator("div")
    .filter({
      hasText:
        "/^In Progressaddtest the codeFeb 25 16:35Due: Feb 26 17:00✏️❌$/",
    })
    .first()
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .locator("div")
    .filter({
      hasText:
        "/^In Progressaddtest the codeFeb 25 16:35Due: Feb 26 17:00✏️❌$/",
    })
    .nth(2)
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page.getByRole("button", { name: "✏️", exact: true }).click();
  await page.getByRole("button", { name: "Close" }).click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .locator("div")
    .filter({
      hasText:
        "/^In Progressaddtest the codeFeb 25 16:35Due: Feb 26 17:00✏️❌$/",
    })
    .nth(2)
    .click();
  await page
    .locator("div")
    .filter({
      hasText:
        "/^In Progressaddtest the codeFeb 25 16:35Due: Feb 26 17:00✏️❌$/",
    })
    .first()
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page
    .getByRole("button", { name: "In Progress add test the code" })
    .click();
  await page.getByRole("button", { name: "✏️", exact: true }).click();
  await page.getByRole("combobox").selectOption("done");
  await page.getByRole("combobox").selectOption("cancelled");
  await page.getByRole("button", { name: "Save" }).click();
  await page
    .getByRole("button", { name: "Cancel add test the code Feb" })
    .click();
  await page
    .getByRole("button", { name: "Cancel add test the code Feb" })
    .click();
  await page.getByRole("button", { name: "Add Work" }).click();
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByText("Add WorkDashboard").click();
  await page.getByRole("link", { name: "Add Work" }).click();
  await page.getByRole("link", { name: "Add Work" }).click();
  await page.getByRole("link", { name: "Add Work" }).click();
  await page
    .getByRole("button", { name: "Cancel add test the code Feb" })
    .click();
  await page
    .locator("div")
    .filter({
      hasText: "/^Canceladdtest the codeFeb 25 16:35Due: Feb 26 17:00✏️🗑️$/",
    })
    .first()
    .click();
  await page.getByRole("button", { name: "🗑️", exact: true }).click();
  await page.getByRole("button", { name: "Logout" }).click();
  await page.locator("div").nth(3).click();
  await expect(page.locator("html")).toMatchAriaSnapshot(`
    - document:
      - heading "Login" [level=2]
      - text: Email
      - textbox "Email":
        - /placeholder: example@email.com
      - text: Password
      - textbox "Password":
        - /placeholder: Enter password
      - button
      - button "Login"
      - text: Don't have an account?
      - link "Register":
        - /url: /register
      - alert
    `);
});
