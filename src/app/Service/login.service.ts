import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatus: boolean;
  loginInformation: any;
  constructor() { 
    this.loginInformation={loginStatus:false}
  }

  setLogin(){
    this.loginInformation={ username :' Arivu',emailid:"arivu@green.com",loginStatus: true};
  }

  getLogin(){
    return this.loginInformation;
  }
}
