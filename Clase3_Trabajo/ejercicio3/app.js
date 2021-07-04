console.log("process.argv",process.argv)
let object = process.argv.slice(2);

const callFunction = require('./addition');

callFunction.media(object);