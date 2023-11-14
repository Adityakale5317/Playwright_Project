import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';
const config:PlaywrightTestConfig = {
  testMatch:["tests/RecorderdCode.spec.ts"],
  use: {
    headless:false,
    screenshot:"on"
  },
  reporter: [["dot"],["json",{
    outputFile:"jsonReports/jsonReport.json"
  }],["html",{
    open:"never"
  }]]
};

export default config;