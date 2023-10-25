import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  

  @Input() EmployeeName !: string; //it means that this EmployeeName can receives data from the parent.
  @Input() Object : any;

  constructor(){

  }
  ngOnInit(){
    console.log(this.EmployeeName, "EmployeeName")
    console.log(JSON.stringify(this.Object),"This is the Object")
  }
}
