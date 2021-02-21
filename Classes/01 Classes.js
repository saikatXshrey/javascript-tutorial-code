class Example {
    //constructor() which setups object
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    fun() {
        console.log(`${this.name}'s age is ${this.age}`);
    }
}

const example1 = new Example('Shrey', 20);
const example2 = new Example('Sia', 20);

example1.fun();
example2.fun();