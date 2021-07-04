console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);
let number = Number(myargv[0]);

const callFunction = require('../ejercicio2/additon');

console.log(callFunction.threeDigits(number));