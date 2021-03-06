import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginComponent } from './login/login.component';
import { TextfilterPipe } from './textfilter.pipe';
import { HighlightDirective } from './highlight.directive';
import { GridExpressexComponent } from './grid-expressex/grid-expressex.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    LoginComponent,
    HighlightDirective,
    GridExpressexComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule, DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
