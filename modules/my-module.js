"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function myFunction() {
    return 'I am in myFunction';
}
exports.myFunction = myFunction;
function myPrivateFunction() {
    return 'myPrivateFunction is called';
}
var myObject = {
    name: "this is my object name",
    myMethod: function () {
        return 'myMethod is called';
    }
};
exports.myObject = myObject;
exports.myPrimitive = 99;
var MyClass = /** @class */ (function () {
    function MyClass(variable) {
        this.variable = variable;
        this.variable2 = variable + ' two';
    }
    MyClass.prototype.myClassMethod = function () {
        return 'My Class method on my Class is running';
    };
    return MyClass;
}());
exports.MyClass = MyClass;
