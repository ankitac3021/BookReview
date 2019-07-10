//Function
function demo(){
  console.log("welcome to my first function!!!");
}

demo();
console.log(typeof demo());

function greet(name){
  console.log("welcome "+name+ " to the world of JS");
}

greet("ankita");

/*var msg=greet("usha");
console.log(msg);*/

//should be
function greet(fname,lname){
  return "welcome "+fname+" "+lname+" to the world of JS";
}


var msg=greet("usha");
console.log(msg);

var msg=greet("usha","kiran");
console.log(msg);
var msg=greet("usha","kiran",1234);
console.log(msg);


