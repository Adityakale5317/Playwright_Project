import test, { expect } from "@playwright/test"

test('',async ({page}) => {
    await page.goto("https://nxtgenaiacademy.com/alertandpopup/");

    page.on("dialog", async(alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
    })
    await page.click("text = Alert Box");
})

test('Alert Ok and Cancel',async ({page}) => {
    await page.goto("https://nxtgenaiacademy.com/alertandpopup/");

    page.on("dialog", async(alert) => {
        const text = alert.message();
        console.log(text);
        await alert.dismiss();
    })
    await page.click("text = Confirm Alert Box");
    expect(page.locator("p#demo")).toContainText("You clicked on Cancel!");
})

test.only('Alert Enter Name',async ({page}) => {
    await page.goto("https://nxtgenaiacademy.com/alertandpopup/");

    page.on("dialog", async(alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept("yes");
    })
    await page.click("text = Prompt Alert Box");
    expect(page.locator("p#demoone")).toContainText("Thanks for Liking Automation");
})