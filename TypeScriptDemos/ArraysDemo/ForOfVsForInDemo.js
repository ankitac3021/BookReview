"use strict";
var arr;
arr = [10, 20, 30, 40, 50];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var element = arr_1[_i];
    console.log(element);
}
console.log("for.. in");
for (var index in arr) {
    console.log(index);
}
