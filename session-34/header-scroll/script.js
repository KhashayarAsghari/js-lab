let header = document.querySelector(".header");
let oldScroll = window.scrollY;
function scrollHeader(){
    if(oldScroll > window.scrollY){
        header.style = ("position: sticky; top: 0; left: 0; height: 0;");
        header.style = ("position: sticky; top: 0; left: 0;height: 100px;overflowX: hidden; transition: .3s;");
    }else {
        header.style = ("position: static; top: 0; left: 0; height: 0;")
    }
    oldScroll = window.scrollY;
}



window.addEventListener("scroll", scrollHeader);