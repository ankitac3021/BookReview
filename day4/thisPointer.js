//1.
function myFun(){
  console.log("Dummy Function");
  console.log(this);
}
myFun();

//2
var obj={
  demo:function(){
    console.log("Hi I am Demo Function");
    console.log(this);
  }
}
obj.demo();

//3.
function MyConstructor(){
  console.log(this);
}

var o1=new MyConstructor;



