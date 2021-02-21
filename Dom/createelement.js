//create-element
//create-textNode
//append-child

const result=document.getElementById('result');
console.log(result);

const result_child=result.children;
console.log(result_child);//show the children of result id 


//create  an element with syntax --->>>   craeteElement('tag name ')

const body_div=document.createElement('div');//creating a div element

const text=document.createTextNode('I am great');//creating a textNode ()  syntax:: documnet.createNode('Enter the text here')

//syntax:::   document.body.appendchild(the element u wantb  to append )
document.body.appendChild(body_div);//appending body_dv created to body of the page 



//create a element
const result_li=document.createElement('li');
//creating textNode
const text_li=document.createTextNode('Tea or coffee');

//append result_li to result div 
result.appendChild(result_li);
//appending textNodeto result_li
result_li.appendChild(text_li);

//adding .show class to our new li
result_li.classList.add('show');
console.log(result.children);



//create a new div
const new_div=document.createElement('div');
//create a text node and append that to new div

const text_new=document.createTextNode('This is a new div !!!');
new_div.appendChild(text_new);
//insert before function::   syntax::: document.body.insertBefore(element u want to insert,element u want to insert before to)
document.body.insertBefore(new_div , result );

//replaceChild()-------------

result.replaceChild(new_div,result_li);
new_div.classList.add('show');//adding show class to the new div we created 
console.log(result.children);

