import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Route, Router} from '@angular/router'
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  lstStudent: Array<Student>;
  constructor( private studservice: StudentService, private route: Router ) { }

  ngOnInit() {
    this.lstStudent=this.studservice.getStudent();
  }
  AddStudent(){
    this.route.navigate(['/AddStudent']);
  }
  Delete(id: number){
    this.studservice.DeleteStudent(id);
  }
}
