
var value;
value=-10; 
/* Any non zero value is taken true */
if(value)
  console.log("welcome");
else
  console.log("bye");

value="sujata";
if(value)
  console.log("welcome");
else
  console.log("bye");

value="";  //considered as false
if(value)
  console.log("welcome");
else
  console.log("bye");

value=null;  //obviously it is false
if(value)
  console.log("welcome");
else
  console.log("bye");

