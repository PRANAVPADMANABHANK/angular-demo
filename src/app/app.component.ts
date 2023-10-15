import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firstApp';
  isDisabled: boolean = true;
  msgFlag: boolean = true;
  f: boolean = true;
  superPower = 'angular';
  violet = 'violet';
  textColor = 'red';
  tax: Number = 10;

  inputVal: String = ''
  toDestroy : boolean=false;
 

  DestroyComponent(){
    this.toDestroy = !this.toDestroy;
  }

  onBtnClicked(inputEl: HTMLInputElement){
    this.inputVal = inputEl.value;
  }
  

  ngOnInit(){
    console.log("I am from onInit of app.component")
  }

  getClass(){
    return 'c3';
  }

  constructor(){
    console.log("app constructor")
  }
  studentList=[
    {id: 1, name: 'Anas', mark1: 40, mark2: 50, mark3: 60},
    {id: 2, name: 'sharath', mark1: 70, mark2: 86, mark3: 94},
    {id: 3, name: 'Athira', mark1: 40, mark2: 80, mark3: 32},
    {id: 4, name: 'Afsal', mark1: 50, mark2: 40, mark3: 50},
    {id: 5, name: 'Veena', mark1: 52, mark2: 52, mark3: 75},
  ]
  
  calculateTotal(){
  }



  contacts = [
    { firstName: 'Luiz Parker', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'Luiz Parker', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'Luiz Parker', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'Luiz Parker', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'Luiz Parker', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
  ];
}
