const express = require('express'); // Este para apis
const path = require('path'); // Esto me srive para seleccionar el path o la url 
const app = express(); // Se llama o se utiliza  asi 


app.use(express.json());  // Este codigo lo que hace es traerme todo lo que el servidor me traiga pero en formato JSON y poder leerlo  
app.use(express.urlencoded({
	type:'application/x-www-form-urlencoded',
	extended: true,
}))



app.get('/',(req, res) =>{ /*Esta es como la ruta del home  */
    res.sendFile(path.join(__dirname+'/public/index.html'))   //Path.join y el dir.name me da la direccion url de donde estoy ubicado actualmente y lo que esta en anarnajado es para decirme que me muetsre el archivo especificado
}) 

app.get('/about',(req, res) =>{ /* Lo que esta en la ruta es para mapearla en  la url   y lo que esta en path.join por decir asi el archivo que se ejecuta en esa ruta especifica  */
    res.sendFile(path.join(__dirname+'/public/about.html'))  //Path.join y el dir.name me da la direccion url de donde estoy ubicado actualmente y lo que esta en anarnajado es para decirme que me muetsre el archivo especificado
}) 



app.post('/',(req, res) =>{ // res es la informacion que le vamos a enviar al usuario 
    console.log(req.body); // el .body es para que me traiga lo que esta en body osea la informacion que enviamos o recibimos por ejemplo lo que enviamos en el post 
    res.send('Hola Mundo');
})

app.listen(3501); // Este es el port en el que se levanta el servidor 


// Este es el mas importante por el momento 
