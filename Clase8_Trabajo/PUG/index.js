const express = require('express'); // Este para apis
const path = require('path'); // Esto me srive para seleccionar el path o la url 
const app = express(); // Se llama o se utiliza  asi 


app.set('view engine','pug') // Es para decirle que vamos a utilizar las vistas y se utiliza el metodo put que en este caso se escribe como set
app.set('views', path.join(__dirname, "views"));  // Es para decirle donde estan las vistas 


app.get('/',(req,res)=>{
    res.render('index') // Para llamar y que renderice el archivo html del index.pug
})

app.get('/about',(req,res)=>{ // Esto dice como que cuando yo le ponga /about me muestre lo que esta en render 
    res.render('about' , {title:'About',message:'Estas viendo la pagina de about'}) // Para llamar y que renderice el archivo html del about.pug
})
// Para verlo se tiene que escribir http://localhost:3501/about porque es lo que le especifique despues del get 

app.listen(3501);
