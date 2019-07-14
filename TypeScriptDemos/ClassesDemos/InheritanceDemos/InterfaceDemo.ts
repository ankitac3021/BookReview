interface Shape{
    area():void;
}

class Circle implements Shape{
    constructor(private radius:number){

    }
    area():void{
        console.log(Math.PI*this.radius**2);
    }
}

var ob:Shape=new Circle(8);
ob.area();
