import {Person1} from './classes';

function echo<T>(arg: T): T {
    return arg;
}

var myStr =  echo(1);


class Admin extends Person1 {

}
class Manager extends Person1 {

}

let admin = new Admin('Chrira','Kumar');
let manager = new Manager('Aakash','Verma');

function echoPerson<T extends Person1>(person: T): T{
    return person;
} 

var foo = echoPerson(admin);
var bar = echoPerson(manager);
