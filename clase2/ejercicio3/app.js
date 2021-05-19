console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);
let number = Number(myargv[0]);

const callFunction = require('./addition');

console.log(callFunction.temperature(number));