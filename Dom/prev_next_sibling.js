//previous sibling -finds the previous element of the selected elemehnt
//next sibling-finds the next element of the selected element

const first =document.querySelector('.result');//slected element
const second =first.nextSibling.nextSibling;
console.log(second);
const zero=first.previousSibling.previousSibling;
console.log(zero);