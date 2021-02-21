const arr = [1, 2, 3, 4, 2, 5];
console.log(arr.indexOf(2));    //returns first occurence
console.log(arr.lastIndexOf(2));     //returns last occurence
console.log(arr.indexOf(6));    //returns -1 when it doesnt find any thing
console.log(arr.includes(5));  //returns true if the element is included in the array


//object index is not supported by index()
const arrObj = [{ name: 'Max' }, { name: 'Will' }];
console.log(arrObj.indexOf({ name: 'Max' }));

//obj array can be searched by find()
const getRes = arrObj.find((person, index, persons) => {
    return person.name === 'Will';
})
console.log(getRes);

//obj array index can be searched by find()
const res = arrObj.findIndex((person, index, persons) => {
    return person.name === 'Will';
})
console.log(res);