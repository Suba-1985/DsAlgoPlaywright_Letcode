const { Before, After, Status, AfterStep, BeforeAll, AfterAll } = require('@cucumber/cucumber');
//const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
const { invokeBrowser } = require('../helper/browsers/browserManager');
require('../helper/env/env');



let browser;
let context;
let scenarioName;


BeforeAll(async function () {
  //dotenv();
  browser =await invokeBrowser();
})

Before(async function (scenario) {
  scenarioName = scenario.pickle.name;
  console.log(scenarioName);
});

Before({ timeout: 100 * 5000 }, async function () {
 // const browserName = this.parameters["browser"];
 

  // if (browserName === 'firefox') {
  //   this.browser = await playwright.firefox.launch(Options);
  // }
  // else if (browserName === 'chromium') {
  //   this.browser = await playwright.chromium.launch(Options);
  // }
  // else if (browserName === 'webkit') {
  //   this.browser = await playwright.webkit.launch({
  //     headless: false,
  //   });
  // }  

  context = await browser.newContext();
  this.page = await context.newPage();
  this.pomanager = new POManager(this.page);
});


AfterStep(async function ({ result }) {

  if (result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();

    let timestamp = new Date().getTime();
    await this.page.screenshot({ path: "screenshotdir/screenshot1_" + timestamp + ".png" });

    this.attach(buffer.toString('base64'), 'base64:image/png');
    console.log(`Screenshot logged for ${this.scenarioName}`)
  }
});

After(async function () {
  await this.page.close();
  await context.close();
  
});

AfterAll(async function () {
  await browser.close();
})
