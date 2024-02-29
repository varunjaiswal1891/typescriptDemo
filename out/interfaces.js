"use strict";
class Foo {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
let aPerson = new Foo("a", "b"); //polymorphism
let someObj = {
    firstName: 'test',
    lastName: 'test',
    getFullName: () => 'test'
};
aPerson = someObj; //duck typing - properties should match with interface
