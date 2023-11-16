import {expect, test} from "@playwright/test";

test('',async ({page}) => {

    await page.goto("https://demo.openmrs.org/openmrs/login.htm");
    await page.fill("input#username", "admin");
    await page.fill("input#password", "Admin123");
   // await page.click("li.selected");
    await page.locator("text=Isolation Ward").click();
    await page.locator("input.btn.confirm").click();
    await page.waitForTimeout(3000);
    await expect(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).toHaveText("Logged in as Super User (admin) at Inpatient Ward.");
    
})