class MyPerson{
    firstName:string;
    lastName:string;
    getFullName():string{
        return this.firstName+this.lastName;
    }
}

var person1:MyPerson;
person1=new MyPerson();
person1.firstName="Sujata";
console.log(person1.getFullName());

