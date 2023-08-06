function passGenerator() {
    let numberPlace = 0;
    let upperCasePlace = 0;
    let lowerCasePlace = 0;

    debugger;
    while (
        numberPlace == upperCasePlace ||
        numberPlace == lowerCasePlace ||
        upperCasePlace == lowerCasePlace
    ) {
        numberPlace = Math.floor(Math.random() * 8);
        upperCasePlace = Math.floor(Math.random() * 8);
        lowerCasePlace = Math.floor(Math.random() * 8);
    }

    let result = "";

    for (let i = 0; result.length < 8; i++) {
        if (i == numberPlace) {
            result += String.fromCharCode(
                Math.floor(Math.random() * (58 - 48) + 48)
            );
        } else if (i == lowerCasePlace) {
            result += String.fromCharCode(
                Math.floor(Math.random() * (123 - 97) + 97)
            );
        } else if (i == upperCasePlace) {
            result += String.fromCharCode(
                Math.floor(Math.random() * (91 - 65) + 65)
            );
        } else {
            let randomAscii = Math.floor(Math.random() * 123);
            if (
                (randomAscii >= 48 && randomAscii <= 57) ||
                (randomAscii >= 65 && randomAscii <= 90) ||
                (randomAscii >= 97 && randomAscii <= 122)
            ) {
                result += String.fromCharCode(randomAscii);
            }
        }

        i = result.length - 1;
    }

    return result;
}
