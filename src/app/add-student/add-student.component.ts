import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Route, Router} from '@angular/router'
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studservice: StudentService,private route: Router) { }

  ngOnInit() {
  }
  Add(id: number, name: string, mobile: string, address: string){
    let stud=new Student();
    stud.id=id;
    stud.name=name;
    stud.mobile=mobile;
    stud.address=address;
    this.studservice.AddStudent(stud);
    this.route.navigate(['/Student']);
  }
  Cancel(){
    this.route.navigate(['/Student']);
  }
}
