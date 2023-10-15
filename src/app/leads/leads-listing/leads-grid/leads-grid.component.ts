import { Component } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-leads-grid',
  templateUrl: './leads-grid.component.html',
  styleUrls: ['./leads-grid.component.css']
})
export class LeadsGridComponent {

  constructor(public studentService: StudentService){}
}
