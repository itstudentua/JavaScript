/**
 * https://gist.github.com/davidcsejtei/952c52358c29d39dbe6fddbaa80af952
 * https://www.youtube.com/watch?v=h-7CjLM0HJE
 */

// npm i --save xlsx - first command
// node src/index.js - command to run script

const exportUsersToExcel = require('./exportService');

const workSheetColumnName = [
    "English",
    "Translate"
]

const workSheetName = 'Words';
const filePath = './outputFiles/excel-from-js.xlsx';

exportUsersToExcel(workSheetColumnName, workSheetName, filePath);

