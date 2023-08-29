

// dom nodes
let library = document.getElementById("products");
let filterListAuthor = document.getElementById("filters__list__author");
let filterListPDate = document.getElementById("filters__list__p-date");
let filterListLang = document.getElementById("filters__list__lang");
let filterListGenre = document.getElementById("filters__list__genre");



// initial filters

// initial authors
let uniqueAuthors = [];
let temp = []
let count = 0;
temp = BOOKS.map(item => {
    return item.author;
});

for(let i=0; i<temp.length; i++) {
    
    uniqueAuthors.push(temp[i]);
    for(let j=i+1; j<temp.length; j++){
        if(temp[i] == temp[j]) temp.splice(j,1);
    }
    
}

temp = uniqueAuthors.map(item => {
    return `<li>
                <input type="checkbox">
                ${item}
            </li>`
}).join();

filterListAuthor.innerHTML = temp;














// events


