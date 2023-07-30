
function multiProcess(num){

    let multi = 0;
    let multiTemp = 0;
    let multiSum = 0;
    let resault = "";
    let sumOfSums = 0;

    console.log("Sum of each multiple digits:")
    
    for(let i=1; multi<100; i++){
        // multiples
        multi = i * num;
        resault += (String(i * num)) + " - ";
        multiTemp = multi;
        multiSum = 0;
        // sum of multiple digits
        while(multiTemp>=10){
          
            multiSum = multiSum + multiTemp%10;
            multiTemp = (parseInt(multiTemp/10));
        }
        console.log(multiSum + multiTemp);
        sumOfSums += multiSum + multiTemp;
    }

    console.log("Multiples:");
    console.log(resault);

    console.log("Sum of all multiple digit sums:")
    console.log(sumOfSums);
    
}