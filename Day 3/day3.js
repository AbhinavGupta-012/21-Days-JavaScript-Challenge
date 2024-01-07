// prompt keyword lets us input any character whenever our webpage reloads
let number = prompt("Enter a number");

// using the builtin function Number(), converts a string of number into the number data type
number = Number(number);

// use the function keyword to create functions
function checkEvenOdd(number){
    if (number % 2 == 0){
        console.log(`${number} is Even.`); // using a template literal here (``) (bapticks)
    }
    else{
        console.log(`${number} is Odd.`);
    }
}

checkEvenOdd(number);