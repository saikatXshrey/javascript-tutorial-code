const arr = [10, 4, 6, 2, 3];

//sort()
arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
});
console.log(arr);

//reverse()
console.log(arr.reverse());

//filter()
console.log(arr.filter((ele, index, arr) => {
    return ele > 5;
}));