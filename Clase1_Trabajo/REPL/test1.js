console.log("process.argv",process.argv)
let myargv = process.argv.slice(2); /*Este devuelve una parte del array en un nuevo array sin ser modificado el original */


const numero1 = Number(myargv[0]);

const numero2 = Number(myargv[1]);

const numero3 = Number(myargv[2]);

function biggestNumber(a,b,c){
    if(a>b && a>c){
        console.log("A es mayor")
    }else if(b>a && b>c){
        console.log("B es mayor")
    }else{
        console.log("C es mayor")
    }
}

console.log(biggestNumber(numero1, numero2, numero3));
