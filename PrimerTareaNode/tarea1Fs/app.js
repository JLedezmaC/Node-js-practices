const fs = require('fs') // require siempre importa un módulo y es nativo de node 
let path = process.cwd();


let persons = ['Nombre', 'Apellido', 'Edad', 'Oliver', 'Brown', 20, 'Jack', 'Murphy', 35, 'Charlie', 'Rodriguez', 38, 'George', 'Smith', 22, 'James', 'Anderson', 23, 'William', 'Walsh', 25]


/*let personsArray = persons.toString();*/

for(let i = 0; i < persons.length; i+=3){
    fs.appendFile(`${path}/planilla.txt`, `${persons[i]},${persons[i+1]},${persons[i+2]},\n`,function (err, data) {
        if (err)
            return console.error(err)
    });
}