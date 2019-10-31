import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userid: number;
  userinfo: any;
  constructor(private actRouter: ActivatedRoute, private user: UserService) {
    this.actRouter.params.subscribe((data) => {
      this.userid=data.id;
      this.user.getsingleUser(this.userid).subscribe((data:any)=>{
        this.userinfo=data.data;
      });
    });
  }

  ngOnInit() {
  }

}
