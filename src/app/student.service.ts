import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    studentList=[
      {id: 1, name: 'Anas', mark1: 40, mark2: 50, mark3: 60},
      {id: 2, name: 'sharath', mark1: 70, mark2: 86, mark3: 94},
      {id: 3, name: 'Athira', mark1: 40, mark2: 80, mark3: 32},
      {id: 4, name: 'Afsal', mark1: 50, mark2: 40, mark3: 50},
      {id: 5, name: 'Veena', mark1: 52, mark2: 52, mark3: 75},
    ]

    calculateTotal(){
      alert("hoooi")
    }
    
  constructor() { }
}
