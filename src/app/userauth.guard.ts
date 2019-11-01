import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './Service/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivateChild {
  constructor(private loginservice: LoginService,private router: Router){

  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginservice.getLogin().loginStatus)
      return true;
    else{
      this.router.navigate(['/Login'])
    }
  }
  
}
