interface animal{
    type:string;
    voice():void;
}


class dog implements animal {
    name:string;
    type="carnivorous";
    constructor(){
        this.name="dog";
    }
    voice(){
        console.log("The dog barks");
    }
}

class lion implements animal {
    name:string;
    type="carnivorous";
    constructor(){
        this.name="lion";
    }
    voice(){
        console.log("The lion Roars");
    }
}

class sheep implements animal {
    name:string;
    type="herbivorous";
    constructor(){
        this.name="sheep";
    }
    voice(){
        console.log("The sheep bleets");
    }
}

class monkey implements animal {
    name:string;
    type="herbivorous";
    constructor(){
        this.name="monkey";
    }
    voice(){
        console.log("The monkey screams");
    }
}

 class zoo {
     message:string;
     ani:animal;
    constructor(message:string,ani:animal){
        this.message=message;
        this.ani=ani;
    }
    disp(){
        console.log(this.message);
        this.ani.voice();
    }

} 

var dogs=new dog();
var lions=new lion();
var sheeps= new sheep();
var monkeys=new monkey();

var animallist:animal[]=[dogs,lions,sheeps,monkeys];
var animal1=new zoo("Dog is in the zoo",animallist[0]);
var animal2=new zoo("Lion is in the zoo",animallist[1]);
var animal3=new zoo("Sheep is in the zoo",animallist[2]);
var animal4=new zoo("Monkey is in the zoo",animallist[3]);
animal1.disp();
animal2.disp();
animal3.disp();
animal4.disp();