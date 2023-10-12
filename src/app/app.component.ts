import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstApp';
  isDisabled: boolean = true;
  msgFlag: boolean = true;
  f: boolean = true;
  superPower = 'angular';
  violet = 'violet';
  textColor = 'red';
  tax: Number = 10;

  getClass(){
    return 'c3';
  }
  contacts = [
    { firstName: 'pkyou', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'pkyou', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'pkyou', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'pkyou', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
    { firstName: 'pkyou', lastName: 'Tutorials', contactId: 1234 },
    {
      firstName: 'Mark',
      lastName: 'Hender',
      contactId: 67895,
    },
  ];
}
