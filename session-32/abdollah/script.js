function abdollah(str){
    let sumOfR = 0;
    let sumOfY = 0;
    let sumOfG = 0;

    for(let i = 0; i<str.length; i++){
        if(str[i] == "R")
            sumOfR++;
        
        if(str[i] == "Y")
            sumOfY++;

        if(str[i] == "G")
            sumOfG++;
        
    }

    if(sumOfR >= 3 || (sumOfR >=2 && sumOfY >=2) || sumOfG == 0)
            return "nakhor abdollah"

    return "nosh"
}