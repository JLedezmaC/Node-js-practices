const express = require('express');
const app = express();
require('dotenv').config(); // Esto hace que pueda cargar las variables de ambiente 
//Esto es para conectar la base de datos

// Primero le tenemos que decir la base de datos que vamos a conectar 
//    1- Vamos a la base de datos en robo3t y creamos la base de datos con el nombre que queramos
//    2- La url siempre es asi  mongodb://localhost/nombre de la base de datos 

// Esto de aqui abajo es para decirle que si no puede caragr las varibales de ambiente que me ponga las que estan por defecto 
const HOSTNAME = process.env.HOSTNAME || 'localHost'
const PORT = process.env.PORT || 3000

app.listen(PORT,HOSTNAME, () => {
    console.log(`Server is running on ${HOSTNAME}:${PORT}`)
})

