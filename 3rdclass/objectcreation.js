
var myObj={};
console.log(myObj)
myObj.prop1=15;
myObj.prop2="hey";
myObj.prop3=null;
myObj.prop4=false;
myObj.prop5=34.5;
console.log(myObj);


console.log("prop1="+myObj.prop1);
console.log("prop2="+myObj.prop2);
console.log("prop3="+myObj.prop3);
console.log("propx="+myObj.propx); // doest give error ...but it is undefined

// second style

var personObj={
  firstName:"Ankita",
  lastname:"Chatterjee",
  age:20,
  "1":"dummy"
};

personObj.address={
  address:"BNM Girls Hostel",
  street:"12th main,27th cross",
  city:"Bangalore",
  pin:560070
};
console.log(personObj);
console.log(personObj.location);

console.log(personObj.address);

console.log(personObj.address.city);
console.log(personObj.location["city"]); //same as above

console.log(personObj["firstName"]);
console.log(personObj.firstName);

console.log(personObj[1]); /*should use square brackets for keywords or
invalid identiffier or reserved words if we use*/
