"use strict";
var NextPerson = /** @class */ (function () {
    function NextPerson(firstName, lastName, technology) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.technology = technology;
    }
    NextPerson.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return NextPerson;
}());
var person1;
person1 = new NextPerson("Sujata", "Batra", "TypeScript");
console.log(person1.getFullName());
