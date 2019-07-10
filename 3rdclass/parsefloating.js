/*function sum(){
  var a=prompt("Enter first no:","");
  var b=prompt("Enter second no:","");
  var s=a+b;
  console.log(s);
  console.log(parseFloat(a)+parseFloat(b));
}*/

sum();

var personObj={
  firstName:"Ankita",
  lastName:"Chatterjee",
  getFullName:function() {
    return personObj.firstname+" "+personObj.lastName;
  }
}
console.log(personObj);
