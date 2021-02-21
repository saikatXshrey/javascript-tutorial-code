//WeakSet helps in easy garbage collect the unnecessary data occupying the memory
let people = { name: 'Shrey' };
const person = new WeakSet();
person.add(people);

//easy garbage collect
people = null;
console.log(person);