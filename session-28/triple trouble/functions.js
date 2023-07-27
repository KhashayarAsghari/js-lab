function tripleTrouble(firstWord, secondWord, thirdWord){

    if((firstWord.length != secondWord.length) || (firstWord.length != thirdWord.length)){
        return "the words doesn't has equal length"
    }

    let wordsLength = firstWord.length - 1;
    let charCounter = 0;
    let resault = "";

    for(charCounter; charCounter<=wordsLength; charCounter++){
        resault += firstWord[charCounter];
        resault += secondWord[charCounter];
        resault += thirdWord[charCounter];
    }

    return resault;
}