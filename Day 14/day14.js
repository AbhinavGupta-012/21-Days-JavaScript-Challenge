let higherOrderFunction = (callback) => {
    callback();
}

let lowerOrderFunction = () => {
    let a = 14;
    let b = 21;
    let c = b - a;
    console.log(`Today is Day ${a} of ${b} days. ${c} days left!!`);
}

higherOrderFunction(lowerOrderFunction);