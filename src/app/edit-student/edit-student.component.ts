import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id: number;
  name1: string;
  address1: string;
  mobile1: string;
  constructor(private actRouter: ActivatedRoute, private studservice: StudentService,private router: Router) {
    this.actRouter.params.subscribe((data) => {
      this.id = data.id;
      let stud = this.studservice.EditStudent(this.id);
      this.name1 = stud.name;
      this.address1 = stud.address;
      this.mobile1 = stud.mobile;
    });
  }

  ngOnInit() {
  }
Update(name:string,mobile:string,address:string){
  let stud=new Student();
  stud.id=this.id;
  stud.name=name;
  stud.mobile=mobile;
  stud.address=address;
  this.studservice.UpdateStudent(stud);
this.router.navigate(['/Student']);
}
}
