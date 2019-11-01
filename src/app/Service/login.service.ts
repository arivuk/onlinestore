import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatus: boolean;
  loginInformation: any;
  constructor(private http: HttpClient) {
    let userst=localStorage.getItem("Login");
    console.log(userst);
    let status='';
    if(!!userst){
      status=JSON.parse(userst);
    } 
    this.loginInformation={loginStatus: !!status}
  }
  Logininfo(username:string,password:string){
    console.log(username);
    console.log(password);
    return this.http.post('https://reqres.in/api/login', {'email': username,'password':password})
  }

  setLogin(username: string, status:string){
     let statu=JSON.parse(status);
    this.loginInformation={ username :username,emailid:"arivu@green.com",loginStatus: !!statu};
  }

  getLogin(){
    return this.loginInformation;
  }
}
