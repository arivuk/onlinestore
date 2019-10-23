import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent {
    title: string;
    constructor(){
        this.title="My Title";
    }
    Textchange(value){
        this.title=value;
    }
}
