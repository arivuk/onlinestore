import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lstUser:Array<any>=[];
  loading: boolean;
  constructor( private userservice: UserService) { }

  ngOnInit() {
this.getUser();
  }
  getUser(){
    this.userservice.getUser().subscribe((userinfo: any)=>{
      this.lstUser=userinfo;
    this.loading=false;
    })
  }
  Delete(id:number){
    this.loading=true;
    this.userservice.Deleteuser(id).subscribe(data=>{
      console.log(data);
      this.getUser()
    })
return false;
  }
}
