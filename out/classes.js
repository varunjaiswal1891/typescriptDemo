"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person1 = void 0;
class Person1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        //private firstName: string;
        //private lastName: string;
        this.tempValue = "Varun";
        //this.firstName = firstName;
        //this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    getLasttName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
    greet() {
        console.log("Hey There ");
    }
}
exports.Person1 = Person1;
//var aPerson : Person = new Person("varun","jaiswal");
//aPerson.firstName = 'varun';
//aPerson.lastName = 'jaiswal';
//console.log(aPerson.firstName);
//console.log(aPerson);
//console.log(aPerson.getFullName());
//Inheritance
class Programmer extends Person1 {
    greet() {
        console.log("Hello World");
    }
    greetLikeNormalPerson() {
        super.greet();
    }
}
var aProgrammer = new Programmer("varun", "jaiswal");
//var aProgrammer = new Programmer();
console.log(aProgrammer.greet());
