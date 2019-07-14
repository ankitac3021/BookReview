class NextPerson{

    constructor(private firstName:string,private lastName:string,public technology:string)
    {
    }
   
    getFullName():string{
        return this.firstName+this.lastName;
    }
}

var person1:NextPerson;
person1=new NextPerson("Sujata","Batra","TypeScript");


console.log(person1.getFullName());

