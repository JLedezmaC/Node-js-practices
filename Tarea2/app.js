console.log("process.argv",process.argv)
let [fruit] = process.argv.slice(2); /* Si agrego a la variable los cuadrados esto me indica que esa variable va a tener asignado el valor del array 0 y no el array en si  */
console.log(fruit)  /*Si no utilizo cuadrados necesito pasarlo a .toString porque lo estoy pasando com un array pero los cuadrados lo que hacen es decrime que asigne el valor de la posicion 0 del array en fruit  */
const callFunction = require('./addition');

callFunction.fruits(fruit)