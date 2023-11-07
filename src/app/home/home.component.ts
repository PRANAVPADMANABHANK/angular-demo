import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  

  name = 'hello';
  string="";
  server="server not created"
  isDisabled : boolean = false ;
  key={
    name: "hari",
    age: 30
  }
  
  constructor(private studentService: StudentService, private router: Router){
    // console.log("home constructor")
  }
  
  sayHello(){
    return "welcome "+ this.key.name; 
  }
  
  changeServer(){
    this.server="server created"
  }
  
  studentList:any=[]
 

  ngOnInit():void{
    this.studentList = this.studentService.studentList
  }

  calculate(student:any){
    this.studentService.calculateTotal(student)
  }

  gotoContact(){
    this.router.navigate(['Contact-us'])
  }
}   
