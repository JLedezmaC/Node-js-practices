console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);

const numero1 = Number(myargv[0]);

function biggestNumber(a){
    if(a<0){
        console.log('El numero es negativo')
    }else{
        console.log('El numero es positivo')
    }
}

console.log(biggestNumber(numero1));