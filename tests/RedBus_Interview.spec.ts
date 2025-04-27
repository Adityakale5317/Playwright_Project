import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import {ModuleTestData} from '../test-data/qa/google.json';


test('Bus search on RedBus',async ({page}) => {

    await page.goto('https://www.redbus.in/');
  //  await page.waitForTimeout(3000);
    const tripFrom =  page.locator('#src');
    await tripFrom.click();
    await tripFrom.fill('Pune');
   // await page.locator('.autoFill').locator('li', { hasText: 'Pune' }).first().click();


    const tripTo = page.locator('#dest');
    await tripTo.click();
    await tripTo.fill('Shirdi');
    await page.locator("//ul/li/div[@class='sc-gZMcBi hviMLb']").first().click();

   //select date
   const dateSelect = page.locator('#onwardCal');

   await dateSelect.click();
 // await page.waitForSelector('.rb-calendar');
   await page.locator('//span[normalize-space()="21"]').click();
   await page.waitForTimeout(3000);
   await page.locator('#search_button').click();
   await page.waitForTimeout(3000);

   const result =  await page.locator('.bus-item').count();
   expect(result).toBeGreaterThan(0);

   //After redbus search sort the search result by fare now how will you verify that the sorting order is correct?
//    Click on "Fare" sort option
//    Wait for search results to update
//    Extract all fare values
//    Convert them to numbers
//    Check if they’re sorted in ascending order
   await page.locator("text='Fare'").click();
   await page.waitForSelector('.icon-up-arrow');

   const FareText = await page.locator('.fare .f-price').allTextContents();
   

   const FareNumber = FareText.map(text=>
    parseInt(text.replace(/[₹,]/g, '').trim())
   );
   console.log(FareNumber);
   const isSorted = FareNumber.every((fare, i, arr) => i === 0 || arr[i - 1] <= fare);

  expect(isSorted).toBe(true);
    
})

