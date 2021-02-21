const object = {
    name: 'Shrey',
    age: 20
}

//accesing property name
for (const prop in object) {
    console.log(prop);
}

const array = [1, 2, 3, 4, 5];

//accessing content
for (const prop of array) {
    console.log(prop);
}