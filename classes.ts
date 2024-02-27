export class Person1 { 
   
    //private firstName: string;
    //private lastName: string;

    readonly tempValue = "Varun";

    constructor(private firstName: string,private lastName: string) {
        //this.firstName = firstName;
        //this.lastName = lastName;
    }

    getFirstName() : string {  //method - encapsulation concept for private variable firstName
        return this.firstName;
    }

    setFirstName(firstName: string) : void {
        this.firstName = firstName;
    }

    getLasttName() : string {  //method - encapsulation concept for private variable lastName  
        return this.lastName;
    }

    setLastName(lastName: string) : void {  
        this.lastName = lastName;
    }
    
    getFullName() : string {
        return this.firstName + ' ' + this.lastName;
    }
    
    greet() : void {
        console.log("Hey There ");
    }
}

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

var aProgrammer : Programmer = new Programmer("varun","jaiswal");
//var aProgrammer = new Programmer();
console.log(aProgrammer.greet());