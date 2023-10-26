import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  numbers : any = [1, 2, 3, 4, 5];
  oddNumbers : any = [1,3,5]
  evenNumbers : any = [2,4,6]
  onlyOdd = true;

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

  onChange(){

  }
}
