import { test, expect } from "@playwright/test";

test.describe("LoginPage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // Adjust path if your login route is different
  });

  test("renders login form", async ({ page }) => {
    await expect(page.locator("h2")).toHaveText("Login");
    await expect(page.locator("input#email")).toBeVisible();
    await expect(page.locator("input#password")).toBeVisible();
    await expect(page.locator("button[type=submit]")).toBeVisible();
  });

  test("can type email and password", async ({ page }) => {
    await page.fill("input#email", "test@example.com");
    await page.fill("input#password", "password123");
    await expect(page.locator("input#email")).toHaveValue("test@example.com");
    await expect(page.locator("input#password")).toHaveValue("password123");
  });

  test("toggles password visibility", async ({ page }) => {
    const passwordInput = page.locator("input#password");
    const toggleButton = page.locator("button:has(svg)");

    // Initially password type is 'password'
    await expect(passwordInput).toHaveAttribute("type", "password");

    // Click toggle to show password
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute("type", "text");

    // Click again to hide password
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("shows error on empty submission", async ({ page }) => {
    await page.click("button[type=submit]");
    await expect(page.locator("text=Email is required")).toBeVisible();
    await expect(page.locator("text=Password is required")).toBeVisible();
  });

  test("submits the form with valid credentials", async ({ page }) => {
    await page.goto("/");
    await page.fill("input#email", "arun@gmail.com");
    await page.fill("input#password", "arun@123");
    await page.click("button[type=submit]");

    await expect(page).toHaveURL("/AddWorkKanban");
  });
});
