function bgChanger(){
    const grade = Math.floor(Math.random()*101);

    console.log(grade);
    if(grade < 60){
        document.body.style.backgroundColor = "red";
    }else if((grade >= 60) && (grade <= 90)){
        document.body.style.backgroundColor = "yellow";
    }else {
        document.body.style.backgroundColor = "green";
    }
}