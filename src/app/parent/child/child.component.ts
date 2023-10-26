import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  childData : string = "Data from child component" 

  @Output() childStringData : EventEmitter<string> = new EventEmitter();

  @Input() EmployeeName !: string; //it means that this EmployeeName can receives data from the parent.
  @Input() Object : any;

  constructor(){

  }
  ngOnInit(){
    // console.log(this.EmployeeName, "EmployeeName")
    // console.log(JSON.stringify(this.Object),"This is the Object")
  }

  SendData(){
    this.childStringData.emit(this.childData)
  }
}
