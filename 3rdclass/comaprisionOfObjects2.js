

var personObj1={
  firstName:"Ankita",
  lastname:"Chatterjee",
  hobbies:"Travelling"
};

console.log(personObj1);

//hobby property still remains
personObj1.hobbies=undefined;
console.log(personObj1);

//to remove a property delete is used
delete personObj1.hobbies;
console.log(personObj1);
