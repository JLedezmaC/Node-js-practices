console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);
let option = Number(myargv[0]);
let firstNumber = Number(myargv[1]);
let secondNumber = Number(myargv[2]);

const callFunction = require('./addition');

console.log(callFunction.operationMethod(option,firstNumber,secondNumber));