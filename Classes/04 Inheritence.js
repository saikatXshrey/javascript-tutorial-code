//parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(`${this.name}'s age is ${this.age}`);
    }
}

//child class
class Coder extends Person {
    constructor(name, age, lang) {
        super(name, age);
        this.lang = lang;
    }

    display() {
        console.log(`${this.name}'s age is ${this.age} who codes in ${this.lang}`);
    }
}

const p1 = new Person('Shrey', 20);
console.log(p1.show());

const c1 = new Coder('Shrey', 20, 'Java');
console.log(c1.display());