"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
function echo(arg) {
    return arg;
}
var myStr = echo(1);
class Admin extends classes_1.Person1 {
}
class Manager extends classes_1.Person1 {
}
let admin = new Admin('Chrira', 'Kumar');
let manager = new Manager('Aakash', 'Verma');
function echoPerson(person) {
    return person;
}
var foo = echoPerson(admin);
var bar = echoPerson(manager);
