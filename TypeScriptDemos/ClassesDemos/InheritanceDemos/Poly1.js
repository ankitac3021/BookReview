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
var PopCorn = /** @class */ (function () {
    function PopCorn() {
    }
    PopCorn.prototype.pop = function () {
        console.log("Popcorn popping");
    };
    PopCorn.prototype.dummy = function () {
        console.log("Popcorn dummy function");
    };
    return PopCorn;
}());
var ButterPopCorn = /** @class */ (function (_super) {
    __extends(ButterPopCorn, _super);
    function ButterPopCorn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButterPopCorn.prototype.pop = function () {
        console.log("Yummy Butter Popcorn popping");
    };
    ButterPopCorn.prototype.quantity = function (ounce) {
        console.log(ounce + " ounces of butter added");
    };
    return ButterPopCorn;
}(PopCorn));
var CaramelPopCorn = /** @class */ (function (_super) {
    __extends(CaramelPopCorn, _super);
    function CaramelPopCorn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaramelPopCorn.prototype.pop = function () {
        console.log("Hot and sizzling Caramel Popcorn popping");
    };
    return CaramelPopCorn;
}(PopCorn));
var popcorn;
popcorn = new ButterPopCorn();
popcorn.pop();
popcorn.dummy();
// popcorn.quantity(3);
// var bPopCorn:ButterPopCorn;
popcorn = new CaramelPopCorn();
popcorn.pop();
popcorn = new PopCorn();
popcorn.pop();
