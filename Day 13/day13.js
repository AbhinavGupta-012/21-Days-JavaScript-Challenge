// refactoring day6 code to utilize arrow function

let calculateSum = (a, b) => a + b;

console.log(calculateSum(2, 4));

// refactoring day11 code to utilize arrow function and template literals

const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let result = document.getElementById("result");

let validateEmail = () => {
    let emailId = prompt("Enter your Email Address.");
    let check = regex.test(emailId);

    if (check){
        result.textContent = `${emailId} is a valid Email Address.`;
    }
    else{
        result.textContent = `${emailId} is not a valid Email Address.`;
    }
}