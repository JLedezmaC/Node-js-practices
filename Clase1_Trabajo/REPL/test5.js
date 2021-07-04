console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);
const numero1 = Number(myargv[0]);
let suma;

function sumaNumeros(n){
    suma = n*(n+1)/2;
    return suma;
}
console.log(sumaNumeros(numero1));


/*
console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);

const numero1 = Number(myargv[0]);

let suma;

function sumaNumeros(n){
    for(let i = 0; i<n; i++){
        suma = suma + i;
    }
    return suma;
}

console.log(sumaNumeros(numero1));

*/