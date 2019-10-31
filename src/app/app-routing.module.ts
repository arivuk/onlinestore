import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginAuthGuard } from './login-auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Aboutus', component: AboutusComponent },
  { path: 'Student', component: StudentComponent, canActivate: [LoginAuthGuard] },
  { path: 'AddStudent', component: AddStudentComponent, canActivate: [LoginAuthGuard] },
  { path: 'EditStudent/:id', component: EditStudentComponent, canActivate: [LoginAuthGuard] },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  {
    path: 'User', loadChildren: () => import('./user-info/user-info.module').then(data => {
      return data.UserInfoModule
    })
  },
  { path: '**', redirectTo: '/Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
