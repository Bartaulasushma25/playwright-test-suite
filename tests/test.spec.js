const { test, expect } = require('@playwright/test');
const testData = require('../testData.json');

// Function to log in
async function login(page) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  // const frame = page.frameLocator('iframe-selector');
  await page.waitForSelector('input[id="username"]', { timeout: 5000 });

  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('password123');

  await page.click('button[type="submit"]');
  await page.waitForSelector("div[class='flex min-h-screen']"); 
}

test.describe('Asana Task Verification', () => {
  testData.forEach(({ testCase, section, task, column, tags }) => {
    test(`${testCase}`, async ({ page }) => {
      await login(page);
      await page.click(`button:has-text("${section}")`);
      
      const columnLocator = page.locator(`div.w-80:has(h2:has-text("${column}"))`);
      await expect(columnLocator).toBeVisible();
      
      const taskLocator = columnLocator.locator(`h3:has-text("${task}")`);
      await expect(taskLocator).toBeVisible();
      
      for (const tag of tags) {
        await expect(taskLocator.locator(`.. >> span:has-text("${tag}")`)).toBeVisible();
      }
    });
  });
});

