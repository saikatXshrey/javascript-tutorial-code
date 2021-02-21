//WeakMap helps in easy garbage collect the unnecessary data occupying the memory
let people = { name: 'Shrey' };
const person = new WeakSet();
person.add(people);
console.log(person);

const personData = new WeakMap();
personData.set(people, 'New info');

people = null;
console.log(personData);