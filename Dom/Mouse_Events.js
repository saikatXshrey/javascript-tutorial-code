//Mouse Event 
//mouseup
//mousedown
//mouseover
//mouseout



const item =document.getElementById('item');
const heading= document.getElementById('heading');

item.addEventListener('mouseup' , function(){
    console.log("Mouse is up!!!!");
})

item.addEventListener('mousedown', function(){
    console.log("mouse is down!!!");
})

heading.addEventListener('mouseover', function(){
    heading.classList.add('special');
});

heading.addEventListener('mouseout', function(){
    heading.classList.remove('special');
});


