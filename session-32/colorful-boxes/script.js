let items = document.querySelectorAll(".item");

function changeColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    this.style = `background-color: rgb(${r}, ${g}, ${b})`
}

for (let index = 0; index < items.length; index++) {
    items[index].onclick = changeColor;
    
}