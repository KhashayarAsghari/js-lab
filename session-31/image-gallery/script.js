


function selectImage(img){
    let selectedImage = document.querySelector(".selected-image");
    selectedImage.classList.remove("selected-image");
    
    let imageSrc = img.src;
    document.getElementById("big-image").src = imageSrc;
    img.classList.add("selected-image");

    
    
}