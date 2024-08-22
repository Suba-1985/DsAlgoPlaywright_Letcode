
const common = {
  defaultTimeout: 10000,
  "paths": ["src/test/features/ArrayPage.feature"],
  require: [
    'src/hooks/hooks.js',
    'src/test/step_definitions/*.spec.js'
  ],   
  forceExit: true
}


module.exports = {

  default: {
    ...common,
   
    format: [
      //to show the detailsof test case execution in the console
      "html:Cucumber_html_report/cucumber-report.html",
      "json:Cucumber_html_report/cucumber-report.json",
      './reporter.js'],
    retry: 1,
    parallel: 3,
    worldParameters: {
      ...common.worldParameters,
      browser:  "chromium"
    }
  },
  profileWithFirefox: {
    ...common,
    format: ["html:src/helper/report/cucumber-report.html"],
    retry: 1,
    parallel: 1,
    worldParameters: {
      ...common.worldParameters,
      browser: "firefox"
    }
  },

  profileWithWebkit: {
    ...common,
    format: ['./reporter.js'],
    retry: 1,
    parallel: 1,
    "worldParameters": {
      ...common.worldParameters,
      "browser": "webkit"
    }
  }
};