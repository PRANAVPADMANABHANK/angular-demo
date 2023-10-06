import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name = 'pranav';
  isDisabled : boolean = false ;
  key={
    name: "hari",
    age: 30
  }
  sayHello(){
    return "welcome "+ this.key.name; 
  }
}   
