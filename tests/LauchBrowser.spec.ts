import { chromium } from "@playwright/test";
import {test} from "@playwright/test";

test("Launching Browser",async() => {
    const browser = await chromium.launch({
        headless:false
    });

    const page = await browser.newPage();

    await page.goto('https://demo.openmrs.org/openmrs/login.htm');

    await page.fill("//input[@name='username']", "Admin")
    await page.fill("//input[@name='password']", "Admin123")
    await page.click("//li[text() = 'Inpatient Ward']");
    await page.click("//input[@id='loginButton']");

    await page.waitForTimeout(5000);

    await browser.close();
})