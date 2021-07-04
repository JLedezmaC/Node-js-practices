const http = require('http'); // esto es una palabra reservada de node sirve para crear un http

//creando el servidor 

const newServer = http.createServer((req,res) =>{  // req, res son los parametros que vamos a recibir en este caso res es la informacion que le vamos a enviar al usuario 
    res.writeHead(200, {'Content-type':'text/plain; charset=UTF-8'} ) // el 200 es un status de http en este caso 200 es que todo salio bien y content type es el tipo de informacion que vamos a devolver
    res.write('Hola Mundo') // Es lo que vamos a mostrarle al usuario 
    res.end()//Este es el fin de lo que hace el servidor 
});

//En los content type se separa por punto y coma por que es por estandares y es asi como se hace 

//Escucha por si hay algun otro request de un usuario 

newServer.listen(5000);  // y esto lo que me indica es que el servidor va a ejecutarse en el puerto 5000
console.log('Node.js web server at port 5000 is running ')


// para ponerlo en una pagina seria http://localhost:5000/ 
// ctrl c paro el servidor y con npm start lo vuelvo a iniciar 
