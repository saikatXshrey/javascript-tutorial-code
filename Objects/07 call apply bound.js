//object 1
const object = {
    num: 5
}
//object 2
const receiver = function (val1, val2, val3) {
    return this.num + val1 + val2 + val3;
}
//call() 
console.log(receiver.call(object, 5, 4, 3));

//apply() 
let array = [4, 3, 2]
console.log(receiver.apply(object, array));

//bind()
const capture = receiver.bind(object);
console.log(capture(3, 2, 1));