const ExcelJS = require('exceljs');

async function getLoginDetails() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile("./utils/TestData.xlsx");
    
    const worksheet = workbook.getWorksheet('Sheet1');
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
        if (rowNumber > 1) { 
            const username = row.getCell(1).value;
            const password = row.getCell(2).value;
            data.push({ username, password });
        }
    });

   console.log(data);
}


module.exports = { getLoginDetails };