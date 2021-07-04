function positiveValues(object){
    let media = 0;
    let total = 0;
    for (let i = 0; i < object.length; i++){
        if(Math.sign(Number(object[i])) === 1){
            media += Number(object[i]);
        }
    }
    total = media/object.length;
    return total;
}

function negativeValues(object){
    let media = 0;
    let total = 0;
    for (let i = 0; i < object.length; i++){
        if(Math.sign(Number(object[i]))=== -1){
            media += Number(object[i]);
        }
    }
    total = media/object.length;
    return total;
}

exports.media = function(object){
    console.log(positiveValues(object));
    console.log(negativeValues(object));
}
