interface Person1 {
    firstName: string;
    lastName: string;
    getFullName(): string;

   
}

class Foo implements Person1 {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

let aPerson: Person1 = new Foo(); //polymorphism

let someObj = {
    firstName: 'test',
    lastName: 'test',
    getFullName: () => 'test'
};

aPerson = someObj; //duck typing - properties should match with interface