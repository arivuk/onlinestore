import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('https://reqres.in/api/users');
  }

  getsingleUser(id: number){
    return this.http.get('https://reqres.in/api/users/'+id);
  }
}
