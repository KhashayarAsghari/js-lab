let bigImage = document.getElementById("big-image");
let thumbs = document.querySelectorAll(".tiny-image");

function changeImage(){

    let selected = document.querySelectorAll(".selected-image");
    for (let index = 0; index < selected.length; index++) {
        selected[index].classList.remove("selected-image");
        
    }

    let thumbSrc = this.getAttribute("src");
    bigImage.setAttribute("src", thumbSrc);
    this.classList.add("selected-image");

}


for (let index = 0; index < thumbs.length; index++) {
    thumbs[index].onclick = changeImage;
    
}