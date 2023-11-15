import { test, expect } from '@playwright/test';


test("",async ({page}) => {
    await page.goto('https://demo.openmrs.org/openmrs/login.htm');
    await page.fill("//input[@name='username']", "Admin")
    await page.fill("//input[@name='password']", "Admin123")
    await page.click("//li[text() = 'Inpatient Ward']");
    await page.click("//input[@id='loginButton']");
    await page.waitForTimeout(3000);
    await page.click("//a[@id='referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension']");
    await page.fill("//input[@name='givenName']", "Gearth");
    await page.fill("//input[@name='familyName']", "Bale");
    await page.click("//button[@id='next-button']");
   // await page.locator("text = Male").click();
  //  await page.click("text = Male");
    //await page.click("//*[@id='gender-field']/option[1]");
    await page.getByLabel('gender-field').selectOption('Male');
    await page.waitForTimeout(5000);
    await page.fill("//input[@name='birthdateDay']","7");
    await page.click("//select[@name='birthdateMonth']/option[5]");
    await page.fill("//input[@name='birthdateYear']", "1986");
    await page.click("//button[@id='next-button']");
    await page.fill("//input[@name='address1']", "Prince charles Street, Cardiff Walse");
    await page.click("//button[@id='next-button']");
    await page.waitForTimeout(3000);




})