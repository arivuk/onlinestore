import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userid: number;
  userinfo: any;
  constructor(private actRouter: ActivatedRoute, private user: UserService,private route: Router) {
    this.actRouter.params.subscribe((data) => {
      this.userid=data.id;
      this.user.getsingleUser(this.userid).subscribe((data:any)=>{
        this.userinfo=data;
      },(error)=>{
        if(error.status==404){
          alert("User doest not exists");

        }
        })
    });
  }

  ngOnInit() {
  }
  Update(name:string,age:number,salary:number){
this.user.updateuser(this.userid,name,age,salary).subscribe((data)=>{
  console.log(data);
  this.route.navigate(['/User']);
})
  }
}
