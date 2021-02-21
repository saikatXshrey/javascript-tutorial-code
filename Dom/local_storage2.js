
const names=['Ronaldo','Messi','Neymar','Suarez'];

//localStorage.setItem('names',names);
//const get_names=localStorage.getItem('names');

//console.log(get_names);
//localStorage.clear();

//ANCHOR JSON.stringify()  and   JSON.parse()   

localStorage.setItem('names', JSON.stringify(names));
const get_names=JSON.parse(localStorage.getItem('names'));

console.log(get_names[2]);
console.log(get_names[0]);
