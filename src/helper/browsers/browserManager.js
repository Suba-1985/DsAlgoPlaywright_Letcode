 const dotenv = require('dotenv');

// dotenv.config({
//   override: true,
//   path: `src/helper/env/.env.dev`
// });

const playwright = require('playwright');
const Options = {
  headless: false, 
  slowMo: 50,      // Slow down operations by 50ms
  args: ['--start-maximized'], // Additional arguments, --Kiosk(will expand the screen to full size)
};

 const invokeBrowser = async () => {
  dotenv;
  const browserName = process.env.BROWSER;  
  let browser;
  console.log('Tags:', process.env.TAGS); 
   console.log("Executing test in environemnt :" +process.env.Environment);
  if (browserName === 'firefox') {
    browser = await playwright.firefox.launch(Options);
  } else if (browserName === 'chromium') {
    browser = await playwright.chromium.launch(Options);
  } else if (browserName === 'webkit') {
    browser = await playwright.webkit.launch(Options);
  } else {
    throw new Error('Unsupported browserType!');
  }

  return browser;
};


module.exports = { invokeBrowser };