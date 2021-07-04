let pi = 3.14;
exports.volumeCalculation = function(diametro,altura){
    let r = diametro/2;
    let v = pi*Math.pow(r,2)*altura
    console.log('El volumen del cilindro es de',v,'Metros cubicos')
}
