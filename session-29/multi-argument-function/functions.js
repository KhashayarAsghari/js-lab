function multi(){

    let resault = 1;
    for(let i=0; i<arguments.length; i++){
        resault *= arguments[i];
    }
    return resault;
}