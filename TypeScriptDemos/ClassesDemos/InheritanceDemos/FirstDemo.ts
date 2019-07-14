class Person{
    firstName:string;
    lastName:string;


    displayPersonDetails(){
        console.log("FirstName : "+this.firstName);
        console.log("Last Name : "+this.lastName);
    }
}

class Employee extends Person{
    department:string;
    displayAllDetails(){
        super.displayPersonDetails();
        console.log("Department : "+this.department);
    }
}

var emp=new Employee();
emp.firstName="AAA";
emp.lastName="BBB";
emp.department="Sales";
emp.displayAllDetails();
console.log("============");
emp.displayPersonDetails();
