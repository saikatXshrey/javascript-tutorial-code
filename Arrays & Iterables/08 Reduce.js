const arr = [1, 2, 3, 4, 5];

const reduced = arr.reduce((prevValue, currValue, currIndex) => {
    return prevValue + currValue;
}, 0);

console.log(reduced);