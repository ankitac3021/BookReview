class Demo{
    readonly name:string;
    constructor(name:string){
        this.name=name;
    }
    disp(){
        console.log("Hi "+this.name);
    }
}

//var a=new Demo("Ankita");
//a.disp();
//a.name="bye"; gives error