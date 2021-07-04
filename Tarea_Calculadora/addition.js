exports.operationMethod = function(option,n1,n2){
    if(option === 1){
        return n1+n2;
    }else if(option === 2){
        return n1*n2;
    }else if(option === 3){
        if(n1 === 0 || n2 === 0 ){
            console.log('La division a realizar contiene un 0 y esto produce un error matematico')
        }else{
            return n1/n2;
        }
    }else if(option === 4){
        return n1-n2;
    }else{
        console.log('Seleccion un metodo de operacion correcto')
    }
}

/*https://github.com/JLedezmaC/Node.js-Practices.git */