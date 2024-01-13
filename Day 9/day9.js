const btn = document.getElementById("btn");
const totalDays = 21;
const multiplier = 100;

function calculatePercentage(currentDay){
    return (currentDay / totalDays) * multiplier
}

function btnPress(){
    let currentDay = prompt("Which Day of the challenge is today?");
    currentDay = Number(currentDay);
    const percentage = calculatePercentage(currentDay);
    console.log(`Today is Day ${currentDay}, We are ${percentage.toFixed(2)}% of the way done!`);
}

btn.addEventListener("click", btnPress);