exports.Numbers = function(number){
    let array = [];
    for(let i = 0; i< `${number}`; i++){
        if(i % 2 === 1){
            array.push(i);
        }
    }
    console.log(array)
}
