var complexFcn = /** @class */ (function () {
    function complexFcn(realPart, imaginary) {
        this.realPart = realPart;
        this.imaginary = imaginary;
    }
    complexFcn.prototype.sum = function (num1, num2) {
        this.realPart = num1.realPart + num2.realPart;
        this.imaginary = num1.imaginary + num2.imaginary;
        return this.realPart + "+i" + this.imaginary;
    };
    return complexFcn;
}());
var num1 = new complexFcn(10, 20);
var num2 = new complexFcn(30, 55);
var num3 = new complexFcn(0, 0);
console.log(num3.sum(num1, num2));
