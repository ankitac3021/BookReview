class NewPerson{
    firstName:string;
    lastName:string;
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

var person1:NewPerson;
person1=new NewPerson("ABC","XYZ");

// var person2=new NewPerson();
console.log(person1.getFullName());

