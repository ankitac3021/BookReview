"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    return Person;
}());
exports.Person = Person;
var p1 = new Person("AAA", "ZZZ");
console.log(p1);
