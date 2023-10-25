import { Component, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {



  childDataReceived !: string;
  message : string = ""

  @ViewChild(ChildComponent) child !: ChildComponent;

  Ename: string = "Hari Kalathingal" 
  Obj = {
    name: "Rishad",
    age : 24,
    place : "Kannur"
  }

  ngAfterViewInit(): void {
    this.message = this.child.childData;
    console.log(this.child.childData,"this.child.childData");
    
  }
  
  ngOnInit(){

  }

  ReceiveData(event: string){
    console.log(event,"event got")
    this.childDataReceived = event
  }
}
