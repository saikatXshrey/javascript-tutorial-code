class Sum {
    constructor(a, b) {
        this.val1 = a;
        this.val2 = b;
    }

    //static func
    static sum_func(a, b) {
        return a.val1 + a.val2 === b.val1 + b.val2;
    }
}

const obj1 = new Sum(1, 2);
const obj2 = new Sum(2, 2);
console.log(Sum.sum_func(obj1, obj2));