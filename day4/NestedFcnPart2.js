var a=10;
function greatGrandParent(b) {
  return function grandParent(c) {
    return function parent(d) {
      return function child(e){
        console.log(a+" "+b+" "+c+" "+d+" "+e);
      }
    } 
  }
}

//we are creating variables which accepts the returned value from function
var gp=greatGrandParent(20);
var p=gp(30);
var c=p(40);
c(50);

greatGrandParent(2)(3)(4)(5);