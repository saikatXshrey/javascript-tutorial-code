//Quaryslector and quary selector all

const result=document.querySelector('.s');
result.style.fontSize='2rem';
const last=document.querySelector('.s:last-child');//select the last element 
last.style.fontSize='4rem';

const all=document.querySelectorAll('.s');
//run a loop to access each item just like traversing an array 

all.forEach(item=> item.style.color='green')