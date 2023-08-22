
// dom nodes
let body = document.querySelector('body');


debugger;


const COUNTRIES = ['iran', 'australia', 'brazil', 'USA', 'germany', 'finland', 'china', 'norway', 'England', 'italy', 'georgia', 'UAE', 'argentina'];

// move to temp for operations
const TEMP = COUNTRIES.map(element => element.toLowerCase());
TEMP.sort();
// console.log(TEMP);


let firstLetter = TEMP[0][0];
let count = TEMP.filter(item => item[0]==firstLetter);
let counter = count.length;
let groupTitle = document.createElement("h2");
let groupList = document.createElement("ul");
let groupItem = document.createElement("li");
groupItem.innerHTML = TEMP[0];


groupTitle.innerHTML = `${firstLetter.toUpperCase()} (${counter})`;
body.appendChild(groupTitle);
body.appendChild(groupList);
groupList.appendChild(groupItem);




for(let i = 1 ; i<TEMP.length; i++){
    if(TEMP[i][0] == firstLetter){
        groupItem = document.createElement("li");
        groupItem.innerHTML = TEMP[i];
        groupList.appendChild(groupItem);
    } else {
        firstLetter = TEMP[i][0];
        count = TEMP.filter(item => item[0]==firstLetter);
        counter = count.length;
        groupTitle = document.createElement("h2");
        groupTitle.innerHTML = `${firstLetter.toUpperCase()} (${counter})`;
        body.appendChild(groupTitle);
        groupList = document.createElement("ul");
        body.appendChild(groupList);
        groupItem = document.createElement("li");
        groupItem.innerHTML = TEMP[i];
        groupList.appendChild(groupItem);

    }
}