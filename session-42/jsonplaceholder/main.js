
let container = document.querySelector(".container")


const users = new XMLHttpRequest();
users.open("GET", "https://jsonplaceholder.ir/users");

function getData() {
    let data = JSON.parse(users.responseText);
    render(data);
}

function render(arr) {
    const template = arr.map(item => {
        return `
        <div class="card">
            <img src="${item.avatar}" alt="" class="card__image">
            <div class="card__desc">
                <h2 class="card__desc__name">${item.name}</h2>
                <h2 class="card__desc__email">${item.email}</h2>
                <h3 class="card__desc__address">${item.address.city} - ${item.address.street} - ${item.address.alley} - ${item.address.number}</h3>
                <a href="${item.website}" class="card__desc__website">${item.company}</a>
            </div>
        </div>
        `
    }).join("");

    container.innerHTML = template;

}

users.addEventListener("load", getData);
users.send();