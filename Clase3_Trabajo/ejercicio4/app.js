console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);
let D = Number(myargv[0]);
let H = Number(myargv[1]);

const callFunction = require('./addition');

console.log(callFunction.volumeCalculation(D,H));