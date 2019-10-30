import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private lstStudenet: Array<Student>=[];
  constructor() {
    let firststudent=new Student();
    firststudent.id=1;
    firststudent.name="Arivu";
    firststudent.address="Chennai";
    firststudent.mobile="245454";
    this.lstStudenet.push(firststudent);
    let secondstudent=new Student();
    secondstudent.id=2;
    secondstudent.name="Manu";
    secondstudent.address="Chennai";
    secondstudent.mobile="2587";
    this.lstStudenet.push(secondstudent);
    firststudent=new Student();
    firststudent.id=3;
    firststudent.name="Kalai";
    firststudent.address="Ramnad";
    firststudent.mobile="24585";
    this.lstStudenet.push(firststudent);
    firststudent=new Student();
    firststudent.id=4;
    firststudent.name="Ramu";
    firststudent.address="A.Koil";
    firststudent.mobile="97787";
    this.lstStudenet.push(firststudent);
   }
   getStudent(){
     return this.lstStudenet;
   }
   
   EditStudent(id: number) : Student{
    let stud= this.lstStudenet.filter(item=>{
      return item.id==id;
    })
    return stud[0];
  }
  UpdateStudent(student: Student){
    let stud= this.lstStudenet.filter(item=>{
      return item.id==student.id;
    })
    stud[0].name=student.name;
    stud[0].mobile=student.mobile;
    stud[0].address=student.address;
  }
   AddStudent(student: Student){
     this.lstStudenet.push(student);
   }
   
   DeleteStudent(id: number){
     let item=this.lstStudenet.filter(item=>{
       return item.id==id
     })
     console.log(item);
     var k="arivu";
     console.log(this.lstStudenet.indexOf(item[0]));
     this.lstStudenet.splice(this.lstStudenet.indexOf(item[0]),1)
    //this.lstStudenet.push(student);
  }
}
