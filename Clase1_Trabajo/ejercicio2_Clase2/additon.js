exports.threeDigits = function(n){
    if(n>=100 && n<=999){
        console.log('El numero que ingreso contiene 3 digitos')
    }else if(n > 999){
        console.log('El numero que ingreso es mayor a 3 digitos ')
    }else{
        console.log('El numero que ingreso no es de 3 digitos ')
    }
}

/*Tambien se puede .tostring.lenght */