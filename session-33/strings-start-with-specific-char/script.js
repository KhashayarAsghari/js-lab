function arrayStartChar(array, char){

    let result = []


    for(let i = 0; i < array.length; i++){
        if((array[i])[0] == char)
            result.push(array[i]);
    }

    return result;
}