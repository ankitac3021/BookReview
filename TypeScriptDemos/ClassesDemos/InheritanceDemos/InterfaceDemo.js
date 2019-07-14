"use strict";
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        console.log(Math.PI * Math.pow(this.radius, 2));
    };
    return Circle;
}());
var ob = new Circle(8);
ob.area();
