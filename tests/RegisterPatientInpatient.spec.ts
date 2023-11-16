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
    await page.locator("//select[@name='gender']").selectOption("M");
    await page.click("//button[@id='next-button']");

    await page.waitForTimeout(5000);
    await page.fill("//input[@name='birthdateDay']","7");
    await page.locator("//select[@name='birthdateMonth']").selectOption("2");
    await page.fill("//input[@name='birthdateYear']", "1986");
    await page.click("//button[@id='next-button']");
    await page.fill("//input[@name='address1']", "Prince charles Street, Cardiff Walse");
    await page.click("//button[@id='next-button']");
    await page.waitForTimeout(3000);
    await page.fill("//input[@name='phoneNumber']", "9999999999");
    await page.click("//button[@id='next-button']");
    await page.locator("id = relationship_type").selectOption("2");
    await page.fill("//input[@placeholder='Person Name']", "Benzama");
    await page.click("//input[@type='submit']");

})

test.only('Login to Isolation ward',async ({page}) => {
    await page.goto('https://demo.openmrs.org/openmrs/login.htm');
    await page.fill("input#username", "Admin")
    await page.fill("input#password", "Admin123")
    await page.click("li[id='Outpatient Clinic']");
    await page.click("input#loginButton");
    await page.waitForTimeout(3000);
    await page.click("a#referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension");
    await page.fill("input[name='givenName']", "abc");
    await page.fill("input[name='familyName']", "test");
    await page.click("button#next-button");
 
    await page.locator("select#gender-field").selectOption("M");
    await page.click("button#next-button");
   
    await page.fill("input#birthdateDay-field","16");
    await page.locator("select#birthdateMonth-field").selectOption("3");
    await page.fill("input#birthdateYear-field", "1998");
    await page.click("button#next-button");
 
    await page.fill("input#address1", "svvsvsvdsvs");
    await page.click("button#next-button");
 
    await page.fill("input[name='phoneNumber']","9876543219")
    await page.click("button#next-button");
 
    await page.locator("select#relationship_type").selectOption("Doctor");
    await page.fill("input[placeholder='Person Name']","abc");
    await page.click("button#next-button");
 
    await page.click("input#submit");
   
 
    await page.waitForTimeout(3000);



})