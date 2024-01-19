let delayTime = 3000;
let millisecondsToSeconds = delayTime / 1000;

let simulateAsync = (callback) => {
    setTimeout(() =>{
        callback();
    }, delayTime)
}

let callFunction = () =>{
    console.log(`This message is printed after ${millisecondsToSeconds} seconds!`);
}

simulateAsync(callFunction);