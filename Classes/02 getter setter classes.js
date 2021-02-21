class Square {
    constructor(side) {
        this.side = side;
    }
    //get
    get area() {
        return this.side * this.side;
    }

    //set
    set area(area) {
        this.side = Math.sqrt(area);
    }
}

//getter
const area1 = new Square(10);
console.log(Square.area);

//setter
const area2 = new Square(4);
area2.area = 25;
console.log(area2.side);