import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import {ModuleTestData} from '../test-data/qa/google.json';

//const {test, expect} = require('@playwright/test');

test('Simple Dropdown',async ({page}) => {

    await page.goto('https://www.google.com/');

    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill(ModuleTestData.search2);
    await page.waitForTimeout(2000);
    await page.locator('#APjFqb').press('Enter');
    await page.waitForTimeout(5000);
    
})

