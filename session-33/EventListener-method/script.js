// Dom nodes
let mainDiv = document.getElementById("main");
let subDiv = document.getElementById("sub");
let paragraph = document.getElementById("paragraph");


// functions
function mainDivFunc(){
    alert("main div")
}

function subDivFunc(){
    alert("sub div")
}

function paragraphFunc(){
    alert("paragraph")
}

// events
mainDiv.addEventListener("click" , mainDivFunc);
subDiv.addEventListener("click", subDivFunc);
paragraph.addEventListener("click" , paragraphFunc);