import { test, expect } from '@playwright/test';

test('Frame Handling',async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames

    const allframes = await page.frames();
    console.log("Number of frames: ", allframes.length)

    //Approch 1 : using name or url
    //const f1 = await page.frame('name') // if name is available
    const frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.fill('//*[@id="id1"]/div/input', 'Hello');
    
    await page.waitForTimeout(3000);


    //approch 2 : using frame locator

    const inputbox = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']");
    inputbox.fill("hello");


})