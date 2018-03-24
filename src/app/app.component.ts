import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>My favorite employee is: {{myEmployee.first_name}}</h2>
  <p>Employees:</p>
  <div *ngIf = "employees!= '' || undefined || null">
  <ul>
    <li *ngFor="let employee of employees">
      {{ employee.first_name }}
      </li>
  </ul>
  <p *ngIf="employees.length > 3">There are many employees!</p>
  </div>
`
})
export class AppComponent implements OnInit{
  title = 'List of Employees';
  public employees;
  public myEmployee: string;
  // employees = [
  //   new Employee(1, 'Sundeep', 'Kotari', 'sundeep.kotari78@gmail.com'),
  //   new Employee(1, 'Sundeep', 'Kotari', 'sundeep.kotari78@gmail.com'),
  //   new Employee(1, 'Sundeep', 'Kotari', 'sundeep.kotari78@gmail.com'),
  //   new Employee(1, 'Sundeep', 'Kotari', 'sundeep.kotari78@gmail.com')
  // ];
  constructor(private _appService: AppService) {

  }
    ngOnInit() {
    this.getData();
  }
 
   getData() {
    this._appService.getEmployees().subscribe(
       data => { this.employees = data;this.myEmployee = this.employees[0];},
       err => console.error(err),
       () => console.log('done loading data')
     );
   }
}
