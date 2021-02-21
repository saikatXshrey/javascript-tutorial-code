const person = {
    name: 'Shrey',
    age: 20
}

console.log(person.hasOwnProperty('name'));
console.log('name' in person);

//valueOf is a property by default in all the js objects
console.log(person.hasOwnProperty('valueOf'));
console.log('valueOf' in person);