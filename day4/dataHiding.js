

var person={
  "firstName":"Ankita",
  "lastName":"Chatterjee",
  getFirstName:function(){
    return this.firstName;
  },
  setFirstName:function(){
    this.firstName=firstName;
  }
}
console.log(person.getFirstName());
console.log(person.firstName);

//////////////////////////////////////////////////////////////////
console.log("--------------------------------");



//Approach 2
function createPerson() {
  var firstName="Ankita";
  var lastName="Chatterjee";
  var returnObj={
  getFirstName:function(){
    return firstName;
  },
  setFirstName:function(name){
    firstName=name;
  },
  getLastName:function(){
    return lastName;
  },
  setLastName:function(lname){
    firstName=lname;
  }
  };
  return returnObj;
}

var person1=createPerson();
console.log(person1.getFirstName());
console.log(person1.firstName);
