const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "Cucumber_html_report",
  reportPath: "./",
  reportName:"DSAlgo Playwright-Automation",
  pageTitle:"DsAlgo PlaywrigthCucumber Report",
  displayDuration: false,

  metadata: {
    browser: {
      name: "chrome",
      version: "112",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "112",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "DsAlgo project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "SmokeTest" },
      { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});