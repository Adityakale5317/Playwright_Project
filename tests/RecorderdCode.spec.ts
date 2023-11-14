import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.openmrs.org/openmrs/login.htm');
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('Admin');
  await page.getByPlaceholder('Enter your username').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('Admin123');
  await page.getByText('Inpatient Ward').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: ' Find Patient Record' }).click();
  await page.getByPlaceholder('Search by ID or Name').click();
  await page.getByPlaceholder('Search by ID or Name').fill('test');
  await page.getByRole('cell', { name: '100HM1 Recent' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Logout ' }).click();
});