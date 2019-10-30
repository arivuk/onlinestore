import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lstUser:Array<any>=[];
  constructor( private userservice: UserService) { }

  ngOnInit() {
this.userservice.getUser().subscribe((userinfo: any)=>{
  this.lstUser=userinfo["data"];
})
  }

}
