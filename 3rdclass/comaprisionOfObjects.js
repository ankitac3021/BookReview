

var personObj1={
  firstName:"Ankita",
  lastname:"Chatterjee",
  age:20,
  "1":"dummy"
};

var personObj2={
  firstName:"Ankita",
  lastname:"Chatterjee",
  age:20,
  "1":"dummy"
};

//cannot compare the inside value
if(personObj1===personObj2)
  console.log("Equal");
else
  console.log("Not Equal");

//can compare only when they point to same loaction
 var personObj3=personObj2;
if(personObj3===personObj2)
  console.log("Equal");
else
  console.log("Not Equal");
