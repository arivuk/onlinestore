import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService,private router: Router) { }

  ngOnInit() {
  }
  Signin(username: string, password: string){
    this.login.Logininfo(username,password).subscribe(data=>{
      console.log("data",data);
     localStorage.setItem("Login",JSON.stringify(data));
      this.login.setLogin(username,JSON.stringify(data));
    },error=>{
      console.log("error",error);
    })
//     this.login.setLogin();
// this.router.navigate(['/Student'])
  }
}
