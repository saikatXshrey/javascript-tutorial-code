const person = {
    firstName: 'Saikat',
    lastName: 'Das',
    //get() getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    //set() setter
    set fullName(value) {
        const namePart = value.split(' ');
        this.firstName = namePart[0];
        this.lastName = namePart[1];
    }
}

person.fullName = 'Shrey Sia';
console.log(person);