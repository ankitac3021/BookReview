//e should be able to acess persons displayDetails()
// using the link through __proto__

function Person(name,id){
  this.n=name;
  this.idd=id;
}

Person.prototype.displayDetails=function(){
  console.log("Person is "+this.n+" with id "+this.idd);
}


function Employee(name,id,dept){
  this.idd=id;
  this.n=name;
  this.dept=dept;
}

Employee.prototype.displayDept=function(){
  console.log("The employee is "+this.n+" with id "+this.idd+" in Department "+this.dept);
}
//normally possible
var p=new Person("Ankita","ID001");
console.log(p);
p.displayDetails();

var e=new Employee("Usha","ID008","Sales");
console.log(e);
e.displayDept();

console.log("---------------------------------------");


e.__proto__.__proto__=p.__proto__;
//Employee.prototype.__proto__=Person.prototype;  //same
e.displayDetails();
//e.displayDetails();
