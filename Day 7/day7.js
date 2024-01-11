// a new datatype named as object can be defined using curly braces and using key value pairs to store data

let person = {name: "Abhinav", age: 17, gender: "Male"};

console.log(`Datatype - ${typeof person}`);

// using the dot notation to access the person's name
console.log(`Name of the person - ${person.name}`);

// using the bracket notation to access the person's age
console.log(`Age of the person - ${person['age']}`);

console.log(`Gender of the person - ${person.gender}`);