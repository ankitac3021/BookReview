class Student{
    private rollNo:number;
    private name:string;

    inputStudentDetails(rollNo:number,name:string):void{
        this.rollNo=rollNo;
        this.name=name;
    }
    displayStudentDetails():void{
        console.log("Roll No : "+this.rollNo);
        console.log("Student Name : "+this.name);
    }
}

class Marks extends Student{
    protected marks1:number;
    protected marks2:number;
    protected marks3:number;

    inputStudentMarks(marks1:number,marks2:number,marks3:number){
        this.marks1=marks1;
        this.marks2=marks2;
        this.marks3=marks3;
    }
    displayAllDetails(){
        console.log("Marks 1 : "+this.marks1);
        console.log("Marks 2 : "+this.marks2);
        console.log("Marks 3 : "+this.marks3);
    }
}

class Grade extends Marks{
    private grade:string;
    calculateGrade(){
        if((this.marks1+this.marks2+this.marks3)/3>75)
            this.grade="A Grade";
        else
            this.grade="B Grade";
    }
    displayGradeWiseStudentDetails(){
        super.displayStudentDetails();
        super.displayAllDetails();
        console.log("Grade : "+this.grade);
    }
}
var ram=new Marks();
ram.inputStudentDetails(101,"Ram");
ram.inputStudentMarks(55,66,77);
ram.displayStudentDetails();
ram.displayAllDetails();
console.log("============");

var stud=new Grade();
stud.inputStudentDetails(111,"BBBB");
stud.inputStudentMarks(66,77,99);
stud.calculateGrade();
stud.displayGradeWiseStudentDetails();
