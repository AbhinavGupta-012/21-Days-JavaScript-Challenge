// function to save data to the local storage
let saveDatatoLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

// function to retrieve the saved data from local storage
let retrieveDataFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const info = {name: "Abhinav", age: 17, sex: "Male"};
saveDatatoLocalStorage("userInfo", info);

const output = retrieveDataFromLocalStorage("userInfo");
console.log(output);