var a=10;
function outer(){
  var b=20;
  var inner=function(){
    a++;
    b++;
    console.log("a="+a);
    console.log("b="+b);
  }
  return inner;
  
}

var innerFun1=outer();
innerFun1();

var innerFun2=outer();
innerFun2();

/* When ever inner function is called it freshly takes b=20
so only global copy is present which gets incemented everytime and value remains 
in window.
bur global variable is new at every call.
*/