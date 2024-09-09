const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const config = require('../../../playwright.config.js');


//Background
When('User clicks get started for array after entering valid credential',{ timeout: 30000 }, async function () {   
   
    console.log("Using credentials:", process.env.USERNAME, process.env.PASSWORD);
    this.loginPage = await this.homePage.clickSignInLink();
    this.homePage = await this.loginPage.validLogin(process.env.USERNAME, process.env.PASSWORD);   
   // this.homePage = await this.loginPage.validLogin(config.use.username, config.use.password);
    const pageTitle = await this.page.title();
    console.log(pageTitle);
    this.arrayPage = await this.homePage.clickGetStartedOf_Array();
});

//@arrays-links-navigation
Given('User is on {string} page after logged in', async function (pageTitle) {
    const pagetitle = await this.page.title();
    console.log(`User is on ${pagetitle} page after logged in`);
});

When('User clicks on {string}', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
});

Then('User should be navigate to {string} page', async function (pageName) {
    await expect(this.page).toHaveTitle(pageName);
});


Then('User should be navigate to {string} page from {string} of sheet {string}', async function (string, rowNumber, sheetName) {
    const pageName = await this.arrayPage.getPageNameFromExcel(sheetName, rowNumber);
    await expect(this.page).toHaveTitle(pageName);
});

//@arrays-practiceQuetionsLink-navigation
When('User click the practice question button from {string} page', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
    await this.arrayPage.clickOnLink("/array/practice");
});

Then('User should be navigate to a page having {string}', async function (pageTitle) {
    await expect(this.page).toHaveTitle(pageTitle);
});

//@arrays-tryeditor-navigation
When('User click the Try here button from {string} page from {string} of sheet {string}', async function (string, rowNumber, sheetName) {
    const linkName = await this.arrayPage.getLinkNameFromExcel(sheetName, rowNumber);
    await this.arrayPage.clickOnLink(linkName);
    await this.arrayPage.clickTryButton();
});

Then('User should be navigate to a page tryEditor having title an {string} and a Run button to test', async function (pageTitle) {
    await expect(this.page).toHaveTitle(pageTitle);
});

//@arrays-tryeditor-validcode
When('User clicks the run button after entering code in tryEditor from row {string} of sheet {string}', async function (rowNumber, sheetName) {
    await this.arrayPage.enterCodefromExcel(sheetName, rowNumber);
    await this.arrayPage.clickRunButton();
});

Then('User should be presented with Run result from row {string} of sheet {string}', async function (rowNumber, sheetName) {
    const result = await this.arrayPage.getExpectedResultFromExcel(sheetName, rowNumber);
    expect(await this.arrayPage.getResult()).toContain(result);
});

Then('User should be presented with Run result as {string}', async function (result) {
    expect(await this.arrayPage.getResult()).toContain(result);
});

//@arrays-tryeditor-invalidcode
Then('User should be presented with error message as {string}', async function (errorMessage) {
    expect(await this.arrayPage.getErrorMsg()).toContain(errorMessage);
});

//@arrays-practice-questionsLinks
When('User click the Practice Questions link {string} from {string} page', async function (practiceLink, pagelink) {
    await this.arrayPage.clickOnLink(pagelink);
    await this.arrayPage.clickOnLink(practiceLink);
});


When('User click on {string} page', async function (linkName) {
    await this.arrayPage.clickOnLink(linkName);
});

Then('User should be navigate to a page having an {string} with a Run button and submit button to test', async function (pagename) {
    await expect(this.page).toHaveTitle(pagename);
});

//@arrays-practice-questions-runValid-excel
When('User click the {string} from practice question page', async function (linkName) {
    await this.arrayPage.clickOnLink("arrays-in-python");
    await this.arrayPage.clickOnLink("/array/practice");
    await this.arrayPage.clickOnLink(linkName);
});
When('User clicks the run button after entering code in {string} from row {string} of sheet {string}', async function (link, rownum, sheetName) {
    await this.arrayPage.clearCodeFromEditor();
    await this.arrayPage.enterCodefromExcel(sheetName, rownum);
    await this.arrayPage.clickRunButton();
});

//@arrays-practice-questions-submitValid-excel
When('User clicks the submit button after entering code in {string} from row {string} of sheet {string}', async function (link, rowNumber, sheetName) {
    await this.arrayPage.clearCodeFromEditor();
    await this.arrayPage.enterCodefromExcel(sheetName, rowNumber);
    await this.arrayPage.clickSubmitButton();
});

Then('User should be presented with Submit result as {string}', async function (result) {
    await this.arrayPage.clickSubmitButton();
    expect(await this.arrayPage.getResult()).toContain(result);
});

Then('User should be presented with result from row {string} of sheet {string}', async function (rownum, sheetName) {
    const result = await this.arrayPage.getExpectedResultFromExcel(sheetName, rownum);
    expect(await this.arrayPage.getResult()).toContain(result);
});

//@arrays-practice-questions-runInvalid-excel
Then('User should be presented with error message from row {string} of sheet {string}', async function (rownum, sheetName) {
    const errorMessage = await this.arrayPage.getExpectedResultFromExcel(sheetName, rownum);
    expect(await this.arrayPage.getErrorMsg()).toContain(errorMessage);
});

//@arrays-practice-questions-submitInvalid-excel
Then('User should be presented with error message for submit button from row {string} of sheet {string}', async function (rownum, sheetName) {
    const errormsg = await this.arrayPage.getExpectedResultFromExcel(sheetName, rownum);
    expect(await this.arrayPage.getResult()).toContain(errormsg);
});





