let delayTime = 3000;
let millisecondsToSeconds = delayTime / 1000;
let day = prompt("Which day of the challenge is today?")

let simulateAsync = () => {
    return new Promise((myResolve, myReject) => {
         setTimeout(() =>{
                if (day == 16){
                    myResolve(`Today is Day ${day}.`);
                }
                else{
                    myReject(`Today is not Day ${day}!`);
                }
            }, delayTime);
        }
    );
};

simulateAsync()
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });