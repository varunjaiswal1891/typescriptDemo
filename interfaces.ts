interface Person1 {
    firstName: string;
    lastName: string;
    getFullName(): string;

   
}

class Foo implements Person1 {
    firstName: string;
    lastName: string;
    constructor(firstName: string,lastName: string)
    {
        this.firstName= firstName;
        this.lastName=lastName;
    }
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

let aPerson: Person1 = new Foo("a","b"); //polymorphism

let someObj = {
    firstName: 'test',
    lastName: 'test',
    getFullName: () => 'test'
};

aPerson = someObj; //duck typing - properties should match with interface