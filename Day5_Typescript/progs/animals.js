var dog = /** @class */ (function () {
    function dog() {
        this.type = "carnivorous";
        this.name = "dog";
    }
    dog.prototype.voice = function () {
        console.log("The dog barks");
    };
    return dog;
}());
var lion = /** @class */ (function () {
    function lion() {
        this.type = "carnivorous";
        this.name = "lion";
    }
    lion.prototype.voice = function () {
        console.log("The lion Roars");
    };
    return lion;
}());
var sheep = /** @class */ (function () {
    function sheep() {
        this.type = "herbivorous";
        this.name = "sheep";
    }
    sheep.prototype.voice = function () {
        console.log("The sheep bleets");
    };
    return sheep;
}());
var monkey = /** @class */ (function () {
    function monkey() {
        this.type = "herbivorous";
        this.name = "monkey";
    }
    monkey.prototype.voice = function () {
        console.log("The monkey screams");
    };
    return monkey;
}());
var zoo = /** @class */ (function () {
    function zoo(message, ani) {
        this.message = message;
        this.ani = ani;
    }
    zoo.prototype.disp = function () {
        console.log(this.message);
        this.ani.voice();
    };
    return zoo;
}());
var dogs = new dog();
var lions = new lion();
var sheeps = new sheep();
var monkeys = new monkey();
var animallist = [dogs, lions, sheeps, monkeys];
var animal1 = new zoo("Dog is in the zoo", animallist[0]);
var animal2 = new zoo("Lion is in the zoo", animallist[1]);
var animal3 = new zoo("Sheep is in the zoo", animallist[2]);
var animal4 = new zoo("Monkey is in the zoo", animallist[3]);
animal1.disp();
animal2.disp();
animal3.disp();
animal4.disp();
