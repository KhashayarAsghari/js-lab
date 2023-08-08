

function lowestGrade(gradesArray){
    // debugger;
    let lowest = gradesArray[0];
    for(let i = 0; i<gradesArray.length; i++){
        if(gradesArray[i]< lowest){
            lowest = gradesArray[i];
        }
    }

    return lowest;
}