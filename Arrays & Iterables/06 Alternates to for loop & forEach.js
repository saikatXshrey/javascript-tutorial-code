//for loop
const arrayA = [1, 2, 3, 4, 5];
const dummyA = [];

for (const iterator of arrayA) {
    dummyA.push(iterator);
}
console.log(dummyA);

//forEach loop
const arrayB = [1, 2, 3, 4, 5];
const dummyB = [];

arrayB.forEach((arr, index, arrayB) => {
    const obj = { index: index, copy: arr };
    dummyB.push(obj);
});
console.log(dummyB);

//map
const dummyC = arrayB.map((arr, index, arrayB) => {
    const obj = { index: index, copy: arr };
    return obj;
});
console.log(dummyC);