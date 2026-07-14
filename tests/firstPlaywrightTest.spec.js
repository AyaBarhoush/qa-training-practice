const { test, expect } = require('@playwright/test');

test('Search for a product', async ({ page }) => {

  // Open the website
  await page.goto('https://certwcs.frontgate.com/?aka_bypass=5C73514EE7A609054D81DE61DD9CA3D6');

   // Verify the page title contains "Frontgate"
   await expect(page).toHaveTitle(/Frontgate/);

  // Click on the search bar
    
   await page.locator('#search-0').click();

   // Type "Dining Room Furniture" and press Enter
   await page.locator('#search-0').fill('Dining Room Furniture');
   await page.locator('#search-0').press('Enter');

   // Verify that at least one product is displayed
   await page.waitForTimeout(5000);
   await expect(page.locator('.c-list').first()).toBeVisible();

});
