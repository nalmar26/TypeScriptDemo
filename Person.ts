class Person {
    

    constructor(public first: string, public last: string) {
        
    }
    getFullName () {
        return this.first + ' ' + this.last;
    }
}
let person = new Person('Sudheer Reddy', 'Nalmaru');
//person.first = 'Sudheer Reddy';
//person.last = 'Nalmaru';
//console.log(person.first + ' ' + person.last);
console.log(person.getFullName());