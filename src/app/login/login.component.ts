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
  Signin(){
    this.login.setLogin();
this.router.navigate(['/Student'])
  }
}
