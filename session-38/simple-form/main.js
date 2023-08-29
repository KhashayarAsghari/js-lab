
// dom nodes
let userName = document.getElementById("name");
let userFamily = document.getElementById("family");
let phoneNumber = document.getElementById("phone");
let nationalCode = document.getElementById("national-code");

let isNameValid = false;
let isFamilyValid = false;
let isPhoneValid = false;
let isNationalCodeValid = false;




// functions
function checkName(evt){
    let nameValue = evt.target.value;
    let isNameValid = /^[a-zA-Z]+$/.test(nameValue);
    console.log(isNameValid)
}




// events
userName.addEventListener("keyup", checkName);