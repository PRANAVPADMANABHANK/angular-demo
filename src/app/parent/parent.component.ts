import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  Ename: string = "Hari Kalathingal" 
  Obj = {
    name: "Rishad",
    age : 24,
    place : "Kannur"
  }

  ngOnInit(){
    
  }
}
