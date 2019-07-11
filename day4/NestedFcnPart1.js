var a=10;
function outer(){
  var b=20;
  var inner=function(){
    console.log("a:"+a);
    console.log("b:"+b);
  }
  return inner;
}

var innerFun=outer();
innerFun();