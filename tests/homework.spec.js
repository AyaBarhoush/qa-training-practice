import { test, expect } from '@playwright/test';

test('Open Lancome Website', async ({ page }) => {
  test.setTimeout(100000);
  // Navigate to the website
  await page.goto('https://www.lancome-usa.com/');

  // Verify logo
  await expect(page.locator('.c-logo__image').first()).toBeVisible();

  // Verify Email sign up
  await expect(page.locator('.c-simple-signup__title')).toBeVisible();

  // Verify My Bag
  await expect(page.locator('.c-minicart-icon__svg').first()).toBeVisible();

  // Verify My Account
  const myAccount = page.locator('button[aria-label="My account panel"]').first();
  await expect(myAccount).toBeVisible();

  // Click My Account
  await myAccount.click();
  
  // Verify login form title
  await page.waitForTimeout(20000);
  const signInBtn = page.locator('button[aria-label="Sign In or Create Account"]');
  await signInBtn.click();
  await expect(page.locator('.c-account__title')).toHaveText("Sign In");




  await page.getByRole('textbox', { name: 'Your email address' }).fill('barhoushaya10@gmail.com');
  await page.locator('input[type="password"]').fill('123456789Aya@');

  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.waitForTimeout(8000);

  const accountTitle = page.locator('.c-account-panel__title');

  await expect(accountTitle).toContainText('Aya');
});