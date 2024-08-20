**DSALGO**

Project Description
DSALGO is an educational application designed to help users practice data structures and algorithms. The project involved creating an automation framework from scratch, which significantly reduced test execution time by 60-70%.

Tools Used
**Playwright**: For end-to-end testing
**npm packages**: For managing dependencies
**Cucumber**: For BDD (Behavior Driven Development)
**Environment Variables**: For configuration management
**JavaScript**: For writing test scripts and automation code
**Gherkin**: For defining test scenarios in a readable format
**Framework Components**: Custom-built components for automation(BrowserManager, Helper, Utils, Env.js, PageObjects, testData)

Prerequisites
Before executing the project we have to install the following packages :
1. npm install multiple-cucumber-html-reporter --save -dev
2. npm install detenv --save -dev
3. npm I dotenv -D
4. npm I cross-env -D 
5. npm I fs --save

Execution Instructions
To execute as follows:
1.Set the environment variables:
$env:ENV="dev"   
2.Run the tests:
npm test

Additional Information
1. Ensure you have all the required packages installed before running the tests
2. The project uses javascript 
