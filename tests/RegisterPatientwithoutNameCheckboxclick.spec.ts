import {expect, test} from "@playwright/test";

test("" ,async ({page}) => {
    
    await page.goto('https://demo.openmrs.org/openmrs/login.htm');
    await page.fill("//input[@name='username']", "Admin")
    await page.fill("//input[@name='password']", "Admin123")
    await page.click("//li[text() = 'Inpatient Ward']");
    await page.click("//input[@id='loginButton']");
    await page.waitForTimeout(3000);
    await page.click("//a[@id='referenceapplication-registrationapp-registerPatient-homepageLink-referenceapplication-registrationapp-registerPatient-homepageLink-extension']");

    const undefinedName = page.locator("text = Unidentified Patient");
    await undefinedName.check();
    await page.waitForTimeout(3000);
    
    expect(undefinedName).toBeChecked();
})