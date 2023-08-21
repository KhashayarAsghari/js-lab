



//functions

function changeSlide(event) {
    if (event.deltaY > 0) {
        if (event.target.getAttribute("id") != "slide1") {
            event.target.classList.add("go-up");
        }
    } else {
        if (event.target.getAttribute("id") != "slide5") {
            event.target.nextElementSibling.classList.remove("go-up");
        }
    }
}




// events

window.addEventListener("wheel", changeSlide)