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


function countPositivesSumNegatives(input) {

    debugger;
    if(input == null || input == []){
      let empty = [];
      return empty;
    }
    
    let countOfPositives = 0;
    let sumOfNegatives = 0;
    
    for(let i = 0; i<input.length; i++){
      if(input[i] < 0){
        sumOfNegatives += input[i];
      }else if(input[i] == 0){
        
      }else{
        countOfPositives += 1;
      }
    }
    
    let resault = [countOfPositives, sumOfNegatives];
    
    return resault;
  }