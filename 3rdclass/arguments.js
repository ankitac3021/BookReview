/*function sum(){
  var a=prompt("Enter first no:","");
  var b=prompt("Enter second no:","");
  var s=a+b;
  console.log(s);
  console.log(parseFloat(a)+parseFloat(b));
}

sum();
*/
///////////////////////////////////////////////////////////////////////////////
var personObj={
  firstName:"Ankita",
  lastName:"Chatterjee",
  getFullName:function() {
    return personObj.firstName+" "+personObj.lastName;
  }
}
console.log(personObj);
console.log(personObj.getFullName());

var newPerson=personObj;
personObj={};
console.log(newPerson.getFullName()); 
/* undefined because inside the function personObj is used which we hv 
made is as empty, therefore we can use this function */

var personObj={
  firstName:"Ankita",
  lastName:"Chatterjee",
  getFullName:function() {
    return this.firstName+" "+this.lastName;
  }
}
console.log(personObj);
console.log(personObj.getFullName());

var newPerson=personObj;
personObj={};
console.log(newPerson.getFullName());


////////////////////////////////////////////////////////////////////////////

/*Even if we pass more arguments than required ,
we can still get the arguments we hv passed */

function dummy(a) {
  console.log("a="+a);
  console.log("I am dummy");
  for(i=0;i<arguments.length;i++)
    console.log(arguments[i]);
}

dummy(10,20,30);
///////////////////////////////////////////////////////////////////////////////