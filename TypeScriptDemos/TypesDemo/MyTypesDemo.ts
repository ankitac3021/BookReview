//TypeScript allows type declaration

var a:number;
var b:string;
var c:boolean;
var d="Sujata";
var e:undefined;
var f:null;

e=undefined;
f=null;
// f="hi"; error

a=10;

// d=false;
console.log(d);
//Implicit type happens only when we assign var while declaring it
var g="Sujata";
//while declaring if we are not assigning variable type of variable will b 'any'
var h;



function greet():string{
    return "Welcome to greet function";
}
//Implicit type is taking place
var value=greet();


//union
var val:number|string;
val=10;
val="Hi";
// val=true; error






