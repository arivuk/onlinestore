import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  getsingleUser(id: number){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employee/'+id);
  }

  updateuser(id:number,name:string,age:number,salary:number){
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/'+id,JSON.stringify({name:name,age:age,salary:salary}))
  }
  Adduser(name:string,age:number,salary:number){
    return this.http.post('http://dummy.restapiexample.com/api/v1/create',JSON.stringify({name:name,age:age,salary:salary}))
  }
  Deleteuser(id:number){
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id)
  }
}
