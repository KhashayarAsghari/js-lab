
function textReverse(text) {
    let textLength = (text.length) -1;
    let reversedText = "";
    for(textLength ; textLength >= 0; textLength--){
        reversedText += text[textLength];
    }
    return(reversedText);
}