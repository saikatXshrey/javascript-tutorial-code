//map
const person1 = { name: 'Shrey' };
const person2 = { name: 'Sia' };

const map1 = new Map([[person1, [{ age: 21, college: 'KIIT' }]]]);
console.log(map1);
console.log(map1.get(person1));

const map2 = new Map([[person2, [{ age: 21, college: 'Techno' }]]]);
for (const element of map2.entries()) {
    console.log(element);
}