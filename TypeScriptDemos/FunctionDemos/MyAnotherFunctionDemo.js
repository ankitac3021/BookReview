"use strict";
function display(a, b, c, d) {
    if (c === void 0) { c = false; }
    if (d === void 0) { d = 120; }
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
    console.log("d = " + d);
}
display("AAA", 78, false, 90);
display("BBB", 90, true);
display("CCC", 12);
