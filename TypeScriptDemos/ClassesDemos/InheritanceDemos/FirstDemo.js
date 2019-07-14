"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.displayPersonDetails = function () {
        console.log("FirstName : " + this.firstName);
        console.log("Last Name : " + this.lastName);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.displayAllDetails = function () {
        _super.prototype.displayPersonDetails.call(this);
        console.log("Department : " + this.department);
    };
    return Employee;
}(Person));
var emp = new Employee();
emp.firstName = "AAA";
emp.lastName = "BBB";
emp.department = "Sales";
emp.displayAllDetails();
console.log("============");
emp.displayPersonDetails();
