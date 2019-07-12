interface car{
    carname:string;
    engine():void;
}

class audi implements car{
    carname="Audi";
    engine(){
        console.log("Audi uses engine");
    }
}

class bmw implements car{
    carname="bmw";
    engine(){
        console.log("BMW uses engine");
    }
}
class rollsRoyce implements car{
    carname="rollsRoyace"
    engine(){
        console.log("Rolls-Royce uses engine");
    }
}

class driver{
    drivername:string;
    car:car;
    constructor(drivername:string,carname:car){
        this.drivername=drivername;
        this.car=carname;
    }
    drive(){
        console.log("Driver "+this.drivername+" is driving "+this.car.carname);
        this.car.engine();
    }

}

var car1=new audi();
var car2=new bmw();
var car3=new rollsRoyce();

var driver1=new driver("Raju",car1);
var driver2=new driver("Ravi",car2);
var driver3=new driver("Ramesh",car3);


driver1.drive();
driver2.drive();
driver3.drive();
