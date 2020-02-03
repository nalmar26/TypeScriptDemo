export function myFunction(){
    return 'I am in myFunction';
}

function myPrivateFunction(){
    return 'myPrivateFunction is called';
}

let myObject = {
    name: "this is my object name",
    myMethod: function () {
        return 'myMethod is called';
    }
}
export { myObject };

export const myPrimitive = 99;

export class MyClass {
    variable2: string
    constructor(public variable : string){
        this.variable2 = variable + ' two';
    }
    myClassMethod(){
        return 'My Class method on my Class is running';
    }
}