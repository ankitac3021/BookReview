var audi = /** @class */ (function () {
    function audi() {
        this.carname = "Audi";
    }
    audi.prototype.engine = function () {
        console.log("Audi uses engine");
    };
    return audi;
}());
var bmw = /** @class */ (function () {
    function bmw() {
        this.carname = "bmw";
    }
    bmw.prototype.engine = function () {
        console.log("BMW uses engine");
    };
    return bmw;
}());
var rollsRoyce = /** @class */ (function () {
    function rollsRoyce() {
        this.carname = "rollsRoyace";
    }
    rollsRoyce.prototype.engine = function () {
        console.log("Rolls-Royce uses engine");
    };
    return rollsRoyce;
}());
var driver = /** @class */ (function () {
    function driver(drivername, carname) {
        this.drivername = drivername;
        this.car = carname;
    }
    driver.prototype.drive = function () {
        console.log("Driver " + this.drivername + " is driving " + this.car.carname);
        this.car.engine();
    };
    return driver;
}());
var car1 = new audi();
var car2 = new bmw();
var car3 = new rollsRoyce();
var driver1 = new driver("Raju", car1);
var driver2 = new driver("Ravi", car2);
var driver3 = new driver("Ramesh", car3);
driver1.drive();
driver2.drive();
driver3.drive();
