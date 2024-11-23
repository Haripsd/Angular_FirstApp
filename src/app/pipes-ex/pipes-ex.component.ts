import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrl: './pipes-ex.component.css'
})
export class PipesExComponent {

  public employee:Employee = {} as Employee;

  constructor(private employeeService:EmployeeService) {

  }

  ngOnInit() {
  this.employee = this.employeeService.getEmployee();
  }

}
