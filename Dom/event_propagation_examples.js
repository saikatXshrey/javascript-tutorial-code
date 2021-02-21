//ANCHOR event propagation examples 

const btn=document.getElementById('btn');

//const h1= document.querySelectorAll('.heading').forEach(function(item){
  //  item.addEventListener('click', function(){
  //      console.log("You clicked !!");
    //})
//});

btn.addEventListener('click' , function(){
    const h1=document.createElement('h1');
    h1.classList.add('heading');
    h1.textContent='Hi I am Joyesh Debnath!!!';
    document.body.appendChild(h1);
})
