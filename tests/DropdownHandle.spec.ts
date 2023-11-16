import { test, expect } from '@playwright/test';

test('Simple Dropdown',async ({page}) => {

    await page.goto("https://www.geodatasource.com/software/country-region-dropdown-menu-demo");
    await page.selectOption("select.form-control.gds-cr",{
        label : "Argentina"
    })
    await page.waitForTimeout(3000);
    
})

test('Multiselect Dropdown',async ({page}) => {

    await page.goto("https://semantic-ui.com/modules/dropdown.html");
    await page.selectOption("i.dropdown.icon",[{
        label : "Angular"
    },
     {
        value: "css"
    }])
    await page.waitForTimeout(3000);
    
})

test.only('BootStrap dropdown',async ({page}) => {

    await page.goto("https://semantic-ui.com/modules/dropdown.html");
   
    await page.click("i.dropdown.icon");
    
})