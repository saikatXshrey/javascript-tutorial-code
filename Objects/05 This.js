//'this' keyword calls the method itself inside object
const person = {
    name: 'Shrey',
    age: 20,
    func() {
        console.log(this);
    }
};
person.func();

//here 'this' calls the global object
function res() {
    console.log(this);
}

function example(title) {
    this.title = title;
    console.log(this);
}
const feeder = new example('a');