//textContent
//innerHtml

const list=document.getElementsByClassName('first');
const list_item=document.getElementsByClassName('item');
const div=document.querySelector('.second');

console.log(div.textContent);//shows all the text contained inside the div .second
console.log(list_item.textContent);

console.log(list.innerHtml);

//create a div 
const second_div=document.createElement('div');
second_div.textContent='Hi i am second div';//adding text to our scond div 

list.insertBefore(second_div ,list_item);