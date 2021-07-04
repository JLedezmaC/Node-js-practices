exports.toys = function(clowns,dolls){
    let TotalClowns = 0;
    let TotalDolls = 0;

    for(let i = 0; i < `${clowns}`; i++){
        TotalClowns += 112;
    }

    for(let k = 0; k < `${dolls}`; k++){
        TotalDolls += 75;
    }

    let total = TotalClowns+TotalDolls;

    console.log('El peso total es de', total)
}
