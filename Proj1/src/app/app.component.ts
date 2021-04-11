import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // templateUrl: './app.view.html',
  template: `<div>
            <app-employee-list></app-employee-list>

          </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  imagePath :string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
  pageHeader: string = 'Employee Details';
  firstName: string = 'Shyam';
  lastName: string = 'Kumar';
  isDisabled : boolean = true;

  onClick(){

    console.log('button clicked');
  }

  getFullName(): string {

    return this.firstName + ' ' + this.lastName;
  }
}
