const obj = {
    kind: 'object',
    work: 'check'
}

const person = {
    name: 'Shrey',
    age: 20,
    college: 'Kalinga Institute of Industrial Technology',
    relation: 'lol i am single',
    student: true,
    ping: () => {
        alert('Hello World!');
    },
    //object inside an object
    extend: obj
};

//this is known as object chaining
console.log(person.extend.kind);