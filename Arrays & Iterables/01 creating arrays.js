const array1 = [1, 2, 3];
console.log(array1);

const array2 = new Array('Hello', 'World!');
console.log(array2);

const array3 = new Array(5, 3);
console.log(array3);

const array4 = new Array(3);
console.log(array4);

const array5 = Array.of(1, 2);
console.log(array5);

const array6 = Array.from('Hello World!');
console.log(array6);

// const array7 = Array.from(); //gives error
// console.log(array7);

const li = document.querySelectorAll('li');
const array8 = Array.from(li);
console.log(array8);
