var a=10;
var b=0;
o={};

var f=function(){
  console.log("hello");
  
}

var d=function(a,b){
  console.log("a="+a);
  console.log("b="+b);
}

console.log(d(a,b));
console.log(d(a,o));
console.log(d(a,f));