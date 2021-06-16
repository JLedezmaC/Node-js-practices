exports.fruits = function(fruit){
    let array = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
    for(let i = 0; i < array.length; i++)
    if(array[i] === fruit){
        console.log('Si la tenemos disponible')
        break
    }else{
        console.log('No la tenemos disponible')
        break
    }
}

/*
exports.fruits = function(fruit){
    let array = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
    for(let i = 0; i < array.length; i++)
    if(array[i] === fruit.toString()){
        console.log('Si la tenemos disponible')
        break
    }else{
        console.log('No la tenemos disponible')
        break
    }
}

*/