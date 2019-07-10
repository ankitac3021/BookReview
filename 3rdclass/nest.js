var a=10;

var first=function() {
  var b=10;
  c=20;
  console.log("b:"+b);
}

first();
console.log(first);
var third=function() {
    var z=0;
    y=7;
    console.log("Inside third");
  }

var second=function() {
  d=8;
  e=6;
  var p=10;
  console.log("Inside second")
  third();
}

second();
third();

