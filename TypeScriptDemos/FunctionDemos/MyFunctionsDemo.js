"use strict";
function greet(name) {
    return "welcome " + name + " to the world of TS";
}
console.log(greet("Sujata"));
// var returnType:number=greet("SomeName"); error
// greet(10); error
// console.log(greet("Sujata","Batra")); error
// console.log(greet()); error
function demo(a) {
    console.log(a);
}
demo(4);
var x = demo("Sujata");
console.log(x);
