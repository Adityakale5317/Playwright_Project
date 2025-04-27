import { test, expect } from '@playwright/test';

test('Checkbox Handling',async ({page}) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator("input.Automation").check();
    await page.waitForTimeout(3000);
    expect( await page.locator("input.Automation")).toBeChecked();
    expect( await page.locator("input.Automation").isChecked()).toBeTruthy();
})

test('Handling multiple checkbox',async ({page}) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');

    const checkboxLocator=[
                    "input.Automation",
                    "input.Performance"
    ];

    for(const locator of checkboxLocator){

        await page.locator(locator).check();
    }

    await page.waitForTimeout(3000);

})

test('capture screenshot @regression', async ({page}) => {

    await page.goto('https://www.makemytrip.com/');
    await page.locator('text="MyBiz Account"').click();
    await page.locator('text="Forgot Login Id?"').click();
    await page.locator('#inputNum').fill('aaaaa');
    await page.locator('text="CONTINUE"').click();
    const InvalidNumber = 'text="Enter A Valid Mobile Number"';
    await expect(page.locator(InvalidNumber)).toHaveText("Enter A Valid Mobile Number");
    
})