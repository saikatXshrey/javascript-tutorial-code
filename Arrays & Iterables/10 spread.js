//spread()
const arr = [1, 2, 3, 4, 5];
const copied = [...arr];
arr.push(6)
console.log(arr, copied);

console.log(Math.max(...arr));