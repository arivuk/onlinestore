import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  lstStudent: Array<Student>;
  constructor( private studservice: StudentService ) { }

  ngOnInit() {
    this.lstStudent=this.studservice.getStudent();
  }
  AddStudent(){
    
  }

}
