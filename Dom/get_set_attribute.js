//get attribute 
//set attribute

const special =document.querySelector('#special');
const showClass=special.getAttribute('class');
console.log(showClass);


const link=document.getElementById('link');
const showLink=link.getAttribute('href');
console.log(showLink);

const item=link.nextSibling.nextSibling;
console.log(item);

item.setAttribute('class' ,'last');
console.log(item);