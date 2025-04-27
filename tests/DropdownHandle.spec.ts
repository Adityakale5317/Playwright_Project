import { test, expect } from '@playwright/test';

test('Simple Dropdown',async ({page}) => {

    await page.goto("https://www.geodatasource.com/software/country-region-dropdown-menu-demo");
    await page.selectOption("select.form-control.gds-cr",{
        label : "Argentina"
    })
    await page.waitForTimeout(3000);
    
})

test.only('Multiselect Dropdown',async ({page}) => {

    await page.goto("https://semantic-ui.com/modules/dropdown.html");
    await page.selectOption("i.dropdown.icon",[{
        label : "Angular"
    },
     {
        value: "css"
    }])
    await page.waitForTimeout(3000);
    
})

test('BootStrap dropdown',async ({page}) => {

    await page.goto("https://semantic-ui.com/modules/dropdown.html");
   
    await page.click("i.dropdown.icon");
    
})

test('Handle Drop down', async ({page}) => {
    
   // test.setTimeout(10000);
   

    await page.goto("https://www.facebook.com/login/");
    await page.getByText("Sign up for Facebook").click();
    const dropdownList = page.locator("#month");

    //Verify default value 
    await expect(dropdownList).toHaveValue('4');

    //Value
    dropdownList.selectOption('5');
    await page.waitForTimeout(3000);
    //visible Text
    dropdownList.selectOption("Aug")
    await page.waitForTimeout(5000);


})