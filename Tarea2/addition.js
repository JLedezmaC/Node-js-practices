/* let status = false;  Porque aqui tambien funciona, se sobreescribe ? */
function fruitExist(){
    console.log('Si tenemos esa fruta')
}

function fruitDoesntExist(){
    console.log('No tenemos esa fruta')
}
exports.fruits = function(fruit){
    let status = false;
    let array = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
    for(let i = 0; i < array.length; i++){
        if(array[i] === fruit){
            status = true;
        }
    }
    if(status === true){
        fruitExist()
    }else{
        fruitDoesntExist()
    }
}
