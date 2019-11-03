import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { TextfilterPipe } from '../textfilter.pipe';



@NgModule({
  declarations: [ UserComponent, AddUserComponent, EditUserComponent,TextfilterPipe ],
  imports: [
    CommonModule, UserRoutingModule, FormsModule
  ]
})
export class UserInfoModule { }
