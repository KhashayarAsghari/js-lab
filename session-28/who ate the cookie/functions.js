

function checkInput(text) {
    let textLength = (text.length) - 1;
    let inputType = "";
    let isString = false;
    let isNumber = false;

    for (textLength; textLength >= 0; textLength--){
        if(((text.charCodeAt(textLength)) >= 65 && (text.charCodeAt(textLength)) <= 90) || (((text.charCodeAt(textLength)) >= 97) && ((text.charCodeAt(textLength)) <= 122))){
            isString = true;
        }

        if((text.charCodeAt(textLength)) >= 48 && (text.charCodeAt(textLength)) <= 57){
            isNumber = true;
        }
    }

    if(isString == true && isNumber == true){
        return "invalid input";
    }else if(isString == true && isNumber == false){
        return "It was Zach!";
    } else if(isString == false && isNumber == true){
        return "It was Monica!"
    }else {
        return "It was the dog"
    }
}