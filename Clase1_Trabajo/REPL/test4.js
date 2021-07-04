console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);

const numero1 = Number(myargv[0]);
const numero2 = Number(myargv[1]);

function biggestNumber(a,b){
    if(a === 0 || b === 0){
        return console.log('La division tiene un numero igual a 0 y esto causa un error' )
    }else{
        let total = numero1 / numero2;
        return console.log(total)
    }
}

console.log(biggestNumber(numero1,numero2));