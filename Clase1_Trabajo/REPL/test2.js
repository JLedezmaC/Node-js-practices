console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);

const numero1 = Number(myargv[0]);

const numero2 = Number(myargv[1]);

const numero3 = Number(myargv[2]);

function biggestNumber(a,b,c){
    let suma =  a + b + c;
    let total = suma / myargv.length;
    return total;
}

console.log(biggestNumber(numero1, numero2, numero3));
