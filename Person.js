"use strict";
var Person = /** @class */ (function () {
    function Person(first, last) {
        this.first = first;
        this.last = last;
    }
    Person.prototype.getFullName = function () {
        return this.first + ' ' + this.last;
    };
    return Person;
}());
var person = new Person('Sudheer Reddy', 'Nalmaru');
//person.first = 'Sudheer Reddy';
//person.last = 'Nalmaru';
//console.log(person.first + ' ' + person.last);
console.log(person.getFullName());
