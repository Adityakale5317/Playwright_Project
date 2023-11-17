import { test, expect } from '@playwright/test';

test('Checkbox Handling',async ({page}) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');
    await page.locator("input.Automation").check();

    expect( await page.locator("input.Automation")).toBeChecked();
    expect( await page.locator("input.Automation").isChecked()).toBeTruthy();
})

test.only('Handling multiple checkbox',async ({page}) => {

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