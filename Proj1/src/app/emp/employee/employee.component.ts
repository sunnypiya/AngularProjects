import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  columnSpan : number = 2;
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;

  showDeatils:boolean=false;
  btnText :string = "Show Details";
  inputText:string = "Shyam";

  toggleDetails(): void {
    this.btnText = this.showDeatils == true ? 'Show Details':'Hide Datails';
    this.showDeatils = !this.showDeatils;
  }

}
