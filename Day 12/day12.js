function divideNumbers(a, b){
    if (b === 0){
        throw new Error("Division by Zero Error")
    }
    console.log(a / b);
}

try{
    divideNumbers(5, 2);
    divideNumbers(5, 0);
}
catch (error){
    console.error("Error:", error.message);
}
