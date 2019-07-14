function greet(name:string):string{
    return "welcome "+name+" to the world of TS";
}

console.log(greet("Sujata"));

// var returnType:number=greet("SomeName"); error
// greet(10); error
// console.log(greet("Sujata","Batra")); error
// console.log(greet()); error

function demo(a):void{
    console.log(a);
}

demo(4);
var x:void=demo("Sujata");
console.log(x);


