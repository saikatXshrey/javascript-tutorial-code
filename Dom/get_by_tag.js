//Get element by the tag name 
//nodelist array like objects 
// only length func works other array function will not work 
//
//document.getElementByTagName('element name')

const list = document.getElementsByTagName('li');
console.log(list.length);
list[0].style.color= 'red';
list[list.length-1].style.fontSize='2rem'

//converting to actual array
const betterlist = [...list];

betterlist.forEach(item=> console.log(item));