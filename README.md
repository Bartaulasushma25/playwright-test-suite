# Playwright Test Suite

## Setup

1. Open Folder in Visual Studio Code e.g. playwright-test-suite and  Install dependencies:
   ```
   npm install
   ```

2. Run tests:
   ```
   npm test
   ```
3.  Please run the following command to download new browsers:           
   ```   ║
     npx playwright install  (This will download chromium browser)
   ```
4. Run the script in headed mode to observe what happens. This will show script in running in the browser:
  ``` 
   npx playwright test --headed
  ``` 
5. inspect the elements in the Playwright Inspector
 ``` 
   await page.pause();
 ``` 

## Description

This project runs Playwright tests dynamically based on `testData.json` to minimize code duplication.
