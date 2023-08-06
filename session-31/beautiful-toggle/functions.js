let day = true;
let cloud1 = document.querySelector("img.cloud1");
let cloud2 = document.querySelector("img.cloud2");
let cloud3 = document.querySelector("img.cloud3");
let cloud4 = document.querySelector("img.cloud4");
let cloud5 = document.querySelector("img.cloud5");

let cloud1Style = cloud1.style = `top: ${randomNum(25, 40)}%; left: ${randomNum(20, 60)}%; animation: clouds-move ${randomNum(10, 40)}s infinite ease; animation-delay: ${randomNum(0, 4)}s;`;
let cloud2Style = cloud2.style = `top: ${randomNum(25, 40)}%; left: ${randomNum(20, 60)}%; animation: clouds-move ${randomNum(10, 40)}s infinite ease; animation-delay: ${randomNum(0, 4)}s;`;
let cloud3Style = cloud3.style = `top: ${randomNum(25, 40)}%; left: ${randomNum(20, 60)}%; animation: clouds-move ${randomNum(10, 40)}s infinite ease; animation-delay: ${randomNum(0, 4)}s;`;
let cloud4Style = cloud4.style = `top: ${randomNum(25, 40)}%; left: ${randomNum(20, 60)}%; animation: clouds-move ${randomNum(10, 40)}s infinite ease; animation-delay: ${randomNum(0, 4)}s;`;
let cloud5Style = cloud5.style = `top: ${randomNum(25, 40)}%; left: ${randomNum(20, 60)}%; animation: clouds-move ${randomNum(10, 40)}s infinite ease; animation-delay: ${randomNum(0, 4)}s;`;

function toggleTime() {
    console.log("test");

    
    let dayContainer = document.getElementById("day-container");
    let nightContainer = document.getElementById("night-container");
    let sunImage = document.querySelector(".day-container > img");
    let moonImage = document.querySelector(".night-container > img");

    let body = document.querySelector("body");
    let btn = document.querySelector("button");

    if (day == true) {
        dayContainer.style = "transform: rotate(180deg); transition: 1s; animation-delay: 0.1s;";
        nightContainer.style = "transform: rotate(180deg); transition: 1s; animation-delay: 0.1s;";
        btn.style = "position: absolute;bottom: 20%;left: 50%;transform: translateX(-50%);border: none;outline: none;background-color: #bfd7ff;padding: 20px 30px;color: black; transition: 0.8s";
        body.style = `background-color: #575d69 ;transition: background-color .8s`;
        day = false;
        btn.textContent = "GO TO DAY!";
      
    } else {
        dayContainer.style = "transform: rotate(0deg); transition: 1s; animation-delay: 0.1s;";
        nightContainer.style = "transform: rotate(0deg); transition: 1s; animation-delay: 0.1s;";
        let btnStyle = btn.style;
        body.style = `background-color: #bfd7ff ;transition: background-color .8s`;
        btn.textContent = "GO TO NIGHT";
        btn.style = "position: absolute;bottom: 20%;left: 50%;transform: translateX(-50%);border: none;outline: none;background-color: #575d69;padding: 20px 30px;color: white; transition: 0.8s";
        day = true;
        
    }
}
