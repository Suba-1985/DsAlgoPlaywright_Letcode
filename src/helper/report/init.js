const fs=require("fs-extra");

try{
  fs.ensureDir("Cucumber_html_report");
  fs.emptyDir("Cucumber_html_report");
  console.log("File is created and emptied");
} catch(error)
{
  console.log("Folder not created :" +error);
}