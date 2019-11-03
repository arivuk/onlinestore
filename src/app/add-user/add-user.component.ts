import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userservice: UserService,private router: Router) { }

  ngOnInit() {
  }
  AddEmployee(id: string,name: string,age:number,salary:number){
    this.userservice.Adduser(name,age,salary).subscribe(data=>{
      console.log(data);
this.router.navigate(['/User']);
    })
  }
}
