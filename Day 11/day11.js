const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let result = document.getElementById("result");

function validateEmail(){
    let emailId = prompt("Enter your Email Address.")
    let check = regex.test(emailId);
    
    if (check){
        result.textContent = emailId + " is a valid Email Address."
    }
    else{
        result.textContent = emailId + " is not a valid Email Address."
    }
}  