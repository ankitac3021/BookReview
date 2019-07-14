class PopCorn{
    pop():void{
        console.log("Popcorn popping");
    }
    dummy():void{
        console.log("Popcorn dummy function");
    }
}

class ButterPopCorn extends PopCorn{
    pop():void{
        console.log("Yummy Butter Popcorn popping");
    }
    quantity(ounce:number):void{
        console.log(ounce+" ounces of butter added");
    }
}

class CaramelPopCorn extends PopCorn{
    pop():void{
        console.log("Hot and sizzling Caramel Popcorn popping");
    }
}

var popcorn:PopCorn;

popcorn=new ButterPopCorn();
popcorn.pop();
popcorn.dummy();
// popcorn.quantity(3);
// var bPopCorn:ButterPopCorn;

popcorn=new CaramelPopCorn();
popcorn.pop();

popcorn=new PopCorn();
popcorn.pop();
