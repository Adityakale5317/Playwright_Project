import { test, expect } from '@playwright/test';

test('Radio Button Handling', async ({page}) => {

    await page.goto("https://artoftesting.com/samplesiteforselenium");

   
    await page.evaluate(() => {
        window.scrollBy(0,500)
    });

    await page.locator("input#male").check();

    await expect (await page.locator("input#male")).toBeChecked();

    //checking female button not checked
    await expect (await page.locator("input#female").isChecked()).toBeFalsy();


    await page.waitForTimeout(3000);

    await page.close();

})