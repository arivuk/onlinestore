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
    firststudent.id=1;
    firststudent.name="Ramu";
    firststudent.address="A.Koil";
    firststudent.mobile="97787";
    this.lstStudenet.push(firststudent);
   }
   getStudent(){
     return this.lstStudenet;
   }
}
