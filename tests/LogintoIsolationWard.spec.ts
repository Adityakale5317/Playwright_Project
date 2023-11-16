import { chromium, expect } from "@playwright/test";
import {test} from "@playwright/test";

test("Login to OpenMRS",async({page}) => {
    await page.goto('https://demo.openmrs.org/openmrs/login.htm');

    await page.fill("//input[@name='username']", "Admin")
    await page.fill("//input[@name='password']", "Admin123")
    await page.click("//li[text() = 'Inpatient Ward']");
    await page.click("//input[@id='loginButton']");

    //check element present or not
    await expect(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).toHaveCount(1);
  
    //check element visible or hidden
    await expect(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).toBeVisible();
    await expect.soft(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).toBeHidden(); //failed


    //check text
    await expect(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).toHaveText("Logged in as Super User (admin) at Inpatient Ward.");
    await expect.soft(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).not.toHaveText("Logged in as Super User (admin) at Inpatient Ward.");

    //check attribute
    await expect(page.locator("text=Logged in as Super User (admin) at Inpatient Ward.")).toHaveAttribute('text',/.*Logged in as Super User (admin) at Inpatient Ward./);


    await page.waitForTimeout(5000);
    
    });


    

    
