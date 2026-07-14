const { test, expect } = require('@playwright/test');

test('Test 1: Verify homepage loads and logo is visible', async ({ page }) => {
  // Open the website
  await page.goto('https://certwcs.frontgate.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6');

  // Verify page title
  await expect(page).toHaveTitle(/Frontgate/);
  // Verify logo is visible
  await expect(page.locator('.c-link.t-header__link')).toBeVisible();
});


test('Test 2: Search for Dining Room Furniture and verify results appear', async ({ page }) => {
  // Open the website
  await page.goto('https://certwcs.frontgate.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6');

  // Click on the search bar
  await page.locator('#search-0').click();

  // Search for Dining Room Furniture
   await page.locator('#search-0').fill('Dining Room Furniture');
   await page.locator('#search-0').press('Enter');

  // Verify search results are displayed
   await page.waitForTimeout(5000);
   await expect(page.locator('.c-list').first()).toBeVisible();
});


test('Test 3: Login with wrong credentials and verify error message', async ({ page }) => {
  // Open login page
  await page.goto('https://certwcs.frontgate.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6');
  await page.getByRole('button', { name: 'My Account' }).click();
  await page.locator('.sign-in---register').click();

  // Enter invalid credentials
  await page.locator('#email').fill('wrong@test.com');
  await page.locator('#password').fill('wrongpassword');

  // Click login button
  await page.getByRole('button', { name: 'Sign In' }).click();
  // Verify error message appears
  await expect(page.locator('.c-login__submition-error')).toBeVisible();
});