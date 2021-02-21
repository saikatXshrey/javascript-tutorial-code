//ANCHOR form 

const  form=document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();//preventing default actions   
    const name=document.getElementById('name').value;
    const password=document.getElementById('password').value;
    console.log(`your name ${name} and your password is ${password}`);
})