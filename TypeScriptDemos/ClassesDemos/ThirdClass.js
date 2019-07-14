"use strict";
var NewPerson = /** @class */ (function () {
    function NewPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // constructor(){
    //     this.firstName="";
    //     this.lastName="";
    // }
    NewPerson.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return NewPerson;
}());
var person1;
person1 = new NewPerson("Sujata", "Batra");
// var person2=new NewPerson();
console.log(person1.getFullName());
