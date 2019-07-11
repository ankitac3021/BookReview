function Employee(fname,lname){
        this.firstName=fname;
        this.lastName=lname;
        this.greet=function(){
                console.log("Welcome "+this.firstName+" "+this.lastName);
        }
}

var eobj1=new Employee("AA","BB");
console.log(eobj1);

var eobj2=new Employee("CC","DD");
console.log(eobj2);
