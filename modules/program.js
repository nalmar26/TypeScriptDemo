"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var my_module_1 = require("./my-module");
console.log('myFunction: ' + my_module_1.myFunction());
console.log('myObject.name: ' + my_module_1.myObject.name);
console.log('myObject.myMethod(): ' + my_module_1.myObject.myMethod());
console.log('myPrimitive: ' + my_module_1.myPrimitive);
var myClass = new my_module_1.MyClass('testvar');
console.log('myClass.myClassMethod(): ' + myClass.myClassMethod());
//Template Literals
var verb = 'ate';
var noun = 'Food';
var sentense = "I " + verb + " " + noun + ". I enjoyed it";
console.log(sentense);
//default
function add(x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
}
console.log(add(1, 1) === 2);
console.log(add(1) === 3);
//rest
function printArgs() {
    var theArguments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        theArguments[_i] = arguments[_i];
    }
    theArguments.forEach(function (n) { return console.log(n); });
}
printArgs('a', 'b', 'c');
//Spread
function spreadDemo(x, y, z) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 2; }
    if (z === void 0) { z = 3; }
    return x + y + z;
}
console.log(spreadDemo.apply(void 0, [1, 2]));
console.log(spreadDemo.apply(void 0, [1, '2']));
//Destructuring
var person = {
    first: 'Steve',
    last: 'Jobs',
    gender: 'Male'
};
var first = person.first, last = person.last, genderOfPerson = person.gender;
console.log(first, ' ' + last + ' is ' + genderOfPerson);
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { a: 2, b: 2 };
var o3 = { c: 3 };
var obj = Object.assign({}, o1, o2, o3); //enable library in tsconfig to use this
