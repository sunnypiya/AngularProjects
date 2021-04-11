import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './emp/employee/employee.component';
import { EmployeeListComponent } from './emp/employee-list.component';
import { EmployeeTitlePipe } from './emp/employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './emp/employee-count.component';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
