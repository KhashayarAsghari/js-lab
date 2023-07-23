function sumOfMultiples(num1, num2) {
    if(num2 < num1)
        return("invalid input");
    let sum = 0;
    let multi = 1;
    let multiple = 1;
    
    while(multiple<num2){
      
        
        sum += num1 * multi;
        multi++;
        multiple = num1 * multi;
    }

    return(sum);
}