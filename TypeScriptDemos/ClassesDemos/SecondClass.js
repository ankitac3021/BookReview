"use strict";
var MyPerson = /** @class */ (function () {
    function MyPerson() {
    }
    MyPerson.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return MyPerson;
}());
var person1;
person1 = new MyPerson();
person1.firstName = "Sujata";
console.log(person1.getFullName());
