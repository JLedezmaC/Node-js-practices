const http = require('http');
const hostName = 'localhost' //O puede ser 127.0.1:y el port que es el que esta abajo que dice 3000
const port = 3000
const url = require('url');


//creando el servidor 
// http://localhost:3000/?nombre=Nacho%20ledezma&text=Hola Asi tiene que salir el url con los parametros todo despues del signo de pregunta son parametros de los url 
const newServer = http.createServer((req,res) =>{  
    const pathUrl = url.parse(req.url, true); //parse es una funcion que ya esta predefinida dentro de los modulos de url nos devuelve toda la informacion del url 
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain; charset=UTF-8')
    res.write(`Hola ${pathUrl.query.text} ${pathUrl.query.nombre}`)
    res.end();
});


newServer.listen(port,hostName,()=>{ // siempre va primero el port 
    console.log(`Server running at http://${hostName}:${port}`) //Cuando el servidor este escuchando imprimimos el console.log
}); 



