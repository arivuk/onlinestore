import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';



@NgModule({
  declarations: [ UserComponent, AddUserComponent, EditUserComponent ],
  imports: [
    CommonModule, UserRoutingModule
  ]
})
export class UserInfoModule { }
