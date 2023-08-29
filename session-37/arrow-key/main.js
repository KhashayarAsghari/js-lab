


// dom nodes
let up = document.querySelector(".up")
let right = document.querySelector(".right")
let down = document.querySelector(".down")
let left = document.querySelector(".left")
let cover = document.getElementById("cover")

let isCoverActive = false;

// functions
function keyDown(evt) {
    switch(evt.key){
        case "ArrowUp":
            up.style = "transform: translateX(-50%) rotate(270deg) scale(1.2);"
            break;
        case "ArrowRight":
            right.style = "transform: translateY(-50%) scale(1.2);"
            break;
        case "ArrowDown":
            down.style = "transform: translateX(-50%) rotate(90deg) scale(1.2);"
            break;
        case "ArrowLeft":
            left.style = "transform: translateY(-50%) rotate(180deg) scale(1.2);"
            break;
        case "b":
            if(isCoverActive){
                cover.style = "background-color: transparent;"
                isCoverActive = false
            }else {
                cover.style = "background-color: black"
                isCoverActive = true;
            }
            break;
    }
}

function keyUp(evt) {

    switch(evt.key){
        case "ArrowUp":
            up.style = "transform: translateX(-50%) rotate(270deg);"
            break;
        case "ArrowRight":
            right.style = "transform: translateY(-50%);"
            break;
        case "ArrowDown":
            down.style = "transform: translateX(-50%) rotate(90deg);"
            break;
        case "ArrowLeft":
            left.style = "transform: translateY(-50%) rotate(180deg);"
            break;
    }
}


// events
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);