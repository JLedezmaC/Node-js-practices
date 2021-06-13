let path = process.cwd();
const fs = require('fs');
let newArray = [];

fs.readFile(`${path}/disney.txt`,'UTF-8',function(err,data){
    if(err){
        return console.error(err)
    }
    const hack = /\r?\n/; /*Para convertir un txt en un array */
    newArray = data.split(hack);
    
    for(let i = 1; i<newArray.length; i++){
        const prueba = newArray[i].split(';'); /*Esto me indica que separa cada posicion del array cuando se encuentre un punto y coma. */
        fs.appendFile('peliculas.txt',` Película: ${prueba[0]}\n Año: ${prueba[1]}\n Género: ${prueba[2]}\n \n`,function(err,data){
            if(err){
                return console.error(err)
            }
        })
    }
})

