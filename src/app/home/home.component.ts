import { Component, OnInit } from '@angular/core';

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

  ngOnInit(){
    console.log("This OnInit from home component")
  }
  
  sayHello(){
    return "welcome "+ this.key.name; 
  }
  
  changeServer(){
    this.server="server created"
  }
}   
