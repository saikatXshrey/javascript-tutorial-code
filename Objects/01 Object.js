//putting key dynamically into an object
const keyUserName = 'level';

//object in js
const person = {
    name: 'Shrey',
    age: 20,
    college: 'Kalinga Institute of Industrial Technology',
    relation: 'lol single',
    student: true,
    //putting key dynamically into an object
    [keyUserName]: 69,
    //using key 
    'extro/introvert?': 'introvert',
    ping: () => {
        alert('Hello World!');
    }
};

console.log(person.name, person.relation);

//adding property to object
person.year = 2;

//modifying property to object
person.age = 21;

//deleting property
delete person.ping;

console.log(person);

//accessing key 
console.log(person['extro/introvert?']);

//dynamically access key name
const keyName = 'relation';
console.log(person[keyName]);