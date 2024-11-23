import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee:Employee = {
    sno: 'aa101',
    name: 'John',
    age: 30,
    designation: 'Tech Lead',
    doj: new Date(),
    salary:60000
  };

  constructor() { }

  public getEmployee():Employee {
    return this.employee;
  }
}
