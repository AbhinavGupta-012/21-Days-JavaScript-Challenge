// define an array by declaring a variable and using square brackets an array can be declared
let favoriteColors = ["Cyan", "Red", "Orange", "Mint", "Teal"];

// print the orginal array onto the console
console.log("Original Array -", favoriteColors);

// accessing elements by their index (index values start from 0)
console.log("Element at 0 or the first index -", favoriteColors[0]);

// to add a string at the end of the array use the push() operator
favoriteColors.push("Black");

console.log("Push Operator -", favoriteColors);

// to add a string at the beginning of the array use the unshift() operator
favoriteColors.unshift("Lime");

console.log("Unshift Operator - ", favoriteColors);

// to remove a particular value or string from the array use the pop() operator
favoriteColors.pop("Black");

console.log("Pop Operator -", favoriteColors);

// to remove a value or string at the beginning of the array use the shift() operator
favoriteColors.shift();

console.log("Shift Operator -", favoriteColors);

// to remove values or strings within a certain range of indices the splice() operator can be used
favoriteColors.splice(3, 4);

console.log("Splice Operator -", favoriteColors);