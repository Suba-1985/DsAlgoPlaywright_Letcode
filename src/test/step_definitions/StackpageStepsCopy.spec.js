const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');
const {POManager} = require('../../../pageObjects/POManager.js');
const config = require('../../../playwright.config');
const {loginData}=require('../../../utils/ExcelReader.js');

Given('The user is on Signin page of DS Algo portal', async function () {  
  this.stackPage=this.pomanager.getStackPage();
  await this.stackPage.goToUrl();  
});


Given('User launches the browserr', async function () {
  browser = await playwright.chromium.launch({
      headless: false,
    });
    context = await browser.newContext({
      storageState:"./loginauth.json"
    });
    this.page =  await context.newPage();
    this.pomanager = new POManager(this.page);
});

When('User gives the correct DsAlgo portal URLl', async function () {
  await this.page.goto(config.use.baseURL);
  await this.page.waitForTimeout(2000);
  this.homePage =await this.pomanager.getHomePage(); 
});
// When('The user enter valid {string} and {string} credential and click signInButton', async function (username, password) {
//   await this.stackPage.loginValidCredentials(username, password); 
// });
// Then('The user redirected to homepage and have {string}', async function (successLoginText) {
//   await this.stackPage.successLoginTextCheck(successLoginText); 
// });

// When('The user selects the stack option from the dropdown in the homepage',async function () {
//   await this.stackPage.selectStackOption();  
// });

// Then('The user is directed to Stack Page', async function () {
//   this.stackPage=this.pomanager.getStackPage();
//   await this.stackPage.verifyStackPageUrl();   
// });

When('The user clicks on the {string} link', async function (menuOption) {
  //this.stackPage=this.pomanager.getStackPage();
  let credentials = await loginData();
  for (const cred of credentials) {
    console.log(cred.username,cred.password);
  }
  await this.stackPage.clickMenuOption(menuOption); 
});

Then('user enters the {string} in the tryEditor', async function (validPythonCode)
{
this.actualOutput=await this.stackPage.enterCodeInTryEditor(validPythonCode);
})

Then('user enters the invalid{string} in the tryEditor', async function (invalidPythonCode)
{
this.actualOutput=await this.stackPage.enterInvalidCodeInTryEditor(invalidPythonCode);
})

Then('user gets the valid {string}',async function(expectedOutput)
{
  expect(this.actualOutput).toContain(expectedOutput);
})

Then('user gets the alertbox',async function()
{
  await this.stackPage.acceptAlert();
})
   
Then('The user logout  successfully', async function () {
  await this.stackPage.logOut();
});

Given('The user is on the {string} after logged in', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

// ? When The user clicks on the Practice Questions button
// Undefined. Implement with the following snippet:

// When('The user clicks on the Practice Questions button', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// ? Then The user should be directed to Practice Questions  Page
// Undefined. Implement with the following snippet:

// Then('The user should be directed to Practice Questions  Page', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });
