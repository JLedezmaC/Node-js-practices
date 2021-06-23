const http = require('http');
const hostName = 'localhost' //O puede ser 127.0.1:y el port que es el que esta abajo que dice 3000
const port = 8000
const url = require('url');
const callFunction = require('./addition');

const createServer = http.createServer((req,res) =>{  
    const pathUrl = url.parse(req.url, true); 
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain; charset=UTF-8')
    res.write(`Hola ${callFunction.sumatoria(pathUrl.query.num1 , pathUrl.query.num2)}`) // Se pueden mandar funciones al write que es lo que se va a escribir en el navegador 
    res.end();
});
createServer.listen(port,hostName,()=>{ 
    console.log(`Server running at http://${hostName}:${port}`) 
}); 
