import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  lstUser: Array<any> = [];
  dummyUser: Array<any> = [];
 
  loading: boolean;
  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userservice.getUser().subscribe((userinfo: any) => {
      //userinfo=userinfo.sort(function(a, b){return b.id-a.id});
      //this.lstUser=userinfo;

      let userdata = [];
      for (let i = userinfo.length - 1; i >= 0; i--) {
        userdata.push(userinfo[i]);
      }
      this.lstUser = userdata;
     this.dummyUser=this.lstUser;
      this.loading = false;
    })
  }
  Delete(id: number) {
    this.loading = true;
    this.userservice.Deleteuser(id).subscribe(data => {
      console.log(data);
      this.getUser()
    })
    return false;
  }
  compare(a, b,sortingfield) { 
    if (a[sortingfield] < b[sortingfield]) 
        return -1; 
    if (a[sortingfield] > b[sortingfield]) 
        return 1; 
    return 0; 
} 
  sort(sortingname:string){
    console.log("sorting name",sortingname)
    //let comp=this.compare;
    // this.lstUser=this.lstUser.sort(function(a,b){
    //   return comp(a,b,sortingname)
    // })

    this.lstUser=this.lstUser.sort((a,b)=>{
      return this.compare(a,b,sortingname)
    })
  }

  // filter(searchtext: string){
  //   console.log("searchtext",searchtext);
    
  //   this.lstUser=this.dummyUser.filter(a=>{
  //     return a.employee_name.startsWith(searchtext)
  //   })
  // }
}
