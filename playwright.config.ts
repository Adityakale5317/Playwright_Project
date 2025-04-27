import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testMatch: ["tests/Alerts.spec.ts", "tests/Checkboxes.spec.ts", "DropdownHandle.spec.ts", "DataDrivenTesting.spec.ts", "RedBus_Interview.spec.ts"],
  //parallel tc execution make following parameter true
  fullyParallel: true,
  //retry fail tcs
  //retries: process.env.CI ? 2 : 0,
 // retries: 2,
 // timeout: 2 * 60 * 1000,
  use: {
    headless: false,
    screenshot: "only-on-failure",
  },
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["html", { open: "never" }]
  ],

  //run testcases on different browsers
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    //un-comment it when you want to run on different browser
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ]
});