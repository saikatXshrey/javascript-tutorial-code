const One = [1, 2, 3, 4, 5];
const copy = One; //any change to the original arry changes the copy of the array
One.push(6);
console.log(One, copy);

//to avoid the error slice() method is used

const Two = [1, 2, 3, 4, 5];
const copyTwo = Two.slice();
Two.push(6);
console.log(Two, copyTwo);

//slice() can also be used to take a part of array
const Three = [1, 2, 3, 4, 5];
console.log(Three.slice(1, 3));