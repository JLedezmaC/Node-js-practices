exports.triangle = function(number){
    for (let i = 0; i < number; i++) {
    let piso = '';
    for (let j = 0; j < i + 1; j++) {
        piso += '*';
    }
    console.log(piso)
    }
}
