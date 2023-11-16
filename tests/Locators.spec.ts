import { test, expect } from '@playwright/test';

test('',async ({page}) => {
    await page.goto("https://www.demoblaze.com/");

    //click on login button - property
    await page.locator("id=login2").click();

    //provide usernanme = css

    await page.fill("#loginusername","pavanol");

    //provide password - css

    await page.fill("#loginpassword","test@123");

    //click on login button - xpath

    await page.locator("//button[normalize-space() = 'Log in']").click();

    await page.waitForTimeout(3000);

    //verify logout link is present

    const logoutlink = await page.locator("//a[normalize-space() = 'Log out']");

    await expect(logoutlink).toBeVisible();

    await page.close();

    
})