"use strict";
var OurPerson = /** @class */ (function () {
    function OurPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // constructor(){
    //     this.firstName="";
    //     this.lastName="";
    // }
    OurPerson.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return OurPerson;
}());
var person1;
person1 = new OurPerson("Sujata", "Batra");
// console.log(person1.firstName);
// var person2=new NewPerson();
console.log(person1.getFullName());
