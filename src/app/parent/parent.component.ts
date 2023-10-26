import { Component, Output, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import {ChangeDetectorRef} from '@angular/core';

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

  constructor(private cd: ChangeDetectorRef){

  }

  ngAfterViewInit(): void {
    this.message = this.child.childData;
    this.cd.detectChanges()
    console.log(this.child.childData, "childData received");
    
  }
  
  ngOnInit(){
    // console.log(this.child.childData, "child Data received in the parent component")
  }

  ReceiveData(event: string){
    console.log(event,"event got")
    this.childDataReceived = event
  }
}
