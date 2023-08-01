function passGenerator(){
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let resault = "";
    for(let i=0; i<6; i++){
        resault += chars[(Math.floor(Math.random()*(chars.length)))];
    }

    return resault;
}


function passGenerator2(){
    let resault = "";
    let randomAscii = 0;
    while(resault.length != 6){
        randomAscii = Math.floor(Math.random() * 123);

        if((randomAscii >= 48 && randomAscii <= 57) || (randomAscii >= 65 && randomAscii <= 90) || (randomAscii >= 97 && randomAscii <= 122)){
            resault += String.fromCharCode(randomAscii);
        }
    }
    return resault;
}