//className
//classList
const first=document.getElementById('first');
const get_classname=first.className;
first.className='text';
console.log(get_classname);

//classList

const get_third=document.querySelector('#third');
get_third.classList.add('colors','text')
get_third.classList.remove('colors')
console.log(get_third);

const check=get_third.classList.contains('colors');
if(check)
{
    console.log('The class is present');
}
else
{
    console.log('class is not present');
}
