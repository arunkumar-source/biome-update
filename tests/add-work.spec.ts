// tests/add-work.spec.ts
import { test, expect } from "@playwright/test";

test.describe("AddWork Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/AddWorkKanban");
  });

  test("should open the dialog when 'Add Work' button is clicked", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Add Work" }).click();
    await expect(page.getByText("Add work here")).toBeVisible();
    await expect(page.getByPlaceholder("Title")).toBeVisible();
  });

  test("should show validation errors when submitting empty form", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Add Work" }).click();
    await page.getByRole("button", { name: "Add Work" }).nth(1).click();

    await expect(page.getByText("Title is required")).toBeVisible();
    await expect(page.getByText("Description is required")).toBeVisible();
  });

  test("should submit form with correct data", async ({ page }) => {
    await page.getByRole("button", { name: "Add Work" }).click();

    // Fill inputs
    await page.getByPlaceholder("Title").fill("Test Work");
    await page
      .getByPlaceholder("Description")
      .fill("This is a test description.");

    // Optional end date/time
    const today = new Date().toISOString().split("T")[0] || "";
    await page.getByLabel("End Date (Optional)").fill(today);
    await page.locator('input[type="time"]').fill("15:30");

    // Status
    await page.locator("select").selectOption("in-progress");

    // Intercept API call
    await page.route("/api/add", (route) => {
      route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
    });

    // Submit
    await page.getByRole("button", { name: "Add Work" }).nth(1).click();

    // Expect dialog to close
    await expect(page.getByText("Add work here")).toHaveCount(0);
  });

  test("should disable submit button when request is pending", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Add Work" }).click();

    // Intercept API with delay
    await page.route("/api/add", async (route) => {
      await new Promise((res) => setTimeout(res, 1000));
      route.fulfill({ status: 200, body: JSON.stringify({ success: true }) });
    });

    await page.getByPlaceholder("Title").fill("Test Work");
    await page.getByPlaceholder("Description").fill("Description text");
    await page.getByRole("button", { name: "Add Work" }).nth(1).click();

    const submitBtn = page.getByRole("button", { name: "Adding..." });
    await expect(submitBtn).toBeDisabled();
  });
});
