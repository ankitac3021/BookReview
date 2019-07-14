class OurPerson{
    private firstName:string;
    private lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    // constructor(){
    //     this.firstName="";
    //     this.lastName="";
    // }
    getFullName():string{
        return this.firstName+this.lastName;
    }
}

var person1:OurPerson;
person1=new OurPerson("Sujata","Batra");
// console.log(person1.firstName);
// var person2=new NewPerson();
console.log(person1.getFullName());

