const numbers = [1, 2, 3, 4, 5]; // defining an array to use

// using the map array method
const newArr = numbers.map(newFunction);

function newFunction(number){
    return number * 10;
}

console.log(`Map() Method - ${newArr}`);

// using the filter array method
const evenNumbers = numbers.filter(checkEvenNumbers);

function checkEvenNumbers(number){
    if (number % 2 === 0){
        return number;
    }
}

console.log(`Filter() Method - ${evenNumbers}`);

// using the reduce array method
const totalOfNumbers = numbers.reduce(sumFunction);

function sumFunction(total, number){
    return total + number;
}

console.log(`Reduce() Method - ${totalOfNumbers}`);