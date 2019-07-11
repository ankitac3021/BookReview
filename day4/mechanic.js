function BiCycle(speed,gear,tirePressure){
  this.speed=speed;
  this.gear=gear;
  this.tirePressure=tirePressure;
  this.inflateTire=function(){
    this.tirePressure+=5;
  }
}

var bicycle1=new BiCycle(40,5,10);
console.log(bicycle1);
bicycle1.inflateTire();
console.log(bicycle1);

function Mechanic(name){
  this.name=name;
}

var mike=new Mechanic("Mike");
mike.inflateTire=bicycle1.inflateTire;// Mike object is given a property inflateTire
console.log(mike);
mike.inflateTire();/*inflating mike and not tire becoz 
this pointer takes the newly created object*/

mike.inflateTire.call(bicycle1);
console.log(mike);
console.log(bicycle1);



