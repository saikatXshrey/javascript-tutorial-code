//parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log('Animal Sound');
    }
}

//child class
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    //func overriding
    makeSound() {
        super.makeSound();
        console.log('Woof Woof');
    }
}

const a1 = new Animal('Lion');
a1.makeSound();

const a2 = new Dog('Puddle');
a2.makeSound();