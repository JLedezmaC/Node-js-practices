exports.temperature = function(n){
    if(n<10){
        console.log('Hace mucho frio');
    }else if(n>=10 && n<=15){
        console.log('Hace poco frío');
    }else if (n>=16 && n<=24){
        console.log('Hace una temperatura normal');
    }else if (n>=25 && n<=30){
        console.log('Hace poco calor');
    }else{
        console.log('Hace mucho calor');
    }
}
