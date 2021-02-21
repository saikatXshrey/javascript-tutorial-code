const arrayOne = [1, 2, 3, 4, 5];
arrayOne.push('string added'); //adds to last
console.log(arrayOne);

arrayOne.pop(); //removes from last
console.log(arrayOne);

arrayOne.unshift('Hello'); //adds from first
console.log(arrayOne);

arrayOne.shift(); //removes from first
console.log(arrayOne);

arrayOne.splice(1, 0, 'middle'); //adds element in specified position
console.log(arrayOne);           //splice(start index, no of deletion, element to be added)

arrayOne.splice(0); //splice with only single method removes all the element from the strting location
console.log(arrayOne);