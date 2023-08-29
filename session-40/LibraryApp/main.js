



// functions
function openList(evt) {
    evt.target.classList.toggle("filters__item--hidden");
    console.log(evt.target)
}


function render(arr) {
    temp = arr.map(item => {
        return `
                <div class="product">
                    <img src="./assets/image/${item.imgSrc}" alt="product image" class="product__image">
                    <div class="product__desc">
                        <h2 class="product__desc__title">${item.title}</h2>
                        <div class="product__desc__details">
                            <h3 class="product__desc__details__item">
                                <span>اثر </span>
                                ${item.author}
                            </h3>

                            <h3 class="product__desc__details__item">
                                ${item.published_date.toString()}
                            </h3>

                            <h3 class="product__desc__details__item">
                                <span>زبان:‌ </span>
                                ${item.language}
                            </h3>
                            <h3 class="product__desc__details__item">
                                <span>ژانر:‌ </span>
                                ${item.genre}
                            </h3>
                        </div>
                    </div>
                </div>`
    }).join();

    temp = temp.replaceAll(",", "");

    library.innerHTML = temp;
    
}


render(BOOKS)






// events

for(let i=0; i<filterItems.length; i++){
    filterItems[i].addEventListener("click", openList, true)
}

