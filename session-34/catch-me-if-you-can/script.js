let nezuko = document.getElementById("nezuko");
let easy = document.getElementById("easy");
let hard = document.getElementById("hard");
let demon = document.getElementById("demon");

function runNezuko() {
    if (easy.checked == true) {
        nezuko.style = (randomPosition() + "transition: 2s;")
    }else if(hard.checked == true){
        nezuko.style = (randomPosition() + "transition: 1s;")
    }else{
        nezuko.style = (randomPosition() + "transition: 0.2s;")
    }
}

function moveNezuko(){
    if(demon.checked == true){
        nezuko.style = (randomPosition() + "transition: 0.2s;")
    }
}

function randomPosition() {

    let topPosition = Math.floor(Math.random() * 70);
    let leftPosition = Math.floor(Math.random() * 90);


    return `left: ${leftPosition}%; top: ${topPosition}%;`;
}

function catched() {
    alert("YOU WIN!!!");
}


nezuko.addEventListener("mouseenter", runNezuko);
nezuko.addEventListener("mousemove", moveNezuko)
nezuko.addEventListener("click", catched);