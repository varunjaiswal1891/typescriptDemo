"use strict";
var fn = () => 'response';
var a; //these are postfix declaration
var b;
var c;
var d;
a = 10;
b = true;
c = 'varun';
//array
var myArr;
myArr = [1, 2, 3];
myArr.push(4);
var x = myArr.pop();
//tuple
var myTup;
myTup = [1, true, "varun"];
function sum(a, b, c = 0, d, e = 0) {
    //c is optional argument at the end of argument list
    // d is optional - take default value
    console.log("c=" + c);
    return a + b + c;
}
console.log("sum=" + sum(1, 2, 3));
var b1;
b1 = 10;
b1 = true;
b1 = 'varun';
var c1; // union type
//c1 = 'sad'; //error
