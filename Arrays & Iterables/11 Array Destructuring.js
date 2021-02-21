//destructuring an array
const array = ['Saikat', 'Das'];
const [firstName, lastName] = array;
console.log(firstName, lastName);

//using spread() to out the remaining elements in new array
const array2 = ['Saikat', 'Das', 20, 'student', 'Mr'];
const [first, last, ...remaining] = array2;
console.log(first, last, remaining);