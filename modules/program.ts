import {myFunction, MyClass, myObject, myPrimitive} from './my-module'
console.log('myFunction: ' + myFunction());

console.log('myObject.name: ' + myObject.name);
console.log('myObject.myMethod(): ' + myObject.myMethod());

console.log('myPrimitive: ' + myPrimitive);

let myClass = new MyClass('testvar')
console.log('myClass.myClassMethod(): ' + myClass.myClassMethod());

//Template Literals
let verb = 'ate';
let noun = 'Food';

let sentense = `I ${verb} ${noun}. I enjoyed it`;
console.log(sentense);
//default
function add(x: number, y = 2){
    return x+y;
}
console.log(add(1,1) === 2);
console.log(add(1) === 3);

//rest
function printArgs(...theArguments: any[]){
    theArguments.forEach(n=>console.log(n));
}
printArgs('a', 'b', 'c');

//Spread
function spreadDemo(x: any = 1, y: any = 2, z: any = 3){
    return x+y+z;
}
console.log(spreadDemo(...[1,2]));
console.log(spreadDemo(...[1,'2']));

//Destructuring
let person = {
    first: 'Steve',
    last: 'Jobs',
    gender: 'Male'
}
let {first, last, gender:genderOfPerson} = person;
console.log(first, ' ' + last + ' is '+ genderOfPerson);

let o1 = {a:1, b:1, c:1};
let o2 = {a:2, b:2};
let o3 = {c:3};

let obj = Object.assign({}, o1, o2, o3); //enable library in tsconfig to use this
