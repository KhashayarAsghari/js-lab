



// functions
function openList(evt) {
    evt.target.classList.toggle("filters__item--hidden");
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


function applyFilters() {
    // selected authors
    temp = filterListAuthor.childNodes;
    let selectedAuthors = [];
    for(let i=0; i< temp.length; i++){
        if(temp[i].firstElementChild.checked){
            selectedAuthors.push(temp[i].textContent.trim());
        }
    }
    

    // selected languages
    temp = filterListLang.childNodes;
    let selectedLanguages = [];
    for(let i=0; i<temp.length; i++){
        if(temp[i].firstElementChild.checked){
            selectedLanguages.push(temp[i].textContent.trim());
        }
    }

    // selected genres
    temp = filterListGenre.childNodes;
    let selectedGenres = [];
    for(let i=0; i<temp.length; i++){
        if(temp[i].firstElementChild.checked){
            selectedGenres.push(temp[i].textContent.trim());
        }
    }


    // filter BOOKS
    let filteredBooks = BOOKS.map(item => {
        for(let i = 0; i<BOOKS.length; i++){
            for(let j=0; j<selectedAuthors.length; j++){
                if(item.author == selectedAuthors[j]) return item;
            }
        }
    })
    for(let i=0; i<filteredBooks.length; i++){
        if(filteredBooks[i] == undefined){ 
            filteredBooks.splice(i,1);
            i--;
        };
        
    }
    render(filteredBooks)
}





// events

for(let i=0; i<filterItems.length; i++){
    filterItems[i].addEventListener("click", openList)
}

btnApplyFilters.addEventListener("click", applyFilters);
