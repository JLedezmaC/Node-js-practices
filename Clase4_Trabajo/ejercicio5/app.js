console.log("process.argv",process.argv)
let object = process.argv.slice(2);
let clowns = Number(object[0]);
let dolls = Number(object[1]);

const callFunction = require('./addition');

callFunction.toys(clowns,dolls);