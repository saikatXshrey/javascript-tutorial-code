const person = {
    name: 'Shrey',
    age: 20
}

//object destructuring
let { name, age } = person;

console.log(name);
console.log(age);


function res({ name, age }) {
    console.log(`The name is ${name} and age is ${age}`);
}
res(person);