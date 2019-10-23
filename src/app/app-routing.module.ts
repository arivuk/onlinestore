import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'Home',  component: HomeComponent },
  {path:'Aboutus',  component: AboutusComponent },
  {path:'Student',  component: StudentComponent },
  {path:'',  redirectTo: '/Home',pathMatch:'full'},
  {path:'**', redirectTo: '/Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
