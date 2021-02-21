//set
const set = new Set(['Shrey', 1, 3.69, true]);
console.log(set);
set.add(3.69);

for (const element of set) {
    console.log(element);
}

set.delete('Shrey');
console.log(set.has('Shrey'));

for (const element of set.entries()) {
    console.log(element);
}