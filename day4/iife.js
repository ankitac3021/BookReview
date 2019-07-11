//Immediately Involked function expressions -IIFE

(function(){
  var a=10;
  var b=20;
  console.log(a+b);
})();


(function(name){
  console.log("Wecome "+name);
})("ankita");