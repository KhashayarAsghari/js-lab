let container = document.getElementById("container");


let cardSample = container.innerHTML;


const CARDS = [
    {
        imageUrl: "./images/0.webp",
        title: "دوربین رنگی پنگی",
        price: "2995406000",
        rate: 3,
        hasBadge: true
    },
    {
        imageUrl: "./images/1.webp",
        title: "دوربین خوب",
        price: "52400000",
        rate: 4,
        hasBadge: true
    },
    {
        imageUrl: "./images/2.webp",
        title: "دوربین بهتر",
        price: "82400000",
        rate: 5,
        hasBadge: false
    },
    {
        imageUrl: "./images/3.webp",
        title: "دوربین کار راه انداز",
        price: "400000",
        rate: 2,
        hasBadge: false
    },

]


debugger;

for(let i =0; i< CARDS.length -1;i++){
    container.innerHTML += cardSample;
}
let cardsImage = document.getElementsByClassName("card__image");
let cardsTitle = document.getElementsByClassName("card__desc__title");
let cardsPrice = document.getElementsByClassName("card__desc__price__num");
let cardsRating = document.getElementsByClassName("card__desc__rating__rate");
let cardsBadge = document.getElementsByClassName("card__badge")
for(let i = 0; i<CARDS.length; i++){
    cardsImage[i].setAttribute("src", CARDS[i].imageUrl);
    cardsTitle[i].textContent = CARDS[i].title;
    let tomanPrice = CARDS[i].price / 10;
    cardsPrice[i].textContent = tomanPrice.toLocaleString();
    cardsRating[i].textContent = CARDS[i].rate;
    if(!CARDS[i].hasBadge)
        cardsBadge[i].style = "display: none;"
}