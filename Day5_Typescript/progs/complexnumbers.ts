class complexFcn{
    private realPart:number;
    private imaginary:number;
    constructor(realPart:number,imaginary:number){
        this.realPart=realPart;
        this.imaginary=imaginary;
    }
    sum(num1: complexFcn,num2: complexFcn):string{
        this.realPart=num1.realPart+num2.realPart;
        this.imaginary=num1.imaginary+num2.imaginary;
        return this.realPart+"+"+this.imaginary+"i";
    }
}

var num1=new complexFcn(10,20);
var num2=new complexFcn(30,55);
var num3=new complexFcn(0,0);
console.log(num3.sum(num1,num2));