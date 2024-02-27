var fn = () => 'response';
var a: number; //these are postfix declaration
var b: boolean;
var c: string;
var d: undefined;
a = 10;
b = true;
c = 'varun';

//array
var myArr : number[]
myArr = [1,2,3];
myArr.push(4);
var x = myArr.pop(); 

//tuple
var myTup : [number,boolean,string];
myTup = [1,true,"varun"];

function sum(a: number, b: number, c = 0 ,d? : number,e: number = 0) : number  //return type
{ 
    //c is optional argument at the end of argument list
    // d is optional - take default value
    console.log("c="+c);
    return a+b+c;
}
console.log("sum="+sum(1,2,3));

var b1 : any;
b1 = 10;
b1 = true;
b1 = 'varun';

var c1 : number | boolean; // union type
//c1 = 'sad'; //error