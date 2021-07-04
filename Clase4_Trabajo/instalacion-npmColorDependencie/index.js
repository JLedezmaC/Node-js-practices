const colors = require('colors/safe')

const args = process.argv.slice(2);

const [nombre = 'Amigo'] = args; /*La primera posicion del array se le asigna nombre el cual el valor es amigo  */
const hora = new Date().getHours();

if(hora>=6 && hora < 12){
    console.log(colors.green(`Buenos dias ${nombre}`));
}else if(hora>=12 && hora <18){
    console.log(colors.rainbow(`Buenos tardes ${nombre}`));
}else{
    console.log(colors.rainbow(`Buenos noches ${nombre}`));
}

/* Se usa colors por ser el nombre del paquete y luego el color para ponerlo en color  */