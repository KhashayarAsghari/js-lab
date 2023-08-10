function uniqueNumber(array){

    let uniques = [];
    let equals = 0;

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[i] == array[j]){
                equals++;
            }
        }
        if(equals<=1){
            uniques.push(array[i]);
        }
        equals = 0;
    }

    return uniques;

}