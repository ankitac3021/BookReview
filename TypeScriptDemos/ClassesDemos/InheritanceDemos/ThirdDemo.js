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
var Student = /** @class */ (function () {
    function Student(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    Student.prototype.displayStudentDetails = function () {
        console.log("Roll No : " + this.rollNo);
        console.log("Student Name : " + this.name);
    };
    return Student;
}());
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks(rollNo, name, marks1, marks2, marks3) {
        var _this = _super.call(this, rollNo, name) || this;
        _this.marks1 = marks1;
        _this.marks2 = marks2;
        _this.marks3 = marks3;
        return _this;
    }
    Marks.prototype.displayAllDetails = function () {
        console.log("Marks 1 : " + this.marks1);
        console.log("Marks 2 : " + this.marks2);
        console.log("Marks 3 : " + this.marks3);
    };
    return Marks;
}(Student));
var Grade = /** @class */ (function (_super) {
    __extends(Grade, _super);
    function Grade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Grade.prototype.calculateGrade = function () {
        if ((this.marks1 + this.marks2 + this.marks3) / 3 > 75)
            this.grade = "A Grade";
        else
            this.grade = "B Grade";
    };
    Grade.prototype.displayGradeWiseStudentDetails = function () {
        _super.prototype.displayStudentDetails.call(this);
        _super.prototype.displayAllDetails.call(this);
        console.log("Grade : " + this.grade);
    };
    return Grade;
}(Marks));
var ram = new Marks(101, "Ram", 55, 66, 77);
ram.displayStudentDetails();
ram.displayAllDetails();
console.log("============");
var stud = new Grade(111, "BBBB", 66, 77, 99);
stud.calculateGrade();
stud.displayGradeWiseStudentDetails();
